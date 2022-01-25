const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon;

var canhao, bola_canhao, barco;

var bolas = [];

function preload() 
{
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() 
{

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  canhao = new Cannon(170, 150, 190, 120, angle);

  barco = new Boat(width-70, height-60, 170, 140, -80)
0
}

function draw() 
{
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  
  canhao.show();
  barco.display();

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  

  //bola_canhao.display()

  for(var i = 0; i < bolas.length; i++)
  {
    mostrarBolas(bolas[i],i);
  }

}

function keyReleased()
{
  if(keyCode == DOWN_ARROW)
  {
    bolas[bolas.length-1].atirar()
  }
}

function keyPressed()
{
  if(keyCode == DOWN_ARROW)
  {
    bola_canhao = new CannonBall(170, 150);
    bolas.push(bola_canhao)
  }
}

function mostrarBolas(bola,i)
{
  if(bola)
  {
    bola.display()
  }
}
