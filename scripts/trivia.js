// Trivia questions and answers
var triviaData = [
  {
    question: "Who was the first captain of the Edmonton Oilers?",
    options: ["Mark Messier", "Wayne Gretzky", "Glen Sather", "Kevin Lowe"],
    answer: "Glen Sather"
  },
  {
    question: "In what year did the Edmonton Oilers join the NHL?",
    options: ["1978", "1980", "1982", "1979"],
    answer: "1979"
  },
  {
    question: "Which player holds the franchise record for most goals scored in a single season?",
    options: ["Wayne Gretzky", "Jari Kurri", "Glenn Anderson", "Dwayne Roloson"],
    answer: "Wayne Gretzky"
  },
  // Additional questions
  {
    question: "Which player holds the record for most career goals scored as an Edmonton Oiler?",
    options: ["Wayne Gretzky", "Jari Kurri", "Ryan Smyth", "Glenn Anderson"],
    answer: "Wayne Gretzky"
  },
  {
    question: "In what year did the Edmonton Oilers win their first Stanley Cup championship?",
    options: ["1984", "1985", "1986", "1984"],
    answer: "1984"
  },
  {
    question: "Who won the Conn Smythe Trophy as the Most Valuable Player of the playoffs when the Edmonton Oilers won their first Stanley Cup?",
    options: ["Wayne Gretzky", "Jari Kurri", "Mark Messier", "Grant Fuhr"],
    answer: "Mark Messier"
  },
  {
    question: "Which goaltender set an NHL record for most wins in a single season while playing for the Edmonton Oilers?",
    options: ["Grant Fuhr", "Curtis Joseph", "Dwayne Roloson", "Cam Talbot"],
    answer: "Grant Fuhr"
  },
  {
    question: "Who is the all-time leading scorer for the Edmonton Oilers?",
    options: ["Wayne Gretzky", "Jari Kurri", "Ryan Smyth", "Connor McDavid"],
    answer: "Wayne Gretzky"
  },
  {
    question: "Which defenseman holds the record for most points in a single season by an Edmonton Oiler defenseman?",
    options: ["Paul Coffey", "Charlie Huddy", "Kevin Lowe", "Chris Pronger"],
    answer: "Paul Coffey"
  },
  {
    question: "Who scored the Stanley Cup-winning goal for the Edmonton Oilers in the 1990 Stanley Cup Final?",
    options: ["Mark Messier", "Glenn Anderson", "Jari Kurri", "Craig Simpson"],
    answer: "Craig Simpson"
  },
  {
    question: "Which player did the Edmonton Oilers select with their first-ever NHL draft pick?",
    options: ["Kevin Lowe", "Glenn Anderson", "Paul Coffey", "Wayne Gretzky"],
    answer: "Kevin Lowe"
  },
  {
    question: "Who was the first Edmonton Oiler to score 50 goals in a single season?",
    options: ["Wayne Gretzky", "Jari Kurri", "Glenn Anderson", "Mark Messier"],
    answer: "Jari Kurri"
  },
  {
    question: "Which goaltender won the Hart Trophy as the NHL's Most Valuable Player while playing for the Edmonton Oilers?",
    options: ["Grant Fuhr", "Andy Moog", "Curtis Joseph", "Bill Ranford"],
    answer: "Grant Fuhr"
  },
  // Add more questions here...
];

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
	document.getElementById("submit").style.display = "none";
	document.getElementById("result").innerHTML = "";
	document.getElementById("score").innerHTML = "Your score: " + score + " out of " + triviaData.length;
    }
}

displayQuestion();
