import React from "react";
import ReactDOM from "react-dom";

//const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

function Checkout() {
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);
  const paypalRef = React.useRef();
  // React.useEffect(() => {
  //   window.paypal
  //     .Buttons({
  //       createOrder: (data, actions) => {
  //         return actions.order.create({
  //           intent: "CAPTURE",
  //           purchase_units: [
  //             {
  //               description: "Your description",
  //               amount: {
  //                 currency_code: "USD",
  //                 value: 500.0,
  //               },
  //             },
  //           ],
  //         });
  //       },
  //       onApprove: async (data, actions) => {
  //         const order = await actions.order.capture();
  //         setPaid(true);
  //         console.log(order);
  //       },
  //       onError: (err) => {
  //         setError(err), console.error(err);
  //       },
  //     })
  //     .render(paypalRef.current);
  //   console.log(paypalRef.current);
  // }, []);

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
  //
  // }
  return <div ref={paypalRef}></div>;
}

export default Checkout;
