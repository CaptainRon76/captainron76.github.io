// Trivia questions and answers
var triviaData;

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
	displayQuestion();
});

var currentQuestion = 0;
var score = 0;

function displayQuestion() {
	var questionContainer = document.getElementById("question");
	var optionsContainer = document.getElementById("options");
	var questionData = triviaData[currentQuestion];

	questionContainer.innerHTML = questionData.question;
	optionsContainer.innerHTML = "";

	for (var i = 0; i < questionData.options.length; i++) {
		var option = document.createElement("button");
		option.innerHTML = questionData.options[i];
		option.addEventListener("click", checkAnswer);
		optionsContainer.appendChild(option);
	}
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
	document.getElementById("result").innerHTML = "";
	document.getElementById("score").innerHTML = "Your score: " + score + " out of " + triviaData.length;
    }
}

displayQuestion();
