/* Create a "psychic duck" that gives out a random reply from a list of preset replies in an array, while changing expressions. Step are numbered. */

// Step 1
// Create variables

var replies = ["Yes", "No", "How should I know?", "Feed me and then I'll tell you.", "Maaaaaaaaabye."]; // array of replies, order must correspond with the right sound file.
var sounds = ["yes", "no", "how", "feedme", "maybe"]; // name of sound files
var eyes = ["eyes", "eyes1", "eyes2", "eyes3", "eyes4", "eyes5", "eyes6", "eyes7"]; // name of image files for eyes
var randomNum = 0; // this variable will hold the current randomized number to pull from the replies array
var randomEyes = 0; // variable that holds random number to pull a new eye expression, separate variable because the amount of eyes exceed the amount of replies
var audioElement;

// Step 11
// create a function to play sound based off of random variable being passed
function playSounds(r) {
	audioElement.setAttribute('src', "assets/sound/" + sounds[r] + ".mp3");
	audioElement.play();
}

// Step 6
// create a function that returns a random number within the limits of the array length.
// function accepts name of the array, so we can use one function for diffrent arrays with different lengths
function randomNumGenerator(arrayName) { // create random number for random reply
	return Math.floor(Math.random() * arrayName.length);
	// Math.floor returns a number representing the largest integer less than or equal to the specified number.
	// Math.random returns a value between (0, 1).
}

// Step 5
// create answerQuestion function
function answerQuestion() {

	// Step 7
	// assign a random number to randomNum
	randomNum = randomNumGenerator(replies);
	console.log("Random reply: " + randomNum);

	// Step 9
	// pick a reply using random number
	// vanilla js:
	// document.getElementById("speech").textContent = replies[randomNum];
	$('#speech').text(replies[randomNum]);

	// Step 10
	// call playSounds function
	playSounds(randomNum);

	// Step 12
	// changes eyes
	randomEyes = randomNumGenerator(eyes); // generate random number for eyes based off of number of eyes in array
	// vanilla js:
	// document.getElementById("eyes").style.backgroundImage = "url('assets/img/" + eyes[randomEyes] + ".png'";
	$('#eyes').css("background", "url('assets/img/" + eyes[randomEyes] + ".png') no-repeat");
	$('#eyes').css("background-size", "100% auto");
}


// Step 3
// init function will initialize the rest of the functions
function init() {
	console.log("Hello World"); // check to see if script is linked properly and running

	// Step 4
	// create audio elment after everything is loaded
	// with vanilla js because in this case with jQuery it would involve more code
	audioElement = document.createElement('audio'); // creat audio element
	audioElement.setAttribute('autoplay', 'autoplay'); // set audio element to autoplay

	// Step 8
	// call answer function on click
	// vanilla js:
	// var submit = document.getElementById("submit");
	// submit.addEventListener("click", function() {
	// 	answerQuestion();
	// });
	$('#submit').click(function(){
		answerQuestion();
	});

}




// Step 2
// wait until DOM is loaded then run init function
$(document).ready(function() {
	init();
})