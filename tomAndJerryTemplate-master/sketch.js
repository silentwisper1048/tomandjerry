var cat
var mouse
function preload() {
    //load the images here
    bgImage=loadImage("images/garden.png")
    catimage=loadAnimation("images/cat1.png")
    mouseimage=loadAnimation("images/mouse1.png")
    catanimation=loadAnimation("images/cat2.png","images/cat3.png")
    mouseanimation=loadAnimation("images/mouse2.png","images/mouse3.png")
    catend=loadAnimation("images/cat4.png")
    mousend=loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
  //create tom and jerry sprites here
  cat = createSprite(850,600)
  cat.addAnimation("cat1",catimage )
  cat.scale = 0.2

  mouse = createSprite(100,600)
  mouse.addAnimation("cat3",mouseimage )
  mouse.scale = 0.15  
  
  mouse.addAnimation("mousetasing",mouseanimation)
  cat.addAnimation("cat3",catend)
  mouse.addAnimation("mouse4",mousend)
  cat.addAnimation("chasingcat",catanimation)
}

function draw() {   

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
 if(cat.isTouching(mouse)){
    cat.changeAnimation("cat3",catend)
    mouse.changeAnimation("mouse4",mousend)
    cat.velocityX=0
 }
    drawSprites();
}


function keyPressed(){
if(keyDown(LEFT_ARROW)){

mouse.changeAnimation("mousetasing",mouseanimation)
cat.changeAnimation("chasingcat",catanimation)
cat.velocityX = -3
}
  //For moving and changing animation write code here


}
