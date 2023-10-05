import connectDB from "../../middleware/mongodb";
import Product from "../../models/product";
import styles from "./Dash.module.css";
import { getSession } from "next-auth/react";
import axios from "axios";
import { useState, useRef, useEffect } from "react";

const Dash = ({ products }) => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(
    product
      ? products.filter((prod) => `${prod.scent} ${prod.type}` === product)[0]
          .inStock
      : 0
  );
  const [success, setSuccess] = useState(false);

  const optionChangeHandler = (event) => {
    console.log(product);
    setProduct(event.target.value);
  };

  const updateStockHandler = async (event) => {
    console.log("derp");
    event.preventDefault();
    try {
      await axios.patch("/api/stock-notifications/modifyStock", {
        product,
        quantity,
      });
      setSuccess(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setQuantity(
      product
        ? products.filter((prod) => `${prod.scent} ${prod.type}` === product)[0]
            .inStock
        : 0
    );
  }, [product]);

  const options = products.map((product) => (
    <option
      key={`${product.scent} ${product.type}`}
      value={`${product.scent} ${product.type}`}
    >{`${product.scent} ${product.type}`}</option>
  ));

  return (
    // <main className={styles.main}>
    //   <select onChange={optionChangeHandler}>{options}</select>
    //   <div
    //     className={styles["change-quantity"]}
    //     onClick={() => setQuantity((prev) => prev - 1)}
    //   >
    //     -
    //   </div>
    //   <input type="number" defaultValue={quantity} />
    //   {success && <div>update successful</div>}
    //   <div
    //     className={styles["change-quantity"]}
    //     onClick={() => setQuantity((prev) => prev + 1)}
    //   >
    //     +
    //   </div>
    //   <button onClick={updateStockHandler}>update</button>
    // </main>
    <div>hi</div>
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
