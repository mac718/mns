import styles from "./AddToNotificationListForm.module.css";

const AddToNotificationListForm = ({ id }) => {
  return (
    <form>
      <label htmlFor="add-to-label">Notify when back in stock</label>
      <input type="email" id="add-to-list" placeholder="enter email" />
      <button>Notify Me</button>
    </form>
  );
};

export default AddToNotificationListForm;
