/*
    Midterm Exam for PWA-1
    NAME:Debbie Walker
    DATE:1-28-15
*/

(function(){  // CREATE SELF EXECUTING FUNCTION

i = 0; // DEFINE GLOBAL VARIABLE to count student objects during processing
var button = document.querySelector(".buttonred"); // SETUP GLOBAL BUTTON WITH DOM ELEMENT


// CREATE STUDENT ARRAY OF 2 OBJECTS
    var students = [
        {
             name: "Mickey Mouse",
             address: {street:"2015 Disney Lane", city: "Orlando", state: "FL"},
             gpa: [4.0, 3.75, 2.5],
             date: new Date()},
        {
            name: "Pluto",
            address: {street: "2016 Disney Drive", city: "Orland", state: "FL"},
            gpa: [4.5, 5.0, 4.0],
            date: new Date()
            }
];
var max = students.length; // Store total number of student objects  -- reset this to your_array_name.length!!

// CREATE FUNCTION TO CONSOLE.LOG OUT ALL STUDENT OBJECTS/INFO
    var consoleData = function(){
        var months= ["January", "February", "March", "April", "May", "June", "August", "September", "October", "November", "December"];

        for(var i=0; i<students.length; i++){
            console.log("Name: "+students[i].name);
            console.log("Address: "+students[i].address.street+", "
                +students[i].address.city+", "
                +students[i].address.state);
            console.log("GPA: "+students[i].gpa);
            console.log("Date: " + months[students[i].date.getMonth()]+" "
                +students[i].date.getDate()+","
                +students[i].date.getFullYear());
        }
    };

// CREATE FUNCTION TO DYNAMICALLY ADD A * NEW * STUDENT TO ORIGINAL ARRAY OF OBJECTS

var addData= function(newName, newStreet, newCity, newState, newGPA, newDate) {
    var newStudent = students.push({
        name: newName,
        address: {street: newStreet, city: newCity, state: newState},
        gpa: newGPA,
        date: newDate
    });
    return newStudent;
};

// CREATE FUNCTION TO READ THROUGH ARRAY OF GPAs and Calculate 'GPA AVERAGE' OF ALL GPAs
var calcAvg = function(array){
    sum=0;
    for(var i=0; i<array.length; i++){
        sum+=array[i];
    }
    avgGPA= sum/array.length; //run after the array to stop
    return avgGPA;
};

// CREATE FUNCTION TO DISPLAY HTML OF ALL STUDENT INFO
var displayData = function(){

    // Define DOM elements for HTML page/display
    //console.log("This is where you need to get access to your DOM Elements by ID");
    //var innerName = document.getElementById("name");
    var innerName = document.getElementById("name");
    var innerAddress = document.getElementById("address");
    var innerGPA = document.getElementById("gpa");
    var innerDate = document.getElementById("date");
    var innerAvgGPA = document.getElementById("gpaavg");

    // IF THE NUMBER of Student Objects LEFT OVER IS NOT = TO THE MAX+1, DISPLAY ANOTHER STUDENT
	if (i !== max+1){
        var months= ["January", "February", "March", "April", "May", "June", "August", "September", "October", "November", "December"];

        //console.log("This is where you need to get use innerHTML");

        innerName.innerHTML = "Name: " + students[i].name;
        innerAddress.innerHTML = "Address: " + students[i].address.street+", "
                                             + students[i].address.city+","
                                             + students[i].address.state;
        innerGPA.innerHTML = "GPA: " + students[i].gpa;
        innerDate.innerHTML = "Date: "  + months[students[i].date.getMonth()]+ " "
                                        + students[i].date.getDate()+ ", "
                                        + students[i].date.getFullYear();

        var avgGPA = calcAvg(students[i].gpa);
        innerAvgGPA.innerHTML = "Avg GPA: " +avgGPA.toFixed(2);


        // GET THE DATE - ONLY NEED THIS AFTER EVERYTHING ELSE HAS BEEN DISPLAYED
		// invoke gpaAvg function and pass all GPAs for average calculation (students[i.gpa)

    // Else change the button text to DONE
	}else{
		button.onclick = "return false"; //DISABLE THE CLICK EVENT
        document.querySelector('.buttonred').innerHTML = 'DONE!!!';  //CHANGE THE 1ST INSTANCE OF CLASS 'BUTTONRED' TEXT TO 'DONE'
	};
	i++ // Increment number of items after each student object is processed
	return false;
};

// ******** these are actions below (in this order)

// Create Button for click event
button.onclick = displayData;  // Every time the "NEXT" button is clicked, call the "displayData" function

// Print titles to Console.log showing original objects + Newly Added Objects
console.log('********* Below shows the original objects **************');
consoleData();  // Invoke Function that Console Logs out all the data
addData('Black Widow', '123 My Super Hero Way', 'Orlando', 'Florida', [3.2, 4.0, 2.2], new Date()); //********** un-comment ONCE I HAVE ADDED THE DATA
console.log(' ');
console.log('********* Below shows the new object added to the original object **************');
consoleData();  // Invoke Function that Console Logs out all the data a 2nd time
displayData();  // Invoke Function that prints Student Info to HTML page

})();  // end wrapper