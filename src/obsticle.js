export default class Obsticle {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.width = 48;
    this.height = 48;

    this.speed = 100;

    this.position = {
      x: -50,

      y: [this.gameHeight - this.height * 2]
    };
  }

  draw(context) {
    for (let i = 0; i < this.position.y.length; i++) {
      context.fillStyle = "#f0f";
      context.fillRect(
        this.position.x,
        this.position.y[i],
        this.width,
        this.height
      );
    }
    //
  }

  update(deltaTime) {
    // if (!deltaTime) return;

    this.position.x += this.speed / deltaTime;
    if (this.position.x > this.gameWidth) this.position.x = -50;
  }
}
