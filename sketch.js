

var player;
var borda;
var pratileira1,pratileira2,pratileira3;
var inventario1,inventario2,inventario3,inventario4,inventario5;
var chocolate;
var pegouchocolate = false;
var farinha
var ovo 
var leite 
var manteiga 
function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  player = createSprite(850,280,50,50);
  player.shapeColor = "red";
  
  borda = createEdgeSprites()

pratileira1 = createSprite(580,130,400,120)
pratileira2 = createSprite(580,410,400,120)
pratileira3 = createSprite (180,270,120,400)

inventario1 = createSprite(width-100,80,100,100)
inventario1.shapeColor = "brown"
inventario2 = createSprite(width-100,200,100,100)
inventario2.shapeColor = "yellow"
inventario3 = createSprite(width-100,320,100,100)
inventario3.shapeColor = "gray"
inventario4 = createSprite(width-100,440,100,100)
inventario4.shapeColor = "pink"
inventario5 = createSprite(width-100,560,100,100)
inventario5.shapeColor = "purple"

chocolate = createSprite(50,50,20,20)
chocolate.shapeColor = "brown"

farinha = createSprite (400,500,20,20)
farinha.shapeColor = "gray"

ovo = createSprite(300,400,20,20)
ovo.shapeColor = "yellow"

leite = createSprite(800,600,20,20)
leite.shapeColor="pink"

manteiga = createSprite(700,30,20,20)
manteiga.shapeColor="purple"

}

function draw() {
  background(0); 
if (keyDown(LEFT_ARROW)){
  player.x -=10
}
if (keyDown(RIGHT_ARROW)){
  player.x +=10
}
if(keyDown(UP_ARROW)){
  player.y -=10
}
if(keyDown(DOWN_ARROW)){
  player.y +=10
}
 player.collide(borda)

player.collide(pratileira1)
player.collide(pratileira2)
player.collide(pratileira3)



if (player.isTouching(chocolate)&&keyDown("E")){
  pegouchocolate = true
}
if (pegouchocolate){
  chocolate.x = player.x; 
  chocolate.y = player.y + 30; 
}
if (pegouchocolate&&keyDown("R")){
  pegouchocolate = false
  }
  drawSprites();
}
  
 function pegaritens(iten,pegouiten){
  if (player.isTouching(iten)&&keyDown("E")){
    pegouiten = true
  }
  if (pegouiten){
    iten.x = player.x; 
    iten.y = player.y + 30; 
  }
  if (pegouiten&&keyDown("R")){
    pegouiten = false
 }
 }