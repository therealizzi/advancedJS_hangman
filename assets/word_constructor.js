
//Need an array of words or phrases

var words = ["Blues Brothers", "Home Alone", "Taxi", "Philadelphia", "Fugitive"];

//Need to randomly select a word for the game

var rand = Math.floor(Math.random()*words.length + 1);

var mysteryWord = words[rand];

console.log(mysteryWord);
