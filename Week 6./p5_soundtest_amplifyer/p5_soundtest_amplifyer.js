var tone; //here we give a name to our sound variable 
var analyzer; 
function preload (){
  tone = loadSound ('data/law.mp3'); //here we load in our sound
}
function setup() {
createCanvas(windowWidth, windowHeight); //create full window canvas
background(0); //background of canvas
  fill(0,255,0); //starting colour of objects
  tone.loop(); 
  //set analyzer to check amplitude 
  analyzer=new p5.Amplitude(); 
  analyzer.setInput(tone);
  stroke(255);
}

function draw() {
  background (0,50); 
  var volume=analyzer.getLevel();
  volume=(volume*200)+10;
ellipse(windowWidth/2,windowHeight/2,volume,volume); //object

}

function mousePressed(){ //triggers on mouse press
  if (tone.isPlaying()){ //checks if the song is playing
    tone.stop(); //if it is then click to stop
    tone.noLoop();
    fill(0,255,0); 
  }
  else{
    fill (255,0,0); //changes fill of object to red
  tone.play(); // if it isnt then play the song on click
  tone.loop();
}
}
