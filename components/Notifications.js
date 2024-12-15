import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 12/12. The site was down for a
      while, but I have resolved the issue - sorry for the inconvenience!
      Thanks!**
    </aside>
  );
};

export default Notifications;
