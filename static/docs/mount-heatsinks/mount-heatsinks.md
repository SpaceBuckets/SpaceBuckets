---
t: "How to mount LED heatsinks"
s: "mount-heatsinks"
a: "SuperAngryGuy"
c: "This is in response to someone asking about one of [Growmau5's videos on simple mounting of LEDs to heatsinks](https://www.youtube.com/watch?v=elBzBTtE78I) particularly at the 8:00 part on using Kapton tape. _I'm showing some easier and neater ways to mount COB LEDs without normal mounting hardware_. 

        <pre>
            <img src='https://i.imgur.com/HCES5Lrl.png'/>
            <div>Double sided thermal tape is a quick and easy solution.</div>
        </pre>

    The following are the main products that you can use for mounting LEDs:

    *   [Double back thermal tape](https://www.amazon.com/BCP-Adhesive-Thermal-Conductive-Heatsink/dp/B01MSL64XG)

    *   [Single part thermal glue](https://www.amazon.com/GENNEL-Conductive-Silicone-Adhesive-Compound/dp/B072MSXHJD/ref=pd_lpo_sbs_147_t_1?_encoding=UTF8&psc=1&refRID=ABCSZFVE49WSD3VG11BH)

    *   [Two part thermal epoxy](https://www.amazon.com/Arctic-Alumina-Thermal-Adhesive-5g/dp/B0009IQ1BU)


    The choice I make depends if I'm in a rush or not; _tape is very quick and easy to use_. Every option works depending on the use case. I've had issues in the past with tiny 15 watt LEDs burning out **since I was not using a better adhesive**, though this was 9-10 years ago when the electrical efficiency was not as high as it is today. 


    If I had a very small package with a very high temperature then I would use glue/epoxy but would also look up the thermal conductivity rating of the glue at that point. If we are talking about a three watt LED mount I would use also glue/epoxy but just so that it looks neater.


    Below are some examples and references of how I go about mounting my LED heatsinks for different projects.


    ### Five Channel LED Grow Light

    **I slapped this together specially for this guide.** Shown is a mounted '100 watt' red/green/blue COB and I'm about to mount the far red COB. **Double sided thermal tape is used which is much neater** than using Kapton tape or using epoxy and thermal paste. 


    [This picture featuring all the mounted LEDs](https://imgur.com/a/VQup8tQ) is with the three watt UV LEDs added that are glued down with thermal glue. Once the glue dries I finish wiring, solder in the six channels of LEDs drivers and then the light becomes a software issue with an Arduino.

        <code>
            <img src='https://i.imgur.com/ZwFRWv8l.jpeg'/>
            <img src='https://i.imgur.com/havASopl.jpeg'/>
            <img src='https://i.imgur.com/WCAyxkdl.jpeg'/>
        </code>

    ### VERO COB LED Grow Light


    This is showing how near you can mount VERO COB's to a heat sink with thermal glue. The _VERO 29_ has been ran up to 50 watts(!) with the fan running full blast but prefer not to take it above 30 watts. Just because you can use these tiny heat sinks with the efficient VERO COBs **does not mean that you should** and without a thermal sensor feedback loop will fry the VERO if the fan turns off for some reason.


    Also shown is a _VERO 18_ with a 50mm heat sink that I use with my Space Buckets. **Up to ten watts or so and no fan is needed**. With a five gallon bucket lined with foil, every 70mA on the VERO 18 will give me 100 uMol/m2/sec at the bottom of the bucket.

        <code>
            <img src='https://i.imgur.com/lBjjNG8l.jpeg'/>
            <img src='https://i.imgur.com/hHMtHNkl.jpeg'/>
            <img src='https://i.imgur.com/S8x73Y1l.jpeg'/>

        </code>
        
    ### Homemade Plant Leaf Analyzer

        
    I never wanted to show this and is _my sloppy six channel plant leaf analyzer_ that I use with my spectrometer but it clearly illustrates why you may want to take neatness in to consideration. **This is the type of stuff that I'm into** (rather than designing/building LED grow lights per se). With this I can make my spectrometry setup portable with a Windows tablet and the six channel light. 

        <pre>
            <img src='https://i.imgur.com/RlyAc9vl.jpeg'/>
            <div>Sloppyly glued six channel plant leaf analyzer</div>
        </pre>

    <pre>
            <img src='https://i.imgur.com/NeBRaUp.jpeg'/>
            <img src='https://i.imgur.com/TltgGGD.jpeg'/>
        </pre>


    *I use this to light profile a leaf by wavelength* for 450nm, 520nm, 590nm, 620nm, 660nm and 6000k white. I can analyze the chlorophyll fluorescence signature which gives my information about the performance of the [leaf's PSII](/docs/emerson-enhancement-effect) and [non-photochemcial quenching](https://en.wikipedia.org/wiki/Non-photochemical_quenching). 


    I built this in 2011, still use it today, and the 660nm LED used had to be bought out of Austria since only one place in the world(?) at the time I was starting to buy 660nm high power LEDs sold them. They were very expensive at the time I bought them a few years earlier.


    The driver is an [LM317 in constant current mode](http://www.bristolwatch.com/ccs/LM317.htm) and the selector switch switches in different transistors that control the LEDs. A power potentiometer is used for dimming.

        *   [Read more of SuperAngryGuy's experiments at /r/HandsOnComplexity](https://www.reddit.com/r/HandsOnComplexity/)

        *   [Learn more about Photosynthesis »](/docs/photosynthesis)

        *   [Learn more about light spectrum and Photomorphogenesis »](/docs/photomorphogenesis)"
o: "3"
d: "I often size heat sinks that prevent the LEDs from going above 85-125 C for safety, and then use a quite fan to keep them at a temperature I want them to be. This provides an inherent fail-safe feature when experimenting."
---



