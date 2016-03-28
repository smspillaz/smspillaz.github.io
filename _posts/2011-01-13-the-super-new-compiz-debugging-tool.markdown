---
author: smspillaz
comments: true
date: 2011-01-13 07:16:53+00:00
layout: post
slug: the-super-new-compiz-debugging-tool
title: The super new compiz debugging tool
wordpress_id: 748
---

With the number of bugs being filed on compiz recently and the fact that doing the triaging for all of them is a *little* bit overwhelming, David Barth, the DX Team Lead and Didier Roche who is our packaging master spoke the other day about ways to handle the flood of bugs in compiz 0.9 for unity, I decided to write a little tool for compiz which spews as much internal state information as possible - everything about OpenGL, the paint state, the exact state of every X window, the exact X11 state, etc etc to try and find bugs or things that don't look right without having to have access to your particular machine. That tool will land tomorrow morning (US Time, since I'm in Dallas with the rest of the DX and Platform team).

The tool activates in two ways: Firstly, it handles any signals that would cause compiz to die and spews all information in that case. It then uses some neat tricks the kernel team taught me to re-flag the signal again without our handler installed so that apport can catch it and grab the output we just spewed out. Secondly, if you hit some weird issue (like incorrect menu stacking, or something similar) you can just hit Control-Super-Shift-? and compiz will also begin spewing as much information as possible and feed that to apport so you can just file a bug directly.

At the moment the tool is somewhat limited in that it only spews the current internal state of compiz at the time it is triggered, and only works for core and the composite and opengl plugins. However in future, it will have a mode to begin collecting and spewing information (expensive!) and end a log report submitting that as a "timeline" of how the bug happened. It will also be expanded to more of the plugins which we are using in the unity experience.

So thanks for reporting bugs and with this tool, hopefully keep-em-coming:

**Stuff fixed which you might care about**



	
  * Links are now working in GTK+ (eg GEdits weblink in the about box)

	
  * Flash and gnome-panel applets are no longer crashing all the time (will be uploaded next week)

	
  * Fixed a number of focus issues

	
  * Fixed startup order issues

	
  * Forward ported a number of bugfixes from 0.8

	
  * Fix windows going everywhere on restart

	
  * Fix windows slowly drifting down all the time every compiz restart

	
  * Fix using gnome-do on an empty desktop leaving no focus

	
  * Fixed decoration artifacts when shading windows

	
  * More clever constraining windows to workspaces on resize

	
  * Fixed screens/allscreens mess in gconf

	
  * Fix gconf schemas not being generated for nested group options

	
  * We don't unload plugins passed to the command line


Plus tons more that I can't even count. So progress is coming along nicely. Hopefully at the sprint I will have a fix for the most annoying one at present, which is bug #695638 (https://bugs.launchpad.net/ubuntu/+source/unity/+bug/695638) on launchpad. In tomorrows upload there will be some improved borders and shadows too as well as a complete overhaul of the settings defaults by the design team, so keep and eye out for them too.
