// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

library Utils {
    function getBalance(address _address) internal view returns (uint) {
        return _address.balance;
    }

    function distribute(uint256 _totalAmount, uint256 _portion) internal pure returns (uint){
        uint256 amount = _totalAmount * _portion / 100;
        return amount;
    }
}

contract DecentralisedWill {

    using Utils for uint; //using library

    address public multisig;

    struct willElement {
        address heir;
        uint portion;
    }

    mapping (uint256 => willElement) public will;
    uint public wCount;



    constructor(address _multisig) {
        multisig = _multisig;
        will[0].heir = 0x64a68c98E525161B1f8644331D83026015B8312D;
        will[0].portion = 70;
        will[1].heir = 0x8e90460fB6c12f8894b2C552F7e93997a31d3C63;
        will[1].portion = 30;

    
    }

    // modifier checkSender() {
    //       if (msg.sender != multisig)
    //           revert();
    //       _;
    // }

    event Execution(address heir, uint priorBalance, uint heirValue, uint postBalance) ;
    
    event ExecutionFailure(address heir, uint priorBalance, uint heirValue, uint postBalance) ;


    fallback() external payable { revert(); }

    receive() external payable {}

    function getHeirPortion(uint id) public view returns(address, uint) { 

        uint _portion = will[id].portion;
        
        address _heir = will[id].heir;
        
        return (_heir, _portion);
    
    }

    function distributeAsset() external {
        
        require(Utils.getBalance(address(this)) > 0, 'Contract is not funded, no asset to distribute!' );

        require(msg.sender == multisig, "Sender is not designated multisig wallet"); //owner should be multi sig address
        
        uint256    balance = address(this).balance;

        for(uint8 i=0; i<= 2; i++){

            address payable heir   = payable(will[i].heir);

            uint256 portion = will[i].portion;

            uint256 priorHeirBalnace = Utils.getBalance(heir);
             
            uint256 heirValue = Utils.distribute(balance, portion);
            
            (bool success, ) = heir.call{value: heirValue}(" ");

            uint256 postHeirBalnace = Utils.getBalance(heir);

        if (success)
            emit Execution(heir, priorHeirBalnace, heirValue, postHeirBalnace);
        else {
            emit ExecutionFailure(heir, priorHeirBalnace, heirValue, postHeirBalnace);
            }
        }
    }

    function getDistributeAssetData () public pure returns(bytes memory) {
        return  abi.encodeWithSignature("distributeAsset()", " ");
    
    }
}


//// Get distrubtion list - address vs % mapping
//// function getMapping() public {}

// // Check transaction history of the owner's accounts
// // If there are any activities in the last 12-month, revert contract
// // else, process with the contract
// function checkActivityHisory() public {}

// // Get price oracle for assets in owner's account
// function getPriceOracle() public {}

// // Calculate total USD value of assets in Owner's account
// function getValueUSD() public {}

// // Distribute asset based on will
// function distributeAsset() public {}






