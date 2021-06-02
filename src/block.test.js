const BlockClass = require('./block.js');
const SHA256 = require('crypto-js/sha256');

test('block.getBData() should get the input data of block', () => {
    let block = new BlockClass.Block({data: 'Genesis Block'});
    let bodyData = block.getBData();
    expect(bodyData).toEqual({data: 'Genesis Block'});
  });

  test('block.validate() should return true for valid block', () => {
    let block = new BlockClass.Block({data: 'Genesis Block'});
    block.hash = SHA256(JSON.stringify(block)).toString();
    let isValid = block.validate();
    // use the .resolves matcher, Jest will wait for that promise to resolve
    expect(isValid).resolves.toBe(true);
  });

  test('block.validate() should return false for invalid block', () => {
    let block = new BlockClass.Block({data: 'Genesis Block'});
    block.hash = "foo-bar-hash";
    let isValid = block.validate();
    expect(isValid).resolves.toBe(false);
  });