# Tim Frankie: Project 1 - Hangman #
_____

### WDI Project #1: The Game ###

For my first project I designed the game **Hangman**

1.) **Explanations of the technologies used**

- This project used<br>
• **[HTML]**<br>
was used to implement the structure of the site.<br>
• **[CSS]**<br>
gave the style and organized the layout/aesthetics of the site<br>
• **[JavaScript]**<br>
offered the functionality and logic of the site for user interaction<br>
• **[jQuery]**<br>
is a feature-rich JavaScript library which simplifies complex JavaScript functions and DOM manipulation<br>
• and the developer tools in both **[Google Chrome]** and **[Apple Safari]**, for debugging logic commands and making adjustments prior to changing the source code.

2.) **Approach Taken**

- Before I even began writing any code, the first thing I did was planned out the wireframe and logic needed for my game. Through writing the pseudocode, I learned that there was **5 logic problems**.
> 1.Create an array with various words as each item<br>2. Once the page populates, select an item from that array and split up that item into individual parts.<br>3. Check to see if the users input matched any of the split populated item.<br>4. If the item did not match, remove a div element labeled *limb* which was covering the hangman image in a sequential order.<br>5. Create a winning and losing state if the user corrected the right word or made 6 wrong guesses.
- Once I was done with the wireframe and pseudocode, I coded out the HTML of the site and organized the sites layout with very basic CSS. I attached a class named *check* which placed a 1px border on all elements in order to see how  interacted with one another in the box model.
- I then jumped into the app.js file and began using the jQuery library to implement DOM manipulation and logic into the site. I placed the pseudocode into the app.js file and used it as a guide to work out the syntax which would implement the actual jQuery(JavaScript) code to achieve these commands. This was no easy task and required many hours of banging my head against a wall and asking for a great deal of advice and suggestions from both my cohort peers and instructors. ***Thank you all who helped***.<br>
- Once the logic was stable I jumped back into the CSS and placed the skin on the site, and worked between the css file and chrome inspector to see how the site looked on both a desktop and mobile device.

3.) **User Stories**

- As a user I should be able to experience a new game with a new random word after every page refresh
- As a user I should be able to place a letter into the input field and check to see if it matches the hidden word by either a keypress or button click
- As a user I should see a revealed body limb appear if I guess wrong, and see that wrong letter appear in the *wrong letters:* area above the board.
- As a user I should be able to see my right guessed letter appear in the hidden word area where the underscore place holder once resided
- As a user I should see an alert that says I lost if all 6 body parts are revealed.
- As a user I should be able to receive a congratulations message if I guess the right letter.
- As a user I should be able to view and play the game with ease on both a browser and mobile without having to zoom in to view anything.

4.) **Wireframe**<br>
![wireframe]

5.) **How To Use**

Using the keypad on a desktop or mobile device a user guesses a letter into the input field and enters it by pressing return on the keypad or clicks the green **Add** button. If correct, that input will replace the empty underscore placeholder where that letter resides in the hidden word. If wrong the the input will go to wrong letter bank and a limb will be revealed. If/when the word is guessed correct the user will be alerted that they have won. If all the limbs are revealed the user will be alerted that they have lost.

6.) **Unsolved Problems**

I was very proud of what I was able to accomplish in 5 days. That said there are some things I wish I had more time to accomplish. The good news is that with more knowledge I can always go back and fix up my code with new skills and techniques.

- The first thing I wish I was able to fix was I wanted the final limb to be presented before the alert that the user lost.
- I would love to add animations to the characters in the game. When wrong perhaps the lilGuy gets shook and money falls from him. Or perhaps a animation on the button when enter is pressed or clicked.
- I would like to work on the logic and add alerts for times when the user might have already selected a letter and not have them loose a turn. Along the lines of streamlining the game more I am going to put a restriction of not being able to enter when to letters are in the input field/when there isn't any input.

[HTML]:http://html.com/
[CSS]: https:en.wikipedia.org/wiki/Cascading_Style_Sheets
[JavaScript]: https://www.javascript.com/
[jQuery]:https:jquery.com/
[Google Chrome]:https://developers.google.com/web/tools/
[Apple Safari]:https://developer.apple.com/library/content/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html
[wireframe]:http://imgur.com/nWIvx43
