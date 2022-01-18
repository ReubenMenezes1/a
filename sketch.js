const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg, hero, heroImg, king, kingImg, guards, guard1, guard2, guard3, guardImg, lifeImg;
function preload() {
  bg = loadImage("assets/bg.jpg");
  heroImg = loadImage("assets/hero.png");
  kingImg = loadImage("assets/king.png");
  guardImg = loadImage("assets/guards.png");
  lifeImg = loadImage("assets/life.png");
}

function setup() {
  createCanvas(1500, 775);
  hero = new Hero(heroImg, 1400, 575, 0.25, 100);

  king = createSprite(125, 525);
  king.addImage(kingImg);
  king.scale = 0.3;

  guard1 = new Guard(guardImg, 300, 600, 0.5, 100);

  guard2 = new Guard(guardImg, 400, 600, 0.5, 100);

  guard3 = new Guard(guardImg, 500, 600, 0.5, 100);
  hero.display();
}

function draw() {
  background(bg);
  hero.handleControls();
  // hero.showHealth();

  if (hero.x - guard1.x < (hero.width - guard1.width) / 2) {
    hero.x = 1200;
  }
  guard1.display();
  guard2.display();
  guard3.display();
  drawSprites();
}
