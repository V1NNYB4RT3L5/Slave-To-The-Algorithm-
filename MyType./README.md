# MyType. 
## Progress
Following the Project Pitch assignment in [week 5](https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/tree/master/Week%2005.) I decided to stick with my idea of creating a typeface generator that received its parameters from a series of answers to a list of personal questions. I began with 2 variations of the idea. One was to have the answers to the questions determine the value of a characteristics such as cap height, contrast, unit width etc, a process that would begin with a master font. My other Idea was to associate each possible answer with a preexisting typeface and then on completion of the survey they would be merged to create a new unique hybrid typeface.  This was the idea that I began to develop. 

<p Align = center ><img height = "300px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/MyType./grid%20rule.jpg><img height = "300px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/MyType./11111.jpg><img height = "300px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/MyType./22222.jpg>   
  
## Research 
Through [week 5](https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/tree/master/Week%2005.) into [week 6](https://github.com/V1NNYB4RT3L5/Slave-To-TheAlgorithm-/tree/master/Week%2006.) I researched the creation of unique outcomes . This started with a look into the [MIT media lab](https://www.media.mit.edu/) logo created by [Studio Thegreeneyl](http://www.thegreeneyl.com/) in collaboration with [E Room Kang](http://www.eroonkang.com/projects/MIT-Media-Lab-Identity/); a visual identity that has 45,000 variations. This allowed any number of MIT members to create and claim their very own shape, made possible by an algorithm that would generate the location of 3 squares on a 7x7 grid. 

<p Align = center ><img height = "250px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/MyType./MIT%20MEDIA%20LAB.jpg><img height = "250px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/MyType./Screen%20Shot%202020-08-19%20at%2010.14.59%20pm.png><br/>
<p Align = left> Images sourced from:
  . https://www.underconsideration.com/brandnew/archives/new_logo_and_identity_for_mit_media_lab_by_pentagram.php 
  . https://www.fastcompany.com/1663378/mit-media-labs-brilliant-new-logo-has-40000-permutations-video <br/>

Next I looked in to [Shape Grammers](https://www.slanted.de/product/shape-grammars/) by Jannis Maroscheck, 'Based on the work of Sol LeWitt, graphic designer Jannis Maroscheck has designed and programmed his own production systems that can draw an unlimited number of individual graphic shapes.’ Again I saw the use of grids to create unique outcomes, what also struck me about Maroscheck’s work was his ability to then turn a pixelated shape into an organic one, similar to how I may take a staggered spliced letter form and smoothen it. 

<p Align = center ><img height = "250px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/MyType./Slanted-Shape-Grammars_06.jpg><img height = "250px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/MyType./Slanted-Shape-Grammars_17.jpg><br/>
<p Align = left> Images sourced from:
https://www.slanted.de/product/shape-grammars/

## Progress

Following with this idea of grids I went on to create a **paper prototype** of my system, representing the procedure of answers being allocated to typefaces, typefaces being called upon based on the users answers, typefaces being stacked evenly upon a grid, and then each pixel within that grid randomly allocating a typeface from the stack to represent. 

<p Align = center ><img height = "320px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/MyType./7583928560_IMG_4249.jpg><img height = "320px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/MyType./7583928560_IMG_4250.jpg><br/>
  
I then took the next step of transforming my idea into Pseudo code and began to try and figure out how to make this system in Processing. I played around with loading in an example letter as an image and trying to manipulate the array of pixels by only allowing a select section to appear but I was having no luck. My next attempt was to have a look into works created using the [Geomerative Library](http://www.ricardmarxer.com/geomerative/) created by Ricard Marxer that Karen had introduced me to. 

<p Align = center ><img height = "350px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/Week%2008./Screen%20Shot%202020-09-23%20at%203.52.56%20pm.png>

## Research 

Geomeritave is a library for Processing that is used to facilitate the process of creating generative shapes, ‘This library exposes the shapes (such as vector drawings or typographies) in a more approchable way.’ By making it ‘easy’ to access paths, handles and points of typography Geomerative appeared to be the perfect way to merge pre-existing typefaces. 

A work created by Tobias Tschense named Bastard explored this idea perfectly, a system that ‘generates new font bastards from fragments of very different fonts.’ This was very exciting to see but unfortunately the documentation I could find did not give an explanation of how he had achieved this. 

<p Align = center ><img height = "250px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/MyType./Bastard%20.jpg><img height = "250px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/MyType./BASTARD.jpg><br/>
<p Align = left> Images sourced from:
http://generative-typografie.de/generativetypografie/bastard/
  
Another user of Geomerative named Stephanie Oppenhauser had created a system called fontMixer, again generating rather abstract typography from pre-existing fonts. This project also caught my eye due to its similarity to my idea. 

<p Align = center ><img height = "300px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/MyType./Font%20Mix.png>
<p Align = left> Images sourced from:
http://generative-typografie.de/generativetypografie/fontmix/

## Progress

After having a brief look into the Geomerative tutorials I became rather overwhelmed and instead began to look into how I would like my typeface generator to function. Using the little knowledge that I had I created a 2 question survey that when answered stacked the letter A of the 2 answers associated typefaces that were to be combined.<br/>
Here is the code: https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/tree/master/Week%2008./multiple_choice

<p Align = center ><img height = "400px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/Week%2008./mytype.gif>

When presenting this in class It was brought to my attention that I had definitely not made the code as efficient as possible, for example I was introduced to the button function which opened the doors to many possibilities for the selecting of answers. During the milestone review I was also introduced to textToPoints by Karen. 

## Research

After relying on a very specific mousePressed function to answer the survey questions I was relieved to find the [button function](https://p5js.org/reference/#/p5/createButton), this also lead me to look into [sliding bars](https://p5js.org/reference/#/p5/createSlider) and [check boxes](https://p5js.org/reference/#/p5/createCheckbox). [TextToPoints](https://p5js.org/reference/#/p5.Font/textToPoints) is a function available in the P5js library for P5.font objects which ‘Computes an array of points following the path for specified text’. This function was very intriguing to me due to its ability to take a letter and present it as a collection of vertices with an x and y value. 

## Progress

Building upon my processing prototype using my new found knowledge of textToPoints and createCheckbox I made the move to P5js and created a sketch that showed the answers presenting their array of points when checked. The aim is to use a collection of well renowned typefaces that are as different from one in other in appearance as possible but at the moment my OTF collection is not very extensive.<br/>
Here is the code: https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/tree/master/Week%2009./checked_box_coloured <br/>
Typefaces used so far:
**AdobeHebrew** - designed by John Hudson and Robert Slimbach.
**Adobe Thai** - designed by Fiona Ross, John Hudson, Robert Slimbach, and Tim Holloway.
**Chalkboard** - unknown. 
**Free Sans** -  designed by Primož Peterlin, Steve White. 
**Futura** - designed by Paul Renner, Tommy Thompson, Edwin W. Shaar
**Courier** -  designed by Howard Bud Kettler.

<p Align = center ><img height = "400px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/Week%2009./MyType.P5.gif>
  
The biggest issue I found here was that regardless of being the same fontSize the letters were different sizes and not stacking up in a way that would allow them to be combined how I desired them to. In order to fix this I gave each array of points a specific font size and location that would allow them all to sit within the same set of boundaries. 

<p Align = center ><img height = "400px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/MyType./samesize.gif>

My next step was to apply my progress so far to a sketch that actually invited the users interaction. I decided to go with the button function and allocated a different colour for the different arrays of points to allow the user to differentiate between the letters . So far I had still not worked out how the points were going to be merged in processing so I added an example created in illustrator as an image to create a prospective view of my typeface generator. Aside from some sizing issues based on components not being sensitive to screen size the sketch worked as planned.<br/>
Here is the code: https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/tree/master/Week%2011./mostdeveloped_withExampleLetter <br/>
Here is the link: https://v1nnyb4rt3l5.github.io/Slave-To-The-Algorithm-/Week%2011./mostdeveloped_withExampleLetter/index.html

<p Align = center ><img height = "400px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/MyType./ExampleLetter.gif>
  
My next step was to look into how to combine these arrays of points. I started in illustrator just to experiment with how this may be possible, looking at either combining the letter in an organised way using anchor points and connecting paths of different letters, or the more jaggered splicing approach based on choosing segments of letters between certain x/y locations. 

<p Align = center ><img height = "400px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/MyType./Anchors%20or%20pixel%20splice-01.jpg>
  
## Research 

In a seperate sketch I began working with the [beginShape function](https://p5js.org/reference/#/p5/beginShape) which allows more complex shapes to be created by recording vertices, therefore by using the vertices that I had gathered from the textToPoints function theoretically I would be able to create the shapes of the letters. 

<p Align = center ><img height = "200px" src =https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/Week%2011./Screen%20Shot%202020-10-08%20at%209.15.02%20pm.png><img height = "200px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/Week%2011./Screen%20Shot%202020-10-08%20at%2010.27.00%20pm.png><img height = "200px" src =https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/Week%2011./Screen%20Shot%202020-10-08%20at%2010.50.01%20pm.png><img height = "200px" src =https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/Week%2011./Screen%20Shot%202020-10-09%20at%2010.15.49%20am.png>
  
After a bit of mucking around I was able to produce a segment of a letter by taking points between 2 different y values and creating a shape out of them. I found that a higher aspect ratio made for a cleaner shape and helped prevent the crossing of line, however I had to swap out some typefaces as they just didn’t seem to agree with the procedure. <br/>
Here is the code: https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/tree/master/Week%2011./pointstoshapes

# Progress

In Week 11 class I presented my 2 sketches to Karen and Andy. Andy pushed me to focus on the design side of things as up to this point my focus had only been on the function of it all. Things like typefaces and use of space were talked about and he gave me a link to a similar system that he liked the look of https://www.eliashanzer.com/phase/. I then spoke with Karen who was interested in me completing the function of my generator, and encouraged me that it was not as hard to merge my 2 sketches as I thought. She noticed that at the moment more than 1 answer to each question could be selected and directed me to use createRadio which would only allow one answer. My next step was to merge my sketch combining the letter forms with my sketch of how the generator should function. 

After applying the createRadio function the idea became a whole lot more achievable. Using what I had found with the beginShape function I gave each possible radio option an outcome that drew a specific section of a letter meaning that once all questions were answered a hybrid letter is formed.<br/>
Here is the code: https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/tree/master/Week%2012./MyTypeGenerator<br/>
And here is the link: https://v1nnyb4rt3l5.github.io/Slave-To-The-Algorithm-/Week%2012./MyTypeGenerator/index.html

<p Align = center ><img height = "400px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/MyType./MYTYPEfinal.gif>
  
## Reflection


  
