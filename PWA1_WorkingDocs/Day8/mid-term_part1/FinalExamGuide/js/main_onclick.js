/*
    Midterm Exam for PWA-1
    NAME:
    DATE:
*/

(function(){  // CREATE SELF EXECUTING FUNCTION

i = 0; // DEFINE GLOBAL VARIABLE to count student objects during processing
var button = document.querySelector(".buttonred"); // SETUP GLOBAL BUTTON WITH DOM ELEMENT



// CREATE STUDENT ARRAY OF 2 OBJECTS



var max = 1; // Store total number of student objects  -- reset this to your_array_name.length!!


// CREATE FUNCTION TO CONSOLE.LOG OUT ALL STUDENT OBJECTS/INFO


// CREATE FUNCTION TO DYNAMICALLY ADD A * NEW * STUDENT TO ORIGINAL ARRAY OF OBJECTS



// CREATE FUNCTION TO READ THROUGH ARRAY OF GPAs and Calculate 'GPA AVERAGE' OF ALL GPAs


// CREATE FUNCTION TO DISPLAY HTML OF ALL STUDENT INFO
var displayData = function(){

    // Define DOM elements for HTML page/display
    console.log("This is where you need to get access to your DOM Elements by ID");
    var innerName = document.getElementById("name");


    // IF THE NUMBER of Student Objects LEFT OVER IS NOT = TO THE MAX+1, DISPLAY ANOTHER STUDENT
	if (i !== max+1){

        console.log("This is where you need to get use innerHTML");
        innerName.innerHTML = 'NAME:  ' + "my_array_name[i].uname";

		// GET THE DATE - ONLY NEED THIS AFTER EVERYTHING ELSE HAS BEEN DISPLAYED

		
		// invoke gpaAvg function and pass all GPAs for average calculation (students[i].gpa)


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
console.log('********* Below shows the original objects **************')
// consoleData();  // Invoke Function that Console Logs out all the data
// addData('Black Widow', '123 My Super Hero Way', 'Orlando', 'Florida', [3.2, 4.0, 2.2], new Date()); ********** un-comment ONCE I HAVE ADDED THE DATA
console.log(' ');
console.log('********* Below shows the new object added to the original object **************')
// consoleData();  // Invoke Function that Console Logs out all the data a 2nd time
// displayData();  // Invoke Function that prints Student Info to HTML page

})();  // end wrapper