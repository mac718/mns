import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 7/24. We are preparing for a
      big move to NJ on August 1. Shipments will likely cease for at least two
      weeks after that while we wait for out furniture and cars to arrive. I
      will get things up and running and soon as possible in the new location.
      Thanks! **
    </aside>
  );
};

export default Notifications;
