---
t: "Leaf Optical Properties"
s: "leaf-optical-properties"
a: "SuperAngryGuy"
c: "This article covers the optical characteristics of a pole bean leaf, grown in a [Space Bucket with a 100w pure green LED light](/docs/green-bucket-bean). 

*   _Reflectivity Plot._ [The reflectivity plot](http://i.imgur.com/ZXENVr8.jpg) of this bean has to be taken with a grain of salt. It's pretty similar to this [USGS reflectivity plot of green vegetation](http://speclab.cr.usgs.gov/PAPERS/tetracorder/FIGURES/fig15-3.gif) **but mine shows a much higher far red reflectivity**. The error is in the way I'm making the measurement (since I'm not using an integrating sphere, gonionmeter or the like). It is going to read a bit high and much of the reflected light is going to be reflected right back on to the plant in a small Space Bucket chamber with the inside covered in highly reflective material.

*   _Transmission Plot._ [The transmission plot](http://i.imgur.com/QxCRP3i.jpg) is spot on for perpendicular light relative to a typical pole bean leaf. What is interesting is that **there's a transmission of almost 20% green light at 525nm**, the peak wavelength out the green LED used. **This means that the leaf beneath the top leaf has enough light to photosynthesize**. 700 uMol/meter2/sec means that, minus the reflectivity of the leaf (most which gets reflected right back to bottom of the upper leaf), 140uM of light is illuminating a lower leaf at a lighting level that is very photosynthetically efficient.

* _This leaves the leaf absorption amount_ which is total light on target minus reflectivity minus transmission. Of the light that is absorbed by chlorophyll three things can happen: **the photon get absorbed and used in photosynthesis** (the energy of the photon unused in the PSI and PSII reaction center gets converted to heat); **the photon gets absorbed but reradiated** as a red/far red photon and a little heat known as [chlorophyll fluorescence](http://en.wikipedia.org/wiki/Chlorophyll_fluorescence); or **the photon is absorbed** and known as [non-phytochemical quenching.](http://en.wikipedia.org/wiki/Non-photochemical_quenching). Photosynthesis is [remarkably inefficient](http://en.wikipedia.org/wiki/Photosynthetic_efficiency)!


### Key takeaways

First of all, it is important to note that _in a small highly reflective chamber almost all the light is absorbed_ by the plant when using LEDs.


  <pre>
        <img src='https://i.imgur.com/SgP4sbt.png'/> 
        <div>Schematic of penetration of monochromatic blue, green, and red light. Green light may reach the bottom layer of cells due to the chlorophyll’s weak absorption in the green (the green window) and scattering of green light within the leaf (the detour effect). <a href='https://academic.oup.com/jxb/article/68/9/2099/3857754'>(source)</a></div>
    </pre>


Now, most leaves are not perfectly perpendicular to the light source. You take the cosine of how out off perpendicular the leaf is to the light source in degrees, and factor in the refractive index of a leaf (1.41-1.47 or so) which drives off perpendicular photons deeper in to leaf tissue and too much math. The point being that **you do get another layer of photosynthesis going** on because the green light can penetrate the top leaf tissue with enough intensity to drive lower leaf photosynthesis.


Look again at the transmission plot for blue light (which  is the left side of the graph to 500nm). Very little blue light is transmitted because of a class of photosynthetically active accessory pigments called [carotenoids](http://en.wikipedia.org/wiki/Carotenoid) which can transfer light energy to chlorophyll with a 30-70% efficiency depending on the specific type of carotenoid. I've read elsewhere that it may be closer to 10% but this may be a specific type of carotenoid. So _on top of chlorophyll, there are other pigments intercepting blue light_ resulting in not as high leaf penetration and very little transmission through the leaf.


Look again at the transmission plot but for the red side. See that dip at 680nm? This is the peak absorption of chlorophyll in vivo. Most of this light gets absorbed in the top layers of chloroplasts leaving lower layers or lower leaves unlit. **This rapid absorption is why in the McCree curve 590nm amber is showing a higher quantum yield than 680nm**: it can penetrate deeper in to leaf tissue to be captured by deeper chlorophyll but not be absorbed but carotenoids allowing roughly a 15% transmission rate to the leaf below. 590Nm LEDs are electrically inefficient but is close to the peak of single phosphor warm white LEDs.

    *   [Learn more about green leaves and green lights »](/docs/green-leaves-green-light)"
o: "3"
d: "This article covers the optical characteristics of a pole bean leaf, grown in a Space Bucket indoor garden with a 100w pure green LED light."
---



