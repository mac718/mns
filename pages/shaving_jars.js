import Heading from "../components/Heading";
import Image from "next/image";
import NavBar from "../components/NavBar";
import jar from "../public/shaving_jar.jpeg";
import MainImage from "../components/MainImage";

export default function ShavingJars() {
  return (
    <>
      <NavBar />
      <Heading>Shaving Jars</Heading>

      <MainImage>
        <Image src={jar} />
      </MainImage>
    </>
  );
}
