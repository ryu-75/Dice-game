'use-strict'

const player0El = document.querySelector('.player-0');
const player1El = document.querySelector('.player-1');
const score0El = document.querySelector('#score-0');
const score1El = document.getElementById('score-1');
const current0El = document.getElementById('current-0');
const current1El = document.getElementById('current-1')


//button elements 
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


//Starting conditions


const init = function () {
    const scores = [0, 0];
    let currentScore = 0;
    let activePlayer = 0;
    let playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player-winner');
    player1El.classList.remove('player-winner');
    player0El.classList.add('player-active');
    player1El.classList.remove('player-active')
};
init();

//Rolling dice functionnality
btnRoll.addEventListener('click', function () {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display dice
    diceEl.classList.remove('hidden')
    diceEl.src = `./dice-element/dice-${dice}.png`
    // 3.Check for rolled 1: if true, switch to next player
    if(dice !== 1) {
        // Add dice to current score
        currentScore += dice;
        document.getElementById(`current-${activePlayer}`).textContent = currentScore;
    } else {
        activePlayer = activePlayer === 0 ? 1 : 0;
    }
});

//hold value to current score
btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;

        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden')

            document.
            querySelector(`.player-${activePlayer}`)
            .classList.add('winner-player')
            document.
            querySelector(`.player-${activePlayer}`)
            .classList.remove('player-active')
            
        }
    } else {
        activePlayer = activePlayer === 0 ? 1 : 0
    }
});

btnNew.addEventListener('click', init);