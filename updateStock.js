import fs from "fs";

export default function updateStock(order) {
  let products = fs.readFileSync("./products.json");
  products = JSON.parse(products);

  order.forEach((item) => {
    let updated;
    if (item.id.includes("SSJ")) {
      updated = products.jars.filter((jar) => jar.id === item.id)[0];
    } else if (item.id.includes("SSP")) {
      updated = products.pucks.filter((jar) => jar.id === item.id)[0];
    }
    updated.inStock -= item.quantity;
    fs.writeFileSync("./products.json", JSON.stringify({ ...products }));
  });
}
