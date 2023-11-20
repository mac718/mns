import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 11/17-11/20. I will be out of
      town from Tuesday, 11/21 through Friday, 11/24. Order shipping will resume
      on Monday, 11/27. Happy Thanksgiving! Thanks!**
    </aside>
  );
};

export default Notifications;
