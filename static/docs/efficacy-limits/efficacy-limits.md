---
t: "Efficacy Limits"
s: "efficacy-limits"
a: "SuperAngryGuy"
c: "<p>To maximize an LED grow light's idealized efficacy, <strong>we want the LED current as low as possible</strong> (throw more LEDs at the problem as they become cheaper and underdrive them), <strong>keep them as cool as possible</strong> (a little airflow goes a long ways, maybe 2-10 times so), <strong>get the most efficient driver</strong> (you want to look up the efficiency by current level curves in the data sheet), <b>and don't use lenses or a glass cover</b>. But, by not using a cover means we lose ingress protection leaving exposed voltages so there are potential safety concerns, and exposing the LEDs directly to the environment can potentially lower their longevity and the grow light's longer term reliability.</p>

    <div class='floatedimg'>
        <img style='width: 100%' src='https://i.imgur.com/laP8kSb.png'/>
        <div> Historical, current, and projected LED efficacy</div>
    </div>

    <p class='quote'>The upper limit of LED fixture efficacy is determined by the LED package efficacy multiplied by four factors inherent to all fixtures: <b>current droop, thermal droop, driver (power supply) inefficiencies, and optical losses</b>. With current LED technology, the calculations indicate efficacy limits of 3.4 µmol J−1 for white + red fixtures, and 4.1 µmol J−1 for blue + red fixtures. Adding optical protection from water and high humidity reduces these values by ~10%. <i>Paul Kusuma, P. Morgan Pattison & Bruce Bugbee, <a href='https://www.nature.com/articles/s41438-020-0283-7'>From physics to fixtures to food: current and potential LED efficacy</a></i></p>

    <p>Keep in mind on LED grow light specs, some low end sellers may give specs (e.g PPF umol/sec numbers) for data sheet temperature and current ideal efficacy (i.e 25 C, lower nominal current), or may not take in to account LED driver losses when posting a umol/joule number, and not how the light actually performs in real world grow conditions. If low end style lights are giving specs better than high end lights, <b>then don't don't do business with that seller</b>.</p>

    <h3>Current droop</h3>
    <p><strong>The greater the current though an LED, the less efficient it becomes</strong>. This is one reasons why medium power LEDs in large series/parallel arrays (like the so-called quantum boards) have become common at least in the hobby community, and how COBs work by having a large series/parallel array of LEDs in a smaller common package. LED makers typical rate their LED at a <b>'nominal' or 'sorting' current that may be significantly lower than what the LED is actually being driven at</b> in real life. The <a href='https://www.samsung.com/led/lighting/mid-power-leds/3030-leds/lm301h/'>Samsung LM301H LED</a> has their specs listed for 65 mA, but is rated for 200 mA continuous, for example.</p>

    <h3>Thermal droop</h3>
    <p><strong>The higher the temperature of the LED, the less efficient it becomes.</strong> LED data sheets typically give bin numbers for 25°C (77°F) or 85°C (185°F), and most LEDs are specified to operate at 85-125°C. The difference between 25°C and 85°C is about <b>a 5% efficiency loss for most LEDs</b>. Some 125°C continuous rated red LEDs can take a >20% efficiency hit at 125°C. Higher temperatures will also degrade LEDs faster (particularly red LEDs), and cheap light bulbs are going to run their cheap LEDs very hot. Don't buy the cheapest light bulbs if you want them to last: you get what you pay for.</p>

    <h3>Driver (power supply) inefficiencies</h3>
    <p>Some low voltage DC drivers can hit about <strong>98% efficiency depending on drive current</strong>. There are AC LED drivers on the market that can peak at 97% efficiency. Some Mean Well LED drivers can hit the mid 90% efficient. Most of the AC LED drivers you find in products are going to be in the low 90% or upper 80% percent efficient, which can depend on specific LED current levels. <b>Drivers with a lower power factor also contribute to greater inefficiencies.</b> Cheap capacitors in cheap lights (particularly cheap light bulbs) is a major failure mode particularly with poor thermal management.</p>

    <h3>Optical losses</h3>
    <p>Using secondary optics (i.e a lens) over an LED can focus the light so an LED grow light maker can post some impressive PPFD (intensity) numbers right below the light, but the PPF number (total light output) is going to drop as well. <strong>There will always be optical losses with a lens of perhaps 7-9%.</strong> This same loss applies to grow lights that have a glass/plastic/silicon cover over the LEDs for splash proofing the light. If you grow hydroponically, and a prone to splashing hydro nute solution around, it may be worth it to take this inefficiency hit to keep the salt solution away from the electronics. Electrical safety is another very important reason glass covers are used for the ingress protection they provide.</p>"

---