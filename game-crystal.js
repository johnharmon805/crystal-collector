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

    var targetnumber = Math.floor(Math.random() * 100);
    var wins = 0;
    var losses = 0;
    var usertotal = 0;
    var counter = 0;
    var guesses = ("");
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 5) + 1;
    var num3 = Math.floor(Math.random() * 2) + 1;
    var num4 = Math.floor(Math.random() * 1) + 1;
    var numberOptions = [num1, num2, num3, num4];
    console.log(numberOptions)

    $("#number-to-guess").text(targetnumber);

    function reset() {
        numberOptions = 0;
        counter = 0;
        targetnumber = Math.floor(Math.random() * 100);
        $("#totalNumber").text(counter);
        $("#number-to-guess").text(targetnumber);

    }

    $("#one").on("click", function() {
        counter = counter + num1;
        $("#totalNumber").text(counter);
        if (counter === targetnumber) {
            alert("you win");
            wins++;
            reset();
        } else if (counter >= targetnumber) {
            alert("you lost");
            losses++;
            reset();
        }

    });

    $("#two").on("click", function() {
        counter = counter + num2;
        $("#totalNumber").text(counter);
        if (counter === targetnumber) {
            alert("you win");
            wins++;
            reset();
        } else if (counter >= targetnumber) {
            alert("you lost");
            losses++;
            reset();

        }

    });

    $("#three").on("click", function() {
        counter = counter + num3;
        $("#totalNumber").text(counter);
        if (counter === targetnumber) {
            alert("you win");
            wins++;
            reset();
        } else if (counter >= targetnumber) {
            alert("you lost");
            losses++;
            reset();
        }

    });

    $("#four").on("click", function() {
        counter = counter + num4;
        $("#totalNumber").text(counter);
        if (counter === targetnumber) {
            alert("you win");
            wins++;
            reset();
        } else if (counter >= targetnumber) {
            alert("you lost");
            losses++;
            reset();
        }


    });
});