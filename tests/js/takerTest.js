var chai;
var Taker;
var GameSimulator;
if (typeof require != 'undefined') {
    chai = require("chai");
    Taker = require("./taker")
    GameSimulator = require("./gameSimulator")
}

describe("taker", function () {
    var takerThis;

    beforeEach(function () {
        this.max = 60;
        this.taker = new Taker(this.max);
        takerThis = this;
    });

    it("should take 10 numbers within a range", function () {
        chai.expect(this.taker.take(10).length).to.equal(10);
    });

    it("should take unique numbers", function () {
        function toHash(array) {
            var hash = [];
            array.forEach(function (n) {
                if (hash[n] == null)
                    hash[n] = 0;
                hash[n]++;
            });
            return hash;
        }

        var hash = toHash(this.taker.take(10));
        chai.expect(Object.keys(hash).length).to.equal(10)
    });

    it("should return numbers in range [0, max)", function () {
        this.taker.take(10).forEach(function (n) {
            chai.expect(n).to.be.at.least(0).below(takerThis.max)
        })
    })
});

describe("game simulator", function () {
    beforeEach(function () {
        this.simulator = new GameSimulator(1);
        this.simulator.guesser = new SequenceTaker();
        this.simulator.roller = new SequenceTaker();
    });

    it("Should mark all the games as won", function () {
        chai.expect(this.simulator.getNumberOfWins()).to.equal(1);
    });

    it("Should mark all the games as last", function () {
        this.simulator.roller.take = createSequenceGenerator(1, 20);
        chai.expect(this.simulator.getNumberOfWins()).to.equal(0);
    })
});

var SequenceTaker = function () {
};

SequenceTaker.prototype.take = createSequenceGeneratorFrom(0);

function createSequenceGeneratorFrom(first) {
    return function (n) {
        return generateSequence(first, n);
    };
}

function createSequenceGenerator(first, n) {
    return function () {
        return generateSequence(first, n);
    };
}

function generateSequence(first, n) {
    var r = [];
    for (var i = 0; i < n; ++i)
        r.push(first + i);
    return r;
}