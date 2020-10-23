# Week 10.
### user experience progress
My next step was to apply my progress so far to a sketch that actually invited the users interaction. <br/>

The biggest issue I found in my most developed sketch was that regardless of being the same fontSize the letters were different sizes and not stacking up in a way that would allow them to be combined how I desired them to. In order to fix this I gave each array of points a specific font size and location that would allow them all to sit within the same set of boundaries. 

<p Align = center ><img height = "400px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/Data./samesize.gif>
  
Next I decided to go with the button function and allocated a different colour for the different arrays of points to allow the user to differentiate between the letters. So far I had still not worked out how the points were going to be merged in processing so I added an example created in illustrator as an image to create a prospective view of my typeface generator. Aside from some sizing issues based on components not being sensitive to screen size the sketch worked as planned.<br/>
**Here is the code:** https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/tree/master/Week%2011./mostdeveloped_withExampleLetter <br/>
**Here is the link:** https://v1nnyb4rt3l5.github.io/Slave-To-The-Algorithm-/Week%2011./mostdeveloped_withExampleLetter/index.html

<p Align = center ><img height = "400px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/Data./ExampleLetter.gif>
  
### Merging letters progress

My next step was to look into how to combine these arrays of points. I started in illustrator just to experiment with how this may be possible, looking at either combining the letter in an organised way using anchor points and connecting paths of different letters, or the more jaggered splicing approach based on choosing segments of letters between certain x/y locations. 

<p Align = center ><img height = "400px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/Data./Anchors%20or%20pixel%20splice-01.jpg>
  
During Week 10 class Karen had introduced me to the [beginShape function](https://p5js.org/reference/#/p5/beginShape) which allows more complex shapes to be created by recording vertices. The idea was that by using the vertices that I had gathered from the textToPoints function I would be able to create the shapes of the letters.<br/>

After a bit of mucking around I was able to produce a segment of a letter by taking points between 2 different y values and creating a shape out of them. I found that a higher aspect ratio made for a cleaner shape and helped prevent the crossing of line, however I had to swap out some typefaces as they just didn’t seem to agree with the procedure. <br/>
**Here is the code:** https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/tree/master/Week%2011./pointstoshapes <br/>

<p Align = center ><img height = "200px" src =https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/Week%2011./Screen%20Shot%202020-10-08%20at%209.15.02%20pm.png><img height = "200px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/Week%2011./Screen%20Shot%202020-10-08%20at%2010.27.00%20pm.png><img height = "200px" src =https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/Week%2011./Screen%20Shot%202020-10-08%20at%2010.50.01%20pm.png><img height = "200px" src =https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/Week%2011./Screen%20Shot%202020-10-09%20at%2010.15.49%20am.png>
  

