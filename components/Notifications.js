import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 8/31-9/1. I&apos;ll be out of
      town until Tuesday, 9/5. Shipping will resume on Wednesday, 9/6. Sorry for
      the inconvenince! Thanks!**
    </aside>
  );
};

export default Notifications;
