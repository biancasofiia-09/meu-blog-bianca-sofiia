// script.js
const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
        answer: 1
    },
    {
        question: "Qual é a cor do céu em um dia claro?",
        options: ["Azul", "Verde", "Amarelo", "Vermelho"],
        answer: 0
    },
    {
        question: "Quantos continentes existem?",
        options: ["4", "5", "6", "7"],
        answer: 3
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = '';

    const questionObj = questions[currentQuestion];
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerText = questionObj.question;

    const optionsList = document.createElement("ul");
    optionsList.classList.add("options");

    questionObj.options.forEach((option, index) => {
        const optionElement = document.createElement("li");
        optionElement.innerText = option;
        optionElement.onclick = () => selectOption(index);
        optionsList.appendChild(optionElement);
    });

    questionContainer.appendChild(questionElement);
    questionContainer.appendChild(optionsList);
}

function selectOption(selectedIndex) {
    const questionObj = questions[currentQuestion];

    if (selectedIndex === questionObj.answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultContainer = document.getElementById("result-container");
    resultContainer.style.display = 'block';
    resultContainer.innerText = `Você acertou ${score} de ${questions.length} perguntas.`;

    const submitButton = document.getElementById("submit-btn");
    submitButton.style.display = 'none'; // Esconde o botão de envio após o quiz terminar
}

function submitQuiz() {
    loadQuestion();
    document.getElementById("submit-btn").style.display = 'none';
}

loadQuestion();  // Carrega a primeira questão ao abrir a página
