/*Debbie Walker*/

var access = document.getElementById("code9");
var code = access.innerHTML; 
code = code + " midnight"; 
alert(code);


/*var access =
    document.getElementById("code9"); //gives you access to the object
var code = access.innerHTML;//innerHTML property to gets access to the content to variable

code = code + " midnight";
alert(code); // code alerts with the passcode contained in the variable code

*/

var myGreenText = document.getElementsByClassName("mygreentext");
myGreenText.innerHTML = "Red Alert: hit by phaser fire!";