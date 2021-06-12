$(document).ready(function() {

    let currentScore = 0;
    let activePlayer = 0;
    let playing = true;

    $('.dice').hide();
   
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
                $('current', activePlayer) 
                textContent = currentScore; 
            } else {
                activePlayer = active === 0 ? 1 : 0;
                $('current', activePlayer)
                textContent = currentScore;
            }
        }
    })

})