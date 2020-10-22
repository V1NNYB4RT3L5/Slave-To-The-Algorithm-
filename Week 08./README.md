# Week 8.
Week 8 began with an update from everyone on where they were at. I presented my pseudo code - <br/>

<img width="450" src="https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/Week%2008./Screen%20Shot%202020-09-23%20at%203.52.56%20pm.png"><br/>

I had began trying to figure out how to make this system in Processing. So far I had played around with loading in an example letter as an image and trying to manipulate the array of pixels by only allowing a select section to appear but I was having no luck. My next attempt was to have a look into works created using the [Geomerative Library](http://www.ricardmarxer.com/geomerative/). After having a brief look into the tutorials I became rather overwhelmed and instead began to look into how I would like my typeface generator to function. Using the little knowledge that I had I created a 2 question survey that when answered stacked the letter A of the 2 answers associated typefaces that were to be combined.<br/>
Here is the code: https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/tree/master/Week%2008./multiple_choice

### Prototype survey screen. 
<img allign = center><img src="https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/Week%2008./mytype.gif"><br/>

Karen sugested that I look into transferring tabular data to processing, allowing me to create a spreadsheet that associates all possible answers from the MyType survey questions to a typeface, Processing can then recieve information from the spreadsheet depending on the users input. I found this [video](https://www.youtube.com/watch?v=woaR-CJEwqc) which explains how CSV files can be used by processing to generate certain inputs. We also discussed Geomerative again and had a look at this [example](http://generative-typografie.de/generativetypografie/bastard/) by Tobias Tschense generating font 'bastards' out of various parts of different fonts.

<p Align = center ><img height = "250px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/MyType./Bastard%20.jpg><img height = "250px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/MyType./BASTARD.jpg><br/>
<p Align = left> Images sourced from:
http://generative-typografie.de/generativetypografie/bastard/
  
Another user of Geomerative named Stephanie Oppenhauser had created a system called fontMixer, again generating rather abstract typography from pre-existing fonts. This project also caught my eye due to its similarity to my idea. 

<p Align = center ><img height = "300px" src = https://github.com/V1NNYB4RT3L5/Slave-To-The-Algorithm-/blob/master/MyType./Font%20Mix.png>
<p Align = left> Images sourced from:
http://generative-typografie.de/generativetypografie/fontmix/

there was alot of talk about [libraries](https://processing.org/reference/libraries/#typography)<br/>

### Processing class. 

For our processing class we looked at speech in P5.js using this [extention](https://idmnyu.github.io/p5.js-speech/) we were able to speak into our microphones and processing would turn that into words on our screen. <br/>

