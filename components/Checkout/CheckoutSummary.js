import styles from "./CheckoutSummary.module.css";
import Heading from "../Heading";
import { useEffect, useState } from "react";

const CheckoutSummary = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("items")));
    setTotal(Number(localStorage.getItem("total")));
  }, []);

  return (
    <>
      <Heading>Checkout</Heading>
      <main>
        <div className={styles.subheading}>Order Summary</div>
        <table className={styles.summary}>
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
          <tr className={styles.total}>
            <td></td>
            <td>Total:</td>
            <td>{`$${total.toFixed(2)}`}</td>
          </tr>
        </table>
      </main>
    </>
  );
};

export default CheckoutSummary;
