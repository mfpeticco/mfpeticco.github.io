---
layout: page
title: 3-Axis Camera Gimbal
description: A DIY brushless phone stabilizer, for a fraction of the price
img: assets/img/projects/gimbal.jpg
importance: 6
timeframe: 2016 – 2019
category: builds
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/gimbal/standardgimbalbackground.jpg" title="3-axis camera stabilizing gimbal" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## The Goal

At some point in my life, I got interested in camera quadcopters. Although I couldn't own one, I noticed while watching Youtube videos that during flight although the wind would make the drones shake, the video would stay smooth and level. As it turns out, drones have small gimbals attached at the bottom that stabilize the camera. It seemed almost like magic, and I was intrigued. I decided to see if I could build my own standalone gimbal that I could use with my phone.

I had three main criteria I wanted to meet:

1. Stabilize and iPhone 7 or other similar sized cell phones.
2. Run completely off of battery power.
3. Be under 60$.

Unfortunately, I have very few photos from the build process of the gimbal and taking it apart to show the parts would put it seriously off balance.

## Photos

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/gimbal/standardgimbal.jpg" title="The gimbal" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">The gimbal itself in all its glory.</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/gimbal/insidegimbalcase.jpg" title="Inside the case" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">In the case  there's a Lithium Polymer battery, the charger, the gimbal itself with a detachable handle, and a 4th axis stabilizing arm.</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/gimbal/4thaxisarm.jpg" title="4th axis arm" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">A closer look at 4th axis arm. It's using the arms and springs from an old lamp to reduce vertical vibrations when walking or running.</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/gimbal/4thaxis.jpg" title="Gimbal with 4th axis" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">The gimbal with the 4th axis added on to it.</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/gimbal/gimbalsoftware.png" title="Gimbal configuration software" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">This is the software used to program the gimbal and do things like adjust PID settings, calibrate the accelerometer and gyroscope, and more. The control board and firmware are designed and programmed by OlliW and is called the "Storm32" controller.</div>

## Video Demo

<div class="row justify-content-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/UgQkuPHzbEI" title="Gimbal video demo" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
    </div>
</div>
