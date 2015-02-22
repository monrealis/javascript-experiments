var assert = require("assert");
require("should");

describe('Array#indexOf', function () {
    var array;

    beforeEach(function () {
        array = [1, 2, 3];
    });

    it('should return -1 when the value is not present', function () {
        assert.equal(-1, array.indexOf(4));
    });

    it('should return nonnegative value if value is present', function () {
        array.indexOf(2).should.equal(1);
    });
});
