import connectDB from "../middleware/mongodb";
import Product from "../models/product";

export const orderProductList = async (type) => {
  const fetchInStockProducts = connectDB(async () => {
    const products = await Product.find({
      type: type,
      inStock: { $gte: 1 },
      archived: false,
    });
    return products;
  });

  const fetchOutOfStockProducts = connectDB(async () => {
    const products = await Product.find({
      type: type,
      inStock: { $lte: 0 },
      archived: false,
    });
    return products;
  });

  const inStockProducts = await fetchInStockProducts();
  const outOfStockProducts = await fetchOutOfStockProducts();

  inStockProducts.sort((a, b) => {
    if (a.scent < b.scent) {
      return -1;
    } else if (a.scent > b.scent) {
      return 1;
    } else {
      return 0;
    }
  });

  outOfStockProducts.sort((a, b) => {
    if (a.scent < b.scent) {
      return -1;
    } else if (a.scent > b.scent) {
      return 1;
    } else {
      return 0;
    }
  });

  return [inStockProducts, outOfStockProducts];
};
