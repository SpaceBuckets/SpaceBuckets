---
t: "Core Lighting Concepts"
s: "core-lighting-concepts"
a: "SuperAngryGuy"
c: "The topics below represent the core concepts in Horticulture Lighting Theory. This article features basic definitions to get you started on this science.

    ### PAR (Photosynthetic Active Radiation)

    _PAR is light from the 400-700nm wavelengths by standard definition_ (far red light that has a wavelength longer than 700nm is not be included). It is important to understand PAR is what we measure and not a unit of measurement: for example, '300 PAR' makes no sense because the person could be talking about PAR watts. As a reference, around 4.6 µmol/m2/sec is one PAR watt/m2 for white light (CRI 80).

    *   [Learn how to use Lux Meters and Sensors »](/docs/lux-meters)

    ### PPFD (Photosynthetic Photon Flux Density)

    <pre>
        <img src='https://i.imgur.com/tbSX33P.jpg'/>
        <div>Photosynthetic Light Response Curves (<a href='https://fluence.science/science-articles/horticulture-lighting-metrics/'>source</a>)</div>
    </pre>

    _This is the intensity or the amount of the light_ at the point that the measurement was made. **Lux is a close white light equivalent.** PPFD is measured in units of µmol/m2/sec or 'micromoles per square meter per second' also written as µmol m-2 s-1. This unit of light alone tells nothing about the wavelength(s) of light, only the amount of PAR when measuring PAR in this unit.

    We measure PPFD with a type of light meter called a [quantum light meter](https://amzn.to/3yiwoSy). Quantum in this case is not some gimmick marketing term but rather to emphasize that the meter is measuring the actual number of photons, the quanta or individual particle of the electromagnetic field, being radiated to a space (such as the top of a plant canopy).

    *   [Learn more about Lux to PPFD conversions »](/docs/lux-ppfd-conversion)

    *   [Learn more about optimal Lux Lighting Levels »](/docs/lux-lighting-levels)

    ### PPF (Photosynthetic Photon Flux)

    _This is the total light given off by a light source._ PPF is measured in µmol/sec or 'micromoles per second' also written as µmol s-1. **Lumens is a close white light equivalent**. PPE times the wattage of the light equals PPF.

    There is some confusion about this term. It can be argued that this is the same as PPFD but it is being defined by [ASABE](https://asabe.org) and will most certainly be accepted as an industry standard to define how much light is being given radiated by a lighting source. It can be a bit naive to use PPF to try to calculate PPFD numbers: if you do then be sure that you over estimate.

    *   [Learn more about Luminous Efficiency »](/docs/luminous-efficiency)

    *   [Dive into Equivalent Wattage for lights »](/docs/luminous-efficiency)

    ### PPE (Photosynthetic Photon Efficacy)

    <pre>
        <img src='https://i.imgur.com/Jnwqhfa.jpg'/>
        <div>A high efficacy LED example (<a href='https://www.nature.com/articles/s41438-020-0283-7'>source</a>)</div>
    </pre>

    _This is how many photons of light are generated_ per joule (watt * second) of energy input. PPF/Watts will give the PPE. **Lumens per watt is a close white light equivalent.** PPE is measured in µmol/joule or 'micromoles per joule' also written as µmol/J.

    This is a critical measurement of lighting sources that tells us how much light is being radiated per amount of energy consumed by the light source. It is literally a metric of how many photons are being produced per joule of energy input. Top end grow lights put out about 2.4 umol/joule, while low end lights are about 0.9-1.3 uMol/joule. With cheaper lights you may save money initially but you will get hit with much higher energy usage costs long term. As a general rule, don't buy a grow light for professional use unless you know the uMol/joule number.

    *   [Learn more about Luminous Efficacy »](/docs/luminous-efficacy)

    *   [Dive into Efficacy Limits »](/docs/efficacy-limits)

    ### DLI (Daily Light Integral)

    **This is the amount of light a plant receives per day measured in mol/m2/d** or 'moles per square meter per day'. An easy way to quickly calculate the DLI is to take 100 umol/m2/sec * 24 hours = DLI of 8.5. We can say that 24 hour lighting at 200 umol/m2/sec is a DLI of 17 mol/m2/day. If I have 400 umol/m2/sec of light for 16 hours per day then the DLI is 4 * 8.5 constant * (16/24) of a day = round up to DLI of 23 mol/m2/day. The constant is actually 8.6 for 100 umol/m2/sec at 24 hour lighting but 8.5 is easier to calculate.

    *   [Learn more about the Daily Lighting Integral »](/docs/daily-lighting-integral)

    ### CRI (Color Rendering Index)

    _CRI is how well the reflected light of different colors look._ CRI 90 and above light will have deeper reds that will read lower with a lux meter, although the true PPFD levels may be the same. The deeper reds is why CRI 80 and 90 have different lux to PPFD conversion values. Roughly speaking, a CRI 100 light has a luminous efficacy of around 250-260 LPW (lumens per watt) at 100% efficiency, CRI 95 is 280 LPW, CRI 90 is 300 LPW, and CRI 80 is 320 LPW. In the real world, these numbers can vary by 10% or so.

    The higher the CRI number, the greater and deeper the red light we will have. Our eyes have less red light sensitivity compared to other colors, so a really high CRI light will have less lumens per watt although there may be the same amount of light being produced as umol/sec and as perceived by the plant.

    *   [Learn more about the Color Rendering Index »](/docs/color-rendering-index)

    *   [Read about how light colors affect plants »](/docs/light-colors)

    <pre>
        <img src='https://i.imgur.com/zTmt4oa.jpg'/>
        <div>Planckian locus in the CIE 1931 chromaticity diagram (<a href='https://en.wikipedia.org/wiki/Planckian_locus#/media/File:PlanckianLocus.png'>source</a>)</div>
    </pre>

    ### CCT (Correlated Color Temperature)

    _CCT is basically the red-blue ratio of a white light source_ and correlates to (i.e. appears to us as) the color temperature of a black body radiation source in degrees kelvin. Higher CCT, having more blue light, will keep plants more compact at a given lighting level. 3000K and 3500K are pretty common for all around use. Roughly speaking, 2700K is 10% blue, 4200K is 20% blue, and 6500K is 30% blue.

    For an artificial lighting source such as LED lighting, CCT is how white light is perceived. Cool white will have a higher blue light ratio and be at a higher CCT such as 6500K. Warm white will have a higher red light ratio and have a lower CCT such as 2700K. Higher color temperatures are common for vegetative growth since the higher blue light ration will help keep plants more compact.

    *   [Dive into color mixing theory »](/docs/mixing-colors)

    *   [Ultraviolet light growing considerations »](/docs/ultraviolet-growing)

    ### McCree Curve

    This is a chart averaged of 22 different types of plants used in botany that **shows the amount of photosynthesis that occurs by wavelength**. The McCree curve is only valid at 50 uMol/m2/sec of monochromatic light with the single leaf model but a useful starting point. The McCree curve is different than absorption curves of pigments isolated from a plant leaf and gives much more realistic information as to how plants respond to photosynthesis by wavelength.

    *   [Learn more about the McCree Curve »](/docs/mccree-curve)
    
    *   [Learn more about the Emerson Effect »](/docs/emerson-effect)"
d: "The topics below represent the core concepts in Horticulture Lighting Theory: learn about PAR, PPFD, PPE, CCT, McCree Curve and the Emerson far red Effect. This article features basic definitions to get you started on this amazing science."
---
