var factory = require('./productFactory');
var one = factory('one');
var two = factory('two');
console.log(one.getName(), two.getName());