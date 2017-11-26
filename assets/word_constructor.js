
// -------This constructor module generates a random word-------


//Array of words
var words = ["Top Gun", "Sleepless in Seattle", "Glory", "Blues Brothers", "Back To The Future", "Home Alone", "Taxi", "Breakfast Club", "Philadelphia", "Fugitive"];

//Word constructor
var Word = function() {

	//Randomly chooses a word
	this.word = words[
		Math.floor(Math.random()*words.length)
	];
	
	//Turns word into an array
	this.array = function() {
		var array = Array.from(this.word);
		return array;
	};

	//Turns word array into blanks
	this.blanks = function(newWord) {
		var blankArray = [];
		for (i = 0; i < newWord.length; i++){
			if (newWord[i] == " "){
				blankArray.push(" ");
			} else {
				blankArray.push("_");
			}
		}
		return blankArray;
	};
}

//Export the constructor as a module
module.exports = Word;