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