
// -------This constructor module manages letters -------


//Require the word constructor
var Word = require("./word_constructor.js");

//Letter constructor
var Letter = function() {
	
	var newWord = new Word();

	this.newWord = function() {
		console.log(newWord.word);
	}

	this.newWordArray = function() {
		var newWordArray = newWord.array();
		return newWordArray;
	}

	this.newWordBlanks = function() {
		var newWordBlanks = newWord.blanks(this.newWordArray());
		return newWordBlanks;
	}
};

//Export the constructor as a module
module.exports = Letter;