import CheckoutSummary from "../components/Checkout/CheckoutSummary";
import CheckoutButtons from "../components/Checkout/CheckoutButtons";
import styles from "./shaving_products.module.css";
import React, { useState, useEffect, useContext } from "react";
import CartContext from "../store/cart-context";

export default function Checkout(props) {
  const cartCtx = useContext(CartContext);
  const [zip, setZip] = useState("");
  const [shippingService, setShippingService] = useState([0, ""]);
  const [serviceSelected, setServiceSelected] = useState(false);

  const onEnterZip = (enteredZip) => {
    setZip(enteredZip);
  };

  const onShippingServiceSelect = (service) => {
    setShippingService(service.split(","));
    setServiceSelected(true);
  };

  useEffect(() => {
    localStorage.setItem("shipping", shippingService);
  }, [shippingService]);

  useEffect(() => {
    setServiceSelected(false);
  }, [cartCtx.items]);

  return (
    <>
      <CheckoutSummary
        onEnterZip={onEnterZip}
        onShow={props.onShow}
        onShippingServiceSelect={onShippingServiceSelect}
        shippingService={shippingService}
      />
      <div className={styles["checkout-buttons"]}>
        {serviceSelected && (
          <CheckoutButtons zip={zip} shippingService={shippingService} />
        )}
      </div>
    </>
  );
}
