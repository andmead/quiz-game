const question = document.getElementById("question");
const gameTitle = document.getElementById("gameTitle");
const container = document.getElementById("container");
const timer = document.getElementById("timer");
const answers = document.getElementById("answers");
const answerA = document.getElementById("A");
const answerB = document.getElementById("B");
const answerC = document.getElementById("C");
const answerD = document.getElementById("D");
const currentScore = document.getElementById("score");
const startButton = document.getElementById("start");
const replay = document.getElementById("replay");

let score = 0;
let timeLeft = 60;
let currentQuestionIndex = 0;

const questionsArray = [
  {
    text: (question.innerText = `1. What jersey number did Derrick Rose wear during his time on the Chicago Bulls?`),
    A: (answerA.innerText = `A. 1`),
    B: (answerB.innerText = `B. 23`),
    C: (answerC.innerText = `C. 11`),
    D: (answerD.innerText = `D. 8`),
    correct: "A",
  },
  {
    text: (question.innerText = `2. Which of the following teams have not won three NBA Championships in a row?`),
    A: (answerA.innerText = `A. Boston Celtics`),
    B: (answerB.innerText = `B. Chicago Bulls`),
    C: (answerC.innerText = `C. Los Angeles Lakers`),
    D: (answerD.innerText = `D. Golden State Warriors`),
    correct: "D",
  },
  {
    text: (question.innerText = `3. Which player had the nickname "Slim Reaper"?`),
    A: (answerA.innerText = `A. Damian Lillard`),
    B: (answerB.innerText = `B. Muggsy Bogues`),
    C: (answerC.innerText = `C. Yao Ming`),
    D: (answerD.innerText = `D. Kevin Durant`),
    correct: "D",
  },
  {
    text: (question.innerText = `4. Which team did LeBron James win his first Championship with?`),
    A: (answerA.innerText = `A. Cleveland Cavaliers`),
    B: (answerB.innerText = `B. Miami Heat`),
    C: (answerC.innerText = `C. Los Angeles Lakers`),
    D: (answerD.innerText = `D. Boston Celtics`),
    correct: "B",
  },
  {
    text: (question.innerText = `5. Which team has won the most NBA Championship titles?`),
    A: (answerA.innerText = `A. New York Knicks`),
    B: (answerB.innerText = `B. Golden State Warriors`),
    C: (answerC.innerText = `C. Los Angeles Lakers`),
    D: (answerD.innerText = `D. Boston Celtics`),
    correct: "D",
  },
  {
    text: (question.innerText = `6. Which team has had the best win-loss record in a single season?`),
    A: (answerA.innerText = `A. 2015-2016 Golden State Warriors`),
    B: (answerB.innerText = `B. 2012-2013 Miami Heat`),
    C: (answerC.innerText = `C. 1995-1996 Chicago Bulls`),
    D: (answerD.innerText = `D. 1966-1967 Philadelphia 76ers`),
    correct: "A",
  },
  {
    text: (question.innerText = `7. Which player has Hall of Famer Shaquille O'Neal not played with?`),
    A: (answerA.innerText = `A. Dwayne Wade`),
    B: (answerB.innerText = `B. Kobe Bryant`),
    C: (answerC.innerText = `C. Rick Fox`),
    D: (answerD.innerText = `D. Dwight Howard`),
    correct: "D",
  },
  {
    text: (question.innerText = `8. Which of these teams is no longer a part of the NBA?`),
    A: (answerA.innerText = `A. Oklahoma City Thunder`),
    B: (answerB.innerText = `B. Seattle Supersonics`),
    C: (answerC.innerText = `C. Toronto Raptors`),
    D: (answerD.innerText = `D. Brooklyn Nets`),
    correct: "B",
  },
  {
    text: (question.innerText = `9. Which of the following Hall of Famers has never won an NBA Championship title?`),
    A: (answerA.innerText = `A. Allen Iverson`),
    B: (answerB.innerText = `B. Kobe Bryant`),
    C: (answerC.innerText = `C. Magic Johnson`),
    D: (answerD.innerText = `D. Kareem Abdul-Jabbar`),
    correct: "A",
  },
  {
    text: (question.innerText = `10. How long is the NBA shot clock?`),
    A: (answerA.innerText = `A. 30 seconds`),
    B: (answerB.innerText = `B. 45 seconds`),
    C: (answerC.innerText = `C. 24 seconds`),
    D: (answerD.innerText = `D. 25 seconds`),
    correct: "C",
  },
];

const showQuestion = () => {
  const currentQuestion = questionsArray[currentQuestionIndex];
  question.innerText = currentQuestion.text;
  answerA.innerText = currentQuestion.A;
  answerB.innerText = currentQuestion.B;
  answerC.innerText = currentQuestion.C;
  answerD.innerText = currentQuestion.D;
};

const nextQuestion = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questionsArray.length) {
    showQuestion();
  } else {
    endGame();
  }
};

const checkAnswer = (selectedAnswer) => {
  const currentQuestion = questionsArray[currentQuestionIndex];
  if (selectedAnswer === currentQuestion.correct) {
    score++;
    currentScore.innerText = `Score: ${score}`;
  }
  nextQuestion();
};

startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  gameTitle.style.display = "none";
  container.style.display = "block";
  currentScore.innerText = `Score: ${score}`;
  startCountdown();
  showQuestion();
});

[answerA, answerB, answerC, answerD].forEach((button) => {
  button.addEventListener("click", (e) => {
    const selectedAnswer = e.target.id;
    checkAnswer(selectedAnswer);
  });
});

let countdown;

const startCountdown = () => {
  countdown = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(countdown);
      timer.innerText = "Time's up!";
      endGame();
    } else {
      timer.innerHTML = `${timeLeft} seconds remaining`;
    }
    timeLeft -= 1;
  }, 1000);
};

const endGame = () => {
  question.innerText = "Game Over!";
  answers.style.display = "none";
  replay.style.display = "block";
  timer.style.display = "none";
};

const replayGame = () => {
  score = 0;
  timeLeft = 60;
  currentQuestionIndex = 0;
  question.innerText = "";
  container.style.display = "block";
  currentScore.innerText = `Score: ${score}`;
  answers.style.display = "block";
  replay.style.display = "none";
  timer.style.display = "block";
  timer.innerText = `${timeLeft} seconds remaining`;

  clearInterval(countdown);
  startCountdown();
  showQuestion();
};

replay.addEventListener("click", () => {
  replayGame();
});
