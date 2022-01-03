import styles from "./ShavingSoapFormatListItem.module.css";
import Image from "next/image";
import Link from "next/link";

const ShavingSoapFormatListItem = (props) => {
  return (
    <li className={styles["list-item"]} onClick={props.showSpinner}>
      <Link href={props.url}>
        <Image src={props.image} width={300} />
      </Link>
      <div className={styles["list-item-caption"]}>
        <Link href={props.url}>{`Shaving Soap ${props.type}`}</Link>
      </div>
    </li>
  );
};

export default ShavingSoapFormatListItem;
