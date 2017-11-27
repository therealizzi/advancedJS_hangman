
// ------- This code operates the front-end interface -------


//Initiate letter constructor
var Letter = require("./letter_constructor.js");

//Initiate inquirer package 
var inquirer = require("inquirer");

//Initiate chalk package (font colors)
var chalk = require('chalk');

//Initiates the user prompt
function initiateProgram() {

	inquirer.prompt(
		[
			{
				type: "list",
				name: "playGame",
				message: "Would you like to play Hangman Movies?",
				choices: ["Yes", "No"],
			}
		]
	).then(answers => 
		{ 
	
		//Confirms whether user wants to play or not
		switch(answers.playGame) {
			case "Yes":
				console.log("\n Let's Play! \n");
				setupGame();
				break;
			case "No":
				console.log("\n Well, too bad... \n");
				process.exit();
		}
	}
	)
}

//Sets up a new game
function setupGame() {

	//Sets new game variables
	var tries = 6;
	var word = new Letter();
	var wordArray = word.newWordArray();
	var wordBlanks = word.newWordBlanks();

	//Creates a global instance of each variable
	global.tries = tries;
	global.word = word;
	global.wordArray = wordArray;
	global.wordBlanks = wordBlanks;

	//Initiates new game
	newGame();
}

//Accepts user guesses
function newGame() {
	inquirer.prompt(
	[
		{
			type: "input",
			name: "newGuess",
			message: "\nThe movie is: "+wordBlanks.join(' ')+"\n \nGuess a letter:"
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
			console.log(chalk.green("\nYou won!\n \nThe answer is: "+wordBlanks.join('')+"\n"))
			initiateProgram();

		//Notifies user if game is over
		} else if (flag === false && tries === 1) {
			console.log(chalk.red("\nYou lose!\n \nThe answer was: "+wordArray.join('')+"\n"));
			initiateProgram();

		//Notifies user of guess status
		} else if (flag === true) {
			console.log(chalk.green("\nCorrect! Guesses remaining: "+tries));
			newGame();

		//Notifies user of guess status
		} else {
			tries--;
			console.log(chalk.red("\nWrong! Guesses remaining: "+tries));
			newGame();
		}
	})
}

//Starts the game
initiateProgram();