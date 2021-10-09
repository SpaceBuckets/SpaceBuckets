---
t: "Luminous efficiency"
s: "luminous-efficiency"
a: "SuperAngryGuy"
c: "Luminous efficiency is **a percentage correction factor for wavelengths of light** (relative to 555nm) that takes in to account the spectral sensitivity of the human eye. 555nm is what our eyes are most sensitive to and has a luminous efficiency of 1.0002 (it had to be corrected once which is why it's not 1.0000, that's good science!).


    It is important to note that luminous efficiency is not the same as [luminous efficacy (lumens per watt)](/docs/luminous-efficacy). Generally speaking, sfficiency is the ratio of useful work: for example, **an LED is 50% efficient if half the consumed energy is radiated away as the light**. Efficacy, as how I'm using it, is how well something works: for example, that white 50% efficient LED at CRI 80 has a luminous efficacy of around 160 lumens per watt.

    ### Wavelengths and Efficiency

    <pre>
        <img src='https://i.imgur.com/SJwYfJr.jpeg'/>
        <div>Transmission characteristics of the filter for a <a href='https://amzn.to/3BlCiEr'>Dr.Meter LX1010B lux meter</a></div>
    </pre>       

    LEDs have a binning tolerance, and a 660nm LED could actually be 650nm or 670nm. A 650nm LED has a luminous efficiency of 0.107, while a 670nm LED has a luminous efficiency of 0.032. **That means with a lux meter the 650nm LEDs with give a lux reading three times higher than 670nm LED although the PPFD may be the same.** This is why we don't use lux meters with color LEDs for absolute measurements, and why knowing about luminous efficiency is important. A [cheap $10 spectroscope](https://amzn.to/3Dtck3J) can help you identify that actual dominate wavelength of an LED so you can determine the needed correction factor.


    _A lux meter with cosine correction can be used accurately with any visible lighting spectrum for relative measurements_. The cheap $20 lux meters I examined where using silicon diodes with an appropriate short pass filter. This, combined with the response curve of a generic silicon photodiode, gets fairly close to a true lux curve response that a spectroradiometer can give that takes into account the luminous efficiency by wavelength.

     *   [Learn how to use Light Meters and Sensors »](/docs/light-meters)


    ### Efficiency Examples

    If we know that the white light coming from the bulb with a CRI of 80 has a theoretical maximum efficacy of 320 lumens per watt and our light is rated for 110 lumens per watt, **then the bulb is 34% efficient**. If the light bulb is using 450nm blue LEDs as a phosphor pump source, and the maximum theoretical efficacy of a 450nm photon is 3.76 umol/joule, **then we know that the light is putting out 1.28 umol/joule of light**. The light will be drawing 14.5 watts (1600 lumens light output / 110 lumens per watt) giving a total PPF of 18.8 umol/sec of light. If that 18.8 umol/sec of light is spread evenly over a square meter of plant canopy then the average light intensity in the square meter will have a PPFD of 18.8 umol/m2/sec."
o: "3"
d: "Luminous efficiency is a percentage correction factor for wavelengths of light (relative to 555nm) that takes in to account the spectral sensitivity of the human eye. 555nm is what our eyes are most sensitive to and has a luminous efficiency of 1.0002."
---