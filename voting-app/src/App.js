import React, { useState } from 'react';
import WalletConnect from './components/WalletConnect';
import RegisterVoter from './components/RegisterVoter';
import VoteCasting from './components/VoteCasting';
import ResultsDisplay from './components/ResultsDisplay';
import ErrorHandling from './components/ErrorHandling';

function App() {
  const [walletAddress, setWalletAddress] = useState(null);

  return (
    <div>
      <WalletConnect setWalletAddress={setWalletAddress} />
      {walletAddress && (
        <>
          <RegisterVoter walletAddress={walletAddress} />
          <VoteCasting walletAddress={walletAddress} />
          <ResultsDisplay />
        </>
      )}
      <ErrorHandling />
    </div>
  );
}

export default App;
