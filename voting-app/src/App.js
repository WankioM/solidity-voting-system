import React, { useState } from 'react';
import WalletConnect from './components/WalletConnect';
import RegisterVoter from './components/RegisterVoter';
import VoteCasting from './components/VoteCasting';
import ResultDisplay from './components/ResultDisplay';
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
          <ResultDisplay />
        </>
      )}
      <ErrorHandling />
    </div>
  );
}

export default App;
