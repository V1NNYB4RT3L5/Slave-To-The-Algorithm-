var letter,size,rand,speed; 
var wigglyLetters = []; 
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(32);
  textFont("Times");
}
function draw() {
  fill(255);
  background(0);
  for (var i=0; i<wigglyLetters.length ; i++){
    wigglyLetters[i].wiggle();
    wigglyLetters[i].display();
  }
}  
function mousePressed(){
  rand = int(random(65,160));
  letter = char(rand); 
  size= int(random (6,96));
  speed=int(random(1,4));
  wigglyLetters.push(new Wiggle (mouseX, mouseY, size, letter, speed));
}
class Wiggle {
 constructor(x, y, size, letter, speed){ 
   this.x= x;
   this.y= y;
   this.textSize=size;
   this.letter=letter;
   this.speed=speed;
}
wiggle() {
  this.x += random(-this.speed, this.speed);// x += 1 will continue to add 1 to the value(x)
  this.y += random(-this.speed, this.speed);
}
display() {
  text(this.letter, this.x, this.y);
}
}
