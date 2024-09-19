import React, { useState } from 'react';
import Web3 from 'web3';
import CentralizedVoting from '../CentralizedVoting.json'

const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;


function VoteCasting({ walletAddress }) {
  const [voterAddress, setVoterAddress] = useState('');
  const [status, setStatus] = useState('');

  const castVote = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(CentralizedVoting.abi, CONTRACT_ADDRESS);
      try {
        await contract.methods.castVote(voterAddress).send({ from: walletAddress });
        setStatus('Vote cast successfully!');
      } catch (error) {
        setStatus('Failed to cast vote.');
      }
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter voter's address" 
        value={voterAddress} 
        onChange={(e) => setVoterAddress(e.target.value)} 
      />
      <button onClick={castVote}>Cast Vote</button>
      <p>{status}</p>
    </div>
  );
}

export default VoteCasting;
