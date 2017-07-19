const expect = require('chai').expect;
const sinon = require('sinon'); 

describe('First test', () => {
  it('should test a basic thing; 1 equal 1', () => {
    expect(1).to.be.equal(1);
  });


  it("stub 42 as callback return", function () {
    const callback = sinon.stub().returns(42);

    expect(callback()).to.be.equal(42);
  });


  it("ensure thats callback was called", function () {
    const callback = sinon.spy();

    callback();

    expect(callback.called).to.be.true;
  });
});
