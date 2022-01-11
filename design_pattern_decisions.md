# Contract Design Pattern
## Inheritance and Interfaces 
1. Imported library Utils that holds utils function for both contracts

## Access Control Design Pattern
1. Only specific address can withdraw from Multisig wall
2. Only Multisig wallet can trigger decentralised will
3. Multisig wallet check whether msg.sender is the required signature provider

## Inter-Contract Execution 
1. assetDistribution function in DecentralisedWill.sol is called by Multisig.sol after receiving all the confirmation
