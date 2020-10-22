# Week 9.
This week we began with a milestone review of where we were all at with our final projects. I presented my prototype that I worked on in [Week 8](https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/tree/master/Week%208.). When presenting this in class It was brought to my attention that I had definitely not made the code as efficient as possible, for example I was introduced to the button function by chantel which opened the doors to many possibilities for the selecting of answers. 

After our consultations with the class we then moved on to looking at a few different examples in processing, one that I was particularly interested in after Karen had sent it my direction was [TextToPoints](https://p5js.org/reference/#/p5.Font/textToPoints); a way of taking text and plotting points along the outline of the individual letters. This was exciting to see as it made the idea of combining pre-exisiting letter forms seem a little bit more achievable. <br/>

## MyType Progress. 
After relying on a very specific mousePressed function to answer the survey questions I was relieved to find the [button function](https://p5js.org/reference/#/p5/createButton), this also lead me to look into [sliding bars](https://p5js.org/reference/#/p5/createSlider) and [check boxes](https://p5js.org/reference/#/p5/createCheckbox). [TextToPoints](https://p5js.org/reference/#/p5.Font/textToPoints) is a function available in the P5js library for P5.font objects which ‘Computes an array of points following the path for specified text’. This function was very intriguing to me due to its ability to take a letter and present it as a collection of vertices with an x and y value. 

With some help from Karen with textToPoints I have began building the MyType layout in P5.js. The sketch shows the answers presenting their array of points when checked. The aim is to use a collection of well renowned typefaces that are as different from one in other in appearance as possible but at the moment my OTF collection is not very extensive.<br/>
Typefaces used so far: <br/>
**AdobeHebrew** - designed by John Hudson and Robert Slimbach. 
**Adobe Thai** - designed by Fiona Ross, John Hudson, Robert Slimbach, and Tim Holloway.
**Chalkboard** - unknown. 
**Free Sans** -  designed by Primož Peterlin, Steve White. 
**Futura** - designed by Paul Renner, Tommy Thompson, Edwin W. Shaar
**Courier** -  designed by Howard Bud Kettler. <br/>

Here is the code: https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/tree/master/Week%2009./checked_box_coloured <br/>

<p Align = center ><img src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/Week%2009./MyType.P5.gif>



