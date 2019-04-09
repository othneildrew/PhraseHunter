/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor (phrases) {
    this.missed = 0;
    this.phrases = phrases;
    this.activePhrase = null;
  }

  startGame () {
    // Hide start screen overlay
    document.getElementById('overlay').style.display = 'none';

    // Get and set game phrase
    phrase = new Phrase(this.getRandomPhrase());
    this.activePhrase = phrase.phrase;
    phrase.addPhraseToDisplay();
  }

  getRandomPhrase () {
    return phrases[randomNumGen(this.phrases.length - 1)];
  }

  handleInteraction (key) {
    let splitPhraseArray = this.activePhrase.split('');
    let keys = document.querySelectorAll('button.key');
    let isCorrectLetter = phrase.checkLetter(key);

    if (isCorrectLetter) {
      phrase.showMatchedLetter();
    } else {
      console.log('No matching letter');
      game.removeLife();
    }

    // Show user the keys they have pressed and whether it was correct or not
    keys.forEach(keyLetter => {
      if (keyLetter.innerHTML === key && isCorrectLetter) {
        keyLetter.className = 'chosen';
        keyLetter.disabled = true;
      } else if (keyLetter.innerHTML === key && !isCorrectLetter) {
        keyLetter.className = 'wrong';
        keyLetter.disabled = true;
      }
    });




  }

  removeLife () {
    let hearts = document.querySelectorAll('.tries img');
    this.missed = this.missed + 1;
    hearts[5 - this.missed].src = 'images/lostHeart.png';

    if(this.missed >= 5) {
      game.gameOver();
    }
  }

  checkForWin () {

    return true;


  }

  gameOver () {

    let won = game.checkForWin();
    console.log('GAME OVER. YOU LOST ALL YOUR HEARTS');


  }


}
