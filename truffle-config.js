require("dotenv").config();

const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    bscscan: process.env.API_KEY
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 5000000
    },
    bsctest: {
      provider: new HDWalletProvider({
        mnemonic: {
            phrase: process.env.SECRET
         },
         providerOrUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/"
      }),
      network_id: "97"
    },

  },
  compilers: {
    solc: {
      version: "0.8.17", 
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};
