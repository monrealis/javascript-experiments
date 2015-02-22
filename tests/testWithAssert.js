var assert = require("assert");
require("should");

describe('Array#indexOf', function () {
    it('should return -1 when the value is not present', function () {
        assert.equal(-1, [1, 2, 3].indexOf(4));
    });

    it('should return nonnegative value if value is present', function () {
        [1, 2, 3].indexOf(2).should.equal(1);
    });
});
