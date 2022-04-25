// grabbing references to spans that will be changing text
const front = document.getElementById('front');
const back = document.getElementById('back');
const multiple = 100;

function selectFront() {
  front.classList.add('selected');
}

function deleteFront() {
  front.textContent = '';
}

function addText(newText) {
  back.textContent = newText;
}

// could combine these methods with
// their front counter parts by
// just passing a reference to the element
// but i think keeping them seperate
// makes it easier to follow.
function selectBack() {
  back.classList.add('selected');
}

function deleteBack() {
  back.textContent = '';
  back.classList.remove('selected');
}

function typeText(goalString) {
  let currentString = '';

  for (let i = 0; i < goalString.length; i += 1) {
    currentString += goalString[i];
    if (goalString.charCodeAt(i) > 255) {
      currentString += goalString[i + 1];
      i += 1;
    }
    setTimeout(addText, multiple * i, currentString);
  }
}

function typeTextAndDelete(goalString) {
  typeText(goalString);

  const time = (goalString.length * multiple) * 2;
  setTimeout(selectBack, time);
  setTimeout(deleteBack, time + 500);
}

function startTyping() {
  const stringsToType = [
    'is a software engineer.',
    'makes websites.',
    'can school you in fifa. \uD83D\uDD25',
    'enjoys solving problems.',
    'writes code. \uD83D\uDC4C',
  ];

  let timeForPreviousWord = 0;
  let timeForCurrentWord = 0;

  stringsToType.forEach((string, index) => {
    timeForCurrentWord = (multiple * string.length) * 2 + 1000;
    const func = index === (stringsToType.length - 1) ? typeText : typeTextAndDelete;
    setTimeout(func, timeForPreviousWord + 2000, string);
    timeForPreviousWord = timeForCurrentWord + timeForPreviousWord;
  });
}

setTimeout(selectFront, 2000);
setTimeout(deleteFront, 3000);
setTimeout(startTyping, 4000);

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.firstElementChild.classList.toggle('flipped');
  });
});
