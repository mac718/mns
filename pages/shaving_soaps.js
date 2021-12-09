import { shavingSoapFormats } from "../shavingProducts";
import ShavingSoapFormatList from "../components/ShavingSoapFormatList";
import ShavingSoapFormatListItem from "../components/ShavingSoapFormatListItem";
import Heading from "../components/Heading";

const ShavingSoaps = () => {
  return (
    <>
      <main>
        <Heading>Shaving Soaps</Heading>
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
