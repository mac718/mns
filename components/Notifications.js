import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 1/13-1/16. No shipments today;
      USPS is closed for MLK day. Thanks!**
    </aside>
  );
};

export default Notifications;
