import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 10/17-10/20. I&apos;m
      experiencing some technical issues with my shipping software. I am working
      on getting them resolved. Sorry for the inconvenience. Thanks! **
    </aside>
  );
};

export default Notifications;
