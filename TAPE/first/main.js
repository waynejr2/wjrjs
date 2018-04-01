var test = require('tape');
var add = require('./add');

test('add: two numbers add correctly', function(t) {
    var actual = add(1,2);
    var expected = 3;
    t.equal(actual, expected);
    t.end();
});