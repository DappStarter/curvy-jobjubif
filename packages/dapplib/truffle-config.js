require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture stove dash meadow exchange give enroll metal gentle'; 
let testAccounts = [
"0xbabfc30ee6697f3b2c3e35ca7db60513e99d83150c6d4ebee5bd0972e827f49f",
"0x4716e2c07fa3bd41cc293a0c0bfa2b4d2d98483af3d3ee41de99c1efdc43823b",
"0x620e782a73d40ade57444dfc9a922c0800d64759b464f6afa36f176d7cda86b5",
"0x3e46977e7113e9c15714f9c1950287c21cbbb13af3af84c3b9fc6c60e2b8bb4f",
"0x402898b5788b6069d11618913bac86a59f2d608d1cfac19abbb138c0ea652003",
"0x562a57db0c15101cce84f905f88bb100fc97a43a10c06fdef2531421a782004e",
"0xb7b1531293ae60404dda9b288c721c3360e1051bfbedaed1dca197940906871f",
"0x7bc9f23972ee369256d886be34dce0574f9b1ceb22c66817990251e0cd3a7793",
"0x384133a3c0d608fef1f6f7d57269dea48c5358e59eeb05113bfb5419c09b4e58",
"0x51f825af7893c2679565b4f0ac2cf774cc6d8c96a30c3a0a259a4d03fa615f8b"
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
            version: '^0.5.11'
        }
    }
};
