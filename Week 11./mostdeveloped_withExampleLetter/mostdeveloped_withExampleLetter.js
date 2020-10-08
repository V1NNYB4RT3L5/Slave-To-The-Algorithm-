var font, font2,font3,font4, font5, font6, font7, font8, font9, font10;
var points1=[],points2=[],points3=[],points4=[],points5=[], points6=[],points7=[],points8=[],points9=[],points10=[];
let img,old, young, short, tall, dog, cat, meat, vegetables, spend, save, reset, generate, customA;
function preload() {
img = loadImage('data/titlee.png');
font = loadFont('data/CourierStd.otf');
font2 = loadFont('data/AdobeThai-Regular.otf');
font3 = loadFont('data/AdobeHebrew-Regular.otf');
font4 = loadFont('data/MyriadPro-Regular.otf');
font5 = loadFont('data/AdobeMingStd-Light.otf');
font6 = loadFont('data/LetterGothicStd.otf');
font7 = loadFont('data/22347249157.ttf');
font8 = loadFont('data/25381880192.ttf');
font9 = loadFont('data/FreeSans.ttf');
font10 = loadFont('data/24471412613.ttf');
customA=loadImage('data/Ablack.png');
}
function setup() {
    createCanvas(windowWidth, windowHeight);
  background(0); 
refresh();
}
function Courier() {
    let col = color(255,0,0);
      stroke(255,0,0);
     for (let i=0; i <points1.length; i++){
    point(points1[i].x, points1[i].y);
    young.style('background-color', col);
}
}

function Thai() {
  let col = color(255,0,0);
      stroke(255,0,0);
     for (let i=0; i <points2.length; i++){
    point(points2[i].x, points2[i].y);
        old.style('background-color', col);
  }
}

function Hebrew() {
  let col = color(255,255,0);
      stroke(255,255,0);
     for (let i=0; i <points3.length; i++){
    point(points3[i].x, points3[i].y);
    short.style('background-color', col);
  }
}

function Myriad() {
  let col = color(255,255,0);
    stroke(255,255,0);
     for (let i=0; i <points4.length; i++){
    point(points4[i].x, points4[i].y);
    tall.style('background-color', col);
  }
}

function Ming() {
  let col = color(0,255,0);
    stroke(0,255,0);
     for (let i=0; i <points5.length; i++){
    point(points5[i].x, points5[i].y);
 dog.style('background-color', col);
  }
}

function Gothic() {
  let col = color(0,255,0);
     stroke(0,255,0);
     for (let i=0; i <points6.length; i++){
    point(points6[i].x, points6[i].y);
cat.style('background-color', col);
  }
}

function Brush() {
  let col = color(0,255,255);
     stroke(0,255,255);
     for (let i=0; i <points7.length; i++){
    point(points7[i].x, points7[i].y);
    meat.style('background-color', col);
  }
}

function Impact() {
  let col = color(0,255,255);
    stroke(0,255,255);
     for (let i=0; i <points8.length; i++){
    point(points8[i].x, points8[i].y);
    vegetables.style('background-color', col);
  }
}

function FreeSans() {
  let col = color(0,0,255);
    stroke(0,0,255);
     for (let i=0; i <points9.length; i++){
    point(points9[i].x, points9[i].y);
    spend.style('background-color', col);
  }
}

function BigSerif() {
  let col = color(0,0,255);
        stroke(0,0,255);
     for (let i=0; i <points10.length; i++){
    point(points10[i].x, points10[i].y);
    save.style('background-color', col);
  }
}

function refresh() {
   let col = color (255);
  young = createButton('Young');
  young.position(windowWidth/5.5,windowHeight/4);
  young.style('font-size','20px');
  young.style('background-color',col);
  young.mousePressed(Courier);
  old = createButton('Old');
  old.position(windowWidth/5.5,windowHeight/3.4);
  old.style('font-size','20px');
  old.style('background-color',col);
  old.mousePressed(Thai);
  short = createButton('Short');
  short.position(windowWidth/5.5,windowHeight/2.09);  
  short.style('font-size','20px');
  short.style('background-color',col);
  short.mousePressed(Hebrew);
  tall = createButton('Tall');
  tall.position(windowWidth/5.5,windowHeight/1.9);
  tall.style('font-size','20px');
  tall.style('background-color',col);
  tall.mousePressed(Myriad);
  dog = createButton('Dog');
  dog.position(windowWidth/5.5,windowHeight/1.42);
  dog.style('font-size','20px');
  dog.style('background-color',col);
  dog.mousePressed(Ming);
  cat = createButton('Cat');
  cat.position(windowWidth/5.5,windowHeight/1.33);
  cat.style('font-size','20px');
  cat.style('background-color',col);  
  cat.mousePressed(Gothic);
  meat = createButton('Meat');
  meat.position(windowWidth/1.456,windowHeight/4);
  meat.style('font-size','20px');
  meat.style('background-color',col);
  meat.mousePressed(Brush);
  vegetables = createButton('Vegetables');
  vegetables.position(windowWidth/1.456,windowHeight/3.4);
  vegetables.style('font-size','20px');
  vegetables.style('background-color',col);
  vegetables.mousePressed(Impact);
  spend = createButton('Spend');
  spend.position(windowWidth/1.456,windowHeight/2.09);
  spend.style('font-size','20px');
  spend.style('background-color',col);
  spend.mousePressed(FreeSans);
  save = createButton('Save');
  save.position(windowWidth/1.456,windowHeight/1.9);
  save.style('font-size','20px');
  save.style('background-color',col);
  save.mousePressed(BigSerif);
  reset = createButton('Restart');
  reset.position(windowWidth/1.395,windowHeight/1.42);
  reset.style('font-size','30px');
  reset.style('background-color',col);
  reset.mousePressed(refresh);
  generate = createButton('Generate My Type');
  generate.position(windowWidth/2.35,windowHeight/1.14);
  generate.style('font-size','30px');
  generate.style('background-color',col);
  generate.mousePressed(custom);
  //textSize(500);
  strokeWeight(2);
  stroke(0);
  noLoop();
  points1 = font.textToPoints('A', (width/2)-268, (height/2)+255, 900);
  points2 = font2.textToPoints('A', (width/2)-268, (height/2)+255, 950);
  points3 = font3.textToPoints('A', (width/2)-268, (height/2)+255, 755);
  points4 = font4.textToPoints('A', (width/2)-230, (height/2)+255, 760);
  points5 = font5.textToPoints('A', (width/2)-260, (height/2)+255, 690);
  points6 = font6.textToPoints('A', (width/2)-207, (height/2)+255, 690);
  points7 = font7.textToPoints('A', (width/2)-210, (height/2)+230, 615);
  points8 = font8.textToPoints('A', (width/2)-260, (height/2)+255, 722);
  points9 = font9.textToPoints('A', (width/2)-235, (height/2)+255, 705);
  points10 = font10.textToPoints('A', (width/2)-253, (height/2)+255, 730);
  textAlign(CENTER,CENTER);
  fill(255);
  textFont(font);
  textSize(200);
  //text('MyType', windowWidth/2, 97);
  textAlign(LEFT,LEFT);
  textFont(font9);
  textSize(20);
  text('Q.1 - How old are you?',windowWidth/5.5,windowHeight/4.9);
  text('Q.2 - What size are you?',windowWidth/5.5, windowHeight/2.3);
  text('Q.3 - Favourite pet?',windowWidth/5.5, windowHeight/1.52);
  text('Q.4 - You prefer to eat?',windowWidth/1.465,windowHeight/4.9);
  text('Q.5 - With your Money?',windowWidth/1.465,windowHeight/2.3);
    fill(100);
  stroke(0);
  rectMode(CENTER);
  rect(windowWidth/2,windowHeight/2, windowWidth/3, windowWidth/3);
  noFill();
  stroke(255);
  rect(windowWidth/4,windowHeight/3.65,windowWidth/6.3,windowWidth/3/3);
  rect(windowWidth/4,windowHeight/2,windowWidth/6.3,windowWidth/3/3);
  rect(windowWidth/4,windowHeight/1.38,windowWidth/6.3,windowWidth/3/3)
  rect(windowWidth/1.334,windowHeight/3.65,windowWidth/6.3,windowWidth/3/3);
  rect(windowWidth/1.334,windowHeight/2,windowWidth/6.3,windowWidth/3/3);
  fill(255,255,255,99);
  rect(windowWidth/1.334,windowHeight/1.38,windowWidth/6.3,windowWidth/3/3);
  imageMode(CORNERS);
image(img,width/3.3,height/30,width/1.45,height/3); 
  
}

function custom(){
  stroke(0);
  fill(255);
  rectMode(CENTER);
  rect(windowWidth/2,windowHeight/2, windowWidth/3, windowWidth/3);
  imageMode(CENTER);
  image(customA,windowWidth/2,windowHeight/2);
  imageMode(CORNERS);
  image(img,width/3.3,height/30,width/1.45,height/3); 
}
