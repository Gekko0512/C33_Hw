const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var gameState = "play";
var gameState1 = "end";
 
var particles = [];
var plinkos = [];
var divisions = [];
var score;
score = 0;

var divisionHeight;
divisionHeight = 0;

var turn;
turn = 5;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
   

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    






    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
   if(gameState == "play" ){
      score++;
      particles = new Particle(mouseX,10,10,10);
   }

   if(particles!=null){
      particles.display();
      if(particles.body.position.y>760){
         if(particles.body.position.x < 300){
            score = score+500;
            particles=null;
         }
         if(particles.body.position.x > 301 && particles.body.position.x < 600){
            score = score+100;
         }
         if(particles.body.position.x > 601 && particles.body.position.x < 900){
            score=score+200;
         }

      }



   }
}

