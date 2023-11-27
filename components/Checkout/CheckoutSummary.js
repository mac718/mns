import styles from "./CheckoutSummary.module.css";
import Heading from "../Heading";
import React, { useContext, useEffect, useRef, useState } from "react";
import EstimateShippingInput from "./EsitmateShippingInput";
import CartContext from "../../store/cart-context";

const CheckoutSummary = (props) => {
  const cartCtx = useContext(CartContext);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [weight, setWeight] = useState(0);
  const [shippingService, setShippingService] = useState(["", 0]);
  const [error, setError] = useState(null);
  const [errorId, setErrorId] = useState(null);

  useEffect(() => {
    props.cart.items.forEach((item) => {
      let product = props.products.filter(
        (product) => product._id === item.id
      )[0];
      if (item.quantity > product.inStock) {
        props.cart.removeItem({
          ...product,
          id: product._id,
          quantity: product.inStock,
        });
        setError(
          "Quantity in stock has reduced since you added this item to the cart. Quantity has been adjusted to amount in stock."
        );
        setErrorId(item.id);
      }
    });
  }, [props.cart.items]);

  useEffect(() => {
    setItems(cartCtx.items);
    setTotal(cartCtx.total);
    setWeight(cartCtx.weight);
  }, [cartCtx.items]);

  let firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      setShippingService(props.shippingService);
    }
  }, [props.shippingService]);

  let jarItems = items.filter((item) => item.type === "jar");
  let puckItems = items.filter((item) => item.type === "puck");
  let stickItems = items.filter((item) => item.type === "stick");

  let totalJars = jarItems.reduce(
    (total, current) => total + current.quantity,
    0
  );

  console.log("items", totalJars);

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
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr key={item.id}>
                  <td className={styles.item}>
                    {item.name} {item.type}
                  </td>
                  <td className={styles.item}>
                    {item.quantity}
                    {error && errorId === item.id && (
                      <div className={styles.error}>{error}</div>
                    )}{" "}
                  </td>
                  <td className={styles.item}>
                    <strike>{`$${(item.quantity * (item.price * 1.25)).toFixed(
                      2
                    )} `}</strike>
                    {`$${(item.quantity * item.price).toFixed(2)}`}
                  </td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td className={styles.item}>Shipping</td>
              <td className={styles.item}>
                <EstimateShippingInput
                  onEnterZip={props.onEnterZip}
                  orderWeight={weight}
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
                <strike>
                  $
                  {(
                    Number(total) * 1.25 +
                    Number(shippingService[1]) * 1.25
                  ).toFixed(2)}
                </strike>
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
