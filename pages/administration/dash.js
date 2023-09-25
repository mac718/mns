import connectDB from "../../middleware/mongodb";
import Product from "../../models/product";

const Dash = ({ products }) => {
  const options = products.map((product) => (
    <option>{`${product.scent} ${product.type}`}</option>
  ));
  return <select>{options}</select>;
};

export default Dash;

export async function getServerSideProps(context) {
  const fetchProducts = connectDB(async () => {
    const products = await Product.find();
    return products;
  });

  const products = await fetchProducts();

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}
