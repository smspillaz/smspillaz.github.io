---
author: smspillaz
comments: true
date: 2008-06-10 15:41:09+00:00
layout: post
slug: compiz-fusion-community-news-for-june-10-2008-physics-docking-everything
title: 'Compiz Fusion Community News for June 10, 2008: Physics, Docking, Everything!'
wordpress_id: 278
---

It's another edition of the Compiz Fusion Community News, and I'm here to tell you all about the great new development happening in the Compiz Fusion project since the last time I blogged about it. Highlights for this week are:



	
  * Elements plugin: A merge of snow, firefly, stars, autumn and bubbles

	
  * More snow-like plugins: Roaches (ala XRoaches) and 'Boing'

	
  * A new compiz 'dock' feature, based on shelf

	
  * Real-time compiz physics plugin

	
  * Sphere deformation for atlantis

	
  * Zoombox for eZoom!

	
  * Developer 'show-repaint' plugin to see where your plugin is being nasty when damaging

	
  * Tons of memory leak and bugfixes!




## News in Bugs


**In Compiz Core
**



	
  * Fix build issues with KDE4

	
  * Memory leak fixes in core, dbus, scale, switcher and clone


**In Plugins-Main**



	
  * The scaled cursor in ezoom is no longer restrained if the cursor is bigger that the zoom area. This fixes the bug where the zoomed area would 'rush off' to the nearest corner if you zoomed in too far

	
  * Avoid screen garbling on unload of ezoom

	
  * Memory leaks fixes in animation expo resizinfo


**In Plugins Extra
**



	
  * Memory leaks plugged in cubeaddon, scalefilter and group


**In Everything else**



	
  * Memory leaks plugged in libcompizconfig (maniac went on a free () 'ing spree we think :P)

	
  * Future-proof compizconfig-python for the new version of pyrex

	
  * Depend on cairo-xlib in freewins (Because of the new shaper)

	
  * Actually move the window when we rotate on an axis other than the center. This fixes the 'weird movement axis' issue in freewins

	
  * ... And apply further axis transformations to the real window and not the IPW, so that you can still rotate on whatever axis you want

	
  * Actually move the window when we scale to a corner in freewins

	
  * Attempt to get the right axis when we scale (It's still broken though) in freewins

	
  * Fix damage issues with the axis helper in freewins

	
  * Speed up freewins by not adjusting the IPW on every repaint

	
  * Fix crash in jasper when opening windows that are too small




## News in Features


**Elements Plugin: A merge of snow, fireflies, stars, autumn and bubbles**

Well, PatrickFisher, who wrote the autumn plugin a few months ago is back with his merger of the mess that is snow, fireflies, stars, autumn and bubbles into one big plugin. There isn't too much new about this plugin, but it does sport the following features:



	
  * New mode 'bubbles' which draws bubbles on your screen

	
  * Ability to 'check' elements and toggle them all at once, instead of toggling them individually

	
  * Slighly more accessible developers interface.


It's hard to explain with screenshots, but Pat has gone to the trouble of making a video of his work. Enjoy!

[youtube=http://www.youtube.com/watch?v=nbXA1B3qzt4]

Elements can be found at pat's website: http://www.elementsplugin.com/

**UPDATE: **Pat and I are in planning for the next version of elements, which should be more flexible. It won't be out for a while. Stay tuned!

**Roaches and Boing!!!!**

[![They\'re everywhere!](http://smspillaz.files.wordpress.com/2008/06/roaches.png?w=300)](http://smspillaz.files.wordpress.com/2008/06/roaches.png)Well, the user **mdot** has released two cool new plugins for us, based on snow.

The first one is called **Roaches** and is based on **XRoaches**. It essentially draws roaches on your screen:


<blockquote>_ok here another based off of autumn._

_this is nowhere done but you can play with it.
the roach pictures are from xroaches, i need to draw new roaches with moving legs and antenna and it will look better i think._

_i would like to make it like xroaches where the roaches hide under your windows and when you move the window and expose the roaches they scurry around looking for shelter._

_oh and maybe the ability to squash them with mouse._</blockquote>


[youtube=http://www.youtube.com/watch?v=3k1Pz4PCm5Q&NR=1]

Check it out [here](http://forum.compiz-fusion.org/showthread.php?t=8668)

The other new plugin based on snow is the **Boing** plugin. This plugin was inspired by the 3D bouncy balls that the retro Amiga featured back in the day. If you feel the nostalgia creeping up, here is a video to show you it.

[youtube=http://www.youtube.com/watch?v=swQZQg0bsGk]

Here is the real Amiga demo:

[youtube=http://www.youtube.com/watch?v=H5FXomNajJ4&feature=related]

[Forum Thread](http://forum.compiz-fusion.org/showthread.php?t=8662)

**New Plugin: Shelf-Dock**

This new plugin by mdot, called **shelf-dock** (or just **dock**) is a sample plugin to show what docking in compiz would look like. Below is a video:

[youtube=http://www.youtube.com/watch?v=mM8W_0e2IFY]

[Forum Thread](http://forum.compiz-fusion.org/showthread.php?t=8663)

**New Plugin: Physics, codename 'Newton'
**

This awesome new plugin by **Xytovl** is a physics engine for compiz! It's not yet complete, but it creates miniature windows of your windows and applies real time physics to them. It supports:



	
  * Movement: Displacement, Velocity, Accelleration

	
  * 'Cursor Pushing'

	
  * Stopping when hovering, and clicking on the miniwindow brings up the real window

	
  * Customizable miniwindow size

	
  * Friction

	
  * Gravity

	
  * Bouncing

	
  * Attraction Repulsion

	
  * Physics for real windows

	
  * Collision Detection (To an extent)


Here is the developers roadmap:


<blockquote>I am looking for a physic engine to implement, I don't like akamaru for the lack of documentation, but chipmunk seems to be good. I'll have a look to see if I can make rectangles stay horizontal, so don't worry if you don't see updates for some time ![](http://forum.compiz-fusion.org/images/smilies/pidgin-smilies/wink.png)
The other problem is that I want to allow some windows to stack (normal windows, as you expect them to be) as well as having collision handling, which is very simple with my implementation, but not very accurate or fast ...

The other way would be to have a real physic engine, with rotable windows (probably by using freewins) but a lot less usability and the usual lack of input redirection (for real windows).</blockquote>


And, of course, it _requires_ a video.

[youtube=http://www.youtube.com/watch?v=Au0kLuRj4tI]

[Forum Thread](http://forum.compiz-fusion.org/showthread.php?t=8555)

**Sphere Deformation in Atlantis**

[![Deformed Cube Atlantis; no longer a cube within a sphere!](http://smspillaz.files.wordpress.com/2008/06/atlantis.png?w=300)](http://smspillaz.files.wordpress.com/2008/06/atlantis.png)**metastability** has done some work to ensure that cube atlantis is now deformed in sphere mode!

**Zoombox for eZoom!**

It's been a long requested feature to have a 'Zoombox' like the regular compiz zoom plugin had in ezoom and it's finally here! Video Below:

[youtube=http://www.youtube.com/watch?v=iQWQWD29aRo]

**Show Repaint Plugin**

[![Psycadelic coloring of paint regions 8D](http://smspillaz.files.wordpress.com/2008/06/showrepaint.png?w=300)](http://smspillaz.files.wordpress.com/2008/06/showrepaint.png)This plugin by **onestone** is essentially a compiz version of the KWin **show paint** plugin. It shows where compiz is redrawing the screen by highlighting it in a particular color. It is not intended for users, but developers can use it to see when they are refreshing the screen unnessarily. Basically, if the screen keeps on flashing while nothing is happening, it means that you are probably damaging the screen during a paint function, which is a bad thing.


## News in Screenlets


whise has started a new branch for artwork and a new branch for what he hopes to become the universal applet standard of all screenlets. [News Here](http://forum.compiz-fusion.org/showthread.php?t=8624)


## Tip of the Week


If you still want 'dumb' input handling in freewins, this is still availiable, just go into 'Misc'->'Input Prevention'->'Prevent Input'. This disables all the shaping features however.

Well, thats it. Any inquires - leave them in the comments! Hope you enjoy your Compiz Fusion!

[(Digg This)](http://digg.com/linux_unix/Compiz_gets_docking_and_more_Compiz_news)

- SmSpillaz
