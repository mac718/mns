import { useRef } from "react";
import styles from "./AddToNotificationListForm.module.css";
import axios from "axios";

const AddToNotificationListForm = ({ id }) => {
  const emailRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    try {
      axios.patch("/api/stock-notifications/add", {
        id: id,
        email: emailRef.current.value,
      });
    } catch (err) {
      console.log(err);
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
    </form>
  );
};

export default AddToNotificationListForm;
