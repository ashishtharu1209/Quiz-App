const quizData = [
{
  question: "1.What is the capital of France?",
  options: ["Paris", "London", "Berlin", "Madrid"],
  correctAnswer: "Paris"
},
{
  question: "2.Which planet is called the Red Planet?",
  options: ["Earth", "Mars", "Jupiter", "Saturn"],
  correctAnswer: "Mars"
},
{
  question: "3.What is the largest mammal in the world?",
  options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
  correctAnswer: "Blue Whale"
},
{
  question: "4.What is the largest ocean in the world?",
  options: ["pacific", "Atlantic", "Arctic", "Indian"],
  correctAnswer: "pacific"
},
{
  question: "5.What is the tallest mountain in the world?",
  options: ["everest", "K2", "Annapurna", "Alpes"],
  correctAnswer: "everest"
},
{
  question: "6.Who is the called father of Computer?",
  options: ["pascal", "marconi", "charles Babbage", "lady adda"],
  correctAnswer: "charles Babbage"
},
{
  question: "7.Who won the fifa worldcup 2022?",
  options: ["Qatar", "France", "Argentina", "Portugal"],
  correctAnswer: "Argentina"
},
{
  question: "8.what is full form of VIP?",
  options: ["very important person", "very important particle", "very important paragraph", "very important people"],
  correctAnswer: "very important person"
},
{
  question: "9.What is the headquarter of Bardia?",
  options: ["Rajapur", "Gulayria", "basgadhi", "nepalgunj"],
  correctAnswer: "Gulayria"
},
{
  question: "10.What is the square of 25?",
  options: ["645", "615", "625", "715"],
  correctAnswer: "625"
}

];

let currentQuestion = 0;


const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');


function loadQuestion() {
const currentQuiz = quizData[currentQuestion];
questionElement.textContent = currentQuiz.question;

optionsElement.innerHTML = "";
currentQuiz.options.forEach((option, index) => {
  const optionElement = document.createElement('div');
  optionElement.className = 'option';
  optionElement.textContent = option;
  optionElement.onclick = () => checkAnswer(option, currentQuiz.correctAnswer);
  optionsElement.appendChild(optionElement);
});
}

function checkAnswer(userAnswer, correctAnswer) {
if (userAnswer === correctAnswer) {
  resultElement.textContent = "Correct!";
} else {
  resultElement.textContent = "Wrong! The correct answer is: " + correctAnswer;
}
}

function nextQuestion() {
currentQuestion++;
if (currentQuestion < quizData.length) {
  loadQuestion();
  resultElement.textContent = "";
} else {
           result.innerHTML = `
           <button onclick="location.reload()">Reload</button>
           `
       }
}
loadQuestion();


function PrevQuestion() {
currentQuestion--;
if (currentQuestion < quizData.length) {
  loadQuestion();
  resultElement.textContent = "";
}
}
loadQuestion();
