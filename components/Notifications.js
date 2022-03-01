import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 2/28. I will be out of town
      from 3/1 to 3/9. No orders will be shipped during that time span. I will
      resume shipping on 3/10. Thanks!**
    </aside>
  );
};

export default Notifications;
