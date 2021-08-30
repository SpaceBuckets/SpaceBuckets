---
t: "LED Heat Sinks"
s: "led-heat-sinks"
a: "SuperAngryGuy"
c: "<p>Only the energy input not radiated as light needs to be taken in to account for LED heat sink calculations. <em>This is called thermal wattage.</em> For example, a 100 watt COB that is 50% efficient would need a heat sink good for 50 watts of heat. A 100 watt COB that is 80% efficient would need a heat sink good for 20 watts of heat.</p>
    <pre>
        <img style='width: 100%' src='https://i.imgur.com/uqrvsdV.png'/>
        <div>Duct around a heat sink with a heat source on its base.  <a href='https://en.wikipedia.org/wiki/File:Heat_sink_control_volume.png'>(source)</a></div>
    </pre>
    <p>A heat sink has a <em>thermal rating</em> or heat dissipation in units of °C/W, or the rise of the heat sink in degrees C per watt of heat on the heat sink. If I have a 100 watt COB that is 50% efficient (so 50 watts of heat) and want the heat sink to rise no more than 10°C, I would need a heat sink with a heat dissipation of 0.2 °C/W. If I use a fan it may be 0.4 to 2 °C/W, depending on how much air the fan pushes and the particular heat sink geometry.</p>

    <p>I often size heat sinks that <em>prevent the LEDs from going above 85-125 C for safety</em>, and then use a quite fan to keep them at a temperature I want them to be. This provides an inherent fail-safe feature when experimenting.My personal do not go over temperature is 145°F (63°C), or where I can keep my finger on the heat sink for an honest one second. For a Vero 29 running at 120 watts <b>I use a generic $30 CPU cooler with a fan</b> and call it good. I've seen coolers half that price that should also work.</p>

    <h3>Usage Tips</h3>
    <p><b><a href='https://en.wikipedia.org/wiki/6063_aluminium_alloy'>6063 aluminum alloy</a> is the alloy with the highest thermal conductivity</b> (around 210 W/m⋅K), and most common in heat sinks. The trade off is that 6063 is a softer alloy so common 6061 alloy (around 167 W/m⋅K) may be used instead in some cases. I've seen sellers advertise about using 'aircraft grade aluminum' like 7075 alloy for metal core PCBs for LEDs, which is inferior for our uses (around 140 W/m⋅K). For comparison, copper is closer to 400 W/m⋅K, and steel is closer to 45 W/m⋅K.</p>

    <p>It is critically important that a <em>thermal compound paste or thermal adhesive</em> is used between the LED and the heat sink. You only want a thin layer, and I always twist the LED around a bit to get rid of air bubbles and get better overall thermal contact. If it's a heat sink/LED I'll never reuse then I'll use a thermal adhesive and just glue the LED down. Thermal pads can work at lower power levels but won't work as well as a compound/adhesive.</p>

    <p>When <b>making mounting holes</b> in a heat sink you can use a stainless steel screw as a tap. Drill a whole just smaller than the diameter of the screw, force the screw in to the much softer aluminum cutting the threads in the process (I use a ratcheting screwdriver for this), back the screw out, take a fine file and smooth out the burs completely, and you have a drilled and tapped mounting hole.</p>

    <h3>Temperature Measuring</h3>
    <p>When working with a heat sink and a constant current power supply, you can monitor the voltage on the LEDs to see very tiny temperature variations that might not normally be measured with a temperature probe. With a constant voltage power supply, you can monitor the current to see very tiny temperature variations. This is because the I/V curves for LEDs are temperature dependent, and strings of LEDs make very high resolution temperature sensors. I use a 50,000 count data logging Fluke 287 for this purpose (I recommend a 6000 count multimeter for lower cost DIY. Every low cost meter I've ever tested reads within their listed specs when referenced to my Fluke 287, except for the occasional generic $5 meter that companies like Harbor Freight give away for free).</p>"
o: "3"
d: "The Emerson effect is about driving photosynthesis with part of the light PAR (400-680nm in this case), and part of the light far red (700nm-740nm or so), combined can result in photosynthesis rates higher than normal."
---



