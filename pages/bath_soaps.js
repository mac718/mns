import { shavingSoapFormats } from "../shavingProducts";
import ShavingSoapFormatList from "../components/ShavingSoapFormatList";
import ShavingSoapFormatListItem from "../components/ShavingSoapFormatListItem";
import Heading from "../components/Heading";

const BathSoaps = () => {
  return (
    <>
      <main>
        <Heading>Bath Soaps</Heading>
        <ShavingSoapFormatList>
          {shavingSoapFormats.map((format) => (
            <ShavingSoapFormatListItem
              key={format.type}
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

export default BathSoaps;
