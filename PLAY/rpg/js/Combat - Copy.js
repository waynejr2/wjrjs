/* global module */

module.exports = (function () {
  'use strict';
  var random;

  function Combat(random) {
    this.init(random);
  }

  Combat.prototype.init = function (random) {
	this.random = random || Math.random
  };
  
  Combat.prototype.d20 = function() {
		var max = 20;
		var min = 1;
		//return Math.floor(this.random() * (max - min)) + min;
		return this.roll(min, max);
	};
	
	Combat.prototype.d6 = function() {
		var max = 6;
		var min = 1;
		//return Math.floor(this.random() * (max - min)) + min;
		return this.roll(min, max);
	};
	
	Combat.prototype.roll = function(min, max) {		
		return Math.floor(this.random() * (max - min)) + min;
	};

  return Combat;
}());
