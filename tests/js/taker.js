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

if (typeof module != 'undefined')
    module.exports = Taker;