import React, { useState } from 'react';
import Web3 from 'web3';

function RegisterVoter({ walletAddress }) {
  const [status, setStatus] = useState('');

  const register = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(/* ABI */, /* Contract Address */);
      try {
        await contract.methods.registerVoter(walletAddress).send({ from: walletAddress });
        setStatus('Registration successful!');
      } catch (error) {
        setStatus('Registration failed.');
      }
    }
  };

  return (
    <div>
      <button onClick={register}>Register to Vote</button>
      <p>{status}</p>
    </div>
  );
}

export default RegisterVoter;
