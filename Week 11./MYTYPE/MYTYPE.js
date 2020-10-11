var font, font2,font3,font4,font5,font6,font7,font8,font9,font10;
var points1=[], points2=[],points3=[],points4=[],points5=[],points6=[],points7=[],points8=[],points9=[],points10=[];
let age, valA, tallness, valB, pet, valC, diet, valD, money, valE, reset;
function preload() {
font1 = loadFont('data/CourierStd.otf');
font2 = loadFont('data/AdobeThai-Regular.otf');
font3 = loadFont('data/AdobeHebrew-Regular.otf');
font4 = loadFont('data/MyriadPro-Regular.otf');
font5 = loadFont('data/Futura-Medium-01.ttf');
font6 = loadFont('data/LetterGothicStd.otf');
font7 = loadFont('data/22347249157.ttf');
font8 = loadFont('data/Chalkboard-01.ttf');
font9 = loadFont('data/FreeSans.ttf');
font10 = loadFont('data/24471412613.ttf');
}
function setup() {
createCanvas (windowWidth,windowHeight);
background(255);
stroke(0);
line(0,windowHeight/2+255,windowWidth,windowHeight/2+255);
noStroke();
  textAlign(LEFT,TOP);
  textFont(font5);
  textSize(100);
  text('MyType',50,10);
//reset = createButton('Restart');
//reset.position(windowWidth/1.2,100); 
//reset.style('font-size','30px');
//reset.mousePressed(refresh);
age = createRadio();
age.style('font-size','20px');
age.style('width','90px');
age.style('font-family','FreeSans');
age.option('Young');
age.option('Old');
age.position(windowWidth/20,windowHeight/1.13);
valA=age.value();
tallness = createRadio();
tallness.style('font-size','20px');
tallness.style('width','80px');
tallness.style('font-family','FreeSans');
tallness.option('Short');
tallness.option('Tall');
tallness.position(windowWidth/3.8,windowHeight/1.13);
valB=tallness.value();
pet = createRadio();
pet.style('font-size','20px');
pet.style('width','70px');
pet.style('font-family','FreeSans');
pet.option('Cat');
pet.option('Dog');
pet.position(windowWidth/2.2,windowHeight/1.13);
valC = pet.value();
diet = createRadio();
diet.style('font-size','20px');
diet.style('width','130px');
diet.style('font-family','FreeSans');
diet.option('Vegetables');
diet.option('Meat');
diet.position(windowWidth/1.6,windowHeight/1.13);
valD = diet.value();
money = createRadio();
money.style('font-size','20px');
money.style('width','90px');
money.style('font-family','FreeSans');
money.option('Spend');
money.option('Save');
money.position(windowWidth/1.24,windowHeight/1.13);
valE = money.value();
points1 = font1.textToPoints('A', (width/2)-268, (height/2)+255, 900, {
  sampleFactor:15
});
points2 = font2.textToPoints('A', (width/2)-268, (height/2)+255, 950, {
  sampleFactor:15
});
points3 = font3.textToPoints('A', (width/2)-268, (height/2)+255, 755, {
  sampleFactor:15
});
points4 = font4.textToPoints('A', (width/2)-230, (height/2)+255, 760, {
  sampleFactor:15
});
points5 = font5.textToPoints('A', (width/2)-238, (height/2)+255, 650, {
  sampleFactor:15
});
points6 = font6.textToPoints('A', (width/2)-207, (height/2)+255, 690, {
  sampleFactor:15
});
points7 = font7.textToPoints('A', (width/2)-210, (height/2)+230, 615, {
  sampleFactor:15
}); 
points8 = font8.textToPoints('A', (width/2)-225, (height/2)+247, 733, {
  sampleFactor:15
});
points9 = font9.textToPoints('A', (width/2)-235, (height/2)+255, 705, {
  sampleFactor:15
});
points10 = font10.textToPoints('A', (width/2)-253, (height/2)+255, 730, {
  sampleFactor:15
});
  textAlign(LEFT,LEFT);
  noStroke();
  fill(0);
  textFont(font4);
  textSize(25);
  text('Q.1 - How old are you?',windowWidth/20,windowHeight/1.14);
  text('Q.2 - What size are you?',windowWidth/3.8, windowHeight/1.14);
  text('Q.3 - Favourite pet?',windowWidth/2.2, windowHeight/1.14);
  text('Q.4 - You prefer to eat?',windowWidth/1.6,windowHeight/1.14);
  text('Q.5 - With your Money?',windowWidth/1.24,windowHeight/1.14);
}


function draw() {
 fill(0);
  valA = age.value();
if (valA == 'Young'){
  fill(255);
  rectMode(CORNERS);
  rect(windowWidth/20,windowHeight/2-265,windowWidth, windowHeight/2-155);
  fill(0);
    beginShape();
  for (let i=0; i <points1.length; i++){
    let y = points1[i].y; 
    if (y<= windowHeight/2-155){
    vertex(points1[i].x, points1[i].y);
    }
  }
  endShape();
}
if (valA == 'Old'){
  fill(255);
  rectMode(CORNERS);
  rect(windowWidth/4,windowHeight/2-265,windowWidth, windowHeight/2-155);
  fill(0);
  beginShape();
  for (let i=0; i <points2.length; i++){
    let y = points2[i].y; 
    if (y<= windowHeight/2-155){
    vertex(points2[i].x, points2[i].y);
    }
  }
  endShape();
}
valB=tallness.value();
if (valB == 'Short'){
  fill(255);
  rectMode(CORNERS);
  rect(windowWidth/4,windowHeight/2-155,windowWidth, windowHeight/2-55);
  fill(0);
  beginShape();
  for (let i=0; i <points3.length; i++){
    let y = points3[i].y; 
    if (y>= windowHeight/2-155){
    if (y<= windowHeight/2-55){
    vertex(points3[i].x, points3[i].y);
    }
    }
  }
  endShape();
}
if (valB == 'Tall'){
  fill(255);
  rectMode(CORNERS);
  rect(windowWidth/20,windowHeight/2-155,windowWidth, windowHeight/2-55);
  fill(0);
  beginShape();
  for (let i=0; i <points4.length; i++){
    let y = points4[i].y; 
    if (y>= windowHeight/2-155){
    if (y<= windowHeight/2-55){
    vertex(points4[i].x, points4[i].y);
    }
    }
  }
  endShape();
}
valC=pet.value();
if (valC == 'Cat'){
  fill(255);
  rectMode(CORNERS);
  rect(windowWidth/20,windowHeight/2-55,windowWidth, windowHeight/2+55);
  fill(0);
  beginShape();
  for (let i=0; i <points5.length; i++){
    let y = points5[i].y; 
    if (y>= windowHeight/2-55){
    if (y<= windowHeight/2+55){
    vertex(points5[i].x, points5[i].y);
    }
    }
  }
  endShape();
}
if (valC == 'Dog'){
  fill(255);
  rectMode(CORNERS);
  rect(windowWidth/20,windowHeight/2-55,windowWidth, windowHeight/2+55);
  fill(0);
  beginShape();
  for (let i=0; i <points6.length; i++){
    let y = points6[i].y; 
    if (y>= windowHeight/2-55){
    if (y<= windowHeight/2+55){
    vertex(points6[i].x, points6[i].y);
    }
    }
  }
  endShape();
}
valD=diet.value();
if (valD == 'Meat'){
  fill(255);
  rectMode(CORNERS);
  rect(windowWidth/20,windowHeight/2+55,windowWidth, windowHeight/2+155);
  fill(0);
  beginShape();
  for (let i=0; i <points7.length; i++){
    let y = points7[i].y; 
    if (y>= windowHeight/2+55){
    if (y<= windowHeight/2+155){
    vertex(points7[i].x, points7[i].y);
    }
    }
  }
  endShape();
}
if (valD == 'Vegetables'){
  fill(255);
  rectMode(CORNERS);
  rect(windowWidth/20,windowHeight/2+55,windowWidth, windowHeight/2+155);
  fill(0);
  beginShape();
  for (let i=0; i <points8.length; i++){
    let y = points8[i].y; 
    if (y>= windowHeight/2+55){
    if (y<= windowHeight/2+155){
    vertex(points8[i].x, points8[i].y);
    }
    }
  }
  endShape();
}
valE=money.value();
if (valE == 'Spend'){
  fill(255);
  rectMode(CORNERS);
  rect(windowWidth/20,windowHeight/2+155,windowWidth, windowHeight/2+260);
  stroke(0);
  line(0,windowHeight/2+255,windowWidth,windowHeight/2+255);
  noStroke();
  fill(0);
  beginShape();
  for (let i=0; i <points9.length; i++){
    let y = points9[i].y; 
    if (y>= windowHeight/2+155){
    vertex(points9[i].x, points9[i].y);
    }
  }
  endShape();
}
if (valE == 'Save'){
  fill(255);
  rectMode(CORNERS);
  rect(windowWidth/20,windowHeight/2+155,windowWidth, windowHeight/2+260);
  stroke(0);
  line(0,windowHeight/2+255,windowWidth,windowHeight/2+255);
  noStroke();
  fill(0);
  beginShape();
  for (let i=0; i <points10.length; i++){
    let y = points10[i].y; 
    if (y>= windowHeight/2+155){
    vertex(points10[i].x, points10[i].y);
    }
  }
}
  endShape();
  
// stroke(0);
//line(400,windowHeight/2-260,1200,windowHeight/2-260);
//line(400,windowHeight/2-155,1200,windowHeight/2-155);
//line(400,windowHeight/2-55,1200,windowHeight/2-55);
//line(400,windowHeight/2+55,1200,windowHeight/2+55);
//line(400,windowHeight/2+155,1200,windowHeight/2+155);
//line(400,windowHeight/2+255,1200,windowHeight/2+255);
}
