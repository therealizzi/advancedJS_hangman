
// ------- This is a letter constructor -------


//Initiate word constructor
var Word = require("./word_constructor.js");

//Letter constructor
var Letter = function() {
	
	var newWord = new Word();

	//Creates a new word
	this.newWord = function() {
		console.log(newWord.word);
	}

	//Makes word into an array
	this.newWordArray = function() {
		var newWordArray = newWord.array();
		return newWordArray;
	}

	//Converts word array to blanks
	this.newWordBlanks = function() {
		var newWordBlanks = newWord.blanks(this.newWordArray());
		return newWordBlanks;
	}
};

//Exports the constructor as a module
module.exports = Letter;