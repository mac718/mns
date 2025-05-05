import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 5/1. I just corrected a bug on
      the shaving sticks page causing it to list available pucks instead of
      sticks. Thanks!!**
    </aside>
  );
};

export default Notifications;
