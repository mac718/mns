import "../styles/globals.css";
import Portal from "../components/HOC/Portal";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Cart from "../components/Cart";
import CartProvider from "../store/CartProvider";
import Spinner from "../components/UI/Spinner";
import { Backdrop } from "../components/UI/Modal";
import { SessionProvider } from "next-auth/react";
import SaleBanner from "../components/SaleBanner";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
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
    <SessionProvider session={session}>
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
        <SaleBanner text={"Barber Shop bath bars are in stock!"} />
        <NavBar showCart={showCartHandler} />

        <Component
          {...pageProps}
          onShow={showCartHandler}
          onClose={hideCartHandler}
          showSpinner={showSpinnerHandler}
          hideSpinner={hideSpinnerHandler}
        />
      </CartProvider>
    </SessionProvider>
  );
}

export default MyApp;
