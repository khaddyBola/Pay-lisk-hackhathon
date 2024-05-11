
// import React, { useEffect, useState, useContext } from 'react';
// import toast from 'react-hot-toast';
// import { Contract, ethers } from 'ethers'; // Import ethers
// import { connectWallet } from '../utils/ConnectWallet';
// import Web3Context from '../context/Web3Context';
// import { liskPayAddress, liskPay } from '../context/constant';

// function CurrentBalance() {
//   const { selectedAccount } = useContext(Web3Context);
//   const [balanceVal, setBalanceVal] = useState(null);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);


//   useEffect(() => {
//     const loadBalance = async () => {
//       try {
//         if (!selectedAccount) {
//           throw new Error('Selected account is undefined');
//         }
//         const liskPayContract = new Contract(liskPayAddress, liskPay, signer);
//         const bal = await liskPayContract.getBalance();
//         console.log(bal);
//         const formattedBalance = ethers.utils.formatEther(bal);
//         setBalanceVal(formattedBalance);
//       } catch (error) {
//         toast.error('Error Fetching Balance');
//         console.error('Error fetching balance:', error);
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     const connectAndLoadBalance = async () => {
//       try {
//         if (!selectedAccount) {
//           const walletData = await connectWallet();
//           console.log("Wallet connected:", walletData);
//         }
//       } catch (error) {
//         console.error('Error connecting Wallet: ', error.message);
//       }
//     };

//     if (!selectedAccount) {
//       connectAndLoadBalance();
//     } else {
//       loadBalance();
//     }
//   }, [selectedAccount]);


//   return (
//     <div title="Current Balance" className="w-full bg-white shadow-2xl rounded-lg text-black">
//       <h2 className="text-xl font-semibold my-4 ml-4 border-b border-gray-300">Current Balance</h2>
//       {isLoading ? (
//         <div>Loading...</div>
//       ) : error ? (
//         <div className="text-red-500">{error}</div>
//       ) : (
//         <div className="flex flex-col items-center gap-2">
//           <div className="text-lg md:text-xl lg:text-[50px] lg:leading-20 text-black">{balanceVal}</div>
//           <div className="text-lg text-black">Available</div>
//         </div>
//       )}
//       <div className="flex flex-col lg:flex-row md:flex-row justify-around mt-4 pb-3">
//         <div className="text-blue-600 cursor-pointer hover:text-blue-800 border border-blue-500 hover:border-blue-700 rounded-bl-2xl rounded-tr-lg rounded-br-lg px-5 mb-4 lg:mb-0 text-center">Swap Tokens</div>
//         <div className="text-blue-600 cursor-pointer hover:text-blue-800 border border-blue-500 hover:border-blue-700 rounded-br-2xl rounded-tl-lg rounded-bl-lg px-5 mb-4 lg:mb-0 text-center">Bridge Tokens</div>
//       </div>
//     </div>
//   );
// }

// export default CurrentBalance;


import React, { useEffect, useState, useContext } from 'react';
import toast from 'react-hot-toast';
import { Contract, ethers } from 'ethers'; // Import ethers
import { connectWallet } from '../utils/ConnectWallet';
import Web3Context from '../context/Web3Context';
import { liskPayAddress, liskPay } from '../context/constant';

function CurrentBalance() {
  const { selectedAccount } = useContext(Web3Context);
  const [balanceVal, setBalanceVal] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const loadBalance = async () => {
      try {
        if (!selectedAccount) {
          throw new Error('Selected account is undefined');
        }
        const signer = await getProviderOrSigner(); // Obtain the signer here
        const liskPayContract = new Contract(liskPayAddress, liskPay, signer);
        const bal = await liskPayContract.getBalance();
        console.log(bal);
        const formattedBalance = ethers.utils.formatEther(bal);
        setBalanceVal(formattedBalance);
      } catch (error) {
        toast.error('Error Fetching Balance');
        console.error('Error fetching balance:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    const connectAndLoadBalance = async () => {
      try {
        if (!selectedAccount) {
          const walletData = await connectWallet();
          console.log("Wallet connected:", walletData);
        }
      } catch (error) {
        console.error('Error connecting Wallet: ', error.message);
      }
    };

    if (!selectedAccount) {
      connectAndLoadBalance();
    } else {
      loadBalance();
    }
  }, [selectedAccount]);


  const getProviderOrSigner = async (needSigner = false) => {
    // Implement the function to get provider or signer
    // You can use Web3Modal or other methods to get the provider or signer
    // Example:
    const provider = await Web3Context.connect();
    const web3provider = new ethers.providers.Web3Provider(provider);
    if (needSigner) {
      const signer = web3provider.getSigner();
      return signer;
    }
    return web3provider;
  };

  return (
    <div title="Current Balance" className="w-full bg-white shadow-2xl rounded-lg text-black">
      <h2 className="text-xl font-semibold my-4 ml-4 border-b border-gray-300">Current Balance</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <div className="text-lg md:text-xl lg:text-[50px] lg:leading-20 text-black">{balanceVal}</div>
          <div className="text-lg text-black">Available</div>
        </div>
      )}
      <div className="flex flex-col lg:flex-row md:flex-row justify-around mt-4 pb-3">
        <div className="text-blue-600 cursor-pointer hover:text-blue-800 border border-blue-500 hover:border-blue-700 rounded-bl-2xl rounded-tr-lg rounded-br-lg px-5 mb-4 lg:mb-0 text-center">Swap Tokens</div>
        <div className="text-blue-600 cursor-pointer hover:text-blue-800 border border-blue-500 hover:border-blue-700 rounded-br-2xl rounded-tl-lg rounded-bl-lg px-5 mb-4 lg:mb-0 text-center">Bridge Tokens</div>
      </div>
    </div>
  );
}

export default CurrentBalance;
