$(document).ready(function() {

    let currentScore = 0;
    let activePlayer = 0;
    let playing = true;

    $('.dice').hide()
    
    //Rolling dice functionnality
    $('.btn--roll').click(() => {
        if (playing) {
            const dice = Math.trunc(Math.random() * 6) + 1;

            $('.btn--roll').click(() => {
                $('.dice').show()
                $('.dice').attr('src', `./dice-element/dice-${dice}.png`)
            })

            if (dice !== 1) {
                currentScore += dice;
                activePlayer = activePlayer === 0 ? 1 : 0;
                $('.current', activePlayer) 
                textContent = currentScore; 
            } else {
                activePlayer = activePlayer === 0 ? 1 : 0;
                $('.current', activePlayer)
                textContent = currentScore;
            }
        }
    });

    //hold value to current score 
    $('.btn--hold').click(() => {
        if (playing) {
            let score = [0, 0]      
            score[activePlayer] += currentScore

            $(`#score-${activePlayer}`).text(score[activePlayer])

            if (score[activePlayer] >= 100) {
                playing = false;
                $('.dice').hide()

                $(`.player-${activePlayer}`).attr('winner-player')
                $(`.player-${activePlayer}`).remove('player-active')
            } else {
                activePlayer = activePlayer === 0 ? 1 : 0;
                $('.current', activePlayer)
                textContent = currentScore;
            }
        }
    });

    $('.btn--new').click(() => {
        scores = [0, 0];
        currentScore = 0;
        activePlayer = 0;
        playing = true;

        $('#score-0').text('0')
        $('#score-1').text('0')
        $('#current-0').text('0')
        $('#current-1').text('0')

        $('.dice').hide()
        $('.player-0').remove('player-winner')
        $('.player-1').remove('player-winner')
        $('.player-0').add('player-active')
        $('.player-1').remove('player-active')
    })

})