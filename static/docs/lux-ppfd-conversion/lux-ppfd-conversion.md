---
t: "Lux to PPFD conversions"
s: "lux-ppfd-conversion"
a: "SuperAngryGuy"
c: "<p><em>I've tested dozens of LEDs with my spectroradiometer to get these numbers to always be within 10%.</em> These are true measurements and not tied to any specific lux meter. The claims are also backed by peer reviewed literature that uses <b>67 lux = 1 µmol/m2/sec as a generalization</b> for all white LEDs and not taking CRI into account. The following conversions will get you within 10% for white light.</p>
    <ul>
    <li><b>55 lux</b> = 1 µmol/m2/sec (sunlight)</li>
    <li><b>63 lux</b> = 1 µmol/m2/sec (white light - CRI 90)</li>
    <li><b>70 lux</b> = 1 µmol/m2/sec (white light - CRI 80)</li>
    <li><b>80 lux</b> = 1 µmol/m2/sec (HPS)</li>
    </ul>

    <pre>
        <img style='width: 100%' src='https://i.imgur.com/70AXfJS.png'/>
        <div>Comparing different lighting spectrums</div>
    </pre>

    <p class='quote'>Dependencies have been shown and conversion factors have been determined, which <b>allow to estimate PPFD, YPFD and radiometric power density of white LED light</b> according to the known illumination in lux. The most adequate estimation of the photosynthetically active white light flux is achieved if one measures the illumination E in kilolumens using a luxmeter, neglects the influence of spectral parameters, and <em>estimates the PPFD of white LED light according to the formula: PPFD [μmol/s/m2] = 15·E [klx]</em>.
    <i>Anton Sharakshane, <a href='https://www.biorxiv.org/content/biorxiv/early/2018/03/30/289280.full.pdf'>An easy estimate of the PFDD for a plant illuminated with white LEDs</a></i></p>
    <h3>Bridgelux phosphor guide</h3>
    <p>This section covers spectrum charts, conversion factors, and color ratios of the Bridgelux COB array LEDs. <b>The conversion factor is luminous flux (lux) to photosynthetic photon flux density (PPFD) in uMol/m2/sec (micro moles per square meter per second) of PAR (photosynthetic active radiation 400-700nm)</b>. This is so that low cost lux meters can be used as plant lighting meters. The color ratios will not add up to 100. Blue is 400-499nm, green is 500-599nm, red is 600-699nm, far red is 700-799nm. The average wavelength of phosphor pump blue LEDs in my samples was about 453.5nm.</p>

    <table>
    <tr>
        <th>Bridgelux LED</th>
        <th>Conversion factor</th>
        <th>Color ratio</th>
        <th>Spectrum chart</th>
    </tr>
    <tr>
        <td>2000K CRI 65</td>
        <td>70 lux = 1 uMol/m2/sec</td>
        <td>blue: 05 </br> green:41 </br> red:49 | far red: 02</td>
        <td><img src='https://i.imgur.com/cmu9pWD.jpeg'/></td>
    </tr>
    <tr>
        <td>2700K CRI 80</td>
        <td>72 lux = 1 uMol/m2/sec</td>
        <td>blue: 11 </br> green: 42 </br> red: 36 | far red: 02</td>
        <td><img src='https://i.imgur.com/s1oh0rG.jpeg'/></td>
    </tr>
    <tr>
        <td>2700K CRI 90</td>
        <td>63 lux = 1 uMol/m2/sec</td>
        <td>blue: 06 </br> green: 19 </br> red: 22 | far red: 02</td>
        <td><img src='https://i.imgur.com/aaGi27J.jpeg'/></td>
    </tr>
    <tr>
        <td>3000K CRI 80</td>
        <td>73 lux = 1 uMol/m2/sec</td>
        <td>blue: 16 </br> green: 45 </br> red: 37 | far red: 02</td>
        <td><img src='https://i.imgur.com/RdVtIFz.jpeg'/></td>
    </tr>
    <tr>
        <td>3000K CRI 90</td>
        <td>65 lux = 1 uMol/m2/sec</td>
        <td>blue: 09 </br> green: 22 </br> red: 23 | far red: 02</td>
        <td><img src='https://i.imgur.com/U4l78mc.jpeg'/></td>
    </tr>
    <tr>
        <td>3000K CRI 97</td>
        <td>59 lux = 1 uMol/m2/sec</td>
        <td>blue: 14 </br> green: 36 </br> red: 41 | far red: 04</td>
        <td><img src='https://i.imgur.com/mdBTbJM.jpeg'/></td>
    </tr>
    <tr>
        <td>3500K CRI 80</td>
        <td>74 lux = 1 uMol/m2/sec</td>
        <td>blue: 20 </br> green: 47 </br> red: 31 | far red: 01</td>
        <td><img src='https://i.imgur.com/FYt9WCU.jpeg'/></td>
    </tr>
    <tr>
        <td>4000K CRI 80</td>
        <td>74 lux = 1 uMol/m2/sec</td>
        <td>blue: 11 </br> green: 24 </br> red: 14 | far red: 01</td>
        <td><img src='https://i.imgur.com/TWimMqB.jpeg'/></td>
    </tr>
    <tr>
        <td>4000K CRI 90</td>
        <td>68 lux = 1 uMol/m2/sec</td>
        <td>blue: 20 </br> green: 40 </br> red: 31 | far red: 02</td>
        <td><img src='https://i.imgur.com/OmQDZBU.jpeg'/></td>
    </tr>
    <tr>
        <td>5000K CRI 70</td>
        <td>75 lux = 1 uMol/m2/sec</td>
        <td>blue: 13 </br> green: 22 </br> red: 09 | far red: 01</td>
        <td><img src='https://i.imgur.com/47SoeNf.jpeg'/></td>
    </tr>
    <tr>
        <td>5000K CRI 80</td>
        <td>76 lux = 1 uMol/m2/sec</td>
        <td>blue: 26 </br> green: 50 </br> red: 21 | far red: 01</td>
        <td><img src='https://i.imgur.com/9VT7LYL.jpeg'/></td>
    </tr>
    </table>"
---