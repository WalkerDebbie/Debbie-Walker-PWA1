console.log("Debbie Walker");
document.write("Debbie Walker");

/*

var access = document.getElementById("code9");
var code = access.innerHTML; 
code = code + " midnight"; 
alert(code);


var access =
    document.getElementById("code9"); //gives you access to the object
var code = access.innerHTML;//innerHTML property to gets access to the content to variable

code = code + " midnight";
alert(code); // code alerts with the pass code contained in the variable code

*/

function init() {
    var myGreenText = document.getElementById("mygreentext");                  //pullsmygreentext varliable
    myGreenText.innerHTML = "Green Alert: hit by phaser fire!";                //calls the html var
    myGreenText.setAttribute("class", "greentext");

    var myRedText = document.getElementById("myredtext");                  //pullsmygreentext varliable
    myRedText.innerHTML = "Red Alert: hit by phaser fire!";                //calls the html var
    myRedText.setAttribute("class", "redtext");

    var myBlueText = document.getElementById("mybluetext");                  //pullsmygreentext varliable
    myBlueText.innerHTML = "Blue Alert: hit by phaser fire!";                //calls the html var
    myBlueText.setAttribute("class", "bluetext");

    var Apples = document.getElementById("greenheader");                //changing the getElementId to greenheader overwrites the previous code in this sequential code function
    Apples.innerHTML = "Green Planet";
    Apples.setAttribute("class", "greentext");

    var myRedHeader = document.getElementById("redheader");
    myRedHeader.innerHTML = ("Red Planet");
    myRedHeader.setAttribute("class", "redtext");

    var myBlueHeader = document.getElementById("blueheader");
    myBlueHeader.innerHTML = "Blue Planet";
    myBlueHeader.setAttribute("class", "bluetext");
}
window.onload = init; // wrapping a variable into a method to call it will force the DOM to recognize this first


