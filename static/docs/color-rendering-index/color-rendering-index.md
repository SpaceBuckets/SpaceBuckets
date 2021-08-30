---
t: "CRI (Color Rendering Index)"
s: "color-rendering-index"
a: "SuperAngryGuy"
c: "_CRI (Color Rendering Index) tells us how well a light source does at accurately reproducing colors_ in an object relative to a natural or black body radiation source (like the sun, incandescent bulb). It really falls flat, though, and a different standard has come out called TM-30. TM-30 doesn't actually replace CRI because they are standards from two different organizations, the [CIE (International Commission on Illumination)](https://cie.co.at/) for CRI, and [ANSI/IES (American National Standards Institute/Illuminating Engineering Society)](https://www.ies.org/) for TM-30.

    <pre>
        <img style='width: 100%' src='https://i.imgur.com/xHuRtoY.jpg'/>
        <div>The CIE 1960 UCS Color Space</div>
    </pre>

    **CRI plays a larger role in lux to PPFD (umol/m2/sec) conversions than color temperature.** Higher CRI lighting will have a greater amount of deeper reds, which naturally have a lower luminous flux at the same radiant flux (because it takes into account the sensitivity of our eyes by wavelength). In other words, the deeper reds have a lower luminous efficiency. You can see the differences in my [spectroradiometer SPD charts](/docs/lux-ppfd-conversion).

    A white LED that is 100% efficient that draws one watt of power (one joule per second) **will output about 320 lumens of light at CRI 80**. An LED with a CRI of 80 that outputs 200 lumens per watt will have an efficiency of 200/320= 63%. But an LED with a CRI of 100 that output 200 lumens per watt will have an efficiency of 200/280 = 71%.

    ### TM-30 Measurements

    _Fidelity Index (Rf)_ is used with TM-30 measurements and is sort of like CRI (0-100 scale with higher being better, but CRI can also have a negative number), but there's 99 color evaluation samples with a wide range of hue (base color), chroma (amount of saturation), and lightness. **It is the average amount of 'color smearing'** in the 99 color samples, or the average of how far off one is from the color samples. An ultra high CRI bulb can have a TM-30-15 Rf of 94, and around 60 should be the minimum for indoor lighting (higher for living areas). The US Dept of Energy [has a great tutorial on TM-30](https://www.energy.gov/eere/ssl/tm-30-frequently-asked-questions).

    _Gamut Index (Gf)_ with TM-30 ranges from 80-120 and is basically the amount of saturation with 100 being a neutral saturation. **It is the color gamut area.** Lower Gf white lights will make objects appear duller with higher Gf having colors more saturated."
d: "The CRI (Color Rendering Index) measurement tells us how well a light source does at accurately reproducing colors in an object relative to a natural or black body radiation source (like the sun, or an incandescent bulb). It really falls flat, though, and a different standard has come out called TM-30."
---