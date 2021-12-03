import styles from "./ShavingSoapFormatListItem.module.css";
import Image from "next/image";

const ShavingSoapFormatListItem = (props) => {
  return (
    <li className={styles["list-item"]}>
      <a href={props.url}>
        <Image src={props.image} width={300} />
      </a>
      <div className={styles["list-item-caption"]}>
        <a href={props.url}>{`Shaving Soap ${props.type}`}</a>
      </div>
    </li>
  );
};

export default ShavingSoapFormatListItem;
