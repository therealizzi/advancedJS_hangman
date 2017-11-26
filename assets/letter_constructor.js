
// -------This constructor module manages letters -------


//Require the word constructor
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

	//Converts array to blanks
	this.newWordBlanks = function() {
		var newWordBlanks = newWord.blanks(this.newWordArray());
		return newWordBlanks;
	}
};

//Export the constructor as a module
module.exports = Letter;