
// -------This code operates the front-end interface -------


//Require the letter constructor
var Letter = require("./letter_constructor2.0.js");

//Create the inquirer variable
var inquirer = require("inquirer");

function initiate() {
	//Prompt user to start game
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
				break;
			case "No":
				console.log("\n Well, too bad... \n");
				break;	
		}
	startGame();
	}
	)
}

var tries = 3;

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

function userInput() {
	inquirer.prompt(
		[
			{
				type: "input",
				name: "newGuess",
				message: "\nThe word is: "+wordBlanks.join(' ')+"\n \nGuess a letter:"
			},
		]
		).then(answers => {

			var flag = false;

			for (var i = 0; i < wordArray.length; i++) {
				if (wordArray[i] == answers.newGuess) {
					flag = true;
					wordBlanks.splice(i,1,answers.newGuess);
					console.log("Correct! Guess again: \n"+wordBlanks.join(' '));
					break;
				}
			}

			if (flag === false && tries === 0) {
				console.log("\nYou lose!\n");
				initiate();
				// break;
			} else if (flag === true) {
				console.log("\nNice! Tries remaining: "+tries);
				userInput();
				// break;	
			} else {
				tries--;
				console.log("\nWhoops! Tries remaining: "+tries);
				userInput();
				// break;
			}
		})
}

initiate();