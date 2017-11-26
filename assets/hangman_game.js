
// -------This code operates the front-end interface -------


//Require the letter constructor
var Letter = require("./letter_constructor.js");

//Create the inquirer variable
var inquirer = require("inquirer");

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

var tries = 3;

function startGame() {
	// newWord();
	// blankLetters();
	userInput();
}

function userInput() {
	inquirer.prompt(
		[
			{
				type: "input",
				name: "newGuess",
				message: "Guess a letter:"
			},
		]
		).then(answers => {

			console.log("\n You guessed: "+answers.newGuess);
			if(answers.newGuess == "a"){
				console.log("\n Correct!!");
				return;
			}else if(tries === 0) {
				console.log("\n What part of guess 'a' letter didn't you understand?");
				return
				}else 
					tries--;
					console.log("\n Tries remaining: "+tries);
					console.log("\n Try again");
					userInput();
		})
}

