// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract CentralizedVoting is Ownable {
    // Mapping to store registered voters
    mapping(address => bool) public isRegistered;

    // Mapping to store vote counts
    mapping(address => uint256) public votes;

    // Array to store the list of registered voters
    address[] public voterList;

    // Event emitted when a voter is registered
    event VoterRegistered(address indexed voter);

    // Event emitted when a vote is cast
    event VoteCast(address indexed voter);

    // Constructor takes an initialOwner argument
    constructor(address initialOwner) Ownable(initialOwner) {}

    // Function to register a voter
    function registerVoter(address voter) public onlyOwner {
        // Check if the voter is already registered
        require(!isRegistered[voter], "Voter is already registered");

        // Register the voter
        isRegistered[voter] = true;
        voterList.push(voter);  // Add voter to voterList
        emit VoterRegistered(voter);
    }

    // Function to get the list of registered voters
    function getVoters() public view returns (address[] memory) {
        return voterList;
    }

    // Function to cast a vote
    function castVote() public {
        // Check if the voter is registered
        require(isRegistered[msg.sender], "Voter is not registered");

        // Increment the vote count for the caller
        votes[msg.sender]++;
        emit VoteCast(msg.sender);
    }

    // Function to get the vote count for a voter
    function getVoteCount(address voter) public view returns (uint256) {
        return votes[voter];
    }
}
