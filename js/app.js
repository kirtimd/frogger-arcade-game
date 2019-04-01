// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    //added by me:
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

    this.x += (this.speed * dt);
    if(this.x >= 505) this.x = -101; //if you reach end of canvas, reset to 0
      //console.log('in update: ');

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function() {
  this.sprite = 'images/char-boy.png';
  this.x = 0;
  this.y = 505;

}

Player.prototype.update = function() {
  let player = this;
  allEnemies.forEach(function(enemy) {
    //console.log('in update-- '+ player.x +'  '+ enemy.x);
    if(Math.abs(player.x - enemy.x) < 10 && Math.abs(player.y - enemy.y) < 100) {
      player.y = 505;
      console.log('collision!');
      return;
    }
  });
}

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(key) {

  switch(key) {
    case 'up':
      if(this.y > 0) {
        this.y -= 101;
        if(this.y === 0) { //If player has reached water, then reset
          this.y = 505;
        }
    break;

    case 'down':
      if(this.y < 505)
        this.y += 101;
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

// Now instantiate your objects.
let enemy1 = new Enemy(-101, 83 * 1, 10);
let enemy2 = new Enemy(-202, 83 * 2, 30);
let enemy3 = new Enemy(-101, 83 * 3, 20);
// Place all enemy objects in an array called allEnemies
let allEnemies = [enemy1, enemy2, enemy3];

// Place the player object in a variable called player
let player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
