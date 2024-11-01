import { useEffect } from "react";
import MainImage from "../components/MainImage";
import styles from "./shaving_products.module.css";
import sticks from "../public/shaving_sticks.JPG";
import Image from "next/image";
import Notifications from "../components/Notifications";
import Heading from "../components/Heading";
import ShavingProductsList from "../components/ShavingProductsList";
import ShavingProductItem from "../components/ShavingProductItem";
import connectDB from "../middleware/mongodb";
import Product from "../models/product";

export default function ShavingSticks(props) {
  useEffect(() => {
    props.hideSpinner();
  }, []);
  return (
    <>
      <main className={styles.main}>
        <Heading>Tallow, Lanolin, & Kokum Butter Shaving Soap Sticks</Heading>
        <MainImage>
          <Image src={sticks} />
        </MainImage>
        <p className={styles.blurb}>
          These twist-up tubes contain the same shaving soap as the Tallow,
          Lanolin, & Kokum butter shaving pucks and jars. Just rub the soap
          liberally over your wet beard and use your brush to build a lather
          directly on your face. Each tube contains about 2.3 ounces of soap.
        </p>
        <p className={styles.ingredients}>
          <span className={styles["bold-underline"]}>Ingredients</span>:
          Distilled water saponified tallow (beef) and stearic acid; vegetable
          glycerin; saponified kokum butter, avocado oil, and shea butter;
          lanolin, fragrance and/or essential oil(s); saponified coconut oil;
          kaolin clay, vitamin E.
        </p>
        <Notifications />
        <ShavingProductsList>
          {props.sticks.map((variety) => (
            <ShavingProductItem
              key={variety._id}
              id={variety._id}
              name={variety.scent}
              description={variety.description}
              price={variety.price}
              type={variety.type}
              weight={variety.weight}
              inStock={variety.inStock}
            />
          ))}
        </ShavingProductsList>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const fetchProducts = connectDB(async () => {
    const products = await Product.find({ type: "stick" });
    return products;
  });

  const sticks = await fetchProducts();

  return {
    props: { sticks: JSON.parse(JSON.stringify(sticks)) },
  };
}
