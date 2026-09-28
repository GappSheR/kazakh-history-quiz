const questions = [
  {
    question: "Как называлась борьба казахского народа против джунгарского нашествия?",
    options: [
      "Сражение на Чу",
      "Джунгарское нашествие",
      "Кочевое восстание",
      "Золотая Орда"
    ],
    correct: 1
  },
  {
    question: "Кто из перечисленных был известным казахским батыром, участвовавшим в борьбе с джунгарами?",
    options: ["Кабанбай батыр", "Александр Невский", "Чингисхан", "Тарас Шевченко"],
    correct: 0
  },
  {
    question: "Что означало слово 'батыр' в казахской традиции?",
    options: [
      "Писатель",
      "Храбрый воин и защитник народа",
      "Торговец",
      "Пастух"
    ],
    correct: 1
  },
  {
    question: "Главной целью джунгарских походов на казахские земли было:",
    options: [
      "Защита городов",
      "Подчинение и захват пастбищ",
      "Развитие ремесел",
      "Освоение морских путей"
    ],
    correct: 1
  },
  {
    question: "В каком веке усилилась угроза джунгарского нашествия для казахов?",
    options: ["XIII век", "XIV век", "XVII век", "XIX век"],
    correct: 2
  },
  {
    question: "Какие территории чаще всего подвергались нападениям джунгар?",
    options: [
      "Северные леса",
      "Казахские степи и пастбища",
      "Южные моря",
      "Горы Кавказа"
    ],
    correct: 1
  },
  {
    question: "Почему батыры пользовались большим уважением в казахском обществе?",
    options: [
      "Потому что они были богатыми купцами",
      "Потому что защищали народ, честь и свободу",
      "Потому что строили дворцы",
      "Потому что знали все языки мира"
    ],
    correct: 1
  },
  {
    question: "Какой важный фактор помогал казахам в борьбе с джунгарами?",
    options: [
      "Дружба с европейцами",
      "Единство и мужество народа",
      "Постоянные мирные договоры",
      "Освоение новых городов"
    ],
    correct: 1
  },
  {
    question: "Кто из перечисленных защищал казахские земли от врага в период нашествия?",
    options: ["Батыр", "Учёный", "Архитектор", "Художник"],
    correct: 0
  },
  {
    question: "Что в истории Казахстана символизирует образ батыра?",
    options: [
      "Лень и безразличие",
      "Смелость, силу и защиту Родины",
      "Только богатство",
      "Хозяйственные реформы"
    ],
    correct: 1
  },
  {
    question: "Какие события стали важным этапом в борьбе казахов против джунгар?",
    options: [
      "Путешествия по морям",
      "Отражение нападений и защита степей",
      "Строительство пирамид",
      "Переход к городской жизни"
    ],
    correct: 1
  },
  {
    question: "Почему джунгарское нашествие было опасным для казахов?",
    options: [
      "Потому что оно разрушало хозяйство и жизнь степных народов",
      "Потому что джунгары были друзьями казахов",
      "Потому что они продавали зерно",
      "Потому что только они могли делать одежду"
    ],
    correct: 0
  },
  {
    question: "Какой смысл в казахской культуре имел подвиг батыра?",
    options: [
      "Только личная популярность",
      "Защита чести, свободы и народа",
      "Только богатство",
      "Закрытие школ"
    ],
    correct: 1
  },
  {
    question: "Кто из перечисленных не относится к участникам борьбы с джунгарами?",
    options: ["Кабанбай батыр", "Богенбай батыр", "Толе би", "Чингисхан"],
    correct: 3
  },
  {
    question: "Какое значение имела борьба казахов с джунгарами в истории народа?",
    options: [
      "Сохранила независимость и свободу",
      "Привела к потере всех земель",
      "Уничтожила все города",
      "Открыла страну для завоевателей"
    ],
    correct: 0
  },
  {
    question: "Пастбища в степи имели особое значение, потому что:",
    options: [
      "На них жили и паслись скот и лошади",
      "Их было легко уничтожить",
      "Там нельзя было жить",
      "Они принадлежали только городам"
    ],
    correct: 0
  },
  {
    question: "Что должно быть главным качеством батыра?",
    options: [
      "Скромность",
      "Мужество и преданность Родине",
      "Умение рисовать",
      "Желание путешествовать"
    ],
    correct: 1
  },
  {
    question: "Почему знание истории важно для школьников?",
    options: [
      "Чтобы помнить о подвигах предков и ценить свободу",
      "Чтобы никогда не ходить в школу",
      "Чтобы забывать о родине",
      "Чтобы не читать книги"
    ],
    correct: 0
  },
  {
    question: "Назовите основной враг, с которым сталкивались казахи в XVII веке:",
    options: ["Монголы", "Джунгары", "Османы", "Русские"],
    correct: 1
  },
  {
    question: "Какой поступок считается героическим в истории казахского народа?",
    options: [
      "Покорение чужих земель",
      "Защита родной земли от врага",
      "Покупка дорогих вещей",
      "Постоянные праздники"
    ],
    correct: 1
  }
];

const quizCard = document.getElementById("quizCard");
const resultCard = document.getElementById("resultCard");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const nextBtn = document.getElementById("nextBtn");
const resultText = document.getElementById("resultText");
const resultIcon = document.getElementById("resultIcon");
const restartBtn = document.getElementById("restartBtn");
const scoreNumber = document.getElementById("scoreNumber");
const scorePercent = document.getElementById("scorePercent");
const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");

let currentQuestionIndex = 0;
let selectedAnswer = null;
let score = 0;
let answered = false;

function updateProgressBar() {
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressBar.style.width = progress + "%";
}

function renderQuestion() {
  const question = questions[currentQuestionIndex];
  progressText.textContent = `Вопрос ${currentQuestionIndex + 1}/${questions.length}`;
  updateProgressBar();

  questionText.textContent = question.question;
  optionsContainer.innerHTML = "";
  selectedAnswer = null;
  answered = false;
  nextBtn.disabled = true;
  nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? "Завершить" : "Далее";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.setAttribute("data-index", index);

    const letter = document.createElement("span");
    letter.className = "letter";
    letter.textContent = String.fromCharCode(65 + index);

    const label = document.createElement("span");
    label.textContent = option;

    button.appendChild(letter);
    button.appendChild(label);

    button.addEventListener("click", () => selectAnswer(button, index));

    optionsContainer.appendChild(button);
  });
}

function selectAnswer(button, index) {
  if (answered) return;

  selectedAnswer = index;
  document.querySelectorAll(".option").forEach((item) => {
    item.classList.remove("selected");
  });
  button.classList.add("selected");
  nextBtn.disabled = false;
}

function checkAnswer() {
  if (answered) return;
  answered = true;

  const question = questions[currentQuestionIndex];
  const buttons = document.querySelectorAll(".option");

  buttons.forEach((button, index) => {
    button.disabled = true;
    const isCorrect = index === question.correct;
    const isSelected = index === selectedAnswer;

    if (isCorrect) {
      button.classList.add("correct");
    }

    if (isSelected && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  if (selectedAnswer === question.correct) {
    score += 1;
  }
}

function showResult() {
  quizCard.classList.add("hidden");
  resultCard.classList.remove("hidden");

  const percent = Math.round((score / questions.length) * 100);
  const wrong = questions.length - score;

  scoreNumber.textContent = `${score}/${questions.length}`;
  scorePercent.textContent = `${percent}%`;
  correctCount.textContent = score;
  wrongCount.textContent = wrong;

  let message = "";
  let icon = "🏆";

  if (percent >= 85) {
    message = "Отличный результат! Ты отлично знаешь историю казахского народа и героические подвиги батыров. Ты настоящий историк!";
    icon = "🏆";
  } else if (percent >= 70) {
    message = "Хороший результат! Ты хорошо разбираешься в истории. Ещё немного — и ты станешь настоящим знатоком.";
    icon = "⭐";
  } else if (percent >= 50) {
    message = "Неплохо! Ты показал хорошие знания. Повтори материал и попробуй улучшить результат.";
    icon = "👍";
  } else {
    message = "Нужно больше учиться. История Казахстана интересна — повтори материал и попробуй ещё раз!";
    icon = "📚";
  }

  resultIcon.textContent = icon;
  resultText.textContent = message;
}

nextBtn.addEventListener("click", () => {
  if (selectedAnswer === null) {
    alert("Сначала выберите ответ.");
    return;
  }

  if (!answered) {
    checkAnswer();
    return;
  }

  if (currentQuestionIndex === questions.length - 1) {
    showResult();
    return;
  }

  currentQuestionIndex += 1;
  renderQuestion();
});

restartBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  selectedAnswer = null;
  score = 0;
  answered = false;

  resultCard.classList.add("hidden");
  quizCard.classList.remove("hidden");
  renderQuestion();
});

renderQuestion();