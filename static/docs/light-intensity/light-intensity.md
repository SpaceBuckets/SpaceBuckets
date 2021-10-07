---
t: "Light Intensity"
s: "light-intensity"
a: "SuperAngryGuy"
c: "**In photobiology the only unit of measurement currently used is uMol/m2/sec**. It's often written micromoles s-1 m-2 or something close. It means the equivalent of micromoles of photons falling in a one square meter area per second. A “mole” is [Avogadro's constant](https://en.wikipedia.org/wiki/Avogadro_constant) so one micromole of photons is 6.02*1017 photons. 

    <pre>
        <img src='https://i.imgur.com/jJXTo74.jpg'/>
        <div>SQ-521 Apogee Sensor (<a href='https://www.ictinternational.com/products/apogee-full-spectrum-quantum-par-sensors/apogee-full-spectrum-quantum-par-sq-500-series/'>source</a>)</div>
    </pre>

**It's a measurement of a quantum** which is why plant light meters are called quantum meters. For here on for brevity, I'm just going to call this unit a uM (also called a uE for “micro Einstein” but this term isn't used anymore in photobiology). To make it easy:


*   **Full sunlight: 2000-2200uM**. It makes no sense to run plants at this level and it will reduce your yield.
*   _Most plants saturation point: 1000-1200uM_. The saturation point is the lighting level where you just can't get anymore growth rate without adding CO2. A lot of this has to do with the effects of [photorespiration](http://en.wikipedia.org/wiki/Photorespiration) in C3 plants like cannabis and non-photochemical quenching for all plants at higher lighting levels. If you just want high yield per area or volume without consideration of wattage, **you should run you plants at this level**. You want to completely blast Space Buckets at this level if you just want as much yield as possible. I run plants around this level in flowering with CO2 enhancement.

*   _Most plants optimal point: 500uM_. Want high yields per watts claim? Run your plants at or below this level. Above about 500uM, plants start becoming CO2 limited in their growth rate but if you want good, tight nuggets this should be their minimum lighting level. This is why you need to use reflectors with CFL. Between about 50uM and 500uM the growth rate is linear with lighting levels. From 500um to 1000uM it's a compressed curve.

*   _Most plants compensation point: around 30uM_ (I don't know the exact number for pot). This is a minimal lighting point needed for growth. “House plants” have a much lower compensation point which is why they're able to survive at normal household lighting levels.



### (Quantum) Light Meters

    <pre>
        <img src='https://i.imgur.com/fLLqCnR.jpg'/>
        <div>Apogee Sensor Sensitivity Ranges (<a href='https://www.ictinternational.com/products/apogee-full-spectrum-quantum-par-sensors/apogee-full-spectrum-quantum-par-sq-500-series/'>source</a>)</div>
    </pre>

**Light meters that measure in lumens** or lux tend to use a sensor (gallium arsenide phosphide photo diode) that have a spectral sensitivity response that is close to the [human eye](http://i.imgur.com/ypHzL.jpg). 


**Low end quantum meters** in the $200-300 range use a different type of the above diode that is more appropriate for plant sensitivity. Low end quantum meters are also rather insensitive to red (beyond about 640nm) and they will give very low readings for 660nm LEDs. 


The lowest cost plant light meter that gives accurate enough for scientific proposes readings for plant purposes is in the $500 range and the portable Licor quantum light meter, the scientific standard, is about $800. **Beyond this you need a spectrometer**. I use the Green Wave spectrometer from [StellerNet](http://www.stellarnet-inc.com/) which was $2,700 with a few lenses, fiber optic cable and [NIST tracable calibration](http://en.wikipedia.org/wiki/Traceability#Measurement).


_All light meters, regardless of type, can give accurate relative readings_ as long as it's the same lighting source. So don't go throwing away your $80 light meter that makes measurements in other than uM. A simple solar cell picked up at Home Depot or Walmart in those cheap solar powered garden lights can give accurate relative readings when ran in linear photoconductive mode with a multimeter.
 

If you want to make meaningful measurements between two different light sources then the $500 and above light meters are needed because they give a flat spectral response rather than the red peaked, lower blue sensitivity response of low end quantum light meters or strongly green peaked lumem/lux light meters. **A lumens/lux meter can give quite different measurements for an LED grow light** since most are heavy red/blue, than a CFL, induction, HID and the like which has higher green/yellow and should never be used as a meter in grow comparisons.

  *   [Learn how to use Light Meters and Sensors »](/docs/light-meters)

  *   [Learn more about Lux to PPFD conversions »](/docs/lux-ppfd-conversion)

### Inverse-square Law

    <pre>
        <img src='https://i.imgur.com/91YeHCw.png'/>
        <div>S represents the light source, while r represents the measured points. The lines represent the flux emanating from the sources and fluxes. (<a href='https://en.wikipedia.org/wiki/Inverse-square_law'>source</a>)</div>
    </pre>


Light falls off at the square of the distance also known as the [inverse-square law](https://en.wikipedia.org/wiki/Inverse-square_law). _At twice the distance one should have 1/4 the lighting_, at 3 times the distance one should have 1/9, and so on. This isn't exactly true when taking measurements close to a light source particularly when reflectors are involved. The general rule of thumb is that **this holds true at a distance of 5 times** and beyond the physical size of the light source.


I just took some side measurements of a bare 2700K, 26 watt CFL after a 5 minute warm up. At 1 inch it was 834uM. At 2 inches it was 420uM (half the light, should have been one quarter under inverse square law rule). At ten inches it was 30uM. That's almost 4 times higher at 10 inches than it should have been under inverse square law rule. 


**Up close, the inverse square law only holds true for a theoretical point light source** and not the light sources that we as growers use (CFL, HPS and the like). A LED is much closer to a point light source but still, up very close keep in mind that the inverse square law doesn't hold true- a measurement at 1mm isn't going to be a million times higher that one taken at 1000 mm.


The concept of light penetration has a lot to do with the inverse square law. LEDs, for example, that have a 130 degree beam angle would have much less penetration than one in the 45-60 degree range.

*   [Read about how canopy light penetration »](/docs/canopy-penetration)"
o: "2"
d: "The Light-Top is the heart of a Space Bucket. It contains the main lighting configuration, and determines the performance of the indoor garden."