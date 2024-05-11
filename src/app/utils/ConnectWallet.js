// import { ethers, Contract } from "ethers";
// import { liskPayAddress, liskPay } from "../context/constant";



// export const connectWallet = async () => {
//   try {
//     let [signer, LiskPayContract, provider, chainId] = [
//       null,
//       null,
//       null,
//       null,
//     ];

//     if (window.ethereum === null) {
//       throw new Error("Metamask is not installed");
//     }

//     const accounts = await window.ethereum.request({
//       method: "eth_requestAccounts",
//     });
//     const selectedAccount = accounts[0];

//     let chainIdHex = await window.ethereum.request({
//       method: "eth_chainId",
//     });

//     chainId = parseInt(chainIdHex, 16);

//     provider = new ethers.BrowserProvider(window.ethereum);
//     signer = await provider.getSigner();

//     const liskPayContractAddress = liskPayAddress;


//     LiskPayContract = new Contract(liskPayContractAddress, liskPay, signer);




//     return {
//       provider,
//       selectedAccount,
//       LiskPayContract,
//       chainId,
//     };
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// };




// import { ethers, Contract } from "ethers";
// import Web3 from "web3";
// import { liskPayAddress, liskPay } from "../context/constant";



// export const connectWallet = async () => {
//   try {
//     let [signer, LiskPayContract, provider, chainId] = [
//       null,
//       null,
//       null,
//       null,
//     ];

//     if (window.ethereum === null) {
//       throw new Error("Metamask is not installed");
//     }

//     const accounts = await window.ethereum.request({
//       method: "eth_requestAccounts",
//     });
//     const selectedAccount = accounts[0];

//     let chainIdHex = await window.ethereum.request({
//       method: "eth_chainId",
//     });

//     chainId = parseInt(chainIdHex, 16);

//     provider = new ethers.BrowserProvider(window.ethereum);
//     signer = await provider.getSigner();

//     const liskPayContractAddress = liskPayAddress;


//     LiskPayContract = new Contract(liskPayContractAddress, liskPay, signer);

//     const web3 = new Web3(window.ethereum);
//     const liskContract = new web3.eth.Contract(liskPay,liskPayAddress)

//     const balance = await liskContract.methods
//       .getBalance(selectedAccount)
//       .call();
//       const balanceInWei = ethers.formatUnits(balance.toString(), 18);

//     const symbol = await liskContract.methods.symbol().call();




//     return {
//       provider,
//       selectedAccount,
//       balanceInWei,
//       symbol,
//       LiskPayContract,
//       chainId,
//     };
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// };



import { ethers, Contract } from "ethers";
import { liskPayAddress, liskPay } from "../context/constant";


export const connectWallet = async () => {
  try {
    let [signer, LiskPayContract, provider, chainId] = [
      null,
      null,
      null,
      null,
    ];

    if (window.ethereum === null) {
      throw new Error("Metamask is not installed");
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const selectedAccount = accounts[0];

    let chainIdHex = await window.ethereum.request({
      method: "eth_chainId",
    });
    chainId = parseInt(chainIdHex, 16);

    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();

    const liskPayContractAddress = liskPayAddress;
    LiskPayContract = new Contract(liskPayContractAddress, liskPay, signer);

    // const balance = await LiskPayContract.getBalance(selectedAccount);
    // const balanceInWei = ethers.utils.formatUnits(balance.toString(), 18);


    return {
      provider,
      selectedAccount,
      // balanceInWei,
      LiskPayContract,
      chainId,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

