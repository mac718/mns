import Heading from "../components/Heading";
import NavBar from "../components/NavBar";
import shampoo from "../public/shampoo_bar.jpg";
import MainImage from "../components/MainImage";
import Image from "next/image";
import styles from "./shaving_products.module.css";
import ShavingProductItem from "../components/ShavingProductItem";
import ShavingProductsList from "../components/ShavingProductsList";
import Notifications from "../components/Notifications";
import Footer from "../components/Footer";

export default function ShampooBar() {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Heading>Shampoo Bar</Heading>
        <MainImage>
          <Image src={shampoo} />
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
          <ShavingProductItem />
        </ShavingProductsList>
      </main>
      <Footer />
    </>
  );
}
