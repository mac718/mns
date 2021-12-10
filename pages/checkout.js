import CheckoutSummary from "../components/Checkout/CheckoutSummary";
import CheckoutButtons from "../components/Checkout/CheckoutButtons";
import styles from "./shaving_products.module.css";

export default function Checkout() {
  return (
    <>
      <CheckoutSummary />
      <div className={styles["checkout-buttons"]}>
        <CheckoutButtons />
      </div>
    </>
  );
}
