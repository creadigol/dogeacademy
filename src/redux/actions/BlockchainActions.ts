// constants
import { isMobile } from "react-device-detect";
import Web3 from "web3";
import TestContract from "../../assets/abi/TestContract.json";
declare let window: any;

export const intContract = () => {
  return async (dispatch:any) => {
    if(window.ethereum){
      let web3 = new Web3(window.ethereum);

      // const NetworkData = await TestContract.networks[4];
      const TestContractObj = new web3.eth.Contract(
          TestContract.abi as any,
          "0x18fe1937A45fa99cf37BC8aea089e20BBE0CD0E3"
      );
      dispatch(
        contractSuccess({
          TestContract: TestContractObj,
        })
      );
    }else{
      if (!isMobile) {
            alert('Please install MetaMask!');
      }
    }
  }
};


const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload:any) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const contractSuccess = (payload:any) => {
  return {
    type: "CONTRACT_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload:any) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload:any) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};



export const connect = () => {
  
  return async (dispatch:any) => {
    dispatch(connectRequest());

    if (window.ethereum) {
        
      let web3 = new Web3(window.ethereum);
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const networkId = await window.ethereum.request({
          method: "net_version",
        });
        
        // const NetworkData = await LostStaking.networks[4];
        if (networkId != 4) {
          // const MoonlightObj = new web3.eth.Contract(
          //   Moonlight.abi as any,
          //   NetworkData.address
          // );
          alert("Please change network to Rinkeby testnet");
        }
          dispatch(
            connectSuccess({
              account: accounts[0],
              // smartContract: MoonlightObj, 
              web3: web3,
            })
          );
          // Add listeners start
          window.ethereum.on("accountsChanged", (accounts:any) => {
            dispatch(updateAccount(accounts[0]));
          });
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          // Add listeners end
        // } else {
        //   dispatch(connectFailed("Change network to Mainnet."));
        // }
      } catch (err) {
        dispatch(connectFailed("Something went wrong."));
      }
    } else {
      if (isMobile) {
        window.location.href = "https://metamask.app.link/dapp/bopoverse.com/mint";
      }else{
        alert("Install Metamask.");
        dispatch(connectFailed("Install Metamask."));
      } 
   }
  };
};

export const updateAccount = (account:string) => {
  return async (dispatch:any) => {
    dispatch(updateAccountRequest({ account: account }));
  };
};
