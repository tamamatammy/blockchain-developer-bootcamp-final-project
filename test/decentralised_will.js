const { lowerCase } = require("lodash");
const DecentralisedWill = artifacts.require("DecentralisedWill");
const MultiSig = artifacts.require("MultiSig");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
 
contract("DecentralisedWill", function (accounts) {

  const msOwners = [accounts[0], accounts[1]];
  const msNumOwners = msOwners.length;
  const alice = accounts[2];
  const bob = accounts[3];

  describe("Test decentralised will functions", () => {
    const waitBlock = 0;
    before(async () => {
      ms = await MultiSig.new(msOwners, msNumOwners, waitBlock);
      dw = await DecentralisedWill.new(ms.address);
    })
  
  it('Should dw balance starts with 0 ETH', async () => {
    const balance = await web3.eth.getBalance(dw.address);
    assert.equal(balance, 0, 'Initial dw contract balance is not 0!');
})
  
  it('Should dw balance has 1 ETH after deposit', async () => {
    const amount = web3.utils.toWei("0.01", "ether");
    await web3.eth.sendTransaction({from: accounts[0], to: dw.address, value: amount});
    const balance_wei = await web3.eth.getBalance(dw.address);
    assert.equal(amount, balance_wei);
  })

  it('Should Alice be on the will', async() => {
      let setAlicePortion = 70;
      let id = 0
      let aliceWill = await dw.getHeirPortion(id);
      assert.equal(alice, aliceWill[0], 'Heir is not implmented correctly');
      assert.equal(setAlicePortion, aliceWill[1], 'Inherit portion is not implemented correctly!');
  })

  it('Should Bob be on the will', async() => {
    let setBobPortion = 30;
    let id = 1
    let bobWill = await dw.getHeirPortion(id);
    assert.equal(bob, bobWill[0], 'Heir is not implmented correctly');
    assert.equal(setBobPortion, bobWill[1], 'Inherit portion is not implemented correctly!');

  })

  it("Should dw returns byte data for distributeAsset function", async() =>{
    const abi = await dw.getDistributeAssetData();
  })

  it('Should dw only be sent by multisig contract', async() => {
    let balance = await web3.eth.getBalance(dw.address);
    let setAmount = balance * 0.7;
    const priorBalance =  await web3.eth.getBalance(alice);
    console.log(priorBalance)

    try {    
      await dw.distributeAsset();
      throw new Error("tx did not fail")
    } catch(err){}
      const postBalance =  await web3.eth.getBalance(alice);
      console.log(postBalance)
      assert.equal(priorBalance, postBalance , 'Contract can be executed by unwanted sender!');
  })
})


  describe("Test multi signaure functions", () => {
    const waitBlock = 0;
    before(async () => {
      ms = await MultiSig.new(msOwners, msNumOwners, waitBlock);
      dw = await DecentralisedWill.new(ms.address);
    })

    it("should ms assert true", async function () {
    await MultiSig.deployed();
    return assert.isTrue(true);
    })
    
    it("Should Alice receive correct amount after multisig execute decentralised will ", async() =>{

      console.log("MultiSig " + ms.address)
      console.log("DecentralisedWill " + dw.address)

      // Deposit dw contract from ms contract
      let dwAmount = web3.utils.toWei("0.01", "ether");
      await web3.eth.sendTransaction({from: accounts[0], to: ms.address, value: dwAmount});
      
      console.log('Prior multisig dw caller: ' + dw);
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
      // const  postCaller = web3.eth.Contract(dw.address)
      console.log('Post multisig dw caller: ' + dw);
      //Post dw balance
      const postAliceBalance =  await web3.eth.getBalance(alice);
      console.log("Alice balance after contract " + postAliceBalance)
      const diff = postAliceBalance - priorAliceBalance; 
      console.log("Alice's account balance difference " + diff);
      assert.equal(expectedAmount, diff, 'Alice been transfered with incorrect amount');
    })

    it("Should ms failed if same transaction execute more than once ", async() =>{
      const dwAmount = web3.utils.toWei("0.01", "ether");
      const abi = await dw.getDistributeAssetData();
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
      assert.equal(msPriorbalance, msPostBalance, "DW can be executed more than once!")
    })

    it("Should ms failed without losing contract balance unchanged if the contract did not receive enough signature ", async() =>{
      const waitBlock = 0;
      dw_mew = await DecentralisedWill.new(dw.address); // create new instance
      ms_new = await MultiSig.new(msOwners, msNumOwners, waitBlock); // create new instance
      const dwAmount = web3.utils.toWei("0.01", "ether");
      const abi = await dw.getDistributeAssetData();
      console.log(abi)
      await web3.eth.sendTransaction({from: accounts[0], to: ms.address, value: dwAmount});
      await ms_new.submitTransaction(dw_mew.address, 0, abi, {from: accounts[0]});
      const msPriorbalance = await web3.eth.getBalance(ms_new.address)
      console.log("MultiSig balance before executing contract ", msPriorbalance);
      try {
        await ms_new.confirmTransaction(0, {from: accounts[0]}) 
        throw new Error("tx did not fail")
      } catch (err){}
      const msPostBalance = await web3.eth.getBalance(ms_new.address)
      console.log('MultiSig balance after executing contract ' + msPostBalance)  
      assert.equal(msPriorbalance, msPostBalance, "DW can be executed with unwanted 2nd signature!")
    
  })

})

describe("Test wallet lock function contract", () => {

it("should not allowed dw execution during locked period", async() =>{
      const waitBlock = 100;
      ms = await MultiSig.new(msOwners, msNumOwners, waitBlock);
      dw = await DecentralisedWill.new(ms.address);
      dwAmount = web3.utils.toWei("0.01", "ether");
      const encoded = await dw.getDistributeAssetData.call();

      await web3.eth.sendTransaction({from: accounts[0], to: ms.address, value: dwAmount});
      const msPriorbalance = await web3.eth.getBalance(ms.address)

      await ms.submitTransaction(dw.address, 0, encoded, {from: accounts[0]});
      await ms.confirmTransaction(0, {from: accounts[1]});

      const msPostBalance = await web3.eth.getBalance(ms.address)

      assert.equal(msPriorbalance, msPostBalance, "DW can be when wallet is locked!")

    });

it("should allowed execution after locked period", async() =>{
    const waitBlock = 0;
    ms = await MultiSig.new(msOwners, msNumOwners, waitBlock);
    dw = await DecentralisedWill.new(ms.address);
    dwAmount = web3.utils.toWei("0.01", "ether");
    const encoded = await dw.getDistributeAssetData.call();
    await web3.eth.sendTransaction({from: accounts[0], to: ms.address, value: dwAmount});
    msBalance = web3.eth.getBalance(ms.address);
    console.log(msBalance)
    const msPriorbalance = await web3.eth.getBalance(ms.address)

    await ms.submitTransaction(dw.address, 0, encoded, {from: accounts[0]});
    await ms.confirmTransaction(0, {from: accounts[1]});

    const msPostBalance = await web3.eth.getBalance(ms.address)

    assert.equal(dwAmount, msPriorbalance-msPostBalance, "DW is not executed as expected!")

})

it("should return ms signature count = 2 after 2 signatures", async() =>{
  const waitBlock = 0;

  console.log(waitBlock);

  ms = await MultiSig.new(msOwners, msNumOwners, waitBlock);
  dw = await DecentralisedWill.new(ms.address);
  dwAmount = web3.utils.toWei("0.01", "ether");
  const encoded = await dw.getDistributeAssetData.call();
  await web3.eth.sendTransaction({from: accounts[0], to: ms.address, value: dwAmount});
  await ms.submitTransaction(dw.address, 0, encoded, {from: accounts[0]});
  await ms.confirmTransaction(0, {from: accounts[1]});

  const signum = await ms.getSigNum(0)
  console.log(signum)
  assert.equal(2, signum, "Signum is not 2!")
})
})

})