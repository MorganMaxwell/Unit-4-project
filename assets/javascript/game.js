// make a randnumgen between 30-100, call it targetnumber
// make a function that reads if they got to the target number, and if so, increase wins by 1
// maybe in the same function use an if else statement to increase losses by 1 if they go over
// if (invisiblenumber === targetnumber) 
// increase wins by 1

// else if (invisiblenumber exceeds targetnumber)
// increase losses by 1

// else keep waiting?


// then make an array of four numbers
// one of them HAS TO BE 1, OR ELSE THE GAME CANNOT GUARANTEE A WIN EACH TIME
// the other three can be random numbers between 2-15;
// at the beginning of the game, those numbers randomly out of the Array, and assign that value to the gems for the rest of the game

// targetnumber needs to be compared to invisiblenumber
// invisiblenumber increases by the amount assigned to each gem
// every time a gem is clicked, call the other function that runs that if else statement to compare to targetnumber

var targetNumber;
var invisibleNumber;
var gemNumbers = [];
var gem1 = 1;
var gem2 = gemNumbers[0];
var gem3 = gemNumbers[1];
var gem4 = gemNumbers[2];


function randomInterger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
for (var i = 0; i < 3; i++) {
    gemNumbers.push(randomInterger(2, 15));
};
console.log(gemNumbers);

