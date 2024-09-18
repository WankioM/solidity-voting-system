import React from 'react';
import Web3 from 'web3';

function WalletConnect({ setWalletAddress }) {
  const connectWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await web3.eth.getAccounts();
      setWalletAddress(accounts[0]);
    } else {
      alert('Please install MetaMask or Coinbase Wallet');
    }
  };

  return (
    <button onClick={connectWallet}>Connect Wallet</button>
  );
}

export default WalletConnect;
