import { shavingSoapFormats } from "../shavingProducts";
import ShavingSoapFormatList from "../components/ShavingSoapFormatList";
import ShavingSoapFormatListItem from "../components/ShavingSoapFormatListItem";
import Heading from "../components/Heading";

const ShavingSoaps = (props) => {
  return (
    <>
      <main>
        <Heading>Shaving Soaps</Heading>
        <ShavingSoapFormatList>
          {shavingSoapFormats.map((format) => (
            <ShavingSoapFormatListItem
              key={format.type}
              type={format.type}
              image={format.image}
              url={format.url}
              showSpinner={props.showSpinner}
            />
          ))}
        </ShavingSoapFormatList>
      </main>
    </>
  );
};

export default ShavingSoaps;
