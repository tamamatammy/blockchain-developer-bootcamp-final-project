// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

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
    }

    receive() external payable {}

    address[] public owners;
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

    modifier validRequirement(uint ownerCount, uint _required) {
          if (   _required > ownerCount || _required == 0 || ownerCount == 0)
              revert();
          _;
      }

    constructor(address[] memory _owners, uint _required, uint _waitBlock) 
        validRequirement(_owners.length, _required)
    {
         for (uint i=0; i<_owners.length; i++) {
              isOwner[_owners[i]] = true;
          }
          owners = _owners;
          required = _required;
          waitBlock = _waitBlock;
    }
    
    function getSigNum(uint transactionId) public view returns(uint){   
        return transactions[transactionId].signum;

    }

    function submitTransaction(address destination, uint value, bytes memory data) public returns (uint transactionId) {
        require(isOwner[msg.sender]);
        transactionId = addTransaction(destination, value, data, block.number, 0);
        confirmTransaction(transactionId);
    }


    function confirmTransaction(uint transactionId) public {

        require(isOwner[msg.sender]);

        require(transactions[transactionId].destination != address(0));

        require(confirmations[transactionId][msg.sender] == false);

        confirmations[transactionId][msg.sender] = true;

        emit Confirmation(msg.sender, transactionId);

        executeTransaction(transactionId);

        transactions[transactionId].signum ++;

    }

    event ExecutionLocked(address indexed sender,uint indexed curentBlock, uint expectedBlock);

    function executeTransaction(uint transactionId) public {

        require(transactions[transactionId].executed == false);
        
        if (isConfirmed(transactionId)) {

            Transaction storage t = transactions[transactionId]; 

            if(Utils.getLockStatus(t.height, waitBlock, block.number)){
                
              t.executed = true;

              payable(t.destination).transfer(address(this).balance);
              
              (bool success, ) = t.destination.call{value: t.value}(t.data);

              
              if (success)          
                  emit Execution(t.destination, t.value, transactionId);   
              else {       
                  emit ExecutionFailure(t.destination, t.value, transactionId);         
                  t.executed = false;
              }
      
            } else {
                emit ExecutionLocked(msg.sender, block.number, t.height + waitBlock);       
                t.executed = false;

            }     
        }
    }

    function isConfirmed(uint transactionId) internal view returns (bool) {
        uint count = 0;
        for (uint i = 0; i < owners.length; i++) {
            if (confirmations[transactionId][owners[i]])
                count +=1;
            if (count == required)
                return true;
        }

    }

    function addTransaction(address _destination, uint _value, bytes memory _data, uint _height, uint _signum) internal returns (uint transactionId) {
        transactionId = transactionCount;
        transactions[transactionId] = Transaction({
            destination: _destination,
            value: _value,
            data: _data,
            height: _height,
            executed: false,
            signum: _signum
        });
        transactionCount += 1;
        emit Submission(transactionId);
    }

}