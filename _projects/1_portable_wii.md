---
layout: page
title: Portable Wii
description: A Nintendo Wii re-engineered into a single-cable tablet
img: assets/img/projects/portablewii.jpg
importance: 7
timeframe: 2018
category: builds
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/wii/portablewiibanner.jpg" title="Portable Wii" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## The Goal

The Nintendo Wii is the #3 best selling game console of all time, selling over 100 million units. It had some of the most memorable games of any video game console, it was backwards compatabile with Nintendo's previous game console, the GameCube (meaning it could play GameCube games without any extra hardware), and it was both reliable and relatively compact. Unfortunately, it had to live tethered to your living room TV. Noticing this, I decided to make a portable version.

I had six main criteria I wanted to meet:

1. Have a built in display, measuring at least 12 inches diagonally, along with stereo speakers.
2. Add some audio/video output jacks so that it can still be used with TV's.
3. Remain fully compatible with motion controls.
4. Run off of just a single cable, reducing clutter.
5. Remain fully backwards compatible with the GameCube by retaining legacy ports.
6. Be no thicker than 1.5 inches, thinner than the original wii while cramming tons of other hardware.

With the end goal in mind, it was time to get to work.

## Build Log

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/wii/fullset.jpg" title="Starting hardware" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">This is what I started out with. I was going to have to figure how to fit all of this (along with speakers, a display, display drivers, and other miscellaneous hardware) into a form factor somewhat resembling a tablet.</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/wii/oldboard.jpg" title="Wii motherboard" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">The Wii motherboard in all its glory. At this point, I had more questions than I had answers: How am I going to cool this thing? And how am I going to manage to get this thing as small as possible?</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/wii/newboard.jpg" title="Trimmed board" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">I had to omit the disk drive due to it producing too much heat and drawing too much power. Unfortunately, the Wii always checks for the disk drive when it starts up, so I had to leave the disk drive board on. Here, you can also see many ports removed and sliced in half since they were too tall.</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/wii/heatsink.jpg" title="Flattened heat sink" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">The heat sink on the Wii is rather tall, and frankly overkill for the processers it uses. I guess this is why it was such a reliable console. Anyways, using a vice and some pliers, I flattened it down.</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/wii/firsttest.jpg" title="First power-on test" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">After many modifications, I had to test it out to make sure I hadn't damaged anything. Turns out, it works! This was also a good time to test out the TV I was going to use. (fun fact, this TV was originally used in a prison, that's why it's transparent)</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/wii/tv.jpg" title="TV teardown" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">After disassembling the TV and gutting it for parts, I realized that I should probably find a way to keep these controls. That's one more thing I'm going to have to fit in.</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/wii/sensorbar.jpg" title="Sensor bar" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">In order to retain the Wii remote's pointing functionality, I would have to fit the sensor bar in too. The bar actually doesn't "sense" anything, it's just some infrared lights that the Wii remote reads using an infrared camera at the tip.</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/wii/electronicstest.jpg" title="Bench electronics test" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">Testing all of the electronics in their most barebones configurations. Here we have the video, audio, Wii power, display power, the display driver, display controls, and the sensor bar all hooked up.</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/wii/wiilayoutcropped.jpg" title="Component layout" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">After getting some other miscellaneous electronics functions done (wiring everything together, adding fans, a video output and switcher, and a power/pairing button) it was time to decide on a layout. This is what I came up with.</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/wii/cadmodel.png" title="CAD model of casing" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">Finally, it was time to design a casing. This CAD model shows the main construction philosophy: 6 pieces on the edge holding everything together like a sandwich. The display and some acylic act as the bread, and the electronics would be like the meat.</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/wii/casingpart.jpg" title="Machined casing piece" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">The most complicated of the 6 pieces needed to build the casing. You can see holes for the fans, video output, video switch, power, and USB ports. In the background, you see all the electronics eagerly waiting for the casing to be done.</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/wii/wiismallimg.jpg" title="Finished portable Wii" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">The finished product after lots of trial and error, failure after failure, and a total of about 60$ in materials. Having something go from a far-fetched idea to a tangible product is a great feeling and is why engineering is awesome. (Cheesy statement over)</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/wii/thickness.jpg" title="Final thickness" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">Remember how my goal was to get the Wii no more than 1.5 inches thick? It actually ended up being about 1.2 inches thick. The original wii is 1.73 inches thick, so I managed to cut the thickness down by a little over 30%.</div>

## Video Demo

<div class="row justify-content-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/cBIm7kfTAz0" title="Portable Wii video demo" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
    </div>
</div>
