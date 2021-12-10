import React from "react";
import ReactDOM from "react-dom";

//const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

const CheckoutButtons = () => {
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [items, setItems] = React.useState([]);
  const paypalRef = React.useRef();
  React.useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("items")));
    let units = JSON.parse(localStorage.getItem("items")).map((item) => {
      return {
        description: `${item.name} ${item.type}`,
        amount: { value: item.price * item.quantity },
      };
    });
    console.log(units);
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: units,
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          console.log(order);
        },
        onError: (err) => {
          setError(err), console.error(err);
        },
      })
      .render(paypalRef.current);
    console.log(paypalRef.current);
  }, []);

  if (paid) {
    return <div>Payment successful.!</div>;
  }

  // If any error occurs
  if (error) {
    return <div>Error Occurred in processing payment.! Please try again.</div>;
  }

  // {
  //   checkout === true ? (
  //     <div className="payment-div">
  //       <ReactPayPal total={500} />
  //     </div>
  //   ) : (
  //     <div>
  //       <h1>React-PayPal</h1>
  //       <button
  //         onClick={() => {
  //           setCheckout(true);
  //         }}
  //         className="checkout-button"
  //       >
  //         Checkout
  //       </button>
  //     </div>
  //   );
  // }
  return <div ref={paypalRef}></div>;
};

export default CheckoutButtons;
