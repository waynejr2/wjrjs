
const dragonEvents = [
    { type: 'attack', value: 12, target: 'player-dorkman' },
    { type: 'yawn', value: 40 },
    { type: 'eat', target: 'horse' },
    { type: 'attack', value: 23, target: 'player-fluffykins' },
    { type: 'attack', value: 12, target: 'player-dorkman' }
];


const reduceToTotals = (prev, x) => (prev || 0) + x
const isAttack = (e)  => e.type === 'attack'

const totalDamageOnDorkman = dragonEvents
    .filter(isAttack)
    .filter((e) => e.target === 'player-dorkman')
    .map((e) => e.value)
    .reduce(reduceToTotals)

/*    
const reduceToTotals = (prev, x) => (prev || 0) + x
const totalDamageOnDorkman = dragonEvents
    .filter((e) => e.type === 'attack')
    .filter((e) => e.target === 'player-dorkman')
    .map((e) => e.value)
    .reduce(reduceToTotals)
*/  

const totalDamageOnDorkman1 = dragonEvents
    .filter((event) => event.type === 'attack')
    .filter((event) => event.target === 'player-dorkman')
    .map((event) => event.value)
    .reduce((prev, value) => (prev || 0) + value)
    


const totalDamageOnDorkman2 = dragonEvents
    .filter(function(event){
        return event.type === 'attack'
    })
    .filter(function(event){
        return event.target === 'player-dorkman'
    })
    .map(function(event){
        return event.value
    })
    .reduce(function(prev, value){
        return (prev || 0) + value
    })
    
console.log('totalDamageOnDorkman:' + JSON.stringify(totalDamageOnDorkman))