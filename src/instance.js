import Web3 from 'web3';
import Cert from './Cert.json' assert { type: 'json' };
import deployer from './deployer.json' assert { type: 'json' };

const provider = new Web3.providers.WebsocketProvider('ws://127.0.0.1:8545')
const web3 = new Web3(provider);
export const myContract = new web3.eth.Contract(
  Cert.abi,
  Cert.networks['5777'].address,
);

export const account = deployer.from;
