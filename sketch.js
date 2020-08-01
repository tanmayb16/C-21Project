var bullet ;
var wall;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  bullet =  createSprite(50, 200, 200, 40);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  speed = random(30,52);
  weight = random(223,321);
  thhickness = random(22,83);

}
  

function draw() {
  background(0); 

  bullet.velocityX = speed; 
  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0;
    
    if(hasCollided(bullet,wall)){
      //Formula
    var damage = 0.5 * weight * speed * speed / 22500
    if(damage > 10){
      bullet.shapeColor = color(255,0,0);
    }
    if(damage < 10 ){
      bullet.shapeColor = color(0,255,0);
    }
    }
  }
  drawSprites();
}
function hasCollided (lbullet, lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}