var font, font2,font3,font4, font5, font6, font7, font8, font9, font10;
var points1=[],points2=[],points3=[],points4=[],points5=[], points6=[],points7=[],points8=[],points9=[],points10=[];
let old, young, short, tall, dog, cat, meat, vegetables, spend, save;
function preload() {
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
}
function setup() {
  young = createCheckbox('young', false);
  young.changed(Courier);
  young.position(10,10);
  old = createCheckbox('old', false);
  old.changed(Thai);
  old.position(10,40);
  short = createCheckbox('short', false);
  short.changed(Hebrew);
  short.position(10,70);
  tall = createCheckbox('tall', false);
  tall.changed(Myriad);
  tall.position(10,100);
  dog = createCheckbox('dog', false);
  dog.changed(Ming);
  dog.position(10,130);
  cat = createCheckbox('cat', false);
  cat.changed(Gothic);
  cat.position(10,160);
  meat = createCheckbox('meat', false);
  meat.changed(Brush);
  meat.position(10,190);
  vegetables = createCheckbox('vegetables', false);
  vegetables.changed(Impact);
  vegetables.position(10,220);
  spend = createCheckbox('spend', false);
  spend.changed(FreeSans);
  spend.position(10,250);
  save = createCheckbox('save', false);
  save.changed(BigSerif);
  save.position(10,280);
  createCanvas(windowWidth, windowHeight);
  background(180); 
  //textSize(500);
  textAlign(CENTER);
  strokeWeight(2);
  stroke(0);
  noLoop();
  points1 = font.textToPoints('A', width/2, height/2, 1000);
  points2 = font2.textToPoints('A', width/2, height/2, 1050);
  points3 = font3.textToPoints('A', width/2, height/2, 850);
  points4 = font4.textToPoints('A', width/2, height/2, 850);
  points5 = font5.textToPoints('A', width/2, height/2, 770);
  points6 = font6.textToPoints('A', width/2, height/2, 770);
  points7 = font7.textToPoints('A', width/2, height/2, 720);
  points8 = font8.textToPoints('A', width/2, height/2, 810);
  points9 = font9.textToPoints('A', width/2, height/2, 785);
  points10 = font10.textToPoints('A', width/2, height/2, 810);
}

function Courier() {
  if (this.checked()) {
      stroke(255,0,0);
     for (let i=0; i <points1.length; i++){
    point(points1[i].x, points1[i].y);
  }
  } 
  else {
    background(180);
  }
}

function Thai() {
  if (this.checked()) {
      stroke(255,0,0);
     for (let i=0; i <points2.length; i++){
    point(points2[i].x, points2[i].y);
  }
  } 
  else {
    background(180);
  }
}

function Hebrew() {
  if (this.checked()) {
      stroke(255,255,0);
     for (let i=0; i <points3.length; i++){
    point(points3[i].x, points3[i].y);
  }
  } 
  else {
    background(180);
  }
}

function Myriad() {
  if (this.checked()) {
    stroke(255,255,0);
     for (let i=0; i <points4.length; i++){
    point(points4[i].x, points4[i].y);
  }
  } 
  else {
    background(180);
  }
}

function Ming() {
  if (this.checked()) {
    stroke(0,255,0);
     for (let i=0; i <points5.length; i++){
    point(points5[i].x, points5[i].y);
  }
  } 
  else {
    background(180);
  }
}

function Gothic() {
  if (this.checked()) {
     stroke(0,255,0);
     for (let i=0; i <points6.length; i++){
    point(points6[i].x, points6[i].y);
  }
  } 
  else {
    background(180);
  }
}

function Brush() {
  if (this.checked()) {
     stroke(0,255,255);
     for (let i=0; i <points7.length; i++){
    point(points7[i].x, points7[i].y);
  }
  } 
  else {
    background(180);
  }
}

function Impact() {
  if (this.checked()) {
    stroke(0,255,255);
     for (let i=0; i <points8.length; i++){
    point(points8[i].x, points8[i].y);
  }
  } 
  else {
    background(180);
  }
}

function FreeSans() {
  if (this.checked()) {
    stroke(0,0,255);
     for (let i=0; i <points9.length; i++){
    point(points9[i].x, points9[i].y);
  }
  } 
  else {
    background(180);
  }
}

function BigSerif() {
  if (this.checked()) {
        stroke(0,0,255);
     for (let i=0; i <points10.length; i++){
    point(points10[i].x, points10[i].y);
  }
  } 
  else {
    background(180);
  }
}
