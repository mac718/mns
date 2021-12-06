import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Modal from "../components/UI/Modal";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Modal />
      <Head>
        <title>Mike's Natural Soaps</title>
      </Head>
      <NavBar />
    </div>
  );
}
