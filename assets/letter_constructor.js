
// -------This constructor module manages letters -------


//Require the word constructor
var Word = require("./word_constructor.js");

//Letter constructor
var Letter = function() {

	//Set word variable
	var newWord = new Word();

	//Get the array
	var newWordArray = newWord.array();

	//Get the blanks
	var newWordBlanks = newWord.blanks(newWordArray);
	console.log(newWordBlanks.join(' '));

	var flag = false;

	this.compare = function(guess) {
		for (i = 0; i < newWordArray.length; i++){
			if (newWordArray[i] == guess){
				flag = true;
				newWordBlanks.splice(i,1,guess);
				console.log("Correct! Guess again: \n")
				console.log(newWordBlanks);
			} 
		}
	}

	if (flag === false){
		
	}	
}

//Export the constructor as a module
module.exports = Letter;
