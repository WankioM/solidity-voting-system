# Sample Hardhat Project

Centralized Voting:  voters don't need to connect their wallets directly. Their votes are recorded on the blockchain by the project owner or a trusted entity. This simplifies the voting process for users but introduces a single point of trust.

 Solidity Contract:
Voter Registration: Create a function to allow the project owner to register voters.
Voting: Implement a function for the project owner to cast votes on behalf of registered voters.
Result Retrieval: Provide a function to retrieve the current voting results.

React Frontend:
User Interface: An interface where users can register to vote.
Data Submission: A user registers, submit their details to the project owner.
Result Display: Fetch and display the current voting results from the contract.


This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
