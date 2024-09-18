// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract CentralizedVoting is Ownable {
    // Mapping to store registered voters
    mapping(address => bool) public isRegistered;

    // Mapping to store vote counts
    mapping(address => uint256) public votes;

    // Function to register a voter
    function registerVoter(address voter) public onlyOwner {
        // Check if the voter is already registered
        require(!isRegistered[voter], "Voter is already registered");

        // Register the voter
        isRegistered[voter] = true;
    }

    // Function to cast a vote
    function castVote(address voter) public onlyOwner {
        // Check if the voter is registered
        require(isRegistered[voter], "Voter is not registered");

        // Increment the vote count for the voter
        votes[voter]++;
    }

    // Function to get the vote count for a voter
    function getVoteCount(address voter) public view returns (uint256) {
        return votes[voter];
    }
}
