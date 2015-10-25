var expect = chai.expect;

describe('filter', function() {
    beforeEach(module('myApp'));

    describe('reverse', function() {
        it('should capitalize a string', inject(function(capitalizeFilter) {
            expect(capitalizeFilter('one')).to.equal('ONE');
            expect(capitalizeFilter('Two')).to.equal('TWO');
        }))
    })
})