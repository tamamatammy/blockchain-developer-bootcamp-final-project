// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

/// @title Helper functions
/// @author Tammy Yang
/// @dev All function calls are unit tested
library Utils {
    // util function to get address balance
    function getBalance(address _address) internal view returns (uint) {
        return _address.balance;
    }


    // util function to for distribution calculation
    function distribute(uint256 _totalAmount, uint256 _portion) internal pure returns (uint){
        uint256 amount = _totalAmount * _portion / 100;
        return amount;

    }

    // util function to check wallet status
    function getLockStatus(uint256 waitBlock, uint256 submitBlock, uint256 executeBlock) internal pure returns(bool lockStatus) {
        if(executeBlock >= submitBlock + waitBlock)
            return lockStatus = true;
    }

}
