const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup()
{

    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    ground1 = new ground(990, 265);
    ground2 = new ground(529, 397);

    polygon1 = new polygon(50, 200);

    //top
    block1 = new block(990, 155);
    //2nd layer
    block2 = new block(960, 195);
    block3 = new block(990, 195);
    block4 = new block(1020, 195);
    //3rd layer
    block5 = new block(930, 235);
    block6 = new block(960, 235);
    block7 = new block(990, 235);
    block8 = new block(1020, 235);
    block9 = new block(1050, 235);

    //top
    block10 = new block(529, 247);
    //2nd layer
    block11 = new block(499, 287);
    block12 = new block(529, 287);
    block13 = new block(559, 287);
    //3rd layer
    block14 = new block(469, 327);
    block15 = new block(499, 327);
    block16 = new block(529, 327);
    block17 = new block(559, 327);
    block18 = new block(589, 327);
    //4th layer
    block19 = new block(439, 367);
    block20 = new block(469, 367);
    block21 = new block(499, 367);
    block22 = new block(529, 367);
    block23 = new block(559, 367);
    block24 = new block(589, 367);
    block25 = new block(619, 367);

    slingshot = new SlingShot(polygon1.body, {x: 50, y: 180});

}

function draw()
{

    background("black");

    Engine.update(engine);

    ground1.display();
    ground2.display();

    polygon1.display();

    slingshot.display();

    block1.display("pink");
    block2.display("green");
    block3.display("green");
    block4.display("green");
    block5.display("lightBlue");
    block6.display("lightBlue");
    block7.display("lightBlue");
    block8.display("lightBlue");
    block9.display("lightBlue");

    block10.display("pink");
    block11.display("green");
    block12.display("green");
    block13.display("green");
    block14.display("lightBlue");
    block15.display("lightBlue");
    block16.display("lightBlue");
    block17.display("lightBlue");
    block18.display("lightBlue");
    block19.display("pink");
    block20.display("pink");
    block21.display("pink");
    block22.display("pink");
    block23.display("pink");
    block24.display("pink");
    block25.display("pink");
    
    //console.log(mouseX);
    //console.log(mouseY);

}

function mouseDragged()
{

    Matter.Body.setPosition(polygon1.body, {x: mouseX, y: mouseY});

}

function mouseReleased()
{

    slingshot.fly();

}

function keyPressed()
{

  if(keyCode === 32)
  {

    slingshot.attach(polygon1.body)

  }

}