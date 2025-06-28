import connectDB from "../../middleware/mongodb";
import Product from "../../models/product";
import styles from "./Dash.module.css";
import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import axios from "axios";
import { useState, useEffect } from "react";
import * as jwt from "jsonwebtoken";

const Dash = ({ products, token }) => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(
    product
      ? products.filter((prod) => `${prod.scent} ${prod.type}` === product)[0]
          .inStock
      : 0
  );
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const optionChangeHandler = (event) => {
    setProduct(event.target.value);
    setSuccess(false);
  };

  const updateStockHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.patch("/api/modifyStock", {
        product,
        quantity,
        token,
      });
      setSuccess(true);
    } catch (err) {
      setError(true);
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
  }, [product, products]);

  const options = products.map((product) => (
    <option
      key={`${product.scent} ${product.type}`}
      value={`${product.scent} ${product.type}`}
    >{`${product.scent} ${product.type}`}</option>
  ));

  return (
    <>
      <main className={styles.main}>
        <select onChange={optionChangeHandler}>{options}</select>
        <div
          className={styles["change-quantity"]}
          onClick={() => setQuantity((prev) => prev - 1)}
        >
          -
        </div>
        <input
          type="number"
          value={quantity}
          onChange={(event) => {
            setQuantity(event.target.value);
          }}
        />

        <div
          className={styles["change-quantity"]}
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </div>
        <button onClick={updateStockHandler}>update</button>
      </main>
      {success && <div className={styles.success}>update successful</div>}
      {error && <div className={styles.error}>something went wrong</div>}
    </>
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
  console.log("reqer", req);
  const session = await getToken({ req, secret: process.env.NextAuth_SECRET });
  console.log("aession", session);

  if (!session || !session.jwt) {
    console.log("what?");
    return {
      redirect: { destination: "/auth/signin" },
    };
  }

  let verified;
  if (session && session.jwt) {
    try {
      verified = jwt.verify(session.jwt, process.env.JWT_SECRET);
    } catch (err) {
      console.log(err);
      return {
        redirect: { destination: "/auth/signin" },
      };
    }
  }

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      token: session.jwt,
    },
  };
}
