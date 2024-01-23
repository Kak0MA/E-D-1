
let gif;

function preload(){
gif = loadImage ('Assets/GIFFinal.gif');

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
  
     for(var y = 0; y < windowHeight; y = y + sideLen ) { 
     
        for(var x = 0; x < windowWidth; x = x + sideLen) {

image(gif,x,y,sideLen,sideLen);  

 
  }
 }
}

function windowResized(){
  
  resizeCavas(windowWidth,windowHeight);
}