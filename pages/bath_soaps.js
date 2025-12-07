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

export default function BathSoaps(props) {
  return (
    <>
      <main className={styles.main}>
        <Heading>Bath Soap</Heading>
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
