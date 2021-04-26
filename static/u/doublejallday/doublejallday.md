---
t: "DOUBLE TOTE"
s: "doublejallday"
a: "doublejallday"
d: "2019-06-22"
c: "And here is my build! I used two 54L storage buckets from Kmart ($10 a piece) for the garden container. The main lighting has a 300w <a href='https://amzn.to/36NO5zr'>UFO LED light</a> (some Chinese no brand thing). It uses 100 Epistar 3W LEDS, and has two 34V 1.5A drivers inside and two fans. I reversed fans so that the light draws the air from the bucket and pushes it out on top. For the walls I'm using one 5050SMD 5m 12v LED strip that goes around the top bucket. This one is good because it doesn't need a special driver and you can simply connect it to the 12v power supply.
  I installed an Arduino Uno with a 4 relay shield, RTC module and 16x2 LCD. I use Arduino to switch the lights on and off through relays. The RTC module simply keeps the time so that the Arduino gets the current time when I switch the bucket off and on. And I use LCD just to make sure that the system has the correct time. I've also used the Arduino soldering shield to solder all the wires so that I can take the top bucket off without disconnecting anything.
  I've mounted the 12V power supply directly onto the bucket and connected the Arduino GND and Vin to one of the 12v outputs. The fan is using this output as well. I run it 24/7. The other output is used by the LED strip where one wire is connected directly and the other is going through the relay. The relays are controlled by the couple of digital outputs on Arduino through the Alarm library. I don't have the code to share atm unfortunately. The 300W light is going through one of the relays; one wire directly to the light and another through the relay."
v: "3072"
g: "sidelight,tote,ufo"

z: "B008GRTSV6,B00XC3LBI2,B004MGPALC,B01N1LZSK3,B00E0NSORY,B01B7BBEGO"
