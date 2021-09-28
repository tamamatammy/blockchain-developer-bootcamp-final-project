# blockchain-developer-bootcamp-final-project
## Overview
The goal is to create a smart contract dWILL to distribute Ethereum assets to a list of pre-defined addresses after the unfortunate death of asset owner
## High-level workflow 
1. A oracle notify dWILL that asset onwer X died
2. dWILL checkes whether there's on-chain activities happend for last 12 months
3. If there is activities, cannot trust oracle, asset distribution process will not be triggered
4. If there is no activities, trust oracle, freeze all asset under asset owner's addresses for a further 3 months
5. dWill asked asset owner whether to reject the distribtuion every day during asset frozen preiod
6. If no single rejection received during the freeze, release asset to pre-agreed addresses
