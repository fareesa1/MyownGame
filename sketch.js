//background
//1 deep, n-front
var layer1,layer2,layer3,layer4
var layer1Img,layer2Img,layer3Img,layer4Img,
    layer5Img,layer6Img,layer7Img,layer8Img,layer8Img;
var bg1,bg1Img;

var playb,playbImg;
var plr,plrImg;
var sceretbook,sceretbookImg
var light,lightImg;

function preload(){
  layer1Img = loadImage("Layer1.png")
  layer2Img = loadImage("Layer2.png")
  layer3Img = loadImage("Layer3.png")
  layer4Img = loadImage("Layer4.png")
  layer5Img = loadImage("Layer5.png")
  layer6Img = loadImage("Layer6.png")
  layer7Img = loadImage("Layer7.png")
  layer8Img = loadImage("Layer8.png")
  layer9Img = loadImage("Layer9.png")
  bg1Img = loadImage("Bg1.jpg")
  sceretbookImg = loadImage("book.png")
  lightImg = loadImage("light.png")
  playbImg = loadImage("playb.png")
  plrImg = loadImage("plr1.png")
}

function setup(){
  createCanvas(600,400)
  layer1 = createSprite(250,1)
  layer1.addImage(layer1Img)
  layer1.velocityX = -0.6
  layer2 = createSprite(250,1)
  layer2.addImage(layer2Img)
  layer2.velocityX = -1
  console.log(layer2.depth)
  layer3 = createSprite(250,1)
  layer3.addImage(layer3Img)
  layer3.velocityX = -2
  layer4 = createSprite(250,1)
  layer4.addImage(layer4Img)
  layer4.velocityX = -3
  
  layer5 = createSprite(250,1)
  layer5.addImage(layer5Img)
  layer5.velocityX = -3.5
  
  layer6 = createSprite(0,0)
  layer6.addImage(layer6Img)
  layer6.velocityX = -3.5
  
  layer7 = createSprite(250,0)
  layer7.addImage(layer7Img)
  layer7.velocityX = -3.5
  
  layer8 = createSprite(250,0)
  layer8.addImage(layer8Img)
  layer8.velocityX = -3.5
  
  layer9 = createSprite(250,0)
  layer9.addImage(layer9Img)
  layer9.velocityX = -3.5
  
  
  bg1 = createSprite(270,200)
  bg1.scale = 0.6
  bg1.addImage(bg1Img)
   
  sceretbook = createSprite(275,250)
  sceretbook.scale = 0.08
  sceretbook.addImage(sceretbookImg)
  
  light = createSprite(275,250)
  light.scale = 0.2
  light.addImage(lightImg)
  light.visible = false
  
  
  playb = createSprite(275,350)
  playb.scale = 0.4
  playb.addImage(playbImg)
  playb.visible = false
  
//   plr = createSprite(275,350)
//   plr.scale = 2
//   plr.addImage(plrImg)
//   plr.visible = false
 
}

function draw(){
  background(255)
  
  drawSprites()
  textSize(30);
  
  if(mousePressedOver(sceretbook)){
    light.visible = true
    textFont('Georgia');
    fill("white")
    strokeWeight(2)
    stroke("lightGreen")
    sceretbook.depth = light.depth+1
    playb.visible = true
    text('You are.... and .....', 20, 130,50);
  }
  
  if(mousePressedOver(playb)){
    bg1.visible = false
    playb.visible = false
    sceretbook.visible = false
    light.visible = false
    //plr.visible = true
  }


}
