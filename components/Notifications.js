import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 1/16-1/18. I will be out of
      town through 1/23. Shipments will resume on 1/24. Sorry for the
      inconvenience. Thanks!**
    </aside>
  );
};

export default Notifications;
