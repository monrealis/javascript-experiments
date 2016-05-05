var chai = require("chai");

var Taker = function (maxNumber) {
    this.maxNumber = maxNumber
};

Taker.prototype.take = function (n) {
    function nextRandom(alreadyUsed) {
        var randomInt = Math.floor(Math.random() * takerThis.maxNumber);
        if (alreadyUsed.indexOf(randomInt) >= 0)
            return nextRandom(alreadyUsed);
        return randomInt;
    }

    var takerThis = this;
    var r = [];
    for (var i = 0; i < n; ++i)
        r.push(nextRandom(r));
    return r;
};

describe("taker", function () {
    beforeEach(function () {
        this.taker = new Taker(60);
    });

    it("should take 10 numbers within a range", function () {
        chai.expect(this.taker.take(10).length).to.equal(10);
    });

    it("should take unique numbers", function () {
        var hash = [];
        this.taker.take(10).forEach(function (n) {
            if (hash[n] == null)
                hash[n] = 0;
            hash[n]++;
        })
        chai.expect(Object.keys(hash).length).to.equal(10)
    })

    function takeTen() {
        return this.taker.take(10)
    }
});
