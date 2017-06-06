---
layout: project
title: Digital Art
thumb: /img/digital-art.svg
blurb: New visions, new landscapes
---

<script src="{{ "/js/three.min.js" | prepend: site.baseurl }} "></script>

Digital Art
===========

I like to make stuff that looks and feels compelling. Something that makes one
sit back, laugh, and say "wow".

To this end, exploring motion in artwork is somewhat of a passion of mine. I
like to think about where things could go and how different landscapes might
look from different distances.

The below projects actually run live in the browser. They're written in
C++ and compiled to JavaScript using a library called [Emscripten](http://github.com/kripken/emscripten).
The rendering is done by an excellent library called [Magnum](http://github.com/mosra/magnum),
which supports Emscripten natively.

[Floor Music Visualiser](/artwork/fmv)
----------------------

{% include digital-art/fmv.html %}

The idea behind this music visualiser was to think of the "dance floor"
in Dance Dance Revolution. I was thinking of something that was vibrant and
sleek, with clear outlines for each of the tiles. The idea expanded as I
added motion to the floor as something that reacted dynamically to what was
playing, almost like a cloth in the wind.

The outlines on the bars are achieved by providing barymetric co-ordinates
to the vertex shader. Pixels that are close to edges of the barymetric
outline are colored with a solid color, other pixels are semitransparent
based on the height of the bar.

[Towers](/artwork/towers)
------

{% include digital-art/towers.html %}

This piece is based on the idea of travelling through an abstract, infinite
desert. I used the [pinnacles](https://en.wikipedia.org/wiki/The_Pinnacles_(Western_Australia))
as inspiration. The fading in and out as the towers approach the camera
is based on a polynomial curve with an X intercept of the camera distance. An
offset is applied based on the height of each block in the tower to have
the blocks fade towards the top.


[JS City](/artwork/jscity)
-------

{% include digital-art/js-city.html %}

This piece is inspired by [pixel city](https://www.youtube.com/watch?v=-d2-PtK4F6Y).
I am hoping to make something similar, but it is still a work in progress.


[Trinity](/artwork/trinity)
-------

{% include digital-art/trinity.html %}

[Sound_ (Soundscore)](/artwork/sound_)
-------

Somewhat of a work in progress...

[Parametric Estimator](/artwork/parametric-fit)
-------

This is a line estimator using parametric regression and the least-squares
method. It hill-climbs until a fit is reached.

[Quaternion Visualizer](/artwork/quaternions)
-------

This is a quaternion visualiser.