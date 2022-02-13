require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remember artwork inner drink flower ski'; 
let testAccounts = [
"0x651ca457f3c70283792a2a25234c6ac3ec2d3107027c81ac5070f422db185039",
"0x9ef97487215b9d3af404bdc9eb70851209571c1fa009126ca669a2b276252064",
"0x46416f63e7ef6050653f1b740efbc3874b20d820e73119dea753f8467402c4c5",
"0x618b8ad6af064361a7221481cf350f7cbf095ce5464067ab5146b90eff7cd540",
"0x7b4407b8d1995ce8c42dbd7fdf29e44e78953545d886b1d8e938d2b31dca6db0",
"0x26b883423f513b8fb07fb302a331f5967f2e4f4909bb3a11a320d61a0661df3e",
"0xe2276c5feda69c4d2015571302260d053d7addb84671b0aab49d5df438d8d4f7",
"0x5ecdf8fc358424a97d3e0ae3b6cde7a56a91383c08f1e61d75937fc17a25e497",
"0xd73c825a489682430cd3b814fd66f070895dfc44a2c976b45c90b9faf0f2b4e8",
"0xed679a367b3a3d322d82842b08122cdf41d3ce51594d7fc352c061e2dd6d1f11"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

