# blockchain-developer-bootcamp-final-project
## Overview
The goal is to create a smart contract, dWILL, to distribute Ethereum assets to a list of pre-defined addresses after the unfortunate death of asset owner. A given asset owner enter into dWill when he/she is alive. Asset owner holds assets at different wallets and worried that nobody else can access those assets after their sudden death. With dWILL, asset owner are allowed to make arrangement without exposing their assets to any trusted party and be prepared. dWILL will only triggered by the death of asset owner.
## High-level workflow 
1. A oracle notify dWILL that asset onwer X died (we may have a oracle problem here, but I think we can simplify it for this exercise)
2. dWILL checkes whether there's on-chain activities happend for last 12 months
3. If there is activities, cannot trust oracle, asset distribution process will not be triggered 
4. If there is no activities, trust oracle, freeze all asset under asset owner's addresses for a further 3 months
5. dWill asked asset owner whether to reject the distribtuion every day during asset frozen preiod
6. If no single rejection received during the freeze, release asset to pre-agreed addresses
