// Psuedo Codde
// 1. document ready, 
//2. create variables 
//3. math.random for 4 crystal pics
//4. dispaly total wins losses ect,
// 5. create 4 functions and a function reset
// if user wins = win = add ome number to win
// else user losses = lose = add number to lose
// after win or lose, make reset



$(document).ready(function() {

    var targetnumber = math.floor(math.random);
    var wins = 0;
    var losses = 0;
    var usertotal = 0;
    var counter = 0;
    var guesses = ("");
    var num1 = math.floor(math.random) * 10;
    var num2 = math.floor(math.random) * 5;
    var num3 = math.floor(math.random) * 2;
    var num4 = math.floor(math.random) * 1;
    var numberOptions = [num1, num2, num3, num4];



    function reset() {
        numberOptions = 0;
        counter = 0;
    }

    $("#one").on("click", function() {
        $("#totalNumber").text(counter);
        if (conter === targetnumber) {
            alert("you win");
            wins++;
        } else if (counter >= targetnumber);
        alert("you lost");
        losses++;
        $("")
        reset();
    });

    $("#two").on("click", function() {
        $("#totalNumber").text(counter);
        if (conter === targetnumber) {
            alert("you win");
            wins++;
        } else if (counter >= targetnumber);
        alert("you lost");
        losses++;
        reset();
    });

    $("#three").on("click", function() {
        $("#totalNumber").text(counter);
        if (conter === targetnumber) {
            alert("you win");
            wins++;
        } else if (counter >= targetnumber);
        alert("you lost");
        losses++;
        reset();
    });

    $("#four").on("click", function() {
        $("#totalNumber").text(counter);
        if (conter === targetnumber) {
            alert("you win");
            wins++;
        } else if (counter >= targetnumber);
        alert("you lost");
        losses++;
        reset();

    });
});