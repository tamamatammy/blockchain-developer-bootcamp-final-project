// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "./Utils.sol";

contract DecentralisedWill {

    address public multisig;

    struct willElement {
        address heir;
        uint portion;
    }

    mapping (uint256 => willElement) public will;
    uint public wCount;

    constructor(address _multisig) {
        multisig = _multisig;
        will[0].heir = 0xeD20A87D97C5aC762C585F0e15eCB95214951eC9;
        will[0].portion = 70;
        will[1].heir = 0x69793e3955956173Ba297ADDCA7670c2E639211C;
        will[1].portion = 30;
    }

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