import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 12/23-12/26. USPS observes
      Christmas today, so no shipments until tomorrow. Thanks!**
    </aside>
  );
};

export default Notifications;
