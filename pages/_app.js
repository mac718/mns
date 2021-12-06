import "../styles/globals.css";
import Portal from "../components/HOC/Portal";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Cart from "../components/Cart";

function MyApp({ Component, pageProps }) {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      <Portal>{showCart && <Cart onClose={hideCartHandler} />}</Portal>
      <NavBar showCart={showCartHandler} />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
