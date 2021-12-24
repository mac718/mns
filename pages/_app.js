import "../styles/globals.css";
import Portal from "../components/HOC/Portal";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Cart from "../components/Cart";
import CartProvider from "../store/CartProvider";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [showCart, setShowCart] = useState(false);
  const router = useRouter();

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      <Portal>{showCart && <Cart onClose={hideCartHandler} />}</Portal>
      <NavBar showCart={showCartHandler} />

      <Component
        {...pageProps}
        onShow={showCartHandler}
        onClose={hideCartHandler}
      />
    </CartProvider>
  );
}

export default MyApp;
