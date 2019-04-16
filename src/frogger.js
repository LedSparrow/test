export default class Frogger {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.width = 38;
    this.height = 38;

    this.maxSpeed = 10;
    this.speedX = 0;

    let fcolor;

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
    context.fillStyle = this.fcolor;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    // this.position.x += this.speed;

    if (this.position.x < 0) this.position.x = 5;
    if (this.position.y < 0) this.position.y = 5;
    if (this.position.x + this.width > this.gameWidth)
      this.position.x = this.gameWidth - this.width - 5;
    if (this.position.y + this.height > this.gameHeight)
      this.position.y = this.gameHeight - this.height - 5;

    //this.position.x += 5 / deltaTime;
  }
}
