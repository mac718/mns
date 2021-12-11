import styles from "./CheckoutSummary.module.css";
import Heading from "../Heading";
import { useEffect, useState } from "react";
import EstimateShippingInput from "./EsitmateShippingInput";

const CheckoutSummary = (props) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("items")) {
      setItems(JSON.parse(localStorage.getItem("items")));
      setTotal(Number(localStorage.getItem("total")));
    }
  }, []);

  const orderWeight = items.reduce(
    (total, current) => total + current.weight * current.quantity,
    0
  );

  console.log(orderWeight);

  return (
    <>
      <Heading>Checkout</Heading>
      <main>
        <div className={styles.subheading}>Order Summary</div>
        <table className={styles.summary}>
          <tbody>
            {items.map((item) => {
              return (
                <tr key={item.id}>
                  <td className={styles.item}>
                    {item.name} {item.type}
                  </td>
                  <td className={styles.item}> {item.quantity}</td>
                  <td className={styles.item}>{`$${(
                    item.quantity * item.price
                  ).toFixed(2)}`}</td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td className={styles.item}>Estimated Shipping</td>
              <td className={styles.item}>
                <EstimateShippingInput
                  onEnterZip={props.onEnterZip}
                  orderWeight={orderWeight}
                />
              </td>
            </tr>
            <tr className={styles.total}>
              <td></td>
              <td>Total:</td>
              <td>{`$${total.toFixed(2)}`}</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
};

export default CheckoutSummary;
