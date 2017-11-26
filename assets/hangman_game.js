
// -------This code operates the front-end interface -------


//Require the letter constructor
var Letter = require("./letter_constructor2.0.js");

//Create the inquirer variable
var inquirer = require("inquirer");

//Initiates game start prompt
function initiate() {

	inquirer.prompt(
		[
			{
				type: "list",
				name: "playGame",
				message: "Would you like to play a game?",
				choices: ["Yes", "No"],
			}
		]
	).then(answers => 
		{
		switch(answers.playGame) {
			case "Yes":
				console.log("\n Let's Play! \n");
				startGame();
				break;
			case "No":
				console.log("\n Well, too bad... \n");
				startGame();
				break;	
		}

	}
	)
}

//Sets variables and initiates userInput function
function startGame() {
	var tries = 3;
	var word = new Letter();
	var wordArray = word.newWordArray();
	var wordBlanks = word.newWordBlanks();
	global.tries = tries;
	global.word = word;
	global.wordArray = wordArray;
	global.wordBlanks = wordBlanks;
	userInput();
}

//Accepts user guesses
function userInput() {
	inquirer.prompt(
		[
			{
				type: "input",
				name: "newGuess",
				message: "\nThe word is: "+wordBlanks.join(' ')+"\n \nGuess a letter:"
			},
		]
		//Processes user input variables
		).then(answers => {

			var flag = false;

			//Checks guesses against word array
			for (var i = 0; i < wordArray.length; i++) {
				if (wordArray[i].toUpperCase() == answers.newGuess.toUpperCase()) {
					flag = true;
					wordBlanks.splice(i,1,answers.newGuess);
					console.log("\nCorrect! Guess again: \n"+wordBlanks.join(' '));
				}
			}

			var solved = true;

			//Checks to see if game is solved
			for (var i = 0; i < wordBlanks.length; i++) {
				if (wordBlanks[i] === "_"){
					solved = false;
				}
			}

			//Notifies user if game is solved
			if (solved === true) {
				console.log("\nYou won!\n")

				initiate();

			//Notifies user if game is over
			} else if (flag === false && tries === 1) {
				console.log("\nYou lose!\n");

				initiate();

			//Notifies user of guess status
			} else if (flag === true) {
				console.log("\nNice! Tries remaining: "+tries);
				userInput();

			//Notifies user of guess status
			} else {
				tries--;
				console.log("\nWhoops! Tries remaining: "+tries);
				userInput();
			}
		})
}

//Starts the game
initiate();