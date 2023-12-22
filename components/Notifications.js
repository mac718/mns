import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 12/21-12/22. I&apos;ll be out
      of town from Saturday, 12/23 through Thursday, 1/4. Shipments will resume
      on Firday, 1/5. Happy Holidays, everyone!**
    </aside>
  );
};

export default Notifications;
