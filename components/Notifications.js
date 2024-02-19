import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 2/16-2/19. No shipments today
      - Presidents&apos; Day. Thanks!**
    </aside>
  );
};

export default Notifications;
