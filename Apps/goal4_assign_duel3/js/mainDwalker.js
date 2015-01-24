/**
 * Created by debbiewalker on 1/23/15
 * PWA1 Goal1: Assignment: Duel1
 */

(function(){ //self-executing function

    console.log("** FIGHT **"); //Print title to console.log
    document.write("<br>" + " ** FIGHT ** ");

    //DEFINE YOUR dom pieces; multiple ways to define/access HTML tags
    var fighter1_txt = document.querySelector("#ww").querySelector("p"); //You don't need a # if using getElementByID, but you do if you use document.querySelector
    var fighter2_txt = document.querySelector("#qh").querySelector("p");//you don't need a # if using querySelector
    var round_txt = document.querySelector("h5"); //document.querySelector("") allows you to select a class and change aspects about it - like color
    var button = document.getElementById("fight_btn"); //Pull in main button that start the game

button.addEventListener("click",fight, false);

//CREATE ARRAY OF OBJECT FOR 2 FIGHTERS
var fighters = [
    {
        name:"Wonder Woman", //index0.name or index[0] with object-key "name" = Wonder Woman
        damage:20, // index0.damage
        health:100 // index0.health
    },
    {
        name:"Queen of Hearts", //"     "
        damage:20, // "      "
        health:100 // "      "
    }];

   var round = 1;

    //INITIALIZE DOM innerHTML text for top of HTML page
    round_txt.innerHTML = "Click FIGHT BUTTON to start!";
    fighter1_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;
    fighter2_txt.innerHTML =fighters[1].name + ":  " + fighters[1].health;

    /* REMOVE OLD JS FUNCTION, but need the belowif we use addEventListener in line 15 above.
     function onClick(){
         fight();
     } */

    //CREATE "FIGHT" FUNCTION
    function fight(){
        //alert(fighters[0].name + " : " + fighters[0].health" *START* "+fighters[1].name+":"+fighters[1].health;
        fighter1_txt.innerHTML = fighters[0].name + ": " + fighters[0].health;
        fighter2_txt.innerHTML = fighters[1].name + ": " + fighters[1].health;


        //determine damage
        var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);
        var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);

        //inflict damage
        fighters[0].health -= f1;
        fighters[1].health -= f2;

        console.log(fighters[0].health, fighters[1].health);

        //check for winner
        var result = winnerCheck();
        console.log(result);

        round_txt.innerHTML = "ROUND #" + round + " Results:";
        round++;
        if (result === "no winner"){
            fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
            fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
        }else{
            fighter1_txt.innerHTML = result;
            fighter2_txt.innerHTML = "";

            //Disable the button - need to below if using addEventListener
            button.removeEventListener("click", fight, false);
            //button.disabled = true;

            //button.onclick = "return false";
            document.querySelector('.buttonblue').innerHTML = 'DONE!!!!';
        }
    }

    function winnerCheck(){
        var result = "no winner";
        if (fighters[0].health < 1 && fighters[1].health <1) {
            result = "You Both Die! ** GAME OVER **";
        }else if (fighters[0].health < 1) {
            result = fighters[1].name + "WINS!!!"
        }else if (fighters[1].health < 1) {
            result = fighters[0].name + "WINS!!!"
        }
        return result;
    }

})();