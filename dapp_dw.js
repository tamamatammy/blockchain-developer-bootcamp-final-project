console.log("hello dapp developers!")

// Detect whether there is wallet 
window.addEventListener('load', function() {
    if (typeof window.ethereum !== 'undefined'){
        console.log('Wallet detected')
        let  walletDetected = document.getElementById('wallet-detected')
        // piped in html from javascripts 
        // walletDetected.innerHTML += "Wallet has been detected"
    }
    else {
        console.log('Wallet Not Available!')
        alert("You need to install wallet!")        
    }})

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
			},
			{
				"internalType": "uint256",
				"name": "_waitBlock",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "_addressWithdraw",
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
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "curentBlock",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "expectedBlock",
				"type": "uint256"
			}
		],
		"name": "ExecutionLocked",
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "withdrawAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "contractBalance",
				"type": "uint256"
			}
		],
		"name": "WithdrawFail",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "withdrawAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "contractBalance",
				"type": "uint256"
			}
		],
		"name": "WithdrawSuccess",
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
		"inputs": [],
		"name": "executionDate",
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
			},
			{
				"internalType": "uint256",
				"name": "height",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "signum",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "waitBlock",
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
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]
var multisigByteCode = {
	"functionDebugData": {
		"@_189": {
			"entryPoint": null,
			"id": 189,
			"parameterSlots": 4,
			"returnSlots": 0
		},
		"abi_decode_available_length_t_array$_t_address_$dyn_memory_ptr_fromMemory": {
			"entryPoint": 866,
			"id": null,
			"parameterSlots": 3,
			"returnSlots": 1
		},
		"abi_decode_t_address_fromMemory": {
			"entryPoint": 843,
			"id": null,
			"parameterSlots": 2,
			"returnSlots": 1
		},
		"abi_decode_t_address_payable_fromMemory": {
			"entryPoint": 1138,
			"id": null,
			"parameterSlots": 2,
			"returnSlots": 1
		},
		"abi_decode_t_array$_t_address_$dyn_memory_ptr_fromMemory": {
			"entryPoint": 982,
			"id": null,
			"parameterSlots": 2,
			"returnSlots": 1
		},
		"abi_decode_t_uint256_fromMemory": {
			"entryPoint": 1069,
			"id": null,
			"parameterSlots": 2,
			"returnSlots": 1
		},
		"abi_decode_tuple_t_array$_t_address_$dyn_memory_ptrt_uint256t_uint256t_address_payable_fromMemory": {
			"entryPoint": 1161,
			"id": null,
			"parameterSlots": 2,
			"returnSlots": 4
		},
		"allocate_memory": {
			"entryPoint": 682,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"allocate_unbounded": {
			"entryPoint": 539,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 1
		},
		"array_allocation_size_t_array$_t_address_$dyn_memory_ptr": {
			"entryPoint": 713,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"cleanup_t_address": {
			"entryPoint": 797,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"cleanup_t_address_payable": {
			"entryPoint": 1092,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"cleanup_t_uint160": {
			"entryPoint": 765,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"cleanup_t_uint256": {
			"entryPoint": 1033,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"finalize_allocation": {
			"entryPoint": 628,
			"id": null,
			"parameterSlots": 2,
			"returnSlots": 0
		},
		"increment_t_uint256": {
			"entryPoint": 1400,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"panic_error_0x11": {
			"entryPoint": 1353,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"panic_error_0x32": {
			"entryPoint": 1306,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"panic_error_0x41": {
			"entryPoint": 581,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d": {
			"entryPoint": 559,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef": {
			"entryPoint": 760,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db": {
			"entryPoint": 554,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b": {
			"entryPoint": 549,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"round_up_to_mul_of_32": {
			"entryPoint": 564,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"validator_revert_t_address": {
			"entryPoint": 817,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 0
		},
		"validator_revert_t_address_payable": {
			"entryPoint": 1112,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 0
		},
		"validator_revert_t_uint256": {
			"entryPoint": 1043,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 0
		}
	},
	"generatedSources": [
		{
			"ast": {
				"nodeType": "YulBlock",
				"src": "0:5719:2",
				"statements": [
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "47:35:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "57:19:2",
									"value": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "73:2:2",
												"type": "",
												"value": "64"
											}
										],
										"functionName": {
											"name": "mload",
											"nodeType": "YulIdentifier",
											"src": "67:5:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "67:9:2"
									},
									"variableNames": [
										{
											"name": "memPtr",
											"nodeType": "YulIdentifier",
											"src": "57:6:2"
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
								"src": "40:6:2",
								"type": ""
							}
						],
						"src": "7:75:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "177:28:2",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "194:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "197:1:2",
												"type": "",
												"value": "0"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "187:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "187:12:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "187:12:2"
								}
							]
						},
						"name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
						"nodeType": "YulFunctionDefinition",
						"src": "88:117:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "300:28:2",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "317:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "320:1:2",
												"type": "",
												"value": "0"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "310:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "310:12:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "310:12:2"
								}
							]
						},
						"name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
						"nodeType": "YulFunctionDefinition",
						"src": "211:117:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "423:28:2",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "440:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "443:1:2",
												"type": "",
												"value": "0"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "433:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "433:12:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "433:12:2"
								}
							]
						},
						"name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
						"nodeType": "YulFunctionDefinition",
						"src": "334:117:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "505:54:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "515:38:2",
									"value": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "value",
														"nodeType": "YulIdentifier",
														"src": "533:5:2"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "540:2:2",
														"type": "",
														"value": "31"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "529:3:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "529:14:2"
											},
											{
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "549:2:2",
														"type": "",
														"value": "31"
													}
												],
												"functionName": {
													"name": "not",
													"nodeType": "YulIdentifier",
													"src": "545:3:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "545:7:2"
											}
										],
										"functionName": {
											"name": "and",
											"nodeType": "YulIdentifier",
											"src": "525:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "525:28:2"
									},
									"variableNames": [
										{
											"name": "result",
											"nodeType": "YulIdentifier",
											"src": "515:6:2"
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
								"src": "488:5:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "result",
								"nodeType": "YulTypedName",
								"src": "498:6:2",
								"type": ""
							}
						],
						"src": "457:102:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "593:152:2",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "610:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "613:77:2",
												"type": "",
												"value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "603:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "603:88:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "603:88:2"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "707:1:2",
												"type": "",
												"value": "4"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "710:4:2",
												"type": "",
												"value": "0x41"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "700:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "700:15:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "700:15:2"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "731:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "734:4:2",
												"type": "",
												"value": "0x24"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "724:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "724:15:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "724:15:2"
								}
							]
						},
						"name": "panic_error_0x41",
						"nodeType": "YulFunctionDefinition",
						"src": "565:180:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "794:238:2",
							"statements": [
								{
									"nodeType": "YulVariableDeclaration",
									"src": "804:58:2",
									"value": {
										"arguments": [
											{
												"name": "memPtr",
												"nodeType": "YulIdentifier",
												"src": "826:6:2"
											},
											{
												"arguments": [
													{
														"name": "size",
														"nodeType": "YulIdentifier",
														"src": "856:4:2"
													}
												],
												"functionName": {
													"name": "round_up_to_mul_of_32",
													"nodeType": "YulIdentifier",
													"src": "834:21:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "834:27:2"
											}
										],
										"functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "822:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "822:40:2"
									},
									"variables": [
										{
											"name": "newFreePtr",
											"nodeType": "YulTypedName",
											"src": "808:10:2",
											"type": ""
										}
									]
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "973:22:2",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "panic_error_0x41",
														"nodeType": "YulIdentifier",
														"src": "975:16:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "975:18:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "975:18:2"
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
														"src": "916:10:2"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "928:18:2",
														"type": "",
														"value": "0xffffffffffffffff"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "913:2:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "913:34:2"
											},
											{
												"arguments": [
													{
														"name": "newFreePtr",
														"nodeType": "YulIdentifier",
														"src": "952:10:2"
													},
													{
														"name": "memPtr",
														"nodeType": "YulIdentifier",
														"src": "964:6:2"
													}
												],
												"functionName": {
													"name": "lt",
													"nodeType": "YulIdentifier",
													"src": "949:2:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "949:22:2"
											}
										],
										"functionName": {
											"name": "or",
											"nodeType": "YulIdentifier",
											"src": "910:2:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "910:62:2"
									},
									"nodeType": "YulIf",
									"src": "907:88:2"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1011:2:2",
												"type": "",
												"value": "64"
											},
											{
												"name": "newFreePtr",
												"nodeType": "YulIdentifier",
												"src": "1015:10:2"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "1004:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "1004:22:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "1004:22:2"
								}
							]
						},
						"name": "finalize_allocation",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "memPtr",
								"nodeType": "YulTypedName",
								"src": "780:6:2",
								"type": ""
							},
							{
								"name": "size",
								"nodeType": "YulTypedName",
								"src": "788:4:2",
								"type": ""
							}
						],
						"src": "751:281:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1079:88:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "1089:30:2",
									"value": {
										"arguments": [],
										"functionName": {
											"name": "allocate_unbounded",
											"nodeType": "YulIdentifier",
											"src": "1099:18:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "1099:20:2"
									},
									"variableNames": [
										{
											"name": "memPtr",
											"nodeType": "YulIdentifier",
											"src": "1089:6:2"
										}
									]
								},
								{
									"expression": {
										"arguments": [
											{
												"name": "memPtr",
												"nodeType": "YulIdentifier",
												"src": "1148:6:2"
											},
											{
												"name": "size",
												"nodeType": "YulIdentifier",
												"src": "1156:4:2"
											}
										],
										"functionName": {
											"name": "finalize_allocation",
											"nodeType": "YulIdentifier",
											"src": "1128:19:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "1128:33:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "1128:33:2"
								}
							]
						},
						"name": "allocate_memory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "size",
								"nodeType": "YulTypedName",
								"src": "1063:4:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "memPtr",
								"nodeType": "YulTypedName",
								"src": "1072:6:2",
								"type": ""
							}
						],
						"src": "1038:129:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1255:229:2",
							"statements": [
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "1360:22:2",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "panic_error_0x41",
														"nodeType": "YulIdentifier",
														"src": "1362:16:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "1362:18:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "1362:18:2"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "1332:6:2"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1340:18:2",
												"type": "",
												"value": "0xffffffffffffffff"
											}
										],
										"functionName": {
											"name": "gt",
											"nodeType": "YulIdentifier",
											"src": "1329:2:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "1329:30:2"
									},
									"nodeType": "YulIf",
									"src": "1326:56:2"
								},
								{
									"nodeType": "YulAssignment",
									"src": "1392:25:2",
									"value": {
										"arguments": [
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "1404:6:2"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1412:4:2",
												"type": "",
												"value": "0x20"
											}
										],
										"functionName": {
											"name": "mul",
											"nodeType": "YulIdentifier",
											"src": "1400:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "1400:17:2"
									},
									"variableNames": [
										{
											"name": "size",
											"nodeType": "YulIdentifier",
											"src": "1392:4:2"
										}
									]
								},
								{
									"nodeType": "YulAssignment",
									"src": "1454:23:2",
									"value": {
										"arguments": [
											{
												"name": "size",
												"nodeType": "YulIdentifier",
												"src": "1466:4:2"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1472:4:2",
												"type": "",
												"value": "0x20"
											}
										],
										"functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "1462:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "1462:15:2"
									},
									"variableNames": [
										{
											"name": "size",
											"nodeType": "YulIdentifier",
											"src": "1454:4:2"
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
								"src": "1239:6:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "size",
								"nodeType": "YulTypedName",
								"src": "1250:4:2",
								"type": ""
							}
						],
						"src": "1173:311:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1579:28:2",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1596:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1599:1:2",
												"type": "",
												"value": "0"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "1589:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "1589:12:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "1589:12:2"
								}
							]
						},
						"name": "revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef",
						"nodeType": "YulFunctionDefinition",
						"src": "1490:117:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1658:81:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "1668:65:2",
									"value": {
										"arguments": [
											{
												"name": "value",
												"nodeType": "YulIdentifier",
												"src": "1683:5:2"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1690:42:2",
												"type": "",
												"value": "0xffffffffffffffffffffffffffffffffffffffff"
											}
										],
										"functionName": {
											"name": "and",
											"nodeType": "YulIdentifier",
											"src": "1679:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "1679:54:2"
									},
									"variableNames": [
										{
											"name": "cleaned",
											"nodeType": "YulIdentifier",
											"src": "1668:7:2"
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
								"src": "1640:5:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "cleaned",
								"nodeType": "YulTypedName",
								"src": "1650:7:2",
								"type": ""
							}
						],
						"src": "1613:126:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1790:51:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "1800:35:2",
									"value": {
										"arguments": [
											{
												"name": "value",
												"nodeType": "YulIdentifier",
												"src": "1829:5:2"
											}
										],
										"functionName": {
											"name": "cleanup_t_uint160",
											"nodeType": "YulIdentifier",
											"src": "1811:17:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "1811:24:2"
									},
									"variableNames": [
										{
											"name": "cleaned",
											"nodeType": "YulIdentifier",
											"src": "1800:7:2"
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
								"src": "1772:5:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "cleaned",
								"nodeType": "YulTypedName",
								"src": "1782:7:2",
								"type": ""
							}
						],
						"src": "1745:96:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1890:79:2",
							"statements": [
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "1947:16:2",
										"statements": [
											{
												"expression": {
													"arguments": [
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "1956:1:2",
															"type": "",
															"value": "0"
														},
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "1959:1:2",
															"type": "",
															"value": "0"
														}
													],
													"functionName": {
														"name": "revert",
														"nodeType": "YulIdentifier",
														"src": "1949:6:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "1949:12:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "1949:12:2"
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
														"src": "1913:5:2"
													},
													{
														"arguments": [
															{
																"name": "value",
																"nodeType": "YulIdentifier",
																"src": "1938:5:2"
															}
														],
														"functionName": {
															"name": "cleanup_t_address",
															"nodeType": "YulIdentifier",
															"src": "1920:17:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "1920:24:2"
													}
												],
												"functionName": {
													"name": "eq",
													"nodeType": "YulIdentifier",
													"src": "1910:2:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "1910:35:2"
											}
										],
										"functionName": {
											"name": "iszero",
											"nodeType": "YulIdentifier",
											"src": "1903:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "1903:43:2"
									},
									"nodeType": "YulIf",
									"src": "1900:63:2"
								}
							]
						},
						"name": "validator_revert_t_address",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "value",
								"nodeType": "YulTypedName",
								"src": "1883:5:2",
								"type": ""
							}
						],
						"src": "1847:122:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "2038:80:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "2048:22:2",
									"value": {
										"arguments": [
											{
												"name": "offset",
												"nodeType": "YulIdentifier",
												"src": "2063:6:2"
											}
										],
										"functionName": {
											"name": "mload",
											"nodeType": "YulIdentifier",
											"src": "2057:5:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2057:13:2"
									},
									"variableNames": [
										{
											"name": "value",
											"nodeType": "YulIdentifier",
											"src": "2048:5:2"
										}
									]
								},
								{
									"expression": {
										"arguments": [
											{
												"name": "value",
												"nodeType": "YulIdentifier",
												"src": "2106:5:2"
											}
										],
										"functionName": {
											"name": "validator_revert_t_address",
											"nodeType": "YulIdentifier",
											"src": "2079:26:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2079:33:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "2079:33:2"
								}
							]
						},
						"name": "abi_decode_t_address_fromMemory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "offset",
								"nodeType": "YulTypedName",
								"src": "2016:6:2",
								"type": ""
							},
							{
								"name": "end",
								"nodeType": "YulTypedName",
								"src": "2024:3:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "value",
								"nodeType": "YulTypedName",
								"src": "2032:5:2",
								"type": ""
							}
						],
						"src": "1975:143:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "2254:619:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "2264:90:2",
									"value": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "length",
														"nodeType": "YulIdentifier",
														"src": "2346:6:2"
													}
												],
												"functionName": {
													"name": "array_allocation_size_t_array$_t_address_$dyn_memory_ptr",
													"nodeType": "YulIdentifier",
													"src": "2289:56:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "2289:64:2"
											}
										],
										"functionName": {
											"name": "allocate_memory",
											"nodeType": "YulIdentifier",
											"src": "2273:15:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2273:81:2"
									},
									"variableNames": [
										{
											"name": "array",
											"nodeType": "YulIdentifier",
											"src": "2264:5:2"
										}
									]
								},
								{
									"nodeType": "YulVariableDeclaration",
									"src": "2363:16:2",
									"value": {
										"name": "array",
										"nodeType": "YulIdentifier",
										"src": "2374:5:2"
									},
									"variables": [
										{
											"name": "dst",
											"nodeType": "YulTypedName",
											"src": "2367:3:2",
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
												"src": "2396:5:2"
											},
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "2403:6:2"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "2389:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2389:21:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "2389:21:2"
								},
								{
									"nodeType": "YulAssignment",
									"src": "2419:23:2",
									"value": {
										"arguments": [
											{
												"name": "array",
												"nodeType": "YulIdentifier",
												"src": "2430:5:2"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2437:4:2",
												"type": "",
												"value": "0x20"
											}
										],
										"functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "2426:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2426:16:2"
									},
									"variableNames": [
										{
											"name": "dst",
											"nodeType": "YulIdentifier",
											"src": "2419:3:2"
										}
									]
								},
								{
									"nodeType": "YulVariableDeclaration",
									"src": "2452:44:2",
									"value": {
										"arguments": [
											{
												"name": "offset",
												"nodeType": "YulIdentifier",
												"src": "2470:6:2"
											},
											{
												"arguments": [
													{
														"name": "length",
														"nodeType": "YulIdentifier",
														"src": "2482:6:2"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "2490:4:2",
														"type": "",
														"value": "0x20"
													}
												],
												"functionName": {
													"name": "mul",
													"nodeType": "YulIdentifier",
													"src": "2478:3:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "2478:17:2"
											}
										],
										"functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "2466:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2466:30:2"
									},
									"variables": [
										{
											"name": "srcEnd",
											"nodeType": "YulTypedName",
											"src": "2456:6:2",
											"type": ""
										}
									]
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "2524:103:2",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef",
														"nodeType": "YulIdentifier",
														"src": "2538:77:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "2538:79:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "2538:79:2"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"name": "srcEnd",
												"nodeType": "YulIdentifier",
												"src": "2511:6:2"
											},
											{
												"name": "end",
												"nodeType": "YulIdentifier",
												"src": "2519:3:2"
											}
										],
										"functionName": {
											"name": "gt",
											"nodeType": "YulIdentifier",
											"src": "2508:2:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2508:15:2"
									},
									"nodeType": "YulIf",
									"src": "2505:122:2"
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "2712:155:2",
										"statements": [
											{
												"nodeType": "YulVariableDeclaration",
												"src": "2727:21:2",
												"value": {
													"name": "src",
													"nodeType": "YulIdentifier",
													"src": "2745:3:2"
												},
												"variables": [
													{
														"name": "elementPos",
														"nodeType": "YulTypedName",
														"src": "2731:10:2",
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
															"src": "2769:3:2"
														},
														{
															"arguments": [
																{
																	"name": "elementPos",
																	"nodeType": "YulIdentifier",
																	"src": "2806:10:2"
																},
																{
																	"name": "end",
																	"nodeType": "YulIdentifier",
																	"src": "2818:3:2"
																}
															],
															"functionName": {
																"name": "abi_decode_t_address_fromMemory",
																"nodeType": "YulIdentifier",
																"src": "2774:31:2"
															},
															"nodeType": "YulFunctionCall",
															"src": "2774:48:2"
														}
													],
													"functionName": {
														"name": "mstore",
														"nodeType": "YulIdentifier",
														"src": "2762:6:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "2762:61:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "2762:61:2"
											},
											{
												"nodeType": "YulAssignment",
												"src": "2836:21:2",
												"value": {
													"arguments": [
														{
															"name": "dst",
															"nodeType": "YulIdentifier",
															"src": "2847:3:2"
														},
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "2852:4:2",
															"type": "",
															"value": "0x20"
														}
													],
													"functionName": {
														"name": "add",
														"nodeType": "YulIdentifier",
														"src": "2843:3:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "2843:14:2"
												},
												"variableNames": [
													{
														"name": "dst",
														"nodeType": "YulIdentifier",
														"src": "2836:3:2"
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
												"src": "2665:3:2"
											},
											{
												"name": "srcEnd",
												"nodeType": "YulIdentifier",
												"src": "2670:6:2"
											}
										],
										"functionName": {
											"name": "lt",
											"nodeType": "YulIdentifier",
											"src": "2662:2:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2662:15:2"
									},
									"nodeType": "YulForLoop",
									"post": {
										"nodeType": "YulBlock",
										"src": "2678:25:2",
										"statements": [
											{
												"nodeType": "YulAssignment",
												"src": "2680:21:2",
												"value": {
													"arguments": [
														{
															"name": "src",
															"nodeType": "YulIdentifier",
															"src": "2691:3:2"
														},
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "2696:4:2",
															"type": "",
															"value": "0x20"
														}
													],
													"functionName": {
														"name": "add",
														"nodeType": "YulIdentifier",
														"src": "2687:3:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "2687:14:2"
												},
												"variableNames": [
													{
														"name": "src",
														"nodeType": "YulIdentifier",
														"src": "2680:3:2"
													}
												]
											}
										]
									},
									"pre": {
										"nodeType": "YulBlock",
										"src": "2640:21:2",
										"statements": [
											{
												"nodeType": "YulVariableDeclaration",
												"src": "2642:17:2",
												"value": {
													"name": "offset",
													"nodeType": "YulIdentifier",
													"src": "2653:6:2"
												},
												"variables": [
													{
														"name": "src",
														"nodeType": "YulTypedName",
														"src": "2646:3:2",
														"type": ""
													}
												]
											}
										]
									},
									"src": "2636:231:2"
								}
							]
						},
						"name": "abi_decode_available_length_t_array$_t_address_$dyn_memory_ptr_fromMemory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "offset",
								"nodeType": "YulTypedName",
								"src": "2224:6:2",
								"type": ""
							},
							{
								"name": "length",
								"nodeType": "YulTypedName",
								"src": "2232:6:2",
								"type": ""
							},
							{
								"name": "end",
								"nodeType": "YulTypedName",
								"src": "2240:3:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "array",
								"nodeType": "YulTypedName",
								"src": "2248:5:2",
								"type": ""
							}
						],
						"src": "2141:732:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "2984:297:2",
							"statements": [
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "3033:83:2",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
														"nodeType": "YulIdentifier",
														"src": "3035:77:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "3035:79:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "3035:79:2"
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
																"src": "3012:6:2"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "3020:4:2",
																"type": "",
																"value": "0x1f"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "3008:3:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "3008:17:2"
													},
													{
														"name": "end",
														"nodeType": "YulIdentifier",
														"src": "3027:3:2"
													}
												],
												"functionName": {
													"name": "slt",
													"nodeType": "YulIdentifier",
													"src": "3004:3:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "3004:27:2"
											}
										],
										"functionName": {
											"name": "iszero",
											"nodeType": "YulIdentifier",
											"src": "2997:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2997:35:2"
									},
									"nodeType": "YulIf",
									"src": "2994:122:2"
								},
								{
									"nodeType": "YulVariableDeclaration",
									"src": "3125:27:2",
									"value": {
										"arguments": [
											{
												"name": "offset",
												"nodeType": "YulIdentifier",
												"src": "3145:6:2"
											}
										],
										"functionName": {
											"name": "mload",
											"nodeType": "YulIdentifier",
											"src": "3139:5:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3139:13:2"
									},
									"variables": [
										{
											"name": "length",
											"nodeType": "YulTypedName",
											"src": "3129:6:2",
											"type": ""
										}
									]
								},
								{
									"nodeType": "YulAssignment",
									"src": "3161:114:2",
									"value": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "offset",
														"nodeType": "YulIdentifier",
														"src": "3248:6:2"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "3256:4:2",
														"type": "",
														"value": "0x20"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "3244:3:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "3244:17:2"
											},
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "3263:6:2"
											},
											{
												"name": "end",
												"nodeType": "YulIdentifier",
												"src": "3271:3:2"
											}
										],
										"functionName": {
											"name": "abi_decode_available_length_t_array$_t_address_$dyn_memory_ptr_fromMemory",
											"nodeType": "YulIdentifier",
											"src": "3170:73:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3170:105:2"
									},
									"variableNames": [
										{
											"name": "array",
											"nodeType": "YulIdentifier",
											"src": "3161:5:2"
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
								"src": "2962:6:2",
								"type": ""
							},
							{
								"name": "end",
								"nodeType": "YulTypedName",
								"src": "2970:3:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "array",
								"nodeType": "YulTypedName",
								"src": "2978:5:2",
								"type": ""
							}
						],
						"src": "2896:385:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "3332:32:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "3342:16:2",
									"value": {
										"name": "value",
										"nodeType": "YulIdentifier",
										"src": "3353:5:2"
									},
									"variableNames": [
										{
											"name": "cleaned",
											"nodeType": "YulIdentifier",
											"src": "3342:7:2"
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
								"src": "3314:5:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "cleaned",
								"nodeType": "YulTypedName",
								"src": "3324:7:2",
								"type": ""
							}
						],
						"src": "3287:77:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "3413:79:2",
							"statements": [
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "3470:16:2",
										"statements": [
											{
												"expression": {
													"arguments": [
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "3479:1:2",
															"type": "",
															"value": "0"
														},
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "3482:1:2",
															"type": "",
															"value": "0"
														}
													],
													"functionName": {
														"name": "revert",
														"nodeType": "YulIdentifier",
														"src": "3472:6:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "3472:12:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "3472:12:2"
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
														"src": "3436:5:2"
													},
													{
														"arguments": [
															{
																"name": "value",
																"nodeType": "YulIdentifier",
																"src": "3461:5:2"
															}
														],
														"functionName": {
															"name": "cleanup_t_uint256",
															"nodeType": "YulIdentifier",
															"src": "3443:17:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "3443:24:2"
													}
												],
												"functionName": {
													"name": "eq",
													"nodeType": "YulIdentifier",
													"src": "3433:2:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "3433:35:2"
											}
										],
										"functionName": {
											"name": "iszero",
											"nodeType": "YulIdentifier",
											"src": "3426:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3426:43:2"
									},
									"nodeType": "YulIf",
									"src": "3423:63:2"
								}
							]
						},
						"name": "validator_revert_t_uint256",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "value",
								"nodeType": "YulTypedName",
								"src": "3406:5:2",
								"type": ""
							}
						],
						"src": "3370:122:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "3561:80:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "3571:22:2",
									"value": {
										"arguments": [
											{
												"name": "offset",
												"nodeType": "YulIdentifier",
												"src": "3586:6:2"
											}
										],
										"functionName": {
											"name": "mload",
											"nodeType": "YulIdentifier",
											"src": "3580:5:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3580:13:2"
									},
									"variableNames": [
										{
											"name": "value",
											"nodeType": "YulIdentifier",
											"src": "3571:5:2"
										}
									]
								},
								{
									"expression": {
										"arguments": [
											{
												"name": "value",
												"nodeType": "YulIdentifier",
												"src": "3629:5:2"
											}
										],
										"functionName": {
											"name": "validator_revert_t_uint256",
											"nodeType": "YulIdentifier",
											"src": "3602:26:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3602:33:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "3602:33:2"
								}
							]
						},
						"name": "abi_decode_t_uint256_fromMemory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "offset",
								"nodeType": "YulTypedName",
								"src": "3539:6:2",
								"type": ""
							},
							{
								"name": "end",
								"nodeType": "YulTypedName",
								"src": "3547:3:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "value",
								"nodeType": "YulTypedName",
								"src": "3555:5:2",
								"type": ""
							}
						],
						"src": "3498:143:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "3700:51:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "3710:35:2",
									"value": {
										"arguments": [
											{
												"name": "value",
												"nodeType": "YulIdentifier",
												"src": "3739:5:2"
											}
										],
										"functionName": {
											"name": "cleanup_t_uint160",
											"nodeType": "YulIdentifier",
											"src": "3721:17:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3721:24:2"
									},
									"variableNames": [
										{
											"name": "cleaned",
											"nodeType": "YulIdentifier",
											"src": "3710:7:2"
										}
									]
								}
							]
						},
						"name": "cleanup_t_address_payable",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "value",
								"nodeType": "YulTypedName",
								"src": "3682:5:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "cleaned",
								"nodeType": "YulTypedName",
								"src": "3692:7:2",
								"type": ""
							}
						],
						"src": "3647:104:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "3808:87:2",
							"statements": [
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "3873:16:2",
										"statements": [
											{
												"expression": {
													"arguments": [
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "3882:1:2",
															"type": "",
															"value": "0"
														},
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "3885:1:2",
															"type": "",
															"value": "0"
														}
													],
													"functionName": {
														"name": "revert",
														"nodeType": "YulIdentifier",
														"src": "3875:6:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "3875:12:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "3875:12:2"
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
														"src": "3831:5:2"
													},
													{
														"arguments": [
															{
																"name": "value",
																"nodeType": "YulIdentifier",
																"src": "3864:5:2"
															}
														],
														"functionName": {
															"name": "cleanup_t_address_payable",
															"nodeType": "YulIdentifier",
															"src": "3838:25:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "3838:32:2"
													}
												],
												"functionName": {
													"name": "eq",
													"nodeType": "YulIdentifier",
													"src": "3828:2:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "3828:43:2"
											}
										],
										"functionName": {
											"name": "iszero",
											"nodeType": "YulIdentifier",
											"src": "3821:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3821:51:2"
									},
									"nodeType": "YulIf",
									"src": "3818:71:2"
								}
							]
						},
						"name": "validator_revert_t_address_payable",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "value",
								"nodeType": "YulTypedName",
								"src": "3801:5:2",
								"type": ""
							}
						],
						"src": "3757:138:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "3972:88:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "3982:22:2",
									"value": {
										"arguments": [
											{
												"name": "offset",
												"nodeType": "YulIdentifier",
												"src": "3997:6:2"
											}
										],
										"functionName": {
											"name": "mload",
											"nodeType": "YulIdentifier",
											"src": "3991:5:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3991:13:2"
									},
									"variableNames": [
										{
											"name": "value",
											"nodeType": "YulIdentifier",
											"src": "3982:5:2"
										}
									]
								},
								{
									"expression": {
										"arguments": [
											{
												"name": "value",
												"nodeType": "YulIdentifier",
												"src": "4048:5:2"
											}
										],
										"functionName": {
											"name": "validator_revert_t_address_payable",
											"nodeType": "YulIdentifier",
											"src": "4013:34:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "4013:41:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "4013:41:2"
								}
							]
						},
						"name": "abi_decode_t_address_payable_fromMemory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "offset",
								"nodeType": "YulTypedName",
								"src": "3950:6:2",
								"type": ""
							},
							{
								"name": "end",
								"nodeType": "YulTypedName",
								"src": "3958:3:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "value",
								"nodeType": "YulTypedName",
								"src": "3966:5:2",
								"type": ""
							}
						],
						"src": "3901:159:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "4227:878:2",
							"statements": [
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "4274:83:2",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
														"nodeType": "YulIdentifier",
														"src": "4276:77:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "4276:79:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "4276:79:2"
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
														"src": "4248:7:2"
													},
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "4257:9:2"
													}
												],
												"functionName": {
													"name": "sub",
													"nodeType": "YulIdentifier",
													"src": "4244:3:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "4244:23:2"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "4269:3:2",
												"type": "",
												"value": "128"
											}
										],
										"functionName": {
											"name": "slt",
											"nodeType": "YulIdentifier",
											"src": "4240:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "4240:33:2"
									},
									"nodeType": "YulIf",
									"src": "4237:120:2"
								},
								{
									"nodeType": "YulBlock",
									"src": "4367:306:2",
									"statements": [
										{
											"nodeType": "YulVariableDeclaration",
											"src": "4382:38:2",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "4406:9:2"
															},
															{
																"kind": "number",
																"nodeType": "YulLiteral",
																"src": "4417:1:2",
																"type": "",
																"value": "0"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "4402:3:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "4402:17:2"
													}
												],
												"functionName": {
													"name": "mload",
													"nodeType": "YulIdentifier",
													"src": "4396:5:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "4396:24:2"
											},
											"variables": [
												{
													"name": "offset",
													"nodeType": "YulTypedName",
													"src": "4386:6:2",
													"type": ""
												}
											]
										},
										{
											"body": {
												"nodeType": "YulBlock",
												"src": "4467:83:2",
												"statements": [
													{
														"expression": {
															"arguments": [],
															"functionName": {
																"name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
																"nodeType": "YulIdentifier",
																"src": "4469:77:2"
															},
															"nodeType": "YulFunctionCall",
															"src": "4469:79:2"
														},
														"nodeType": "YulExpressionStatement",
														"src": "4469:79:2"
													}
												]
											},
											"condition": {
												"arguments": [
													{
														"name": "offset",
														"nodeType": "YulIdentifier",
														"src": "4439:6:2"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "4447:18:2",
														"type": "",
														"value": "0xffffffffffffffff"
													}
												],
												"functionName": {
													"name": "gt",
													"nodeType": "YulIdentifier",
													"src": "4436:2:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "4436:30:2"
											},
											"nodeType": "YulIf",
											"src": "4433:117:2"
										},
										{
											"nodeType": "YulAssignment",
											"src": "4564:99:2",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "4635:9:2"
															},
															{
																"name": "offset",
																"nodeType": "YulIdentifier",
																"src": "4646:6:2"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "4631:3:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "4631:22:2"
													},
													{
														"name": "dataEnd",
														"nodeType": "YulIdentifier",
														"src": "4655:7:2"
													}
												],
												"functionName": {
													"name": "abi_decode_t_array$_t_address_$dyn_memory_ptr_fromMemory",
													"nodeType": "YulIdentifier",
													"src": "4574:56:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "4574:89:2"
											},
											"variableNames": [
												{
													"name": "value0",
													"nodeType": "YulIdentifier",
													"src": "4564:6:2"
												}
											]
										}
									]
								},
								{
									"nodeType": "YulBlock",
									"src": "4683:129:2",
									"statements": [
										{
											"nodeType": "YulVariableDeclaration",
											"src": "4698:16:2",
											"value": {
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "4712:2:2",
												"type": "",
												"value": "32"
											},
											"variables": [
												{
													"name": "offset",
													"nodeType": "YulTypedName",
													"src": "4702:6:2",
													"type": ""
												}
											]
										},
										{
											"nodeType": "YulAssignment",
											"src": "4728:74:2",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "4774:9:2"
															},
															{
																"name": "offset",
																"nodeType": "YulIdentifier",
																"src": "4785:6:2"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "4770:3:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "4770:22:2"
													},
													{
														"name": "dataEnd",
														"nodeType": "YulIdentifier",
														"src": "4794:7:2"
													}
												],
												"functionName": {
													"name": "abi_decode_t_uint256_fromMemory",
													"nodeType": "YulIdentifier",
													"src": "4738:31:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "4738:64:2"
											},
											"variableNames": [
												{
													"name": "value1",
													"nodeType": "YulIdentifier",
													"src": "4728:6:2"
												}
											]
										}
									]
								},
								{
									"nodeType": "YulBlock",
									"src": "4822:129:2",
									"statements": [
										{
											"nodeType": "YulVariableDeclaration",
											"src": "4837:16:2",
											"value": {
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "4851:2:2",
												"type": "",
												"value": "64"
											},
											"variables": [
												{
													"name": "offset",
													"nodeType": "YulTypedName",
													"src": "4841:6:2",
													"type": ""
												}
											]
										},
										{
											"nodeType": "YulAssignment",
											"src": "4867:74:2",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "4913:9:2"
															},
															{
																"name": "offset",
																"nodeType": "YulIdentifier",
																"src": "4924:6:2"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "4909:3:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "4909:22:2"
													},
													{
														"name": "dataEnd",
														"nodeType": "YulIdentifier",
														"src": "4933:7:2"
													}
												],
												"functionName": {
													"name": "abi_decode_t_uint256_fromMemory",
													"nodeType": "YulIdentifier",
													"src": "4877:31:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "4877:64:2"
											},
											"variableNames": [
												{
													"name": "value2",
													"nodeType": "YulIdentifier",
													"src": "4867:6:2"
												}
											]
										}
									]
								},
								{
									"nodeType": "YulBlock",
									"src": "4961:137:2",
									"statements": [
										{
											"nodeType": "YulVariableDeclaration",
											"src": "4976:16:2",
											"value": {
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "4990:2:2",
												"type": "",
												"value": "96"
											},
											"variables": [
												{
													"name": "offset",
													"nodeType": "YulTypedName",
													"src": "4980:6:2",
													"type": ""
												}
											]
										},
										{
											"nodeType": "YulAssignment",
											"src": "5006:82:2",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "5060:9:2"
															},
															{
																"name": "offset",
																"nodeType": "YulIdentifier",
																"src": "5071:6:2"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "5056:3:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "5056:22:2"
													},
													{
														"name": "dataEnd",
														"nodeType": "YulIdentifier",
														"src": "5080:7:2"
													}
												],
												"functionName": {
													"name": "abi_decode_t_address_payable_fromMemory",
													"nodeType": "YulIdentifier",
													"src": "5016:39:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "5016:72:2"
											},
											"variableNames": [
												{
													"name": "value3",
													"nodeType": "YulIdentifier",
													"src": "5006:6:2"
												}
											]
										}
									]
								}
							]
						},
						"name": "abi_decode_tuple_t_array$_t_address_$dyn_memory_ptrt_uint256t_uint256t_address_payable_fromMemory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "headStart",
								"nodeType": "YulTypedName",
								"src": "4173:9:2",
								"type": ""
							},
							{
								"name": "dataEnd",
								"nodeType": "YulTypedName",
								"src": "4184:7:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "value0",
								"nodeType": "YulTypedName",
								"src": "4196:6:2",
								"type": ""
							},
							{
								"name": "value1",
								"nodeType": "YulTypedName",
								"src": "4204:6:2",
								"type": ""
							},
							{
								"name": "value2",
								"nodeType": "YulTypedName",
								"src": "4212:6:2",
								"type": ""
							},
							{
								"name": "value3",
								"nodeType": "YulTypedName",
								"src": "4220:6:2",
								"type": ""
							}
						],
						"src": "4066:1039:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "5139:152:2",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "5156:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "5159:77:2",
												"type": "",
												"value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "5149:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "5149:88:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "5149:88:2"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "5253:1:2",
												"type": "",
												"value": "4"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "5256:4:2",
												"type": "",
												"value": "0x32"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "5246:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "5246:15:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "5246:15:2"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "5277:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "5280:4:2",
												"type": "",
												"value": "0x24"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "5270:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "5270:15:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "5270:15:2"
								}
							]
						},
						"name": "panic_error_0x32",
						"nodeType": "YulFunctionDefinition",
						"src": "5111:180:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "5325:152:2",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "5342:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "5345:77:2",
												"type": "",
												"value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "5335:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "5335:88:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "5335:88:2"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "5439:1:2",
												"type": "",
												"value": "4"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "5442:4:2",
												"type": "",
												"value": "0x11"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "5432:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "5432:15:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "5432:15:2"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "5463:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "5466:4:2",
												"type": "",
												"value": "0x24"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "5456:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "5456:15:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "5456:15:2"
								}
							]
						},
						"name": "panic_error_0x11",
						"nodeType": "YulFunctionDefinition",
						"src": "5297:180:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "5526:190:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "5536:33:2",
									"value": {
										"arguments": [
											{
												"name": "value",
												"nodeType": "YulIdentifier",
												"src": "5563:5:2"
											}
										],
										"functionName": {
											"name": "cleanup_t_uint256",
											"nodeType": "YulIdentifier",
											"src": "5545:17:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "5545:24:2"
									},
									"variableNames": [
										{
											"name": "value",
											"nodeType": "YulIdentifier",
											"src": "5536:5:2"
										}
									]
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "5659:22:2",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "panic_error_0x11",
														"nodeType": "YulIdentifier",
														"src": "5661:16:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "5661:18:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "5661:18:2"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"name": "value",
												"nodeType": "YulIdentifier",
												"src": "5584:5:2"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "5591:66:2",
												"type": "",
												"value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
											}
										],
										"functionName": {
											"name": "eq",
											"nodeType": "YulIdentifier",
											"src": "5581:2:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "5581:77:2"
									},
									"nodeType": "YulIf",
									"src": "5578:103:2"
								},
								{
									"nodeType": "YulAssignment",
									"src": "5690:20:2",
									"value": {
										"arguments": [
											{
												"name": "value",
												"nodeType": "YulIdentifier",
												"src": "5701:5:2"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "5708:1:2",
												"type": "",
												"value": "1"
											}
										],
										"functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "5697:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "5697:13:2"
									},
									"variableNames": [
										{
											"name": "ret",
											"nodeType": "YulIdentifier",
											"src": "5690:3:2"
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
								"src": "5512:5:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "ret",
								"nodeType": "YulTypedName",
								"src": "5522:3:2",
								"type": ""
							}
						],
						"src": "5483:233:2"
					}
				]
			},
			"contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_array$_t_address_$dyn_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := mul(length, 0x20)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address(value)\n    }\n\n    // address[]\n    function abi_decode_available_length_t_array$_t_address_$dyn_memory_ptr_fromMemory(offset, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_array$_t_address_$dyn_memory_ptr(length))\n        let dst := array\n\n        mstore(array, length)\n        dst := add(array, 0x20)\n\n        let srcEnd := add(offset, mul(length, 0x20))\n        if gt(srcEnd, end) {\n            revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef()\n        }\n        for { let src := offset } lt(src, srcEnd) { src := add(src, 0x20) }\n        {\n\n            let elementPos := src\n\n            mstore(dst, abi_decode_t_address_fromMemory(elementPos, end))\n            dst := add(dst, 0x20)\n        }\n    }\n\n    // address[]\n    function abi_decode_t_array$_t_address_$dyn_memory_ptr_fromMemory(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := mload(offset)\n        array := abi_decode_available_length_t_array$_t_address_$dyn_memory_ptr_fromMemory(add(offset, 0x20), length, end)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function cleanup_t_address_payable(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address_payable(value) {\n        if iszero(eq(value, cleanup_t_address_payable(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address_payable_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address_payable(value)\n    }\n\n    function abi_decode_tuple_t_array$_t_address_$dyn_memory_ptrt_uint256t_uint256t_address_payable_fromMemory(headStart, dataEnd) -> value0, value1, value2, value3 {\n        if slt(sub(dataEnd, headStart), 128) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := mload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0 := abi_decode_t_array$_t_address_$dyn_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 96\n\n            value3 := abi_decode_t_address_payable_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x32() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n}\n",
			"id": 2,
			"language": "Yul",
			"name": "#utility.yul"
		}
	],
	"linkReferences": {},
	"object": "60806040523480156200001157600080fd5b506040516200208238038062002082833981810160405281019062000037919062000489565b83518381811180620000495750600081145b80620000555750600082145b156200006057600080fd5b60005b8651811015620000f8576001600660008984815181106200008957620000886200051a565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508080620000ef9062000578565b91505062000063565b508560009080519060200190620001119291906200016d565b50846002819055508360038190555082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505050620005c6565b828054828255906000526020600020908101928215620001e9579160200282015b82811115620001e85782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906200018e565b5b509050620001f89190620001fc565b5090565b5b8082111562000217576000816000905550600101620001fd565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200027f8262000234565b810181811067ffffffffffffffff82111715620002a157620002a062000245565b5b80604052505050565b6000620002b66200021b565b9050620002c4828262000274565b919050565b600067ffffffffffffffff821115620002e757620002e662000245565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200032a82620002fd565b9050919050565b6200033c816200031d565b81146200034857600080fd5b50565b6000815190506200035c8162000331565b92915050565b6000620003796200037384620002c9565b620002aa565b905080838252602082019050602084028301858111156200039f576200039e620002f8565b5b835b81811015620003cc5780620003b788826200034b565b845260208401935050602081019050620003a1565b5050509392505050565b600082601f830112620003ee57620003ed6200022f565b5b81516200040084826020860162000362565b91505092915050565b6000819050919050565b6200041e8162000409565b81146200042a57600080fd5b50565b6000815190506200043e8162000413565b92915050565b60006200045182620002fd565b9050919050565b620004638162000444565b81146200046f57600080fd5b50565b600081519050620004838162000458565b92915050565b60008060008060808587031215620004a657620004a562000225565b5b600085015167ffffffffffffffff811115620004c757620004c66200022a565b5b620004d587828801620003d6565b9450506020620004e8878288016200042d565b9350506040620004fb878288016200042d565b92505060606200050e8782880162000472565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620005858262000409565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415620005bb57620005ba62000549565b5b600182019050919050565b611aac80620005d66000396000f3fe6080604052600436106100ab5760003560e01c8063a761d1b611610064578063a761d1b61461024a578063b77bf60014610275578063c01a8c84146102a0578063c6427474146102c9578063dc8452cd14610306578063ee22610b14610331576100b2565b8063025e7c271461010f5780632f54bf6e1461014c5780633411c81c146101895780633ccfd60b146101c65780639ace38c2146101dd578063a45365d31461021f576100b2565b366100b257005b600034111561010a573373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c346040516101019190611088565b60405180910390a25b600080fd5b34801561011b57600080fd5b50610136600480360381019061013191906110e3565b61035a565b6040516101439190611151565b60405180910390f35b34801561015857600080fd5b50610173600480360381019061016e9190611198565b610399565b60405161018091906111e0565b60405180910390f35b34801561019557600080fd5b506101b060048036038101906101ab91906111fb565b6103b9565b6040516101bd91906111e0565b60405180910390f35b3480156101d257600080fd5b506101db6103e8565b005b3480156101e957600080fd5b5061020460048036038101906101ff91906110e3565b6105cb565b604051610216969594939291906112d4565b60405180910390f35b34801561022b57600080fd5b506102346106bc565b6040516102419190611088565b60405180910390f35b34801561025657600080fd5b5061025f6106c2565b60405161026c9190611088565b60405180910390f35b34801561028157600080fd5b5061028a6106c8565b6040516102979190611088565b60405180910390f35b3480156102ac57600080fd5b506102c760048036038101906102c291906110e3565b6106ce565b005b3480156102d557600080fd5b506102f060048036038101906102eb9190611471565b61095d565b6040516102fd9190611088565b60405180910390f35b34801561031257600080fd5b5061031b610a09565b6040516103289190611088565b60405180910390f35b34801561033d57600080fd5b50610358600480360381019061035391906110e3565b610a0f565b005b6000818154811061036a57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60066020528060005260406000206000915054906101000a900460ff1681565b60086020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610478576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046f9061153d565b60405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16476040516104c0906115b4565b60006040518083038185875af1925050503d80600081146104fd576040519150601f19603f3d011682016040523d82523d6000602084013e610502565b606091505b50509050801561056c577f95e1b0070dbccc052f124fa5143644dca4cc74c53bf1d0fe68ff7295f61cdc0c600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff164760405161055f929190611628565b60405180910390a16105c8565b7f67079857ed5dbe37f84d8b9a528567e7fa47512439b74fb1f7c7d9b76ab4a34e600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16476040516105bf929190611628565b60405180910390a15b50565b60076020528060005260406000206000915090508060000160009054906101000a900460ff16908060000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101549080600201805461062d90611680565b80601f016020809104026020016040519081016040528092919081815260200182805461065990611680565b80156106a65780601f1061067b576101008083540402835291602001916106a6565b820191906000526020600020905b81548152906001019060200180831161068957829003601f168201915b5050505050908060030154908060040154905086565b60035481565b60055481565b60045481565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661075a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610751906116fe565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166007600083815260200190815260200160002060000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610800576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f79061176a565b60405180910390fd5b600015156008600083815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146108a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089b906117d6565b60405180910390fd5b60016008600083815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550803373ffffffffffffffffffffffffffffffffffffffff167f4a504a94899432a9846e1aa406dceb1bcfd538bb839071d49d1e5e23f5be30ef60405160405180910390a361095a81610a0f565b50565b6000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166109eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e290611842565b60405180910390fd5b6109f784848443610d5b565b9050610a02816106ce565b9392505050565b60025481565b600015156007600083815260200190815260200160002060000160009054906101000a900460ff16151514610a79576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a70906118ae565b60405180910390fd5b610a8281610eb0565b15610d58576000600760008381526020019081526020016000209050610aaf816003015460035443610fa7565b15610c6f5760018160000160006101000a81548160ff02191690831515021790555060008160000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff164783600201604051610b209190611962565b60006040518083038185875af1925050503d8060008114610b5d576040519150601f19603f3d011682016040523d82523d6000602084013e610b62565b606091505b505090508015610bde578282600101548360000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f3a79215c35280c50516adc051697ed94f955e0e43c5c646d59d0fc62b5254cb460405160405180910390a4610c69565b8282600101548360000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8d24b020e7ba900ea81a875f9c7462c05ab35f3b71b19611e99f86ef00560e7460405160405180910390a460008260000160006101000a81548160ff0219169083151502179055505b50610d56565b433373ffffffffffffffffffffffffffffffffffffffff167f487fc7f3fcfc4303cc8b9779a3116e0f225ab0eaa4267eec538c1412fbc6c83f6003548460030154610cba91906119a8565b604051610cc79190611088565b60405180910390a360008160000160006101000a81548160ff02191690831515021790555060006008600084815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b505b50565b600060045490506040518060c001604052806000151581526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200183815260200160018152506007600083815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600101556060820151816002019080519060200190610e49929190610fcc565b506080820151816003015560a08201518160040155905050600160046000828254610e7491906119a8565b92505081905550807fc0ba8fe4b176c1714197d43b9cc6bcf797a4a7461c5fe8d0ef6e184ae7601e5160405160405180910390a2949350505050565b6000806000905060005b600080549050811015610f9f57600860008581526020019081526020016000206000808381548110610eef57610eee6119fe565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610f7757600182610f7491906119a8565b91505b600254821415610f8c57600192505050610fa2565b8080610f9790611a2d565b915050610eba565b50505b919050565b60008383610fb591906119a8565b8210610fc45760019050610fc5565b5b9392505050565b828054610fd890611680565b90600052602060002090601f016020900481019282610ffa5760008555611041565b82601f1061101357805160ff1916838001178555611041565b82800160010185558215611041579182015b82811115611040578251825591602001919060010190611025565b5b50905061104e9190611052565b5090565b5b8082111561106b576000816000905550600101611053565b5090565b6000819050919050565b6110828161106f565b82525050565b600060208201905061109d6000830184611079565b92915050565b6000604051905090565b600080fd5b600080fd5b6110c08161106f565b81146110cb57600080fd5b50565b6000813590506110dd816110b7565b92915050565b6000602082840312156110f9576110f86110ad565b5b6000611107848285016110ce565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061113b82611110565b9050919050565b61114b81611130565b82525050565b60006020820190506111666000830184611142565b92915050565b61117581611130565b811461118057600080fd5b50565b6000813590506111928161116c565b92915050565b6000602082840312156111ae576111ad6110ad565b5b60006111bc84828501611183565b91505092915050565b60008115159050919050565b6111da816111c5565b82525050565b60006020820190506111f560008301846111d1565b92915050565b60008060408385031215611212576112116110ad565b5b6000611220858286016110ce565b925050602061123185828601611183565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561127557808201518184015260208101905061125a565b83811115611284576000848401525b50505050565b6000601f19601f8301169050919050565b60006112a68261123b565b6112b08185611246565b93506112c0818560208601611257565b6112c98161128a565b840191505092915050565b600060c0820190506112e960008301896111d1565b6112f66020830188611142565b6113036040830187611079565b8181036060830152611315818661129b565b90506113246080830185611079565b61133160a0830184611079565b979650505050505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61137e8261128a565b810181811067ffffffffffffffff8211171561139d5761139c611346565b5b80604052505050565b60006113b06110a3565b90506113bc8282611375565b919050565b600067ffffffffffffffff8211156113dc576113db611346565b5b6113e58261128a565b9050602081019050919050565b82818337600083830152505050565b600061141461140f846113c1565b6113a6565b9050828152602081018484840111156114305761142f611341565b5b61143b8482856113f2565b509392505050565b600082601f8301126114585761145761133c565b5b8135611468848260208601611401565b91505092915050565b60008060006060848603121561148a576114896110ad565b5b600061149886828701611183565b93505060206114a9868287016110ce565b925050604084013567ffffffffffffffff8111156114ca576114c96110b2565b5b6114d686828701611443565b9150509250925092565b600082825260208201905092915050565b7f7700000000000000000000000000000000000000000000000000000000000000600082015250565b60006115276001836114e0565b9150611532826114f1565b602082019050919050565b600060208201905081810360008301526115568161151a565b9050919050565b600081905092915050565b7f2000000000000000000000000000000000000000000000000000000000000000600082015250565b600061159e60018361155d565b91506115a982611568565b600182019050919050565b60006115bf82611591565b9150819050919050565b6000819050919050565b60006115ee6115e96115e484611110565b6115c9565b611110565b9050919050565b6000611600826115d3565b9050919050565b6000611612826115f5565b9050919050565b61162281611607565b82525050565b600060408201905061163d6000830185611619565b61164a6020830184611079565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061169857607f821691505b602082108114156116ac576116ab611651565b5b50919050565b7f6374310000000000000000000000000000000000000000000000000000000000600082015250565b60006116e86003836114e0565b91506116f3826116b2565b602082019050919050565b60006020820190508181036000830152611717816116db565b9050919050565b7f6374320000000000000000000000000000000000000000000000000000000000600082015250565b60006117546003836114e0565b915061175f8261171e565b602082019050919050565b6000602082019050818103600083015261178381611747565b9050919050565b7f6374330000000000000000000000000000000000000000000000000000000000600082015250565b60006117c06003836114e0565b91506117cb8261178a565b602082019050919050565b600060208201905081810360008301526117ef816117b3565b9050919050565b7f7374310000000000000000000000000000000000000000000000000000000000600082015250565b600061182c6003836114e0565b9150611837826117f6565b602082019050919050565b6000602082019050818103600083015261185b8161181f565b9050919050565b7f6574310000000000000000000000000000000000000000000000000000000000600082015250565b60006118986003836114e0565b91506118a382611862565b602082019050919050565b600060208201905081810360008301526118c78161188b565b9050919050565b60008190508160005260206000209050919050565b600081546118f081611680565b6118fa818661155d565b94506001821660008114611915576001811461192657611959565b60ff19831686528186019350611959565b61192f856118ce565b60005b8381101561195157815481890152600182019150602081019050611932565b838801955050505b50505092915050565b600061196e82846118e3565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006119b38261106f565b91506119be8361106f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156119f3576119f2611979565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000611a388261106f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611a6b57611a6a611979565b5b60018201905091905056fea264697066735822122002e8ee537ba0d67929f17a189c17213c600f4411bd36ac99cd93a5fd0de0edf064736f6c634300080a0033",
	"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH3 0x11 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH3 0x2082 CODESIZE SUB DUP1 PUSH3 0x2082 DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH3 0x37 SWAP2 SWAP1 PUSH3 0x489 JUMP JUMPDEST DUP4 MLOAD DUP4 DUP2 DUP2 GT DUP1 PUSH3 0x49 JUMPI POP PUSH1 0x0 DUP2 EQ JUMPDEST DUP1 PUSH3 0x55 JUMPI POP PUSH1 0x0 DUP3 EQ JUMPDEST ISZERO PUSH3 0x60 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 JUMPDEST DUP7 MLOAD DUP2 LT ISZERO PUSH3 0xF8 JUMPI PUSH1 0x1 PUSH1 0x6 PUSH1 0x0 DUP10 DUP5 DUP2 MLOAD DUP2 LT PUSH3 0x89 JUMPI PUSH3 0x88 PUSH3 0x51A JUMP JUMPDEST JUMPDEST PUSH1 0x20 MUL PUSH1 0x20 ADD ADD MLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP DUP1 DUP1 PUSH3 0xEF SWAP1 PUSH3 0x578 JUMP JUMPDEST SWAP2 POP POP PUSH3 0x63 JUMP JUMPDEST POP DUP6 PUSH1 0x0 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH3 0x111 SWAP3 SWAP2 SWAP1 PUSH3 0x16D JUMP JUMPDEST POP DUP5 PUSH1 0x2 DUP2 SWAP1 SSTORE POP DUP4 PUSH1 0x3 DUP2 SWAP1 SSTORE POP DUP3 PUSH1 0x1 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP POP POP POP POP POP POP PUSH3 0x5C6 JUMP JUMPDEST DUP3 DUP1 SLOAD DUP3 DUP3 SSTORE SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 DUP2 ADD SWAP3 DUP3 ISZERO PUSH3 0x1E9 JUMPI SWAP2 PUSH1 0x20 MUL DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH3 0x1E8 JUMPI DUP3 MLOAD DUP3 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH3 0x18E JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH3 0x1F8 SWAP2 SWAP1 PUSH3 0x1FC JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST JUMPDEST DUP1 DUP3 GT ISZERO PUSH3 0x217 JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH3 0x1FD JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH3 0x27F DUP3 PUSH3 0x234 JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH3 0x2A1 JUMPI PUSH3 0x2A0 PUSH3 0x245 JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x2B6 PUSH3 0x21B JUMP JUMPDEST SWAP1 POP PUSH3 0x2C4 DUP3 DUP3 PUSH3 0x274 JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH3 0x2E7 JUMPI PUSH3 0x2E6 PUSH3 0x245 JUMP JUMPDEST JUMPDEST PUSH1 0x20 DUP3 MUL SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x32A DUP3 PUSH3 0x2FD JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x33C DUP2 PUSH3 0x31D JUMP JUMPDEST DUP2 EQ PUSH3 0x348 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH3 0x35C DUP2 PUSH3 0x331 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x379 PUSH3 0x373 DUP5 PUSH3 0x2C9 JUMP JUMPDEST PUSH3 0x2AA JUMP JUMPDEST SWAP1 POP DUP1 DUP4 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH1 0x20 DUP5 MUL DUP4 ADD DUP6 DUP2 GT ISZERO PUSH3 0x39F JUMPI PUSH3 0x39E PUSH3 0x2F8 JUMP JUMPDEST JUMPDEST DUP4 JUMPDEST DUP2 DUP2 LT ISZERO PUSH3 0x3CC JUMPI DUP1 PUSH3 0x3B7 DUP9 DUP3 PUSH3 0x34B JUMP JUMPDEST DUP5 MSTORE PUSH1 0x20 DUP5 ADD SWAP4 POP POP PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH3 0x3A1 JUMP JUMPDEST POP POP POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH3 0x3EE JUMPI PUSH3 0x3ED PUSH3 0x22F JUMP JUMPDEST JUMPDEST DUP2 MLOAD PUSH3 0x400 DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH3 0x362 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x41E DUP2 PUSH3 0x409 JUMP JUMPDEST DUP2 EQ PUSH3 0x42A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH3 0x43E DUP2 PUSH3 0x413 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x451 DUP3 PUSH3 0x2FD JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x463 DUP2 PUSH3 0x444 JUMP JUMPDEST DUP2 EQ PUSH3 0x46F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH3 0x483 DUP2 PUSH3 0x458 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP1 PUSH1 0x80 DUP6 DUP8 SUB SLT ISZERO PUSH3 0x4A6 JUMPI PUSH3 0x4A5 PUSH3 0x225 JUMP JUMPDEST JUMPDEST PUSH1 0x0 DUP6 ADD MLOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH3 0x4C7 JUMPI PUSH3 0x4C6 PUSH3 0x22A JUMP JUMPDEST JUMPDEST PUSH3 0x4D5 DUP8 DUP3 DUP9 ADD PUSH3 0x3D6 JUMP JUMPDEST SWAP5 POP POP PUSH1 0x20 PUSH3 0x4E8 DUP8 DUP3 DUP9 ADD PUSH3 0x42D JUMP JUMPDEST SWAP4 POP POP PUSH1 0x40 PUSH3 0x4FB DUP8 DUP3 DUP9 ADD PUSH3 0x42D JUMP JUMPDEST SWAP3 POP POP PUSH1 0x60 PUSH3 0x50E DUP8 DUP3 DUP9 ADD PUSH3 0x472 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP6 SWAP2 SWAP5 POP SWAP3 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x32 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH3 0x585 DUP3 PUSH3 0x409 JUMP JUMPDEST SWAP2 POP PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 EQ ISZERO PUSH3 0x5BB JUMPI PUSH3 0x5BA PUSH3 0x549 JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x1AAC DUP1 PUSH3 0x5D6 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0xAB JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0xA761D1B6 GT PUSH2 0x64 JUMPI DUP1 PUSH4 0xA761D1B6 EQ PUSH2 0x24A JUMPI DUP1 PUSH4 0xB77BF600 EQ PUSH2 0x275 JUMPI DUP1 PUSH4 0xC01A8C84 EQ PUSH2 0x2A0 JUMPI DUP1 PUSH4 0xC6427474 EQ PUSH2 0x2C9 JUMPI DUP1 PUSH4 0xDC8452CD EQ PUSH2 0x306 JUMPI DUP1 PUSH4 0xEE22610B EQ PUSH2 0x331 JUMPI PUSH2 0xB2 JUMP JUMPDEST DUP1 PUSH4 0x25E7C27 EQ PUSH2 0x10F JUMPI DUP1 PUSH4 0x2F54BF6E EQ PUSH2 0x14C JUMPI DUP1 PUSH4 0x3411C81C EQ PUSH2 0x189 JUMPI DUP1 PUSH4 0x3CCFD60B EQ PUSH2 0x1C6 JUMPI DUP1 PUSH4 0x9ACE38C2 EQ PUSH2 0x1DD JUMPI DUP1 PUSH4 0xA45365D3 EQ PUSH2 0x21F JUMPI PUSH2 0xB2 JUMP JUMPDEST CALLDATASIZE PUSH2 0xB2 JUMPI STOP JUMPDEST PUSH1 0x0 CALLVALUE GT ISZERO PUSH2 0x10A JUMPI CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xE1FFFCC4923D04B559F4D29A8BFC6CDA04EB5B0D3C460751C2402C5C5CC9109C CALLVALUE PUSH1 0x40 MLOAD PUSH2 0x101 SWAP2 SWAP1 PUSH2 0x1088 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG2 JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x11B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x136 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x131 SWAP2 SWAP1 PUSH2 0x10E3 JUMP JUMPDEST PUSH2 0x35A JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x143 SWAP2 SWAP1 PUSH2 0x1151 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x158 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x173 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x16E SWAP2 SWAP1 PUSH2 0x1198 JUMP JUMPDEST PUSH2 0x399 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x180 SWAP2 SWAP1 PUSH2 0x11E0 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x195 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1B0 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1AB SWAP2 SWAP1 PUSH2 0x11FB JUMP JUMPDEST PUSH2 0x3B9 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1BD SWAP2 SWAP1 PUSH2 0x11E0 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1D2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1DB PUSH2 0x3E8 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1E9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x204 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1FF SWAP2 SWAP1 PUSH2 0x10E3 JUMP JUMPDEST PUSH2 0x5CB JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x216 SWAP7 SWAP6 SWAP5 SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0x12D4 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x22B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x234 PUSH2 0x6BC JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x241 SWAP2 SWAP1 PUSH2 0x1088 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x256 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x25F PUSH2 0x6C2 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x26C SWAP2 SWAP1 PUSH2 0x1088 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x281 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x28A PUSH2 0x6C8 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x297 SWAP2 SWAP1 PUSH2 0x1088 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2AC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2C7 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x2C2 SWAP2 SWAP1 PUSH2 0x10E3 JUMP JUMPDEST PUSH2 0x6CE JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2D5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2F0 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x2EB SWAP2 SWAP1 PUSH2 0x1471 JUMP JUMPDEST PUSH2 0x95D JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x2FD SWAP2 SWAP1 PUSH2 0x1088 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x312 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x31B PUSH2 0xA09 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x328 SWAP2 SWAP1 PUSH2 0x1088 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x33D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x358 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x353 SWAP2 SWAP1 PUSH2 0x10E3 JUMP JUMPDEST PUSH2 0xA0F JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 DUP2 DUP2 SLOAD DUP2 LT PUSH2 0x36A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 ADD PUSH1 0x0 SWAP2 POP SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x6 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x8 PUSH1 0x20 MSTORE DUP2 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SWAP2 POP SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x478 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x46F SWAP1 PUSH2 0x153D JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SELFBALANCE PUSH1 0x40 MLOAD PUSH2 0x4C0 SWAP1 PUSH2 0x15B4 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP8 GAS CALL SWAP3 POP POP POP RETURNDATASIZE DUP1 PUSH1 0x0 DUP2 EQ PUSH2 0x4FD JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH1 0x0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x502 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 ISZERO PUSH2 0x56C JUMPI PUSH32 0x95E1B0070DBCCC052F124FA5143644DCA4CC74C53BF1D0FE68FF7295F61CDC0C PUSH1 0x1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SELFBALANCE PUSH1 0x40 MLOAD PUSH2 0x55F SWAP3 SWAP2 SWAP1 PUSH2 0x1628 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 PUSH2 0x5C8 JUMP JUMPDEST PUSH32 0x67079857ED5DBE37F84D8B9A528567E7FA47512439B74FB1F7C7D9B76AB4A34E PUSH1 0x1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SELFBALANCE PUSH1 0x40 MLOAD PUSH2 0x5BF SWAP3 SWAP2 SWAP1 PUSH2 0x1628 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 JUMPDEST POP JUMP JUMPDEST PUSH1 0x7 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SWAP1 POP DUP1 PUSH1 0x0 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND SWAP1 DUP1 PUSH1 0x0 ADD PUSH1 0x1 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 DUP1 PUSH1 0x1 ADD SLOAD SWAP1 DUP1 PUSH1 0x2 ADD DUP1 SLOAD PUSH2 0x62D SWAP1 PUSH2 0x1680 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x659 SWAP1 PUSH2 0x1680 JUMP JUMPDEST DUP1 ISZERO PUSH2 0x6A6 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x67B JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x6A6 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x689 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 DUP1 PUSH1 0x3 ADD SLOAD SWAP1 DUP1 PUSH1 0x4 ADD SLOAD SWAP1 POP DUP7 JUMP JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x5 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x4 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x6 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND PUSH2 0x75A JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x751 SWAP1 PUSH2 0x16FE JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x7 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 ADD PUSH1 0x1 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0x800 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x7F7 SWAP1 PUSH2 0x176A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 ISZERO ISZERO PUSH1 0x8 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND ISZERO ISZERO EQ PUSH2 0x8A4 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x89B SWAP1 PUSH2 0x17D6 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x1 PUSH1 0x8 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP DUP1 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x4A504A94899432A9846E1AA406DCEB1BCFD538BB839071D49D1E5E23F5BE30EF PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH2 0x95A DUP2 PUSH2 0xA0F JUMP JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x6 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND PUSH2 0x9EB JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x9E2 SWAP1 PUSH2 0x1842 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x9F7 DUP5 DUP5 DUP5 NUMBER PUSH2 0xD5B JUMP JUMPDEST SWAP1 POP PUSH2 0xA02 DUP2 PUSH2 0x6CE JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 ISZERO ISZERO PUSH1 0x7 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND ISZERO ISZERO EQ PUSH2 0xA79 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xA70 SWAP1 PUSH2 0x18AE JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xA82 DUP2 PUSH2 0xEB0 JUMP JUMPDEST ISZERO PUSH2 0xD58 JUMPI PUSH1 0x0 PUSH1 0x7 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SWAP1 POP PUSH2 0xAAF DUP2 PUSH1 0x3 ADD SLOAD PUSH1 0x3 SLOAD NUMBER PUSH2 0xFA7 JUMP JUMPDEST ISZERO PUSH2 0xC6F JUMPI PUSH1 0x1 DUP2 PUSH1 0x0 ADD PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP PUSH1 0x0 DUP2 PUSH1 0x0 ADD PUSH1 0x1 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SELFBALANCE DUP4 PUSH1 0x2 ADD PUSH1 0x40 MLOAD PUSH2 0xB20 SWAP2 SWAP1 PUSH2 0x1962 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP8 GAS CALL SWAP3 POP POP POP RETURNDATASIZE DUP1 PUSH1 0x0 DUP2 EQ PUSH2 0xB5D JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH1 0x0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0xB62 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP DUP1 ISZERO PUSH2 0xBDE JUMPI DUP3 DUP3 PUSH1 0x1 ADD SLOAD DUP4 PUSH1 0x0 ADD PUSH1 0x1 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x3A79215C35280C50516ADC051697ED94F955E0E43C5C646D59D0FC62B5254CB4 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG4 PUSH2 0xC69 JUMP JUMPDEST DUP3 DUP3 PUSH1 0x1 ADD SLOAD DUP4 PUSH1 0x0 ADD PUSH1 0x1 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8D24B020E7BA900EA81A875F9C7462C05AB35F3B71B19611E99F86EF00560E74 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG4 PUSH1 0x0 DUP3 PUSH1 0x0 ADD PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP JUMPDEST POP PUSH2 0xD56 JUMP JUMPDEST NUMBER CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x487FC7F3FCFC4303CC8B9779A3116E0F225AB0EAA4267EEC538C1412FBC6C83F PUSH1 0x3 SLOAD DUP5 PUSH1 0x3 ADD SLOAD PUSH2 0xCBA SWAP2 SWAP1 PUSH2 0x19A8 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xCC7 SWAP2 SWAP1 PUSH2 0x1088 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH1 0x0 DUP2 PUSH1 0x0 ADD PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP PUSH1 0x0 PUSH1 0x8 PUSH1 0x0 DUP5 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP JUMPDEST POP JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x4 SLOAD SWAP1 POP PUSH1 0x40 MLOAD DUP1 PUSH1 0xC0 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x0 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD DUP6 DUP2 MSTORE PUSH1 0x20 ADD DUP5 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x1 DUP2 MSTORE POP PUSH1 0x7 PUSH1 0x0 DUP4 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 ADD MLOAD DUP2 PUSH1 0x0 ADD PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH1 0xFF MUL NOT AND SWAP1 DUP4 ISZERO ISZERO MUL OR SWAP1 SSTORE POP PUSH1 0x20 DUP3 ADD MLOAD DUP2 PUSH1 0x0 ADD PUSH1 0x1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH1 0x40 DUP3 ADD MLOAD DUP2 PUSH1 0x1 ADD SSTORE PUSH1 0x60 DUP3 ADD MLOAD DUP2 PUSH1 0x2 ADD SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH2 0xE49 SWAP3 SWAP2 SWAP1 PUSH2 0xFCC JUMP JUMPDEST POP PUSH1 0x80 DUP3 ADD MLOAD DUP2 PUSH1 0x3 ADD SSTORE PUSH1 0xA0 DUP3 ADD MLOAD DUP2 PUSH1 0x4 ADD SSTORE SWAP1 POP POP PUSH1 0x1 PUSH1 0x4 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0xE74 SWAP2 SWAP1 PUSH2 0x19A8 JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP1 PUSH32 0xC0BA8FE4B176C1714197D43B9CC6BCF797A4A7461C5FE8D0EF6E184AE7601E51 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG2 SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 SWAP1 POP PUSH1 0x0 JUMPDEST PUSH1 0x0 DUP1 SLOAD SWAP1 POP DUP2 LT ISZERO PUSH2 0xF9F JUMPI PUSH1 0x8 PUSH1 0x0 DUP6 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP1 DUP4 DUP2 SLOAD DUP2 LT PUSH2 0xEEF JUMPI PUSH2 0xEEE PUSH2 0x19FE JUMP JUMPDEST JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH1 0xFF AND ISZERO PUSH2 0xF77 JUMPI PUSH1 0x1 DUP3 PUSH2 0xF74 SWAP2 SWAP1 PUSH2 0x19A8 JUMP JUMPDEST SWAP2 POP JUMPDEST PUSH1 0x2 SLOAD DUP3 EQ ISZERO PUSH2 0xF8C JUMPI PUSH1 0x1 SWAP3 POP POP POP PUSH2 0xFA2 JUMP JUMPDEST DUP1 DUP1 PUSH2 0xF97 SWAP1 PUSH2 0x1A2D JUMP JUMPDEST SWAP2 POP POP PUSH2 0xEBA JUMP JUMPDEST POP POP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP4 DUP4 PUSH2 0xFB5 SWAP2 SWAP1 PUSH2 0x19A8 JUMP JUMPDEST DUP3 LT PUSH2 0xFC4 JUMPI PUSH1 0x1 SWAP1 POP PUSH2 0xFC5 JUMP JUMPDEST JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH2 0xFD8 SWAP1 PUSH2 0x1680 JUMP JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH2 0xFFA JUMPI PUSH1 0x0 DUP6 SSTORE PUSH2 0x1041 JUMP JUMPDEST DUP3 PUSH1 0x1F LT PUSH2 0x1013 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x1041 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x1041 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x1040 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x1025 JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH2 0x104E SWAP2 SWAP1 PUSH2 0x1052 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x106B JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH2 0x1053 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x1082 DUP2 PUSH2 0x106F JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x109D PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x1079 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x10C0 DUP2 PUSH2 0x106F JUMP JUMPDEST DUP2 EQ PUSH2 0x10CB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x10DD DUP2 PUSH2 0x10B7 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x10F9 JUMPI PUSH2 0x10F8 PUSH2 0x10AD JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x1107 DUP5 DUP3 DUP6 ADD PUSH2 0x10CE JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x113B DUP3 PUSH2 0x1110 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x114B DUP2 PUSH2 0x1130 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x1166 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x1142 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x1175 DUP2 PUSH2 0x1130 JUMP JUMPDEST DUP2 EQ PUSH2 0x1180 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x1192 DUP2 PUSH2 0x116C JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x11AE JUMPI PUSH2 0x11AD PUSH2 0x10AD JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x11BC DUP5 DUP3 DUP6 ADD PUSH2 0x1183 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x11DA DUP2 PUSH2 0x11C5 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x11F5 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x11D1 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x1212 JUMPI PUSH2 0x1211 PUSH2 0x10AD JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x1220 DUP6 DUP3 DUP7 ADD PUSH2 0x10CE JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0x1231 DUP6 DUP3 DUP7 ADD PUSH2 0x1183 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x1275 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x125A JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH2 0x1284 JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x12A6 DUP3 PUSH2 0x123B JUMP JUMPDEST PUSH2 0x12B0 DUP2 DUP6 PUSH2 0x1246 JUMP JUMPDEST SWAP4 POP PUSH2 0x12C0 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x1257 JUMP JUMPDEST PUSH2 0x12C9 DUP2 PUSH2 0x128A JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0xC0 DUP3 ADD SWAP1 POP PUSH2 0x12E9 PUSH1 0x0 DUP4 ADD DUP10 PUSH2 0x11D1 JUMP JUMPDEST PUSH2 0x12F6 PUSH1 0x20 DUP4 ADD DUP9 PUSH2 0x1142 JUMP JUMPDEST PUSH2 0x1303 PUSH1 0x40 DUP4 ADD DUP8 PUSH2 0x1079 JUMP JUMPDEST DUP2 DUP2 SUB PUSH1 0x60 DUP4 ADD MSTORE PUSH2 0x1315 DUP2 DUP7 PUSH2 0x129B JUMP JUMPDEST SWAP1 POP PUSH2 0x1324 PUSH1 0x80 DUP4 ADD DUP6 PUSH2 0x1079 JUMP JUMPDEST PUSH2 0x1331 PUSH1 0xA0 DUP4 ADD DUP5 PUSH2 0x1079 JUMP JUMPDEST SWAP8 SWAP7 POP POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH2 0x137E DUP3 PUSH2 0x128A JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH2 0x139D JUMPI PUSH2 0x139C PUSH2 0x1346 JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x13B0 PUSH2 0x10A3 JUMP JUMPDEST SWAP1 POP PUSH2 0x13BC DUP3 DUP3 PUSH2 0x1375 JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH2 0x13DC JUMPI PUSH2 0x13DB PUSH2 0x1346 JUMP JUMPDEST JUMPDEST PUSH2 0x13E5 DUP3 PUSH2 0x128A JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST DUP3 DUP2 DUP4 CALLDATACOPY PUSH1 0x0 DUP4 DUP4 ADD MSTORE POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1414 PUSH2 0x140F DUP5 PUSH2 0x13C1 JUMP JUMPDEST PUSH2 0x13A6 JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH2 0x1430 JUMPI PUSH2 0x142F PUSH2 0x1341 JUMP JUMPDEST JUMPDEST PUSH2 0x143B DUP5 DUP3 DUP6 PUSH2 0x13F2 JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH2 0x1458 JUMPI PUSH2 0x1457 PUSH2 0x133C JUMP JUMPDEST JUMPDEST DUP2 CALLDATALOAD PUSH2 0x1468 DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH2 0x1401 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x148A JUMPI PUSH2 0x1489 PUSH2 0x10AD JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x1498 DUP7 DUP3 DUP8 ADD PUSH2 0x1183 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 PUSH2 0x14A9 DUP7 DUP3 DUP8 ADD PUSH2 0x10CE JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 DUP5 ADD CALLDATALOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0x14CA JUMPI PUSH2 0x14C9 PUSH2 0x10B2 JUMP JUMPDEST JUMPDEST PUSH2 0x14D6 DUP7 DUP3 DUP8 ADD PUSH2 0x1443 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x7700000000000000000000000000000000000000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1527 PUSH1 0x1 DUP4 PUSH2 0x14E0 JUMP JUMPDEST SWAP2 POP PUSH2 0x1532 DUP3 PUSH2 0x14F1 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x1556 DUP2 PUSH2 0x151A JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x2000000000000000000000000000000000000000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x159E PUSH1 0x1 DUP4 PUSH2 0x155D JUMP JUMPDEST SWAP2 POP PUSH2 0x15A9 DUP3 PUSH2 0x1568 JUMP JUMPDEST PUSH1 0x1 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x15BF DUP3 PUSH2 0x1591 JUMP JUMPDEST SWAP2 POP DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x15EE PUSH2 0x15E9 PUSH2 0x15E4 DUP5 PUSH2 0x1110 JUMP JUMPDEST PUSH2 0x15C9 JUMP JUMPDEST PUSH2 0x1110 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1600 DUP3 PUSH2 0x15D3 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1612 DUP3 PUSH2 0x15F5 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x1622 DUP2 PUSH2 0x1607 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 DUP3 ADD SWAP1 POP PUSH2 0x163D PUSH1 0x0 DUP4 ADD DUP6 PUSH2 0x1619 JUMP JUMPDEST PUSH2 0x164A PUSH1 0x20 DUP4 ADD DUP5 PUSH2 0x1079 JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH2 0x1698 JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 EQ ISZERO PUSH2 0x16AC JUMPI PUSH2 0x16AB PUSH2 0x1651 JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x6374310000000000000000000000000000000000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x16E8 PUSH1 0x3 DUP4 PUSH2 0x14E0 JUMP JUMPDEST SWAP2 POP PUSH2 0x16F3 DUP3 PUSH2 0x16B2 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x1717 DUP2 PUSH2 0x16DB JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x6374320000000000000000000000000000000000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1754 PUSH1 0x3 DUP4 PUSH2 0x14E0 JUMP JUMPDEST SWAP2 POP PUSH2 0x175F DUP3 PUSH2 0x171E JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x1783 DUP2 PUSH2 0x1747 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x6374330000000000000000000000000000000000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x17C0 PUSH1 0x3 DUP4 PUSH2 0x14E0 JUMP JUMPDEST SWAP2 POP PUSH2 0x17CB DUP3 PUSH2 0x178A JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x17EF DUP2 PUSH2 0x17B3 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x7374310000000000000000000000000000000000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x182C PUSH1 0x3 DUP4 PUSH2 0x14E0 JUMP JUMPDEST SWAP2 POP PUSH2 0x1837 DUP3 PUSH2 0x17F6 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x185B DUP2 PUSH2 0x181F JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x6574310000000000000000000000000000000000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1898 PUSH1 0x3 DUP4 PUSH2 0x14E0 JUMP JUMPDEST SWAP2 POP PUSH2 0x18A3 DUP3 PUSH2 0x1862 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x18C7 DUP2 PUSH2 0x188B JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP DUP2 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SLOAD PUSH2 0x18F0 DUP2 PUSH2 0x1680 JUMP JUMPDEST PUSH2 0x18FA DUP2 DUP7 PUSH2 0x155D JUMP JUMPDEST SWAP5 POP PUSH1 0x1 DUP3 AND PUSH1 0x0 DUP2 EQ PUSH2 0x1915 JUMPI PUSH1 0x1 DUP2 EQ PUSH2 0x1926 JUMPI PUSH2 0x1959 JUMP JUMPDEST PUSH1 0xFF NOT DUP4 AND DUP7 MSTORE DUP2 DUP7 ADD SWAP4 POP PUSH2 0x1959 JUMP JUMPDEST PUSH2 0x192F DUP6 PUSH2 0x18CE JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x1951 JUMPI DUP2 SLOAD DUP2 DUP10 ADD MSTORE PUSH1 0x1 DUP3 ADD SWAP2 POP PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x1932 JUMP JUMPDEST DUP4 DUP9 ADD SWAP6 POP POP POP JUMPDEST POP POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x196E DUP3 DUP5 PUSH2 0x18E3 JUMP JUMPDEST SWAP2 POP DUP2 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x19B3 DUP3 PUSH2 0x106F JUMP JUMPDEST SWAP2 POP PUSH2 0x19BE DUP4 PUSH2 0x106F JUMP JUMPDEST SWAP3 POP DUP3 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SUB DUP3 GT ISZERO PUSH2 0x19F3 JUMPI PUSH2 0x19F2 PUSH2 0x1979 JUMP JUMPDEST JUMPDEST DUP3 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x32 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1A38 DUP3 PUSH2 0x106F JUMP JUMPDEST SWAP2 POP PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 EQ ISZERO PUSH2 0x1A6B JUMPI PUSH2 0x1A6A PUSH2 0x1979 JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 MUL 0xE8 0xEE MSTORE8 PUSH28 0xA0D67929F17A189C17213C600F4411BD36AC99CD93A5FD0DE0EDF064 PUSH20 0x6F6C634300080A00330000000000000000000000 ",
	"sourceMap": "85:5181:0:-:0;;;1619:426;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1751:7;:14;1767:9;1515:10;1503:9;:22;:40;;;;1542:1;1529:9;:14;1503:40;:59;;;;1561:1;1547:10;:15;1503:59;1496:91;;;1579:8;;;1496:91;1800:6:::1;1795:95;1812:7;:14;1810:1;:16;1795:95;;;1872:4;1850:7;:19;1858:7;1866:1;1858:10;;;;;;;;:::i;:::-;;;;;;;;1850:19;;;;;;;;;;;;;;;;:26;;;;;;;;;;;;;;;;;;1828:3;;;;;:::i;:::-;;;;1795:95;;;;1911:7;1902:6;:16;;;;;;;;;;;;:::i;:::-;;1942:9;1931:8;:20;;;;1976:10;1964:9;:22;;;;2021:16;1999:19;;:38;;;;;;;;;;;;;;;;;;1619:426:::0;;;;;;85:5181;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:75:2:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:117;443:1;440;433:12;457:102;498:6;549:2;545:7;540:2;533:5;529:14;525:28;515:38;;457:102;;;:::o;565:180::-;613:77;610:1;603:88;710:4;707:1;700:15;734:4;731:1;724:15;751:281;834:27;856:4;834:27;:::i;:::-;826:6;822:40;964:6;952:10;949:22;928:18;916:10;913:34;910:62;907:88;;;975:18;;:::i;:::-;907:88;1015:10;1011:2;1004:22;794:238;751:281;;:::o;1038:129::-;1072:6;1099:20;;:::i;:::-;1089:30;;1128:33;1156:4;1148:6;1128:33;:::i;:::-;1038:129;;;:::o;1173:311::-;1250:4;1340:18;1332:6;1329:30;1326:56;;;1362:18;;:::i;:::-;1326:56;1412:4;1404:6;1400:17;1392:25;;1472:4;1466;1462:15;1454:23;;1173:311;;;:::o;1490:117::-;1599:1;1596;1589:12;1613:126;1650:7;1690:42;1683:5;1679:54;1668:65;;1613:126;;;:::o;1745:96::-;1782:7;1811:24;1829:5;1811:24;:::i;:::-;1800:35;;1745:96;;;:::o;1847:122::-;1920:24;1938:5;1920:24;:::i;:::-;1913:5;1910:35;1900:63;;1959:1;1956;1949:12;1900:63;1847:122;:::o;1975:143::-;2032:5;2063:6;2057:13;2048:22;;2079:33;2106:5;2079:33;:::i;:::-;1975:143;;;;:::o;2141:732::-;2248:5;2273:81;2289:64;2346:6;2289:64;:::i;:::-;2273:81;:::i;:::-;2264:90;;2374:5;2403:6;2396:5;2389:21;2437:4;2430:5;2426:16;2419:23;;2490:4;2482:6;2478:17;2470:6;2466:30;2519:3;2511:6;2508:15;2505:122;;;2538:79;;:::i;:::-;2505:122;2653:6;2636:231;2670:6;2665:3;2662:15;2636:231;;;2745:3;2774:48;2818:3;2806:10;2774:48;:::i;:::-;2769:3;2762:61;2852:4;2847:3;2843:14;2836:21;;2712:155;2696:4;2691:3;2687:14;2680:21;;2636:231;;;2640:21;2254:619;;2141:732;;;;;:::o;2896:385::-;2978:5;3027:3;3020:4;3012:6;3008:17;3004:27;2994:122;;3035:79;;:::i;:::-;2994:122;3145:6;3139:13;3170:105;3271:3;3263:6;3256:4;3248:6;3244:17;3170:105;:::i;:::-;3161:114;;2984:297;2896:385;;;;:::o;3287:77::-;3324:7;3353:5;3342:16;;3287:77;;;:::o;3370:122::-;3443:24;3461:5;3443:24;:::i;:::-;3436:5;3433:35;3423:63;;3482:1;3479;3472:12;3423:63;3370:122;:::o;3498:143::-;3555:5;3586:6;3580:13;3571:22;;3602:33;3629:5;3602:33;:::i;:::-;3498:143;;;;:::o;3647:104::-;3692:7;3721:24;3739:5;3721:24;:::i;:::-;3710:35;;3647:104;;;:::o;3757:138::-;3838:32;3864:5;3838:32;:::i;:::-;3831:5;3828:43;3818:71;;3885:1;3882;3875:12;3818:71;3757:138;:::o;3901:159::-;3966:5;3997:6;3991:13;3982:22;;4013:41;4048:5;4013:41;:::i;:::-;3901:159;;;;:::o;4066:1039::-;4196:6;4204;4212;4220;4269:3;4257:9;4248:7;4244:23;4240:33;4237:120;;;4276:79;;:::i;:::-;4237:120;4417:1;4406:9;4402:17;4396:24;4447:18;4439:6;4436:30;4433:117;;;4469:79;;:::i;:::-;4433:117;4574:89;4655:7;4646:6;4635:9;4631:22;4574:89;:::i;:::-;4564:99;;4367:306;4712:2;4738:64;4794:7;4785:6;4774:9;4770:22;4738:64;:::i;:::-;4728:74;;4683:129;4851:2;4877:64;4933:7;4924:6;4913:9;4909:22;4877:64;:::i;:::-;4867:74;;4822:129;4990:2;5016:72;5080:7;5071:6;5060:9;5056:22;5016:72;:::i;:::-;5006:82;;4961:137;4066:1039;;;;;;;:::o;5111:180::-;5159:77;5156:1;5149:88;5256:4;5253:1;5246:15;5280:4;5277:1;5270:15;5297:180;5345:77;5342:1;5335:88;5442:4;5439:1;5432:15;5466:4;5463:1;5456:15;5483:233;5522:3;5545:24;5563:5;5545:24;:::i;:::-;5536:33;;5591:66;5584:5;5581:77;5578:103;;;5661:18;;:::i;:::-;5578:103;5708:1;5701:5;5697:13;5690:20;;5483:233;;;:::o;85:5181:0:-;;;;;;;"
}
var dwABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_multisig",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "_heir1",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_portion1",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "_heir2",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_portion2",
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
		"stateMutability": "payable",
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
				"internalType": "address payable",
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
var dwByteCode = {
	"functionDebugData": {
		"@_71": {
			"entryPoint": null,
			"id": 71,
			"parameterSlots": 5,
			"returnSlots": 0
		},
		"abi_decode_t_address_fromMemory": {
			"entryPoint": 523,
			"id": null,
			"parameterSlots": 2,
			"returnSlots": 1
		},
		"abi_decode_t_address_payable_fromMemory": {
			"entryPoint": 592,
			"id": null,
			"parameterSlots": 2,
			"returnSlots": 1
		},
		"abi_decode_t_uint256_fromMemory": {
			"entryPoint": 651,
			"id": null,
			"parameterSlots": 2,
			"returnSlots": 1
		},
		"abi_decode_tuple_t_addresst_address_payablet_uint256t_address_payablet_uint256_fromMemory": {
			"entryPoint": 674,
			"id": null,
			"parameterSlots": 2,
			"returnSlots": 5
		},
		"abi_encode_t_stringliteral_eabcc6dbd6fcdf622b98b1b02693d5b28525135acf49ecb7fb484ab7a57aefad_to_t_string_memory_ptr_fromStack": {
			"entryPoint": 1008,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"abi_encode_tuple_t_stringliteral_eabcc6dbd6fcdf622b98b1b02693d5b28525135acf49ecb7fb484ab7a57aefad__to_t_string_memory_ptr__fromStack_reversed": {
			"entryPoint": 1047,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"allocate_unbounded": {
			"entryPoint": null,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 1
		},
		"array_storeLengthForEncoding_t_string_memory_ptr_fromStack": {
			"entryPoint": 950,
			"id": null,
			"parameterSlots": 2,
			"returnSlots": 1
		},
		"checked_add_t_uint256": {
			"entryPoint": 857,
			"id": null,
			"parameterSlots": 2,
			"returnSlots": 1
		},
		"cleanup_t_address": {
			"entryPoint": 477,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"cleanup_t_address_payable": {
			"entryPoint": 546,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"cleanup_t_uint160": {
			"entryPoint": 445,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"cleanup_t_uint256": {
			"entryPoint": 615,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 1
		},
		"panic_error_0x11": {
			"entryPoint": 810,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db": {
			"entryPoint": null,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b": {
			"entryPoint": 440,
			"id": null,
			"parameterSlots": 0,
			"returnSlots": 0
		},
		"store_literal_in_memory_eabcc6dbd6fcdf622b98b1b02693d5b28525135acf49ecb7fb484ab7a57aefad": {
			"entryPoint": 967,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 0
		},
		"validator_revert_t_address": {
			"entryPoint": 497,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 0
		},
		"validator_revert_t_address_payable": {
			"entryPoint": 566,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 0
		},
		"validator_revert_t_uint256": {
			"entryPoint": 625,
			"id": null,
			"parameterSlots": 1,
			"returnSlots": 0
		}
	},
	"generatedSources": [
		{
			"ast": {
				"nodeType": "YulBlock",
				"src": "0:4282:2",
				"statements": [
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "47:35:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "57:19:2",
									"value": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "73:2:2",
												"type": "",
												"value": "64"
											}
										],
										"functionName": {
											"name": "mload",
											"nodeType": "YulIdentifier",
											"src": "67:5:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "67:9:2"
									},
									"variableNames": [
										{
											"name": "memPtr",
											"nodeType": "YulIdentifier",
											"src": "57:6:2"
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
								"src": "40:6:2",
								"type": ""
							}
						],
						"src": "7:75:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "177:28:2",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "194:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "197:1:2",
												"type": "",
												"value": "0"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "187:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "187:12:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "187:12:2"
								}
							]
						},
						"name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
						"nodeType": "YulFunctionDefinition",
						"src": "88:117:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "300:28:2",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "317:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "320:1:2",
												"type": "",
												"value": "0"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "310:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "310:12:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "310:12:2"
								}
							]
						},
						"name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
						"nodeType": "YulFunctionDefinition",
						"src": "211:117:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "379:81:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "389:65:2",
									"value": {
										"arguments": [
											{
												"name": "value",
												"nodeType": "YulIdentifier",
												"src": "404:5:2"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "411:42:2",
												"type": "",
												"value": "0xffffffffffffffffffffffffffffffffffffffff"
											}
										],
										"functionName": {
											"name": "and",
											"nodeType": "YulIdentifier",
											"src": "400:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "400:54:2"
									},
									"variableNames": [
										{
											"name": "cleaned",
											"nodeType": "YulIdentifier",
											"src": "389:7:2"
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
								"src": "361:5:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "cleaned",
								"nodeType": "YulTypedName",
								"src": "371:7:2",
								"type": ""
							}
						],
						"src": "334:126:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "511:51:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "521:35:2",
									"value": {
										"arguments": [
											{
												"name": "value",
												"nodeType": "YulIdentifier",
												"src": "550:5:2"
											}
										],
										"functionName": {
											"name": "cleanup_t_uint160",
											"nodeType": "YulIdentifier",
											"src": "532:17:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "532:24:2"
									},
									"variableNames": [
										{
											"name": "cleaned",
											"nodeType": "YulIdentifier",
											"src": "521:7:2"
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
								"src": "493:5:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "cleaned",
								"nodeType": "YulTypedName",
								"src": "503:7:2",
								"type": ""
							}
						],
						"src": "466:96:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "611:79:2",
							"statements": [
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "668:16:2",
										"statements": [
											{
												"expression": {
													"arguments": [
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "677:1:2",
															"type": "",
															"value": "0"
														},
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "680:1:2",
															"type": "",
															"value": "0"
														}
													],
													"functionName": {
														"name": "revert",
														"nodeType": "YulIdentifier",
														"src": "670:6:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "670:12:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "670:12:2"
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
														"src": "634:5:2"
													},
													{
														"arguments": [
															{
																"name": "value",
																"nodeType": "YulIdentifier",
																"src": "659:5:2"
															}
														],
														"functionName": {
															"name": "cleanup_t_address",
															"nodeType": "YulIdentifier",
															"src": "641:17:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "641:24:2"
													}
												],
												"functionName": {
													"name": "eq",
													"nodeType": "YulIdentifier",
													"src": "631:2:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "631:35:2"
											}
										],
										"functionName": {
											"name": "iszero",
											"nodeType": "YulIdentifier",
											"src": "624:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "624:43:2"
									},
									"nodeType": "YulIf",
									"src": "621:63:2"
								}
							]
						},
						"name": "validator_revert_t_address",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "value",
								"nodeType": "YulTypedName",
								"src": "604:5:2",
								"type": ""
							}
						],
						"src": "568:122:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "759:80:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "769:22:2",
									"value": {
										"arguments": [
											{
												"name": "offset",
												"nodeType": "YulIdentifier",
												"src": "784:6:2"
											}
										],
										"functionName": {
											"name": "mload",
											"nodeType": "YulIdentifier",
											"src": "778:5:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "778:13:2"
									},
									"variableNames": [
										{
											"name": "value",
											"nodeType": "YulIdentifier",
											"src": "769:5:2"
										}
									]
								},
								{
									"expression": {
										"arguments": [
											{
												"name": "value",
												"nodeType": "YulIdentifier",
												"src": "827:5:2"
											}
										],
										"functionName": {
											"name": "validator_revert_t_address",
											"nodeType": "YulIdentifier",
											"src": "800:26:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "800:33:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "800:33:2"
								}
							]
						},
						"name": "abi_decode_t_address_fromMemory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "offset",
								"nodeType": "YulTypedName",
								"src": "737:6:2",
								"type": ""
							},
							{
								"name": "end",
								"nodeType": "YulTypedName",
								"src": "745:3:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "value",
								"nodeType": "YulTypedName",
								"src": "753:5:2",
								"type": ""
							}
						],
						"src": "696:143:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "898:51:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "908:35:2",
									"value": {
										"arguments": [
											{
												"name": "value",
												"nodeType": "YulIdentifier",
												"src": "937:5:2"
											}
										],
										"functionName": {
											"name": "cleanup_t_uint160",
											"nodeType": "YulIdentifier",
											"src": "919:17:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "919:24:2"
									},
									"variableNames": [
										{
											"name": "cleaned",
											"nodeType": "YulIdentifier",
											"src": "908:7:2"
										}
									]
								}
							]
						},
						"name": "cleanup_t_address_payable",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "value",
								"nodeType": "YulTypedName",
								"src": "880:5:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "cleaned",
								"nodeType": "YulTypedName",
								"src": "890:7:2",
								"type": ""
							}
						],
						"src": "845:104:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1006:87:2",
							"statements": [
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "1071:16:2",
										"statements": [
											{
												"expression": {
													"arguments": [
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "1080:1:2",
															"type": "",
															"value": "0"
														},
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "1083:1:2",
															"type": "",
															"value": "0"
														}
													],
													"functionName": {
														"name": "revert",
														"nodeType": "YulIdentifier",
														"src": "1073:6:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "1073:12:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "1073:12:2"
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
														"src": "1029:5:2"
													},
													{
														"arguments": [
															{
																"name": "value",
																"nodeType": "YulIdentifier",
																"src": "1062:5:2"
															}
														],
														"functionName": {
															"name": "cleanup_t_address_payable",
															"nodeType": "YulIdentifier",
															"src": "1036:25:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "1036:32:2"
													}
												],
												"functionName": {
													"name": "eq",
													"nodeType": "YulIdentifier",
													"src": "1026:2:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "1026:43:2"
											}
										],
										"functionName": {
											"name": "iszero",
											"nodeType": "YulIdentifier",
											"src": "1019:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "1019:51:2"
									},
									"nodeType": "YulIf",
									"src": "1016:71:2"
								}
							]
						},
						"name": "validator_revert_t_address_payable",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "value",
								"nodeType": "YulTypedName",
								"src": "999:5:2",
								"type": ""
							}
						],
						"src": "955:138:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1170:88:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "1180:22:2",
									"value": {
										"arguments": [
											{
												"name": "offset",
												"nodeType": "YulIdentifier",
												"src": "1195:6:2"
											}
										],
										"functionName": {
											"name": "mload",
											"nodeType": "YulIdentifier",
											"src": "1189:5:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "1189:13:2"
									},
									"variableNames": [
										{
											"name": "value",
											"nodeType": "YulIdentifier",
											"src": "1180:5:2"
										}
									]
								},
								{
									"expression": {
										"arguments": [
											{
												"name": "value",
												"nodeType": "YulIdentifier",
												"src": "1246:5:2"
											}
										],
										"functionName": {
											"name": "validator_revert_t_address_payable",
											"nodeType": "YulIdentifier",
											"src": "1211:34:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "1211:41:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "1211:41:2"
								}
							]
						},
						"name": "abi_decode_t_address_payable_fromMemory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "offset",
								"nodeType": "YulTypedName",
								"src": "1148:6:2",
								"type": ""
							},
							{
								"name": "end",
								"nodeType": "YulTypedName",
								"src": "1156:3:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "value",
								"nodeType": "YulTypedName",
								"src": "1164:5:2",
								"type": ""
							}
						],
						"src": "1099:159:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1309:32:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "1319:16:2",
									"value": {
										"name": "value",
										"nodeType": "YulIdentifier",
										"src": "1330:5:2"
									},
									"variableNames": [
										{
											"name": "cleaned",
											"nodeType": "YulIdentifier",
											"src": "1319:7:2"
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
								"src": "1291:5:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "cleaned",
								"nodeType": "YulTypedName",
								"src": "1301:7:2",
								"type": ""
							}
						],
						"src": "1264:77:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1390:79:2",
							"statements": [
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "1447:16:2",
										"statements": [
											{
												"expression": {
													"arguments": [
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "1456:1:2",
															"type": "",
															"value": "0"
														},
														{
															"kind": "number",
															"nodeType": "YulLiteral",
															"src": "1459:1:2",
															"type": "",
															"value": "0"
														}
													],
													"functionName": {
														"name": "revert",
														"nodeType": "YulIdentifier",
														"src": "1449:6:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "1449:12:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "1449:12:2"
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
														"src": "1413:5:2"
													},
													{
														"arguments": [
															{
																"name": "value",
																"nodeType": "YulIdentifier",
																"src": "1438:5:2"
															}
														],
														"functionName": {
															"name": "cleanup_t_uint256",
															"nodeType": "YulIdentifier",
															"src": "1420:17:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "1420:24:2"
													}
												],
												"functionName": {
													"name": "eq",
													"nodeType": "YulIdentifier",
													"src": "1410:2:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "1410:35:2"
											}
										],
										"functionName": {
											"name": "iszero",
											"nodeType": "YulIdentifier",
											"src": "1403:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "1403:43:2"
									},
									"nodeType": "YulIf",
									"src": "1400:63:2"
								}
							]
						},
						"name": "validator_revert_t_uint256",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "value",
								"nodeType": "YulTypedName",
								"src": "1383:5:2",
								"type": ""
							}
						],
						"src": "1347:122:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1538:80:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "1548:22:2",
									"value": {
										"arguments": [
											{
												"name": "offset",
												"nodeType": "YulIdentifier",
												"src": "1563:6:2"
											}
										],
										"functionName": {
											"name": "mload",
											"nodeType": "YulIdentifier",
											"src": "1557:5:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "1557:13:2"
									},
									"variableNames": [
										{
											"name": "value",
											"nodeType": "YulIdentifier",
											"src": "1548:5:2"
										}
									]
								},
								{
									"expression": {
										"arguments": [
											{
												"name": "value",
												"nodeType": "YulIdentifier",
												"src": "1606:5:2"
											}
										],
										"functionName": {
											"name": "validator_revert_t_uint256",
											"nodeType": "YulIdentifier",
											"src": "1579:26:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "1579:33:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "1579:33:2"
								}
							]
						},
						"name": "abi_decode_t_uint256_fromMemory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "offset",
								"nodeType": "YulTypedName",
								"src": "1516:6:2",
								"type": ""
							},
							{
								"name": "end",
								"nodeType": "YulTypedName",
								"src": "1524:3:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "value",
								"nodeType": "YulTypedName",
								"src": "1532:5:2",
								"type": ""
							}
						],
						"src": "1475:143:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "1785:848:2",
							"statements": [
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "1832:83:2",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
														"nodeType": "YulIdentifier",
														"src": "1834:77:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "1834:79:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "1834:79:2"
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
														"src": "1806:7:2"
													},
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "1815:9:2"
													}
												],
												"functionName": {
													"name": "sub",
													"nodeType": "YulIdentifier",
													"src": "1802:3:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "1802:23:2"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1827:3:2",
												"type": "",
												"value": "160"
											}
										],
										"functionName": {
											"name": "slt",
											"nodeType": "YulIdentifier",
											"src": "1798:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "1798:33:2"
									},
									"nodeType": "YulIf",
									"src": "1795:120:2"
								},
								{
									"nodeType": "YulBlock",
									"src": "1925:128:2",
									"statements": [
										{
											"nodeType": "YulVariableDeclaration",
											"src": "1940:15:2",
											"value": {
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "1954:1:2",
												"type": "",
												"value": "0"
											},
											"variables": [
												{
													"name": "offset",
													"nodeType": "YulTypedName",
													"src": "1944:6:2",
													"type": ""
												}
											]
										},
										{
											"nodeType": "YulAssignment",
											"src": "1969:74:2",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "2015:9:2"
															},
															{
																"name": "offset",
																"nodeType": "YulIdentifier",
																"src": "2026:6:2"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "2011:3:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "2011:22:2"
													},
													{
														"name": "dataEnd",
														"nodeType": "YulIdentifier",
														"src": "2035:7:2"
													}
												],
												"functionName": {
													"name": "abi_decode_t_address_fromMemory",
													"nodeType": "YulIdentifier",
													"src": "1979:31:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "1979:64:2"
											},
											"variableNames": [
												{
													"name": "value0",
													"nodeType": "YulIdentifier",
													"src": "1969:6:2"
												}
											]
										}
									]
								},
								{
									"nodeType": "YulBlock",
									"src": "2063:137:2",
									"statements": [
										{
											"nodeType": "YulVariableDeclaration",
											"src": "2078:16:2",
											"value": {
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2092:2:2",
												"type": "",
												"value": "32"
											},
											"variables": [
												{
													"name": "offset",
													"nodeType": "YulTypedName",
													"src": "2082:6:2",
													"type": ""
												}
											]
										},
										{
											"nodeType": "YulAssignment",
											"src": "2108:82:2",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "2162:9:2"
															},
															{
																"name": "offset",
																"nodeType": "YulIdentifier",
																"src": "2173:6:2"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "2158:3:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "2158:22:2"
													},
													{
														"name": "dataEnd",
														"nodeType": "YulIdentifier",
														"src": "2182:7:2"
													}
												],
												"functionName": {
													"name": "abi_decode_t_address_payable_fromMemory",
													"nodeType": "YulIdentifier",
													"src": "2118:39:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "2118:72:2"
											},
											"variableNames": [
												{
													"name": "value1",
													"nodeType": "YulIdentifier",
													"src": "2108:6:2"
												}
											]
										}
									]
								},
								{
									"nodeType": "YulBlock",
									"src": "2210:129:2",
									"statements": [
										{
											"nodeType": "YulVariableDeclaration",
											"src": "2225:16:2",
											"value": {
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2239:2:2",
												"type": "",
												"value": "64"
											},
											"variables": [
												{
													"name": "offset",
													"nodeType": "YulTypedName",
													"src": "2229:6:2",
													"type": ""
												}
											]
										},
										{
											"nodeType": "YulAssignment",
											"src": "2255:74:2",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "2301:9:2"
															},
															{
																"name": "offset",
																"nodeType": "YulIdentifier",
																"src": "2312:6:2"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "2297:3:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "2297:22:2"
													},
													{
														"name": "dataEnd",
														"nodeType": "YulIdentifier",
														"src": "2321:7:2"
													}
												],
												"functionName": {
													"name": "abi_decode_t_uint256_fromMemory",
													"nodeType": "YulIdentifier",
													"src": "2265:31:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "2265:64:2"
											},
											"variableNames": [
												{
													"name": "value2",
													"nodeType": "YulIdentifier",
													"src": "2255:6:2"
												}
											]
										}
									]
								},
								{
									"nodeType": "YulBlock",
									"src": "2349:137:2",
									"statements": [
										{
											"nodeType": "YulVariableDeclaration",
											"src": "2364:16:2",
											"value": {
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2378:2:2",
												"type": "",
												"value": "96"
											},
											"variables": [
												{
													"name": "offset",
													"nodeType": "YulTypedName",
													"src": "2368:6:2",
													"type": ""
												}
											]
										},
										{
											"nodeType": "YulAssignment",
											"src": "2394:82:2",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "2448:9:2"
															},
															{
																"name": "offset",
																"nodeType": "YulIdentifier",
																"src": "2459:6:2"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "2444:3:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "2444:22:2"
													},
													{
														"name": "dataEnd",
														"nodeType": "YulIdentifier",
														"src": "2468:7:2"
													}
												],
												"functionName": {
													"name": "abi_decode_t_address_payable_fromMemory",
													"nodeType": "YulIdentifier",
													"src": "2404:39:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "2404:72:2"
											},
											"variableNames": [
												{
													"name": "value3",
													"nodeType": "YulIdentifier",
													"src": "2394:6:2"
												}
											]
										}
									]
								},
								{
									"nodeType": "YulBlock",
									"src": "2496:130:2",
									"statements": [
										{
											"nodeType": "YulVariableDeclaration",
											"src": "2511:17:2",
											"value": {
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2525:3:2",
												"type": "",
												"value": "128"
											},
											"variables": [
												{
													"name": "offset",
													"nodeType": "YulTypedName",
													"src": "2515:6:2",
													"type": ""
												}
											]
										},
										{
											"nodeType": "YulAssignment",
											"src": "2542:74:2",
											"value": {
												"arguments": [
													{
														"arguments": [
															{
																"name": "headStart",
																"nodeType": "YulIdentifier",
																"src": "2588:9:2"
															},
															{
																"name": "offset",
																"nodeType": "YulIdentifier",
																"src": "2599:6:2"
															}
														],
														"functionName": {
															"name": "add",
															"nodeType": "YulIdentifier",
															"src": "2584:3:2"
														},
														"nodeType": "YulFunctionCall",
														"src": "2584:22:2"
													},
													{
														"name": "dataEnd",
														"nodeType": "YulIdentifier",
														"src": "2608:7:2"
													}
												],
												"functionName": {
													"name": "abi_decode_t_uint256_fromMemory",
													"nodeType": "YulIdentifier",
													"src": "2552:31:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "2552:64:2"
											},
											"variableNames": [
												{
													"name": "value4",
													"nodeType": "YulIdentifier",
													"src": "2542:6:2"
												}
											]
										}
									]
								}
							]
						},
						"name": "abi_decode_tuple_t_addresst_address_payablet_uint256t_address_payablet_uint256_fromMemory",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "headStart",
								"nodeType": "YulTypedName",
								"src": "1723:9:2",
								"type": ""
							},
							{
								"name": "dataEnd",
								"nodeType": "YulTypedName",
								"src": "1734:7:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "value0",
								"nodeType": "YulTypedName",
								"src": "1746:6:2",
								"type": ""
							},
							{
								"name": "value1",
								"nodeType": "YulTypedName",
								"src": "1754:6:2",
								"type": ""
							},
							{
								"name": "value2",
								"nodeType": "YulTypedName",
								"src": "1762:6:2",
								"type": ""
							},
							{
								"name": "value3",
								"nodeType": "YulTypedName",
								"src": "1770:6:2",
								"type": ""
							},
							{
								"name": "value4",
								"nodeType": "YulTypedName",
								"src": "1778:6:2",
								"type": ""
							}
						],
						"src": "1624:1009:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "2667:152:2",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2684:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2687:77:2",
												"type": "",
												"value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "2677:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2677:88:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "2677:88:2"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2781:1:2",
												"type": "",
												"value": "4"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2784:4:2",
												"type": "",
												"value": "0x11"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "2774:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2774:15:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "2774:15:2"
								},
								{
									"expression": {
										"arguments": [
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2805:1:2",
												"type": "",
												"value": "0"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "2808:4:2",
												"type": "",
												"value": "0x24"
											}
										],
										"functionName": {
											"name": "revert",
											"nodeType": "YulIdentifier",
											"src": "2798:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2798:15:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "2798:15:2"
								}
							]
						},
						"name": "panic_error_0x11",
						"nodeType": "YulFunctionDefinition",
						"src": "2639:180:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "2869:261:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "2879:25:2",
									"value": {
										"arguments": [
											{
												"name": "x",
												"nodeType": "YulIdentifier",
												"src": "2902:1:2"
											}
										],
										"functionName": {
											"name": "cleanup_t_uint256",
											"nodeType": "YulIdentifier",
											"src": "2884:17:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2884:20:2"
									},
									"variableNames": [
										{
											"name": "x",
											"nodeType": "YulIdentifier",
											"src": "2879:1:2"
										}
									]
								},
								{
									"nodeType": "YulAssignment",
									"src": "2913:25:2",
									"value": {
										"arguments": [
											{
												"name": "y",
												"nodeType": "YulIdentifier",
												"src": "2936:1:2"
											}
										],
										"functionName": {
											"name": "cleanup_t_uint256",
											"nodeType": "YulIdentifier",
											"src": "2918:17:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2918:20:2"
									},
									"variableNames": [
										{
											"name": "y",
											"nodeType": "YulIdentifier",
											"src": "2913:1:2"
										}
									]
								},
								{
									"body": {
										"nodeType": "YulBlock",
										"src": "3076:22:2",
										"statements": [
											{
												"expression": {
													"arguments": [],
													"functionName": {
														"name": "panic_error_0x11",
														"nodeType": "YulIdentifier",
														"src": "3078:16:2"
													},
													"nodeType": "YulFunctionCall",
													"src": "3078:18:2"
												},
												"nodeType": "YulExpressionStatement",
												"src": "3078:18:2"
											}
										]
									},
									"condition": {
										"arguments": [
											{
												"name": "x",
												"nodeType": "YulIdentifier",
												"src": "2997:1:2"
											},
											{
												"arguments": [
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "3004:66:2",
														"type": "",
														"value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
													},
													{
														"name": "y",
														"nodeType": "YulIdentifier",
														"src": "3072:1:2"
													}
												],
												"functionName": {
													"name": "sub",
													"nodeType": "YulIdentifier",
													"src": "3000:3:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "3000:74:2"
											}
										],
										"functionName": {
											"name": "gt",
											"nodeType": "YulIdentifier",
											"src": "2994:2:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "2994:81:2"
									},
									"nodeType": "YulIf",
									"src": "2991:107:2"
								},
								{
									"nodeType": "YulAssignment",
									"src": "3108:16:2",
									"value": {
										"arguments": [
											{
												"name": "x",
												"nodeType": "YulIdentifier",
												"src": "3119:1:2"
											},
											{
												"name": "y",
												"nodeType": "YulIdentifier",
												"src": "3122:1:2"
											}
										],
										"functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "3115:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3115:9:2"
									},
									"variableNames": [
										{
											"name": "sum",
											"nodeType": "YulIdentifier",
											"src": "3108:3:2"
										}
									]
								}
							]
						},
						"name": "checked_add_t_uint256",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "x",
								"nodeType": "YulTypedName",
								"src": "2856:1:2",
								"type": ""
							},
							{
								"name": "y",
								"nodeType": "YulTypedName",
								"src": "2859:1:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "sum",
								"nodeType": "YulTypedName",
								"src": "2865:3:2",
								"type": ""
							}
						],
						"src": "2825:305:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "3232:73:2",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"name": "pos",
												"nodeType": "YulIdentifier",
												"src": "3249:3:2"
											},
											{
												"name": "length",
												"nodeType": "YulIdentifier",
												"src": "3254:6:2"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "3242:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3242:19:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "3242:19:2"
								},
								{
									"nodeType": "YulAssignment",
									"src": "3270:29:2",
									"value": {
										"arguments": [
											{
												"name": "pos",
												"nodeType": "YulIdentifier",
												"src": "3289:3:2"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3294:4:2",
												"type": "",
												"value": "0x20"
											}
										],
										"functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "3285:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3285:14:2"
									},
									"variableNames": [
										{
											"name": "updated_pos",
											"nodeType": "YulIdentifier",
											"src": "3270:11:2"
										}
									]
								}
							]
						},
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "pos",
								"nodeType": "YulTypedName",
								"src": "3204:3:2",
								"type": ""
							},
							{
								"name": "length",
								"nodeType": "YulTypedName",
								"src": "3209:6:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "updated_pos",
								"nodeType": "YulTypedName",
								"src": "3220:11:2",
								"type": ""
							}
						],
						"src": "3136:169:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "3417:65:2",
							"statements": [
								{
									"expression": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "memPtr",
														"nodeType": "YulIdentifier",
														"src": "3439:6:2"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "3447:1:2",
														"type": "",
														"value": "0"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "3435:3:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "3435:14:2"
											},
											{
												"hexValue": "53756d206f6620706f7274696f6e203e2031303025",
												"kind": "string",
												"nodeType": "YulLiteral",
												"src": "3451:23:2",
												"type": "",
												"value": "Sum of portion > 100%"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "3428:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3428:47:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "3428:47:2"
								}
							]
						},
						"name": "store_literal_in_memory_eabcc6dbd6fcdf622b98b1b02693d5b28525135acf49ecb7fb484ab7a57aefad",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "memPtr",
								"nodeType": "YulTypedName",
								"src": "3409:6:2",
								"type": ""
							}
						],
						"src": "3311:171:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "3634:220:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "3644:74:2",
									"value": {
										"arguments": [
											{
												"name": "pos",
												"nodeType": "YulIdentifier",
												"src": "3710:3:2"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3715:2:2",
												"type": "",
												"value": "21"
											}
										],
										"functionName": {
											"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
											"nodeType": "YulIdentifier",
											"src": "3651:58:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3651:67:2"
									},
									"variableNames": [
										{
											"name": "pos",
											"nodeType": "YulIdentifier",
											"src": "3644:3:2"
										}
									]
								},
								{
									"expression": {
										"arguments": [
											{
												"name": "pos",
												"nodeType": "YulIdentifier",
												"src": "3816:3:2"
											}
										],
										"functionName": {
											"name": "store_literal_in_memory_eabcc6dbd6fcdf622b98b1b02693d5b28525135acf49ecb7fb484ab7a57aefad",
											"nodeType": "YulIdentifier",
											"src": "3727:88:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3727:93:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "3727:93:2"
								},
								{
									"nodeType": "YulAssignment",
									"src": "3829:19:2",
									"value": {
										"arguments": [
											{
												"name": "pos",
												"nodeType": "YulIdentifier",
												"src": "3840:3:2"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "3845:2:2",
												"type": "",
												"value": "32"
											}
										],
										"functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "3836:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "3836:12:2"
									},
									"variableNames": [
										{
											"name": "end",
											"nodeType": "YulIdentifier",
											"src": "3829:3:2"
										}
									]
								}
							]
						},
						"name": "abi_encode_t_stringliteral_eabcc6dbd6fcdf622b98b1b02693d5b28525135acf49ecb7fb484ab7a57aefad_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "pos",
								"nodeType": "YulTypedName",
								"src": "3622:3:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "end",
								"nodeType": "YulTypedName",
								"src": "3630:3:2",
								"type": ""
							}
						],
						"src": "3488:366:2"
					},
					{
						"body": {
							"nodeType": "YulBlock",
							"src": "4031:248:2",
							"statements": [
								{
									"nodeType": "YulAssignment",
									"src": "4041:26:2",
									"value": {
										"arguments": [
											{
												"name": "headStart",
												"nodeType": "YulIdentifier",
												"src": "4053:9:2"
											},
											{
												"kind": "number",
												"nodeType": "YulLiteral",
												"src": "4064:2:2",
												"type": "",
												"value": "32"
											}
										],
										"functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "4049:3:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "4049:18:2"
									},
									"variableNames": [
										{
											"name": "tail",
											"nodeType": "YulIdentifier",
											"src": "4041:4:2"
										}
									]
								},
								{
									"expression": {
										"arguments": [
											{
												"arguments": [
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "4088:9:2"
													},
													{
														"kind": "number",
														"nodeType": "YulLiteral",
														"src": "4099:1:2",
														"type": "",
														"value": "0"
													}
												],
												"functionName": {
													"name": "add",
													"nodeType": "YulIdentifier",
													"src": "4084:3:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "4084:17:2"
											},
											{
												"arguments": [
													{
														"name": "tail",
														"nodeType": "YulIdentifier",
														"src": "4107:4:2"
													},
													{
														"name": "headStart",
														"nodeType": "YulIdentifier",
														"src": "4113:9:2"
													}
												],
												"functionName": {
													"name": "sub",
													"nodeType": "YulIdentifier",
													"src": "4103:3:2"
												},
												"nodeType": "YulFunctionCall",
												"src": "4103:20:2"
											}
										],
										"functionName": {
											"name": "mstore",
											"nodeType": "YulIdentifier",
											"src": "4077:6:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "4077:47:2"
									},
									"nodeType": "YulExpressionStatement",
									"src": "4077:47:2"
								},
								{
									"nodeType": "YulAssignment",
									"src": "4133:139:2",
									"value": {
										"arguments": [
											{
												"name": "tail",
												"nodeType": "YulIdentifier",
												"src": "4267:4:2"
											}
										],
										"functionName": {
											"name": "abi_encode_t_stringliteral_eabcc6dbd6fcdf622b98b1b02693d5b28525135acf49ecb7fb484ab7a57aefad_to_t_string_memory_ptr_fromStack",
											"nodeType": "YulIdentifier",
											"src": "4141:124:2"
										},
										"nodeType": "YulFunctionCall",
										"src": "4141:131:2"
									},
									"variableNames": [
										{
											"name": "tail",
											"nodeType": "YulIdentifier",
											"src": "4133:4:2"
										}
									]
								}
							]
						},
						"name": "abi_encode_tuple_t_stringliteral_eabcc6dbd6fcdf622b98b1b02693d5b28525135acf49ecb7fb484ab7a57aefad__to_t_string_memory_ptr__fromStack_reversed",
						"nodeType": "YulFunctionDefinition",
						"parameters": [
							{
								"name": "headStart",
								"nodeType": "YulTypedName",
								"src": "4011:9:2",
								"type": ""
							}
						],
						"returnVariables": [
							{
								"name": "tail",
								"nodeType": "YulTypedName",
								"src": "4026:4:2",
								"type": ""
							}
						],
						"src": "3860:419:2"
					}
				]
			},
			"contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function cleanup_t_address_payable(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address_payable(value) {\n        if iszero(eq(value, cleanup_t_address_payable(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address_payable_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address_payable(value)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_addresst_address_payablet_uint256t_address_payablet_uint256_fromMemory(headStart, dataEnd) -> value0, value1, value2, value3, value4 {\n        if slt(sub(dataEnd, headStart), 160) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address_payable_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 96\n\n            value3 := abi_decode_t_address_payable_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 128\n\n            value4 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_eabcc6dbd6fcdf622b98b1b02693d5b28525135acf49ecb7fb484ab7a57aefad(memPtr) {\n\n        mstore(add(memPtr, 0), \"Sum of portion > 100%\")\n\n    }\n\n    function abi_encode_t_stringliteral_eabcc6dbd6fcdf622b98b1b02693d5b28525135acf49ecb7fb484ab7a57aefad_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 21)\n        store_literal_in_memory_eabcc6dbd6fcdf622b98b1b02693d5b28525135acf49ecb7fb484ab7a57aefad(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_eabcc6dbd6fcdf622b98b1b02693d5b28525135acf49ecb7fb484ab7a57aefad__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_eabcc6dbd6fcdf622b98b1b02693d5b28525135acf49ecb7fb484ab7a57aefad_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n}\n",
			"id": 2,
			"language": "Yul",
			"name": "#utility.yul"
		}
	],
	"linkReferences": {},
	"object": "60806040523480156200001157600080fd5b5060405162000fdd38038062000fdd8339818101604052810190620000379190620002a2565b6064818462000047919062000359565b11156200008b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000829062000417565b60405180910390fd5b846000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550836001600080815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600160008081526020019081526020016000206001018190555081600160006001815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006001815260200190815260200160002060010181905550505050505062000439565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001ea82620001bd565b9050919050565b620001fc81620001dd565b81146200020857600080fd5b50565b6000815190506200021c81620001f1565b92915050565b60006200022f82620001bd565b9050919050565b620002418162000222565b81146200024d57600080fd5b50565b600081519050620002618162000236565b92915050565b6000819050919050565b6200027c8162000267565b81146200028857600080fd5b50565b6000815190506200029c8162000271565b92915050565b600080600080600060a08688031215620002c157620002c0620001b8565b5b6000620002d1888289016200020b565b9550506020620002e48882890162000250565b9450506040620002f7888289016200028b565b93505060606200030a8882890162000250565b92505060806200031d888289016200028b565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620003668262000267565b9150620003738362000267565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620003ab57620003aa6200032a565b5b828201905092915050565b600082825260208201905092915050565b7f53756d206f6620706f7274696f6e203e20313030250000000000000000000000600082015250565b6000620003ff601583620003b6565b91506200040c82620003c7565b602082019050919050565b600060208201905081810360008301526200043281620003f0565b9050919050565b610b9480620004496000396000f3fe6080604052600436106100595760003560e01c80634783c35b1461006557806367f1ffa41461009057806392ee9d03146100ce578063c8488ced146100d8578063cc328f2414610116578063df7bbf7b1461014157610060565b3661006057005b600080fd5b34801561007157600080fd5b5061007a61016c565b60405161008791906105db565b60405180910390f35b34801561009c57600080fd5b506100b760048036038101906100b29190610631565b610190565b6040516100c592919061066d565b60405180910390f35b6100d66101f6565b005b3480156100e457600080fd5b506100ff60048036038101906100fa9190610631565b610475565b60405161010d9291906106b7565b60405180910390f35b34801561012257600080fd5b5061012b6104b9565b6040516101389190610779565b60405180910390f35b34801561014d57600080fd5b5061015661054c565b604051610163919061079b565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060006001600085815260200190815260200160002060010154905060006001600086815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508082935093505050915091565b600061020130610552565b11610241576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023890610839565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c6906108cb565b60405180910390fd5b600047905060005b60028160ff1611610471576000600160008360ff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600160008460ff168152602001908152602001600020600101549050600061034983610552565b905060006103578684610573565b905060008473ffffffffffffffffffffffffffffffffffffffff168260405161037f90610942565b60006040518083038185875af1925050503d80600081146103bc576040519150601f19603f3d011682016040523d82523d6000602084013e6103c1565b606091505b5050905060006103d086610552565b9050811561041a577fda258b3a1cbc9d5bc655b6678e93f3c6ba635acd5606063b31a09f61101d6efe8685858460405161040d94939291906109b6565b60405180910390a1610458565b7f3f6bb9cb0871ee0c636863b1d01db56792bce9968229a1cdfccc5972b97ae1d28685858460405161044f94939291906109b6565b60405180910390a15b505050505050808061046990610a37565b9150506102d7565b5050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905082565b60606040516024016104ca90610a84565b6040516020818303038152906040527f92ee9d03000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905090565b60025481565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600080606483856105849190610aa4565b61058e9190610b2d565b90508091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006105c58261059a565b9050919050565b6105d5816105ba565b82525050565b60006020820190506105f060008301846105cc565b92915050565b600080fd5b6000819050919050565b61060e816105fb565b811461061957600080fd5b50565b60008135905061062b81610605565b92915050565b600060208284031215610647576106466105f6565b5b60006106558482850161061c565b91505092915050565b610667816105fb565b82525050565b600060408201905061068260008301856105cc565b61068f602083018461065e565b9392505050565b60006106a18261059a565b9050919050565b6106b181610696565b82525050565b60006040820190506106cc60008301856106a8565b6106d9602083018461065e565b9392505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561071a5780820151818401526020810190506106ff565b83811115610729576000848401525b50505050565b6000601f19601f8301169050919050565b600061074b826106e0565b61075581856106eb565b93506107658185602086016106fc565b61076e8161072f565b840191505092915050565b600060208201905081810360008301526107938184610740565b905092915050565b60006020820190506107b0600083018461065e565b92915050565b600082825260208201905092915050565b7f436f6e7472616374206973206e6f742066756e6465642c206e6f20617373657460008201527f20746f2064697374726962757465210000000000000000000000000000000000602082015250565b6000610823602f836107b6565b915061082e826107c7565b604082019050919050565b6000602082019050818103600083015261085281610816565b9050919050565b7f53656e646572206973206e6f742064657369676e61746564206d756c7469736960008201527f672077616c6c6574000000000000000000000000000000000000000000000000602082015250565b60006108b56028836107b6565b91506108c082610859565b604082019050919050565b600060208201905081810360008301526108e4816108a8565b9050919050565b600081905092915050565b7f2000000000000000000000000000000000000000000000000000000000000000600082015250565b600061092c6001836108eb565b9150610937826108f6565b600182019050919050565b600061094d8261091f565b9150819050919050565b6000819050919050565b600061097c6109776109728461059a565b610957565b61059a565b9050919050565b600061098e82610961565b9050919050565b60006109a082610983565b9050919050565b6109b081610995565b82525050565b60006080820190506109cb60008301876109a7565b6109d8602083018661065e565b6109e5604083018561065e565b6109f2606083018461065e565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060ff82169050919050565b6000610a4282610a2a565b915060ff821415610a5657610a556109fb565b5b600182019050919050565b6000610a6e6001836107b6565b9150610a79826108f6565b602082019050919050565b60006020820190508181036000830152610a9d81610a61565b9050919050565b6000610aaf826105fb565b9150610aba836105fb565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610af357610af26109fb565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610b38826105fb565b9150610b43836105fb565b925082610b5357610b52610afe565b5b82820490509291505056fea26469706673582212205371a3f92546455ffa34ba965485025925ff9091b1c637a9d70dd8e72051d5a264736f6c634300080a0033",
	"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH3 0x11 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH3 0xFDD CODESIZE SUB DUP1 PUSH3 0xFDD DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH3 0x37 SWAP2 SWAP1 PUSH3 0x2A2 JUMP JUMPDEST PUSH1 0x64 DUP2 DUP5 PUSH3 0x47 SWAP2 SWAP1 PUSH3 0x359 JUMP JUMPDEST GT ISZERO PUSH3 0x8B JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH3 0x82 SWAP1 PUSH3 0x417 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP5 PUSH1 0x0 DUP1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP4 PUSH1 0x1 PUSH1 0x0 DUP1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 ADD PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP3 PUSH1 0x1 PUSH1 0x0 DUP1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x1 ADD DUP2 SWAP1 SSTORE POP DUP2 PUSH1 0x1 PUSH1 0x0 PUSH1 0x1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 ADD PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP1 PUSH1 0x1 PUSH1 0x0 PUSH1 0x1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x1 ADD DUP2 SWAP1 SSTORE POP POP POP POP POP POP PUSH3 0x439 JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x1EA DUP3 PUSH3 0x1BD JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x1FC DUP2 PUSH3 0x1DD JUMP JUMPDEST DUP2 EQ PUSH3 0x208 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH3 0x21C DUP2 PUSH3 0x1F1 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x22F DUP3 PUSH3 0x1BD JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x241 DUP2 PUSH3 0x222 JUMP JUMPDEST DUP2 EQ PUSH3 0x24D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH3 0x261 DUP2 PUSH3 0x236 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x27C DUP2 PUSH3 0x267 JUMP JUMPDEST DUP2 EQ PUSH3 0x288 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH3 0x29C DUP2 PUSH3 0x271 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0xA0 DUP7 DUP9 SUB SLT ISZERO PUSH3 0x2C1 JUMPI PUSH3 0x2C0 PUSH3 0x1B8 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH3 0x2D1 DUP9 DUP3 DUP10 ADD PUSH3 0x20B JUMP JUMPDEST SWAP6 POP POP PUSH1 0x20 PUSH3 0x2E4 DUP9 DUP3 DUP10 ADD PUSH3 0x250 JUMP JUMPDEST SWAP5 POP POP PUSH1 0x40 PUSH3 0x2F7 DUP9 DUP3 DUP10 ADD PUSH3 0x28B JUMP JUMPDEST SWAP4 POP POP PUSH1 0x60 PUSH3 0x30A DUP9 DUP3 DUP10 ADD PUSH3 0x250 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x80 PUSH3 0x31D DUP9 DUP3 DUP10 ADD PUSH3 0x28B JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP6 POP SWAP3 SWAP6 SWAP1 SWAP4 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH3 0x366 DUP3 PUSH3 0x267 JUMP JUMPDEST SWAP2 POP PUSH3 0x373 DUP4 PUSH3 0x267 JUMP JUMPDEST SWAP3 POP DUP3 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SUB DUP3 GT ISZERO PUSH3 0x3AB JUMPI PUSH3 0x3AA PUSH3 0x32A JUMP JUMPDEST JUMPDEST DUP3 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x53756D206F6620706F7274696F6E203E20313030250000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x3FF PUSH1 0x15 DUP4 PUSH3 0x3B6 JUMP JUMPDEST SWAP2 POP PUSH3 0x40C DUP3 PUSH3 0x3C7 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH3 0x432 DUP2 PUSH3 0x3F0 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xB94 DUP1 PUSH3 0x449 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x59 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x4783C35B EQ PUSH2 0x65 JUMPI DUP1 PUSH4 0x67F1FFA4 EQ PUSH2 0x90 JUMPI DUP1 PUSH4 0x92EE9D03 EQ PUSH2 0xCE JUMPI DUP1 PUSH4 0xC8488CED EQ PUSH2 0xD8 JUMPI DUP1 PUSH4 0xCC328F24 EQ PUSH2 0x116 JUMPI DUP1 PUSH4 0xDF7BBF7B EQ PUSH2 0x141 JUMPI PUSH2 0x60 JUMP JUMPDEST CALLDATASIZE PUSH2 0x60 JUMPI STOP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x71 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x7A PUSH2 0x16C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x87 SWAP2 SWAP1 PUSH2 0x5DB JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x9C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xB7 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xB2 SWAP2 SWAP1 PUSH2 0x631 JUMP JUMPDEST PUSH2 0x190 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xC5 SWAP3 SWAP2 SWAP1 PUSH2 0x66D JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xD6 PUSH2 0x1F6 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xE4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xFF PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xFA SWAP2 SWAP1 PUSH2 0x631 JUMP JUMPDEST PUSH2 0x475 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x10D SWAP3 SWAP2 SWAP1 PUSH2 0x6B7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x122 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x12B PUSH2 0x4B9 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x138 SWAP2 SWAP1 PUSH2 0x779 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x14D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x156 PUSH2 0x54C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x163 SWAP2 SWAP1 PUSH2 0x79B JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 DUP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 DUP6 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x1 ADD SLOAD SWAP1 POP PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 DUP7 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP1 DUP3 SWAP4 POP SWAP4 POP POP POP SWAP2 POP SWAP2 JUMP JUMPDEST PUSH1 0x0 PUSH2 0x201 ADDRESS PUSH2 0x552 JUMP JUMPDEST GT PUSH2 0x241 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x238 SWAP1 PUSH2 0x839 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 DUP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x2CF JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x2C6 SWAP1 PUSH2 0x8CB JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 SELFBALANCE SWAP1 POP PUSH1 0x0 JUMPDEST PUSH1 0x2 DUP2 PUSH1 0xFF AND GT PUSH2 0x471 JUMPI PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 DUP4 PUSH1 0xFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 DUP5 PUSH1 0xFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x1 ADD SLOAD SWAP1 POP PUSH1 0x0 PUSH2 0x349 DUP4 PUSH2 0x552 JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH2 0x357 DUP7 DUP5 PUSH2 0x573 JUMP JUMPDEST SWAP1 POP PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH1 0x40 MLOAD PUSH2 0x37F SWAP1 PUSH2 0x942 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP8 GAS CALL SWAP3 POP POP POP RETURNDATASIZE DUP1 PUSH1 0x0 DUP2 EQ PUSH2 0x3BC JUMPI PUSH1 0x40 MLOAD SWAP2 POP PUSH1 0x1F NOT PUSH1 0x3F RETURNDATASIZE ADD AND DUP3 ADD PUSH1 0x40 MSTORE RETURNDATASIZE DUP3 MSTORE RETURNDATASIZE PUSH1 0x0 PUSH1 0x20 DUP5 ADD RETURNDATACOPY PUSH2 0x3C1 JUMP JUMPDEST PUSH1 0x60 SWAP2 POP JUMPDEST POP POP SWAP1 POP PUSH1 0x0 PUSH2 0x3D0 DUP7 PUSH2 0x552 JUMP JUMPDEST SWAP1 POP DUP2 ISZERO PUSH2 0x41A JUMPI PUSH32 0xDA258B3A1CBC9D5BC655B6678E93F3C6BA635ACD5606063B31A09F61101D6EFE DUP7 DUP6 DUP6 DUP5 PUSH1 0x40 MLOAD PUSH2 0x40D SWAP5 SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0x9B6 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 PUSH2 0x458 JUMP JUMPDEST PUSH32 0x3F6BB9CB0871EE0C636863B1D01DB56792BCE9968229A1CDFCCC5972B97AE1D2 DUP7 DUP6 DUP6 DUP5 PUSH1 0x40 MLOAD PUSH2 0x44F SWAP5 SWAP4 SWAP3 SWAP2 SWAP1 PUSH2 0x9B6 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 JUMPDEST POP POP POP POP POP POP DUP1 DUP1 PUSH2 0x469 SWAP1 PUSH2 0xA37 JUMP JUMPDEST SWAP2 POP POP PUSH2 0x2D7 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x20 MSTORE DUP1 PUSH1 0x0 MSTORE PUSH1 0x40 PUSH1 0x0 KECCAK256 PUSH1 0x0 SWAP2 POP SWAP1 POP DUP1 PUSH1 0x0 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 DUP1 PUSH1 0x1 ADD SLOAD SWAP1 POP DUP3 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x40 MLOAD PUSH1 0x24 ADD PUSH2 0x4CA SWAP1 PUSH2 0xA84 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 DUP4 SUB SUB DUP2 MSTORE SWAP1 PUSH1 0x40 MSTORE PUSH32 0x92EE9D0300000000000000000000000000000000000000000000000000000000 PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH1 0x20 DUP3 ADD DUP1 MLOAD PUSH28 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP4 DUP2 DUP4 AND OR DUP4 MSTORE POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND BALANCE SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x64 DUP4 DUP6 PUSH2 0x584 SWAP2 SWAP1 PUSH2 0xAA4 JUMP JUMPDEST PUSH2 0x58E SWAP2 SWAP1 PUSH2 0xB2D JUMP JUMPDEST SWAP1 POP DUP1 SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x5C5 DUP3 PUSH2 0x59A JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x5D5 DUP2 PUSH2 0x5BA JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x5F0 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x5CC JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x60E DUP2 PUSH2 0x5FB JUMP JUMPDEST DUP2 EQ PUSH2 0x619 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x62B DUP2 PUSH2 0x605 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x647 JUMPI PUSH2 0x646 PUSH2 0x5F6 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x655 DUP5 DUP3 DUP6 ADD PUSH2 0x61C JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x667 DUP2 PUSH2 0x5FB JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 DUP3 ADD SWAP1 POP PUSH2 0x682 PUSH1 0x0 DUP4 ADD DUP6 PUSH2 0x5CC JUMP JUMPDEST PUSH2 0x68F PUSH1 0x20 DUP4 ADD DUP5 PUSH2 0x65E JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x6A1 DUP3 PUSH2 0x59A JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x6B1 DUP2 PUSH2 0x696 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 DUP3 ADD SWAP1 POP PUSH2 0x6CC PUSH1 0x0 DUP4 ADD DUP6 PUSH2 0x6A8 JUMP JUMPDEST PUSH2 0x6D9 PUSH1 0x20 DUP4 ADD DUP5 PUSH2 0x65E JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x71A JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x6FF JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH2 0x729 JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x74B DUP3 PUSH2 0x6E0 JUMP JUMPDEST PUSH2 0x755 DUP2 DUP6 PUSH2 0x6EB JUMP JUMPDEST SWAP4 POP PUSH2 0x765 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x6FC JUMP JUMPDEST PUSH2 0x76E DUP2 PUSH2 0x72F JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x793 DUP2 DUP5 PUSH2 0x740 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x7B0 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x65E JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x436F6E7472616374206973206E6F742066756E6465642C206E6F206173736574 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x20746F2064697374726962757465210000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x823 PUSH1 0x2F DUP4 PUSH2 0x7B6 JUMP JUMPDEST SWAP2 POP PUSH2 0x82E DUP3 PUSH2 0x7C7 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x852 DUP2 PUSH2 0x816 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x53656E646572206973206E6F742064657369676E61746564206D756C74697369 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x672077616C6C6574000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x8B5 PUSH1 0x28 DUP4 PUSH2 0x7B6 JUMP JUMPDEST SWAP2 POP PUSH2 0x8C0 DUP3 PUSH2 0x859 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x8E4 DUP2 PUSH2 0x8A8 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x2000000000000000000000000000000000000000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x92C PUSH1 0x1 DUP4 PUSH2 0x8EB JUMP JUMPDEST SWAP2 POP PUSH2 0x937 DUP3 PUSH2 0x8F6 JUMP JUMPDEST PUSH1 0x1 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x94D DUP3 PUSH2 0x91F JUMP JUMPDEST SWAP2 POP DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x97C PUSH2 0x977 PUSH2 0x972 DUP5 PUSH2 0x59A JUMP JUMPDEST PUSH2 0x957 JUMP JUMPDEST PUSH2 0x59A JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x98E DUP3 PUSH2 0x961 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x9A0 DUP3 PUSH2 0x983 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x9B0 DUP2 PUSH2 0x995 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x80 DUP3 ADD SWAP1 POP PUSH2 0x9CB PUSH1 0x0 DUP4 ADD DUP8 PUSH2 0x9A7 JUMP JUMPDEST PUSH2 0x9D8 PUSH1 0x20 DUP4 ADD DUP7 PUSH2 0x65E JUMP JUMPDEST PUSH2 0x9E5 PUSH1 0x40 DUP4 ADD DUP6 PUSH2 0x65E JUMP JUMPDEST PUSH2 0x9F2 PUSH1 0x60 DUP4 ADD DUP5 PUSH2 0x65E JUMP JUMPDEST SWAP6 SWAP5 POP POP POP POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0xFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xA42 DUP3 PUSH2 0xA2A JUMP JUMPDEST SWAP2 POP PUSH1 0xFF DUP3 EQ ISZERO PUSH2 0xA56 JUMPI PUSH2 0xA55 PUSH2 0x9FB JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xA6E PUSH1 0x1 DUP4 PUSH2 0x7B6 JUMP JUMPDEST SWAP2 POP PUSH2 0xA79 DUP3 PUSH2 0x8F6 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0xA9D DUP2 PUSH2 0xA61 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xAAF DUP3 PUSH2 0x5FB JUMP JUMPDEST SWAP2 POP PUSH2 0xABA DUP4 PUSH2 0x5FB JUMP JUMPDEST SWAP3 POP DUP2 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DIV DUP4 GT DUP3 ISZERO ISZERO AND ISZERO PUSH2 0xAF3 JUMPI PUSH2 0xAF2 PUSH2 0x9FB JUMP JUMPDEST JUMPDEST DUP3 DUP3 MUL SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x12 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH2 0xB38 DUP3 PUSH2 0x5FB JUMP JUMPDEST SWAP2 POP PUSH2 0xB43 DUP4 PUSH2 0x5FB JUMP JUMPDEST SWAP3 POP DUP3 PUSH2 0xB53 JUMPI PUSH2 0xB52 PUSH2 0xAFE JUMP JUMPDEST JUMPDEST DUP3 DUP3 DIV SWAP1 POP SWAP3 SWAP2 POP POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 MSTORE8 PUSH18 0xA3F92546455FFA34BA965485025925FF9091 0xB1 0xC6 CALLDATACOPY 0xA9 0xD7 0xD 0xD8 0xE7 KECCAK256 MLOAD 0xD5 LOG2 PUSH5 0x736F6C6343 STOP ADDMOD EXP STOP CALLER ",
	"sourceMap": "85:2310:0:-:0;;;320:366;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;478:3;465:9;453;:21;;;;:::i;:::-;:28;;444:63;;;;;;;;;;;;:::i;:::-;;;;;;;;;529:9;518:8;;:20;;;;;;;;;;;;;;;;;;564:6;549:4;:7;554:1;549:7;;;;;;;;;;;:12;;;:21;;;;;;;;;;;;;;;;;;599:9;581:4;:7;586:1;581:7;;;;;;;;;;;:15;;:27;;;;634:6;619:4;:7;624:1;619:7;;;;;;;;;;;:12;;;:21;;;;;;;;;;;;;;;;;;669:9;651:4;:7;656:1;651:7;;;;;;;;;;;:15;;:27;;;;320:366;;;;;85:2310;;88:117:2;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:143::-;753:5;784:6;778:13;769:22;;800:33;827:5;800:33;:::i;:::-;696:143;;;;:::o;845:104::-;890:7;919:24;937:5;919:24;:::i;:::-;908:35;;845:104;;;:::o;955:138::-;1036:32;1062:5;1036:32;:::i;:::-;1029:5;1026:43;1016:71;;1083:1;1080;1073:12;1016:71;955:138;:::o;1099:159::-;1164:5;1195:6;1189:13;1180:22;;1211:41;1246:5;1211:41;:::i;:::-;1099:159;;;;:::o;1264:77::-;1301:7;1330:5;1319:16;;1264:77;;;:::o;1347:122::-;1420:24;1438:5;1420:24;:::i;:::-;1413:5;1410:35;1400:63;;1459:1;1456;1449:12;1400:63;1347:122;:::o;1475:143::-;1532:5;1563:6;1557:13;1548:22;;1579:33;1606:5;1579:33;:::i;:::-;1475:143;;;;:::o;1624:1009::-;1746:6;1754;1762;1770;1778;1827:3;1815:9;1806:7;1802:23;1798:33;1795:120;;;1834:79;;:::i;:::-;1795:120;1954:1;1979:64;2035:7;2026:6;2015:9;2011:22;1979:64;:::i;:::-;1969:74;;1925:128;2092:2;2118:72;2182:7;2173:6;2162:9;2158:22;2118:72;:::i;:::-;2108:82;;2063:137;2239:2;2265:64;2321:7;2312:6;2301:9;2297:22;2265:64;:::i;:::-;2255:74;;2210:129;2378:2;2404:72;2468:7;2459:6;2448:9;2444:22;2404:72;:::i;:::-;2394:82;;2349:137;2525:3;2552:64;2608:7;2599:6;2588:9;2584:22;2552:64;:::i;:::-;2542:74;;2496:130;1624:1009;;;;;;;;:::o;2639:180::-;2687:77;2684:1;2677:88;2784:4;2781:1;2774:15;2808:4;2805:1;2798:15;2825:305;2865:3;2884:20;2902:1;2884:20;:::i;:::-;2879:25;;2918:20;2936:1;2918:20;:::i;:::-;2913:25;;3072:1;3004:66;3000:74;2997:1;2994:81;2991:107;;;3078:18;;:::i;:::-;2991:107;3122:1;3119;3115:9;3108:16;;2825:305;;;;:::o;3136:169::-;3220:11;3254:6;3249:3;3242:19;3294:4;3289:3;3285:14;3270:29;;3136:169;;;;:::o;3311:171::-;3451:23;3447:1;3439:6;3435:14;3428:47;3311:171;:::o;3488:366::-;3630:3;3651:67;3715:2;3710:3;3651:67;:::i;:::-;3644:74;;3727:93;3816:3;3727:93;:::i;:::-;3845:2;3840:3;3836:12;3829:19;;3488:366;;;:::o;3860:419::-;4026:4;4064:2;4053:9;4049:18;4041:26;;4113:9;4107:4;4103:20;4099:1;4088:9;4084:17;4077:47;4141:131;4267:4;4141:131;:::i;:::-;4133:139;;3860:419;;;:::o;85:2310:0:-;;;;;;;"
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// <!-- check balance -->
const checkBalance = document.getElementById('get-balance');
checkBalance.onclick = async () => {
    var web3 = new Web3(window.ethereum)
    const address = document.getElementById('address-box').value;
    const balance = await web3.eth.getBalance(address)
    const currentBalance = document.getElementById('address-balance');
    currentBalance.innerHTML = address + " owns: " + balance / 10**18 + " ETH" 
}

//   <!-- 2. Rich person set up multisig wallet  -->
//   <!-- Rich person connect wallet  -->
const richWalletEnable = document.getElementById('wallet-connect')
richWalletEnable.onclick = async () => {
    
    await ethereum.request({method: 'eth_requestAccounts'})
    const walletCurrentAccount = document.getElementById('wallet-current-account');
    walletCurrentAccount.innerHTML = "Connected Wallet: " + ethereum.selectedAddress
}

// <!-- 2.1 Appoint trusted lawyer -->
const deployMS = document.getElementById('deploy-ms');
deployMS.onclick = async () => {

    const lawyer1Address = document.getElementById('add-lawyer1-box').value;
    const lawyer2Address = document.getElementById('add-lawyer2-box').value;
    const waitBlock = document.getElementById('lock-block-box').value;
    const withdrawAddress = document.getElementById('withdraw-address').value;

    var web3 = new Web3(window.ethereum)
    var multiSigContract = new web3.eth.Contract(multisigABI);
    console.log(multiSigContract)
    
    // wait until block is mined
    const expectedBlockTime = 1000; 
    var multiSig = await multiSigContract.deploy({
        data: '0x'+ multisigByteCode.object, 
        arguments: [[lawyer1Address, lawyer2Address], 2, waitBlock, withdrawAddress]
    }).send({from: web3.givenProvider.selectedAddress}, async function(error, transactonHash) {
        console.log("Submitted transaction with hash: ", transactonHash)
        let transactionReceipt = null
        while (transactionReceipt == null) { // Waiting expectedBlockTime until the transaction is mined
            transactionReceipt = await web3.eth.getTransactionReceipt(transactonHash);
            await sleep(expectedBlockTime)
        }
        console.log("Got the transaction receipt: ", transactionReceipt)
        console.log("Contract address is: ", transactionReceipt.contractAddress)

        const msAddress = transactionReceipt.contractAddress
        const getMsAddress = document.getElementById('ms-address');
        getMsAddress.innerHTML = "Multisig Contract Address: " + msAddress
    });

    console.log(multiSig.msAddress)
}

// <!-- 2.2. Rich person sends funds to multisig wallet -->
const msSubmit = document.getElementById('ms-input-button');
msSubmit.onclick = async () => {

    const msValue = document.getElementById('ms-input-box').value;
    console.log(msValue)
    var web3 = new Web3(window.ethereum)
    const multisigAddress = document.getElementById('ms-address-box').value;
    console.log(multisigAddress)
    await web3.eth.sendTransaction({from: ethereum.selectedAddress, to: multisigAddress, value: msValue * 10**18});
}

// <!-- 3. Rich person set up decentralised will  -->
const deployDW = document.getElementById('deploy-dw');
deployDW.onclick = async () => {

    const msAddress = document.getElementById('executor-box').value;
    const msHeir1 = document.getElementById('heir1-box').value;
    const msPortion1 = document.getElementById('portion1-box').value;
    const msHeir2 = document.getElementById('heir2-box').value;
    const msPortion2 = document.getElementById('portion2-box').value;

    console.log(msAddress)
    var web3 = new Web3(window.ethereum)
    var dwContract = new web3.eth.Contract(dwABI);
    console.log(dwContract)

    const expectedBlockTime = 1000; 
    var decetnralisedWill = await dwContract.deploy({
        data: '0x'+ dwByteCode.object, 
        arguments: [msAddress, msHeir1, msPortion1, msHeir2, msPortion2]
    }).send({from: web3.givenProvider.selectedAddress}, async function(error, transactonHash) {
        console.log("Submitted transaction with hash: ", transactonHash)
        let transactionReceipt = null
        while (transactionReceipt == null) { 
            // Waiting expectedBlockTime until the transaction is mined
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

const msWithdraw = document.getElementById('withdraw-ms')
msWithdraw.onclick = async () => {
    var web3 = new Web3(window.ethereum)
    const msAddress = document.getElementById('ms-address-withdraw').value;
    let multisig =  new web3.eth.Contract(multisigABI, msAddress)
    await multisig.methods.withdraw().send({from: web3.givenProvider.selectedAddress})
}


// <!-- 4 Multisig execute decenralised will  -->
// Check lawyer 1 connection
const lawyerWalletEnable = document.getElementById('lawyer1-wallet-connect')
lawyerWalletEnable.onclick = async () => {
    
    await ethereum.request({method: 'eth_requestAccounts'})    
    const walletCurrentAccount = document.getElementById('lawyer1-wallet');
    walletCurrentAccount.innerHTML = "Connected Wallet: " + ethereum.selectedAddress
}

// <!-- 4.2 Trusted lawyer 1 provides 1st signature  -->
const provideSignature = document.getElementById('lawyer1-sign');
provideSignature.onclick = async() => {

    const dwAddress = document.getElementById('dw-address-sign').value;
    const multisigAddress = document.getElementById('ms-address-sign').value;
    var web3 = new Web3(window.ethereum)

    const decentralisedWill = new web3.eth.Contract(dwABI, dwAddress)
    decentralisedWill.setProvider(window.ethereum)
    console.log(decentralisedWill)
    const encoded = await decentralisedWill.methods.getDistributeAssetData().call() //get function signature
    console.log(encoded)
    var web3 = new Web3(window.ethereum)
    const multiSig = new web3.eth.Contract(multisigABI, multisigAddress)
    multiSig.setProvider(window.ethereum)
    console.log(multiSig)
    // Lawyer1 sign contract
    await multiSig.methods.submitTransaction(dwAddress, 0, encoded).send({from: web3.givenProvider.selectedAddress})
} 

// Check lawyer 2 connection
const lawyerWallet2Enable = document.getElementById('lawyer2-wallet-connect');
lawyerWallet2Enable.onclick = async () => {
    await ethereum.request({method: 'eth_requestAccounts'})
    const walletCurrentAccount = document.getElementById('lawyer2-wallet');
    walletCurrentAccount.innerHTML = "Connected Wallet: " + ethereum.selectedAddress
}

// <!-- 4.2 Trusted lawyer 2 provides 1st signature  -->
const provideSignature2 = document.getElementById('lawyer2-sign');
provideSignature2.onclick = async() => {

    const multisigAddress = document.getElementById('ms-address-sign').value;
    var web3 = new Web3(window.ethereum)
    const multiSig = new web3.eth.Contract(multisigABI, multisigAddress)
    multiSig.setProvider(window.ethereum)
    console.log(multiSig)

    await multiSig.methods.confirmTransaction(0).send({from: web3.givenProvider.selectedAddress});
} 


