
let gif;

function preload(){
gif = loadImage ('Assets/GifEnd.gif');

}
function setup() {
  createCanvas(windowWidth,windowHeight);
  fill('lightgrey');
  stroke('white');
  strokeWeight(1);
  
}

function draw() {
  
  background('coral');
  
  var num = 3
  var sideLen = windowWidth
  
  var sideLen = windowWidth/num;
  
     for(var y = 0; y < 2 * windowHeight; y = y + sideLen ) { 
     
        for(var x = 0; x < 2 * windowWidth; x = x + sideLen) {

image(gif,x,y,sideLen,sideLen);  

 
  }
 }
}

function windowResized(){
  
  resizeCavas(windowWidth,windowHeight);
}