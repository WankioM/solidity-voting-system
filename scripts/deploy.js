const fs = require("fs");
const path = require("path");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const CentralizedVoting = await ethers.getContractFactory("CentralizedVoting");
  const contract = await CentralizedVoting.deploy(deployer.address);

  await contract.deployed();
  console.log("CentralizedVoting deployed to:", contract.address);

  // Path where the ABI is located in your project after compiling
  const artifactsPath = path.join(__dirname, "../artifacts/contracts/Lock.sol/CentralizedVoting.json");
  
  // Read the ABI from the artifacts folder
  const abi = JSON.parse(fs.readFileSync(artifactsPath, 'utf8')).abi;

  // Save the contract address and ABI to the frontend folder
  const contractsDir = path.join(__dirname, "../frontend/src/contracts");

  // Ensure the contracts directory exists
  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(contractsDir, "CentralizedVoting.json"),
    JSON.stringify(
      {
        address: contract.address,
        abi: abi,
      },
      null,
      2
    )
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
