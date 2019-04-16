import Game from "./game";

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

//make canvas fdadlexible
//width = "528" height= "576">

const GAME_WIDTH = 528;
const GAME_HIGHT = 576;

//context.clearRect (0, 0, 800, 600);

let game = new Game(GAME_WIDTH, GAME_HIGHT);
game.start();

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  context.clearRect(0, 0, GAME_WIDTH, GAME_HIGHT);
  game.update(deltaTime);
  game.draw(context);

  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
