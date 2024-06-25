import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 6/20-6/24. I will be out of
      town from 6/25 through 6/29. Shipments will resume on 7/1. Sorry for the
      inconvenience! Thanks!**
    </aside>
  );
};

export default Notifications;
