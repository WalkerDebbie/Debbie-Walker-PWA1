/**
 * Created by debbiewalker on 1/14/15.
 */

document.write("Debbie Walker");

/*
function makePhrases() {
 var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
 var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
 var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

 var rand1 = Math.floor(Math.random() * words1.length);
 var rand2 = Math.floor(Math.random() * words2.length);
 var rand3 = Math.floor(Math.random() * words3.length);

 var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
 alert(phrase);
 }
 makePhrases();
 */

/*function makePhrases() {
    var words1 = {key1:"24/7", key2:"multi-tier", key3:"30,000 foot", key4:"B-to-B", key5:"win-win"};
    var words2 = {key1:"empowered", key2:"value-added", key3:"oriented", key4:"focused", key5:"aligned"};
    var words3 = {key1:"process", key2:"solution", key3:"tipping-point", key4:"strategy", key5:"vision"};

    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);

    var phrase = words1.rand1 + " " + words2.rand2 + " " + words3.rand3;
    alert(phrase);


}
makePhrases();
*/

function makePhrases() {
    var words1 = {key1: "24/7", key2: "multi-tier", key3: "30,000 foot", key4: "B-to-B", key5: "win-win"};
    var words2 = {key1: "empowered", key2: "value-added", key3: "oriented", key4: "focused", key5: "aligned"};
    var words3 = {key1: "process", key2: "solution", key3: "tipping-point", key4: "strategy", key5: "vision"};

    //Changed equation to multiply by Length of Objects --- instead of arrays
    //Also added plus 1 to avoid getting a "key0"
    //Won't work: var rand1 = Math.floor(Math.random() * words1.length):
    //var rand1 = Math.floor(Math.random() * words1.length); // ARRAY

    var rand1 = Math.floor(Math.random() * Object.keys(words1).length) + 1;
    var rand2 = Math.floor(Math.random() * Object.keys(words2).length) + 1;
    var rand3 = Math.floor(Math.random() * Object.keys(words3).length) + 1;

    //ADDED: Build random keys for each object

    var randomKey1 = "key" + rand1;
    var randomKey2 = "key" + rand2;
    var randomKey3 = "key" + rand3;

    var phrase = "Your Random Phrase is: " + words1[randomKey1] + " " + words2[randomKey2] + " " + words3[randomKey3];

    alert(phrase);
    console.log("Your Random Phrase is: " + words1[randomKey1] + " " + words2[randomKey2] + " " + words3[randomKey3]);
    console.log(randomKey1, " of words1 is: ", words1[randomKey1]);
    console.log(randomKey1, " of words2 is: ", words2[randomKey2]);
    console.log(randomKey1, " of words3 is: ", words3[randomKey3]);

    document.write("<br>" + randomKey1, " of words1 is: " + words1[randomKey1]);
    document.write("<br>" + randomKey1, " of words2 is: " + words2[randomKey2]);
    document.write("<br>" + randomKey1, " of words3 is: " + words3[randomKey3]);


};

makePhrases();
