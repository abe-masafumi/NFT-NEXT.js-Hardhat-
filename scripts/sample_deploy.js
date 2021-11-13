const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const Sample = await hre.ethers.getContractFactory("SimpleStorage");
  const sample = await Sample.deploy();
  await sample.deployed();
  const Mint = await hre.ethers.getContractFactory("GameItem");
  const mint = await Mint.deploy();
  await mint.deployed();

  console.log("Sample deployed to:", sample.address);
  console.log("Mint deployed to:", mint.address);
  let config = `
  export const SimpleStorage = "${sample.address}"
  export const GameItem = "${mint.address}"
  `
  
  let data = JSON.stringify(config)
  fs.writeFileSync('config.js', JSON.parse(data))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });