import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 6/16-6/19. No shipments today
      due to Postal Holiday. Thanks!**
    </aside>
  );
};

export default Notifications;
