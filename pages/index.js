import Head from "next/head";
import Image from "next/image";
import Cart from "../components/Cart";
import Portal from "../components/HOC/Portal";
import NavBar from "../components/NavBar";
import Modal from "../components/UI/Modal";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Portal>
        <Cart />
      </Portal>
      <Head>
        <title>Mike's Natural Soaps</title>
      </Head>
      <NavBar />
    </div>
  );
}
