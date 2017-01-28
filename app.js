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
      if ($letterInput.val() === $rightItem.attr('data-letter')) {
// console.log('Add correct letter')
// If letter matches data in li item attach input value to li
        $rightItem.text($rightItem.attr('data-letter'));
        $rightItem.css('border-bottom', '');
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
    loser();
  };
});

// On click event instead of keypress
  $addLetter.on('click', function() {
// Filter through split array item to see if input matches any of the letters
    var $notFound = true;
    for (var i = 0; i < $splitWord.length; i++) {
      var $rightItem = $('.word li').eq(i);
      if ($letterInput.val() === $rightItem.attr('data-letter')) {
        console.log('Add correct letter')
        $rightItem.text($rightItem.attr('data-letter'));
        $rightItem.css('border-bottom', '');
// Clear input field
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
    loser();
  });

  var loser = function () {
    if ($('.lilGuy div').length === 0) {
      alert('Sorry Dweeb, Game Over');
    };
  };

  var winner = function () {
    if ($('.lilGuy div').length === 0) {
      alert('Sorry Dweeb, Game Over');
    };
  };

});
