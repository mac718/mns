import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mike's Natural Soaps</title>
      </Head>
      <NavBar />
    </div>
  );
}
