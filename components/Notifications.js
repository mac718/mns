import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 1/17-1/20. No shipments today
      (1/20) - USPS is closed in observance of MLK Day. Thanks!!**
    </aside>
  );
};

export default Notifications;
