---
author: smspillaz
comments: true
date: 2008-02-11 13:16:31+00:00
layout: post
slug: compiz-fusion-community-news-for-february-9-2008-kde-4-is-in
title: 'Compiz-Fusion Community News for February 9, 2008: KDE 4 is in.'
wordpress_id: 208
---

	 	 	 	Hello there!

The Community News returns again, after an absence that I will try to avoid in future :P In the time between the previous community news and the last, there have been a number of new and interesting cool features added to Compiz-Fusion. The changes have taken place due to our community and our very own **onestone** who has added a slew of KDE 4 composite features to Compiz. Some highlights this week are:

	
  * KDE 4 Window 	decorator plasma integration

	
  * **Show Mouse,** 	and **Area-Based maginification** 	through the **mag** 	plugin

	
  * Wiimote 	integration

	
  * True blending 	of wallpapers and cubecaps

A number of bugs have also been fixed (Not the emerald crash at random, sorry!) which should improve your Compiz Fusion experience marginally

## News in Bugs

	
  * Temporary fix for certain windows 	loosing their shape attributes while using freewins (link)
	
  * Atlantis 2 works a bit better 	with normal monitors
	
  * Fix unnecessary compile warning 	with the screensaver plugin
	
  * Better option grouping in the 	Winrules plugin
	
  * Maximumize plugin was placed in 	the Window Management category
	
  * Individual plugin Makefiles were 	updated to notify the user as to when the plugin should be installed 	globally because it depends on other plugins
	
  * The sesssion plugin was updated to use core session functions, 	it should allow session management in the near future
	
  * Fix visual glitch when using cube 	reflections with 3D
	
  * The 'Brightness and Saturation' 	plugin has been placed in the accessibility category
	
  * Some freezes fixed in animation, 	particularly with superkaramba
	
  * Display glitches such as 	animation artifacts and dark textures in animation fixed.
	
  * Fix trailfocus glitches when 	windows span multiple viewports
	
  * Improved metadata in the 	showmouse plugin
	
  * Fragment shader fixes for the 	'fisheye' mode of mag. The effect should work on the NVIDIA and 	Intel platforms. It may work for ATI users who use linux or have 	somewhat decent AIGLX support with fragment_program
	
  * 'Fisheye' plugin merged into mag 	as another mode
	
  * Ability to disable KDE4 support 	in compiz-fusion-debain platforms
	
  * Some working option support in 	the Wiimote plugin

## News in Features

<blockquote>**KDE 4 integration!**Well onestone has been coding hard since KDE 4 hit the road to incorporate some of the more usefule KDE 4 window manager features into Compiz Fusion. The first is a simple plugin called 'loginout', which essentially dims the screen when it sees particular windows with a separate seetting for logging in and logging out. If you start Compiz Fusion before these windows appear, you can essentially dim out your desktop until these windows go away, when they will come back. Here is where it works
> 
> 	
>   * KDE 3: Login only
> 	
>   * KDE 4: Login and Logout
> 	
>   * GNOME: Logout only
> </blockquote>

**KDE 4 Window Decorator**The KDE Window Decorator has also been improved to add support for KDE 4 Window Decorations, as well as plasma integration into the drawing of the switcher window. The following is a screenshot provided by onestone.

**Mouse-Polling**Because of the current architecture of Compiz, the following plugins require mouse-polling (checking the location of the cursor every number of milliseconds). Mouse-polling is generally inefficient and does tend to eat up CPU cycles (and also has a lot of overhead), so onestone has create a generic mouse-polling plugin in order to just do one poll instead of multiple plugins polling the mouse at the same time. This plugin **must** be installed like this:

_BUILD_GLOBAL=1 sudo make install_

so that other plugin can reference it's pkgconfig and header files properly.

**Fixed Area Magnification**One of the more touted and interesting features of KDE 4 was not only the ability to zoom the entire screen, but just to create a box of zoom and to zoom a particular area. Onestone has implemented this in Compiz-Fusion, but also with some other eyecandy, as illustrated in the screenshots below:

[![fisheye31.png](http://smspillaz.files.wordpress.com/2008/02/fisheye31.png)](http://smspillaz.files.wordpress.com/2008/02/fisheye31.png)

 

This screenshot shows the simple mode, where magnification is fixed along the cursor to a particular area.

[![fisheye2.png](http://smspillaz.files.wordpress.com/2008/02/fisheye2.png)](http://smspillaz.files.wordpress.com/2008/02/fisheye2.png)[![fisheye.png](http://smspillaz.files.wordpress.com/2008/02/fisheye.png)](http://smspillaz.files.wordpress.com/2008/02/fisheye.png)

 

These screenshots show the fisheye mode, where the nearest things to your cursor are zoomed more. This looks very cool in action

[![small1.png](http://smspillaz.files.wordpress.com/2008/02/small1.png)](http://smspillaz.files.wordpress.com/2008/02/small1.png)

[![small31.png](http://smspillaz.files.wordpress.com/2008/02/small31.png)](http://smspillaz.files.wordpress.com/2008/02/small31.png)

 

These screenshots show the recently added image mode, where an image overlay can be used on the magnification area to show a real magnifying glass (or whatever) where you are magnifiying.

All modes simple zoom in and out with _Shift-Super-Scrolling_. Below is a YouTube video showing this in action

[youtube=http://www.youtube.com/watch?v=11uPowcEIZ4&rel=1]

This video shows the Fisheye and Image modes

[youtube=http://www.youtube.com/v/1jrC08rs678]

**Showmouse plugin:**Primarily as a more show-offy version of the KDE version of the showmouse plugin, this plugin uses onestone's particle system to find the mouse, literally by surrounding it with what appears to be stars on fire. This plugin can be configured to a great extent, below is a YouTube video showing it in action (Thanks Darknesssssskrad!)

[![showmouse.png](http://smspillaz.files.wordpress.com/2008/02/showmouse.thumbnail.png)](http://smspillaz.files.wordpress.com/2008/02/showmouse.png)

[youtube=http://www.youtube.com/watch?v=rHRPTrnKiAI&rel=1]

These plugins have not yet been backported to 0.6.0 by onestone yet, but I have provided a preliminary step in getting this done

**Rubik's Cube plugin**This plugin, by metastability, turns your cube into a literal rubiks cube. It is designed to be on with screensaver mode on and rotates bits of your cube during manual rotation or while the screensaver cube rotation mode is on. Here is a video of itI found on YouTube

[youtube=http://youtube.com/watch?v=6OXOVxDxXcY&feature=related]

**Maze Game plugin**This plugin, by _rhodar _is another inside-the-cube plugin which creates a small maze-game where rotating the cube around will move around the small ball. It is a first, in that it is the first plugin to use the getRotation() function to some-more useful use and is a quite neat demo of what Compiz is capable of. YouTube video below!

[youtube=http://www.youtube.com/watch?v=KZBbWfUYwPw] 

**CubeFX (AKA CubeDBUS) improvements**

b0le's CubeDBUS plugin has yet-again been improved, with a new particle system (Particles inside the cube) and animated models. Some screenshots below (YouTube Video coming soon!)

[![particlefountain.png](http://smspillaz.files.wordpress.com/2008/02/particlefountain.png)](http://smspillaz.files.wordpress.com/2008/02/particlefountain.png)

 

[youtube=http://www.youtube.com/v/04swFFhuWpU]

Particle System

<strike>Improved model loading</strike> (Coming Soon)

_NB:_ The currently, cubefx model loading is currently broken due to the big code change brought on by model animation. Revert to the previous commit if you want to use the old system.

**Wallpaper and CubeCaps, true transparency**One of the more annoying issues with the wallpaper plugin is that it could not change opacity when the cube was supposed to be transparent, leaving us only with transparent caps. OasisGames has changed this situation with a patch that not only makes wallpaper listen to the transparency settings, but also introduces true image transparency, where transparent bits of images are fully transparent, creating a goo effect with your images. Screenshots below.

[![transparent.png](http://smspillaz.files.wordpress.com/2008/02/transparent.thumbnail.png)](http://smspillaz.files.wordpress.com/2008/02/transparent.png)[![transparent1.png](http://smspillaz.files.wordpress.com/2008/02/transparent1.thumbnail.png)](http://smspillaz.files.wordpress.com/2008/02/transparent1.png)****

**Wiimote and Wiitrack**Over the winter (U.S) and summer (Asia, Australia ;-)) OasisGames and I have been working on  a headtracking solution using the Nintendo Wii Remote. It mostly takes its inspiration from the video below, created by JCL, but does the same with compiz and the Z-stacking of your windows. This means that, if you have the right gear, you are literally able to look around your desktop in full 3D.

 [youtube=http://www.youtube.com/v/BnIZJO1OOrY]

The above video shows mouse tracking at work

Of course, the fine details are still a work in progress, but the basics are up and running for you to test. It only works on master at the moment however. Repositories are:

_git://git.compiz-fusion.org/users/smspillaz/wiimote_

_git://git.compiz-fusion.org/users/klange/wiitrack_

If you don't have a Wii Remote, you can still test out what head-tracking would be like by enabling the WiiTrack plugin and toggling 'Track mouse cursor'.

 The Wii remote plugin is also capable of reporting it's values to other plugins. Recently, a feature has been added to the freewins plugin to allow setting of it's values. Just set up the settings like this:

**Wiimote Acc Plugin:** freewins

**Wiimote Acc Action:** increment_rotate

 I'm planning for the plugin to implement a lot more, such as gesture support, but due to time constraints and hardware constraints, I wont be able to do a lot of work on it for a while.

**Other new enhancements**

	
  * Colors can 	now be used in multi-list settings, plugins are being adapted

	
  * Info tooltip 	added to the filter page of CCSM

	
  * Mag now has 	an icon in CCSM

	
  * Improvements 	to Advanced Setting Search

	
    * Plugin list 		now has icons

	
    * Search by 		'All' in plugins, groups and subgroups

	
    * Grab a key 		with the keyboard icon

	
  * 'Detect 	Diagonal Movements' setting added to mousegestures

## Tip of the week

Did you know that the loginout plugin is not only for log in and log out effects? If you want ot dim the entire screen on the appearance of a particular window, just append '| iclass=appname' where appname is the executable name of the application, to the end of the 'logout' window match. This allows the effect of a dimmed out screen on appearance of gksu, gnome-keyring or any other dialog.

 

## Cairo-Dock

 

[![cairo-dock.png](http://smspillaz.files.wordpress.com/2008/02/cairo-dock.png)](http://smspillaz.files.wordpress.com/2008/02/cairo-dock.png)

Thanks to this[ forum post](http://forum.compiz-fusion.org/showpost.php?p=30330&postcount=18), I have finally found a dock that suits my needs. It is called cairo-dock and does real parabolic zooming, much alike the OS X dock. I suggest you check it out.

## Screenlet of the Week

 

I've started this section, and I don't know what will come of it, but I want to get screenlets more involved with this blog considering they have their own place on the forum. I really like the [terminal screenlet by spdf](http://forum.compiz-fusion.org/showthread.php?t=6872)

[![terminal.png](http://smspillaz.files.wordpress.com/2008/02/terminal.thumbnail.png)](http://smspillaz.files.wordpress.com/2008/02/terminal.png)

Hope I can write the blog a little sooner next time!

<strike>(Videos coming soon, they are uploading to YouTube now =))</strike>(Except the maze game plugin, which is having problems)

- SmSpillaz :)
