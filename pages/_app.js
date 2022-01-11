import "../styles/globals.css";
import Portal from "../components/HOC/Portal";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Cart from "../components/Cart";
import CartProvider from "../store/CartProvider";
import Spinner from "../components/UI/Spinner";
import { Backdrop } from "../components/UI/Modal";
import { Head } from "next/document";

function MyApp({ Component, pageProps }) {
  const [showCart, setShowCart] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  const showSpinnerHandler = () => {
    setShowSpinner(true);
  };

  const hideSpinnerHandler = () => {
    setShowSpinner(false);
  };

  return (
    <CartProvider>
      <Portal>
        {showCart && (
          <Cart onClose={hideCartHandler} showSpinner={showSpinnerHandler} />
        )}
      </Portal>
      <Portal>
        {showSpinner && (
          <Backdrop>
            <Spinner />
          </Backdrop>
        )}
      </Portal>
      <NavBar showCart={showCartHandler} />

      <Component
        {...pageProps}
        onShow={showCartHandler}
        onClose={hideCartHandler}
        showSpinner={showSpinnerHandler}
        hideSpinner={hideSpinnerHandler}
      />
    </CartProvider>
  );
}

export default MyApp;
