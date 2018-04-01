
var Combat = require("../js/Combat");

var dice = function() {
        ;
}

describe('Testing Combat: ', function() {
    describe('functions are functions: ', function() {
        it('toHit is a function', function() {
            var c = new Combat(dice);
            
            var actual = typeof c.toHit;
            var expected = "function";
            
            expect(actual).toBe(expected);
        });
        
        it('didToHitSucceed is a function', function() {
            var c = new Combat(dice);
            
            var actual = typeof c.didToHitSucceed;
            var expected = "function";
            
            expect(actual).toBe(expected);
        });
        
        
        it('calculateToBeHit is a function', function() {
            var c = new Combat(dice);
            
            var actual = typeof c.calculateToBeHit;
            var expected = "function";
            
            expect(actual).toBe(expected);
        });
        
        it('calculateToHit is a function', function() {
            var c = new Combat(dice);
            
            var actual = typeof c.calculateToHit;
            var expected = "function";
            
            expect(actual).toBe(expected);
        });
        
    });
    
    describe('didToHitSucceed test suite', function() {
        
    });
        
    describe('calculateToHit test suite', function() {
        
    });
      
    describe('calculateToBeHit test suite', function() {
        it('', function() {
            var c = new Combat(dice);
            var thac0 = 10;
            var armorClass = 0;
                        
            var actual = c.calculateToBeHit(thac0, armorClass);
            var expected = 10;
            
            expect(actual).toBe(expected);
        });
        
        it('>', function() {
            var c = new Combat(dice);
            var thac0 = 10;
            var armorClass = 5;
                        
            var actual = c.calculateToBeHit(thac0, armorClass);
            var expected = 5;
            
            expect(actual).toBe(expected);
        });
        
        it('<', function() {
            var c = new Combat(dice);
            var thac0 = 10;
            var armorClass = -5;
                        
            var actual = c.calculateToBeHit(thac0, armorClass);
            var expected = 15;
            
            expect(actual).toBe(expected);
            
        });
        
    });
  
    describe('toHit test suite: ', function() {
        describe('testing defaults: ', function() {
            it('using all defaults toHit should be false', function() {
                var c = new Combat(dice);
            
                var actual = c.toHit(null, null, null, null, null);
                var expected = false;
            
                expect(actual).toBe(expected);
            });
            
            it('with toHitRoll = 10 and all others default, should be true', function() {
                var c = new Combat(dice);
            
                var actual = c.toHit(10, null, null, null, null);
                var expected = true;
            
                expect(actual).toBe(expected);
            });

            it('with toHitRoll = 9 and all others default, should be false', function() {
                var c = new Combat(dice);
            
                var actual = c.toHit(9, null, null, null, null);
                var expected = false;
            
                expect(actual).toBe(expected);
            });
        });

    });
});
