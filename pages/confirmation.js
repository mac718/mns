import { useContext, useEffect, useState } from "react";
import styles from "./confirmation.module.css";
import { useRouter } from "next/router";
import CartContext from "../store/cart-context";
import axios from "axios";

export default function Confirmation(props) {
  const [paid, setPaid] = useState(false);
  const router = useRouter();
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    if (!localStorage.getItem("paid")) {
      setPaid(false);
      router.push("/");
    } else {
      setPaid(true);
      let host =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : "https://www.mikesnaturalsoaps.com";
      try {
        axios
          .patch(`${host}/api/updateStock`, {
            items: JSON.parse(localStorage.getItem("items")) || cartCtx.items,
          })
          .then(() => {
            localStorage.clear();
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
        localStorage.clear();
      }
    }
  }, []);

  return (
    <main className={styles.confirmation}>
      {paid && (
        <div className={styles["thank-you"]}>
          <div>Thank you!</div>{" "}
          <p>You should receive a PayPal receipt via email shortly.</p>
        </div>
      )}
    </main>
  );
}
