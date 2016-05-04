var chai = require("chai");

var Taker = function (n) {
    this.n = n
};

Taker.prototype.take = function () {
    var r = [];
    for (var i = 0; i < this.n; ++i)
        r.push(i);
    return r;
};

describe("taker", function () {
    beforeEach(function () {
        this.taker = new Taker(10);
        this.take = this.taker.take;
    });

    it("should take 10 numbers within a range", function () {
        chai.expect(this.taker.take().length).to.equal(10);
    });

    it("should take unique numbers", function () {
        var hash = [];
        this.taker.take().forEach(function (n) {
            if (hash[n] == null)
                hash[n] = 0;
            hash[n]++;
        })
        chai.expect(hash.length).to.equal(10)
    })
});
