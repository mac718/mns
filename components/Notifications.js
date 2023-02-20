import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 2/17-2/20. No shipments today
      - Presidents Day. Thanks!**
    </aside>
  );
};

export default Notifications;
