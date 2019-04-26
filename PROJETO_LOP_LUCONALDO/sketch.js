var xe = 210
var ye = 350
var xi = 200
var xj = 365
var xh = 200

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('rgb(100%,50%,10%)');
  
  
  if (keyIsDown(UP_ARROW)) {
    ye = ye - 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    ye = ye + 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    xe = xe - 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    xe = xe + 5;
  }

  ellipse(xe, ye, 30, 30);
  rect(xi, 20, 30, 30)
  xi=xi+1.5
  if(xi>360)
  xi=0
  rect(xj, 60, 30, 30)
  xj=xj-1
  if(xj<20)
  xj=365
  rect(xh, 100, 30, 30)
  xh=xh+0.5
  if(xh>360)
  xh=0
  
  
}