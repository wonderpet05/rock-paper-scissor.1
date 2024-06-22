document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    const choicesEmojis = {
        rock: '✊',
        paper: '✋',
        scissors: '✌️'
    };

    const playerPickDiv = document.getElementById('player-pick');
    const computerPickDiv = document.getElementById('computer-pick');
    const resultDiv = document.getElementById('result');

    document.querySelectorAll('.choice').forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = button.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];

            playerPickDiv.textContent = `You: ${choicesEmojis[playerChoice]}`;
            computerPickDiv.textContent = `Computer: ${choicesEmojis[computerChoice]}`;

            const result = determineWinner(playerChoice, computerChoice);
            resultDiv.textContent = result;
        });
    });

    function determineWinner(player, computer) {
        if (player === computer) {
            return 'It\'s a draw!';
        } else if ((player === 'rock' && computer === 'scissors') || 
                   (player === 'paper' && computer === 'rock') || 
                   (player === 'scissors' && computer === 'paper')) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }
});
