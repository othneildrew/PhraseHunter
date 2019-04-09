/*** Treehouse FSJS Techdegree
  * Project 4 - OOP Game App
  * The Phrase class accepts a phrase parameter and handles showing the phrase
  * to the user, checking if a given letter is within the current phrase, and
  * showing correct letters.
  **/
class Phrase {
  constructor (phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay () {
    let phraseContainer = __('.section#phrase > ul');

    // Split the phrase by each character and create an li element
    this.phrase.split('').forEach(character => {
      let li = document.createElement('li');

      if ((/\s/).test(character)) {
        li.className = 'space';
        li.textContent = ' ';
        phraseContainer.append(li);
      } else {
        li.className = `hide letter ${character}`;
        li.textContent = character;
        phraseContainer.append(li);
      }
    });
  }

  checkLetter (key) {
    // Returns true if array of phrase characters includes given key
    if (this.phrase.split('').includes(key)) {
      phrase.showMatchedLetter(key);
      return true;
    } else {
      return false;
    }
  }

  showMatchedLetter (key) {
    let letters = document.querySelectorAll(`.letter.${key}`);

    letters.forEach(letter => {
      letter.className = `show letter ${key} animated flash`;
    });
  }
}
