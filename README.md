# Classic Arcade Game Clone Project

## Table of Contents

- [Introduction](#{About})
- [Contribution](#{My contribution})
- [Additions/Improvements](#{Additions/Improvements to come})

## Introduction

This project is a part of Udacity's FEND program. The starter code repo by Udacity can be found here :
<https://github.com/udacity/frontend-nanodegree-arcade-game>

### The Game
#### Run
To run the game, you will need to render the webpage. To render it, you'll need a copy of the source code.
1. To clone/download this repo:
`git clone https://github.com/kirtimd/frogger-arcade-game.git`
2. To render the game, open index.html in any browser.

#### Play

* The goal is to help the player waiting at the bottom of the board to reach the water at the top.
* You have to keep the player away from the enemy bugs, which move at varying speeds.
* If the player collides with a bug or if player reaches water, the game is reset.

To move the player, use the arrow keys on your keyboard.

## My Contribution
I have implemented all of the Player class and part of the Enemy class(constructor and update()). Essentially, I have written the logic behind how the player and bugs move, how collisions are detected, and whether the game progresses or resets. The rest belongs to Udacity.

## Additions/Improvements to come
* Levels, with increasing difficulty :
  * Larger grid
  * More challenging enemies
  * Impediments in path
* Player types
