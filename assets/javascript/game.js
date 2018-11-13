
// make a function that reads if they got to the target number, and if so, increase wins by 1
// maybe in the same function use an if else statement to increase losses by 1 if they go over
// if (invisiblenumber === targetnumber) 
// increase wins by 1

// else if (invisiblenumber exceeds targetnumber)
// increase losses by 1

// else keep waiting?


// at the beginning of the game, those numbers randomly out of the Array, and assign that value to the gems for the rest of the game

// targetnumber needs to be compared to invisiblenumber
// invisiblenumber increases by the amount assigned to each gem
// every time a gem is clicked, call the other function that runs that if else statement to compare to targetnumber
$(document).ready(function () {

    var targetNumber;
    var gameNumber = 0;
    var gemNumbers = [];
    var gem1 = 1;
    var wins = 0;
    var losses = 0;
    var resetSwitch = false;

    gameStart();

    function gameStart() {
        gemNumbers = [];
        gameNumber = 0;
        $(".score-number").text(gameNumber);

        function randomInterger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        for (var i = 0; i < 3; i++) {
            gemNumbers.push(randomInterger(2, 15));
        };
        console.log(gemNumbers);

        if (resetSwitch) {
            resetSwitch = false;
            wins = 0;
            losses = 0;
            gameStart
        };

        targetNumber = randomInterger(40, 100);
        console.log(targetNumber);
        $(".randomnumber").text(targetNumber);

        $(".wins").text("Wins: " + wins);
        $(".losses").text("Losses: " + losses);


    };

    function addBlueToGame() {
        gameNumber = gameNumber + gem1;
        $(".score-number").text(gameNumber);
        winLoseCheck();
    };
    function addRedToGame() {
        gameNumber = gameNumber + gemNumbers[0];
        $(".score-number").text(gameNumber);
        winLoseCheck();
    };
    function addYellowToGame() {
        gameNumber = gameNumber + gemNumbers[1];
        $(".score-number").text(gameNumber);
        winLoseCheck();
    };
    function addGreenToGame() {
        gameNumber = gameNumber + gemNumbers[2];
        $(".score-number").text(gameNumber);
        winLoseCheck();
    };

    $("#blue").on("click", addBlueToGame);
    $("#red").on("click", addRedToGame);
    $("#yellow").on("click", addYellowToGame);
    $("#green").on("click", addGreenToGame);
    $("#restartGame").on("click", reset);

    function reset() {
        resetSwitch = true;
        gameStart();
    }

    function winLoseCheck() {
        if (targetNumber === gameNumber) {
            wins = wins + 1;
            gameStart();
        }
        else if (gameNumber > targetNumber) {
            losses = losses + 1;
            gameStart();
        };
    };
});