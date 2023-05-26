// Trivia questions and answers
var triviaData;

// Function to load the JSON file
function loadJSON(callback) {
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open("GET", "/oilers.json", true);
	xobj.onreadystatechange = function() {
		if (xobj.readyState === 4 && xobj.status === 200) {
			callback(JSON.parse(xobj.responseText));
		}
	};
	xobj.send(null);
}

// Load the JSON file and assign the data to the triviaData variable
loadJSON(function(data) {
	triviaData = data;
	var numberOfQuestions = 5; // Change the number of questions here
	displayQuestion(numberOfQuestions);
});

var currentQuestion = 0;
var score = 0;

function displayQuestion(n) {
	var questionContainer = document.getElementById("question");
	var optionsContainer = document.getElementById("options");

	// Randomly select 'n' questions from triviaData
	var randomQuestions = getRandomQuestions(triviaData, n);

	// Get the current question data from randomQuestions array
	var questionData = randomQuestions[currentQuestion];

	questionContainer.innerHTML = questionData.question;
	optionsContainer.innerHTML = "";

	for (var i = 0; i < questionData.options.length; i++) {
		var option = document.createElement("button");
		option.innerHTML = questionData.options[i];
		option.addEventListener("click", checkAnswer);
		optionsContainer.appendChild(option);
	}
}

function getRandomQuestions(array, n) {
	// Create a copy of the array to avoid modifying the original array
	var newArray = array.slice();

	// Randomly shuffle the array
	for (var i = newArray.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = newArray[i];
		newArray[i] = newArray[j];
		newArray[j] = temp;
	}

	// Return the first 'n' elements
	return newArray.slice(0, n);
}

function checkAnswer(event) {
	var selectedOption = event.target;
	var answer = triviaData[currentQuestion].answer;

	if (selectedOption.innerHTML === answer) {
		score++;
		document.getElementById("result").innerHTML = "Correct!";
	} else {
		document.getElementById("result").innerHTML = "Wrong!";
	}

	currentQuestion++;

	if (currentQuestion < triviaData.length) {
		displayQuestion();
	} else {
		document.getElementById("question").innerHTML = "Quiz completed!";
		document.getElementById("options").innerHTML = "";
		document.getElementById("submit").style.display = "none";
		document.getElementById("result").innerHTML = "";
		document.getElementById("score").innerHTML = "Your score: " + score + " out of " + triviaData.length;
	}
}

// Change the argument to specify the desired number of questions
displayQuestion(10)
