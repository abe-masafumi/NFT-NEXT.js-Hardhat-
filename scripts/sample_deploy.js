const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const Greeter = await hre.ethers.getContractFactory("SimpleStorage");
  const greeter = await Greeter.deploy();
  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
  let config = `
  export const nftaddress = "${greeter.address}"
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