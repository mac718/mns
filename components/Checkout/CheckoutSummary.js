import styles from "./CheckoutSummary.module.css";
import Heading from "../Heading";
import React, { useContext, useEffect, useRef, useState } from "react";
import EstimateShippingInput from "./EsitmateShippingInput";
import CartContext from "../../store/cart-context";

const CheckoutSummary = (props) => {
  const cartCtx = useContext(CartContext);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [shippingService, setShippingService] = useState(["", 0]);

  useEffect(() => {
    if (localStorage.getItem("items")) {
      setItems(JSON.parse(localStorage.getItem("items")));
      setTotal(Number(localStorage.getItem("total")));
    }
  }, [cartCtx.items]);

  let firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      setShippingService(props.shippingService);
    }
  }, [props.shippingService]);

  const orderWeight = items.reduce(
    (total, current) => total + current.weight * current.quantity,
    0
  );

  let jarItems = items.filter((item) => item.type.includes("Jar"));
  let puckItems = items.filter((item) => item.type.includes("Puck"));
  let stickItems = items.filter((item) => item.type.includes("Stick"));

  let totalJars = jarItems.reduce(
    (total, current) => total + current.quantity,
    0
  );

  let totalPucks = puckItems.reduce(
    (total, current) => total + current.quantity,
    0
  );

  let totalSticks = stickItems.reduce(
    (total, current) => total + current.quantity,
    0
  );

  let totalItems = totalJars + totalPucks + totalSticks;

  return (
    <>
      <Heading>Checkout</Heading>
      <main>
        <div className={styles.subheading}>Order Summary</div>
        <div className={styles["edit-button"]}>
          <button onClick={props.onShow}>Edit Order</button>
        </div>
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
                  onShippingServiceSelect={props.onShippingServiceSelect}
                  totalJars={totalJars}
                  totalPucks={totalPucks}
                  totalSticks={totalSticks}
                  totalItems={totalItems}
                />
              </td>
            </tr>
            <tr className={styles.total}>
              <td></td>
              <td>Total:</td>
              <td>
                ${(Number(total) + Number(shippingService[1])).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
};

export default CheckoutSummary;
