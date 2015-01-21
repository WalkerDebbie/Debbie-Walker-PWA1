/*
 Name: Debbie Walker
 Date: January 2015
 Assignment: Chapter 4: Car-O-Matic
 */

//NUMBER 1:  THIS IS A MIX OF OBJECTS AND ARRAYS

// These are global variables
/*
    var makes = ["Ford", "Honda", "Satern", "Chevy", "Fiat"];
    var models = ["Contour", "Civic", "150", "Accord", "Torpedo"];
    var years = [1955, 2000, 1965, 1976, 1984];
    var colors = ["purple", "blue", "green", "yellow", "orange"];
    var convertible = [true , false];

function makeCar() {

    var rand1 = Math.floor(Math.random() * makes.length);
    var rand2 = Math.floor(Math.random() * models.length);
    var rand3 = Math.floor(Math.random() * years.length);
    var rand4 = Math.floor(Math.random() * convertible.length);
    var rand5 = Math.floor(Math.random() * 5) + 1;
    var rand6 = Math.floor(Math.random() * 2);

    var car = {
        make: makes [rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: [rand5],
        convertible: convertible[rand6],
        mileage: 0
    };
    return car;
} makeCar();

    function displayCar(car){
        console.log("Congratulations! Your new car is a " + car.year  + " " + car.make + " " + car.model);
        alert("Congratulations! Your new car is a " + car.year + " " + car.make + " " + car.model);
        document.write("<br>" + "Congratulations! Your new car is a " + car.year.toString() + " " + car.make + " " + car.model);


        console.log(car.make + " Came from this array of choices: " + makes);
        document.write("<br>" + car.make + " Came from this array of choices: " + makes);

        console.log(car.model + " Came from this array of choices: " + models);
        document.write("<br>" + car.model + " Came from this array of choices: " + models);

        console.log(car.year + " Came from this array of choices: " + years);
        document.write("<br>" + car.year + " Came from this array of choices: " + years);

        console.log(car.color + " Came from this array of choices: " + colors);
        document.write("<br>" + car.color + " Came from this array of choices: " + colors);

    }
    var carToSell = makeCar();
    displayCar(carToSell);
*/

//NUMBER 2:  THIS IS AN EXAMPLE OF OBJECTS

// These are global variables
var makes = {               //you create an object variable using this syntax var name = { keyIdentifier : value }
    key1 : "Ford",          //you use a comma " , " after each variable
    key2 : "Honda",
    key3 : "Tucker",
    key4 : "Chevy",
    key5 : "Fiat"
};
var models = {
    key1 : "Cadillac",
    key2 : "Civic",
    key3 : "150",
    key4 : "Accord",
    key5 : "Torpedo"
};
var years = {
    key1 : 1955,
    key2 : 2000,
    key3 : 1965,
    key4 : 1976,
    key5 : 1984
};
var colors = {
    key1 : "purple",
    key2 : "blue",
    key3 : "green",
    key4 : "yellow",
    key5 : "orange"
};
var convertible = {
    key1 : true,
    key2 : false
};


function makeCar() {//this function pulls the declared global object variables listed directly above - running the code it returns random properties by randomly choosing a key from each object's list

    var rand1 = Math.floor(Math.random() * Object.keys(makes).length)+1;
    var rand2 = Math.floor(Math.random() * Object.keys(models).length)+1;
    var rand3 = Math.floor(Math.random() * Object.keys(years).length)+1;
    var rand4 = Math.floor(Math.random() * Object.keys(convertible).length)+1;
    var rand5 = Math.floor(Math.random() * 5) + 1;
    var rand6 = Math.floor(Math.random() * 2);

    var randomKey1 = "key" +rand1;
    var randomKey2 = "key" +rand2;
    var randomKey3 = "key" +rand3;
    var randomKey4 = "key" +rand4;
    var randomKey5 = "key" +rand5;
    var randomKey6 = "key" +rand6;

    var car = {
        make: makes[randomKey1],
        model: models[randomKey2],
        year: years[randomKey3],
        color: colors[randomKey4],
        passengers: randomKey5,
        convertible: convertible[randomKey6],
        mileage: 0
    };
    return car;
};
//makeCar();

function displayCar(car){
    console.log("Congratulations! Your new car is a " + car.year + " " + car.make + " " + car.model + "!");
    alert("Congratulations! Your new car is a " + car.year + " " + car.make + " " + car.model + "!");
    document.write("<br>" + "Congratulations! Your new car is a " + car.year + " " + car.make + " " + car.model + "!");

    console.log("MAKES has this many keys: " + Object.keys(makes).length);
    document.write("<br>" + "MAKES has this many keys: " + Object.keys(makes).length);

    console.log("MODELS has this many keys: " + Object.keys(models).length);
    document.write("<br>" + "MODELS has this many keys: " + Object.keys(models).length);

    console.log("YEARS has this many keys: " + Object.keys(years).length);
    document.write("<br>" + "YEARS has this many keys: " + Object.keys(years).length);

    console.log("COLOR has this many keys: " + Object.keys(colors).length);
    document.write("<br>" + "COLOR has this many keys: " + Object.keys(colors).length);

    console.log("CONVERTIBLE has this many keys: " + Object.keys(convertible).length);
    document.write("<br>" + "CONVERTIBLE has this many keys: " + Object.keys(convertible).length);

}
var carToSell = makeCar();
displayCar(carToSell);


for(var key in car) {
    document.write("<br>", "For in Loop Results: ", car[key]);
};
}



