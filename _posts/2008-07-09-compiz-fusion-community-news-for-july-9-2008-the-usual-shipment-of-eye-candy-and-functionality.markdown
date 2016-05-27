---
author: smspillaz
comments: true
date: 2008-07-09 06:50:17+00:00
layout: post
link: https://smspillaz.wordpress.com/2008/07/09/compiz-fusion-community-news-for-july-9-2008-the-usual-shipment-of-eye-candy-and-functionality/
slug: compiz-fusion-community-news-for-july-9-2008-the-usual-shipment-of-eye-candy-and-functionality
title: 'Compiz Fusion Community News for July 9, 2008: The usual shipment of eye-candy
  and functionality'
wordpress_id: 286
---

This edition we cover some of the more new plugins coming our way from both official and unofficial development trees. Highlights this week are:



	
  * Cool stackswitch plugin by onestone

	
  * Eye-Candy wizard plugin

	
  * Grid plugin for organising windows

	
  * ADDialog plugin

	
  * Experimental tests with input redirection in freewins

	
  * Experimental tests with Real ARGB, pick a color and it goes transparent.

	
  * Cube-Model plugin




## News in Bugs


**In compiz-core**



	
  * Build system checks for KDE4 better when building decorators, should automatically disable kde4-decorator support if you don't have kde4.1

	
  * KDE4 window decorator text is now updated properly

	
  * Avoid high CPU usage due to unnessary repaints in kde4 window decorator

	
  * Support for syncronised timers added. This allows applications to specify a minimum and maximum timeout for their actions, so that they can all be called at the same time, reducing the number of wakeups compiz makes. This was a core change, so some plugins don't compile at the moment, known ones are _prompt, roach, vigo_

	
  * Default window is no longer focused in rotate due to window activation

	
  * Use the default icon in the switcher window if no icon is stored in the window in kde4-window-decorator

	
  * More useful debug message when a plugin ABI-mismatch occurs instead of just 'Couldn't load plugin'

	
  * Window focus is not 'changed' to the click window if the click window is focused.

	
  * Scale can now be terminated while you are entering it


**In plugins-main**



	
  * Excess repaints in burn/beamup fixed

	
  * In workarounds, you can convert 'urgent' windows to 'demands_attention' for window matching

	
  * Wall no longer initiates sometimes while scale is active

	
  * Thumbnail uses mousepoll now

	
  * Crash fixes in group

	
  * Memory leak fixes


**In plugins-extra**



	
  * Buildsystem fixes for BCOP

	
  * Memory leaks plugged


**In Compizconfig
**



	
  * CCSM does not crash when no icon is set for it and it's 'About' dialog is displayed.

	
  * Dialogs for CCSM windows aren't shown in the taskbar

	
  * Stackswitch got an icon

	
  * Fix broken dialogues when plugin conflict dialogues contain characters that need escaping ('&' for example)

	
  * KDE4 session support added




## News in Features


**Stackswitch**

It's already been plugged on his blog, but considering that it's new and onestone made it, I should probably talk about it. The new stackswitch plugin by **onestone** is another 3D switcher, inspired by an idea given to him by Mark Shuttleworth at the Ubuntu Developers Summit. It puts desktop windows on a sort of 'table' where all windows are layed out like cards and flipped up to be seen as you tab through them. You can see all the windows as you can with scale and they tab up to reveal themselves. Below is a screenshot:

[![](http://smspillaz.files.wordpress.com/2008/07/screenshot.png?w=300)](http://smspillaz.files.wordpress.com/2008/07/screenshot.png)

**Wizard Plugin:**

This plugin, based on the showmouse plugin according to it's author is a pure eye-candy plugin where you can create your own particle effects! There are so many options that it's options dialog actually fills past my screen, so I haven't had a chance to play with them yet (perhaps this is a request to the CCSM devs to allow that multi-list options dialog to be split into rows and colums). Basically, there are a whole bunch of things that can be done, but it has configurable gravity and particle movement. Some of the included effects are



	
  * Fireworks

	
  * 'Magic Rain'

	
  * Fire / Magic Pointer


Below is a video:

[youtube=http://youtube.com/watch?v=JsRo2890sv4]

[Get the plugin from here](http://forum.compiz-fusion.org/showthread.php?t=8846)

**Grid plugin: Organise your windows!**

This plugin works a bit like put, but you can instead put your windows in a grid like fashion, so you can send a window to the top of the grid, the bottom, the bottom left, etc. Here are some of my windows after 'griding' them.

[![](http://smspillaz.files.wordpress.com/2008/07/screenshot-1.png?w=300)](http://smspillaz.files.wordpress.com/2008/07/screenshot-1.png)

[Get it from here](http://forum.compiz-fusion.org/showthread.php?t=8821)

**ADDialog plugin**

This plugin gives us back the functionality advantage the KDE had, where thier window manager can dim the parent of dialog windows. Now, the ADDialog plugin by rcxdude does that for you. Get it with

_git clone git://git.compiz-fusion.org/users/rcxdude/dialog_

**Experimental tests with INPUT REDIRECTION in Freewins.**

I hate to yell and shout this from the top of a mountain, but that is what I feel like doing right now after seeing what b0le has done with his patched input redirection server. Note that this does **_not_** mean that input redirection is out (It's not coming for a long time, the tester in this case is using a modified X server with the old input redirection patches), but it is promising in terms of what we will be able to do in the future. The real input redirection branch isn't usable yet, so you can't get it, but here is a video showing what is possible with IR and also MPX:

[youtube=http://youtube.com/watch?v=k8bXfJhmOVg]

Of course, if you want to try out the test app, you can use:

_git clone git://git.compiz-fusion.org/users/warlock/freewins_

_git checkout ir_

It works fine on a nonpatched server, but because it has a 'bug' that we can use to pass our own events to it. More at this [forum thread](http://forum.compiz-fusion.org/showthread.php?t=8966)

**Tests with Real ARGB**

So some users have decided to start building on the fakeargb plugin by racarr a year back and add the ability to select any color and turn it transparent. So far, they have been successful and we will be seeing vista-like program bars fairly soon!

[youtube=http://www.youtube.com/watch?v=N-FRaWcGCPc]

[Read more here](http://forum.compiz-fusion.org/showthread.php?t=7753&page=3)

**Cube Model plugin**

metastability has decided to fork off the model loading functionality into a separate plugin, so that you are able to load models (.obj) into the cube more easily. You can also do animations by loading multiple models to flip through. Cube Model and Cube DBUS will remain two separate plugins, tentatively speaking, probably the particle emitter and window drawing functionality will be broken off into separate plugins as well, leaving cubedbus as a plugin for applications to draw inside the cube.


## Tip of the edition


Do you have a dock, but you only want it to be displayed with your other widgets? Just set your dock to be in the widget layer, and it will display with all other widget-like things. Just add something like:

_(name=cairo-dock | avant-window-navigator | kiba-dock)
_

To the 'Window Match' under the 'Widget Layer' plugin.

Well that's it for this edition of news, expect some more as these interesting stories develop!
