import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **We are currently processing orders from 2/17-18. No shipments today
      (2/23) due to inclement weather. Thanks! **
    </aside>
  );
};

export default Notifications;
