import React from "react";
import styles from "./CartButton.module.css";
import { MdShoppingCart } from "react-icons/md";
import { useContext, useState, useEffect } from "react";
import CartContext from "../store/cart-context";
import { useRouter } from "next/router";

const CartButton = (props) => {
  const [btnAnimated, setBtnAnimated] = useState(false);
  const [rerender, setRerender] = useState(false);
  const cartCtx = useContext(CartContext);
  const router = useRouter();

  const { items } = cartCtx;

  let numberOfItems = items.reduce((total, item) => {
    return Number(total) + Number(item.quantity);
  }, 0);

  const buttonClasses = `${styles.cart} ${btnAnimated ? styles.bump : ""}`;
  const badgeClasses = `${
    numberOfItems === 0 ? styles["badge-empty"] : styles["badge-full"]
  }`;

  //cause re-render on confirmation page to clear cart
  useEffect(() => {
    console.log(router.pathname);
    if (router.pathname === "/confirmation") {
      setRerender(true);
      console.log("render");
    }
  }, [router.pathname]);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnAnimated(true);
    const timer = setTimeout(() => {
      setBtnAnimated(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <div className={buttonClasses} onClick={props.onClick}>
      <MdShoppingCart />
      <span className={badgeClasses}>{numberOfItems}</span>
    </div>
  );
};

export default CartButton;
