/*
 Name: Debbie Walker	
 Date: January 2015
 Assignment: Goal1: Assignment: Duel1
*/




// self-executing function
(function(){ // this is a self calling function

    console.log("FIGHT!!!"); // output "FIGHT!!!"


    //player name
    var playerOneName = "Spiderman"; //  declare a variable for player 1 to be the value of "Spiderman"
    var playerTwoName = "Batman";  // declare a variable for player 2 to be the value of "Batman"

    //player damage
    var player1Damage = 20; //  declare a variable player 1 damage to be the value of 20
    var player2Damage = 20; // declare a variable player 2 damage to be the value of 20

    //player health
    var playerOneHealth = 100; // declare  a variable player 1 health to be the value 100
    var playerTwoHealth = 100; // declare a variable player 2 health to be the value 100

    var round=0; // declare the matching round to be a starting value of 0

    function fight(){ // this is a function called fight (it does not contain parameters)
        console.log ('in the fight function'); // output/print "in the fight function"

        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth); // alert  user Player 1, Health START Player 2, Health

        for (var i=0; i < 10; i++){ // for loop used to determine how much damage for each round 

            //random formula is - Math.floor(Math.random() * (max - min) + min);
           
           // nested "if/else" statments

            var minDamage1 = player1Damage * .5; // declare variable minDamage for player 1 to equal Player 1 damage * .5
            var minDamage2 = player2Damage * .5;  // declare variable minDamage for player 2 to equal Player 1 damage * .5
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1); // variable f1 holds the value of random numbers from player 1 damage (max - min) + min
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2); // variable f2 holds the value of random numbers from player 2 damage (max - min) + min
            //inflict damage
            playerOneHealth-=f1; // variable Player One Health -= f1
            playerTwoHealth-=f2; // varialbe Player Two Health -= f1

            console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth); // print Player 1's health and Player 2's health

            var results = winnerCheck(); // variable results  = winnerCheck function            
            console.log(results); // print the results of the round

            if (results === "no winner"){ // if statement - if there is no winner...
                round++; // round up 1
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER* "+playerTwoName+":"+playerTwoHealth); // alert the players that Player 1's health for previous rounds (#) is over and Player 2's health; players keep playing until round is false
            }else{ // else statement if the "if no winner" statement is false
                alert(results); // print results
                break; // break
            }; // closing curly braces for if/else statement

        }; // closing curly braces for the for loop

    }; // closing curly braces for the function "fight"

    function winnerCheck(){ // funciton winnerCheck
        console.log("in winnerCheck FN"); // print to console "in winnerCheck FN"

        var result="no winner"; // variable result = to value "no winner"

        if (playerOneHealth<1 && playerTwoHealth<1){ // if statement 
            result = "You Both Die"; // if true; print "You Both Die"
        } else if(playerOneHealth<1){ // or if Player 1's health is less than 1 (true)
            result =playerTwoName+" WINS!!!"; // print Player 2's (name) "WINS!!!"
        } else if(playerTwoHealth<1){ // of if Player 2's health < 1 (true)
            result =playerOneName+" WINS!!!"; // print "WINS!!!"
        }; // closing curly braces for the if statement

        return result; // console results

    }; // closing curly braces for the winnerCheck function

    /*******  The program gets started below *******/
    console.log('program starts') // console "program starts"
    fight(); // call to function fight

})(); // closing function