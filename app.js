'use strict';

$(document).ready(function(){

// creat array for populated game board
var $wordZ = [
  'doctype',
  'css',
  'array',
  'html',
  'server',
  'jquery',
  'github',
  'object',
  'method',
  'flexbox',
  'class'
];
// on load, game board creates li items
  var $letterInput = $('input');
  var $addLetter   = $('#submit-letter');
  var $randoNum    = Math.floor(Math.random()*($wordZ.length));
  var $wordSelect  = $wordZ[$randoNum];
  var $splitWord   = $wordSelect.split('');
  var $count       = 0;

// As explained by Bobby; after splitting array item word, it is reassigned to a li item and the letter is hidden but the data is kept
  $splitWord.forEach(function(letter) {
    var $li = $(`<li class = "not-found" data-letter = ${letter}></li>`);
    $('.word').append($li);
    $('li').css('border-bottom', '2px solid white');
// console.log(letter);
  });

// Check if Input is equal to any of the data items, if so reveal the data-letter in the corresponding li item

// For Keypress
$('input').on('keypress', function(event) {
  if (event.which === 13) {
// Filter through split array item to see if input matches any of the letters
    var $notFound = true;
    for (var i = 0; i < $splitWord.length; i++) {
      var $rightItem = $('.word li').eq(i);
      if ($letterInput.val().toLowerCase() === $rightItem.attr('data-letter')) {
// console.log('Add correct letter')
// If letter matches data in li item attach input value to li
        $rightItem.text($rightItem.attr('data-letter'));
        $rightItem.css('border-bottom', '');
//Set Counter for winner
        $count += 1;
// Show every instance of letter...Thanks Bobby
        $notFound = false;
      };
    };
// If input is incorrect remove white div box which was concealing img underneath
    if($notFound) {
      $('.lilGuy div').first().remove();
// Append wrong letter to div field of wrong letters
      var letterInputVal = $letterInput.val();
      var wrongLetterText = $('.wrongLetter').text();
      $('.wrongLetter').text(letterInputVal + wrongLetterText);
    };
// Clear input field
    $letterInput.val('');
// Declare winner or loser
    var winner = function () {
      if ($count === $('li').length) {
        alert('Congrats! You win. Refresh page, and play again!');
      };
    };
    loser();
    winner();
  };
});

// On click event instead of keypress
  $addLetter.on('click', function() {
// Filter through split array item to see if input matches any of the letters
    var $count = 0;
    var $notFound = true;
    for (var i = 0; i < $splitWord.length; i++) {
      var $rightItem = $('.word li').eq(i);
      if ($letterInput.val().toLowerCase() === $rightItem.attr('data-letter')) {
        console.log('Add correct letter')
        $rightItem.text($rightItem.attr('data-letter'));
        $rightItem.css('border-bottom', '');
// Clear input field
        $count += 1;
        $notFound = false;
      };
    };
    if($notFound) {
      $('.lilGuy div').first().remove();
      var letterInputVal = $letterInput.val();
      var wrongLetterText = $('.wrongLetter').text();
      $('.wrongLetter').text(letterInputVal + wrongLetterText);
    };
    $letterInput.val('');
    var winner = function () {
      if ($count === $('li').length) {
        alert('Congrats! You win. Refresh page, and play again!');
      };
    };
    winner();
    loser();
  });

  var loser = function () {
    if ($('.lilGuy div').length === 0) {
      alert('Sorry Dweeb, Game Over');
    };
  };

});
