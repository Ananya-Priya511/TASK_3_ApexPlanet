// --- SCRIPT LOAD CHECK ---
console.log("script.js loaded successfully!");

// QUIZ FUNCTIONALITY
const quizQuestions = [
    {
        question: "Which CSS property is used to create responsive layouts?",
        options: ["display: block", "position: absolute", "display: grid", "float: left"],
        correctAnswer: "display: grid"
    },
    {
        question: "Which JavaScript method is used to fetch data from an API?",
        options: ["fetch()", "get()", "retrieve()", "callAPI()"],
        correctAnswer: "fetch()"
    }
];

let currentQuestion = 0;
let score = 0;

const startQuizBtn = document.getElementById("start-quiz-btn");
const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-question-btn");
const resultEl = document.getElementById("quiz-result");
const questionCountEl = document.getElementById("question-count");
const scoreEl = document.getElementById("score");

startQuizBtn.addEventListener("click", () => {
    startQuizBtn.style.display = "none";
    quizContainer.style.display = "block";
    loadQuestion();
});

function loadQuestion() {
    const q = quizQuestions[currentQuestion];
    questionEl.textContent = q.question;
    questionCountEl.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
    scoreEl.textContent = `Score: ${score}`;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.addEventListener("click", () => selectAnswer(btn, option === q.correctAnswer));
        optionsEl.appendChild(btn);
    });

    nextBtn.style.display = "none";
}

function selectAnswer(button, isCorrect) {
    const allBtns = optionsEl.querySelectorAll("button");
    allBtns.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("incorrect");
    }

    scoreEl.textContent = `Score: ${score}`;
    nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        loadQuestion();
    } else {
        quizContainer.style.display = "none";
        resultEl.style.display = "block";
        resultEl.textContent = `You scored ${score} out of ${quizQuestions.length}`;
    }
});

// IMAGE CAROUSEL
const images = ["images/carousel1.jpg", "images/carousel2.jpg", "images/carousel3.jpg"];
let currentIndex = 0;

const carouselImage = document.getElementById("carousel-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtnC = document.getElementById("next-btn");
const dotsContainer = document.querySelector(".carousel-dots");
const currentNum = document.getElementById("current-image-number");
const totalNum = document.getElementById("total-images");

totalNum.textContent = images.length;

function updateCarousel() {
    carouselImage.src = images[currentIndex];
    currentNum.textContent = currentIndex + 1;

    dotsContainer.innerHTML = "";
    images.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.className = "dot" + (i === currentIndex ? " active" : "");
        dot.addEventListener("click", () => {
            currentIndex = i;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    });
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

nextBtnC.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}, 5000);

updateCarousel();

// WEATHER SECTION (DUMMY DATA)
const getWeatherBtn = document.getElementById("get-weather-btn");
const refreshWeatherBtn = document.getElementById("refresh-weather-btn");
const weatherDisplay = document.getElementById("weather-display");

const weatherCity = document.getElementById("weather-city");
const weatherTemp = document.getElementById("weather-temp");
const weatherCondition = document.getElementById("weather-condition");
const weatherHumidity = document.getElementById("weather-humidity");
const weatherOverall = document.getElementById("weather-overall-condition");

function showWeather() {
    weatherCity.textContent = "Delhi";
    weatherTemp.textContent = "32°C";
    weatherCondition.textContent = "Sunny";
    weatherHumidity.textContent = "38%";
    weatherOverall.textContent = "Hot and dry";
    weatherDisplay.style.display = "block";
}

getWeatherBtn.addEventListener("click", showWeather);
refreshWeatherBtn.addEventListener("click", showWeather);

