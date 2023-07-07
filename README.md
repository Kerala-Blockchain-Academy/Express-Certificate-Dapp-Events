# Express-Certificate-Dapp-Events

Simple Certificate Dapp with Events.

## 🛠 Built With

<div align="left">
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/nodejs.svg" width="36" height="36" alt="NodeJS" /></a>
<a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/express.svg" width="36" height="36" alt="Express" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/javascript.svg" width="36" height="36" alt="JavaScript" /></a>
<a href="https://soliditylang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/solidity.svg" width="36" height="36" alt="Solidity" /></a>
<a href="https://web3js.readthedocs.io/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/web3js.svg" width="36" height="36" alt="Web3Js" /></a>
<a href="https://trufflesuite.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/main/assets/icons/truffle.svg" width="36" height="36" alt="Truffle" /></a>
</div>

## ⚙️ Run Locally

Make sure to have a blockchain simulation (ganache/geth/foundry etc.) capable of WebSocket connection running on your port 8545.

Clone the project

```bash
git clone https://github.com/Kerala-Blockchain-Academy/Express-Certificate-Dapp-Events.git
```

Go to the project directory

```bash
cd Express-Certificate-Dapp-Events
```

Go to the truffle folder

```bash
cd truffle
```

Install truffle globally

```bash
npm install -g truffle
```

Compile & migrate the contract

```bash
truffle migrate
```

Go back to the project directory and install dependencies

```bash
cd .. && npm install
```

Start the application

```bash
npm run dev
```

## License

Distributed under the MIT License.
