---
t: "Lux to PPFD conversions"
s: "lux-ppfd-conversion"
a: "SuperAngryGuy"
c: "_I've tested dozens of LEDs with my spectroradiometer to get these numbers to always be within 10%._ These are true measurements and not tied to any specific lux meter. The claims are also backed by peer reviewed literature that uses **67 lux = 1 µmol/m2/sec as a generalization** for all white LEDs and not taking CRI into account. The following conversions will get you within 10% for white light.

    *   **55 lux** = 1 µmol/m2/sec (sunlight)

    *   **63 lux** = 1 µmol/m2/sec (white light - CRI 90)

    *   **70 lux** = 1 µmol/m2/sec (white light - CRI 80)

    *   **80 lux** = 1 µmol/m2/sec (HPS)

    <pre>
        <img style='width: 100%' src='https://i.imgur.com/70AXfJS.png'/>
        <div>Comparing different lighting spectrums</div>
    </pre>

    > Dependencies have been shown and conversion factors have been determined, which **allow to estimate PPFD, YPFD and radiometric power density of white LED light** according to the known illumination in lux. The most adequate estimation of the photosynthetically active white light flux is achieved if one measures the illumination E in kilolumens using a luxmeter, neglects the influence of spectral parameters, and _estimates the PPFD of white LED light according to the formula: PPFD (μmol/s/m2) = 15·E (klx)_. Anton Sharakshane, [An easy estimate of the PFDD for a plant illuminated with white LEDs](https://www.biorxiv.org/content/biorxiv/early/2018/03/30/289280.full.pdf)

    ### Bridgelux phosphor guide

    This section covers spectrum charts, conversion factors, and color ratios of the Bridgelux COB array LEDs. **The conversion factor is luminous flux (lux) to photosynthetic photon flux density (PPFD) in uMol/m2/sec (micro moles per square meter per second) of PAR (photosynthetic active radiation 400-700nm)**. This is so that low cost lux meters can be used as plant lighting meters. The color ratios will not add up to 100. Blue is 400-499nm, green is 500-599nm, red is 600-699nm, far red is 700-799nm. The average wavelength of phosphor pump blue LEDs in my samples was about 453.5nm.

    Bridgelux LED

    Conversion factor

    Color ratio

    Spectrum chart

    2000K CRI 65

    70 lux = 1 uMol/m2/sec

    blue: 05  
    green:41  
    red:49 | far red: 02

    ![](https://i.imgur.com/cmu9pWD.jpeg)

    2700K CRI 80

    72 lux = 1 uMol/m2/sec

    blue: 11  
    green: 42  
    red: 36 | far red: 02

    ![](https://i.imgur.com/s1oh0rG.jpeg)

    2700K CRI 90

    63 lux = 1 uMol/m2/sec

    blue: 06  
    green: 19  
    red: 22 | far red: 02

    ![](https://i.imgur.com/aaGi27J.jpeg)

    3000K CRI 80

    73 lux = 1 uMol/m2/sec

    blue: 16  
    green: 45  
    red: 37 | far red: 02

    ![](https://i.imgur.com/RdVtIFz.jpeg)

    3000K CRI 90

    65 lux = 1 uMol/m2/sec

    blue: 09  
    green: 22  
    red: 23 | far red: 02

    ![](https://i.imgur.com/U4l78mc.jpeg)

    3000K CRI 97

    59 lux = 1 uMol/m2/sec

    blue: 14  
    green: 36  
    red: 41 | far red: 04

    ![](https://i.imgur.com/mdBTbJM.jpeg)

    3500K CRI 80

    74 lux = 1 uMol/m2/sec

    blue: 20  
    green: 47  
    red: 31 | far red: 01

    ![](https://i.imgur.com/FYt9WCU.jpeg)

    4000K CRI 80

    74 lux = 1 uMol/m2/sec

    blue: 11  
    green: 24  
    red: 14 | far red: 01

    ![](https://i.imgur.com/TWimMqB.jpeg)

    4000K CRI 90

    68 lux = 1 uMol/m2/sec

    blue: 20  
    green: 40  
    red: 31 | far red: 02

    ![](https://i.imgur.com/OmQDZBU.jpeg)

    5000K CRI 70

    75 lux = 1 uMol/m2/sec

    blue: 13  
    green: 22  
    red: 09 | far red: 01

    ![](https://i.imgur.com/47SoeNf.jpeg)

    5000K CRI 80

    76 lux = 1 uMol/m2/sec

    blue: 26  
    green: 50  
    red: 21 | far red: 01

    ![](https://i.imgur.com/9VT7LYL.jpeg)"
---