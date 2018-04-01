/* global module */
// Dice.js
function Dice(random) {

    //if (!(this instanceof Dice)) {
    //    return new Dice(width);
    //}
  
    var random;
    this.random = random || Math.random;
    
};
    
	Dice.prototype.d6 = function() {
		var max = 6;
		var min = 1;
		//return Math.floor(this.random() * (max - min)) + min;
		return this.roll(min, max);
	};
    
    Dice.prototype.d10 = function() {
		var max = 10;
		var min = 1;
		//return Math.floor(this.random() * (max - min)) + min;
		return this.roll(min, max);
	};
  
    
    Dice.prototype.d12 = function() {
		var max = 12;
		var min = 1;
		//return Math.floor(this.random() * (max - min)) + min;
		return this.roll(min, max);
	};
	
    Dice.prototype.d20 = function() {
		var max = 20;
		var min = 1;
		//return Math.floor(this.random() * (max - min)) + min;
		return this.roll(min, max);
	};
	
	Dice.prototype.roll = function(min, max) {
		return Math.floor(this.random() * (max - min)) + min;
	};


module.exports = Dice;