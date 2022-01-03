import styles from "./Cart.module.css";
import { useState, useContext, useEffect } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import Modal from "./UI/Modal";
import { useRouter } from "next/router";
import Link from "next/link";
import Heading from "./Heading";
import axios from "axios";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const router = useRouter();

  const [error, setError] = useState("");
  const [errorId, setErrorId] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    try {
      let host =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : "https://mikesnaturalsoaps.com";
      const products = await axios(`${host}/api/products`);
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onChangeQuantity = (event, item) => {
    setError(false);
    const itemIndex = cartCtx.items.findIndex(
      (ctxItem) => ctxItem.id === item.id
    );

    let amountInStock;
    if (item.type === "jar") {
      const jars = products.data.products.filter(
        (product) => product.type === "jar"
      );
      amountInStock = jars.filter((jar) => jar._id === item.id)[0].inStock;
    } else if (item.type === "puck") {
      const pucks = products.data.products.filter(
        (product) => product.type === "puck"
      );
      amountInStock = pucks.filter((puck) => puck.id === item.id)[0].inStock;
    }

    if (item.quantity > amountInStock) {
      setError(
        `Only ${amountInStock} of this item availble. Please enter ${amountInStock} or fewer.`
      );
      setErrorId(item.id);
      return;
    }

    if (item.quantity > cartCtx.items[itemIndex].quantity) {
      cartCtx.addItem(event, { ...item, quantity: item.quantity });
    } else if (!item.quantity) {
      return;
    } else {
      cartCtx.removeItem(item);
    }
  };

  const onBlurHandler = (event, item) => {
    if (event.target.value === "" || event.target.value === "0") {
      cartCtx.removeItem(item);
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <Heading>Your Cart</Heading>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={Math.random()}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            type={item.type}
            onChange={onChangeQuantity}
            onBlur={onBlurHandler}
            error={error}
            errorId={errorId}
          />
        );
      })}
      <div className={styles["cart-footer"]}>
        <div className={styles.total}>${cartCtx.total.toFixed(2)}</div>
        <div>
          <button onClick={props.onClose} className={styles.close}>
            Close
          </button>
          {router.pathname === "/checkout" ? null : (
            <Link href="/checkout">
              <button
                className={styles.checkout}
                onClick={() => {
                  props.onClose();
                  props.showSpinner();
                }}
              >
                Checkout
              </button>
            </Link>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
