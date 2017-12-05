const readline = require('readline');
const bip39 = require('bip39');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Insert your phases: ', (phases) => {
  const privateKey = bip39.mnemonicToEntropy(phases);
  console.log('Your private key is', privateKey);
  rl.close();
});
