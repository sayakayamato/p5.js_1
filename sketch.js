var w = 400, h = 400;
var button;
var u = w/2, v = h/2;


function setup() {
  createCanvas(w, h);
  background(0);
  button = createButton('clear');
  button.position(10, h + 10);
  button.mousePressed(clearAction);
  strokeWeight(0.75);
  stroke(255, 200);
}

function draw() {
  if(mouseIsPressed){
    for(i = 0; i < TWO_PI; i += TWO_PI/24){
      var px = pmouseX * cos(i) - pmouseY * sin(i) - u * cos(i) + v * sin(i) + u;
      var py = pmouseX * sin(i) + pmouseY * cos(i) - u * sin(i) - v * cos(i) + v;
      var x = mouseX * cos(i) - mouseY * sin(i) - u * cos(i) + v * sin(i) + u;
      var y = mouseX * sin(i) + mouseY * cos(i) - u * sin(i) - v * cos(i) + v;
      line(px, py, x, y);
    }
  }
}

function clearAction(){
  background(0);
}
