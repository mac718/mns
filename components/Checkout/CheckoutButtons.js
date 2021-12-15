import React from "react";

const CheckoutButtons = (props) => {
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [items, setItems] = React.useState([]);
  const [shipping, setShipping] = React.useState([]);

  const paypalRef = React.useRef();

  React.useEffect(() => {
    setShipping(props.shippingService);
  }, [props.shippingService]);

  React.useEffect(() => {
    let lineItems;
    let total;
    if (localStorage.getItem("items")) {
      setItems(JSON.parse(localStorage.getItem("items")));
      lineItems = JSON.parse(localStorage.getItem("items")).map((item) => {
        return {
          name: `${item.name} ${item.type}`,
          unit_amount: { value: String(item.price), currency_code: "USD" },
          quantity: item.quantity,
          description: `${item.name} ${item.type}`,
        };
      });

      if (localStorage.total) {
        console.log(localStorage.getItem("total"));
        total = localStorage.getItem("total");
      }
    }

    lineItems = [
      ...lineItems,
      {
        name: `Shipping: ${props.shippingService[0]}`,
        unit_amount: { value: props.shippingService[1], currency_code: "USD" },
        quantity: 1,
        description: "Shipping",
      },
    ];

    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          console.log("data", data);
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  value: Number(total) + Number(props.shippingService[1]),
                  breakdown: {
                    item_total: {
                      currency_code: "USD",
                      value: Number(total) + Number(props.shippingService[1]),
                    },
                  },
                },
                items: lineItems,
                description: "single order",
              },
            ],
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
          console.log(data.shipping_address);
          if (data.shipping_address.zip_code !== enteredZip) {
            setError("Entered zip and Address zip don't match.");
            actions.reject();
          }
          if (
            !(
              data.shipping_address.country_code === "US" ||
              data.shipping_address.country_code === "CA"
            )
          ) {
            setError("Shipping is only available to the US and Canada.");
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
    return <div>Error Occurred in processing payment! Please try again.</div>;
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
