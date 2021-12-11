module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://ssapi.shipstation.com/shipments/getrates",
      },
    ];
  },
};
