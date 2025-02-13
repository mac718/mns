import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 2/12-2/13. No shipments today,
      2/13 due to inclement weather. Thanks!!**
    </aside>
  );
};

export default Notifications;
