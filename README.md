# blockchain-developer-bootcamp-final-project
## Overview
The goal is to create a smart contract, Decentralised Will to distribute Ethereum assets to a list of pre-defined addresses after the unfortunate death of asset owner. A given asset owner creates the will when he/she is alive. The distribution can and only can be triggered by a multisig wallet who also setup by the asset owner in advanced. After the unforuntate event, the trusted parties that being appointed by the asset owner can provide their signatures to execute the asset distribution.

## How does the dApp work?
The dApp is powered by three smart contracts. 
### Multi Signature Wallet MultiSig.sol - Deployed by Asset Owner
This it the contract that executes the actual asset distribution. Asset owner decides: 
1. Who can execute his/her will in the future
2. How many signautres are required before excecuting the will
3. How long will the fund be locked in the wallet after first signature is received. This is to prevent all pre-appointed trusted parties and pre-appointed heirs work together to access the fund when the asset owner is still alive. The asset owner can tell the multisig wallet to be under locked down for 12-month before receiving the last required signaure, in this case asset owner can withdraw the fund during the lockdown time after he/she notices that all parties are acting maliciously
4. Who can withdraw the fund from the multisig wallet - it can be the owner or some other people the owner prefer. Withdrawal action is only allowed for this address, nobody else can withdraw fund from multisig wallet

### Asset Distribution Contract DecentralisedWill.sol - Deployed by Asset
This is the contract that contains the actual will - who gets how much ethers. Again, asset owner decieds:
1. Who are the heirs
2. What are the portions for each heirs
This contract does not have any other functions apart from distribution. It can only be called by the Multi Siganture wallet.

## High Level Workflow
The full workflow of using the dApp is shown below. To make the whole flow easier, these are the roles required:
1 Asset Owner: Rich Person
2 Trusted Parties to execute will: Trusted Lawyer 1, 2
3 Heirs: Alice and Bob
### 1 Rich creates and deploy Multisig Wallet and Decentralised Will

![image](https://user-images.githubusercontent.com/50827444/148706194-80fe32b2-0dc0-4c43-873b-8774092874ad.png)

![image](https://user-images.githubusercontent.com/50827444/148706205-45e265f7-0445-45da-9c98-42dec4420fa8.png)

### 2 Trusted Lawyers provide signature to Multisig Wallet. Once all condition met, execute will

![image](https://user-images.githubusercontent.com/50827444/148705974-69d87201-0e29-4582-bfda-c261860f3a28.png)



