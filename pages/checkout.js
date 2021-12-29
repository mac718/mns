import CheckoutSummary from "../components/Checkout/CheckoutSummary";
import CheckoutButtons from "../components/Checkout/CheckoutButtons";
import styles from "./shaving_products.module.css";
import React, { useState, useEffect, useContext, useRef } from "react";
import CartContext from "../store/cart-context";
import axios from "axios";
import { useRouter } from "next/router";
import Spinner from "../components/UI/Spinner";

export default function Checkout(props) {
  const cartCtx = useContext(CartContext);
  const [zip, setZip] = useState("");
  const [shippingService, setShippingService] = useState([0, ""]);
  const [serviceSelected, setServiceSelected] = useState(false);

  props.hideSpinner(true);

  const onEnterZip = (enteredZip) => {
    setZip(enteredZip);
  };

  const onShippingServiceSelect = (service) => {
    setShippingService(service.split(","));
    setServiceSelected(true);
  };

  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      router.reload();
    }, 100000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  let firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      localStorage.setItem("shipping", shippingService);
      setServiceSelected(false);

      //create slight delay to prevent batch processing of state changes so
      //CheckoutButtons is re-evaluated and changed shipping info is received
      const timer = setTimeout(() => {
        setServiceSelected(true);
      }, 500);
      return () => {
        clearTimeout(timer);
      };
    }
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
        products={props.products}
        cart={cartCtx} //circumvent fact that context is not yet hydrated by localstorage when summary loads
      />
      <div className={styles["checkout-buttons"]}>
        {serviceSelected && (
          <CheckoutButtons zip={zip} shippingService={shippingService} />
        )}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  let res;
  const host =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://mns.vercel.app";
  try {
    res = await axios(`${host}/api/products`);
  } catch (err) {
    console.log(err);
  }
  //console.log(res);
  const products = res.data.products;

  return {
    props: { products },
  };
}
