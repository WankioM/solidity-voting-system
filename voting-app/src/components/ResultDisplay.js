import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;
const CONTRACT_ABI = JSON.parse(process.env.REACT_APP_CONTRACT_ABI);

function ResultsDisplay() {
  const [results, setResults] = useState({});

  useEffect(() => {
    const fetchResults = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        // Fetch all registered voters and their votes
        // This part depends on how you structure your smart contract
        const voters = await contract.methods.getVoters().call();
        const voteCounts = await Promise.all(voters.map(voter => contract.methods.getVoteCount(voter).call()));
        setResults(voters.reduce((acc, voter, index) => ({ ...acc, [voter]: voteCounts[index] }), {}));
      }
    };

    fetchResults();
  }, []);

  return (
    <div>
      <h3>Voting Results:</h3>
      <ul>
        {Object.entries(results).map(([address, count]) => (
          <li key={address}>{address}: {count} votes</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultsDisplay;
