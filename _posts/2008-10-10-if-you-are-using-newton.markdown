---
author: smspillaz
comments: true
date: 2008-10-10 07:37:46+00:00
layout: post
link: https://smspillaz.wordpress.com/2008/10/10/if-you-are-using-newton/
slug: if-you-are-using-newton
title: If you are using Newton .....
wordpress_id: 319
---

These cryptic messages kind of remind myself of the [iPhone Dev Team](http://blog.iphone-dev.org/) (Maybe giving them a plugin will help them find an exploit [so we can pwn the 2G iPod Touch faster](http://www.theiphonewiki.com/wiki/index.php?title=N72ap) ....)

Anyways, if you found that you can't compile the newton plugin for whatever reason, like I couldn't then here are some steps to help you compile it again:



	
  * In the 'Makefile' search for 'compiz.h' and replace it with 'compiz-core.h'

	
  * Put all the items in the 'chipmunk' directory into the 'newton' directory (the same directory that the plugin is in)

	
  * Delete the 'chipmunk' directory

	
  * Open 'newton.c' and change #include <"chipmunk/chipmunk.h"> to #include <"chipmunk.h">

	
  * Kompile!


In other somewhat related MPX News, I've ported the water plugin, newton plugin and ghost plugin. That means so far, the following plugins have been ported:

freewins, firepaint, water, move, resize, annotate, mousepoll, showmouse, mag, thumbnail. dodge, ghost, wizard, newton. I still have scale, ring, group, zoom/ezoom and wobbly on my list.

Let me know in the comments if any other plugins that could benefit from multiple cursors comes to mind.

On the list of plugins that need full input redirection support:

scale, ring, switcher, shift, freewins, zoom/ezoom.

Again, let me know in the comments.

I will post a video of my work again once I have ported the rest of the MPX plugins.

-SmSpillaz
