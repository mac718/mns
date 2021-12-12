import { useState } from "react";
import styles from "./EstimateShippingInput.module.css";
import axios from "axios";
import Spinner from "../UI/Spinner";

const EstimateShippingInput = (props) => {
  const [zip, setZip] = useState("");
  const [cost, setCost] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const setZipHandler = (event) => {
    console.log(event.target.value);
    setZip(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    const errorMessage =
      "Invalid zip code. Please enter a valid US or Canadian zip code. Shipping to other locations is not available.";
    axios
      .post("/api/getShippingRates", {
        zip: zip,
        orderWeight: props.orderWeight,
      })
      .then((res) => {
        setCost(res);
        setLoading(false);
      })
      .catch((err) => setError(errorMessage));
  };

  if (loading) {
    return <Spinner />;
  }

  if (cost) {
    return (
      <ul className={styles["options-list"]}>
        {cost.data.map((option) => (
          <li key={option.serviceName}>
            <input
              type="radio"
              value={[option.serviceName, option.shipmentCost]}
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
