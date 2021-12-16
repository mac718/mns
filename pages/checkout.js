import CheckoutSummary from "../components/Checkout/CheckoutSummary";
import CheckoutButtons from "../components/Checkout/CheckoutButtons";
import styles from "./shaving_products.module.css";
import React, { useState, useEffect, useContext, useRef } from "react";
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

  let firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      localStorage.setItem("shipping", shippingService);
      setServiceSelected(false);
      setTimeout(() => {
        setServiceSelected(true);
      }, 500);
    }
  }, [shippingService]);

  useEffect(() => {
    setServiceSelected(false);
  }, [cartCtx.items]);

  const filterServices = (data) => {
    let services;
    if (cartCtx.weight < 16) {
      services = data.filter(
        (service) =>
          service.serviceName.includes("First Class Mail - Package") ||
          service.serviceName.includes("Small Flat Rate Box")
      );
    } else if (
      cartCtx.weight >= 16 &&
      props.totalItems === 2 &&
      props.totalJars === 2
    ) {
      services = data.filter((service) =>
        service.serviceName.includes("Small Flat Rate Box")
      );
    } else if (
      cartCtx.weight >= 16 &&
      props.totalItems === 3 &&
      props.totalJars === 3
    ) {
      services = data.filter((service) =>
        service.serviceName.includes(
          "Priority Mail - Flat Rate Padded Envelope"
        )
      );
    } else if (
      cartCtx.weight >= 16 &&
      props.totalItems > 2 &&
      props.totalItems < 7 &&
      props.totalJars < 4
    ) {
      services = data.filter((service) =>
        service.serviceName.includes(
          "Priority Mail - Flat Rate Padded Envelope"
        )
      );
    } else if (
      cartCtx.weight >= 16 &&
      props.totalItems == 4 &&
      props.totalJars === 4
    ) {
      services = data.filter((service) =>
        service.serviceName.includes(
          "Priority Mail - Flat Rate Padded Envelope"
        )
      );
    } else {
      services = data.filter((service) =>
        service.serviceName.includes("Medium Flate Rate Box")
      );
    }
    return services;
  };
  const fetchShippingServices = (filter) => {
    console.log("zip", zip, cartCtx.weight);
    setLoading(true);
    const errorMessage =
      "Invalid zip code. Please enter a valid US or Canadian zip code. Shipping to other locations is not available.";
    axios
      .post("/api/getShippingRates", {
        zip: zip,
        orderWeight: Number(cartCtx.weight),
      })
      .then((res) => {
        let data = res.data;

        console.log("services", data);
        return filter(data);
      })
      .then((services) => {
        return services;
        //setCost(services);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(errorMessage);
      });
  };

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
          <CheckoutButtons
            zip={zip}
            shippingService={shippingService}
            filter={filterServices}
            fetchShippingServices={fetchShippingServices}
          />
        )}
      </div>
    </>
  );
}
