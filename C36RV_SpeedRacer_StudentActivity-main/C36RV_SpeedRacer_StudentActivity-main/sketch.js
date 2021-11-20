var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount=0;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  carImg1 = loadImage("assets/car1.png")
  carImg2 = loadImage("assets/car2.png")
  trackImg = loadImage("assets/track.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  if(playerCount === 2){
    game.update(1)
  }

}

function draw() {
  background(backgroundImage);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
