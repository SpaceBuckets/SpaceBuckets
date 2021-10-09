---
t: "Green LEDs and Pole Beans"
s: "green-bucket-bean"
a: "SuperAngryGuy"
c: "The main purpose of this grow is to demonstrate that **some plants can robustly grow under green lights**, to show flowering under 24 hour lighting and to demonstrate that a normally tall plant can be grown inside of a 5 gallon bucket using [selective light training](http://www.reddit.com/r/HandsOnComplexity/comments/17r3j0/selective_light_training_primer/) and a few tricks. I'm quite certain this could be done without selective light training but likely wouldn't be quite as manageable.


    _I want to hammer home the point that plants can grow under green light_. I'm not saying you should use pure green light, I'm saying that for many plants they can thrive under pure green. If you want to go for maximum yield per area or volume, in very certain situations, some charts could back this assertion that high levels of green light is the way to go. **Some plants must have some blue light to grow properly**; experimentally I found this to be true with Sweet Basil even if the blue light is on the stem only.

        *   [Learn more about how photosynthesis works »](/docs/photosynthesis)
        
        *   [Learn more about how light colors affect plants »](/docs/photomorphogenesis)


    ### The Green LED Bucket


        <pre>
            <img src='https://i.imgur.com/pIU3WFP.png'/>
            <div>Spectrometry chart showing the rather wide spectral bandwidth of the green LED</div>
        </pre>


    _The light for this experiment is a 100 watt green LED ran at 46 watts_ on a heatsink outside of the bucket. Having the heatsink outside the bucket makes [cooling requirements](/docs/airflow-solutions) much simpler to deal with compared to CFL lighting. There is **no main circulation fan** for the Space Bucket in this grow so far. The only cooling has been a 4 inch fan blowing air over a couple of one inch holes and keeping one side of the lid open about an inch. 


    The LED is ran at constant voltage through a one ohm resistor instead of a more appropriate constant current source. I was just interested in how it would turn out and since I'm under driving the LEDs there has been no problems after two months.



    **Constant voltage with a resistor is a bad habit** that I'm showing that drops my efficiency by about 7% in this case compared to an ideal constant current power supply. **The higher the temperature, the lower the voltage drop of the LEDs**. A lower voltage drop means more current to flow which creates more heat. **In this loop it's possible to get [thermal runaway](https://en.wikipedia.org/wiki/Thermal_runaway)** where the LED gets so hot it destroys itself. A constant current driver keeps that from happening. I've only destroyed a few LEDs with thermal runaway but never with one ran at half the current rating of the LED. I'm not that concerned about a 7% hit in this instance since I'm only interested in yield per volume, not yield per watt. These are entirely different metrics.


    I'm using a $5 **laptop power supply** and a $6 **150 watt DC-DC converter**. As mentioned, a 4 inch main PC fan is used for the LED heatsink and a 40mm fan is used with the DC-DC converter. Both are run at 12 volts. 


        <code>
            <img src='https://i.imgur.com/47jFDnol.jpg'/>
            <img src='https://i.imgur.com/FEy3yv9l.jpg'/>
            <img src='https://i.imgur.com/xJ5fSPMl.jpg'/>
        </code>
    

    ### The Pole Bean

    The Kentucky Wonder pole bean was started off with _[selective light training](https://www.reddit.com/r/HandsOnComplexity/comments/17r3j0/selective_light_training_primer/) using [blue LED sticks](http://imgur.com/AXvzSn8) to light up the stem_ of the plant with intense (500 uMol/sec2 /sec) of [blue light.](http://imgur.com/0sbPkkS) Here you can see the [light sticks in thermal](http://imgur.com/7o3SL9c) showing them reaching 121 degrees F. 


    <pre>
            <img src='https://i.imgur.com/0sbPkkSl.jpeg'/>
            <div>Blue LED sticks are used to light up the stem of the plant with intense (500 uMol/sec2 /sec) of light</div>
        </pre>


    **I designed the lights sticks** to work from 12 volts (at 10mA) to 13.8 volts (at 20mA) and they are being ran at 13.8 volts here. This “slop” I put in the design was so that they can be ran off an unregulated power supply. 121°F is enough to burn plant tissue (particularly when you add in the intense blue light) so at the higher voltages you must keep the light stick from contacting the plant as much as possible.


    Here is a [spectral plot of the blue LED light sticks](http://imgur.com/UamdiU4), and you can see where they fit in with the [3 finger blue action response](http://www.dls.ym.edu.tw/s46/%2805-12-2008%29Chap%2018.pdf) (page 2). I disagree with two points on that paper. First, I don't believe it's a [cryptochrome](http://en.wikipedia.org/wiki/Cryptochrome) protein responsible for most blue light tropism but rather the [phototropin](http://en.wikipedia.org/wiki/Phototropin) proteins. And second, there appears to be blue/green light reversibility of blue light sensitive proteins at some point of its signal transduction pathway (as per my own experiments). 


    Here are a picture of [3 pole beans at 9 days](http://imgur.com/FIJbsDV.jpg) grown in different conditions: on the left is under green light with the blue light sticks, the middle under green light only and on the right was one grown under a generic 8(?) band 180 UFO LED light. Notice the rampart elongation that you can see with the tendrils under the green only plant. 


    _This is the compelling reason not to grow under green light only_, at least in the early vegetative stage. Green light can trigger the [shade avoidance response](http://en.wikipedia.org/wiki/Shade_avoidance) of a plant or a like effect causing stem elongation. Blue light reverses this and is the reason why you hear to use higher blue 6500K over lower blue 2700K when vegging.
    
        <code>
            <img src='https://i.imgur.com/cxzDeyPl.jpeg'/>
            <img src='https://i.imgur.com/8GJr28El.jpeg'/>
            <img src='https://i.imgur.com/6ZnpiSdl.jpeg'/>
        </code>


    After the early growth stage **the plant is left very compact** and the light sticks are no longer needed. Instead, a wire loop is placed around the plant and I force the tendrils down every few days. It was transplanted at 21 days old to a square 3.5 liter Tupperware container with holes in the bottom. I used Miracle-Gro moisture control soil with GH Flora series at 1000ppm with a Grow-Micro-Bloom ratio of 3-2-3 and a pH of 7.


    After about 6 weeks **the plant started flowering under 24 hour lighting**. By this time I have pushed the wire that was supporting the pole bean down to the ground. With the main tendrils wrapped around this wire, it's easy to keep the [pole bean to a height of about 6 inches or so.](http://imgur.com/D16n6QB). I've encountered this in the past where pole beans will flower out once under 24 hour lighting and then not flower out again until the photoperiod is moved back to 18/6. _This is still a mystery to me_.


        *   [Learn more about green leaves and green lights »](/docs/green-leaves-green-light)




    
    ### The Conclusion

    <pre>
            <img src='https://i.imgur.com/AiPFhLl.png'/>
            <div>For leaves grown in the field (solid) and in a growth chamber (dashed), normalized leaf yield relative to quantum of energy absorbed <a href='http://www.ecosearch.info/sites/default/files/prodotti_documentazione/TechNote126_quanti.pdf'>(original source)</a></div>
        </pre>

    So, per volume I think I could make a case that one should use green LEDs at very high power levels to get **the best yield without power considerations** due to high penetration and being in a small highly reflective chamber. But, let's go back to that LiCor tech note and [look at chart B](http://www.ecosearch.info/sites/default/files/prodotti_documentazione/TechNote126_quanti.pdf) instead of chart C. 


    This is the McCree curve but also factoring how much energy the photon has. _This is why we use red as the main photosynthesis driver_ because it does not take as much energy to generate a red photon with LEDs as a blue photon. But this curve does not take in to account that with phosphide LEDs their electrical efficiency goes down as you get in to orange/amber/yellow nor is green electrically efficient compared to red and blue.


    It's all a balancing act and why when people ask me what the best combo of LEDs is I just tell them **try one part red and one part warm white to start**. Red is electrically efficient and a main good photosynthesis driver, warm white provides a blue light spike and a broad amount of green light that tends to stimulate auxins and an unknown amount of green light sensitive proteins to express themselves.

    
    In the end I'm left with a hypothesis on green light blasting since I don't really have the space to do a formal study with an appropriate population number and controls. I could always try dwarf lettuce or super dwarf [Micro Tom tomato](https://www.google.com/search?q=micro+tom+tomato&ie=utf-8&oe=utf-8&aq=t&rls=org.mozilla:en-US:official&client=firefox-a&channel=sb) with a multitude of plants in each bucket but I'm not too concerned. Now I wait until I get some heavy flowering of the pole bean plant.

        *   [Learn more about the McCree Curve »](/docs/mccree-curve)"
o: "3"
d: "The main purpose of this grow is to demonstrate that some plants can robustly grow under green lights, to show flowering under 24 hour lighting and to demonstrate that a normally tall plant can be grown inside of a 5 gallon bucket using selective light training."
---



