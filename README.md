# blockchain-developer-bootcamp-final-project
## Overview
The goal is to create a smart contract, Decentralised Will to distribute Ether to a list of pre-defined addresses after the unfortunate death of asset owner. A given asset owner creates the will when he/she is alive. The distribution can and only can be triggered by a multisig wallet which is also setup by the asset owner in advanced. After the unforuntate event, the trusted parties that being appointed by the asset owner can provide their signatures to execute the asset distribution.

## Important Links
1. DApp Link https://tamamatammy.github.io/blockchain-developer-bootcamp-final-project/
2. Dapp Demonstration https://www.loom.com/share/1534f9252aa74446abcfe97090dd591a 

## Network
Any Ethereum network. I used Kovan Testnet https://kovan.etherscan.io/, but since contracts deployment is performed via dApp, it should be able to use any testnet. Due to the nature of the app, the contract has to be deployed by the individual in order to trigger the distribution later

## Directory Structure
1. Main contract solidity code in in the contracts folder
2. Unit testing code is in the test folder
3. dApp develomnet code index.html and decentralised_will.js are astored in the first layer of the directory

## How does the dApp work?
The dApp is powered by two main smart contracts and one library. 
### Multi Signature Wallet MultiSig.sol - Deployed by Asset Owner
This it the contract that executes wil. Asset owner decides: 
1. Who can execute his/her will in the future
2. Who much fund is going to be distributed
3. How long will the fund be locked in the wallet after first signature is received. This is to prevent all pre-appointed trusted parties and heirs act maliciously to access the fund when the asset owner is still alive. The wallet lockdown can allow asset owner to have time to react and withdraw fund from the multisig wallet before the last signature
4. Who can withdraw the fund from the multisig wallet - it can be the owner or other people that the owner trusts. Withdrawal action is only allowed for this address, nobody else can withdraw fund from multisig wallet

### Asset Distribution Contract DecentralisedWill.sol - Deployed by Asset
This is the contract that contains the actual will - who gets how much ethers. Again, asset owner decieds:
1. Who are the heirs
2. What are the portions for each heirs
3. Who can execute this contract
This contract does not have any other functions apart from distribution. It can only be called by the Multi Siganture wallet.

## Steps to executing Decentralised Will
1. Go to link  https://tamamatammy.github.io/blockchain-developer-bootcamp-final-project/
2. Prepare 5 different addresses to play the roles Rich, lawyer 1, lawyer 2, Alice, and Bob
3. Connect to a testnet
4. Connect as Rich to create and deploy MultiSig.sol using dApp
5. Connect as Rich to create and deploy DecentralisedWill.sol using dApp
6. Connected as Lawyer 1 to provide first signature to MultiSig.sol
7. Connected as Lawyer 1 to provide first signature to MultiSig.sol
8. Check whether Alice and Bob's account being updated

## High Level Workflow
The full workflow of using the dApp is shown below. To make the whole flow easier, these are the roles required:
1. Asset Owner: Rich Person
2. Trusted Parties to execute will: Trusted Lawyer 1, 2
3. Heirs: Alice and Bob
### 1 Rich creates and deploy Multisig Wallet and Decentralised Will

![image](https://user-images.githubusercontent.com/50827444/148867292-aeeb22e5-9df2-4a6f-ba7b-201f9c46133d.png)

![image](https://user-images.githubusercontent.com/50827444/148867307-6f991883-9002-414b-9fde-9831c5138851.png)

### 2 Trusted Lawyers provide signature to Multisig Wallet. Once all condition met, execute will

![image](https://user-images.githubusercontent.com/50827444/148706379-fc60866b-7fff-4ce0-a2bb-3a820bdcca9e.png)

## Address to receive POAF from the course
0xb4255529ea54eDae0D11aA49ef365A88400f9f92

