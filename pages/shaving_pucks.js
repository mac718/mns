import Heading from "../components/Heading";
import Image from "next/image";
import puck from "../public/shaving_puck.jpeg";
import MainImage from "../components/MainImage";
import ShavingProductItem from "../components/ShavingProductItem";
import ShavingProductsList from "../components/ShavingProductsList";
import Footer from "../components/Footer";
import shavingProducts from "../products.json";
import styles from "./shaving_products.module.css";
import Notifications from "../components/Notifications";
import axios from "axios";

export default function ShavingPucks(props) {
  return (
    <>
      <main className={styles.main}>
        <Heading>Tallow, Lanolin, & Kokum Butter Shaving Soap Pucks</Heading>
        <MainImage>
          <Image src={puck} />
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
          supple, and smooth. Each puck weighs between 4 and 4.5 ounces is about
          3 inches wide and 1.25 inches thick.{" "}
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
          {props.pucks.map((variety) => {
            return (
              <ShavingProductItem
                key={variety._id}
                id={variety.id}
                type="Shaving Soap Puck"
                name={variety.scent}
                description={variety.description}
                price={variety.price}
                weight={variety.weight}
                button={variety.button}
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
  let res;
  const host =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://mns.vercel.app";
  res = await axios(`${host}/api/products`);
  const pucks = res.data.products.filter((product) => product.type === "puck");

  return {
    props: { pucks: pucks },
  };
}
