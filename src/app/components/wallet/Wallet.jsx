// import { useState, useEffect } from "react";
// import { connectWallet } from "../../utils/ConnectWallet";
// import Web3Context from '../../context/Web3Context';
// import Button from "../button/Button";
// import { handleAccountChange } from "../../utils/handleAccountChange";
// import { handleChainChange } from "../../utils/handleChainChange";

// const Wallet = ({children}) => {

// const [isWalletConnected, setIsWalletConnected] = useState(false);

// // const handleWalletToggle = () => {
// //     setIsWalletConnected((prev) => !prev); // Toggle the state
// //   };


//  const [state, setState] = useState({
//     provider:null,
//     account: null,
//     PayLiskContract: null,
//     chainId: null,  
//  })

//  const [isLoading,setIsLoading]=useState(false);

//  useEffect(() => {
//       window.ethereum.on('accountsChanged', () =>handleAccountChange(setState))
//       window.ethereum.on('chainChanged', () =>handleChainChange(setState))

//       return() => {
//             window.ethereum.removeListener('accountsChanged', () =>handleAccountChange(setState))

//             window.ethereum.removeListener('chainChanged', () =>handleChainChange(setState))
//       }
//  }, [])


//  const handleWallet = async()=>{
//       try{
//             setIsLoading(true);
//             const{
//                   provider,
//                   selectedAccount,
//                   PayLiskContract,
//                   chainId,  
//             } = await connectWallet();
//             console.log(
//                   "Provider:", provider,
//                   "selectedAccount:",selectedAccount,
//                   "PayLiskContract:",PayLiskContract,
//                   "chainId:",chainId,  
//             )
//             setState({
//                   provider,
//                   selectedAccount,
//                   PayLiskContract,
//                   chainId, 
//             })
//       }catch(error){
//             console.error("Error connecting Wallet: ", error.message)
//       }finally{
//             setIsLoading(false)
//       }
//  }

//  return (
//     <div>
//       <Button
//         onClick={handleWallet}
//         type="button"
//         label={
//           state.selectedAccount ? (
//             "Disconnect"
//           ) : (
//             "Connect"
//           )
//         }
//         disabled={isLoading}
//       />
//       <Web3Context.Provider value={state}>{children}</Web3Context.Provider>
//       {isLoading && <p>Loading...</p>}
//     </div>
//   );

// }

// export default Wallet




import React, { useState, useEffect } from "react";
import { connectWallet } from "../../utils/ConnectWallet";
import Web3Context from '../../context/Web3Context';
import Button from "../button/Button";
import { handleAccountChange } from "../../utils/handleAccountChange";
import { handleChainChange } from "../../utils/handleChainChange";

const Wallet = ({children}) => {
  const [state, setState] = useState({
    provider: null,
    account: null,
    LiskPayContract: null,
    chainId: null,  
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.ethereum.on('accountsChanged', () => handleAccountChange(setState));
    window.ethereum.on('chainChanged', () => handleChainChange(setState));

    return () => {
      window.ethereum.removeListener('accountsChanged', () => handleAccountChange(setState));
      window.ethereum.removeListener('chainChanged', () => handleChainChange(setState));
    };
  }, []);

  const handleWalletToggle = async () => {
    try {
      setIsLoading(true);
      if (state.selectedAccount) {
        // If already connected, disconnect wallet
        setState({
          provider: null,
          account: null,
          LiskPayContract: null,
          chainId: null,
        });
      } else {
        // If not connected, connect wallet
        const {
          provider,
          selectedAccount,
          LiskPayContract,
          chainId,
        } = await connectWallet();
                    console.log(
                  "Provider:", provider,
                  "selectedAccount:",selectedAccount,
                  "LiskPayContract:",LiskPayContract,
                  "chainId:",chainId,  
            )
        setState({
          provider,
          selectedAccount,
          LiskPayContract,
          chainId,
        });
      }
    } catch (error) {
      console.error("Error connecting Wallet: ", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
        <div className='flex justify-end mr-10 pt-3'>
            <Button

                onClick={handleWalletToggle}
                type="button"
                label={state.selectedAccount ? "Disconnect wallet" : "Connect wallet"}
                disabled={isLoading}
            />
        </div>
        <Web3Context.Provider value={state}>{children}</Web3Context.Provider>
        {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default Wallet;
