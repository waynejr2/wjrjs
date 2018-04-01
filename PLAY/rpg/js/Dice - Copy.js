/* global module */

module.exports = (function () {
  'use strict';
  var random;

  function Dice(random) {
    this.init(random);
  }

  Dice.prototype.init = function (random) {
	this.random = random || Math.random
  };
  
  Dice.prototype.d20 = function() {
		var max = 20;
		var min = 1;
		//return Math.floor(this.random() * (max - min)) + min;
		return this.roll(min, max);
	};
	
	Dice.prototype.d6 = function() {
		var max = 6;
		var min = 1;
		//return Math.floor(this.random() * (max - min)) + min;
		return this.roll(min, max);
	};
	
	Dice.prototype.roll = function(min, max) {		
		return Math.floor(this.random() * (max - min)) + min;
	};

  return Dice;
}());
