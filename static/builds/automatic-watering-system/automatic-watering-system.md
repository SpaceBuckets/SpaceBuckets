---
t: "AUTOMATIC WATERING SYSTEM"
s: "automatic-watering-system"
a: "LoveDispenser"
d: "2017-05-20"
c: "This is my automatic watering project and I will describe what you need to do to get it working the way I did it. <strong>I'm not a programmer, just a hobbyist</strong>, I had to learn a lot to do this and I'm sure it can be done more professionally, but this stuff works and thats what matters. Its very basic.

A <strong>Raspberry Pi powers the Arduino through USB cable</strong>. Arduino controls relay to water the plants and sends sensor data to Raspberry PI, which logs it, stores in .csv files and plots it every 5 minutes and saves .png file of the graph. <strong>Automatic watering works like this</strong>: it gets soil humidity sensor readings from the Chirp soil moisture sensor, if it is below the user-defined value, it closes the relay, and the pump stars working and watering the plants. To get the temperature and moisture readings, it uses <strong>2 DHT22 sensors</strong>, gets the average values, rounds the number and thats your temperature and humidity. <a href='https://github.com/LoveDispenser/AutoWatering'>View the code and setup information here</a>."
v: "2865"
g: ""

z: "B008GRTSV6,B018JO5BRK,B06XD18H6K,B00E0NTPP4,B01CD5VC92"
