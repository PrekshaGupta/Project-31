const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 795, width, 10);

  for(var k = 0; k<=width; k = k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j<=width; j = j+50){
    plinkos.push(new Plinko(j, 75));
  }

  for(var j = 15; j<=width-10; j = j+50){
    plinkos.push(new Plinko(j, 175));
  }

  for(var j = 40; j<=width-20; j = j+50){
    plinkos.push(new Plinko(j, 275));
  }

  for(var j = 15; j<=width; j = j+50){
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,7));
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var l = 0; l < plinkos.length; l++){
    plinkos[l].display();
  }

  drawSprites();
}