/*
 * DOTS: Level Two
 *
 */
let score = 0;

let ball1 = document.querySelector('.js-arena .js-ball:first-child');
let ball2 = document.querySelector('.js-arena .js-ball:nth-child(2)');
let ball3 = document.querySelector('.js-arena .js-ball:nth-child(3)');
let scoreEl = document.querySelector('.js-score');

ball1.addEventListener('click', increaseScore);
ball2.addEventListener('click', increaseScore);
ball3.addEventListener('click', increaseScore);

function increaseScore () {
    score += 10;
    console.log(score);
    if (score <100) {
        scoreEl.innerText = score;
    } else {
        declareWinner ();
    }
}
  function declareWinner() {
    document.body.classList.add('game-over');
  }
  
  