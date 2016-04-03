---
layout: project
title: Digital Art
thumb: /img/digital-art.svg
blurb: New visions, new landscapes
---

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

Floor Music Visualiser
----------------------

<div class="emscripten-wrapper">
    <canvas class="emscripten-canvas" id="module"></canvas>
    <div id="status" class="emscripten-status-description">Initialization...</div>
    <script src="{{ "/js/Loader.js" | prepend: site.baseurl }}"></script>
    <script async="async" src="{{ "/js/fmv-emscripten-wrapper.js" | prepend: site.baseurl }} "></script>
</div>

The idea behind this music visualiser was to think of the "dance floor"
in Dance Dance Revolution. I was thinking of something that was vibrant and
sleek, with clear outlines for each of the tiles. The idea expanded as I
added motion to the floor as something that reacted dynamically to what was
playing, almost like a cloth in the wind.

The outlines on the bars are achieved by providing barymetric co-ordinates
to the vertex shader. Pixels that are close to edges of the barymetric
outline are colored with a solid color, other pixels are semitransparent
based on the height of the bar.