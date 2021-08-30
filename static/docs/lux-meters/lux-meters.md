---
t: "Lux meters, quantum light meters, and spectrometers"
s: "lux-meters"
a: "SuperAngryGuy"
c: "<p>A <b>quantum light meter</b> is called 'quantum' because their measurement is in the amount a photons hitting a specific point in space per second and a photon is a quanta of light. <b>A lux meter</b> is called 'lux' since they measure luminous flux.</p>

    <pre>
        <img style='width: 100%' src='https://i.imgur.com/ICgZlFh.png'/>
        <div>Spectral response curve</div>
    </pre>

    <p><em>Lux meters try to get this spectral response curve (the black curve)</em> and typically use an inexpensive silicon photodiode with a particular filter that rolls off the red end. The photodiode naturally has a blue roll off and this, with economy of scale, allows pretty accurate meters to be made cheaply compared to quantum light meters. That filter is just a cheap greenish piece of plastic with this spectral response.</p>

    <p><b>The high end quantum light meters use a silicon diode</b> with a very expensive spectral response flattening curve and A thin film optical band pass filter to only read 400-700nm light evenly. That's why there is a big price jump in meters prices. These meters also use a digital smoothing filter so the readings aren't bouncing all over the place. <b>If you're serious about lighting you'll get a full spectrum quantum light meter.</b></p>

    <h3>Recommended Meters</h3>
    <pre>
        <img src='https://i.imgur.com/EKQF885.png'/>
        <div>Apogee MQ-500 quantum light meter</div>
    </pre>
    <p>For red/blue 'blurple' lighting and for professional or academic use for all lighting, I recommend either the <a href='https://amzn.to/3DoAOv1'>Apogee MQ-500 quantum light meter</a> or the <a href='https://amzn.to/3mFcYFp'>Apogee SQ-520 quantum light sensor</a>. If that is not an option, the Dr.Meter lux meters may be a good alternative, like the <a href='https://amzn.to/2UXW5dH'>1330B-V</a>. <b>For pro/academic use or advanced hobby use, get the MQ-500</b> if you are doing more field use, get the SQ-520 if you are doing more lab use and don't need to be portable.</p>

    <p>According to <b>Bruce Bugbee</b>, founder of <a href='https://www.apogeeinstruments.com/'>Apogee Instruments</a> and the Director of the Crop Physiology Laboratory at <a href='https://caas.usu.edu/labs/cpl/'>Utah State University</a>, <em>your light meter should never have more than a 5% error over 400-700nm</em> for academic purposes. A lux meter should keep you within 10% error for most white light sources (as per my testing), as long as a rough conversion value is known. </p>

    <p>Quantum light meters and lux meters are basically worthless for far red lights and far red LEDs. <b>For those you need a spectrometer</b>, a far red sensitive spectral sensor, or something like an Apogee SQ-620 which is PAR and far red sensitive. Red/far red sensors for microcontrollers start at about $25.</p>

    <p>Do not use a <b>cheap analog lux meter</b>. I've tested one type and it was way off (the analog ones had impedance matching problems with the analog scale so were giving bad readings in brighter light). These cheap 3 in 1 light meters, pH meters, and moisture meters are worthless.</p>

    <h3>Usage tips</h3>
    <p>You generally want the <b>light meter pointing up and down, not at the light source, to get a cosine correct reading</b>. This is a huge mistake I see people make: the white piece of plastic over the sensor gives the proper cosine correction, but not tilting the sensor towards the light will give false readings.</p>

    <p>You can calibrate any light meter for PPFD as long as the meter has cosine correction. Most light meters are highly linear; a light meter based on a light dependent resistor would likely not be linear, but silicon diodes are linear to within 1% over 7-10 orders of magnitude.</p>

    <p><em>Your phone is a poor light meter if it has no cosine correction</em> (highly likely does not). I can set up conditions where my Samsung A51 (and Samsung S7) are ten times off a true reading. This is a hardware limitation that can not be corrected with an app. Phones are basically worthless for color LEDs due to the luminous efficiency issue. Based on hands-on experience, I automatically discount all lux measurements done with phones.</p>"

---