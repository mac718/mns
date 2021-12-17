import fs from "fs";

export default function updateStock(order) {
  let products = fs.readFileSync("./products.json");
  products = JSON.parse(products);

  order.forEach((item) => {
    if (item.id.includes("SSJ")) {
      let updated = products.jars.filter((jar) => jar.id === item.id)[0];
      console.log(updated, item.quantity);
      updated.inStock -= item.quantity;
      fs.writeFileSync("./products.json", JSON.stringify({ ...products }));
    } else if (item.id.includes("SSP")) {
      let updated = products.pucks.filter((jar) => jar.id === item.id)[0];
      console.log(updated, item.quantity);
      updated.inStock -= item.quantity;
      fs.writeFileSync("./products.json", JSON.stringify({ ...products }));
    }
  });
}
