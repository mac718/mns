import { useContext, useEffect, useState } from "react";
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
  const [disabled, setDisabled] = useState(true);
  const [country, setCountry] = useState(null);
  const [maxZipLength, setMaxZipLength] = useState(null);

  const setZipHandler = (event) => {
    setZip(event.target.value);
    if (country === "US") {
      setMaxZipLength(5);

      if (event.target.value.length === 5) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
    if (country === "CA") {
      setMaxZipLength(7);

      if (event.target.value.length === 7) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  };

  const selectCountryHandler = (event) => {
    setCountry(event.target.value);
  };

  const filterServices = (data) => {
    let services;

    if (cartCtx.weight < 16) {
      services = data.filter(
        (service) =>
          service.serviceName.includes("First Class Mail - Package") ||
          service.serviceName.includes("First Class Mail Intl - Package") ||
          service.serviceName.includes("Small Flat Rate Box")
      );
    } else if (
      cartCtx.weight >= 16 &&
      props.totalItems === 2 &&
      (props.totalJars === 1 || props.totalJars === 2)
    ) {
      services = data.filter((service) =>
        service.serviceName.includes("Small Flat Rate Box")
      );
    } else if (
      cartCtx.weight >= 16 &&
      props.totalItems === 3 &&
      props.totalJars === 0
    ) {
      services = data.filter((service) =>
        service.serviceName.includes("Small Flat Rate Box")
      );
    } else if (
      cartCtx.weight >= 16 &&
      props.totalItems === 3 &&
      props.totalJars >= 1
    ) {
      services = data.filter((service) =>
        service.serviceName.includes("Flat Rate Padded Envelope")
      );
    } else if (
      cartCtx.weight >= 16 &&
      props.totalItems > 2 &&
      props.totalItems < 7 &&
      props.totalJars < 4
    ) {
      services = data.filter((service) =>
        service.serviceName.includes("Flat Rate Padded Envelope")
      );
    } else if (
      cartCtx.weight >= 16 &&
      props.totalItems == 4 &&
      props.totalJars === 4
    ) {
      services = data.filter((service) =>
        service.serviceName.includes("Flat Rate Padded Envelope")
      );
    } else {
      services = data.filter((service) =>
        service.serviceName.includes("Medium Flat Rate Box")
      );
    }

    return services;
  };
  const fetchShippingServices = () => {
    setLoading(true);
    const errorMessage =
      "Invalid zip code. Please enter a valid US or Canadian zip code. Shipping to other locations is not available.";

    axios
      .post("/api/getShippingRates", {
        country: country,
        zip: zip,
        orderWeight: Number(cartCtx.weight),
      })
      .then((res) => {
        let data = res.data;
        return filterServices(data);
      })
      .then((services) => {
        setCost(services);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        setLoading(false);
        setError(errorMessage);
      });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onEnterZip(zip);
    fetchShippingServices();
  };

  useEffect(() => {
    if (pageLoads < 2) {
      setPageLoads((prev) => prev + 1);
    } else {
      fetchShippingServices();
    }
  }, [props.totalItems]);

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
            {option.serviceName} <span>${option.shipmentCost.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <form className={styles["estimate-buttons"]} onSubmit={submitHandler}>
        <div>
          <label htmlFor="country">Select Destination Country</label>
          <div>
            <input
              type="radio"
              name="country"
              id="US"
              value="US"
              onClick={selectCountryHandler}
            />
            <label htmlFor="US">US</label>

            <input
              type="radio"
              name="country"
              id="Canada"
              value="CA"
              onClick={selectCountryHandler}
            />
            <label htmlFor="Canada">Canada</label>
          </div>
        </div>

        {country && (
          <div className={styles["estimate-buttons"]}>
            <label htmlFor="shipping">
              Enter Postal Code (must match postal code of shipping address you
              enter in Paypal)
            </label>
            <input
              id="shipping"
              type="text"
              onChange={setZipHandler}
              value={zip}
              maxLength={maxZipLength}
            />
            <button disabled={disabled}>Submit</button>
          </div>
        )}
      </form>
      {error && country && <div className={styles.error}>{error}</div>}
    </>
  );
};

export default EstimateShippingInput;
