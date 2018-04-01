

var animals = [
    { name: 'fluffykins',   species: 'rabbit'},
    { name: 'Caro',         species: 'dog'},
    { name: 'Hamilton',     species: 'dog'},
    { name: 'Harold',       species: 'fish'},
    { name: 'Ursula',       species: 'cat'},
    { name: 'Jimmy',        species: 'fish'}
]

var isDog = function(animal) {
    return (animal.species === 'dog');
}
var noDog = function(animal) {
    return (animal.species !== 'dog');
}

var dogs = animals.filter(isDog)
var otherAnimals = animals.filter(noDog)

console.log("dogs: " + dogs)
console.log("other: " + otherAnimals)