// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed*dt;
    if(this.x >= 505) this.x = -101; //if it reached right edge of board, move
                                    //back to the left side of board
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// The player class
let Player = function() {
  this.sprite = 'images/char-boy.png';
  //Player always starts at the bottom-left corner of the board
  this.x = 0;
  this.y = 404;

}

//Updates player position after checking for collision with all enemies
Player.prototype.update = function() {
  let player = this;
  allEnemies.forEach(function(enemy) {
    //if both enemy's and player's left edge are within 100px of each other
    if(Math.abs(player.x - enemy.x) < 100 &&
      //and their y positions are 20px apart, then reset after 0.6sec
      Math.abs(player.y - enemy.y) < 20) {
        setTimeout(function () {
          player.y = 404;
        }, 0.6);
      console.log('--collision!--');
      return;
    }
  });
}

//Same as Enemy's render()
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

//Displays a 'Success!' message for 2sec, when player reaches water
Player.prototype.displayWinMessage = function() {
  let winMessage = document.createElement('h2');
  let text = document.createTextNode('Success!');
  winMessage.appendChild(text);
  let body = document.getElementsByTagName('body')[0];
  body.appendChild(winMessage);
  setTimeout(function() {
    body.removeChild(winMessage);
  }, 2000);
}

//Moves player according to keypress
Player.prototype.handleInput = function(key) {
  switch(key) {
    case 'up':
      if(this.y > 0) { //change y only if player not at on the left edge
        this.y -= 85;
        if(this.y <= 0) { //If player has reached water, then reset after 0.7sec
          let player = this; //store 'this' in a variable to pass it to setTimeout
          setTimeout(function () {
            player.y = 404;
          }, 700);
          this.displayWinMessage(); //display a 'Success!' right below
                                    //the board for 2sec
          console.log('--Reached water--');
        }
      }
    break;

    case 'down':
      if(this.y < 404)
        this.y += 85;
    break;

    case 'left':
      if(this.x > 0)
        this.x -= 101;
    break;

    case 'right':
      if(this.x < 404)
        this.x += 101;
    break;
  }
}

// Now we instantiate 5 enemy objects
let enemy1 = new Enemy(-101, 60 , 100); //x, y, speed
let enemy2 = new Enemy(-202, 145, 30);
let enemy3 = new Enemy(-101, 230, 250);
let enemy4 = new Enemy(-301, 145, 80);
let enemy5 = new Enemy(-101, 230, 50);

// Place all enemy objects in an array called allEnemies
let allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];

// one Player object
let player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
