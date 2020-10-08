var font, font2,font3,font4, font5, font6, font7, font8, font9, font10;
var points1=[],points2=[],points3=[],points4=[],points5=[], points6=[],points7=[],points8=[],points9=[],points10=[];
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
  createCanvas(windowWidth, windowHeight);
  background(180); 
  //textSize(500);
  fill(100);
  stroke(0);
  rectMode(CENTER);
  rect(windowWidth/2,windowHeight/2, 600,550);
  strokeWeight(2);
  stroke(0);
  noLoop();
  points1 = font.textToPoints('A', (width/2)-268, (height/2)+255, 900, {
    sampleFactor:10
  });
  points2 = font2.textToPoints('A', (width/2)-267, (height/2)+255, 950,{
    sampleFactor:12.5
  });
  points3 = font3.textToPoints('A', (width/2)-268, (height/2)+255, 755,{
    sampleFactor:12
  });
  points4 = font4.textToPoints('A', (width/2)-230, (height/2)+255, 760,{
    sampleFactor:14.5
  });
  points5 = font5.textToPoints('A', (width/2)-260, (height/2)+255, 690,{
    sampleFactor:10
  });
  points6 = font6.textToPoints('A', (width/2)-207, (height/2)+255, 690,{
    sampleFactor:10
  });
  points7 = font7.textToPoints('A', (width/2)-210, (height/2)+230, 615,{
    sampleFactor:10
  });
   points8 = font8.textToPoints('A', (width/2)-260, (height/2)+255, 722,{
    sampleFactor:100
  });
  points9 = font9.textToPoints('A', (width/2)-235, (height/2)+255, 705,{
    sampleFactor:10
  });
  points10 = font10.textToPoints('A', (width/2)-253, (height/2)+255, 690,{
    sampleFactor:10
  }); 
}


function draw() {
      
//stroke(0);
//noFill();
fill(0);
  beginShape();
  for (let i=0; i <points1.length; i++){
    let y = points1[i].y; 
    if (y<= 374){
    vertex(points1[i].x, points1[i].y);
    }
  }
  endShape();
  beginShape();
  for (let i=0; i <points2.length; i++){
     let y = points2[i].y; 
    if (y>= 374){
    if (y<= 478){
  vertex(points2[i].x,points2[i].y); 
     }
  }
  }
  endShape();
  beginShape();
    for (let i=0; i <points4.length; i++){
     let y = points4[i].y; 
    if (y>=478){
      if (y<= 582){
  vertex(points4[i].x,points4[i].y); 
     }
    }
  }
  endShape();
  beginShape();
    for (let i=0; i <points7.length; i++){
    let y = points7[i].y; 
    if (y>= 582){
    if (y<= 686){
    vertex(points7[i].x, points7[i].y);
    }
    }
  }
  endShape();
    beginShape();
    for (let i=0; i <points8.length; i++){
    let y = points8[i].y; 
    if (y>= 686){
    vertex(points8[i].x, points8[i].y);
    }
  }
  endShape();
  
 
// stroke(255);
// line(800,270,1600,270);
//line(800,374,1600,374);
//line(800,478,1600,478);
//line(800,582,1600,582);
//line(800,686,1600,686);
//line(800,790,1600,790);
}
