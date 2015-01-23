/*
	* Debbie Walker
	* Mid Terms for PWA-1
*/


//step 1: self-executing function - loads your first student

//step 2: define four global variables (2 students - DEB FILE THE REST OF THIS OUT

//step 3: array variable - contains the list of students

//step 4: create a for loop to pull the student

//step 5: put the student's information into an object, inside of an array

//step 6: console.log & document.write(var name [index#] + address[index#] + gpa[index#]

//step 7: set a variable for the button with a for loop -  ( var button = myarry.length )

//step 8: on-press activates loop through the array for each student

//step 9: console.log & document.write

//step 10: inside of for loop, for/while loop through student's object list

//step 11: once the final student has been reached, end the loop

// ************* change to for loop
//************** remove cornet function
//replace it with click on (from chapter 6 textbook files)
//add push function???
//add self-executing function
//add break to loop so students stop looping - or for loop may take care of this


var students = {                                    //declare variable students
    name: ["Greg", "Tommy", "Stew"],           //create an object/array to contain name, address, GPA
    address: ["1504 Stratton Drive, Rogers AR", "750 Jamestown Dr, Winter Park FL", "2010 Newport Rd Semi Valley CA"],                         //object array for address
    GPA: [4.0, 3.9, 3.2]                       //object array for GPAs
};

var i = 0;                                      //variable counter
var averageGPA = 0;
console.log(averageGPA);

    function dataBase() {                            //student's data function
        //alert("1,2,3"); testing for error
        while (i < students.name.length) {           //when i (which starts at 0 index) it goes up 1(index) until it reaches the number of students, then it stops
            console.log(students.name[i]);          //returning the student's name, starting with index 0
            console.log(students.address[i]);       //"                      " address "                  "
            console.log(students.GPA[i]);           //"                      " GPA     "                  "

            averageGPA = averageGPA + students.GPA[i];  //math equation averages the GPA by taking each index's GPA, adding them together and dividing by their number - you have to loop through the array in order to get the group average, so mathAverage wouldn't work

            /** var htmlFunction = document.getElementById("gpaavg");
             htmlFunction.innerHTML = ""; //don't call the GPA average, so that it does not display before
             }
             **/

        var htmlFunction = document.getElementById("name");
        htmlFunction.innerHTML = "Student Name: " + students.name[i];
        htmlFunction = document.getElementById("address");
        htmlFunction.innerHTML = "Address: " + students.address[i];
        htmlFunction = document.getElementById("gpa");
        htmlFunction.innerHTML = "Student GPA: " + students.GPA[i].toFixed();

        if (i === students.name.length - 1) {           //using the if statement - if i is absolutely when the index is equal to two, but the length is equal to three, you minus one
            console.log("The student you are looking up is: " + averageGPA / students.name.length);
            htmlFunction = document.getElementById("gpaavg");
            htmlFunction.innerHTML = "Class Average GPA: " + averageGPA  / students.name.length;

            //at this point in code you are back to index 0 and the loop starts over

            averageGPA = 0;
            i = 0;
            break;

        } else {
            i++;
            break;
        };

    };

};





