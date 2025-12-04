import Heading from "../components/Heading";
import shampoo from "../public/shampoo_bar.jpg";
import MainImage from "../components/MainImage";
import Image from "next/image";
import styles from "./shaving_products.module.css";
import ShavingProductItem from "../components/ShavingProductItem";
import ShavingProductsList from "../components/ShavingProductsList";
import Notifications from "../components/Notifications";
import Footer from "../components/Footer";
import { orderProductList } from "../utils/helper";

export default function ShampooBar(props) {
  console.log("in stock", props.inStockShampoo);
  console.log("out of stock", props.outOfStockShampoo);
  const itemInfo = props.inStockShampoo[0];
  return (
    <>
      <main className={styles.main}>
        <Heading>Shampoo Bar</Heading>
        <MainImage>
          <Image src={shampoo} alt="Shampoo Bar Image" />
        </MainImage>
        <p className={styles.blurb}>
          Like my other soaps, my shampoo bars are made entirely from scratch. I
          have formulated these bars specifically with the hair and scalp in
          mind rather than simply designating one of my bath soap formulations
          as shampoo. Say goodbye to incomprehensible ingredient lists and
          plastic bottles and hello to natural shampoo that will leave your hair
          and scalp clean and healthy.
        </p>
        <Notifications />
        {/* figure this out, then proceed with shipping estimate tests */}
        <ShavingProductsList>
          {props.inStockShampoo &&
            props.inStockShampoo.length > 0 &&
            props.inStockShampoo.map((variety) => (
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
          {props.outOfStockShampoo &&
            props.outOfStockShampoo.length > 0 &&
            props.outOfStockShampoo.map((variety) => (
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
  const [inStockShampoo, outOfStockShampoo] = await orderProductList("shampoo");
  console.log(inStockShampoo);

  return {
    props: {
      inStockShampoo: JSON.parse(JSON.stringify(inStockShampoo)),
      outOfStockShampoo: JSON.parse(JSON.stringify(outOfStockShampoo)),
    },
  };
}
