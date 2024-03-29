document.addEventListener('DOMContentLoaded', function() {
    const choices = ['rock', 'paper', 'scissors'];
    const choiceImages = document.querySelectorAll('.choice');
    const resultText = document.querySelector('.result');
    const computerChoiceText = document.querySelector('.computer-choice');
    const winnerText = document.querySelector('.winner');
    const playerScoreText = document.querySelector('.player-score');
    const computerScoreText = document.querySelector('.computer-score');
    const resetButton = document.getElementById('resetButton');

    let playerScore = 0;
    let computerScore = 0;

    choiceImages.forEach(image => {
        image.addEventListener('click', function() {
            const playerChoice = this.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            const result = getResult(playerChoice, computerChoice);

            resultText.textContent = `You chose ${playerChoice}.`;
            computerChoiceText.textContent = `Computer chose ${computerChoice}.`;
            winnerText.textContent = result;

            if (result === 'You win!') {
                playerScore++;
            } else if (result === 'Computer wins!') {
                computerScore++;
            }

            playerScoreText.textContent = `Your Score: ${playerScore}`;
            computerScoreText.textContent = `Computer Score: ${computerScore}`;
        });
    });

    resetButton.addEventListener('click', function() {
        playerScore = 0;
        computerScore = 0;
        playerScoreText.textContent = `Your Score: ${playerScore}`;
        computerScoreText.textContent = `Computer Score: ${computerScore}`;
    });

    function getResult(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'Computer wins!';
        }
    }
});
