
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;



var m1
var m2
var mlose
var mwin
var bg
var treat
var treat1
var rope


function preload()
{ 
bg= loadImage('assets/bg.png');
treat= loadImage('assets/treat.png');
m1= loadImage('assets/marcel1.png');
lose= loadImage ("assets/lose.png")
win= loadImage ("assets/win.png")


eat = loadAnimation("assets/marcel1.png" , "assets/marcel2.png");


}
function setup() {
  createCanvas(700,800);

  engine = Engine.create();
  world = engine.world;
  button = createImg('cut_button.png');
  button.position(20,30);
  button.size(50,50);
  button.mouseClicked(drop);

  marcel=createSprite(400,550,60,65)
marcel.addAnimation('eating', eat)
marcel.addImage(m1);
marcel.scale=0.3
rope= new Rope(8,{x:750, y:0})
treat1=createSprite(450, 320, 50, 50)
treat1.scale= 0.2
treat1.addImage(treat);



  eat.frameDelay = 20;

}


function draw() 
{
  background(bg);
  Engine.update(engine);

  rope.show();

  drawSprites()
 
  if(collide(treat,marcel)==true)
  {
    marcel.changeAnimation('win');
  }

  if(treat!=null && treat.position.y>=650)
  {
    marcel.changeAnimation('lose');
    treat=null;
     
   }
}

function drop()
{
  rope.break();
  treat_con.detach();
  treat_con = null; 
}

function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              World.remove(engine.world,treat);
               treat = null;
               return true; 
            }
            else{
              return false;
            }
         }
}