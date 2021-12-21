const fs = require("fs");
const products = require("../../products.json");

export default async function handler(req, res) {
  const { items } = req.body;

  items = JSON.parse(items);

  console.log(items);

  let products = fs.readFileSync("./products.json");
  products = JSON.parse(products);

  items.forEach((item) => {
    let updated;
    if (item.id.includes("SSJ")) {
      updated = products.jars.filter((jar) => jar.id === item.id)[0];
    } else if (item.id.includes("SSP")) {
      updated = products.pucks.filter((jar) => jar.id === item.id)[0];
    }
    updated.inStock -= item.quantity;
    fs.writeFileSync("./products.json", JSON.stringify({ ...products }));
  });

  return res.status(200).send();
}
