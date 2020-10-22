const fs = require("fs");
const Web3 = require("web3");
const mnemonic = "evidence moment purchase dial inject three trash guess cricket wheel peanut auto";
const truffleURL = "https://rinkeby.infura.io/v3/00cc148ebbd74ba7b677a16171a8b675"
const HDWalletProvider = require("truffle-hdwallet-provider");
const provider = new HDWalletProvider(mnemonic, truffleURL)
const web3 = new Web3(provider);
const bytecode = fs.readFileSync('./build/__contracts_lottery_sol_Lottery.bin');
const abi = JSON.parse(fs.readFileSync('./build/__contracts_lottery_sol_Lottery.abi'));
const deploy = async() => {
    accounts = await web3.eth.getAccounts()
    console.log("Trying to deploy from accounts ", accounts[0]);
    lottery = await 
    new web3.eth.Contract(abi)
        .deploy({ 
            data: '0x'+bytecode, 
        }).send({
            from: accounts[0], 
            gas:'1000000'
    });
    console.log('contract deployed to',lottery.options.address);
    // const message = await 
    // lottery.methods.message().call();
    // console.log(message);
    process.exit();             
};
deploy();