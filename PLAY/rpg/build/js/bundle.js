(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* global module */
//Combat.js

function Combat (dice) {
    'use strict';
    //var dice;
  	this.dice = dice;
};
    
    Combat.prototype.toHit = function(toHitRoll, attackBonus, weaponAdjustment, thac0, armorClass) {
        this.toHitRoll = toHitRoll || 0;
        this.attackBonus = attackBonus || 0;
        this.weaponAdjustment = weaponAdjustment || 0;
        this.thac0 = thac0 || 20;
        this.armorClass = armorClass || 10;
  
        this.toBeHit = this.calculateToBeHit(this.thac0, this.armorClass);
        this.toHit = this.calculateToHit(this.toHitRoll, this.attackBonus, this.weaponAdjustment);
  
        return this.didToHitSucceed(this.toHit, this.toBeHit);
    };
    
    //what about extremes? like tohit needing to be above 20? what do to if
    //calculations are >20 or < 1?  do we make them 20 or 1 in those cases?
    Combat.prototype.calculateToBeHit = function(thac0, armorClass) {
        return thac0 - armorClass;
    };
    
    Combat.prototype.calculateToHit = function(toHitRoll, attackBonus, weaponAdjustment) {
        return toHitRoll + attackBonus + weaponAdjustment;
    };
    
    Combat.prototype.didToHitSucceed = function(toHit, toBeHit) {
        var result = false;
        
        if (toHit >= toBeHit) {
            result = true;
        }
        
        return result;
    };
    
    


module.exports = Combat;
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
/* global module */

var Dice = require('./Dice');
var Combat = require('./Combat');

var hw = function() {
    console.log("Hello")
};

module.exports = hw;

var my_config = {
    "a": "b"
};

module.exports = my_config;
    

module.exports = (function () {
  'use strict';

    console.log("Hllo");
    hw();
    console.log(my_config);
    console.log(my_config.a);
    var s = new Dice();
    var c = new Combat(s);
    
//    console.log("Dice: " + s.area());
/*
    console.log("Dice: " + s.roll(100, 200));
    console.log("Dice.d6: " + s.d6());
    console.log("Dice.d20: " + s.d20());
*/
    
/*  
  var a = new Dice();
  
  console.log("typeof Dice.d20: " + typeof Dice.d20);
  console.log("typeof a: " + typeof a);
  console.log("typeof a.d20: " + typeof a.d20);
  console.log("Dice: " + Dice);
  console.log("window: " + window);
  
  console.log("a.d20= " + a.d20());
  */
  
  //var result = Dice.d20();
  //console.log(result);
}());  

},{"./Combat":1,"./Dice":2}]},{},[3]);
