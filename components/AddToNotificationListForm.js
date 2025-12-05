import { useRef, useState } from "react";
import styles from "./AddToNotificationListForm.module.css";
import axios from "axios";

const AddToNotificationListForm = ({ id }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const emailRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.patch("/api/stock-notifications/add", {
        id: id,
        email: emailRef.current.value,
      });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
      emailRef.current.value = "";
    } catch (err) {
      console.log(err);
      setError(true);
      setTimeout(() => setError(false), 5000);
    }
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label htmlFor="add-to-label">Notify when back in stock</label>
      <input
        type="email"
        id="add-to-list"
        placeholder="enter email"
        ref={emailRef}
      />
      <button>Notify Me</button>
      {success && (
        <span className={styles.success}>
          Your email was successfully added.
        </span>
      )}
      {error && <span className={styles.error}>Something went wrong.</span>}
    </form>
  );
};

export default AddToNotificationListForm;
