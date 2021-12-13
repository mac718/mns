import React from "react";
import ReactDOM from "react-dom";

//const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

const CheckoutButtons = (props) => {
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [items, setItems] = React.useState([]);
  const [shipping, setShipping] = React.useState([]);
  console.log(props.zip);
  const paypalRef = React.useRef();
  React.useEffect(() => {
    setShipping(props.shippingService);
  }, [props.shippingService]);
  React.useEffect(() => {
    let units;
    if (localStorage.getItem("items")) {
      setItems(JSON.parse(localStorage.getItem("items")));
      units = JSON.parse(localStorage.getItem("items")).map((item) => {
        return {
          description: `${item.name} ${item.type}`,
          amount: { value: item.price * item.quantity },
          reference_id: item.id,
        };
      });
    }

    //setShipping(localStorage.getItem("shipping").split(","));

    console.log("shipping", props.shippingService);

    units = [
      ...units,
      {
        description: `Shipping: ${props.shippingService[0]}`,
        amount: { value: Number(props.shippingService[1]) },
        reference_id: "shipping",
      },
    ];

    console.log(units);
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          console.log("data", data);
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
        onShippingChange: (data, actions) => {
          if (data.shipping_address.zip_code !== enteredZip) {
            actions.reject();
          }
          if (
            data.shipping_address.country_code !== "US" ||
            data.shipping_address.country_code !== "CAN"
          ) {
            actions.reject();
          }
          actions.resolve();
        },
      })
      .render(paypalRef.current);
    console.log(paypalRef.current);
  }, []);

  if (paid) {
    localStorage.clear();
    return <div>Payment successful!</div>;
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
