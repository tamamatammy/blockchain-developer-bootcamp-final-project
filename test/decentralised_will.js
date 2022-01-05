
const { lowerCase } = require("lodash");
const DecentralisedWill = artifacts.require("DecentralisedWill");
const MultiSig = artifacts.require("MultiSig");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
 
contract("DecentralisedWill", function (accounts) {
  // // Test 1: Check whether there is a contract deployed
  // it("should assert true", async function () {
  //   await DecentralisedWill.deployed();
  //   return assert.isTrue(true);
  // });
  let dw;
  const msOwners = [accounts[0], accounts[1]];
  const msNumOwners = msOwners.length;
  const alice = accounts[2];
  const bob = accounts[3];

  before(async () => {
      dw = await DecentralisedWill.new();
      ms = await MultiSig.new(msOwners, msNumOwners);
  })

  // Unit testing for main contract DecentralisedWill 
  describe("DecentralisedWill contract testing", () => {


  it('Should DecentralisedWill contract balance starts with 0 ETH', async () => {
    const balance = await web3.eth.getBalance(dw.address);
    assert.equal(balance, 0, 'Initial dw contract balance is not 0!');
})
  
  it('Should DecentralisedWill contract balance has 1 ETH after deposit', async () => {
    const amount = web3.utils.toWei("0.01", "ether");
    await web3.eth.sendTransaction({from: accounts[0], to: dw.address, value: amount});
    const balance_wei = await web3.eth.getBalance(dw.address);
    assert.equal(amount, balance_wei);
  })

  it('Should Alice to be on the will', async() => {
      let setAlicePortion = 70;
      let id = 0
      let aliceWill = await dw.getHeirPortion(id);
      assert.equal(alice, aliceWill[0], 'Heir is not implmented correctly');
      assert.equal(setAlicePortion, aliceWill[1], 'Inherit portion is not implemented correctly!');
  })

  it('Should Bob to be on the will', async() => {
    let setBobPortion = 30;
    let id = 1
    let bobWill = await dw.getHeirPortion(id);
    assert.equal(bob, bobWill[0], 'Heir is not implmented correctly');
    assert.equal(setBobPortion, bobWill[1], 'Inherit portion is not implemented correctly!');

  })

  it("Should DW returns byte data for distributeAsset function", async() =>{
    const abi = await dw.getDistributeAssetData();
  })

  it('Should asset distributed correctly', async() => {
    let balance = await web3.eth.getBalance(dw.address);
    let setAmount = balance * 0.7;
    const priorBalance =  await web3.eth.getBalance(alice);
    console.log(priorBalance)
    await dw.distributeAsset();
    const postBalance =  await web3.eth.getBalance(alice);
    console.log(postBalance)
    const diff = postBalance - priorBalance; 
    assert.equal(diff, setAmount , 'To address been transfered with incorrect amount');
  })
})

  describe("MutiSig contract testing", () => {
  
    it("should MutiSig contract assert true", async function () {
    await MultiSig.deployed();
    return assert.isTrue(true);
    })
    
    it("Should Alice receive correct amount after multisig execute decentralised will ", async() =>{

      console.log("MultiSig " + ms.address)
      console.log("DecentralisedWill " + dw.address)

      // Deposit dw contract from ms contract
      let dwAmount = web3.utils.toWei("0.01", "ether");
      await web3.eth.sendTransaction({from: accounts[0], to: ms.address, value: dwAmount});
      
      // Set ammount that alice suppose to get
      const expectedPortion = 70; 
      const abi = await dw.getDistributeAssetData.call();
      const msPriorbalance = await web3.eth.getBalance(ms.address);
      console.log("MultiSig balance before executing contract ", msPriorbalance);
      const expectedAmount = dwAmount * expectedPortion / 100;
      const priorAliceBalance =  await web3.eth.getBalance(alice);
      console.log("Alice's balance before contract" + priorAliceBalance)
      
      //Multisig + Deposit dw + exedute distributeAsset
      await ms.submitTransaction(dw.address, 0, abi, {from: accounts[0]});
      await ms.confirmTransaction(0, {from: accounts[1]}) 

      const postContractBalance = await web3.eth.getBalance(ms.address);
      console.log('MultiSig balance After executing contract ' + postContractBalance)  

      //Post dw balance
      const postAliceBalance =  await web3.eth.getBalance(alice);
      console.log("Alice balance after contract " + postAliceBalance)
      const diff = postAliceBalance - priorAliceBalance; 
      console.log("Alice's account balance difference " + diff);
      assert.equal(expectedAmount, diff, 'Alice been transfered with incorrect amount');
    })

    it("Should multisig failed if same transaction execute more than once ", async() =>{
      const dwAmount = web3.utils.toWei("0.01", "ether");
      const abi = await dw.getDistributeAssetData.call();
      await web3.eth.sendTransaction({from: accounts[0], to: ms.address, value: dwAmount});
      const msPriorbalance = await web3.eth.getBalance(ms.address)
      console.log("MultiSig balance before executing contract ", msPriorbalance);

      try {
        await ms.submitTransaction(dw.address, 0, abi, {from: accounts[0]});
        await ms.confirmTransaction(0, {from: accounts[1]}) 
        throw new Error("tx did not fail")
      } catch (err){}

      const msPostBalance = await web3.eth.getBalance(ms.address)
      console.log('MultiSig balance after executing contract ' + msPostBalance)  
      assert.equal(msPriorbalance, msPostBalance, "Mutisig contract balance changed!")
    })

    it("Should multisig failed without losing contract balance unchanged if the contract did not receive enough signature ", async() =>{
      dw_mew = await DecentralisedWill.new(); // create new instance
      ms_new = await MultiSig.new(msOwners, msNumOwners); // create new instance
      const dwAmount = web3.utils.toWei("0.01", "ether");
      const abi = await dw_mew.getDistributeAssetData.call();
      await web3.eth.sendTransaction({from: accounts[0], to: ms.address, value: dwAmount});
      await ms_new.submitTransaction(dw_mew.address, 0, abi, {from: accounts[0]});
      const msPriorbalance = await web3.eth.getBalance(ms_new.address)
      console.log("MultiSig balance before executing contract ", msPriorbalance);
      try {
        await ms_new.confirmTransaction(0, {from: accounts[0]}) 
        throw new Error("tx did not fail")
      } catch (err){
      const msPostBalance = await web3.eth.getBalance(ms_new.address)
      console.log('MultiSig balance after executing contract ' + msPostBalance)  
      assert.equal(msPriorbalance, msPostBalance, "Mutisig contract balance changed!")
    }


  })

})

})
//   it("should send correct amount to destinated address", async () => {
//     // const dwdw = await DecentralisedWill.new();
    
//     const amount =  web3.utils.toWei("1", "ether");

//     console.log(amount)
    
//     const dwTo = accounts[2];//'0x04EF46F6EB84F6D358AbF6C33E16b1Cf0244A86C';

//     console.log(dwTo)
    
//     const priorBalance =  await web3.eth.getBalance(dwTo);

//     console.log(priorBalance);

//     await dw.distributeAsset(dwTo, amount);

//     const postBalance =  await web3.eth.getBalance(dwTo);

//     const diff = postBalance - priorBalance

//     console.log(diff)

//     assert.equal(diff, amount, 'To address been transfered with incorrect amount');
// });

  // // Test 2: Check whether initial storedData is set to zero 
  // it("has an initial value of 0", async () => {
  //     // Get the contract been deployed
  //     const ssdw = await SimpleStorage.deployed();
  //     // Verify it has an inital value of -
  //     const storedData = await ssdw.getStoredData.call();
  //     assert.equal(storedData, 0, 'Initial state should be zero');

  // });

  // //Test3: set different tests for different functionaities
  // describe("Functionality", () => {
    
  //   // Test 3.1: Data correctly stored
  //   it("should store a new value 42", async () =>{
  //     const ssdw = await SimpleStorage.deployed();

  //     const setExpected = 42;

  //     await ssdw.setStoredData(setExpected, {from: accounts [0]});

  //     const storedData = await ssdw.getStoredData.call();
      
  //     assert.equal(storedData, setExpected, `Expected ${setExpected}, stored ${storedData}`)
  //   })

  // })

  //   // Test 4: Data correctly stored
  //    it("should not let someone else change the variable", async() => {
  //     const [owner, badJoe] = accounts;
  //     const ssdw = await SimpleStorage.new(42, {from: owner});

  //     const balance = await web3.eth.getBalance(accounts[2]);
  //     console.log(balance)

  //     try {
  //       await ssdw.setStoredData(22, {from: badJoe})
  //     } catch(err) { }

  //     const storedData = await ssdw.getStoredData.call();
      
  //     assert.equal(storedData, 42, "Someone else other than owner can change the storedData!")

  //    })