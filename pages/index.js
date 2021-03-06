import Head from "next/head";
import Image from "next/image";
import allShavingProducts from "../public/all_shaving_products.jpeg";
import MainImage from "../components/MainImage";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import SubHeading from "../components/SubHeading";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mike&apos;s Natural Soaps</title>
      </Head>
      <main>
        <Heading>Mike&apos;s Natural Soaps</Heading>
        <SubHeading>Handmade in Portland, OR.</SubHeading>
        <MainImage>
          <Image src={allShavingProducts} />
        </MainImage>
      </main>
      <Footer />
    </div>
  );
}
