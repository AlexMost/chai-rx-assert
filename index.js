var rxAssert = require('rx-assert');

var slice = Array.prototype.slice;

module.exports = function(chai, utils){
	chai.Assertion.addChainableMethod('rxEqual', function(rawExpected) {
	    var actual = this._obj;
	    var expected = rawExpected;
	    
	    if (! (rawExpected instanceof Array)) {
	    	expected = slice.call(arguments);
	    }

	    var result = rxAssert.isEqual(actual, expected);

		return this.assert(result[0], result[1]);
	});
};
