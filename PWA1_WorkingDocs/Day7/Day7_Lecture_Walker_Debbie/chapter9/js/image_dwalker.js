//Debbie Walker

console.log("Debbie's Images Game-Event Application");
document.write("<br>" + "Debbie's Images Game-Event Application");

window.onload = init;           //telling js to wait until page is fully loaded

/*function init(){               // setting up event handler for window.onload event
    var image = document.getElementById("img");//declaring variable to hold Element Id
    image.onclick = showAnswer; //telling js to call "showAnswer" event handle...when user clicks on image
};
*/

function init(){
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }
}


/*function showAnswer() {         //declaring function for showing answer to user
    var image = document.getElementById("one");//getting access to Image Element Id again
    image.src = "one.jpg";     //Changing source of Image Element on HTML page
}
    */

function showAnswer(eventObject) {         //declaring function for showing answer to user
    var image = eventObject.target;     //declaring var to hold target of Element that TRIGGERED Event
    var name = image.id;                //using name of target Element to grab ID property
    name = "images/" + name + ".jpg";      //attaching file extension to end of image name
    image.src = name;                   //changing source of image to name
}


//TIMER build each image answer as it gets clicked on...

function showAnswer(eventObject){       //declaring function
    var image = eventObject.target;
    var name = image.id;
    name = "images/" + name + ".jpg";
    image.src = name;
    setTimeout(reblur, 2000, image);
}

function reblur(image){
    //var image = image.target;
    var name = image.id;
    name = "images/" + name + "blur.jpg";
    image.src = name;
}