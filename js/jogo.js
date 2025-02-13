// script.js
let randomNumber;
let attemptsLeft;
let gameOver = false;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Gera um número entre 1 e 100
    attemptsLeft = 10; // Define o número de tentativas
    gameOver = false;
    document.getElementById("message").textContent = '';
    document.getElementById("attempts").textContent = attemptsLeft;
    document.getElementById("guess").value = '';
    document.getElementById("reset-btn").style.display = 'none';
}

function checkGuess() {
    if (gameOver) return;

    const guess = parseInt(document.getElementById("guess").value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById("message").textContent = 'Por favor, insira um número válido entre 1 e 100.';
        return;
    }

    attemptsLeft--;
    document.getElementById("attempts").textContent = attemptsLeft;

    if (guess === randomNumber) {
        document.getElementById("message").textContent = `Parabéns! Você acertou o número ${randomNumber}!`;
        gameOver = true;
    } else if (guess < randomNumber) {
        document.getElementById("message").textContent = 'Tente um número maior!';
    } else {
        document.getElementById("message").textContent = 'Tente um número menor!';
    }

    if (attemptsLeft === 0 && !gameOver) {
        document.getElementById("message").textContent = `Fim de jogo! O número era ${randomNumber}.`;
        gameOver = true;
    }

    if (gameOver) {
        document.getElementById("reset-btn").style.display = 'block';
    }
}

function resetGame() {
    startGame();
}

startGame(); // Inicia o jogo quando a página é carregada
