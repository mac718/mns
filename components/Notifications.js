import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 1/14-1/17. No shipments today
      - national/postal holiday (MLK day). Thanks!**
    </aside>
  );
};

export default Notifications;
