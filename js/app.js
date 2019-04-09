/*** Treehouse FSJS Techdegree
  * Project 4 - OOP Game App
  **/

const phrases = [
  'What Would Jesus Do',
  'Sounds Legit',
  'Bite The Bullet',
  'Eye of the Tiger',
  'Break a Leg',
  'The Best of Both Worlds',
  'A Picture is Worth One Thousand Words',
  'The Early Bird Gets The Worm',
  'Actions Speak Louder Than Words',
  'Time Is Money'
];

let phrase, game, attemptedLetters;



// FUNCTIONS

/***
  * Initializes the program with default values at start of new game
**/
const init = () => {
  let keys = document.querySelectorAll('.key');
  let hearts = document.querySelectorAll('.tries img');
  phrase = null;
  game = null;
  attemptedLetters = Array();

  __('.section#phrase > ul').innerHTML = '';

  keys.forEach(key => {
    key.className = 'key';
    key.disabled = false;
  });

  hearts.forEach(heart => {
    heart.src = 'images/liveHeart.png';
    heart.className = '';
  });
}


/***
  * Generates a random number from 0 to 'max'
**/
const randomNumGen = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}


/***
  * Shortcut function to document.querySelector
**/
const __ = (x) => {
  return document.querySelector(x);
}



// EVENT HANDLERS

__('#btn__reset').addEventListener('click', () => {
  init();
  game = new Game(phrases);
  game.startGame();
});


__('#qwerty').addEventListener('click', e => {
  // Listen for on-screen keyboard event and get/use key pressed
  let isButton = e.target.tagName.toLowerCase();

  if (isButton === 'button') {
    let key = e.target.innerHTML;
    game.handleInteraction(key);
  }
});


window.addEventListener('keyup', e => {
  // Listen for physical keyboard event and get/use key pressed
  let loggedKey = e.key.toLowerCase();

  if (game) {
    if ((/^[a-z]{1}$/).test(loggedKey) && !attemptedLetters.includes(loggedKey)) {
      attemptedLetters.push(loggedKey);
      game.handleInteraction(loggedKey);
    }
  }
});



// Animate the start button to get user's attention
__('#btn__reset').className = 'animated infinite bounce delay-3s slow';
