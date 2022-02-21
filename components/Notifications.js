import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 2/18-2/21. No shipments today
      due to Presidents Day. Thanks!**
    </aside>
  );
};

export default Notifications;
