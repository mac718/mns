import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 5/5-5/8. I will be away from
      Tuesday, 5/9 through Thursday, 5/11. Shipments will resume on Friday,
      5/12. Thanks!**
    </aside>
  );
};

export default Notifications;
