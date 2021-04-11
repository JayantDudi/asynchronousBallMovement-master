var ball;
var database ;
var ballPosition;



function setup(){
    createCanvas(500,500);
    database= firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "blue";
    ballPosition=database.ref("ball/position");
    ballPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-4,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(4,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-4);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+4);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
    ballPosition.set({X:ball.x,
        Y:ball.y,
    })

}

function showError(){
    console.log("errror");
}

function readPosition(data){
   var details = data.val(); 
   ball.x=details.X;
   ball.y=details.Y;
   console.log(details);
}

