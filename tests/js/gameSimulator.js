var Taker;

if (typeof require != 'undefined')
    Taker = require('./taker')

var GameSimulator = function (numberOfGames) {
    this.taker = new Taker(60);
    this.guesser = this.taker;
    this.roller = this.taker;
    this.numberOfGames = numberOfGames;
};

GameSimulator.prototype.getNumberOfWins = function () {
    var r = 0;
    for (var i = 0; i < this.numberOfGames; ++i)
        if (this.getNumberOfShared() == 2)
            r++;
    return r;
};

GameSimulator.prototype.getNumberOfShared = function () {
    var guesses = this.guesser.take(2);
    var actual = this.roller.take(20);
    var r = 0;
    guesses.forEach(function (guess) {
        if (actual.indexOf(guess) >= 0)
            ++r;
    });
    return r;
};

if (typeof module != 'undefined')
    module.exports = GameSimulator;