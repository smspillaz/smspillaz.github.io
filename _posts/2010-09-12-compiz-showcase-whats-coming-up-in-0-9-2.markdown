---
author: smspillaz
comments: true
date: 2010-09-12 05:10:09+00:00
layout: post
slug: compiz-showcase-whats-coming-up-in-0-9-2
title: 'COMPIZ Showcase: What''s coming up in 0.9.2'
wordpress_id: 675
---

Development of course is progressing nicely, now as much to the point where we can do blog posts about progress, like I did back in 2007 and 2008! We've had some great community contributions and new developers jump on board and the project is rapidly regaining its health from the slow down in 2009.


## Bugs:


Lots of quite important bugs have been fixed since the 0.9.0 release, but namely the three biggest ones which would be the largest deterrent to using 0.9.x have been fixed:



	
  * First of all, it looks like the dust from our [GCC Problems](http://smspillaz.wordpress.com/2010/06/25/compiz-0-9-and-gcc-4-5/) has finally [settled](http://gcc.gnu.org/bugzilla/show_bug.cgi?id=44059), which should mean no more random crashes, particularly on window open/close or plugin load/unload

	
  * Second of all, the reparenting bug with SDL applications has been fixed. This bug prevented users from using certain SDL applications, as they would fail to reparent (instead a small window frame would be displayed in their place).

	
  * Finally, the smaller issue of a non-clickable region around windows with a custom shape such as Docky and Avant-Window-Navigator has been fixed too.


There have also been numerous other small bugfixes and usability enhancements:

	
  * Atlantis no longer crashes compiz when loaded on startup

	
  * A bug which prevented the GConf settings backend from loading at all was fixed

	
  * Not being able to switch between windows on two different X11 screens using the mouse was fixed (input focus is now forced)

	
  * Input focus is now moved to highlighted windows in the switchers, such that you can close windows and the like with Alt-F4

	
  * The decorators no longer read compiz settings from GConf or DBUS. Such a method was clunky and depended on having certain configuration plugins loaded. Instead, compiz now writes shadow settings to X11 window properties and the decorators can just read this normally. You can now change gtk-window-decorator shadows on any settings backend, and you can change kde4-window-decorator settings without the use of the DBUS plugin.

	
  * Fix decorations appearing around KDE panels

	
  * Inside Cube mode not triggering fixed

	
  * A bug which affected snapping by giving all windows struts has been fixed

	
  * Old gdk functions which were deprecated by the [rendering-cleanup](http://blogs.gnome.org/otte/2010/07/27/rendering-cleanup/) branch have been removed, and replaced with cairo equavilents

	
  * Fix dock windows having their input stacked below normal windows but being displayed above them

	
  * Fixed GIMP "layers" window disappearing

	
  * Fixed window animations not firing at times due to incorrect plugin checking and also fixed tooltip animations not firing at all.

	
  * Fixed strange keyboard navigation in scale

	
  * Fixed certain plugins mouse actions not working when triggering them on the frames of windows and not the windows themselves

	
  * Fixed unnecessary dependency for resize on compiztoolbox.

	
  * Fixed session saving incorrectness when there was an "&" in window titles (session plugin now uses libxml2 to write data)

	
  * Fixed wrong texture filtering in ezoom

	
  * Re-add set_zoom_area dbus action in ezoom

	
  * Avoided constant polling for damage in ezoom

	
  * Fix options not displaying in loginout

	
  * Fixed fading bugs in Dim Dialog. The dialog plugin now uses the fade plugin

	
  * Fix crash in cubemodel if there are no models loaded

	
  * Added support for KDE 4.5 blur hinting

	
  * Fixed other viewports not painting correctly when cube is transparent with 3D plugin loaded "at rest"

	
  * Fixed broken size_matches in winrules

	
  * Saner defaults for winrules

	
  * Fix overzealous redrawing in shelf

	
  * Fixed cairo color/drawing bugs in wall

	
  * Fixed windows not activating on viewport change in wall

	
  * Fixed viewport size bugs in vpswitch

	
  * Added the ability to resize from center




## Newly ported plugins:


Even more plugins were ported to work with the 0.9.x APIs, so now we have most of the unofficial plugins (which are possible to use with 0.9.x) in git master.


## Features:




### New Animations:


Thanks to a awesome **Jay Catherwood** _(SenatorStretch)_ there are now a ton of new animations for you to enjoy and they all look particularly slick.

[![Ghost](http://smspillaz.files.wordpress.com/2010/09/ghost.png?w=150)](http://smspillaz.files.wordpress.com/2010/09/ghost.png)[![Black Hole](http://smspillaz.files.wordpress.com/2010/09/blackhole.png?w=150)](http://smspillaz.files.wordpress.com/2010/09/blackhole.png)[![](http://smspillaz.files.wordpress.com/2010/09/dissolve.png?w=150)](http://smspillaz.files.wordpress.com/2010/09/dissolve.png)[![Flicker](http://smspillaz.files.wordpress.com/2010/09/flicker.png?w=150)](http://smspillaz.files.wordpress.com/2010/09/flicker.png)[![Popcorn](http://smspillaz.files.wordpress.com/2010/09/popcorn.png?w=150)](http://smspillaz.files.wordpress.com/2010/09/popcorn.png)

[![Raindrop](http://smspillaz.files.wordpress.com/2010/09/raindrop.png?w=150)](http://smspillaz.files.wordpress.com/2010/09/raindrop.png)[![Pulse](http://smspillaz.files.wordpress.com/2010/09/pulse.png?w=150)](http://smspillaz.files.wordpress.com/2010/09/pulse.png)[![Fan](http://smspillaz.files.wordpress.com/2010/09/fan.png?w=150)](http://smspillaz.files.wordpress.com/2010/09/fan.png)

From left to right, they are **Ghost, Black Hole, Dissolve, Flicker, Popcorn, Raindrop, Pulse and Fan.** Many of them are based on a new framework, which will allow a whole bunch of similar animations (which draw the window a number of times in different positions on every pass).

I have also included a video so you can see them in action:

[youtube=http://www.youtube.com/watch?v=ahEhL40Oras]

You can find all of this in the [Animations Experimental](http://git.compiz.org/~jc/animationjc/) and [Simple Animations](http://git.compiz.org/~smspillaz/simple-animations/) plugins.


### New Scale Layout


A scale plugin layout was added to the scaleaddon plugin, based on KWin's "natural" layout mode. Instead of the normal layout mode, which assigns windows to an even grid of slots on the screen, the "natural" layout mode iteratively pushes windows apart, and then scales the entire scene to fit on screen. The result is that windows are positioned proportionately to their original position on screen.

[caption id="attachment_684" align="aligncenter" width="300" caption="Natural Scale Mode"][![New Scale Mode](http://smspillaz.files.wordpress.com/2010/09/new-scale-mode.png?w=300)](http://smspillaz.files.wordpress.com/2010/09/new-scale-mode.png)[/caption]


### GLSL, Physics and FBO Frameworks


We also had some particularly awesome work by Alex Lang on some plugins which allow the loading of GLSL shaders for windows and GLSL shaders to be applied to an entire screen through an FBO. These plugins are mostly frameworks for the time being, and since I have not had time to write any useful shaders for them, I can't give a demo of them. But if you know GLSL, I suggest you give them a try.

Alex has also created another physics engine plugin, this time based on the [Bullet](http://en.wikipedia.org/wiki/Bullet_%28software%29). I have included a video he made of this plugin below:

[youtube=http://www.youtube.com/watch?v=w8f9gFflif8]


### A much requested feature: theatre mode for EZoom


Scott Moreau (soreau) has also added a much requested feature into the EZoom plugin - which is a "theatre" mode. If enabled, it will automatically draw black bars around all non-selected items in a zoom area selection, which makes it perfect for watching zoomed-in videos on the web and the like.


### Minimized Window Previews


As stated in a blog post before, in Compiz 0.9.2 it will be possible to have minimized window previews. Just check the appropriate box in the workarounds plugin and it will be handled in all plugins automatically.


## Other New Plugins:


There are a few new plugins which allow for some useless eyecandy and other neat effects:



	
  * **Reflective Surfaces: **Allows docks to specify a "reflective surface" region, for compiz to paint a reflection of the desktop scene on.

	
  * **Vignetting: **Renders a "vignette" of window brightness around the edges of windows, rather than dimming the window continuously

	
  * **Drunken: **Demonstration plugin to create a "drunken" effect

	
  * **Trip: **Demonstration plugin to create a simulated hallucinogenic effect (these would be great for april fools jokes!)

	
  * **Sound: **Sound plugin take two, which uses GStreamer to play sounds on window events




## Coming Soon


First of all, I have decided to try my hand at rewriting the group plugin again, since there were too many bugs the first time it was rewritten. This time I am using a more accurate porting approach, so hopefully there will be very few bugs, and then the plugin can be restructured appropriately

Second of all, I have also been working with [__Martin__ Gräßlin](http://blog.martin-graesslin.com/blog/) from KWin to port the [Aurorae](http://lists.freedesktop.org/archives/compiz/2010-May/003405.html) window decorator for compiz. Currently, it works in 2D mode, and I have been working to make it work in composited mode using the approach taken by the other window decorators.

After that, I think it is an appropriate time to do a 0.9.2.





