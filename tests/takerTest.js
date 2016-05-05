var chai = require("chai");

var Taker = function (maxNumber) {
    this.maxNumber = maxNumber
};

Taker.prototype.take = function (n) {
    var r = [];
    for (var i = 0; i < n; ++i)
        r.push(Math.floor(Math.random() * 60));
    return r;
};

describe("taker", function () {
    beforeEach(function () {
        this.taker = new Taker();
    });

    it("should take 10 numbers within a range", function () {
        chai.expect(this.taker.take(10).length).to.equal(10);
    });

    it("should take unique numbers", function () {
        var hash = [];
        this.taker.take(30).forEach(function (n) {
            if (hash[n] == null)
                hash[n] = 0;
            hash[n]++;
        })
        chai.expect(Object.keys(hash).length).to.equal(30)
    })

    function takeTen() {
        return this.taker.take(10)
    }
});
