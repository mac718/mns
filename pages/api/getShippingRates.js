const axios = require("axios");
import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "POST", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${process.env.SHIPSTATION_AUTH}`,
    "Access-Control-Allow-Origin":
      "https://ssapi.shipstation.com/shipments/getrates",
    Host: "ssapi.shipstation.com",
  };

  let rates;

  const raw = {
    carrierCode: "stamps_com",
    serviceCode: "",
    packageCode: null,
    fromPostalCode: "97225",
    toState: "DC",
    toCountry: "US",
    toPostalCode: "20500",
    toCity: "Washington",
    weight: { value: 3, units: "ounces" },
    dimensions: { units: "inches", length: 7, width: 5, height: 6 },
    confirmation: "delivery",
    residential: false,
  };
  rates = await axios({
    method: "POST",
    url: "https://ssapi.shipstation.com/shipments/getrates",
    data: raw,
    headers: headers,
  });
  // .then((res) => {
  //   rates = res;
  // })
  // .catch((err) => console.log(err));

  return res.send(rates.data);
}
