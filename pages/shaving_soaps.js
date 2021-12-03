import NavBar from "../components/NavBar";
import Image from "next/image";
import { shavingSoapFormats } from "../shavingProducts";
import ShavingSoapFormatList from "../components/ShavingSoapFormatList";
import ShavingSoapFormatListItem from "../components/ShavingSoapFormatListItem";

const ShavingSoaps = () => {
  return (
    <>
      <NavBar />
      <main>
        <ShavingSoapFormatList>
          {shavingSoapFormats.map((format) => (
            <ShavingSoapFormatListItem
              type={format.type}
              image={format.image}
              url={format.url}
            />
          ))}
        </ShavingSoapFormatList>
      </main>
    </>
  );
};

export default ShavingSoaps;
