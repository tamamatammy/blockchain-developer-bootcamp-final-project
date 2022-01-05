// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract DecentralisedWill {

    struct wElement {
        address heir;
        uint portion;
    }

    mapping (uint256 => wElement) public will;
    uint public wCount;

    constructor() {
        will[0].heir = 0x64a68c98E525161B1f8644331D83026015B8312D;
        will[0].portion = 70;

        will[1].heir = 0x8e90460fB6c12f8894b2C552F7e93997a31d3C63;
        will[1].portion = 30;

    }
    
    event Execution(address heir, uint heirValue, uint portion);
    
    event ExecutionFailure(address heir, uint heirValue, uint portion) ;


    fallback() external payable {}

    receive() external payable {}

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function getHeirPortion(uint id) public view returns(address, uint) { 
        uint _portion = will[id].portion;
        address _heir = will[id].heir;
        return (_heir, _portion);
    }

    function distributeAsset() external {
        uint256    balance = address(this).balance;
        for(uint8 i=0; i<= 2; i++){
            address payable heir   = payable(will[i].heir);
            uint256 portion = will[i].portion;
            uint256 heirValue;
            heirValue = balance * portion / 100 ;
            (bool success, /*bytes memory */) = heir.call{value: heirValue}(" ");//value(t.value)(t.data); // execute transaction
        if (success)
            emit Execution(heir, heirValue, portion);
        else {
            emit ExecutionFailure(heir, heirValue, portion);
            }
        }
    }

    function getDistributeAssetData () public pure returns(bytes memory) {
        return abi.encodeWithSignature("distributeAsset()", "");
    }
}

contract PriceConsumerV3 {

    AggregatorV3Interface internal priceFeed;

    /**
     * Network: Kovan
     * Aggregator: ETH/USD
     * Address: 0x9326BFA02ADD2366b30bacB125260Af641031331
     */
    constructor() public {
        priceFeed = AggregatorV3Interface(0x9326BFA02ADD2366b30bacB125260Af641031331);
    }

    /**
     * Returns the latest price
     */
    function getThePrice() public view returns (int) {
        (
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        return price;
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






