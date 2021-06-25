var bgimg,bg,humananim,human,br,bl
var crs = ["black", "white", "gray", "silver", "maroon", "red", "purple", "fushsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal","aqua"]

function preload(){
  bgimg = loadImage("path.png")
  humananim = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  bg = createSprite(200,200)
  bg.addImage(bgimg)
  human = createSprite(200,300)
  human.addAnimation("run",humananim)
  human.scale = 0.1
  bl = createSprite(-1,200,65,400)
  br = createSprite(401,200,45,400)
  bl.visible = false
  br.visible = false
  bg.velocityY = 20

}
var nums = 0
function draw() {
  if (nums == 16){
    nums = 0
  }
  background(crs[nums])

  drawSprites()
  human.x = World.mouseX
  human.collide(bl)
  human.collide(br)
  if (bg.y > 400){
    bg.y = bg.width/2
  }
  nums+=1

}
