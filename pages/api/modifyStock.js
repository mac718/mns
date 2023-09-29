import axios from "axios";
import connectDB from "../../middleware/mongodb";
import Product from "../../models/product";
import * as sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const EmailService = {};

EmailService.send = (msg) => {
  sgMail
    .sendMultiple(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

const sendStockNotificationEmail = async (product, recipients) => {
  console.log("hello from email", recipients);

  let message = `Hello! Just letting you know, as per your request, 
                that ${product} is back in stock at Mike's Natural Soaps. Thanks!`;
  const options = {
    from: { email: "mike@mikesnaturalsoaps.com", name: "Mike's Natural Soaps" },
    to: recipients,
    subject: `Mike's Natural Soaps - ${product} is back in stock.`,
    text: message,
    html: `<p>Hello!
    
    Just letting you know, as per your request, that ${product} is back in stock at
     <a href='https://www.mikesnaturalsoaps.com'>Mike's Natural Soaps</a>.

    Thanks!
    Mike
    </p>`,
  };

  EmailService.send(options);
};

export const modifyStock = async (req, res, next) => {
  const { product, quantity } = req.body;

  const productTerms = product.split(" ");
  const productType = productTerms[productTerms.length - 1];
  const productScent = productTerms.slice(0, productTerms.length - 1).join(" ");

  let exisitingProduct = await Product.find({
    scent: productScent,
    type: productType,
  });

  exisitingProduct = exisitingProduct[0];

  console.log(exisitingProduct);

  const originalInStock = exisitingProduct.inStock;

  exisitingProduct.inStock = quantity;

  try {
    await exisitingProduct.save();
    if (originalInStock === 0) {
      try {
        await sendStockNotificationEmail(
          product,
          exisitingProduct.notificationList
        );
      } catch (err) {
        console.log(err);
      }
    }
    res.status(200).send();
  } catch (err) {
    res.status(500).json(err);
  }
};

export default connectDB(modifyStock);
