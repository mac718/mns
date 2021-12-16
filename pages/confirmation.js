import { useEffect, useState } from "react";
import styles from "./confirmation.module.css";
import { useRouter } from "next/router";

export default function Confirmation(props) {
  const [paid, setPaid] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("paid")) {
      setPaid(false);
      router.push("/");
    } else {
      setPaid(true);
      localStorage.clear();
    }
  }, []);

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
