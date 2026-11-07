const lessonData = [
  { word: "Bonjour", translation: "Hello", pronunciation: "bohn-zhoor", emoji: "👋" },
  { word: "Merci", translation: "Thank you", pronunciation: "mehr-see", emoji: "🙌" },
  { word: "S'il vous plaît", translation: "Please", pronunciation: "seel voo play", emoji: "😊" },
  { word: "Au revoir", translation: "Goodbye", pronunciation: "oh ruh-vwahr", emoji: "👋" },
  { word: "Bleu", translation: "Blue", pronunciation: "bleu", emoji: "💙" },
  { word: "Rouge", translation: "Red", pronunciation: "roozh", emoji: "❤️" },
  { word: "Un", translation: "One", pronunciation: "uhn", emoji: "1️⃣" },
  { word: "Deux", translation: "Two", pronunciation: "duh", emoji: "2️⃣" },
  { word: "Trois", translation: "Three", pronunciation: "twah", emoji: "3️⃣" },
  { word: "Famille", translation: "Family", pronunciation: "fah-mee", emoji: "👨‍👩‍👧‍👦" }
];

const lessonLevels = {
  easy: {
    title: "Lesson 1: Hello, friends!",
    steps: [
      { title: "Greeting", french: "Bonjour!", english: "Hello!", sound: "Bonjour" },
      { title: "Thank you", french: "Merci!", english: "Thank you!", sound: "Merci" },
      { title: "Please", french: "S'il vous plaît", english: "Please", sound: "S'il vous plaît" },
      { title: "Goodbye", french: "Au revoir!", english: "Goodbye!", sound: "Au revoir" }
    ]
  },
  medium: {
    title: "Lesson 2: Everyday French",
    steps: [
      { title: "How are you?", french: "Comment ça va ?", english: "How are you?", sound: "Comment ca va" },
      { title: "My name is...", french: "Je m'appelle ...", english: "My name is...", sound: "Je m'appelle" },
      { title: "I am happy", french: "Je suis content", english: "I am happy", sound: "Je suis content" },
      { title: "I like this", french: "J'aime ça", english: "I like this", sound: "J'aime ca" }
    ]
  },
  hard: {
    title: "Lesson 3: Little storyteller",
    steps: [
      { title: "I am going to school", french: "Je vais à l'école", english: "I am going to school", sound: "Je vais a l'ecole" },
      { title: "I am hungry", french: "J'ai faim", english: "I am hungry", sound: "J'ai faim" },
      { title: "I need a drink", french: "J'ai besoin d'un verre", english: "I need a drink", sound: "J'ai besoin d'un verre" },
      { title: "Let's play!", french: "Jouons ensemble!", english: "Let's play!", sound: "Jouons ensemble" }
    ]
  }
};

const categoryData = {
  school: {
    title: "School words",
    steps: [
      { title: "Book", french: "Livre", english: "Book", sound: "Livre" },
      { title: "Pencil", french: "Crayon", english: "Pencil", sound: "Crayon" },
      { title: "School", french: "École", english: "School", sound: "Ecole" },
      { title: "Teacher", french: "Professeur", english: "Teacher", sound: "Professeur" }
    ]
  },
  family: {
    title: "Family words",
    steps: [
      { title: "Mother", french: "Mère", english: "Mother", sound: "Mere" },
      { title: "Father", french: "Père", english: "Father", sound: "Pere" },
      { title: "Brother", french: "Frère", english: "Brother", sound: "Frere" },
      { title: "Sister", french: "Sœur", english: "Sister", sound: "Soeur" }
    ]
  },
  numbers: {
    title: "Numbers",
    steps: [
      { title: "One", french: "Un", english: "One", sound: "Un" },
      { title: "Two", french: "Deux", english: "Two", sound: "Deux" },
      { title: "Three", french: "Trois", english: "Three", sound: "Trois" },
      { title: "Four", french: "Quatre", english: "Four", sound: "Quatre" }
    ]
  }
};

const feelingsChallenge = [
  "Je suis content",
  "Je suis triste",
  "Je suis fatigué",
  "Je suis heureux",
  "Je suis en colère",
  "Je suis nerveux"
];

const quizData = [
  {
    question: "What does 'Bonjour' mean?",
    answers: ["Hello", "Goodbye", "Thank you"],
    correct: "Hello"
  },
  {
    question: "What color is 'Rouge'?",
    answers: ["Blue", "Yellow", "Red"],
    correct: "Red"
  },
  {
    question: "What is 'Merci' in English?",
    answers: ["Please", "Thank you", "Family"],
    correct: "Thank you"
  },
  {
    question: "How do you say 'Two' in French?",
    answers: ["Un", "Deux", "Trois"],
    correct: "Deux"
  },
  {
    question: "Which phrase means 'Please'?",
    answers: ["Au revoir", "S'il vous pla�t", "Famille"],
    correct: "S'il vous pla�t"
  }
];

const lessonGrid = document.getElementById("lessonGrid");
const fullLessonList = document.getElementById("fullLessonList");
const lessonTitle = document.getElementById("lessonTitle");
const voicePrompt = document.getElementById("voicePrompt");
const listenPromptBtn = document.getElementById("listenPromptBtn");
const nextPromptBtn = document.getElementById("nextPromptBtn");
const quizQuestion = document.getElementById("quizQuestion");
const quizFeedback = document.getElementById("quizFeedback");
const starsDisplay = document.getElementById("starsDisplay");
const answerButtons = document.getElementById("answerButtons");
const nextQuestionButton = document.getElementById("nextQuestion");
const scoreText = document.getElementById("scoreText");
const playAllBtn = document.getElementById("playAllBtn");
const levelButtons = document.querySelectorAll(".level-btn");
const categoryButtons = document.querySelectorAll(".category-btn");
const mathQuestion = document.getElementById("mathQuestion");
const mathPicture = document.getElementById("mathPicture");
const mathAnswers = document.getElementById("mathAnswers");
const nextMathQuestion = document.getElementById("nextMathQuestion");
const mathScoreText = document.getElementById("mathScoreText");
const summarySection = document.getElementById("summarySection");
const summaryContent = document.getElementById("summaryContent");
const restartGame = document.getElementById("restartGame");
const goldMedal = document.getElementById("goldMedal");

function renderLessonCards() {
  lessonGrid.innerHTML = lessonData.map((item) => `
    <article class="lesson-card">
      <div class="card-top">
        <div>
          <p class="eyebrow">Word</p>
          <h3>${item.word}</h3>
        </div>
        <span class="word-emoji" aria-label="emoji">${item.emoji}</span>
      </div>
      <p class="translation">${item.translation}</p>
      <div class="card-actions">
        <span class="pronunciation">/${item.pronunciation}/</span>
        <button class="speak-btn" type="button" aria-label="Say ${item.word}" data-word="${item.word}">??</button>
      </div>
    </article>
  `).join("");

  lessonGrid.querySelectorAll(".speak-btn").forEach((button) => {
    button.addEventListener("click", () => speakWord(button.dataset.word));
  });
}

function renderFullLesson(level = "easy", category = "school") {
  const selectedLesson = lessonLevels[level];
  const selectedCategory = categoryData[category] || categoryData.school;

  lessonTitle.textContent = `${selectedLesson.title} • ${selectedCategory.title}`;

  const allSteps = [...selectedLesson.steps, ...selectedCategory.steps];

  fullLessonList.innerHTML = allSteps.map((step) => `
    <article class="lesson-step">
      <h3>${step.title}</h3>
      <p class="french-line">${step.french}</p>
      <p class="english-line">${step.english}</p>
      <button class="speak-btn" type="button" aria-label="Say ${step.french}" data-word="${step.sound}">🔊</button>
    </article>
  `).join("");

  fullLessonList.querySelectorAll(".speak-btn").forEach((button) => {
    button.addEventListener("click", () => speakWord(button.dataset.word));
  });
}

function speakWord(word) {
  if (!("speechSynthesis" in window)) {
    alert("Your browser does not support speech synthesis.");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "fr-FR";
  utterance.rate = 0.9;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let promptIndex = 0;
let mathQuestionIndex = 0;
let mathScore = 0;
let mathAnswered = false;
let starCount = 0;

const funnyQuizJokes = [
  "😂 Oops! Even my banana laughed at that answer!",
  "😹 That answer was so wacky, the toy fox needs a nap!",
  "🤣 Boom! That answer missed the target by a giant trampoline!",
  "🤪 Oh no! Your brain did a little cartwheel and landed on the wrong answer!",
  "😂 That answer was so funny, even the teddy bear is giggling!"
];

const voiceChallenges = [
  "Bonjour",
  "Merci",
  "S'il vous plaît",
  "Comment ça va ?",
  "Je m'appelle ...",
  "Au revoir!"
];

const mathQuestions = [
  { question: "How many apples?", picture: "🍎🍎🍎", answers: ["1", "2", "3", "4"], correct: "3" },
  { question: "How many stars?", picture: "⭐ ⭐ ⭐ ⭐", answers: ["2", "3", "4", "5"], correct: "4" },
  { question: "How many books?", picture: "📘📘📘📘📘", answers: ["4", "5", "6", "7"], correct: "5" },
  { question: "How many flowers?", picture: "🌼🌼🌼", answers: ["2", "3", "4", "5"], correct: "3" }
];

function renderVoicePrompt() {
  const selectedLevel = document.querySelector(".level-btn.active")?.dataset.level || "easy";
  const selectedCategory = document.querySelector(".category-btn.active")?.dataset.category || "school";
  const currentLevelPrompts = {
    easy: ["Bonjour", "Merci", "Au revoir!", "Je suis content", "Je suis triste"],
    medium: ["Comment ça va ?", "Je m'appelle ...", "J'aime ça", "Je suis heureux", "Je suis fatigué"],
    hard: ["Je vais à l'école", "J'ai faim", "Jouons ensemble!", "Je suis en colère", "Je suis nerveux"]
  };

  const categoryPrompts = {
    school: ["Livre", "Crayon", "École", "Professeur"],
    family: ["Mère", "Père", "Frère", "Sœur"],
    numbers: ["Un", "Deux", "Trois", "Quatre"]
  };

  const prompts = currentLevelPrompts[selectedLevel] || currentLevelPrompts.easy;
  const combinedPrompts = [...prompts, ...(categoryPrompts[selectedCategory] || categoryPrompts.school)];
  voicePrompt.textContent = combinedPrompts[promptIndex % combinedPrompts.length];
}

function nextVoicePrompt() {
  promptIndex += 1;
  renderVoicePrompt();
}

function playPartySound() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;

  const audioContext = new AudioCtx();
  const notes = [523.25, 659.25, 783.99, 1046.5];

  notes.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.value = frequency;
    gainNode.gain.setValueAtTime(0.0001, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.12, audioContext.currentTime + 0.05 + index * 0.04);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.3 + index * 0.05);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start(audioContext.currentTime + index * 0.08);
    oscillator.stop(audioContext.currentTime + 0.4 + index * 0.08);
  });
}

function playOopsSound() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;

  const audioContext = new AudioCtx();
  const notes = [220, 180, 150];

  notes.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = "sawtooth";
    oscillator.frequency.value = frequency;
    gainNode.gain.setValueAtTime(0.0001, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.08, audioContext.currentTime + 0.03 + index * 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.18 + index * 0.04);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start(audioContext.currentTime + index * 0.08);
    oscillator.stop(audioContext.currentTime + 0.22 + index * 0.08);
  });
}

function createConfettiBurst() {
  const colors = ["#ff6b6b", "#ffd93d", "#6bcb77", "#4dabf7", "#c77dff", "#ff9f1c"];

  for (let i = 0; i < 28; i += 1) {
    const piece = document.createElement("div");
    piece.className = "confetti";
    piece.style.left = `${window.innerWidth / 2 + (Math.random() - 0.5) * 150}px`;
    piece.style.top = `${window.innerHeight / 2 - 100}px`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(piece);

    setTimeout(() => piece.remove(), 1500);
  }
}

function renderStarDisplay() {
  const totalStars = 5;
  const filled = Array.from({ length: totalStars }, (_, index) => index < starCount ? "⭐" : "☆");
  starsDisplay.innerHTML = filled.map((star) => `<span class="star ${star === "☆" ? "empty" : ""}">${star}</span>`).join("");

  if (starCount >= 5) {
    goldMedal.style.display = "inline-block";
    quizFeedback.textContent = "🥇 Gold medal! You are a super star!";
    playPartySound();
  } else {
    goldMedal.style.display = "none";
  }
}

function renderQuestion() {
  const current = quizData[currentQuestionIndex];
  answered = false;
  quizFeedback.textContent = "";
  quizQuestion.textContent = current.question;
  answerButtons.innerHTML = "";

  current.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-btn";
    button.textContent = answer;

    button.addEventListener("click", () => handleAnswer(button, answer, current.correct));
    answerButtons.appendChild(button);
  });

  updateScore();
  renderStarDisplay();
}

function renderMathQuestion() {
  const current = mathQuestions[mathQuestionIndex];
  mathAnswered = false;
  mathQuestion.textContent = current.question;
  mathPicture.textContent = current.picture;
  mathAnswers.innerHTML = "";

  current.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-btn";
    button.textContent = answer;

    button.addEventListener("click", () => handleMathAnswer(button, answer, current.correct));
    mathAnswers.appendChild(button);
  });

  updateMathScore();
}

function handleAnswer(button, selected, correct) {
  if (answered) return;
  answered = true;

  const allButtons = [...answerButtons.children];

  allButtons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.classList.add("correct");
    }
    if (btn.textContent === selected && selected !== correct) {
      btn.classList.add("wrong");
    }
  });

  if (selected === correct) {
    score += 1;
    starCount = Math.min(starCount + 1, 5);
    quizFeedback.textContent = "⭐ Great job! You earned a star!";
    playPartySound();
  } else {
    const joke = funnyQuizJokes[Math.floor(Math.random() * funnyQuizJokes.length)];
    quizFeedback.textContent = joke;
    playOopsSound();
  }

  updateScore();
  renderStarDisplay();
  if (selected === correct) {
    createConfettiBurst();
  }
}

function handleMathAnswer(button, selected, correct) {
  if (mathAnswered) return;
  mathAnswered = true;

  const allButtons = [...mathAnswers.children];

  allButtons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.classList.add("correct");
    }
    if (btn.textContent === selected && selected !== correct) {
      btn.classList.add("wrong");
    }
  });

  if (selected === correct) {
    mathScore += 1;
  }

  updateMathScore();
}

function updateScore() {
  scoreText.textContent = `Score: ${score}/${currentQuestionIndex + (answered ? 1 : 0)}`;
}

function updateMathScore() {
  mathScoreText.textContent = `Math score: ${mathScore}/${mathQuestionIndex + (mathAnswered ? 1 : 0)}`;
}

function nextQuestion() {
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
  } else {
    currentQuestionIndex = 0;
    score = 0;
    starCount = 0;
    goldMedal.style.display = "none";
    renderQuestion();
  }
}

function showSummaryPage() {
  const total = mathQuestions.length;
  const resultText = `You answered ${mathScore} out of ${total} picture math questions correctly. ${mathScore === total ? "Amazing job!" : mathScore >= total / 2 ? "Great work!" : "You are learning so fast!"}`;

  summarySection.style.display = "block";
  summaryContent.innerHTML = `
    <p><strong>Final score:</strong> ${mathScore}/${total}</p>
    <p>${resultText}</p>
    <p>🌟 Keep practicing with French words, colors, and numbers!</p>
    <p><strong>FRENCH IS THE BEST</strong> 🇫🇷✨</p>
  `;

  const mathCard = document.querySelector(".math-card");
  if (mathCard) {
    mathCard.style.display = "none";
  }
}

function nextMathQuestionHandler() {
  if (mathQuestionIndex < mathQuestions.length - 1) {
    mathQuestionIndex += 1;
    renderMathQuestion();
  } else {
    showSummaryPage();
  }
}

nextQuestionButton.addEventListener("click", nextQuestion);
nextMathQuestion.addEventListener("click", nextMathQuestionHandler);
restartGame.addEventListener("click", () => {
  mathQuestionIndex = 0;
  mathScore = 0;
  starCount = 0;
  goldMedal.style.display = "none";
  summarySection.style.display = "none";
  const mathCard = document.querySelector(".math-card");
  if (mathCard) {
    mathCard.style.display = "block";
  }
  renderMathQuestion();
  renderStarDisplay();
});

playAllBtn.addEventListener("click", () => {
  const selectedLevel = document.querySelector(".level-btn.active")?.dataset.level || "easy";
  const allWords = lessonLevels[selectedLevel].steps.map((step) => step.sound);

  allWords.forEach((item, index) => {
    setTimeout(() => speakWord(item), index * 500);
  });
});

listenPromptBtn.addEventListener("click", () => {
  speakWord(voicePrompt.textContent);
});

nextPromptBtn.addEventListener("click", () => {
  nextVoicePrompt();
  speakWord(voicePrompt.textContent);
});

levelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    levelButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
    promptIndex = 0;
    renderFullLesson(button.dataset.level, document.querySelector(".category-btn.active")?.dataset.category || "school");
    renderVoicePrompt();
  });
});

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
    promptIndex = 0;
    renderFullLesson(document.querySelector(".level-btn.active")?.dataset.level || "easy", button.dataset.category);
    renderVoicePrompt();
  });
});

renderLessonCards();
renderFullLesson();
renderVoicePrompt();
renderQuestion();
renderMathQuestion();
