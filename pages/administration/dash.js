import connectDB from "../../middleware/mongodb";
import Product from "../../models/product";
import styles from "./Dash.module.css";
import { getSession } from "next-auth/react";

const Dash = ({ products }) => {
  const options = products.map((product) => (
    <option>{`${product.scent} ${product.type}`}</option>
  ));
  return (
    <main className={styles.main}>
      <select>{options}</select>
    </main>
  );
};

export default Dash;

export async function getServerSideProps(context) {
  const fetchProducts = connectDB(async () => {
    const products = await Product.find();
    return products;
  });

  const products = await fetchProducts();

  const { req } = context;
  const session = await getSession({ req });

  console.log("session", session);

  if (!session || !session.user._doc.isAdmin) {
    return {
      redirect: { destination: "/auth/signin" },
    };
  }

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}
