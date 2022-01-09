// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

/// @title A multisig wallet to execute decentralised will
/// @author Tammy Yang
/// @dev All function calls are unit tested

import "./Utils.sol";

contract MultiSig {

    struct Transaction {
      bool executed;
      address destination;
      uint value;
      bytes data;
      uint height;
      uint signum;
    }

    event Deposit(address indexed sender, uint value);

    // Fallback function allows to deposit ether.
    fallback() external payable {
        if (msg.value > 0) {
            emit Deposit(msg.sender, msg.value);
	    }
        revert();
    }

    receive() external payable {}

    address[] public owners;
    address payable addressWithdrawable;
    uint public required;
    uint public waitBlock;
    uint public transactionCount;
    uint public executionDate;
    mapping (address => bool) public isOwner;
    mapping (uint => Transaction) public transactions;
    mapping (uint => mapping (address => bool)) public confirmations;

    event Confirmation(address indexed sender, uint indexed transactionId);
    event Submission(uint indexed transactionId);
    event Execution(address indexed destination, uint indexed value, uint indexed transactionId);
    event ExecutionFailure(address indexed destination, uint indexed value, uint indexed transactionId);
    event WithdrawSuccess(address withdrawAddress, uint contractBalance);
    event WithdrawFail(address withdrawAddress, uint contractBalance);

    modifier validRequirement(uint ownerCount, uint _required) {
          if (   _required > ownerCount || _required == 0 || ownerCount == 0)
              revert();
          _;
      }

    // Will creator also create this contract, he/she defines which address has the right to provide signature
    // Also which address can withdraw locked fund
    constructor(address[] memory _owners, uint _required, uint _waitBlock, address payable _addressWithdraw) 
        validRequirement(_owners.length, _required)
    {
         for (uint i=0; i<_owners.length; i++) {
              isOwner[_owners[i]] = true;
          }
          owners = _owners;
          required = _required;
          waitBlock = _waitBlock;
          addressWithdrawable = _addressWithdraw;
    }

    //This function allows a pre-defined address to submit transaction - which is the execution of d will
    function submitTransaction(address destination, uint value, bytes memory data) public returns (uint transactionId) {
        require(isOwner[msg.sender], 'st1');
        transactionId = addTransaction(destination, value, data, block.number);
        confirmTransaction(transactionId);
    }

    //This function confirm the transaction, if required number of confirmation are received, execute dwill
    function confirmTransaction(uint transactionId) public {

        require(isOwner[msg.sender], 'ct1');

        require(transactions[transactionId].destination != address(0), 'ct2');

        require(confirmations[transactionId][msg.sender] == false, 'ct3');

        confirmations[transactionId][msg.sender] = true;

        emit Confirmation(msg.sender, transactionId);

        executeTransaction(transactionId);

    }

    //Execution function of dwill, can only be executed when below conditions are met:
    // 1 All requierd signagure are received
    // 2 Wallet is unlocked
    event ExecutionLocked(address indexed sender,uint indexed curentBlock, uint expectedBlock);

    function executeTransaction(uint transactionId) public {

        require(transactions[transactionId].executed == false, 'et1');
        
        if (isConfirmed(transactionId)) {

            Transaction storage t = transactions[transactionId]; 

            //Check whether wallet is unlocked, otherwise mark execution fail and revert current confirmation
            if(Utils.getLockStatus(t.height, waitBlock, block.number)){
                
              t.executed = true;              
              (bool success, ) = t.destination.call{value: address(this).balance}(t.data);

              
              if (success)          
                  emit Execution(t.destination, t.value, transactionId);   
              else {       
                  emit ExecutionFailure(t.destination, t.value, transactionId);         
                  t.executed = false;
              }
      
            } else {
                emit ExecutionLocked(msg.sender, block.number, t.height + waitBlock);       
                t.executed = false;
                confirmations[transactionId][msg.sender] = false; // revert confrimation if it comes earlier than expected
            }     
        }
    }


    //Helper function to check whether all required confirmation are received
    function isConfirmed(uint transactionId) internal view returns (bool) {
        uint count = 0;
        for (uint i = 0; i < owners.length; i++) {
            if (confirmations[transactionId][owners[i]])
                count +=1;
            if (count == required)
                return true;
        }
    }

    //Function to add the transaction that the wallet can execute
    function addTransaction(address _destination, uint _value, bytes memory _data, uint _height) internal returns (uint transactionId) {
        transactionId = transactionCount;
        transactions[transactionId] = Transaction({
            destination: _destination,
            value: _value,
            data: _data,
            height: _height,
            signum: 1,
            executed: false
        });
        transactionCount += 1;
        emit Submission(transactionId);
    }

    // Withdraw function only restricted to a specific address - nobody else can withdraw from this wallet
    function withdraw() public {

        require(msg.sender == addressWithdrawable, 'w');

        (bool success, )= addressWithdrawable.call{value: address(this).balance}(" ");
        if(success){
            emit WithdrawSuccess(addressWithdrawable, address(this).balance);
        }
        else{
            emit WithdrawFail(addressWithdrawable, address(this).balance);
            }
        }
}