import { useEffect, useState } from "react";
import styles from "./confirmation.module.css";
import Router from "next/router";

export default function Confirmation() {
  const [paid, setPaid] = useState(true);

  useEffect(() => {
    if (!paid) {
      Router.push("/");
    }
  }, [paid]);

  return (
    <main className={styles.confirmation}>
      {paid && (
        <div className={styles["thank-you"]}>
          <div>Thank you!</div>{" "}
          <p>You should receive an order confirmation via email shortly.</p>
        </div>
      )}
    </main>
  );
}
