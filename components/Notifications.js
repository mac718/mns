import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 2/8-2/9. I will be out of town
      from Sunday, 2/11 through Tuesday, 2/13. Shipments will resume on
      Wednesday, 2/14. Sorry for the inconvenience! Thanks!**
    </aside>
  );
};

export default Notifications;
