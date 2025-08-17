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
        <SaleBanner
          text={
            "Mike’s Natural Soaps has relocated to NJ. It took much longer than expected for our belongings to be shipped across the country, but it seems the shipping containers have finally arrived. Next week we will be setting up shop in our new home. I will start shipping orders as soon as possible, but please bear with me as we get settled. Thanks for your patience and support!"
          }
        />
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
