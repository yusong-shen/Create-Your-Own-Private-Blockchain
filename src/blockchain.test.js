const BlockChain = require('./blockchain.js');


test('get genesis block', () => {
    let blockchain = new BlockChain.Blockchain();
    // Be sure to return the promise - if you omit this return statement, 
    // your test will complete before the promise returned from fetchData 
    // resolves and then() has a chance to execute the callback.
    return blockchain.getBlockByHeight(0).then(block => {
      expect(block.height).toBe(0);
      expect(block.getBData()).toEqual({data: 'Genesis Block'})
    });
  });

  test('validateChain for genesis block should return no error', () => {
    let blockchain = new BlockChain.Blockchain();
    let errorLog = blockchain.validateChain();
    expect(errorLog).resolves.toEqual([]);
  });