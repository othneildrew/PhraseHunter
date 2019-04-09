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
  * Function initializes the program with default values
**/
const init = () => {

  //let tries = document.querySelectorAll('.tries');



}

/***
  * Generates a random number from 0 to 'max'
**/
const randomNumGen = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}



/***
  * Shortcut function to document.getElementById
**/
const __ = (x) => {
  return document.getElementById(x);
}





















// Event Handlers
__('btn__reset').addEventListener('click', () => {
  game = new Game(phrases);
  game.startGame();
  console.log(game);
});




__('qwerty').addEventListener('click', (e) => {
  //console.log(e.target.innerHTML);
  let isButton = e.target.tagName.toLowerCase();

  if (isButton === 'button') {
    let key = e.target.innerHTML;
    game.handleInteraction(key);
  }


});
