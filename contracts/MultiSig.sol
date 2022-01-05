// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

contract MultiSig {


    struct Transaction {
      bool executed;
      address destination;
      uint value;
      bytes data;
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
    
    mapping (address => bool) public isOwner;

    uint public transactionCount;

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

    constructor(address[] memory _owners, uint _required) 
        validRequirement(_owners.length, _required)
    {
         for (uint i=0; i<_owners.length; i++) {
              isOwner[_owners[i]] = true;
          }
          owners = _owners;
          required = _required;
    }
    

    function submitTransaction(address destination, uint value, bytes memory data) public returns (uint transactionId) {
        require(isOwner[msg.sender]);
        transactionId = addTransaction(destination, value, data);
        confirmTransaction(transactionId);
    }


    function confirmTransaction(uint transactionId) public {
        require(isOwner[msg.sender]);
        require(transactions[transactionId].destination != address(0));
        require(confirmations[transactionId][msg.sender] == false);
        confirmations[transactionId][msg.sender] = true;
        emit Confirmation(msg.sender, transactionId);
        executeTransaction(transactionId);
    }

    function revokeConfirmation(uint transactionId) public {}

    function executeTransaction(uint transactionId) public {

        require(transactions[transactionId].executed == false);
        
        if (isConfirmed(transactionId)) {
              
              Transaction storage t = transactions[transactionId]; 
              
              t.executed = true;
              
              payable(t.destination).transfer(address(this).balance);
              
              (bool success, ) = t.destination.call{value: t.value}(t.data);

              
              if (success)
              
                  emit Execution(t.destination, t.value, transactionId);
              
              else {
              
                  emit ExecutionFailure(t.destination, t.value, transactionId);
              
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

    function addTransaction(address destination, uint value, bytes memory data) internal returns (uint transactionId) {
        transactionId = transactionCount;
        transactions[transactionId] = Transaction({
            destination: destination,
            value: value,
            data: data,
            executed: false
        });
        transactionCount += 1;
        emit Submission(transactionId);
    }
}