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

  const { country, zip, orderWeight } = req.body;
  console.log(req.body);

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
    fromPostalCode: "08859",
    toState: null,
    toCountry: `${country}`,
    toPostalCode: `${zip}`,
    toCity: null,
    weight: { value: orderWeight, units: "ounces" },
    dimensions: null,
    confirmation: null,
    residential: true,
  };

  try {
    rates = await axios({
      method: "POST",
      url: "https://ssapi.shipstation.com/shipments/getrates",
      data: raw,
      headers: headers,
    });
  } catch (error) {
    console.log("error", error);
  }

  res.send(rates.data);
}
