function setup() {
  createCanvas(windowWidth,windowHeight)
  background('gray') 
  strokeWeight(1);
  fill('coral');
}

function draw() {
  
  var num = 3;
  var sideLen = windowWidth/num;
  
 for(var y = 0; y < windowHeight; y = y + sideLen ){ 
  for(var x = 0; x < windowWidth; x = x + sideLen){
    
   quad (

   x,y,
   x + sideLen,y,
   x + sideLen,y + sideLen,
   x,sideLen + y
);   
  }
 }
}

function windowResized(){
  
  resizeCavas(windowWidth,windowHeight)
}