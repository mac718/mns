import Head from "next/head";
import Image from "next/image";
import Cart from "../components/Cart";
import Portal from "../components/HOC/Portal";
import NavBar from "../components/NavBar";
import Modal from "../components/UI/Modal";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <div>
      <Portal>{showCart && <Cart onClose={hideCartHandler} />}</Portal>
      <Head>
        <title>Mike's Natural Soaps</title>
      </Head>
      <NavBar showCart={showCartHandler} />
    </div>
  );
}
