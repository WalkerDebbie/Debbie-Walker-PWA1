/*
 Name: Debbie Walker
 Date: January 2015
 Assignment: Goal1: Assignment: Debug
*/

// 14 total errors
(function(){ //self executing function

	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"); 	// changed comma to semi-colon
		searchInput = document.forms[0].search; 			// changed comma to semi-colon
		currentSearch = ''; 								// moved semi-colon up a line

	// Validates search query
	var validate = function(query){ 						// ixed validqte (typo) to validate

		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){						// added == to make it absolute
			query = query.substring(1, query.length);		// function and parameters for checking an arrays length
		};
		while(query.charAt(query.length-1) === "") {			// while loop; if query class .charAt is absolutely 0
			query = query.substring(0, query.length - 1);		// loop through an array .substring the length of the query - 1
		};													// removed extra semi-colon

		// Check search length, must have 3 characters
		if(query.length < 3){								// if  statement (boolean) array's length < 3
			alert("Your search query is too small, try again."); // 7) added closing quote

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();							// calling searchInput.focus() function
			return;											// returning function
		};													// closing curly braces for if statement

		search(query);										// invoking query
	};														// closing function

	// Finds search matches
	var search = function(query) {							// search function query


		// split the user's search query string into an array
		var queryArray = query.split(" ");					//**********fixed .join to .split //at 36:32 - 42  Screen Cast video #3 ( this method/function variable.split(" ") splits a string into an array !!!!!!!!

		// array to store matched results from database.js
		var results = [];									// undefined array

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){				// for loop

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');			// variable dbTitleEnd indexes a movie title
			var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd);    //fixing camel case in toLowerCase() method

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){		// for loop declares variables in syntax plus pulls array.length
				var qItem = queryArray[ii].toLowerCase();		//fixing camel case in toLowerCase() method - variable item

				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qItem);			// define variable
				if(compare !== -1){							// if statement; if compare is not less than 1
					results.push(db[i]);					// prints and pushes a new item into the array db
				};											// ending curly braces for the embedded for loop
			};												// ending curly braces for the for loop
		};													// ending curly braces for the function(query)

		results.sort();										//function call to pull sorted results from function(query)

		// console.log("Am I getting to line 72?");  // this is my echo message to see how far the browser is reading my code

		// Check that matches were found, and run output functions
		if(results.length === 0){								// if statement ****** fixed the comparison symbol from = to ====
			noMatch();										// evokes the noMatch()
		}else{												// else syntax
			showMatches(results);							// prints the results from the showMatches function
		};													// closing curly braces for the for loop
	};														// closing curly braces for function
//console.log("Am I getting to line 81?");  // this is my echo message to see how far the browser is reading my code



	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){ 								// declaring variable noMatch with a value function() method
		var html = ''+										// declaring variable html and concatenating
			'<p>No Results found.</p>'+ 					// inline-css concatenation
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>' // inline-css concatenation
		;
		resultsDIV.innerHTML = html;						//
	};

	//console.log("Am I getting to line 94?");  // this is my echo message to see how far the browser is reading my code

	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){					// declaring variable

		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', 						// declaring in-line html variable
			title, 											// in-line html
			url;												// in-line html

		//console.log("Am I getting to line 103?");  // this is my echo message to see how far the browser is reading my code

		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){			// fixed the for loop syntax from  ( for(var i=0, j=results.length; i<j; i++){ )

			console.log("What is the value of results.length? " + results.length); // i=0 and j=0 so it never happens

			console.log("YES! My for loop working on line 111?");  // this is my echo message to see how far the browser is reading my code  ******** fixed the for loop

			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');				// pulling the title's string using index numbers
			title = results[i].substring(0, titleEnd);		// **** fixed camelcase - wrong use of caps, so not subString, but rather substring

			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);	// adds functionality to the url

			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';	// in-line html
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT. // posts result to div .innerHTML
	};

	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {      			// adds function to document forms array[0]
		var query = searchInput.value;						// adds input value to the query
		validate(query);									// fixed validate typo

		// return false is needed for most events - this will be reviewed in upcoming course material
		// THE LINE DIRECTLY BELOW IS CORRECT
		return false;										// return false
	};

})();
