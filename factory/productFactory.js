var Product = function (name) {
    this.name = name;
    this.getName = function () {
        return this.name;
    };
};
module.exports = function (name) {
    return new Product(name);
};