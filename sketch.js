//Create variables here
var dog,happyDog;
var database,foodS,foodStock;

function preload()
{
  dogImg=loadImage("images/dogImg.png");
  happyDogImg=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  dog=createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale=0.2;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(49,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
    
  }
  

  drawSprites();
  fill("white");
  stroke("black");
  textSize(18);
  text("Note:Press UP_ARROW Key to feed Dogy Milk!",100,40);
  text("Food Remaining:"+foodS,200,100);
}



function readStock(data) {
  foodS=data.val();
}


function writeStock(x){
if(x<=0){
  x=0;
}else{
  x=x-1;
}

  database.ref('/').update({
Food:x
  })
}  


