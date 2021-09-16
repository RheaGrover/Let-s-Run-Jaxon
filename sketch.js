var path_img;
var path;
var Jaxon_img;
var Jaxon
function preload(){
  //pre-load images
  path_img = loadImage("path.png");
  Jaxon_img = loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
path = createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale = 1.2;
//create the runner surfer
Jaxon = createSprite(10,10,10,10);
Jaxon.addAnimation("Running", Jaxon)
}

function draw() {
  background(0);


}
