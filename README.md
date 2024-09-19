# Centralized Voting System

This project demonstrates a **Centralized Voting System** where voters don't need to connect their wallets directly. Instead, their votes are recorded on the blockchain by the project owner or a trusted entity, simplifying the process for users. However, this introduces a single point of trust.

## Overview

### Features
- **Voter Registration:** The project owner registers voters using the provided smart contract.
- **Voting:** The project owner casts votes on behalf of the registered voters.
- **Result Retrieval:** The current voting results are stored on-chain and can be retrieved by the project owner or users.

### Technology Stack
- **Solidity** for the smart contracts.
- **React** for the frontend user interface.
- **Hardhat** for compiling, deploying, and testing the smart contracts.
- **MetaMask** or **Coinbase Wallet** for user interaction with the blockchain.

## Prerequisites

Make sure you have the following installed:
- **Node.js** (version >= 14)
- **npm** or **yarn**
- **MetaMask** browser extension (for testing on localhost or any live network)
- **Hardhat**

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/voting-app.git
cd voting-app
