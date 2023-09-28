import * as sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const EmailService = {};

EmailService.send = (msg) => {
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

const sendStockNotificationEmail = async (req, res) => {
  const { product, recipients } = req.body;

  console.log("hello from email");

  let message = `Hello! Just letting you know, as per your request, 
                that ${product} is back in stock at Mike's Natural Soaps. Thanks!`;
  const options = {
    from: "mike@mikesnaturalsoaps.com",
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

  EmailService.send(options, true);

  res.status(200).send();
};

export default sendStockNotificationEmail;
