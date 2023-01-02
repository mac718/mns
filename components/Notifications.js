import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 12/30-1/2. No shipments today
      - it is a holiday fot USPS. Thanks!**
    </aside>
  );
};

export default Notifications;
