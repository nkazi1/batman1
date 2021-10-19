var batman,energybar,pill,background,energydrink,batmanImage,energybarImage
var pillImage,backgroundImage,batmanImage,energydrinkImage, edges, posion, poisondrink, fire
var score=0, poisonImage, poisondrinkImage, fireImage, gameover, gameoverImage
var PLAY=1
var END=0
var gameState= PLAY

function preload() {
  batmanImage=loadImage ("batman.png")
  bgImage= loadImage ("background_image.jpg")
  energybarImage= loadImage ("energy-bar.png")
  energydrinkImage= loadImage ("energydrink.jpg")
  pillImage= loadImage ("pill.png")
  poisonImage = loadImage ("poison.png")
  poisondrinkImage = loadImage ("poisondrink.png")
  fireImage = loadImage ("fire.png")
  gameoverImage= loadImage ("game_over.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(200,200)
  bg.addImage (bgImage)
  bg.velocityY=4
  bg.scale=4

batman=createSprite (70,580,20,20)
batman.addImage(batmanImage)
batman.scale= 0.8;
pillgroup=new Group();
energybargroup= new Group();
energydrinkgroup= new Group();
poisongroup= new Group ();
poisondrinkgroup= new Group ();
firegroup= new Group ();
}

function draw() {
  background(255,255,255);  
  if (gameState===PLAY) {

  
  edges=createEdgeSprites()
  batman.collide(edges)
  batman.x=World.mouseX
  if (bg.y>400){
    bg.y=height/2
  }
  if (score=0) { 
    gameState= END 
  }
  if (pillgroup.isTouching(batman)) {
    pillgroup.destroyEach ()
    score=score+2
  }
  if (energybargroup.isTouching(batman)) {
    energybargroup.destroyEach ()
    score=score+5
  }

  if (energydrinkgroup.isTouching(batman)) {
    energydrinkgroup.destroyEach ()
    score=score+10
  }

  if (firegroup.isTouching(batman)) {
    firegroup.destroyEach()
    score=score-10
  }

  if (poisongroup.isTouching(batman)) {
    poisongroup.destroyEach()
    score=score-3 
  }

  if (poisondrinkgroup.isTouching(batman)) {
    poisondrinkgroup.destroyEach()
    score=score-5 
  }
  
  pill ()
spawnenergybar()
 spawnenergydrink()
 spawnpoison()
 spawnpoisondrink ()
 spawnfire()
  drawSprites();
  textSize(40);
  fill ("black")
  text ("score: "+score,1000,100)

  }
  if (gameState===END) {
    background (gameoverImage);
  }
}


function pill(){
  if (World.frameCount%150==0){
    var pill=createSprite(Math.round(random(windowWidth-10,windowWidth-2000),random(windowHeight-10,windowHeight-2000),10,10))
    pill.addImage(pillImage)
    pill.scale=0.05
    pill.velocityY=3
    pill.lifetime=200
    pillgroup.add(pill)
  }
}
  function spawnenergybar(){
    if (World.frameCount%200==0){
      var energybar=createSprite(Math.round(random(windowWidth-10,windowWidth-2500),random(windowHeight-10,windowHeight-2500),10,10))
      energybar.addImage(energybarImage)
      energybar.scale=0.19
      energybar.velocityY=3
      energybar.lifetime=200
      energybargroup.add(energybar)
    }
  }

  function spawnenergydrink(){
    if (World.frameCount%200==0){
      var energydrink=createSprite(Math.round(random(windowWidth-10,windowWidth-1500),random(windowHeight-10,windowHeight-1500),10,10))
      energydrink.addImage(energydrinkImage)
      energydrink.scale=0.12
      energydrink.velocityY=3
      energydrink.lifetime=150
      energydrinkgroup.add(energydrink)
    }
  }

  function spawnpoisondrink(){
    if (World.frameCount%400==0){
      var poisondrink=createSprite(Math.round(random(windowWidth-10,windowWidth-2000),random(windowHeight-10,windowHeight-2000),10,10))
      poisondrink.addImage(poisondrinkImage)
      poisondrink.scale=0.12
      poisondrink.velocityY=3
      poisondrink.lifetime=150
      poisondrinkgroup.add(poisondrink)
    }
  }

  function spawnpoison(){
    if (World.frameCount%400==0){
      var poison=createSprite(Math.round(random(windowWidth-10,windowWidth-500),random(windowHeight-10,windowHeight-500),10,10))
      poison.addImage(poisonImage)
      poison.scale=0.12
      poison.velocityY=3
      poison.lifetime=150
      poisongroup.add(poison)
    }
  }

  
  function spawnfire(){
    if (World.frameCount%400==0){
      var fire=createSprite(Math.round(random(windowWidth-10,windowWidth-1500),random(windowHeight-10,windowHeight-1500),10,10))
      fire.addImage(fireImage)
      fire.scale=0.20
      fire.velocityY=3
      fire.lifetime=150
      firegroup.add(fire)
    }
  }