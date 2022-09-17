const listNetworks = [
  {
    name: "Ethereum",
    ticker: "ETH",
    logo_url: "./images/ethereum.png",
    pages: [{ label: "Etherscan", url: "https://etherscan.io/" }],
  },
  {
    name: "Polygon",
    ticker: "Matic",
    logo_url:
      "https://app.uniswap.org/static/media/polygon-matic-logo.97ff139c.svg",
    pages: [{ label: "Polygonscan", url: "" }],
  },
];

export type INetworkType = typeof listNetworks[0];

export default listNetworks;
