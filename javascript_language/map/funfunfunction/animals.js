

var animals = [
    { name: 'fluffykins',   species: 'rabbit'},
    { name: 'Caro',         species: 'dog'},
    { name: 'Hamilton',     species: 'dog'},
    { name: 'Harold',       species: 'fish'},
    { name: 'Ursula',       species: 'cat'},
    { name: 'Jimmy',        species: 'fish'}
]

var names = animals.map(function(animal) { return animal.name })
console.log(names)

var names = animals.map((animal) => { return animal.name })
console.log(names)

var names = animals.map((animal) => animal.name)  //must be single line function per fun fun function.
console.log(names)

var names = []; for(var i = 0; i<animals.length; i++) { names.push(animals[i].name )}
console.log(names)

//note: standardly, per fun fun function, people go shorter by doing this:
var names = animals.map((x) => x.name)
console.log(names)