let timer = 60;
let min = 25

function setup(){
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
}


function draw(){
    background(255);
    textAlign(CENTER,CENTER);
    textSize(50);
    text(min +':' + timer, width/2, height/2);
    if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        timer --;
      }

    if (timer == 0) {
        // text("GAME OVER", width/2, height*0.7);
        timer = 60;
        min--
    }
    stroke(0);
    min_angle = map(min ,0,25,0, 360);    
    noFill();
    arc(width*0.5,height*0.5,300,300,0,min_angle);  


    
   
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }