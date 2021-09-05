---
t: "Electrical Basics"
s: "electrical-basics"
c: "This article provides the basic electronics knowledge you'll need to build a Space Bucket. This is an extremely short introduction to electronics, so if you're interested in the topic you would do well to read something more comprehensive. The best book for beginning electronics is Practical Electronics for Inventors by Paul Scherz. It's cheap, covers a lot of material, and doesn't assume any prior knowledge.

    ### AC, DC and Power 

    **AC stands for alternating current and DC stands for direct current.** An AC voltage is just a sinusoidally-varying voltage. You can still use Ohm's law with AC voltages and currents. The power delivered to the outlet in your home is an AC voltage, **usually around 115VAC or 230VAC** depending on where you are in the world . Often you'll want to convert the AC voltage from an outlet to a DC voltage, and that's what a typical DC power supply does. **For example, the 12V wall wart power supply turns the AC voltage from the outlet to 12VDC**. 

    <pre>  
        <img src='https://i.imgur.com/k1Wi5jZ.jpg'/>
        <div>GFCI protects you from ground path faults</div>
    </pre> 

    _Electricity can be dangerous, especially to power coming from the wall_. Make sure you understand and take responsibility for your actions when working with mains electricity. Power tells us about how much energy we're using in a given amount of time. **It's important to figure out whether we have a good enough heatsink, a big enough power supply, or fat enough wires.** Power equals voltage times current, or P = I x V. Power is measured in Watts, abbreviated with the letter W. So say you have a high power LED with a 30V forward voltage and a 1A forward current. That means the LED dissipates 30W, and you'd need a power supply greater than 30W to drive it. Some of that power gets turned into light, and some of that power gets turned into heat. While LEDs convert a greater proportion of power to light than, say, incandescent bulbs, they still generate plenty of heat that must be heatsinked.

    ### Voltage, Current and Ohm's Law
 
    <pre>
        <img src='https://i.imgur.com/c0KIOxJ.jpg'/> 
        <div>Ohm's law is the law for electricity. It's what relates current to voltage and resistance!</div>
    </pre>

    **Electricity is all about the flow of electrons to transfer energy**. The best way to understand how this works is with the water analogy. Current is like flow; how much electricity is flowing through a circuit, or how much water is flowing through a pipe. Voltage is like pressure; the harder you push, the more flow you get. Resistance limits how much flow you get; a resistor resists the flow of electrons like a skinny pipe resists the flow of water. Ohm's law is the law for electricity. It's what relates current to voltage and resistance. Specifically, voltage equals current times resistance, or V = I x R. For a given resistance (measured in Ohms), the more current you'll get (measure in Amperes, or amps) for a given voltage (measured in volts). You might see these units expressed in units like millivolts or milliamps. These are just prefixes that act like multipliers on the units. For example, a milliamp is one one-thousandth of an amp. Volts are abbreviated with the letter V, amps with the letter A, and Ohms with the greek letter Omega.

    ### Electrical Circuits

    An electrical circuit is a closed conductive path for electrons to flow. **If you connect a wire to both sides of a battery, you've made a circuit.** Current flows from the positive side of the battery, through the wire, back into the battery's negative side. (This is called a short circuit. Don't do this). The most basic electrical circuit is a resistor attached to a voltage source, like a battery. The current through the resistor equals the voltage divided by the resistance, which we know because of Ohm's law. If there are multiple components in a circuit, we can figure out the current and voltage for each part using Kirchoff's laws."
o: "4"
d: "Learn the fundamental and basic electrical knowledge you need to build a Space Bucket or any DIY indoor garden."
---