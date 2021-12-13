import CheckoutSummary from "../components/Checkout/CheckoutSummary";
import CheckoutButtons from "../components/Checkout/CheckoutButtons";
import styles from "./shaving_products.module.css";
import React, { useState } from "react";

export default function Checkout(props) {
  const [zip, setZip] = useState("");

  const onEnterZip = (enteredZip) => {
    setZip(enteredZip);
  };
  return (
    <>
      <CheckoutSummary onEnterZip={onEnterZip} onShow={props.onShow} />
      <div className={styles["checkout-buttons"]}>
        <CheckoutButtons zip={zip} />
      </div>
    </>
  );
}
