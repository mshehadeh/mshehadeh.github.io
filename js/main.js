$(document).ready(function() {

  // grabbing references to spans that will be changing text
  var front = $("#front-end");
  var back = $("#back-end");
  var name = $("#header");

  // get the magic started
  setTimeout(selectFront, 2000);
  setTimeout(deleteFront, 3000);
  setTimeout(startTyping, 4000);

  function selectFront() {
    front.addClass("selected");
  }

  function deleteFront() {
    front.text("")
  }

  function startTyping() {
    var stringsToType = [
      "is a software engineer.",
      "makes websites.",
      "can school you in fifa.",
      "enjoys solving problems.",
      "writes code."
    ]

    var time = 0;
    var timeForPreviousWord = 0;
    var timeForCurrentWord = 0;
    var multiple = 100;

    for (var i = 0; i < stringsToType.length; i++) {
      timeForCurrentWord = (multiple * stringsToType[i].length) * 2 + 1000;
      if (i == stringsToType.length - 1) {
        setTimeout(typeText, timeForPreviousWord + 2000, stringsToType[i]);
      } else {
        setTimeout(typeTextAndDelete, timeForPreviousWord + 2000, stringsToType[i]);
      }

      timeForPreviousWord = timeForCurrentWord + timeForPreviousWord;
    }
  }


function typeTextAndDelete(goalString) {
  var currentString = "";
  var multiple = 100;

  for (var i = 0; i < goalString.length; i++) {
    currentString = currentString + goalString[i];
    setTimeout(addText, multiple * i, currentString);
  }

  var time = (goalString.length * multiple) * 2 ;
  setTimeout(selectBack, time);
  setTimeout(deleteBack, time + 500 );
}

function typeText(goalString) {
  var currentString = "";
  var multiple = 100;

  for (var i = 0; i < goalString.length; i++) {
    currentString = currentString + goalString[i];
    setTimeout(addText, multiple * i, currentString);
  }
}


  function addText(newText) {
    back.text(newText);
  }

  // could combine these methods with
  // their front counter parts by
  // just passing a reference to the element
  // but i think keeping them seperate
  // makes it easier to follow.
  function selectBack() {
    back.addClass("selected");
  }

  function deleteBack() {
    back.text("")
    back.removeClass("selected");
  }
});
