export default class Frogger {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.width = 38;
    this.height = 38;

    this.maxSpeed = 10;
    this.speedX = 0;

    this.position = {
      x: game.gameWidth / 2 - this.width / 2,

      y: game.gameHeight - this.height - 5
    };
  }

  moveLeft() {
    //this.speed = -this.maxSpeed;
    //this.speedX = -this.maxSpeed;
    this.position.x -= 48;
  }

  moveRight() {
    //this.speedX = this.maxSpeed;
    this.position.x += 48;
  }

  moveDown() {
    //this.speed = -this.maxSpeed;
    this.position.y += 48;
  }

  moveUp() {
    this.position.y -= 48;
  }

  draw(context) {
    context.fillStyle = "#0f0";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    // this.position.x += this.speed;

    if (this.position.x < 0) this.position.x = 0;
    if (this.position.y < 0) this.position.y = 0;
    if (this.position.x + this.width > 800) this.position.x = 800 - this.width;
    if (this.position.y + this.height > 600)
      this.position.x = 600 - this.height;

    //this.position.x += 5 / deltaTime;
  }
}
