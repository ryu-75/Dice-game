$(document).ready(function() {

    let player0El = $('.player-0')
    let player1El = $('.player-1')
    let score0El = $('#score-0');
    let score1El = $('#score-1');
    let current0El = $('#current-0');
    let current1El = $('#current-1');

    let diceEl = $('.dice');
    let btnNew = $('.btn--new');
    let btnRoll = $('.btn--roll');
    let btnHold = $('.btn--hold');
    

    let scores, activePlayer, currentScore; 
    
    //Starting condition
    const init = (() => {
        scores = [0, 0];
        activePlayer = 0;
        currentScore = 0;
        playing = true;

        score0El.text('0')
        score1El.text('0')
        current0El.text('0')
        current1El.text('0')

        diceEl.add('hidden')


        diceEl.add('hidden');
        player0El.toggleClass('player-active');
        player0El.removeClass('player-winner');
        player1El.removeClass('player-winner');
        player1El.removeClass('player-active')

        
    });
    init();

    //Switch player function
    const switchPlayer = () => {
        $(`#current-${activePlayer}`).text('0');
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.toggleClass('player-active')
        player1El.toggleClass('player-active')
    };

    //Rolling dice functionnality
    btnRoll.click(() => {
        if (playing) {
            //1. Generatin a random dice roll
            const dice = Math.trunc(Math.random() * 6) + 1;

            diceEl.show()
            diceEl.attr('src', `./dice-element/dice-${dice}.png`)

            //3. Check for rolled 1: if true, switch to next player
            if (dice !== 1) {
                currentScore += dice;
                $(`#current-${activePlayer}`).text(currentScore)
            } else {
                switchPlayer()
            }
        }
    });

    //hold value to current score
    btnHold.click(() => {
        if (playing) {
            scores[activePlayer] += currentScore ;
            $(`#score-${activePlayer}`).html(scores[activePlayer]);

            if (scores[activePlayer] >= 100) {
                playing = false;
                $('.dice').add('hidden')

                $(`.player-${activePlayer}`).add('winner-player');
                $(`.player-${activePlayer}`).remove('player-active')
            } else {
                switchPlayer()
            }
        }
    })

    btnNew.click(init)
})
