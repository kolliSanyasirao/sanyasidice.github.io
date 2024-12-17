let scorePlayer1 = 0;
let scorePlayer2 = 0;

function rollDice(player) {
    let roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById(`dice-${player}`).innerText = `🎲 ${roll}`;
    
    if (player === 'player1') {
        scorePlayer1 = roll;
        document.getElementById('score-player1').innerText = scorePlayer1;
    } else {
        scorePlayer2 = roll;
        document.getElementById('score-player2').innerText = scorePlayer2;
    }

    determineWinner();
}

function determineWinner() {
    if (scorePlayer1 > scorePlayer2) {
        document.getElementById('result').innerText = 'Player 1 Wins!';
    } else if (scorePlayer2 > scorePlayer1) {
        document.getElementById('result').innerText = 'Player 2 Wins!';
    } else {
        document.getElementById('result').innerText = 'It\'s a Tie!';
    }
}

function startNewGame() {
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    document.getElementById('score-player1').innerText = scorePlayer1;
    document.getElementById('score-player2').innerText = scorePlayer2;
    document.getElementById('result').innerText = '';
    document.getElementById('dice-player1').innerText = '🎲';
    document.getElementById('dice-player2').innerText = '🎲';
}
