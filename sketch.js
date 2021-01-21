var roof;
var B1,B2,B3,B4,B5;
var C1,C2,C3,C4,C5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
	
	roof = new Roof(415,100,600,20);
    B1 = new Bob(200,550,50);
    B2 = new Bob(300,550,50);
    B3 = new Bob(400,550,50);
    B4 = new Bob(500,550,50);
    B5 = new Bob(600,550,50);
    C1 = new Chain(B1.body,roof.body,-B1Diameter*2,0);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("cyan");

  roof.display();
  B1.display();
  B2.display();
  B3.display();
  B4.display();
  B5.display();
  C1.display();
  drawSprites();
 
}