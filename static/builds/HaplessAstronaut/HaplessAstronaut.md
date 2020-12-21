---
t: "HYDRO LED BRUTE"
s: "HaplessAstronaut"
a: "HaplessAstronaut"
d: "2015-11-07"
c: "It is done. It is overly complicated, and I'll probably kill the plant with it - <strong>but I had FUN making it!</strong> I'm using a 5 gallon black bucket for a reservoir, plus a 20 gallon bucket for the main container. A lot of this was stuff I already had, so I really didn't spend much. As you might have noticed, there is no RTC on the Arduino so right now the lights are running from the relay to a regular light timer. After I get a better light top built I'd like to add an RTC and some data logging capability to the Arduino. <strong>I'll eventually put it all on a real circuit board. Crawl before you walk, right?</strong><h3>THE LIGHTS</h3>
  So these were salvaged from a light bar I built a long time ago for something else. This light hood is temporary until I have time to build a better one.<strong> The LEDs are Vero 13, in parallel.</strong> Kind of a no-no wiring wise, but they do all have fuses on them. These chips were binned pretty well, too. The current is nearly equal to all as is. Like I said, temporary.<strong> About 100w of 4000k led.</strong>
  12v supply, <a href='http://amzn.to/1LYGNWY'>Arduino</a>, L7805 regulator, ULN2803 for powering. Bottom row of LED's indicate the relays. The 7 segment displays the sensor data: water temp, air temp, humidity, and fan speed. The button cycles the values. The top row indicates which is showing at the moment.
  <h3>UPDATE</h3>
  After the first week using this setup, a number of problems with the controller have become apparent. <strong>The first big flaw is not having data logging.</strong> Using the arduino as a readout for sensors is kinda pointless when you can buy a $15 device from HD that can do that already. The other big flaw is not having external environment sensors, without this the controller can never really know where the optimal settings for ventilation are. If your bucket is inside, this wouldn't be much of an issue but mine is outside where the environment is constantly changing. So I'm skipping the new light top and redoing the controller first. <strong>I've moved from the Uno to the pro mini platform</strong>, added an RTC, added SD card for logging, and swapped out the 7 segment + LED's for an I2C display to free up some pins on the ardunio."
v: "12136"
g: "arduino,brute,custom"
e: "gallery,articles,resources,led ideas"
z: ""
