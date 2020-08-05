# TIc-Tac-Toe

- Contributor: Chadrick Dickerson
- Contributor-Page: https://github.com/chadrick-d-dev
- Repo-Link: https://github.com/chadrick-d-dev/TIc-Tac-Toe

## Overview of project
In this project I was expected to create a fully functioning and amusing Tic Tac Toe game app!

## Goals of project
- Here I was expected to show off all that I have learned so far at Turing in Module 1.
- Important topics that I would need to demonstrate comprehension of include:
  - Knowing the difference between the data model and how its data displayed on the DOM.
  - localStorage
  - Dry JavaScript
  - Event Delegation to handle similar event handlers
  - Using for loops to iterate through DOM elements
  - Using problem solving skills to overcome challenging problems while not depending on outside "answers."

## Overview of Technologies used

### Code architecture
This project contained:
- player.js
  - this file held the Player class, which was in charge of saving and retrieving data of the player class instances of the game class from localStorage.
- game.js
  - this file held was responsible for the game's functionality, which was to keep track of game data that it would communicate to and receive from the DOM.
- main.js
  - this file was in charge of event listeners, querySelected elements, and DOM manipulating functions.
- index.html  
 - The skeleton blueprint of the DOM
- styles.css
  - The styling of the DOM

### challenges
- For the greater length of the project I was blindly forging ahead while neglecting aspects of the grading rubric. The biggest part I neglected was Data Model and DOM communication, I created so many methods using direct DOM manipulation. On the last day of the project it hit me that i was doing it all wrong so I scrambled to revamp all my code... To my dismay I needed more time to redo everything, but I gave it my all regardless!

### wins
- I was able to get the game to be fully functional, while perhaps not being impeccable with my Data model, I made a kick-booty game.

### Other reflections
- I should definitely go over rubrics with my managers before charging ahead, as I notice I have a tendency to skimp over details!

### Gif Screen Shots!!  

![gif of clicking on game grid, winning, and getting a draw](/assets/tic-tac-toe1.gif)  

- The gif above demonstrates how you can click on the game board and win, or get a draw.  

![gif of clicking over already clicked parts of grid, and scrolling on right side with overflow](/assets/tic-tac-toe2.gif)  

- The gif above demonstrates how you clicking over an already click box of the game board will not change the image. It also demonstrates how the side columns feature scrolling once they are too full to show all mini board wins.
