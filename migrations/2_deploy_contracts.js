const DecentralisedWill = artifacts.require("DecentralisedWill");
const MultiSig = artifacts.require("MultiSig")


// create object simple storage and pass it to the deployer
module.exports = function (deployer, network, accounts) {
  const owners = [accounts[0], accounts[1]]
  deployer.deploy(DecentralisedWill);
  deployer.deploy(MultiSig, owners, 2)
  // if you need address of another contract to be useed this contract, add constructor variable here 
};
