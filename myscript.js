
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
      correctAnswer: "Pacific"
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
    }
    else {
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
  


