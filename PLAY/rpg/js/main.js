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
