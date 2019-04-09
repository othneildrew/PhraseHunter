/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor (phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay () {
    //let splitPhraseArray = this.phrase.split('');
    let phraseContainer = document.querySelector('.section#phrase > ul');

    this.phrase.split('').forEach(character => {
      let li = document.createElement('li');

      if ((/\s/).test(character)) {
        li.className = 'space';
        li.textContent = ' ';
        phraseContainer.append(li);
      } else {
        li.className = 'hide letter ' + character;
        li.textContent = character;
        phraseContainer.append(li);
      }
    });
  }

  checkLetter (key) {
    if (this.phrase.split('').includes(key)) {
      phrase.showMatchedLetter(key);
      return true;
    } else {
      return false;
    }
  }

  showMatchedLetter (key) {
    let letters = document.querySelectorAll('.letter.' + key);

    letters.forEach(letter => {
      letter.className = 'show letter';
    });
  }
}
