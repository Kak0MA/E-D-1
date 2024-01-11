let gif;

function preload(){
gif = loadImage ('Assets/GIF.gif');
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background('gray') 
  strokeWeight(1);
  fill('coral');
}

function draw() {
  
  background('coral');
  
  var num = 3;
  var sideLen = windowWidth/num;
  
 for(var y = 0; y < windowHeight; y = y + sideLen ){ 
  for(var x = 0; x < windowWidth; x = x + sideLen){

imag(gif,x,y,sideLen,sideLen);  

 
  }
 }
}

function windowResized(){
  
  resizeCavas(windowWidth,windowHeight);
}