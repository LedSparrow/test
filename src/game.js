import InputHandler from "./input";
import Obsticle from "./obsticle";
import Frogger from "./frogger";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }
  start() {
    this.obsticle = new Obsticle(this);
    this.frogger = new Frogger(this);

    new InputHandler(this.frogger);
  }

  boxes() {
    return !(
      this.frogger.position.x >
        this.obsticle.position.x + this.obsticle.width ||
      this.frogger.position.x + this.frogger.width < this.obsticle.position.x ||
      this.frogger.position.y >
        this.obsticle.position.y + this.obsticle.height ||
      this.frogger.position.y + this.frogger.height < this.obsticle.position.y
    );
  }

  draw(context) {
    this.frogger.draw(context);
    this.obsticle.draw(context);
  }

  update(deltaTime) {
    this.frogger.update(deltaTime);
    this.obsticle.update(deltaTime);
  }
}
