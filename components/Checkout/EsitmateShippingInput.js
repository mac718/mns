import { useContext, useEffect, useRef, useState } from "react";
import styles from "./EstimateShippingInput.module.css";
import axios from "axios";
import Spinner from "../UI/Spinner";
import CartContext from "../../store/cart-context";

const EstimateShippingInput = (props) => {
  const cartCtx = useContext(CartContext);

  const [zip, setZip] = useState("");
  const [cost, setCost] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageLoads, setPageLoads] = useState(0);

  const setZipHandler = (event) => {
    console.log(event.target.value);
    setZip(event.target.value);
  };

  const fetchShippingServices = () => {
    setLoading(true);
    const errorMessage =
      "Invalid zip code. Please enter a valid US or Canadian zip code. Shipping to other locations is not available.";
    axios
      .post("/api/getShippingRates", {
        zip: zip,
        orderWeight: props.orderWeight,
      })
      .then((res) => {
        let services = res.data;
        if (props.orderWeight < 16) {
          services = res.data.filter(
            (service) =>
              service.serviceName.includes("First Class Mail - Package") ||
              service.serviceName.includes("Small Flat Rate Box")
          );
        } else if (
          props.orderWeight >= 16 &&
          props.totalItems === 2 &&
          props.totalJars === 2
        ) {
          services = res.data.filter((service) =>
            service.serviceName.includes("Small Flat Rate Box")
          );
        } else if (
          props.orderWeight >= 16 &&
          props.totalItems === 3 &&
          props.totalJars === 3
        ) {
          services = res.data.filter((service) =>
            service.serviceName.includes(
              "Priority Mail - Flat Rate Padded Envelope"
            )
          );
        } else if (
          props.orderWeight >= 16 &&
          props.totalItems > 2 &&
          props.totalItems < 7 &&
          props.totalJars < 4
        ) {
          services = res.data.filter((service) =>
            service.serviceName.includes(
              "Priority Mail - Flat Rate Padded Envelope"
            )
          );
        } else if (
          props.orderWeight >= 16 &&
          props.totalItems == 4 &&
          props.totalJars === 4
        ) {
          services = res.data.filter((service) =>
            service.serviceName.includes(
              "Priority Mail - Flat Rate Padded Envelope"
            )
          );
        } else {
          services = res.data.filter((service) =>
            service.serviceName.includes("Medium Flate Rate Box")
          );
        }

        setCost(services);
        setLoading(false);
      })
      .catch((err) => setError(errorMessage));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetchShippingServices();
  };

  //const isMounted = useRef(true);
  //console.log("mounted", isMounted);
  useEffect(() => {
    if (pageLoads < 2) {
      //isMounted.current = false;
      setPageLoads((prev) => prev + 1);
    } else {
      fetchShippingServices();
    }
  }, [cartCtx.items]);

  if (loading) {
    return <Spinner />;
  }

  if (cost) {
    return (
      <ul className={styles["options-list"]}>
        {cost.map((option) => (
          <li key={option.serviceName}>
            <input
              type="radio"
              value={[option.serviceName, Number(option.shipmentCost)]}
              onClick={(e) => props.onShippingServiceSelect(e.target.value)}
              name="shipping-options"
            />
            {option.serviceName} {option.shipmentCost}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <form className={styles["estimate-buttons"]} onSubmit={submitHandler}>
        <input type="text" onChange={setZipHandler} value={zip} />
        <button>Submit</button>
      </form>
      {error && <div className={styles.error}>{error}</div>}
    </>
  );
};

export default EstimateShippingInput;
