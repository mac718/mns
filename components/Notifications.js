import styles from "./Notifications.module.css";

const Notifications = () => {
  return (
    <aside className={styles.notifications}>
      **I&apos;m currently processing orders from 7/25-7/26. I will be out of
      town from 7/30 through 8/7. I will not be shipping soap during that time,
      but please feel free to place an order. Shipments will resume on 8/8.
      Sorry for the inconvenience. Thanks!**
    </aside>
  );
};

export default Notifications;
