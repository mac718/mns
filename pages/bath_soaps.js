import Heading from "../components/Heading";
import MainImage from "../components/MainImage";
import Notifications from "../components/Notifications";
import ShavingProductsList from "../components/ShavingProductsList";
import ShavingProductItem from "../components/ShavingProductItem";
import Footer from "../components/Footer";
import Image from "next/image";
import { orderProductList } from "../utils/helper";
import styles from "./shaving_products.module.css";
import shampoo from "../public/shampoo_bar.jpg";
import bsBath from "../public/Barber_Shop_Bar.jpg";

export default function BathSoaps(props) {
  return (
    <>
      <main className={styles.main}>
        <Heading>Bath Soap</Heading>
        <MainImage>
          <Image src={bsBath} alt="Shampoo Bar Image" />
        </MainImage>
        <p className={styles.ingredients}>
          <span className={styles["bold-underline"]}>Ingredients</span>:
          Distilled water saponified tallow (beef), coconut oil, safflower oil,
          and kokum butter; fragrance and/or essential oils, vitamin E,
          colorant.
        </p>
        <Notifications />

        <ShavingProductsList>
          {props.inStockBath &&
            props.inStockBath.length > 0 &&
            props.inStockBath.map((variety) => (
              <ShavingProductItem
                name={variety.scent}
                price={variety.price}
                description={variety.description}
                inStock={variety.inStock}
                type={variety.type}
                id={variety._id}
                weight={variety.weight}
                key={variety._id}
              />
            ))}
          {props.outOfStockBath &&
            props.outOfStockBath.length > 0 &&
            props.outOfStockBath.map((variety) => (
              <ShavingProductItem
                name={variety.scent}
                price={variety.price}
                description={variety.description}
                inStock={variety.inStock}
                type={variety.type}
                id={variety._id}
                weight={variety.weight}
                key={variety._id}
              />
            ))}
        </ShavingProductsList>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const [inStockBath, outOfStockBath] = await orderProductList("bath");

  return {
    props: {
      inStockBath: JSON.parse(JSON.stringify(inStockBath)),
      outOfStockBatch: JSON.parse(JSON.stringify(outOfStockBath)),
    },
  };
}
