
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render
var wall1,wall2,wall3;
var paper1,ground1,dustbin1;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new Paper(200,450,70)
	ground1=new Ground(800,690,1600,40)
	
  dustbin1=new dustbin(1200,670)

  var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1600,
	  height: 700,
	  wireframes: false
	}
  });

  Engine.run(engine);
  Render.run(render);
  
  //Engine.run(engine);
	//Render.run(render);
}


function draw() {
  
  background(230);
  Engine.update(engine)
  ground1.display();
  paper1.display();
  dustbin1.display()
  
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-145})
	}
}

