window.addEventListener('load', function() {
  console.log('All assets are loaded');
  console.log(game);
  console.log(game.roll());
  console.log(game.roll());
  console.log(game.roll());
  console.log(game.roll());
  console.log(game.roll());
  console.log("fun next");
  console.log(game.randomIntFromInterval(1,6));
  console.log("did it work?");
})

var game = (function() {

    // object to expose as public properties and methods such as game.roll
    var pub = {};

    //game.roll
    pub.roll = function () {
        //do your thing
        return randomIntFromInterval(1,6);
    };

    function randomIntFromInterval(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }

  //API
  return pub;
}());