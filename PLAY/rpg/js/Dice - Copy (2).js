/* global module */
// Dice.js
function Dice(width) {

    if (!(this instanceof Dice)) {
        return new Dice(width);
    }
  
    this.width = width;
};


    Dice.prototype.area = function area() {
        return Math.pow(this.width, 2);
    };


module.exports = Dice;