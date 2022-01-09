const { lowerCase } = require("lodash");
const DecentralisedWill = artifacts.require("DecentralisedWill");
const MultiSig = artifacts.require("MultiSig");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
 
contract("DecentralisedWill", function (accounts) {

  const msOwners = [accounts[1], accounts[2]];
  const msNumOwners = msOwners.length;
  const alice = accounts[3];
  const bob = accounts[4];

  describe("Test decentralised will functions", () => {
    const waitBlock = 0;
    before(async () => {
      ms = await MultiSig.new(msOwners, msNumOwners, waitBlock, accounts[1]);
      dw = await DecentralisedWill.new(ms.address, alice, 70, bob, 30);
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
      ms = await MultiSig.new(msOwners, msNumOwners, waitBlock, accounts[1]);
      dw = await DecentralisedWill.new(ms.address, alice, 70, bob, 30);
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
      await ms.submitTransaction(dw.address, 0, abi, {from: accounts[1]});
      await ms.confirmTransaction(0, {from: accounts[2]}) 

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
        await ms.submitTransaction(dw.address, 0, abi, {from: accounts[1]});
        await ms.confirmTransaction(0, {from: accounts[1]}) 
        throw new Error("tx did not fail")
      } catch (err){}

      const msPostBalance = await web3.eth.getBalance(ms.address)
      console.log('MultiSig balance after executing contract ' + msPostBalance)  
      assert.equal(msPriorbalance, msPostBalance, "DW can be executed more than once!")
    })

    it("Should ms failed without losing contract balance unchanged if the contract did not receive enough signature ", async() =>{
      const waitBlock = 0;
      dw_mew = await DecentralisedWill.new(dw.address, alice, 70, bob, 30); // create new instance
      ms_new = await MultiSig.new(msOwners, msNumOwners, waitBlock, accounts[1]); // create new instance
      const dwAmount = web3.utils.toWei("0.01", "ether");
      const abi = await dw.getDistributeAssetData();
      console.log(abi)
      await web3.eth.sendTransaction({from: accounts[0], to: ms.address, value: dwAmount});
      await ms_new.submitTransaction(dw_mew.address, 0, abi, {from: accounts[1]});
      const msPriorbalance = await web3.eth.getBalance(ms_new.address)
      console.log("MultiSig balance before executing contract ", msPriorbalance);
      try {
        await ms_new.confirmTransaction(0, {from: accounts[1]}) 
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
      ms = await MultiSig.new(msOwners, msNumOwners, waitBlock, accounts[1]);
      dw = await DecentralisedWill.new(ms.address, alice, 70, bob, 30);
      dwAmount = web3.utils.toWei("0.01", "ether");
      const encoded = await dw.getDistributeAssetData.call();

      await web3.eth.sendTransaction({from: accounts[0], to: ms.address, value: dwAmount});
      const msPriorbalance = await web3.eth.getBalance(ms.address)

      await ms.submitTransaction(dw.address, 0, encoded, {from: accounts[1]});
      await ms.confirmTransaction(0, {from: accounts[2]});

      const msPostBalance = await web3.eth.getBalance(ms.address)

      assert.equal(msPriorbalance, msPostBalance, "DW can be when wallet is locked!")

    });

it("should allowed execution after locked period", async() =>{
    const waitBlock = 0;
    ms = await MultiSig.new(msOwners, msNumOwners, waitBlock, accounts[1]);
    dw = await DecentralisedWill.new(ms.address, alice, 70, bob, 30);
    dwAmount = web3.utils.toWei("0.01", "ether");
    const encoded = await dw.getDistributeAssetData.call();
    await web3.eth.sendTransaction({from: accounts[0], to: ms.address, value: dwAmount});
    msBalance = web3.eth.getBalance(ms.address);
    console.log(msBalance)
    const msPriorbalance = await web3.eth.getBalance(ms.address)

    await ms.submitTransaction(dw.address, 0, encoded, {from: accounts[1]});
    await ms.confirmTransaction(0, {from: accounts[2]});

    const msPostBalance = await web3.eth.getBalance(ms.address)

    assert.equal(dwAmount, msPriorbalance-msPostBalance, "DW is not executed as expected!")

})

it('Should let fixed withdraw address withdraw', async () => {
  const waitBlock = 0;
  const amount = web3.utils.toWei("1", "ether")
  ms = await MultiSig.new(msOwners, msNumOwners, waitBlock, accounts[1]);
  await web3.eth.sendTransaction({from: accounts[0], to: ms.address, value: amount});
  let priorContractBalance = await web3.eth.getBalance(ms.address)
  let priorBalance = await web3.eth.getBalance(accounts[1]);
  await ms.withdraw({from: accounts[1]})
  let postBalance = await web3.eth.getBalance(accounts[1]);
  let postContractBalance = await web3.eth.getBalance(ms.address) 
  let diff = priorContractBalance-postContractBalance
  assert.equal(amount, diff, 'Multisig balance is not withdrawn correctly!');
})

it('Should fail if non withdraw address withdraw ', async () => {
  const waitBlock = 0;
  const amount = web3.utils.toWei("1", "ether")
  ms = await MultiSig.new(msOwners, msNumOwners, waitBlock, accounts[1]);
  await web3.eth.sendTransaction({from: accounts[0], to: ms.address, value: amount});
  try{
    await ms.withdraw({from: accounts[2]})
    throw new Error("tx did not fail")
  }catch(err){}
})

})
})