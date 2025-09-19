import { useEffect } from "react";
import Heading from "../components/Heading";
import Image from "next/image";
import jar from "../public/shaving_jar.jpeg";
import MainImage from "../components/MainImage";
import ShavingProductItem from "../components/ShavingProductItem";
import ShavingProductsList from "../components/ShavingProductsList";
import Footer from "../components/Footer";
import styles from "./shaving_products.module.css";
import Notifications from "../components/Notifications";
import connectDB from "../middleware/mongodb";
import Product from "../models/product";

import { orderProductList } from "../utils/helper";

export default function ShavingJars(props) {
  useEffect(() => {
    props.hideSpinner();
  }, [props]);
  return (
    <>
      <main className={styles.main}>
        <Heading>Tallow, Lanolin, & Kokum Butter Shaving Soap Jars</Heading>

        <MainImage>
          <Image src={jar} alt="shaving jar" />
        </MainImage>
        <p className={styles.blurb}>
          This soap is the real deal. Tallow is the main ingredient, regarded by
          many shaving enthusiasts (myself included) as yielding the creamiest,
          slickest, and most protective lather possible. In addition, this soap
          is rich in vegetable glycerin, kokum butter, shea butter, and avocado
          oil. It also contains kaolin clay, which creates a slick buffer
          between your skin and the blade. The icing on the cake is lanolin, a
          waxy substance derived from the wool of sheep and a fantastic
          conditioner and humectant. This soap will provide an effortless and
          downright decadent shave that will leave your skin feeling soft,
          supple, and smooth. Each polypropylene recyclable jar contains about 5
          ounces of soap. (<strong>N.B.</strong> this is not a guarantee; some
          jars will contain somewhat more or less than five ounces of soap).
        </p>
        <p className={styles.ingredients}>
          <span className={styles["bold-underline"]}>ingredients</span>:
          Distilled water saponified tallow (beef) and stearic acid; vegetable
          glycerin; saponified kokum butter, avocado oil, and shea butter;
          lanolin, fragrance and/or essential oil(s); saponified coconut oil;
          kaolin clay, vitamin E.
        </p>
        <Notifications />
        <ShavingProductsList>
          {props.inStockJars.map((variety) => {
            return (
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
            );
          })}
          {props.outOfStockJars.map((variety) => {
            return (
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
            );
          })}
        </ShavingProductsList>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  // const fetchInStockProducts = connectDB(async () => {
  //   const products = await Product.find({ type: "jar", inStock: { $gte: 1 } });
  //   return products;
  // });

  // const fetchOutOfStockProducts = connectDB(async () => {
  //   const products = await Product.find({ type: "jar", inStock: { $lte: 0 } });
  //   return products;
  // });

  // const inStockJars = await fetchInStockProducts();
  // const outOfStockJars = await fetchOutOfStockProducts();

  // inStockJars.sort((a, b) => {
  //   if (a.scent < b.scent) {
  //     return -1;
  //   } else if (a.scent > b.scent) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // });

  // outOfStockJars.sort((a, b) => {
  //   if (a.scent < b.scent) {
  //     return -1;
  //   } else if (a.scent > b.scent) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // });

  // return {
  //   props: {
  //     inStockJars: JSON.parse(JSON.stringify(inStockJars)),
  //     outOfStockJars: JSON.parse(JSON.stringify(outOfStockJars)),
  //   },
  // };

  const [inStockJars, outOfStockJars] = await orderProductList("jar");

  return {
    props: {
      inStockJars: JSON.parse(JSON.stringify(inStockJars)),
      outOfStockJars: JSON.parse(JSON.stringify(outOfStockJars)),
    },
  };
}
