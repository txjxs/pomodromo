let timer = 60;
let min = 25


function setup(){
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
}


function draw(){
    background(0);
    translate(windowWidth/2,windowHeight/2)
    textAlign(CENTER, CENTER);
    textSize(50);
    //let sec = second()
    stroke(255);
    text(min +':' + timer,0, 0);
    if (frameCount % 60 == 0 && timer > 0) { 
        timer --;
      }

    if (timer == 0) {
        
        timer = 60;
        min--
    }
    //sec_angle = map(sec,0,60,0,360);
    min_angle = map(min ,0,25,0, 360);    
    noFill();
    push();
    rotate(270);
   // arc(0,0,320,320,0,sec_angle);  TODO: remember to remove 
    arc(0,0,300,300,0,min_angle);  
    pop();


    
   
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }