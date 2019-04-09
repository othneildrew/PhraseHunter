/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

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



let phrase, game;

// Functions

/***
  * Initializes the program with default values at start of new game
**/
const init = () => {
  let keys = document.querySelectorAll('.key');
  let hearts = document.querySelectorAll('.tries img');
  phrase = null;
  game = null;

  __('.section#phrase > ul').innerHTML = '';

  keys.forEach(key => {
    key.className = 'key';
    key.disabled = false;
  });

  hearts.forEach(heart => {
    heart.src = 'images/liveHeart.png';
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





















// Event Handlers
__('#btn__reset').addEventListener('click', () => {
  init();
  game = new Game(phrases);
  game.startGame();
});




__('#qwerty').addEventListener('click', (e) => {
  //console.log(e.target.innerHTML);
  let isButton = e.target.tagName.toLowerCase();

  if (isButton === 'button') {
    let key = e.target.innerHTML;
    game.handleInteraction(key);
  }


});
