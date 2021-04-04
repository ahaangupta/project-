var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(500,580,200,30)
    block3.shapeColor = "red"

    block4 = createSprite(700,580,200,30)
    block4.shapeColor = "green"

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    ball.setVelocityX = 5
    ball.setVelocityY = 10
    
    //write code to bounce off ball from the block1 
    if(isTouching(ball,block1) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play("music.mp3");
    }



    if(isTouching(ball,block2) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.setVelocityX = 0
        ball.setVelocityY = 0
        //write code to stop music
    }

    //write code to bounce off ball from the block3
    if (isTouching(ball,block3) && ball.bounceOff(block3)){
        ball.shapeColor = "red"
        ball.bounceOff(block3)
    }

    //write code to bounce off ball from the block4
    if(isTouching(ball,block4)&& ball.bounceOff(block4)){
        ball.shapeColor = "green"
        ball.bounceOff(block4)
    }

    drawSprites();

}

function isTouching(object1, object2){
   if( object1.x - object2.x < object2.width/2 + object2.width/2
      && object2.x - object1.x < object2.width/2 + object2.width/2
      && object1.y - object2.y < object2.height/2 + object2.height/2
      && object2.y - object1.y < object2.height/2 + object2.height/2){
        ball.bounceOff(object2)
      }
    else{
        ball.shapeColor = rgb(255,255,255)
    }
}