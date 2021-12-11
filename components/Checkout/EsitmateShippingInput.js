import { useState } from "react";
import styles from "./EstimateShippingInput.module.css";
import axios from "axios";

const EstimateShippingInput = (props) => {
  const [zip, setZip] = useState("");
  const [cost, setCost] = useState(0);
  const [error, setError] = useState("");

  const setZipHandler = (event) => {
    console.log(event.target.value);
    setZip(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //props.onEnterZip(zip);
    axios
      .post("/api/getShippingRates", {
        zip: zip,
        orderWeight: props.orderWeight,
      })
      .then((res) => setCost(res))
      .catch((err) => setError(err.message));
  };

  if (cost) {
    return (
      <ul>
        {cost.data.map((option) => (
          <li key={option.serviceName}>
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
      {error && <div>{error}</div>}
    </>
  );
};

export default EstimateShippingInput;
