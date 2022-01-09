// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

/// @title A decentralised will that can be tailor-made to your need 
/// @author Tammy Yang
/// @notice You can create this contract on the ethereum blockchain without letting other people know when and how you are going to distribute your wealth on-chain
/// @dev All function calls are unit tested

import "./Utils.sol";

contract DecentralisedWill {

    address public multisig;

    struct willElement {
        address payable heir;
        uint portion;
    }

    mapping (uint256 => willElement) public will;
    uint public wCount;

    // inpput variable to the smart contract, decided by the will creator
    // constructor contains critial information like who are the heir and how much % they receive
    constructor(address _multisig, address payable _heir1, uint _portion1 , address payable _heir2  ,uint _portion2) {
        require( _portion1 + _portion2 <= 100, 'Sum of portion > 100%');
        multisig = _multisig;
        will[0].heir = _heir1;
        will[0].portion = _portion1;
        will[1].heir = _heir2;
        will[1].portion = _portion2;
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


    // Main deistibution function. Can only trigged by a specific multisig wallet 
    function distributeAsset() public payable {
        
        require(Utils.getBalance(address(this)) > 0, 'Contract is not funded, no asset to distribute!' );

        require(msg.sender == multisig, "Sender is not designated multisig wallet"); //owner should be multi sig address
        
        uint256    balance = address(this).balance;

        for(uint8 i=0; i<= 2; i++){

            address payable heir = will[i].heir;

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

    // helper function to get byte call of the distribution fuction
    function getDistributeAssetData () public pure returns(bytes memory) {
        return  abi.encodeWithSignature("distributeAsset()", " ");
    
    }
}