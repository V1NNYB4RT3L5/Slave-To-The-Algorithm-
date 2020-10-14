PImage A,A2, A3, A4;
PFont words;
void setup() {
  size(1200,800);
  background (0,0,255);
  fill(255);
  words=loadFont("Serif-48.vlw");
  textFont (words);
  imageMode (CENTER);
  A = loadImage("A.png"); 
  A2 = loadImage("A2.png");
  A3 = loadImage("A3.png");
  A4 = loadImage("A4.png");
  stroke(255);
  noFill();
  rect(600,200,400,400);
}

void draw(){
  fill(255);
textSize(70);
text("MyType",0,100);
textSize(38);
text("What is your age?",0, 200);
fill(0);
text("Old",0, 250);
text("Young",0, 300);
fill(255);
textSize(38);
text("What is your height?",0, 400);
fill(0);
text("tall",0, 450);
text("short",0, 500);
fill(0,255,0);
text("restart",0, 700);
text("generate typeface",600, 700);
  if (mouseY > 220 && mouseY < 250){
  if (mousePressed){
image(A,800,400,339,380);
  }
  }
  if (mouseY > 270 && mouseY < 300){
  if (mousePressed){
image(A2,800,400,395,375);
  }
  }
    if (mouseY > 420 && mouseY < 450){
  if (mousePressed){
image(A3,800,400,278,378);
  }
  }
      if (mouseY > 470 && mouseY < 500){
  if (mousePressed){
image(A4,800,400,391,381);
  }
  }
      if (mouseX >0 && mouseX <200 && mouseY > 670 && mouseY < 700){
  if (mousePressed){
    fill(0,0,255);
    stroke(255);
    rect(600,200,400,400);
  }
  }

}
