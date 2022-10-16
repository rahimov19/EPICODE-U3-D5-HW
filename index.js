const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    answers: [
      { text: "Central Processing Unit", correct: true },
      { text: "Central Process Unit", correct: false },
      { text: "Computer Personal Unit", correct: false },
      { text: "Central Processor Unit", correct: false },
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    answers: [
      { text: "Final", correct: true },
      { text: "Static", correct: false },
      { text: "Private", correct: false },
      { text: "Public", correct: false },
    ],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    answers: [
      { text: "False", correct: true },
      { text: "True" },
      { correct: false },
    ],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    answers: [
      { text: ".png", correct: false },
      { text: ".jpeg", correct: false },
      { text: ".svg", correct: true },
      { text: ".gif", correct: false },
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    answers: [
      { text: "Counter Strike: Source", correct: false },
      { text: "Cascading Style Sheet", correct: true },
      { text: "Corrective Style Sheet", correct: false },
      { text: "Computer Style Sheet", correct: false },
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    answers: [
      { text: "Ice Cream Sandwich", correct: false },
      { text: "Jelly Bean", correct: false },
      { text: "Marshmallow", correct: false },
      { text: "Nougat", correct: true },
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    answers: [
      { text: "120", correct: false },
      { text: "140", correct: true },
      { text: "160", correct: false },
      { text: "100", correct: false },
    ],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    answers: [
      { text: "False", correct: true },
      { text: "True", correct: false },
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    answers: [
      { text: "Python", correct: false },
      { text: "C", correct: false },
      { text: "Java", correct: true },
      { text: "Jakarta", correct: false },
    ],
  },
];

const startButton = document.getElementById("start");
const nextButton = document.getElementById("next");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer");
const scoreBoard = document.getElementById("scoreboard");
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("button");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}
function resetState() {
  nextButton.classList.add("hide");
  clearStatusClass(document.body);
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}
function selectAnswer(e) {
  let selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  {
    if ((selectedButton = correct)) {
      scoreBoard.value++;
    }
  }
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
    let score = scoreBoard.value;
    alert("Congratulations. Your score is " + score);
    scoreBoard.value = 0;
  }
}
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
// let arrAnswers = [];
// let quizField = function () {
//   for (i = 0; i < questions.length; i++) {
//     const questionField = document.getElementById("question");
//     let question = document.createElement("div");
//     questionField.appendChild(question);
//     question.innerText = questions[i].question;
//     let correct_answer = questions[i].correct_answer;
//     arrAnswers.push(questions[i].correct_answer);
//     for (j = 0; j < questions[i].incorrect_answers.length; j++) {
//       arrAnswers.push(questions[i].incorrect_answers[j]);

//       for (h = 0; h < arrAnswers[j].length; h++) {
//         let answer = document.createElement("input");
//         answer.type = "radio";
//         questionField.append(answer);
//       }
//     }
//   }
// };

// let answersField = [];
// let answerRadio = questionField.appendChild(
//   document.createElement("input")
// );
// answerRadio.type = "radio";
// answerRadio.value = true;
// let answer = questionField.appendChild(document.createElement("span"));
// answer.innerText = questions[i].correct_answer;
// for (j = 0; j < questions[i].incorrect_answers.length; j++) {
//   let wrAnswerRadio = questionField.appendChild(
//     document.createElement("input")
//   );
//   wrAnswerRadio.type = "radio";
//   wrAnswerRadio.value = false;
//   let answer = questionField.appendChild(document.createElement("span"));
//   answer.innerText = questions[i].incorrect_answers[j];
// }
// answersField.push(j);
// console.log(answersField);

// let generateQuestion = function () {
//   const questionField = document.getElementById("quizField");
//   let question = document.createElement("div");
//   questionField.appendChild(question);
//   question.innerText = questions[0].question;
//   let answerRadio = questionField.appendChild(document.createElement("input"));
//   answerRadio.type = "radio";
//   answerRadio.value = questions[0].correct_answer;
//   let answer = questionField.appendChild(document.createElement("p"));
//   answer.innerText = questions[0].correct_answer;

// let quizField = function () {
//     for (i = 0; i < questions.length; i++) {
//       const questionField = document.getElementById("quizField");
//       console.log(i);
//       let question = document.createElement("div");
//       questionField.appendChild(question);
//       question.innerText = questions[i].question;
//       let answerRadio = questionField.appendChild(
//         document.createElement("input")
//       );
//       answerRadio.type = "radio";
//       answerRadio.value = questions[i].correct_answer;
//       let answer = questionField.appendChild(document.createElement("span"));
//       answer.innerText = questions[i].correct_answer;
//       for (j = 0; j < questions[i].incorrect_answers.length; j++) {
//         let wrAnswerRadio = questionField.appendChild(
//           document.createElement("input")
//         );
//         wrAnswerRadio.type = "radio";
//         wrAnswerRadio.value = questions[i].incorrect_answers[j];
//         let answer = questionField.appendChild(document.createElement("span"));
//         answer.innerText = questions[i].incorrect_answers[j];
//       }
