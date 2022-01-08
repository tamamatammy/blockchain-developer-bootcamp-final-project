console.log("hello dapp developers!")

const dwABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_multisig",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "heir",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "priorBalance",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "heirValue",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "postBalance",
				"type": "uint256"
			}
		],
		"name": "Execution",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "heir",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "priorBalance",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "heirValue",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "postBalance",
				"type": "uint256"
			}
		],
		"name": "ExecutionFailure",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [],
		"name": "distributeAsset",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDistributeAssetData",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getHeirPortion",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "multisig",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "wCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "will",
		"outputs": [
			{
				"internalType": "address",
				"name": "heir",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "portion",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]
var multisigABI = [
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_owners",
				"type": "address[]"
			},
			{
				"internalType": "uint256",
				"name": "_required",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "transactionId",
				"type": "uint256"
			}
		],
		"name": "Confirmation",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Deposit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "destination",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "transactionId",
				"type": "uint256"
			}
		],
		"name": "Execution",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "destination",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "transactionId",
				"type": "uint256"
			}
		],
		"name": "ExecutionFailure",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "transactionId",
				"type": "uint256"
			}
		],
		"name": "Submission",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "transactionId",
				"type": "uint256"
			}
		],
		"name": "confirmTransaction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "confirmations",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "transactionId",
				"type": "uint256"
			}
		],
		"name": "executeTransaction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isOwner",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "owners",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "required",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "transactionId",
				"type": "uint256"
			}
		],
		"name": "revokeConfirmation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "destination",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "submitTransaction",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "transactionId",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "transactionCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "transactions",
		"outputs": [
			{
				"internalType": "bool",
				"name": "executed",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "destination",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]
// var multisigAddress = '0xcB584E2069A2e60e1D5A815F1Ed2c20A04a639c4'; // Multisig address


// Detect whether there is wallet 
window.addEventListener('load', function() {
    if (typeof window.ethereum !== 'undefined'){
        console.log('Wallet detected')
        let  walletDetected = document.getElementById('wallet-detected')
        // piped in html from javascripts 
        walletDetected.innerHTML += "Wallet has been detected"
    }

    else {
        console.log('Wallet Not Available!')
        alert("You need to install wallet!")        
    }
}

)


// 2. Connect rich wallet
const richWalletEnable = document.getElementById('wallet-connect');

richWalletEnable.onclick = async () => {
    
    await ethereum.request({method: 'eth_requestAccounts'})
    
    const walletCurrentAccount = document.getElementById('wallet-current-account');
    
    walletCurrentAccount.innerHTML = "Connected Wallet: " + ethereum.selectedAddress
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  



// deploy multisig
const deployMS = document.getElementById('deploy-ms');

deployMS.onclick = async () => {

    const lawyer1Address = document.getElementById('add-lawyer1-box').value;

    const lawyer2Address = document.getElementById('add-lawyer2-box').value;

    var web3 = new Web3(window.ethereum)

    var multisigByteCode = {
        "functionDebugData": {
            "@_151": {
                "entryPoint": null,
                "id": 151,
                "parameterSlots": 2,
                "returnSlots": 0
            },
            "abi_decode_available_length_t_array$_t_address_$dyn_memory_ptr_fromMemory": {
                "entryPoint": 792,
                "id": null,
                "parameterSlots": 3,
                "returnSlots": 1
            },
            "abi_decode_t_address_fromMemory": {
                "entryPoint": 769,
                "id": null,
                "parameterSlots": 2,
                "returnSlots": 1
            },
            "abi_decode_t_array$_t_address_$dyn_memory_ptr_fromMemory": {
                "entryPoint": 908,
                "id": null,
                "parameterSlots": 2,
                "returnSlots": 1
            },
            "abi_decode_t_uint256_fromMemory": {
                "entryPoint": 995,
                "id": null,
                "parameterSlots": 2,
                "returnSlots": 1
            },
            "abi_decode_tuple_t_array$_t_address_$dyn_memory_ptrt_uint256_fromMemory": {
                "entryPoint": 1018,
                "id": null,
                "parameterSlots": 2,
                "returnSlots": 2
            },
            "allocate_memory": {
                "entryPoint": 608,
                "id": null,
                "parameterSlots": 1,
                "returnSlots": 1
            },
            "allocate_unbounded": {
                "entryPoint": 465,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 1
            },
            "array_allocation_size_t_array$_t_address_$dyn_memory_ptr": {
                "entryPoint": 639,
                "id": null,
                "parameterSlots": 1,
                "returnSlots": 1
            },
            "cleanup_t_address": {
                "entryPoint": 723,
                "id": null,
                "parameterSlots": 1,
                "returnSlots": 1
            },
            "cleanup_t_uint160": {
                "entryPoint": 691,
                "id": null,
                "parameterSlots": 1,
                "returnSlots": 1
            },
            "cleanup_t_uint256": {
                "entryPoint": 959,
                "id": null,
                "parameterSlots": 1,
                "returnSlots": 1
            },
            "finalize_allocation": {
                "entryPoint": 554,
                "id": null,
                "parameterSlots": 2,
                "returnSlots": 0
            },
            "increment_t_uint256": {
                "entryPoint": 1214,
                "id": null,
                "parameterSlots": 1,
                "returnSlots": 1
            },
            "panic_error_0x11": {
                "entryPoint": 1167,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 0
            },
            "panic_error_0x32": {
                "entryPoint": 1120,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 0
            },
            "panic_error_0x41": {
                "entryPoint": 507,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 0
            },
            "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d": {
                "entryPoint": 485,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 0
            },
            "revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef": {
                "entryPoint": 686,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 0
            },
            "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db": {
                "entryPoint": 480,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 0
            },
            "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b": {
                "entryPoint": 475,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 0
            },
            "round_up_to_mul_of_32": {
                "entryPoint": 490,
                "id": null,
                "parameterSlots": 1,
                "returnSlots": 1
            },
            "validator_revert_t_address": {
                "entryPoint": 743,
                "id": null,
                "parameterSlots": 1,
                "returnSlots": 0
            },
            "validator_revert_t_uint256": {
                "entryPoint": 969,
                "id": null,
                "parameterSlots": 1,
                "returnSlots": 0
            }
        },
        "generatedSources": [
            {
                "ast": {
                    "nodeType": "YulBlock",
                    "src": "0:4971:1",
                    "statements": [
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "47:35:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "57:19:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "73:2:1",
                                                    "type": "",
                                                    "value": "64"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mload",
                                                "nodeType": "YulIdentifier",
                                                "src": "67:5:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "67:9:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "memPtr",
                                                "nodeType": "YulIdentifier",
                                                "src": "57:6:1"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "allocate_unbounded",
                            "nodeType": "YulFunctionDefinition",
                            "returnVariables": [
                                {
                                    "name": "memPtr",
                                    "nodeType": "YulTypedName",
                                    "src": "40:6:1",
                                    "type": ""
                                }
                            ],
                            "src": "7:75:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "177:28:1",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "194:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "197:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nodeType": "YulIdentifier",
                                                "src": "187:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "187:12:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "187:12:1"
                                    }
                                ]
                            },
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulFunctionDefinition",
                            "src": "88:117:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "300:28:1",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "317:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "320:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nodeType": "YulIdentifier",
                                                "src": "310:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "310:12:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "310:12:1"
                                    }
                                ]
                            },
                            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                            "nodeType": "YulFunctionDefinition",
                            "src": "211:117:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "423:28:1",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "440:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "443:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nodeType": "YulIdentifier",
                                                "src": "433:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "433:12:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "433:12:1"
                                    }
                                ]
                            },
                            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                            "nodeType": "YulFunctionDefinition",
                            "src": "334:117:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "505:54:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "515:38:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "533:5:1"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "540:2:1",
                                                            "type": "",
                                                            "value": "31"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "529:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "529:14:1"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "549:2:1",
                                                            "type": "",
                                                            "value": "31"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "not",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "545:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "545:7:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "and",
                                                "nodeType": "YulIdentifier",
                                                "src": "525:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "525:28:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "result",
                                                "nodeType": "YulIdentifier",
                                                "src": "515:6:1"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "round_up_to_mul_of_32",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nodeType": "YulTypedName",
                                    "src": "488:5:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "result",
                                    "nodeType": "YulTypedName",
                                    "src": "498:6:1",
                                    "type": ""
                                }
                            ],
                            "src": "457:102:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "593:152:1",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "610:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "613:77:1",
                                                    "type": "",
                                                    "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "603:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "603:88:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "603:88:1"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "707:1:1",
                                                    "type": "",
                                                    "value": "4"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "710:4:1",
                                                    "type": "",
                                                    "value": "0x41"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "700:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "700:15:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "700:15:1"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "731:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "734:4:1",
                                                    "type": "",
                                                    "value": "0x24"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nodeType": "YulIdentifier",
                                                "src": "724:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "724:15:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "724:15:1"
                                    }
                                ]
                            },
                            "name": "panic_error_0x41",
                            "nodeType": "YulFunctionDefinition",
                            "src": "565:180:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "794:238:1",
                                "statements": [
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "804:58:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "memPtr",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "826:6:1"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "size",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "856:4:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "round_up_to_mul_of_32",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "834:21:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "834:27:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "822:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "822:40:1"
                                        },
                                        "variables": [
                                            {
                                                "name": "newFreePtr",
                                                "nodeType": "YulTypedName",
                                                "src": "808:10:1",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "973:22:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "panic_error_0x41",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "975:16:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "975:18:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "975:18:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "newFreePtr",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "916:10:1"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "928:18:1",
                                                            "type": "",
                                                            "value": "0xffffffffffffffff"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "gt",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "913:2:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "913:34:1"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "newFreePtr",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "952:10:1"
                                                        },
                                                        {
                                                            "name": "memPtr",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "964:6:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "lt",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "949:2:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "949:22:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "or",
                                                "nodeType": "YulIdentifier",
                                                "src": "910:2:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "910:62:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "907:88:1"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1011:2:1",
                                                    "type": "",
                                                    "value": "64"
                                                },
                                                {
                                                    "name": "newFreePtr",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1015:10:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "1004:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1004:22:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "1004:22:1"
                                    }
                                ]
                            },
                            "name": "finalize_allocation",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "memPtr",
                                    "nodeType": "YulTypedName",
                                    "src": "780:6:1",
                                    "type": ""
                                },
                                {
                                    "name": "size",
                                    "nodeType": "YulTypedName",
                                    "src": "788:4:1",
                                    "type": ""
                                }
                            ],
                            "src": "751:281:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "1079:88:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "1089:30:1",
                                        "value": {
                                            "arguments": [],
                                            "functionName": {
                                                "name": "allocate_unbounded",
                                                "nodeType": "YulIdentifier",
                                                "src": "1099:18:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1099:20:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "memPtr",
                                                "nodeType": "YulIdentifier",
                                                "src": "1089:6:1"
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "memPtr",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1148:6:1"
                                                },
                                                {
                                                    "name": "size",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1156:4:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "finalize_allocation",
                                                "nodeType": "YulIdentifier",
                                                "src": "1128:19:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1128:33:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "1128:33:1"
                                    }
                                ]
                            },
                            "name": "allocate_memory",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "size",
                                    "nodeType": "YulTypedName",
                                    "src": "1063:4:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "memPtr",
                                    "nodeType": "YulTypedName",
                                    "src": "1072:6:1",
                                    "type": ""
                                }
                            ],
                            "src": "1038:129:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "1255:229:1",
                                "statements": [
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "1360:22:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "panic_error_0x41",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1362:16:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "1362:18:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "1362:18:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "length",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1332:6:1"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1340:18:1",
                                                    "type": "",
                                                    "value": "0xffffffffffffffff"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "gt",
                                                "nodeType": "YulIdentifier",
                                                "src": "1329:2:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1329:30:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "1326:56:1"
                                    },
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "1392:25:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "length",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1404:6:1"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1412:4:1",
                                                    "type": "",
                                                    "value": "0x20"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mul",
                                                "nodeType": "YulIdentifier",
                                                "src": "1400:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1400:17:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "size",
                                                "nodeType": "YulIdentifier",
                                                "src": "1392:4:1"
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "1454:23:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "size",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1466:4:1"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1472:4:1",
                                                    "type": "",
                                                    "value": "0x20"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "1462:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1462:15:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "size",
                                                "nodeType": "YulIdentifier",
                                                "src": "1454:4:1"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "array_allocation_size_t_array$_t_address_$dyn_memory_ptr",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "length",
                                    "nodeType": "YulTypedName",
                                    "src": "1239:6:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "size",
                                    "nodeType": "YulTypedName",
                                    "src": "1250:4:1",
                                    "type": ""
                                }
                            ],
                            "src": "1173:311:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "1579:28:1",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1596:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1599:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nodeType": "YulIdentifier",
                                                "src": "1589:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1589:12:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "1589:12:1"
                                    }
                                ]
                            },
                            "name": "revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef",
                            "nodeType": "YulFunctionDefinition",
                            "src": "1490:117:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "1658:81:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "1668:65:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1683:5:1"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1690:42:1",
                                                    "type": "",
                                                    "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "and",
                                                "nodeType": "YulIdentifier",
                                                "src": "1679:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1679:54:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "cleaned",
                                                "nodeType": "YulIdentifier",
                                                "src": "1668:7:1"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "cleanup_t_uint160",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nodeType": "YulTypedName",
                                    "src": "1640:5:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "cleaned",
                                    "nodeType": "YulTypedName",
                                    "src": "1650:7:1",
                                    "type": ""
                                }
                            ],
                            "src": "1613:126:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "1790:51:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "1800:35:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1829:5:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "cleanup_t_uint160",
                                                "nodeType": "YulIdentifier",
                                                "src": "1811:17:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1811:24:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "cleaned",
                                                "nodeType": "YulIdentifier",
                                                "src": "1800:7:1"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "cleanup_t_address",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nodeType": "YulTypedName",
                                    "src": "1772:5:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "cleaned",
                                    "nodeType": "YulTypedName",
                                    "src": "1782:7:1",
                                    "type": ""
                                }
                            ],
                            "src": "1745:96:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "1890:79:1",
                                "statements": [
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "1947:16:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "1956:1:1",
                                                                "type": "",
                                                                "value": "0"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "1959:1:1",
                                                                "type": "",
                                                                "value": "0"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "revert",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1949:6:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "1949:12:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "1949:12:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1913:5:1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "value",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "1938:5:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "cleanup_t_address",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1920:17:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "1920:24:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "eq",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1910:2:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1910:35:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "iszero",
                                                "nodeType": "YulIdentifier",
                                                "src": "1903:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "1903:43:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "1900:63:1"
                                    }
                                ]
                            },
                            "name": "validator_revert_t_address",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nodeType": "YulTypedName",
                                    "src": "1883:5:1",
                                    "type": ""
                                }
                            ],
                            "src": "1847:122:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "2038:80:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "2048:22:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "offset",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2063:6:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mload",
                                                "nodeType": "YulIdentifier",
                                                "src": "2057:5:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2057:13:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "value",
                                                "nodeType": "YulIdentifier",
                                                "src": "2048:5:1"
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2106:5:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "validator_revert_t_address",
                                                "nodeType": "YulIdentifier",
                                                "src": "2079:26:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2079:33:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "2079:33:1"
                                    }
                                ]
                            },
                            "name": "abi_decode_t_address_fromMemory",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "offset",
                                    "nodeType": "YulTypedName",
                                    "src": "2016:6:1",
                                    "type": ""
                                },
                                {
                                    "name": "end",
                                    "nodeType": "YulTypedName",
                                    "src": "2024:3:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "value",
                                    "nodeType": "YulTypedName",
                                    "src": "2032:5:1",
                                    "type": ""
                                }
                            ],
                            "src": "1975:143:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "2254:619:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "2264:90:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "length",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2346:6:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "array_allocation_size_t_array$_t_address_$dyn_memory_ptr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2289:56:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2289:64:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "allocate_memory",
                                                "nodeType": "YulIdentifier",
                                                "src": "2273:15:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2273:81:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "array",
                                                "nodeType": "YulIdentifier",
                                                "src": "2264:5:1"
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "2363:16:1",
                                        "value": {
                                            "name": "array",
                                            "nodeType": "YulIdentifier",
                                            "src": "2374:5:1"
                                        },
                                        "variables": [
                                            {
                                                "name": "dst",
                                                "nodeType": "YulTypedName",
                                                "src": "2367:3:1",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "array",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2396:5:1"
                                                },
                                                {
                                                    "name": "length",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2403:6:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "2389:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2389:21:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "2389:21:1"
                                    },
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "2419:23:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "array",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2430:5:1"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "2437:4:1",
                                                    "type": "",
                                                    "value": "0x20"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "2426:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2426:16:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "dst",
                                                "nodeType": "YulIdentifier",
                                                "src": "2419:3:1"
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "2452:44:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "offset",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2470:6:1"
                                                },
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "length",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2482:6:1"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "2490:4:1",
                                                            "type": "",
                                                            "value": "0x20"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mul",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2478:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2478:17:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "2466:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2466:30:1"
                                        },
                                        "variables": [
                                            {
                                                "name": "srcEnd",
                                                "nodeType": "YulTypedName",
                                                "src": "2456:6:1",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "2524:103:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2538:77:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2538:79:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "2538:79:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "srcEnd",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2511:6:1"
                                                },
                                                {
                                                    "name": "end",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2519:3:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "gt",
                                                "nodeType": "YulIdentifier",
                                                "src": "2508:2:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2508:15:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "2505:122:1"
                                    },
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "2712:155:1",
                                            "statements": [
                                                {
                                                    "nodeType": "YulVariableDeclaration",
                                                    "src": "2727:21:1",
                                                    "value": {
                                                        "name": "src",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2745:3:1"
                                                    },
                                                    "variables": [
                                                        {
                                                            "name": "elementPos",
                                                            "nodeType": "YulTypedName",
                                                            "src": "2731:10:1",
                                                            "type": ""
                                                        }
                                                    ]
                                                },
                                                {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "name": "dst",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2769:3:1"
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "name": "elementPos",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2806:10:1"
                                                                    },
                                                                    {
                                                                        "name": "end",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2818:3:1"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "abi_decode_t_address_fromMemory",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2774:31:1"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "2774:48:1"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "mstore",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2762:6:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2762:61:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "2762:61:1"
                                                },
                                                {
                                                    "nodeType": "YulAssignment",
                                                    "src": "2836:21:1",
                                                    "value": {
                                                        "arguments": [
                                                            {
                                                                "name": "dst",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2847:3:1"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "2852:4:1",
                                                                "type": "",
                                                                "value": "0x20"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "add",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2843:3:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2843:14:1"
                                                    },
                                                    "variableNames": [
                                                        {
                                                            "name": "dst",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2836:3:1"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "src",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2665:3:1"
                                                },
                                                {
                                                    "name": "srcEnd",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2670:6:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "lt",
                                                "nodeType": "YulIdentifier",
                                                "src": "2662:2:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2662:15:1"
                                        },
                                        "nodeType": "YulForLoop",
                                        "post": {
                                            "nodeType": "YulBlock",
                                            "src": "2678:25:1",
                                            "statements": [
                                                {
                                                    "nodeType": "YulAssignment",
                                                    "src": "2680:21:1",
                                                    "value": {
                                                        "arguments": [
                                                            {
                                                                "name": "src",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2691:3:1"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "2696:4:1",
                                                                "type": "",
                                                                "value": "0x20"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "add",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2687:3:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2687:14:1"
                                                    },
                                                    "variableNames": [
                                                        {
                                                            "name": "src",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2680:3:1"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "pre": {
                                            "nodeType": "YulBlock",
                                            "src": "2640:21:1",
                                            "statements": [
                                                {
                                                    "nodeType": "YulVariableDeclaration",
                                                    "src": "2642:17:1",
                                                    "value": {
                                                        "name": "offset",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2653:6:1"
                                                    },
                                                    "variables": [
                                                        {
                                                            "name": "src",
                                                            "nodeType": "YulTypedName",
                                                            "src": "2646:3:1",
                                                            "type": ""
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "src": "2636:231:1"
                                    }
                                ]
                            },
                            "name": "abi_decode_available_length_t_array$_t_address_$dyn_memory_ptr_fromMemory",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "offset",
                                    "nodeType": "YulTypedName",
                                    "src": "2224:6:1",
                                    "type": ""
                                },
                                {
                                    "name": "length",
                                    "nodeType": "YulTypedName",
                                    "src": "2232:6:1",
                                    "type": ""
                                },
                                {
                                    "name": "end",
                                    "nodeType": "YulTypedName",
                                    "src": "2240:3:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "array",
                                    "nodeType": "YulTypedName",
                                    "src": "2248:5:1",
                                    "type": ""
                                }
                            ],
                            "src": "2141:732:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "2984:297:1",
                                "statements": [
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "3033:83:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3035:77:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "3035:79:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "3035:79:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "offset",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3012:6:1"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "3020:4:1",
                                                                    "type": "",
                                                                    "value": "0x1f"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3008:3:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3008:17:1"
                                                        },
                                                        {
                                                            "name": "end",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3027:3:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "slt",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3004:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3004:27:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "iszero",
                                                "nodeType": "YulIdentifier",
                                                "src": "2997:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2997:35:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "2994:122:1"
                                    },
                                    {
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "3125:27:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "offset",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3145:6:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mload",
                                                "nodeType": "YulIdentifier",
                                                "src": "3139:5:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3139:13:1"
                                        },
                                        "variables": [
                                            {
                                                "name": "length",
                                                "nodeType": "YulTypedName",
                                                "src": "3129:6:1",
                                                "type": ""
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "3161:114:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "offset",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3248:6:1"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "3256:4:1",
                                                            "type": "",
                                                            "value": "0x20"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3244:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3244:17:1"
                                                },
                                                {
                                                    "name": "length",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3263:6:1"
                                                },
                                                {
                                                    "name": "end",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3271:3:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "abi_decode_available_length_t_array$_t_address_$dyn_memory_ptr_fromMemory",
                                                "nodeType": "YulIdentifier",
                                                "src": "3170:73:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3170:105:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "array",
                                                "nodeType": "YulIdentifier",
                                                "src": "3161:5:1"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "abi_decode_t_array$_t_address_$dyn_memory_ptr_fromMemory",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "offset",
                                    "nodeType": "YulTypedName",
                                    "src": "2962:6:1",
                                    "type": ""
                                },
                                {
                                    "name": "end",
                                    "nodeType": "YulTypedName",
                                    "src": "2970:3:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "array",
                                    "nodeType": "YulTypedName",
                                    "src": "2978:5:1",
                                    "type": ""
                                }
                            ],
                            "src": "2896:385:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "3332:32:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "3342:16:1",
                                        "value": {
                                            "name": "value",
                                            "nodeType": "YulIdentifier",
                                            "src": "3353:5:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "cleaned",
                                                "nodeType": "YulIdentifier",
                                                "src": "3342:7:1"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nodeType": "YulTypedName",
                                    "src": "3314:5:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "cleaned",
                                    "nodeType": "YulTypedName",
                                    "src": "3324:7:1",
                                    "type": ""
                                }
                            ],
                            "src": "3287:77:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "3413:79:1",
                                "statements": [
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "3470:16:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "3479:1:1",
                                                                "type": "",
                                                                "value": "0"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "3482:1:1",
                                                                "type": "",
                                                                "value": "0"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "revert",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3472:6:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "3472:12:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "3472:12:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3436:5:1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "value",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3461:5:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "cleanup_t_uint256",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3443:17:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3443:24:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "eq",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3433:2:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3433:35:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "iszero",
                                                "nodeType": "YulIdentifier",
                                                "src": "3426:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3426:43:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "3423:63:1"
                                    }
                                ]
                            },
                            "name": "validator_revert_t_uint256",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nodeType": "YulTypedName",
                                    "src": "3406:5:1",
                                    "type": ""
                                }
                            ],
                            "src": "3370:122:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "3561:80:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "3571:22:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "offset",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3586:6:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mload",
                                                "nodeType": "YulIdentifier",
                                                "src": "3580:5:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3580:13:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "value",
                                                "nodeType": "YulIdentifier",
                                                "src": "3571:5:1"
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3629:5:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "validator_revert_t_uint256",
                                                "nodeType": "YulIdentifier",
                                                "src": "3602:26:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3602:33:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "3602:33:1"
                                    }
                                ]
                            },
                            "name": "abi_decode_t_uint256_fromMemory",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "offset",
                                    "nodeType": "YulTypedName",
                                    "src": "3539:6:1",
                                    "type": ""
                                },
                                {
                                    "name": "end",
                                    "nodeType": "YulTypedName",
                                    "src": "3547:3:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "value",
                                    "nodeType": "YulTypedName",
                                    "src": "3555:5:1",
                                    "type": ""
                                }
                            ],
                            "src": "3498:143:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "3766:591:1",
                                "statements": [
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "3812:83:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3814:77:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "3814:79:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "3814:79:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "dataEnd",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3787:7:1"
                                                        },
                                                        {
                                                            "name": "headStart",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3796:9:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "sub",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3783:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3783:23:1"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "3808:2:1",
                                                    "type": "",
                                                    "value": "64"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "slt",
                                                "nodeType": "YulIdentifier",
                                                "src": "3779:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3779:32:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "3776:119:1"
                                    },
                                    {
                                        "nodeType": "YulBlock",
                                        "src": "3905:306:1",
                                        "statements": [
                                            {
                                                "nodeType": "YulVariableDeclaration",
                                                "src": "3920:38:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "headStart",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3944:9:1"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "3955:1:1",
                                                                    "type": "",
                                                                    "value": "0"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3940:3:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3940:17:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mload",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3934:5:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3934:24:1"
                                                },
                                                "variables": [
                                                    {
                                                        "name": "offset",
                                                        "nodeType": "YulTypedName",
                                                        "src": "3924:6:1",
                                                        "type": ""
                                                    }
                                                ]
                                            },
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "4005:83:1",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [],
                                                                "functionName": {
                                                                    "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "4007:77:1"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "4007:79:1"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "4007:79:1"
                                                        }
                                                    ]
                                                },
                                                "condition": {
                                                    "arguments": [
                                                        {
                                                            "name": "offset",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3977:6:1"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "3985:18:1",
                                                            "type": "",
                                                            "value": "0xffffffffffffffff"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "gt",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3974:2:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3974:30:1"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "3971:117:1"
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "4102:99:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "headStart",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "4173:9:1"
                                                                },
                                                                {
                                                                    "name": "offset",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "4184:6:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "4169:3:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "4169:22:1"
                                                        },
                                                        {
                                                            "name": "dataEnd",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4193:7:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "abi_decode_t_array$_t_address_$dyn_memory_ptr_fromMemory",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4112:56:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "4112:89:1"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "value0",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4102:6:1"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "nodeType": "YulBlock",
                                        "src": "4221:129:1",
                                        "statements": [
                                            {
                                                "nodeType": "YulVariableDeclaration",
                                                "src": "4236:16:1",
                                                "value": {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4250:2:1",
                                                    "type": "",
                                                    "value": "32"
                                                },
                                                "variables": [
                                                    {
                                                        "name": "offset",
                                                        "nodeType": "YulTypedName",
                                                        "src": "4240:6:1",
                                                        "type": ""
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "4266:74:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "headStart",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "4312:9:1"
                                                                },
                                                                {
                                                                    "name": "offset",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "4323:6:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "4308:3:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "4308:22:1"
                                                        },
                                                        {
                                                            "name": "dataEnd",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4332:7:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "abi_decode_t_uint256_fromMemory",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4276:31:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "4276:64:1"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "value1",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4266:6:1"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "abi_decode_tuple_t_array$_t_address_$dyn_memory_ptrt_uint256_fromMemory",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "headStart",
                                    "nodeType": "YulTypedName",
                                    "src": "3728:9:1",
                                    "type": ""
                                },
                                {
                                    "name": "dataEnd",
                                    "nodeType": "YulTypedName",
                                    "src": "3739:7:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "value0",
                                    "nodeType": "YulTypedName",
                                    "src": "3751:6:1",
                                    "type": ""
                                },
                                {
                                    "name": "value1",
                                    "nodeType": "YulTypedName",
                                    "src": "3759:6:1",
                                    "type": ""
                                }
                            ],
                            "src": "3647:710:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "4391:152:1",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4408:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4411:77:1",
                                                    "type": "",
                                                    "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "4401:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4401:88:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "4401:88:1"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4505:1:1",
                                                    "type": "",
                                                    "value": "4"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4508:4:1",
                                                    "type": "",
                                                    "value": "0x32"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "4498:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4498:15:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "4498:15:1"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4529:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4532:4:1",
                                                    "type": "",
                                                    "value": "0x24"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nodeType": "YulIdentifier",
                                                "src": "4522:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4522:15:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "4522:15:1"
                                    }
                                ]
                            },
                            "name": "panic_error_0x32",
                            "nodeType": "YulFunctionDefinition",
                            "src": "4363:180:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "4577:152:1",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4594:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4597:77:1",
                                                    "type": "",
                                                    "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "4587:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4587:88:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "4587:88:1"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4691:1:1",
                                                    "type": "",
                                                    "value": "4"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4694:4:1",
                                                    "type": "",
                                                    "value": "0x11"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mstore",
                                                "nodeType": "YulIdentifier",
                                                "src": "4684:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4684:15:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "4684:15:1"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4715:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4718:4:1",
                                                    "type": "",
                                                    "value": "0x24"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nodeType": "YulIdentifier",
                                                "src": "4708:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4708:15:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "4708:15:1"
                                    }
                                ]
                            },
                            "name": "panic_error_0x11",
                            "nodeType": "YulFunctionDefinition",
                            "src": "4549:180:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "4778:190:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "4788:33:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4815:5:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "cleanup_t_uint256",
                                                "nodeType": "YulIdentifier",
                                                "src": "4797:17:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4797:24:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "value",
                                                "nodeType": "YulIdentifier",
                                                "src": "4788:5:1"
                                            }
                                        ]
                                    },
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "4911:22:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "panic_error_0x11",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4913:16:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "4913:18:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "4913:18:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4836:5:1"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4843:66:1",
                                                    "type": "",
                                                    "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "eq",
                                                "nodeType": "YulIdentifier",
                                                "src": "4833:2:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4833:77:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "4830:103:1"
                                    },
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "4942:20:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4953:5:1"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "4960:1:1",
                                                    "type": "",
                                                    "value": "1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "4949:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4949:13:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "ret",
                                                "nodeType": "YulIdentifier",
                                                "src": "4942:3:1"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "increment_t_uint256",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nodeType": "YulTypedName",
                                    "src": "4764:5:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "ret",
                                    "nodeType": "YulTypedName",
                                    "src": "4774:3:1",
                                    "type": ""
                                }
                            ],
                            "src": "4735:233:1"
                        }
                    ]
                },
                "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_array$_t_address_$dyn_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := mul(length, 0x20)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address(value)\n    }\n\n    // address[]\n    function abi_decode_available_length_t_array$_t_address_$dyn_memory_ptr_fromMemory(offset, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_array$_t_address_$dyn_memory_ptr(length))\n        let dst := array\n\n        mstore(array, length)\n        dst := add(array, 0x20)\n\n        let srcEnd := add(offset, mul(length, 0x20))\n        if gt(srcEnd, end) {\n            revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef()\n        }\n        for { let src := offset } lt(src, srcEnd) { src := add(src, 0x20) }\n        {\n\n            let elementPos := src\n\n            mstore(dst, abi_decode_t_address_fromMemory(elementPos, end))\n            dst := add(dst, 0x20)\n        }\n    }\n\n    // address[]\n    function abi_decode_t_array$_t_address_$dyn_memory_ptr_fromMemory(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := mload(offset)\n        array := abi_decode_available_length_t_array$_t_address_$dyn_memory_ptr_fromMemory(add(offset, 0x20), length, end)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_array$_t_address_$dyn_memory_ptrt_uint256_fromMemory(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := mload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0 := abi_decode_t_array$_t_address_$dyn_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x32() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n}\n",
                "id": 1,
                "language": "Yul",
                "name": "#utility.yul"
            }
        ],
        "linkReferences": {},
        "object": "60806040523480156200001157600080fd5b50604051620017ea380380620017ea8339818101604052810190620000379190620003fa565b81518181811180620000495750600081145b80620000555750600082145b156200006057600080fd5b60005b8451811015620000f85760016002600087848151811062000089576200008862000460565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508080620000ef90620004be565b91505062000063565b5083600090805190602001906200011192919062000123565b5082600181905550505050506200050c565b8280548282559060005260206000209081019282156200019f579160200282015b828111156200019e5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019062000144565b5b509050620001ae9190620001b2565b5090565b5b80821115620001cd576000816000905550600101620001b3565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200023582620001ea565b810181811067ffffffffffffffff82111715620002575762000256620001fb565b5b80604052505050565b60006200026c620001d1565b90506200027a82826200022a565b919050565b600067ffffffffffffffff8211156200029d576200029c620001fb565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002e082620002b3565b9050919050565b620002f281620002d3565b8114620002fe57600080fd5b50565b6000815190506200031281620002e7565b92915050565b60006200032f62000329846200027f565b62000260565b90508083825260208201905060208402830185811115620003555762000354620002ae565b5b835b818110156200038257806200036d888262000301565b84526020840193505060208101905062000357565b5050509392505050565b600082601f830112620003a457620003a3620001e5565b5b8151620003b684826020860162000318565b91505092915050565b6000819050919050565b620003d481620003bf565b8114620003e057600080fd5b50565b600081519050620003f481620003c9565b92915050565b60008060408385031215620004145762000413620001db565b5b600083015167ffffffffffffffff811115620004355762000434620001e0565b5b62000443858286016200038c565b92505060206200045685828601620003e3565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620004cb82620003bf565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156200050157620005006200048f565b5b600182019050919050565b6112ce806200051c6000396000f3fe6080604052600436106100955760003560e01c8063b77bf60011610059578063b77bf60014610216578063c01a8c8414610241578063c64274741461026a578063dc8452cd146102a7578063ee22610b146102d25761009c565b8063025e7c27146100f657806320ea8d86146101335780632f54bf6e1461015c5780633411c81c146101995780639ace38c2146101d65761009c565b3661009c57005b60003411156100f4573373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c346040516100eb9190610c48565b60405180910390a25b005b34801561010257600080fd5b5061011d60048036038101906101189190610ca3565b6102fb565b60405161012a9190610d11565b60405180910390f35b34801561013f57600080fd5b5061015a60048036038101906101559190610ca3565b61033a565b005b34801561016857600080fd5b50610183600480360381019061017e9190610d58565b61033d565b6040516101909190610da0565b60405180910390f35b3480156101a557600080fd5b506101c060048036038101906101bb9190610dbb565b61035d565b6040516101cd9190610da0565b60405180910390f35b3480156101e257600080fd5b506101fd60048036038101906101f89190610ca3565b61038c565b60405161020d9493929190610e94565b60405180910390f35b34801561022257600080fd5b5061022b610471565b6040516102389190610c48565b60405180910390f35b34801561024d57600080fd5b5061026860048036038101906102639190610ca3565b610477565b005b34801561027657600080fd5b50610291600480360381019061028c9190611015565b610664565b60405161029e9190610c48565b60405180910390f35b3480156102b357600080fd5b506102bc6106d9565b6040516102c99190610c48565b60405180910390f35b3480156102de57600080fd5b506102f960048036038101906102f49190610ca3565b6106df565b005b6000818154811061030b57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b50565b60026020528060005260406000206000915054906101000a900460ff1681565b60056020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b60046020528060005260406000206000915090508060000160009054906101000a900460ff16908060000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020180546103ee906110b3565b80601f016020809104026020016040519081016040528092919081815260200182805461041a906110b3565b80156104675780601f1061043c57610100808354040283529160200191610467565b820191906000526020600020905b81548152906001019060200180831161044a57829003601f168201915b5050505050905084565b60035481565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166104cd57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561053d57600080fd5b600015156005600083815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146105ab57600080fd5b60016005600083815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550803373ffffffffffffffffffffffffffffffffffffffff167f4a504a94899432a9846e1aa406dceb1bcfd538bb839071d49d1e5e23f5be30ef60405160405180910390a3610661816106df565b50565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166106bc57600080fd5b6106c7848484610962565b90506106d281610477565b9392505050565b60015481565b600015156004600083815260200190815260200160002060000160009054906101000a900460ff1615151461071357600080fd5b61071c81610a95565b1561095f57600060046000838152602001908152602001600020905060018160000160006101000a81548160ff0219169083151502179055508060000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156107bf573d6000803e3d6000fd5b5060008160000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168260010154836002016040516108139190611184565b60006040518083038185875af1925050503d8060008114610850576040519150601f19603f3d011682016040523d82523d6000602084013e610855565b606091505b5050905080156108d1578282600101548360000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f3a79215c35280c50516adc051697ed94f955e0e43c5c646d59d0fc62b5254cb460405160405180910390a461095c565b8282600101548360000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8d24b020e7ba900ea81a875f9c7462c05ab35f3b71b19611e99f86ef00560e7460405160405180910390a460008260000160006101000a81548160ff0219169083151502179055505b50505b50565b6000600354905060405180608001604052806000151581526020018573ffffffffffffffffffffffffffffffffffffffff168152602001848152602001838152506004600083815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600101556060820151816002019080519060200190610a43929190610b8c565b50905050600160036000828254610a5a91906111ca565b92505081905550807fc0ba8fe4b176c1714197d43b9cc6bcf797a4a7461c5fe8d0ef6e184ae7601e5160405160405180910390a29392505050565b6000806000905060005b600080549050811015610b8457600560008581526020019081526020016000206000808381548110610ad457610ad3611220565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610b5c57600182610b5991906111ca565b91505b600154821415610b7157600192505050610b87565b8080610b7c9061124f565b915050610a9f565b50505b919050565b828054610b98906110b3565b90600052602060002090601f016020900481019282610bba5760008555610c01565b82601f10610bd357805160ff1916838001178555610c01565b82800160010185558215610c01579182015b82811115610c00578251825591602001919060010190610be5565b5b509050610c0e9190610c12565b5090565b5b80821115610c2b576000816000905550600101610c13565b5090565b6000819050919050565b610c4281610c2f565b82525050565b6000602082019050610c5d6000830184610c39565b92915050565b6000604051905090565b600080fd5b600080fd5b610c8081610c2f565b8114610c8b57600080fd5b50565b600081359050610c9d81610c77565b92915050565b600060208284031215610cb957610cb8610c6d565b5b6000610cc784828501610c8e565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610cfb82610cd0565b9050919050565b610d0b81610cf0565b82525050565b6000602082019050610d266000830184610d02565b92915050565b610d3581610cf0565b8114610d4057600080fd5b50565b600081359050610d5281610d2c565b92915050565b600060208284031215610d6e57610d6d610c6d565b5b6000610d7c84828501610d43565b91505092915050565b60008115159050919050565b610d9a81610d85565b82525050565b6000602082019050610db56000830184610d91565b92915050565b60008060408385031215610dd257610dd1610c6d565b5b6000610de085828601610c8e565b9250506020610df185828601610d43565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610e35578082015181840152602081019050610e1a565b83811115610e44576000848401525b50505050565b6000601f19601f8301169050919050565b6000610e6682610dfb565b610e708185610e06565b9350610e80818560208601610e17565b610e8981610e4a565b840191505092915050565b6000608082019050610ea96000830187610d91565b610eb66020830186610d02565b610ec36040830185610c39565b8181036060830152610ed58184610e5b565b905095945050505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610f2282610e4a565b810181811067ffffffffffffffff82111715610f4157610f40610eea565b5b80604052505050565b6000610f54610c63565b9050610f608282610f19565b919050565b600067ffffffffffffffff821115610f8057610f7f610eea565b5b610f8982610e4a565b9050602081019050919050565b82818337600083830152505050565b6000610fb8610fb384610f65565b610f4a565b905082815260208101848484011115610fd457610fd3610ee5565b5b610fdf848285610f96565b509392505050565b600082601f830112610ffc57610ffb610ee0565b5b813561100c848260208601610fa5565b91505092915050565b60008060006060848603121561102e5761102d610c6d565b5b600061103c86828701610d43565b935050602061104d86828701610c8e565b925050604084013567ffffffffffffffff81111561106e5761106d610c72565b5b61107a86828701610fe7565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806110cb57607f821691505b602082108114156110df576110de611084565b5b50919050565b600081905092915050565b60008190508160005260206000209050919050565b60008154611112816110b3565b61111c81866110e5565b9450600182166000811461113757600181146111485761117b565b60ff1983168652818601935061117b565b611151856110f0565b60005b8381101561117357815481890152600182019150602081019050611154565b838801955050505b50505092915050565b60006111908284611105565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006111d582610c2f565b91506111e083610c2f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156112155761121461119b565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061125a82610c2f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561128d5761128c61119b565b5b60018201905091905056fea26469706673582212202e57678535807073a2456d564797f5e0ac54e1453f9abc22440b1e8c4659f45964736f6c634300080a0033",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH3 0x11 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH3 0x17EA CODESIZE SUB DUP1 PUSH3 0x17EA DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH3 0x37 SWAP2 SWAP1 PUSH3 0x3FA JUMP JUMPDEST DUP2 MLOAD DUP2 DUP2 DUP2 GT DUP1 PUSH3 0x49 JUMPI POP PUSH1 0x0 DUP2 EQ JUMPDEST DUP1 PUSH3 0x55 JUMPI POP PUSH1 0x0 DUP3 EQ JUMPDEST ISZERO PUSH3 0x60 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 JUMPDEST DUP5 MLOAD DUP2 LT ISZERO PUSH3 0xF8 JUMPI PUSH1 0x1 PUSH1 0x2 PUSH1 0x0 DUP8 DUP5 DUP2 MLOAD DUP2 LT PUSH3 0x89 JUMPI PUSH3 0x88 PUSH3 0x460 JUMP JUMPDEST JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP DUP1 DUP1 PUSH3 0xEF SWAP1 PUSH3 0x4BE JUMP JUMPDEST SWAP2 POP POP PUSH3 0x63 JUMP JUMPDEST POP DUP4 PUSH1 0x0 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH3 0x111 SWAP3 SWAP2 SWAP1 PUSH3 0x123 JUMP JUMPDEST POP DUP3 PUSH1 0x1 DUP2 SWAP1 SSTORE POP POP POP POP POP PUSH3 0x50C JUMP JUMPDEST DUP3 DUP1 SLOAD DUP3 DUP3 SSTORE SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 DUP2 ADD SWAP3 DUP3 ISZERO PUSH3 0x19F JUMPI SWAP2 PUSH1 0x20 MUL DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH3 0x19E JUMPI DUP3 MLOAD DUP3 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH3 0x144 JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH3 0x1AE SWAP2 SWAP1 PUSH3 0x1B2 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST JUMPDEST DUP1 DUP3 GT ISZERO PUSH3 0x1CD JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH3 0x1B3 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH3 0x235 DUP3 PUSH3 0x1EA JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH3 0x257 JUMPI PUSH3 0x256 PUSH3 0x1FB JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x26C PUSH3 0x1D1 JUMP JUMPDEST SWAP1 POP PUSH3 0x27A DUP3 DUP3 PUSH3 0x22A JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH3 0x29D JUMPI PUSH3 0x29C PUSH3 0x1FB JUMP JUMPDEST JUMPDEST PUSH1 0x20 DUP3 MUL SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x2E0 DUP3 PUSH3 0x2B3 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x2F2 DUP2 PUSH3 0x2D3 JUMP JUMPDEST DUP2 EQ PUSH3 0x2FE JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH3 0x312 DUP2 PUSH3 0x2E7 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x32F PUSH3 0x329 DUP5 PUSH3 0x27F JUMP JUMPDEST PUSH3 0x260 JUMP JUMPDEST SWAP1 POP DUP1 DUP4 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH1 0x20 DUP5 MUL DUP4 ADD DUP6 DUP2 GT ISZERO PUSH3 0x355 JUMPI PUSH3 0x354 PUSH3 0x2AE JUMP JUMPDEST JUMPDEST DUP4 JUMPDEST DUP2 DUP2 LT ISZERO PUSH3 0x382 JUMPI DUP1 PUSH3 0x36D DUP9 DUP3 PUSH3 0x301 JUMP JUMPDEST DUP5 MSTORE PUSH1 0x20 DUP5 ADD SWAP4 POP POP PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH3 0x357 JUMP JUMPDEST POP POP POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH3 0x3A4 JUMPI PUSH3 0x3A3 PUSH3 0x1E5 JUMP JUMPDEST JUMPDEST DUP2 MLOAD PUSH3 0x3B6 DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH3 0x318 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x3D4 DUP2 PUSH3 0x3BF JUMP JUMPDEST DUP2 EQ PUSH3 0x3E0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH3 0x3F4 DUP2 PUSH3 0x3C9 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH3 0x414 JUMPI PUSH3 0x413 PUSH3 0x1DB JUMP JUMPDEST JUMPDEST PUSH1 0x0 DUP4 ADD MLOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH3 0x435 JUMPI PUSH3 0x434 PUSH3 0x1E0 JUMP JUMPDEST JUMPDEST PUSH3 0x443 DUP6 DUP3 DUP7 ADD PUSH3 0x38C JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH3 0x456 DUP6 DUP3 DUP7 ADD PUSH3 0x3E3 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x32 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH3 0x4CB DUP3 PUSH3 0x3BF JUMP JUMPDEST SWAP2 POP PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 EQ ISZERO PUSH3 0x501 JUMPI PUSH3 0x500 PUSH3 0x48F JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x12CE DUP1 PUSH3 0x51C PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x95 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0xB77BF600 GT PUSH2 0x59 JUMPI DUP1 PUSH4 0xB77BF600 EQ PUSH2 0x216 JUMPI DUP1 PUSH4 0xC01A8C84 EQ PUSH2 0x241 JUMPI DUP1 PUSH4 0xC6427474 EQ PUSH2 0x26A JUMPI DUP1 PUSH4 0xDC8452CD EQ PUSH2 0x2A7 JUMPI DUP1 PUSH4 0xEE22610B EQ PUSH2 0x2D2 JUMPI PUSH2 0x9C JUMP JUMPDEST DUP1 PUSH4 0x25E7C27 EQ PUSH2 0xF6 JUMPI DUP1 PUSH4 0x20EA8D86 EQ PUSH2 0x133 JUMPI DUP1 PUSH4 0x2F54BF6E EQ PUSH2 0x15C JUMPI DUP1 PUSH4 0x3411C81C EQ PUSH2 0x199 JUMPI DUP1 PUSH4 0x9ACE38C2 EQ PUSH2 0x1D6 JUMPI PUSH2 0x9C JUMP JUMPDEST CALLDATASIZE PUSH2 0x9C JUMPI STOP JUMPDEST PUSH1 0x0 CALLVALUE GT ISZERO PUSH2 0xF4 JUMPI CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xE1FFFCC4923D04B559F4D29A8BFC6CDA04EB5B0D3C460751C2402C5C5CC9109C CALLVALUE PUSH1 0x40 MLOAD PUSH2 0xEB SWAP2 SWAP1 PUSH2 0xC48 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG2 JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x102 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x11D PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x118 SWAP2 SWAP1 PUSH2 0xCA3 JUMP JUMPDEST PUSH2 0x2FB JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x12A SWAP2 SWAP1 PUSH2 0xD11 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x13F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x15A PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x155 SWAP2 SWAP1 PUSH2 0xCA3 JUMP JUMPDEST PUSH2 0x33A JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x168 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x183 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x17E SWAP2 SWAP1 PUSH2 0xD58 JUMP JUMPDEST PUSH2 0x33D JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x190 SWAP2 SWAP1 PUSH2 0xDA0 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1A5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1C0 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1BB SWAP2 SWAP1 PUSH2 0xDBB JUMP JUMPDEST PUSH2 0x35D JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1CD SWAP2 SWAP1 PUSH2 0xDA0 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1E2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1FD PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1F8 SWAP2 SWAP1 PUSH2 0xCA3 JUMP JUMPDEST PUSH2 0x38C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x20D SWAP5 SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0xE94 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x222 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x22B PUSH2 0x471 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x238 SWAP2 SWAP1 PUSH2 0xC48 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x24D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x268 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x263 SWAP2 SWAP1 PUSH2 0xCA3 JUMP JUMPDEST PUSH2 0x477 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x276 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x291 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x28C SWAP2 SWAP1 PUSH2 0x1015 JUMP JUMPDEST PUSH2 0x664 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x29E SWAP2 SWAP1 PUSH2 0xC48 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2B3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2BC PUSH2 0x6D9 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x2C9 SWAP2 SWAP1 PUSH2 0xC48 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2DE JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2F9 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x2F4 SWAP2 SWAP1 PUSH2 0xCA3 JUMP JUMPDEST PUSH2 0x6DF JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 DUP2 DUP2 SLOAD DUP2 LT PUSH2 0x30B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 ADD PUSH1 0x0 SWAP2 POP SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST POP JUMP JUMPDEST PUSH1 0x2 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x5 PUSH1 0x20 MSTORE DUP2 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SWAP2 POP SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x4 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SWAP1 POP DUP1 PUSH1 0x0 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND SWAP1 DUP1 PUSH1 0x0 ADD PUSH1 0x1 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 DUP1 PUSH1 0x1 ADD SLOAD SWAP1 DUP1 PUSH1 0x2 ADD DUP1 SLOAD PUSH2 0x3EE SWAP1 PUSH2 0x10B3 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x41A SWAP1 PUSH2 0x10B3 JUMP JUMPDEST DUP1 ISZERO PUSH2 0x467 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x43C JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x467 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x44A JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP DUP5 JUMP JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x2 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND PUSH2 0x4CD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x4 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 ADD PUSH1 0x1 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0x53D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 ISZERO ISZERO PUSH1 0x5 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND ISZERO ISZERO EQ PUSH2 0x5AB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0x5 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP DUP1 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x4A504A94899432A9846E1AA406DCEB1BCFD538BB839071D49D1E5E23F5BE30EF PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH2 0x661 DUP2 PUSH2 0x6DF JUMP JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND PUSH2 0x6BC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x6C7 DUP5 DUP5 DUP5 PUSH2 0x962 JUMP JUMPDEST SWAP1 POP PUSH2 0x6D2 DUP2 PUSH2 0x477 JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 ISZERO ISZERO PUSH1 0x4 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND ISZERO ISZERO EQ PUSH2 0x713 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x71C DUP2 PUSH2 0xA95 JUMP JUMPDEST ISZERO PUSH2 0x95F JUMPI PUSH1 0x0 PUSH1 0x4 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SWAP1 POP PUSH1 0x1 DUP2 PUSH1 0x0 ADD PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP DUP1 PUSH1 0x0 ADD PUSH1 0x1 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC SELFBALANCE SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x7BF JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP PUSH1 0x0 DUP2 PUSH1 0x0 ADD PUSH1 0x1 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH1 0x1 ADD SLOAD DUP4 PUSH1 0x2 ADD PUSH1 0x40 MLOAD PUSH2 0x813 SWAP2 SWAP1 PUSH2 0x1184 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP8 GAS CALL SWAP3 POP POP POP RETURNDATASIZE DUP1 PUSH1 0x0 DUP2 EQ PUSH2 0x850 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH1 0x0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x855 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 ISZERO PUSH2 0x8D1 JUMPI DUP3 DUP3 PUSH1 0x1 ADD SLOAD DUP4 PUSH1 0x0 ADD PUSH1 0x1 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x3A79215C35280C50516ADC051697ED94F955E0E43C5C646D59D0FC62B5254CB4 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG4 PUSH2 0x95C JUMP JUMPDEST DUP3 DUP3 PUSH1 0x1 ADD SLOAD DUP4 PUSH1 0x0 ADD PUSH1 0x1 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8D24B020E7BA900EA81A875F9C7462C05AB35F3B71B19611E99F86EF00560E74 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG4 PUSH1 0x0 DUP3 PUSH1 0x0 ADD PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP JUMPDEST POP POP JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x3 SLOAD SWAP1 POP PUSH1 0x40 MLOAD DUP1 PUSH1 0x80 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x0 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD DUP5 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP2 MSTORE POP PUSH1 0x4 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 ADD MLOAD DUP2 PUSH1 0x0 ADD PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP PUSH1 0x20 DUP3 ADD MLOAD DUP2 PUSH1 0x0 ADD PUSH1 0x1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH1 0x40 DUP3 ADD MLOAD DUP2 PUSH1 0x1 ADD SSTORE PUSH1 0x60 DUP3 ADD MLOAD DUP2 PUSH1 0x2 ADD SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH2 0xA43 SWAP3 SWAP2 SWAP1 PUSH2 0xB8C JUMP JUMPDEST POP SWAP1 POP POP PUSH1 0x1 PUSH1 0x3 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0xA5A SWAP2 SWAP1 PUSH2 0x11CA JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP1 PUSH32 0xC0BA8FE4B176C1714197D43B9CC6BCF797A4A7461C5FE8D0EF6E184AE7601E51 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG2 SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 SWAP1 POP PUSH1 0x0 JUMPDEST PUSH1 0x0 DUP1 SLOAD SWAP1 POP DUP2 LT ISZERO PUSH2 0xB84 JUMPI PUSH1 0x5 PUSH1 0x0 DUP6 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP1 DUP4 DUP2 SLOAD DUP2 LT PUSH2 0xAD4 JUMPI PUSH2 0xAD3 PUSH2 0x1220 JUMP JUMPDEST JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND ISZERO PUSH2 0xB5C JUMPI PUSH1 0x1 DUP3 PUSH2 0xB59 SWAP2 SWAP1 PUSH2 0x11CA JUMP JUMPDEST SWAP2 POP JUMPDEST PUSH1 0x1 SLOAD DUP3 EQ ISZERO PUSH2 0xB71 JUMPI PUSH1 0x1 SWAP3 POP POP POP PUSH2 0xB87 JUMP JUMPDEST DUP1 DUP1 PUSH2 0xB7C SWAP1 PUSH2 0x124F JUMP JUMPDEST SWAP2 POP POP PUSH2 0xA9F JUMP JUMPDEST POP POP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH2 0xB98 SWAP1 PUSH2 0x10B3 JUMP JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH2 0xBBA JUMPI PUSH1 0x0 DUP6 SSTORE PUSH2 0xC01 JUMP JUMPDEST DUP3 PUSH1 0x1F LT PUSH2 0xBD3 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0xC01 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0xC01 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0xC00 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0xBE5 JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH2 0xC0E SWAP2 SWAP1 PUSH2 0xC12 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0xC2B JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH2 0xC13 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xC42 DUP2 PUSH2 0xC2F JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0xC5D PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0xC39 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xC80 DUP2 PUSH2 0xC2F JUMP JUMPDEST DUP2 EQ PUSH2 0xC8B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0xC9D DUP2 PUSH2 0xC77 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xCB9 JUMPI PUSH2 0xCB8 PUSH2 0xC6D JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0xCC7 DUP5 DUP3 DUP6 ADD PUSH2 0xC8E JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xCFB DUP3 PUSH2 0xCD0 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xD0B DUP2 PUSH2 0xCF0 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0xD26 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0xD02 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0xD35 DUP2 PUSH2 0xCF0 JUMP JUMPDEST DUP2 EQ PUSH2 0xD40 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0xD52 DUP2 PUSH2 0xD2C JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xD6E JUMPI PUSH2 0xD6D PUSH2 0xC6D JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0xD7C DUP5 DUP3 DUP6 ADD PUSH2 0xD43 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xD9A DUP2 PUSH2 0xD85 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0xDB5 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0xD91 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xDD2 JUMPI PUSH2 0xDD1 PUSH2 0xC6D JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0xDE0 DUP6 DUP3 DUP7 ADD PUSH2 0xC8E JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0xDF1 DUP6 DUP3 DUP7 ADD PUSH2 0xD43 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0xE35 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0xE1A JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH2 0xE44 JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xE66 DUP3 PUSH2 0xDFB JUMP JUMPDEST PUSH2 0xE70 DUP2 DUP6 PUSH2 0xE06 JUMP JUMPDEST SWAP4 POP PUSH2 0xE80 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0xE17 JUMP JUMPDEST PUSH2 0xE89 DUP2 PUSH2 0xE4A JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x80 DUP3 ADD SWAP1 POP PUSH2 0xEA9 PUSH1 0x0 DUP4 ADD DUP8 PUSH2 0xD91 JUMP JUMPDEST PUSH2 0xEB6 PUSH1 0x20 DUP4 ADD DUP7 PUSH2 0xD02 JUMP JUMPDEST PUSH2 0xEC3 PUSH1 0x40 DUP4 ADD DUP6 PUSH2 0xC39 JUMP JUMPDEST DUP2 DUP2 SUB PUSH1 0x60 DUP4 ADD MSTORE PUSH2 0xED5 DUP2 DUP5 PUSH2 0xE5B JUMP JUMPDEST SWAP1 POP SWAP6 SWAP5 POP POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH2 0xF22 DUP3 PUSH2 0xE4A JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH2 0xF41 JUMPI PUSH2 0xF40 PUSH2 0xEEA JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xF54 PUSH2 0xC63 JUMP JUMPDEST SWAP1 POP PUSH2 0xF60 DUP3 DUP3 PUSH2 0xF19 JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH2 0xF80 JUMPI PUSH2 0xF7F PUSH2 0xEEA JUMP JUMPDEST JUMPDEST PUSH2 0xF89 DUP3 PUSH2 0xE4A JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST DUP3 DUP2 DUP4 CALLDATACOPY PUSH1 0x0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xFB8 PUSH2 0xFB3 DUP5 PUSH2 0xF65 JUMP JUMPDEST PUSH2 0xF4A JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH2 0xFD4 JUMPI PUSH2 0xFD3 PUSH2 0xEE5 JUMP JUMPDEST JUMPDEST PUSH2 0xFDF DUP5 DUP3 DUP6 PUSH2 0xF96 JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH2 0xFFC JUMPI PUSH2 0xFFB PUSH2 0xEE0 JUMP JUMPDEST JUMPDEST DUP2 CALLDATALOAD PUSH2 0x100C DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH2 0xFA5 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x102E JUMPI PUSH2 0x102D PUSH2 0xC6D JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x103C DUP7 DUP3 DUP8 ADD PUSH2 0xD43 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 PUSH2 0x104D DUP7 DUP3 DUP8 ADD PUSH2 0xC8E JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x106E JUMPI PUSH2 0x106D PUSH2 0xC72 JUMP JUMPDEST JUMPDEST PUSH2 0x107A DUP7 DUP3 DUP8 ADD PUSH2 0xFE7 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH2 0x10CB JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 EQ ISZERO PUSH2 0x10DF JUMPI PUSH2 0x10DE PUSH2 0x1084 JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP DUP2 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SLOAD PUSH2 0x1112 DUP2 PUSH2 0x10B3 JUMP JUMPDEST PUSH2 0x111C DUP2 DUP7 PUSH2 0x10E5 JUMP JUMPDEST SWAP5 POP PUSH1 0x1 DUP3 AND PUSH1 0x0 DUP2 EQ PUSH2 0x1137 JUMPI PUSH1 0x1 DUP2 EQ PUSH2 0x1148 JUMPI PUSH2 0x117B JUMP JUMPDEST PUSH1 0xFF NOT DUP4 AND DUP7 MSTORE DUP2 DUP7 ADD SWAP4 POP PUSH2 0x117B JUMP JUMPDEST PUSH2 0x1151 DUP6 PUSH2 0x10F0 JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x1173 JUMPI DUP2 SLOAD DUP2 DUP10 ADD MSTORE PUSH1 0x1 DUP3 ADD SWAP2 POP PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x1154 JUMP JUMPDEST DUP4 DUP9 ADD SWAP6 POP POP POP JUMPDEST POP POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1190 DUP3 DUP5 PUSH2 0x1105 JUMP JUMPDEST SWAP2 POP DUP2 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x11D5 DUP3 PUSH2 0xC2F JUMP JUMPDEST SWAP2 POP PUSH2 0x11E0 DUP4 PUSH2 0xC2F JUMP JUMPDEST SWAP3 POP DUP3 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SUB DUP3 GT ISZERO PUSH2 0x1215 JUMPI PUSH2 0x1214 PUSH2 0x119B JUMP JUMPDEST JUMPDEST DUP3 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x32 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x125A DUP3 PUSH2 0xC2F JUMP JUMPDEST SWAP2 POP PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 EQ ISZERO PUSH2 0x128D JUMPI PUSH2 0x128C PUSH2 0x119B JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x2E JUMPI PUSH8 0x8535807073A2456D JUMP SELFBALANCE SWAP8 CREATE2 0xE0 0xAC SLOAD 0xE1 GASLIMIT EXTCODEHASH SWAP11 0xBC 0x22 DIFFICULTY SIGNEXTEND 0x1E DUP13 CHAINID MSIZE DELEGATECALL MSIZE PUSH5 0x736F6C6343 STOP ADDMOD EXP STOP CALLER ",
        "sourceMap": "60:3936:0:-:0;;;1316:289;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1397:7;:14;1413:9;1212:10;1200:9;:22;:40;;;;1239:1;1226:9;:14;1200:40;:59;;;;1258:1;1244:10;:15;1200:59;1193:91;;;1276:8;;;1193:91;1446:6:::1;1441:95;1458:7;:14;1456:1;:16;1441:95;;;1518:4;1496:7;:19;1504:7;1512:1;1504:10;;;;;;;;:::i;:::-;;;;;;;;1496:19;;;;;;;;;;;;;;;;:26;;;;;;;;;;;;;;;;;;1474:3;;;;;:::i;:::-;;;;1441:95;;;;1557:7;1548:6;:16;;;;;;;;;;;;:::i;:::-;;1588:9;1577:8;:20;;;;1316:289:::0;;;;60:3936;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:75:1:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:117;443:1;440;433:12;457:102;498:6;549:2;545:7;540:2;533:5;529:14;525:28;515:38;;457:102;;;:::o;565:180::-;613:77;610:1;603:88;710:4;707:1;700:15;734:4;731:1;724:15;751:281;834:27;856:4;834:27;:::i;:::-;826:6;822:40;964:6;952:10;949:22;928:18;916:10;913:34;910:62;907:88;;;975:18;;:::i;:::-;907:88;1015:10;1011:2;1004:22;794:238;751:281;;:::o;1038:129::-;1072:6;1099:20;;:::i;:::-;1089:30;;1128:33;1156:4;1148:6;1128:33;:::i;:::-;1038:129;;;:::o;1173:311::-;1250:4;1340:18;1332:6;1329:30;1326:56;;;1362:18;;:::i;:::-;1326:56;1412:4;1404:6;1400:17;1392:25;;1472:4;1466;1462:15;1454:23;;1173:311;;;:::o;1490:117::-;1599:1;1596;1589:12;1613:126;1650:7;1690:42;1683:5;1679:54;1668:65;;1613:126;;;:::o;1745:96::-;1782:7;1811:24;1829:5;1811:24;:::i;:::-;1800:35;;1745:96;;;:::o;1847:122::-;1920:24;1938:5;1920:24;:::i;:::-;1913:5;1910:35;1900:63;;1959:1;1956;1949:12;1900:63;1847:122;:::o;1975:143::-;2032:5;2063:6;2057:13;2048:22;;2079:33;2106:5;2079:33;:::i;:::-;1975:143;;;;:::o;2141:732::-;2248:5;2273:81;2289:64;2346:6;2289:64;:::i;:::-;2273:81;:::i;:::-;2264:90;;2374:5;2403:6;2396:5;2389:21;2437:4;2430:5;2426:16;2419:23;;2490:4;2482:6;2478:17;2470:6;2466:30;2519:3;2511:6;2508:15;2505:122;;;2538:79;;:::i;:::-;2505:122;2653:6;2636:231;2670:6;2665:3;2662:15;2636:231;;;2745:3;2774:48;2818:3;2806:10;2774:48;:::i;:::-;2769:3;2762:61;2852:4;2847:3;2843:14;2836:21;;2712:155;2696:4;2691:3;2687:14;2680:21;;2636:231;;;2640:21;2254:619;;2141:732;;;;;:::o;2896:385::-;2978:5;3027:3;3020:4;3012:6;3008:17;3004:27;2994:122;;3035:79;;:::i;:::-;2994:122;3145:6;3139:13;3170:105;3271:3;3263:6;3256:4;3248:6;3244:17;3170:105;:::i;:::-;3161:114;;2984:297;2896:385;;;;:::o;3287:77::-;3324:7;3353:5;3342:16;;3287:77;;;:::o;3370:122::-;3443:24;3461:5;3443:24;:::i;:::-;3436:5;3433:35;3423:63;;3482:1;3479;3472:12;3423:63;3370:122;:::o;3498:143::-;3555:5;3586:6;3580:13;3571:22;;3602:33;3629:5;3602:33;:::i;:::-;3498:143;;;;:::o;3647:710::-;3751:6;3759;3808:2;3796:9;3787:7;3783:23;3779:32;3776:119;;;3814:79;;:::i;:::-;3776:119;3955:1;3944:9;3940:17;3934:24;3985:18;3977:6;3974:30;3971:117;;;4007:79;;:::i;:::-;3971:117;4112:89;4193:7;4184:6;4173:9;4169:22;4112:89;:::i;:::-;4102:99;;3905:306;4250:2;4276:64;4332:7;4323:6;4312:9;4308:22;4276:64;:::i;:::-;4266:74;;4221:129;3647:710;;;;;:::o;4363:180::-;4411:77;4408:1;4401:88;4508:4;4505:1;4498:15;4532:4;4529:1;4522:15;4549:180;4597:77;4594:1;4587:88;4694:4;4691:1;4684:15;4718:4;4715:1;4708:15;4735:233;4774:3;4797:24;4815:5;4797:24;:::i;:::-;4788:33;;4843:66;4836:5;4833:77;4830:103;;;4913:18;;:::i;:::-;4830:103;4960:1;4953:5;4949:13;4942:20;;4735:233;;;:::o;60:3936:0:-;;;;;;;"
    }
    var multiSigContract = new web3.eth.Contract(multisigABI);
    console.log(multiSigContract)

    const expectedBlockTime = 1000; 

    var multiSig = await multiSigContract.deploy({
        data: '0x'+ multisigByteCode.object, 
        arguments: [[lawyer1Address, lawyer2Address], 2]
    }).send({from: web3.givenProvider.selectedAddress}, async function(error, transactonHash) {
        console.log("Submitted transaction with hash: ", transactonHash)
        let transactionReceipt = null
        while (transactionReceipt == null) { // Waiting expectedBlockTime until the transaction is mined
            transactionReceipt = await web3.eth.getTransactionReceipt(transactonHash);
            await sleep(expectedBlockTime)
        }
        console.log("Got the transaction receipt: ", transactionReceipt)
        // let final_balance = await multiSig.methods.balanceOf(receiverAddress).call();
        // console.log('Starting balance was: ', starting_balance);
        // console.log('Ending balance is: ', final_balance);
        console.log("Contract address is: ", transactionReceipt.contractAddress)

        const msAddress = transactionReceipt.contractAddress

        const getMsAddress = document.getElementById('ms-address');

        getMsAddress.innerHTML = "Multisig Contract Address: " + msAddress

    });

    console.log(multiSig.msAddress)

}
//kovan
// rich = 0xb4255529ea54eDae0D11aA49ef365A88400f9f92
// lawyer 1 = 0x869Faa442A4573c00e80E79C7b928837D91A4e0c
// lawyer 2 = 0x5fe0dDf89ED2ee270Da01fBd8c1eD2Ab85F12e0f

///////////////////
// lawyer 1 = 0xc8D912FC5795faBC563D2D7df523b707cF7E58fB
// lawyer 2 = 0x959f9888D12ed192ae768720e37cC45ac1eb97Fb
// rich = 0xC0c52b65888A8547caCd80e2f0aE276cACf30082
// http://127.0.0.1:5500


//0x5fce07cd96e4bd56958ecf55a238dc37622a93915dcacd59e12122bb9bee8f90

// 3. Rich person send asset to multisig wallet

const msSubmit = document.getElementById('ms-input-button');

msSubmit.onclick = async () => {

    const msValue = document.getElementById('ms-input-box').value;
    
    console.log(msValue)
    
    var web3 = new Web3(window.ethereum)

    const multisigAddress = document.getElementById('ms-address-box').value;
    console.log(multisigAddress)

    
    // const multiSig = new web3.eth.Contract(multisigABI, multisigAddress)
    
    // multiSig.setProvider(window.ethereum)
    
    await web3.eth.sendTransaction({from: ethereum.selectedAddress, to: multisigAddress, value: msValue * 10**18});

}

// get multisig balance
const msBalance = document.getElementById('get-ms-balance');

msBalance.onclick = async () => {
    var web3 = new Web3(window.ethereum)

    const multisigAddress = document.getElementById('ms-address-box-2').value;
    
    const msBalance = await web3.eth.getBalance(multisigAddress)

    const msCurrentBalance = document.getElementById('ms-balance');
    
    msCurrentBalance.innerHTML =  msBalance / 10**18 + " ETH locked at " + multisigAddress 
}

//0x896E4Af05B39db5775c34E1487919Cad7384E7D0

// Deploy decentralised will
const deployDW = document.getElementById('deploy-dw');

deployDW.onclick = async () => {

    const msAddress = document.getElementById('executor-box').value;

    console.log(msAddress)

    var web3 = new Web3(window.ethereum)

    var dwByteCode = {
        "functionDebugData": {
            "@_88": {
                "entryPoint": null,
                "id": 88,
                "parameterSlots": 1,
                "returnSlots": 0
            },
            "abi_decode_t_address_fromMemory": {
                "entryPoint": 466,
                "id": null,
                "parameterSlots": 2,
                "returnSlots": 1
            },
            "abi_decode_tuple_t_address_fromMemory": {
                "entryPoint": 487,
                "id": null,
                "parameterSlots": 2,
                "returnSlots": 1
            },
            "allocate_unbounded": {
                "entryPoint": null,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 1
            },
            "cleanup_t_address": {
                "entryPoint": 425,
                "id": null,
                "parameterSlots": 1,
                "returnSlots": 1
            },
            "cleanup_t_uint160": {
                "entryPoint": 393,
                "id": null,
                "parameterSlots": 1,
                "returnSlots": 1
            },
            "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db": {
                "entryPoint": null,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 0
            },
            "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b": {
                "entryPoint": 388,
                "id": null,
                "parameterSlots": 0,
                "returnSlots": 0
            },
            "validator_revert_t_address": {
                "entryPoint": 443,
                "id": null,
                "parameterSlots": 1,
                "returnSlots": 0
            }
        },
        "generatedSources": [
            {
                "ast": {
                    "nodeType": "YulBlock",
                    "src": "0:1199:1",
                    "statements": [
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "47:35:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "57:19:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "73:2:1",
                                                    "type": "",
                                                    "value": "64"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mload",
                                                "nodeType": "YulIdentifier",
                                                "src": "67:5:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "67:9:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "memPtr",
                                                "nodeType": "YulIdentifier",
                                                "src": "57:6:1"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "allocate_unbounded",
                            "nodeType": "YulFunctionDefinition",
                            "returnVariables": [
                                {
                                    "name": "memPtr",
                                    "nodeType": "YulTypedName",
                                    "src": "40:6:1",
                                    "type": ""
                                }
                            ],
                            "src": "7:75:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "177:28:1",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "194:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "197:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nodeType": "YulIdentifier",
                                                "src": "187:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "187:12:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "187:12:1"
                                    }
                                ]
                            },
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulFunctionDefinition",
                            "src": "88:117:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "300:28:1",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "317:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "320:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "revert",
                                                "nodeType": "YulIdentifier",
                                                "src": "310:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "310:12:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "310:12:1"
                                    }
                                ]
                            },
                            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                            "nodeType": "YulFunctionDefinition",
                            "src": "211:117:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "379:81:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "389:65:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "404:5:1"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "411:42:1",
                                                    "type": "",
                                                    "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "and",
                                                "nodeType": "YulIdentifier",
                                                "src": "400:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "400:54:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "cleaned",
                                                "nodeType": "YulIdentifier",
                                                "src": "389:7:1"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "cleanup_t_uint160",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nodeType": "YulTypedName",
                                    "src": "361:5:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "cleaned",
                                    "nodeType": "YulTypedName",
                                    "src": "371:7:1",
                                    "type": ""
                                }
                            ],
                            "src": "334:126:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "511:51:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "521:35:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "550:5:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "cleanup_t_uint160",
                                                "nodeType": "YulIdentifier",
                                                "src": "532:17:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "532:24:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "cleaned",
                                                "nodeType": "YulIdentifier",
                                                "src": "521:7:1"
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "cleanup_t_address",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nodeType": "YulTypedName",
                                    "src": "493:5:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "cleaned",
                                    "nodeType": "YulTypedName",
                                    "src": "503:7:1",
                                    "type": ""
                                }
                            ],
                            "src": "466:96:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "611:79:1",
                                "statements": [
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "668:16:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "677:1:1",
                                                                "type": "",
                                                                "value": "0"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "680:1:1",
                                                                "type": "",
                                                                "value": "0"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "revert",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "670:6:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "670:12:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "670:12:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "634:5:1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "value",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "659:5:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "cleanup_t_address",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "641:17:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "641:24:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "eq",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "631:2:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "631:35:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "iszero",
                                                "nodeType": "YulIdentifier",
                                                "src": "624:6:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "624:43:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "621:63:1"
                                    }
                                ]
                            },
                            "name": "validator_revert_t_address",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "value",
                                    "nodeType": "YulTypedName",
                                    "src": "604:5:1",
                                    "type": ""
                                }
                            ],
                            "src": "568:122:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "759:80:1",
                                "statements": [
                                    {
                                        "nodeType": "YulAssignment",
                                        "src": "769:22:1",
                                        "value": {
                                            "arguments": [
                                                {
                                                    "name": "offset",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "784:6:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "mload",
                                                "nodeType": "YulIdentifier",
                                                "src": "778:5:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "778:13:1"
                                        },
                                        "variableNames": [
                                            {
                                                "name": "value",
                                                "nodeType": "YulIdentifier",
                                                "src": "769:5:1"
                                            }
                                        ]
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "name": "value",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "827:5:1"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "validator_revert_t_address",
                                                "nodeType": "YulIdentifier",
                                                "src": "800:26:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "800:33:1"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "800:33:1"
                                    }
                                ]
                            },
                            "name": "abi_decode_t_address_fromMemory",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "offset",
                                    "nodeType": "YulTypedName",
                                    "src": "737:6:1",
                                    "type": ""
                                },
                                {
                                    "name": "end",
                                    "nodeType": "YulTypedName",
                                    "src": "745:3:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "value",
                                    "nodeType": "YulTypedName",
                                    "src": "753:5:1",
                                    "type": ""
                                }
                            ],
                            "src": "696:143:1"
                        },
                        {
                            "body": {
                                "nodeType": "YulBlock",
                                "src": "922:274:1",
                                "statements": [
                                    {
                                        "body": {
                                            "nodeType": "YulBlock",
                                            "src": "968:83:1",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "arguments": [],
                                                        "functionName": {
                                                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "970:77:1"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "970:79:1"
                                                    },
                                                    "nodeType": "YulExpressionStatement",
                                                    "src": "970:79:1"
                                                }
                                            ]
                                        },
                                        "condition": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "name": "dataEnd",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "943:7:1"
                                                        },
                                                        {
                                                            "name": "headStart",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "952:9:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "sub",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "939:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "939:23:1"
                                                },
                                                {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "964:2:1",
                                                    "type": "",
                                                    "value": "32"
                                                }
                                            ],
                                            "functionName": {
                                                "name": "slt",
                                                "nodeType": "YulIdentifier",
                                                "src": "935:3:1"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "935:32:1"
                                        },
                                        "nodeType": "YulIf",
                                        "src": "932:119:1"
                                    },
                                    {
                                        "nodeType": "YulBlock",
                                        "src": "1061:128:1",
                                        "statements": [
                                            {
                                                "nodeType": "YulVariableDeclaration",
                                                "src": "1076:15:1",
                                                "value": {
                                                    "kind": "number",
                                                    "nodeType": "YulLiteral",
                                                    "src": "1090:1:1",
                                                    "type": "",
                                                    "value": "0"
                                                },
                                                "variables": [
                                                    {
                                                        "name": "offset",
                                                        "nodeType": "YulTypedName",
                                                        "src": "1080:6:1",
                                                        "type": ""
                                                    }
                                                ]
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "1105:74:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "headStart",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "1151:9:1"
                                                                },
                                                                {
                                                                    "name": "offset",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "1162:6:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1147:3:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "1147:22:1"
                                                        },
                                                        {
                                                            "name": "dataEnd",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1171:7:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "abi_decode_t_address_fromMemory",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1115:31:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1115:64:1"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "value0",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1105:6:1"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            "name": "abi_decode_tuple_t_address_fromMemory",
                            "nodeType": "YulFunctionDefinition",
                            "parameters": [
                                {
                                    "name": "headStart",
                                    "nodeType": "YulTypedName",
                                    "src": "892:9:1",
                                    "type": ""
                                },
                                {
                                    "name": "dataEnd",
                                    "nodeType": "YulTypedName",
                                    "src": "903:7:1",
                                    "type": ""
                                }
                            ],
                            "returnVariables": [
                                {
                                    "name": "value0",
                                    "nodeType": "YulTypedName",
                                    "src": "915:6:1",
                                    "type": ""
                                }
                            ],
                            "src": "845:351:1"
                        }
                    ]
                },
                "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n}\n",
                "id": 1,
                "language": "Yul",
                "name": "#utility.yul"
            }
        ],
        "linkReferences": {},
        "object": "608060405234801561001057600080fd5b50604051610d7a380380610d7a833981810160405281019061003291906101e7565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507364a68c98e525161b1f8644331d83026015b8312d6001600080815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060466001600080815260200190815260200160002060010181905550738e90460fb6c12f8894b2c552f7e93997a31d3c63600160006001815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550601e60016000600181526020019081526020016000206001018190555050610214565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101b482610189565b9050919050565b6101c4816101a9565b81146101cf57600080fd5b50565b6000815190506101e1816101bb565b92915050565b6000602082840312156101fd576101fc610184565b5b600061020b848285016101d2565b91505092915050565b610b57806102236000396000f3fe6080604052600436106100595760003560e01c80634783c35b1461006557806367f1ffa41461009057806392ee9d03146100ce578063c8488ced146100e5578063cc328f2414610123578063df7bbf7b1461014e57610060565b3661006057005b600080fd5b34801561007157600080fd5b5061007a610179565b60405161008791906105e8565b60405180910390f35b34801561009c57600080fd5b506100b760048036038101906100b2919061063e565b61019d565b6040516100c592919061067a565b60405180910390f35b3480156100da57600080fd5b506100e3610203565b005b3480156100f157600080fd5b5061010c6004803603810190610107919061063e565b610482565b60405161011a92919061067a565b60405180910390f35b34801561012f57600080fd5b506101386104c6565b604051610145919061073c565b60405180910390f35b34801561015a57600080fd5b50610163610559565b604051610170919061075e565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060006001600085815260200190815260200160002060010154905060006001600086815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508082935093505050915091565b600061020e3061055f565b1161024e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610245906107fc565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d39061088e565b60405180910390fd5b600047905060005b60028160ff161161047e576000600160008360ff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600160008460ff16815260200190815260200160002060010154905060006103568361055f565b905060006103648684610580565b905060008473ffffffffffffffffffffffffffffffffffffffff168260405161038c90610905565b60006040518083038185875af1925050503d80600081146103c9576040519150601f19603f3d011682016040523d82523d6000602084013e6103ce565b606091505b5050905060006103dd8661055f565b90508115610427577fda258b3a1cbc9d5bc655b6678e93f3c6ba635acd5606063b31a09f61101d6efe8685858460405161041a9493929190610979565b60405180910390a1610465565b7f3f6bb9cb0871ee0c636863b1d01db56792bce9968229a1cdfccc5972b97ae1d28685858460405161045c9493929190610979565b60405180910390a15b5050505050508080610476906109fa565b9150506102e4565b5050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905082565b60606040516024016104d790610a47565b6040516020818303038152906040527f92ee9d03000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905090565b60025481565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600080606483856105919190610a67565b61059b9190610af0565b90508091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006105d2826105a7565b9050919050565b6105e2816105c7565b82525050565b60006020820190506105fd60008301846105d9565b92915050565b600080fd5b6000819050919050565b61061b81610608565b811461062657600080fd5b50565b60008135905061063881610612565b92915050565b60006020828403121561065457610653610603565b5b600061066284828501610629565b91505092915050565b61067481610608565b82525050565b600060408201905061068f60008301856105d9565b61069c602083018461066b565b9392505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156106dd5780820151818401526020810190506106c2565b838111156106ec576000848401525b50505050565b6000601f19601f8301169050919050565b600061070e826106a3565b61071881856106ae565b93506107288185602086016106bf565b610731816106f2565b840191505092915050565b600060208201905081810360008301526107568184610703565b905092915050565b6000602082019050610773600083018461066b565b92915050565b600082825260208201905092915050565b7f436f6e7472616374206973206e6f742066756e6465642c206e6f20617373657460008201527f20746f2064697374726962757465210000000000000000000000000000000000602082015250565b60006107e6602f83610779565b91506107f18261078a565b604082019050919050565b60006020820190508181036000830152610815816107d9565b9050919050565b7f53656e646572206973206e6f742064657369676e61746564206d756c7469736960008201527f672077616c6c6574000000000000000000000000000000000000000000000000602082015250565b6000610878602883610779565b91506108838261081c565b604082019050919050565b600060208201905081810360008301526108a78161086b565b9050919050565b600081905092915050565b7f2000000000000000000000000000000000000000000000000000000000000000600082015250565b60006108ef6001836108ae565b91506108fa826108b9565b600182019050919050565b6000610910826108e2565b9150819050919050565b6000819050919050565b600061093f61093a610935846105a7565b61091a565b6105a7565b9050919050565b600061095182610924565b9050919050565b600061096382610946565b9050919050565b61097381610958565b82525050565b600060808201905061098e600083018761096a565b61099b602083018661066b565b6109a8604083018561066b565b6109b5606083018461066b565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060ff82169050919050565b6000610a05826109ed565b915060ff821415610a1957610a186109be565b5b600182019050919050565b6000610a31600183610779565b9150610a3c826108b9565b602082019050919050565b60006020820190508181036000830152610a6081610a24565b9050919050565b6000610a7282610608565b9150610a7d83610608565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610ab657610ab56109be565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610afb82610608565b9150610b0683610608565b925082610b1657610b15610ac1565b5b82820490509291505056fea26469706673582212206c64ac9be4bb0068eb3392e9733634735c8b3c152d5e0d683259fd9b9a28df7c64736f6c634300080a0033",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH2 0xD7A CODESIZE SUB DUP1 PUSH2 0xD7A DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH2 0x32 SWAP2 SWAP1 PUSH2 0x1E7 JUMP JUMPDEST DUP1 PUSH1 0x0 DUP1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH20 0x64A68C98E525161B1F8644331D83026015B8312D PUSH1 0x1 PUSH1 0x0 DUP1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 ADD PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH1 0x46 PUSH1 0x1 PUSH1 0x0 DUP1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x1 ADD DUP2 SWAP1 SSTORE POP PUSH20 0x8E90460FB6C12F8894B2C552F7E93997A31D3C63 PUSH1 0x1 PUSH1 0x0 PUSH1 0x1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 ADD PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH1 0x1E PUSH1 0x1 PUSH1 0x0 PUSH1 0x1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x1 ADD DUP2 SWAP1 SSTORE POP POP PUSH2 0x214 JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1B4 DUP3 PUSH2 0x189 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x1C4 DUP2 PUSH2 0x1A9 JUMP JUMPDEST DUP2 EQ PUSH2 0x1CF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH2 0x1E1 DUP2 PUSH2 0x1BB JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1FD JUMPI PUSH2 0x1FC PUSH2 0x184 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x20B DUP5 DUP3 DUP6 ADD PUSH2 0x1D2 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0xB57 DUP1 PUSH2 0x223 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x59 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x4783C35B EQ PUSH2 0x65 JUMPI DUP1 PUSH4 0x67F1FFA4 EQ PUSH2 0x90 JUMPI DUP1 PUSH4 0x92EE9D03 EQ PUSH2 0xCE JUMPI DUP1 PUSH4 0xC8488CED EQ PUSH2 0xE5 JUMPI DUP1 PUSH4 0xCC328F24 EQ PUSH2 0x123 JUMPI DUP1 PUSH4 0xDF7BBF7B EQ PUSH2 0x14E JUMPI PUSH2 0x60 JUMP JUMPDEST CALLDATASIZE PUSH2 0x60 JUMPI STOP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x71 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x7A PUSH2 0x179 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x87 SWAP2 SWAP1 PUSH2 0x5E8 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x9C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xB7 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xB2 SWAP2 SWAP1 PUSH2 0x63E JUMP JUMPDEST PUSH2 0x19D JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xC5 SWAP3 SWAP2 SWAP1 PUSH2 0x67A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xDA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xE3 PUSH2 0x203 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xF1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x10C PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x107 SWAP2 SWAP1 PUSH2 0x63E JUMP JUMPDEST PUSH2 0x482 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x11A SWAP3 SWAP2 SWAP1 PUSH2 0x67A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x12F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x138 PUSH2 0x4C6 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x145 SWAP2 SWAP1 PUSH2 0x73C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x15A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x163 PUSH2 0x559 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x170 SWAP2 SWAP1 PUSH2 0x75E JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 DUP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 DUP6 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x1 ADD SLOAD SWAP1 POP PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 DUP7 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP1 DUP3 SWAP4 POP SWAP4 POP POP POP SWAP2 POP SWAP2 JUMP JUMPDEST PUSH1 0x0 PUSH2 0x20E ADDRESS PUSH2 0x55F JUMP JUMPDEST GT PUSH2 0x24E JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x245 SWAP1 PUSH2 0x7FC JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 DUP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x2DC JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x2D3 SWAP1 PUSH2 0x88E JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 SELFBALANCE SWAP1 POP PUSH1 0x0 JUMPDEST PUSH1 0x2 DUP2 PUSH1 0xFF AND GT PUSH2 0x47E JUMPI PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 DUP4 PUSH1 0xFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 DUP5 PUSH1 0xFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x1 ADD SLOAD SWAP1 POP PUSH1 0x0 PUSH2 0x356 DUP4 PUSH2 0x55F JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH2 0x364 DUP7 DUP5 PUSH2 0x580 JUMP JUMPDEST SWAP1 POP PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH1 0x40 MLOAD PUSH2 0x38C SWAP1 PUSH2 0x905 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP8 GAS CALL SWAP3 POP POP POP RETURNDATASIZE DUP1 PUSH1 0x0 DUP2 EQ PUSH2 0x3C9 JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH1 0x0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x3CE JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP PUSH1 0x0 PUSH2 0x3DD DUP7 PUSH2 0x55F JUMP JUMPDEST SWAP1 POP DUP2 ISZERO PUSH2 0x427 JUMPI PUSH32 0xDA258B3A1CBC9D5BC655B6678E93F3C6BA635ACD5606063B31A09F61101D6EFE DUP7 DUP6 DUP6 DUP5 PUSH1 0x40 MLOAD PUSH2 0x41A SWAP5 SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0x979 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 PUSH2 0x465 JUMP JUMPDEST PUSH32 0x3F6BB9CB0871EE0C636863B1D01DB56792BCE9968229A1CDFCCC5972B97AE1D2 DUP7 DUP6 DUP6 DUP5 PUSH1 0x40 MLOAD PUSH2 0x45C SWAP5 SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0x979 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 JUMPDEST POP POP POP POP POP POP DUP1 DUP1 PUSH2 0x476 SWAP1 PUSH2 0x9FA JUMP JUMPDEST SWAP2 POP POP PUSH2 0x2E4 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SWAP1 POP DUP1 PUSH1 0x0 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 DUP1 PUSH1 0x1 ADD SLOAD SWAP1 POP DUP3 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x40 MLOAD PUSH1 0x24 ADD PUSH2 0x4D7 SWAP1 PUSH2 0xA47 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 DUP4 SUB SUB DUP2 MSTORE SWAP1 PUSH1 0x40 MSTORE PUSH32 0x92EE9D0300000000000000000000000000000000000000000000000000000000 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH1 0x20 DUP3 ADD DUP1 MLOAD PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP4 DUP2 DUP4 AND OR DUP4 MSTORE POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND BALANCE SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x64 DUP4 DUP6 PUSH2 0x591 SWAP2 SWAP1 PUSH2 0xA67 JUMP JUMPDEST PUSH2 0x59B SWAP2 SWAP1 PUSH2 0xAF0 JUMP JUMPDEST SWAP1 POP DUP1 SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x5D2 DUP3 PUSH2 0x5A7 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x5E2 DUP2 PUSH2 0x5C7 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x5FD PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x5D9 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x61B DUP2 PUSH2 0x608 JUMP JUMPDEST DUP2 EQ PUSH2 0x626 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x638 DUP2 PUSH2 0x612 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x654 JUMPI PUSH2 0x653 PUSH2 0x603 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x662 DUP5 DUP3 DUP6 ADD PUSH2 0x629 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x674 DUP2 PUSH2 0x608 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 DUP3 ADD SWAP1 POP PUSH2 0x68F PUSH1 0x0 DUP4 ADD DUP6 PUSH2 0x5D9 JUMP JUMPDEST PUSH2 0x69C PUSH1 0x20 DUP4 ADD DUP5 PUSH2 0x66B JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x6DD JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x6C2 JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH2 0x6EC JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x70E DUP3 PUSH2 0x6A3 JUMP JUMPDEST PUSH2 0x718 DUP2 DUP6 PUSH2 0x6AE JUMP JUMPDEST SWAP4 POP PUSH2 0x728 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x6BF JUMP JUMPDEST PUSH2 0x731 DUP2 PUSH2 0x6F2 JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x756 DUP2 DUP5 PUSH2 0x703 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x773 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x66B JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x436F6E7472616374206973206E6F742066756E6465642C206E6F206173736574 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x20746F2064697374726962757465210000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x7E6 PUSH1 0x2F DUP4 PUSH2 0x779 JUMP JUMPDEST SWAP2 POP PUSH2 0x7F1 DUP3 PUSH2 0x78A JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x815 DUP2 PUSH2 0x7D9 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x53656E646572206973206E6F742064657369676E61746564206D756C74697369 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x672077616C6C6574000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x878 PUSH1 0x28 DUP4 PUSH2 0x779 JUMP JUMPDEST SWAP2 POP PUSH2 0x883 DUP3 PUSH2 0x81C JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x8A7 DUP2 PUSH2 0x86B JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x2000000000000000000000000000000000000000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x8EF PUSH1 0x1 DUP4 PUSH2 0x8AE JUMP JUMPDEST SWAP2 POP PUSH2 0x8FA DUP3 PUSH2 0x8B9 JUMP JUMPDEST PUSH1 0x1 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x910 DUP3 PUSH2 0x8E2 JUMP JUMPDEST SWAP2 POP DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x93F PUSH2 0x93A PUSH2 0x935 DUP5 PUSH2 0x5A7 JUMP JUMPDEST PUSH2 0x91A JUMP JUMPDEST PUSH2 0x5A7 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x951 DUP3 PUSH2 0x924 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x963 DUP3 PUSH2 0x946 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x973 DUP2 PUSH2 0x958 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x80 DUP3 ADD SWAP1 POP PUSH2 0x98E PUSH1 0x0 DUP4 ADD DUP8 PUSH2 0x96A JUMP JUMPDEST PUSH2 0x99B PUSH1 0x20 DUP4 ADD DUP7 PUSH2 0x66B JUMP JUMPDEST PUSH2 0x9A8 PUSH1 0x40 DUP4 ADD DUP6 PUSH2 0x66B JUMP JUMPDEST PUSH2 0x9B5 PUSH1 0x60 DUP4 ADD DUP5 PUSH2 0x66B JUMP JUMPDEST SWAP6 SWAP5 POP POP POP POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0xFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xA05 DUP3 PUSH2 0x9ED JUMP JUMPDEST SWAP2 POP PUSH1 0xFF DUP3 EQ ISZERO PUSH2 0xA19 JUMPI PUSH2 0xA18 PUSH2 0x9BE JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xA31 PUSH1 0x1 DUP4 PUSH2 0x779 JUMP JUMPDEST SWAP2 POP PUSH2 0xA3C DUP3 PUSH2 0x8B9 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0xA60 DUP2 PUSH2 0xA24 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xA72 DUP3 PUSH2 0x608 JUMP JUMPDEST SWAP2 POP PUSH2 0xA7D DUP4 PUSH2 0x608 JUMP JUMPDEST SWAP3 POP DUP2 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DIV DUP4 GT DUP3 ISZERO ISZERO AND ISZERO PUSH2 0xAB6 JUMPI PUSH2 0xAB5 PUSH2 0x9BE JUMP JUMPDEST JUMPDEST DUP3 DUP3 MUL SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x12 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH2 0xAFB DUP3 PUSH2 0x608 JUMP JUMPDEST SWAP2 POP PUSH2 0xB06 DUP4 PUSH2 0x608 JUMP JUMPDEST SWAP3 POP DUP3 PUSH2 0xB16 JUMPI PUSH2 0xB15 PUSH2 0xAC1 JUMP JUMPDEST JUMPDEST DUP3 DUP3 DIV SWAP1 POP SWAP3 SWAP2 POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 PUSH13 0x64AC9BE4BB0068EB3392E97336 CALLVALUE PUSH20 0x5C8B3C152D5E0D683259FD9B9A28DF7C64736F6C PUSH4 0x4300080A STOP CALLER ",
        "sourceMap": "382:2398:0:-:0;;;658:276;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;711:9;700:8;;:20;;;;;;;;;;;;;;;;;;746:42;731:4;:7;736:1;731:7;;;;;;;;;;;:12;;;:57;;;;;;;;;;;;;;;;;;817:2;799:4;:7;804:1;799:7;;;;;;;;;;;:15;;:20;;;;845:42;830:4;:7;835:1;830:7;;;;;;;;;;;:12;;;:57;;;;;;;;;;;;;;;;;;916:2;898:4;:7;903:1;898:7;;;;;;;;;;;:15;;:20;;;;658:276;382:2398;;88:117:1;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:143::-;753:5;784:6;778:13;769:22;;800:33;827:5;800:33;:::i;:::-;696:143;;;;:::o;845:351::-;915:6;964:2;952:9;943:7;939:23;935:32;932:119;;;970:79;;:::i;:::-;932:119;1090:1;1115:64;1171:7;1162:6;1151:9;1147:22;1115:64;:::i;:::-;1105:74;;1061:128;845:351;;;;:::o;382:2398:0:-;;;;;;;"
    }
    var dwContract = new web3.eth.Contract(dwABI);

    console.log(dwContract)

    const expectedBlockTime = 1000; 

    var decetnralisedWill = await dwContract.deploy({

        data: '0x'+ dwByteCode.object, 
        
        arguments: [msAddress]
    
    }).send({from: web3.givenProvider.selectedAddress}, async function(error, transactonHash) {
        console.log("Submitted transaction with hash: ", transactonHash)
        let transactionReceipt = null
        while (transactionReceipt == null) { // Waiting expectedBlockTime until the transaction is mined
            transactionReceipt = await web3.eth.getTransactionReceipt(transactonHash);
            await sleep(expectedBlockTime)
        }
        console.log("Got the transaction receipt: ", transactionReceipt)

        console.log("Contract address is: ", transactionReceipt.contractAddress)

        const dwAddress = transactionReceipt.contractAddress

        const getDwAddress = document.getElementById('dw-address');

        getDwAddress.innerHTML = "Decentralised Will Address: " + dwAddress

    });

}


const lawyerWalletEnable = document.getElementById('lawyer1-wallet-connect');

lawyerWalletEnable.onclick = async () => {
    
    await ethereum.request({method: 'eth_requestAccounts'})
    
    const walletCurrentAccount = document.getElementById('lawyer1-wallet');
    
    walletCurrentAccount.innerHTML = "Connected Wallet: " + ethereum.selectedAddress
}

//0x896E4Af05B39db5775c34E1487919Cad7384E7D0


// dw address = 0x8c97f34fB44AC6C8b0617837E0dD640218Bd85FE


const provideSignature = document.getElementById('lawyer1-sign');

provideSignature.onclick = async() => {

    const dwAddress = document.getElementById('dw-address-sign').value;
    const multisigAddress = document.getElementById('ms-address-sign').value;


    var web3 = new Web3(window.ethereum)
    
    const decentralisedWill = new web3.eth.Contract(dwABI, dwAddress)

    decentralisedWill.setProvider(window.ethereum)

    console.log(decentralisedWill)

    const encoded = await decentralisedWill.methods.getDistributeAssetData

    console.log(encoded)

    var web3 = new Web3(window.ethereum)

    const multiSig = new web3.eth.Contract(multisigABI, multisigAddress)

    multiSig.setProvider(window.ethereum)

    console.log(multiSig)

    await multiSig.methods.submitTransaction(dwAddress, 0, encoded).send({from: web3.givenProvider.selectedAddress})


    // await multiSig.methods.confirmTransaction(0);

    // console.log(multiSig.events.Execution)

    // web3.eth.getTransactionReceipt(tx)
} 


const lawyerWallet2Enable = document.getElementById('lawyer2-wallet-connect');

lawyerWallet2Enable.onclick = async () => {
    
    await ethereum.request({method: 'eth_requestAccounts'})
    
    const walletCurrentAccount = document.getElementById('lawyer2-wallet');
    
    walletCurrentAccount.innerHTML = "Connected Wallet: " + ethereum.selectedAddress
}


const provideSignature2 = document.getElementById('lawyer2-sign');

provideSignature2.onclick = async() => {

    const dwAddress = document.getElementById('dw-address-sign').value;
    const multisigAddress = document.getElementById('ms-address-sign').value;

    var web3 = new Web3(window.ethereum)
    
    const decentralisedWill = new web3.eth.Contract(dwABI, dwAddress)

    decentralisedWill.setProvider(window.ethereum)

    console.log(decentralisedWill)

    const encoded = await decentralisedWill.methods.getDistributeAssetData

    console.log(encoded)

    var web3 = new Web3(window.ethereum)

    const multiSig = new web3.eth.Contract(multisigABI, multisigAddress)

    multiSig.setProvider(window.ethereum)

    console.log(multiSig)

    await multiSig.methods.confirmTransaction(0).send({from: web3.givenProvider.selectedAddress});

} 


