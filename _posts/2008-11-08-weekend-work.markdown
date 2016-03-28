---
author: smspillaz
comments: true
date: 2008-11-08 14:19:30+00:00
layout: post
slug: weekend-work
title: Weekend Work
wordpress_id: 346
---

So, I decided to put the last few days to good use, here is a summary of what I have done so far.


### **Peek Plugin**


After seeing a feature [request](http://forum.compiz-fusion.org/showthread.php?t=10177) on the CF forums to have [7's recently showcased 'Peek' feature](http://lifehacker.com/5077280/a-closer-look-at-windows-7s-aero-peek-feature), I decided to have a go at coding something like this. I knew it would be fairly easy from the start - really just a mix of opacify and thumbnail. It took me about 3 days to get it completed, school permitting but I am fairly happy with it now. The only problem I have had with it so far is a slight memory management issue, so if you hover windows on the taskbar that were transparent, they won't go back to their former transparency once you have finished 'peeking'. I'm suprised to see that DarknessssskraD has made a video of it already!

[youtube=http://au.youtube.com/watch?v=PHKWcjpzCHI]

Only TODO with this so far is to make an MPX patch for it, maybe when I get time.


### **Lazypointer**


This one is an interesting one. Basically, I would actually hate using this plugin because it really throws me off my workflow, but considering the work [edgurgel](http://edgurgel.wordpress.com/) has been doing bringing some more advanced window management features from WM's like wmii, ion etc to compiz, I thought I might steal a feature from enlightenment e17. Basically, enlightenment has this weird behavior where your pointer is warped to the window you activate when you click it on the taskbar or alt-tab etc. This is essentially what this plugin does, except I decided to add a few more features to it, like being able to centre your pointer on screen, on a window and move it with the keyboard. If you like to do more keyboard-based window management, having to move your right hand as little as possible, this might be a niche for you :) (This also needs an MPX patch)


### More Compiz MPX / IR


I decided that some of the MPX / IR stuff wasn't yet complete, so I worked on it a little more today and added the following features and bugfixes in the new patch in the compiz directory:



	
  * Fixed not being able to grab decorations

	
  * Decoration windows are now input-redirected as well

	
  * Fixed input being cutoff prematurely at the right end of the window (still occurs on the bottom)

	
  * Fixed freewins not accepting input during 3D rotation


There are still a few more things to fix. The ones at the top of my list are:

	
  * Fixing input meshes 'staying behind' on a viewport change

	
  * Fixing input being cuttoff at the bottom of a window

	
  * Fix having to have more than one keyboard per mouse for action-initiation

	
  * Software cursor


I have also finished my tutorial on [how to patch your X Server and Compiz](http://forum.compiz-fusion.org/showthread.php?p=68053#post68053) for this stuff. It's not 100% correct, nothing ever is, but I will be improving it as people report problems =)


### General TODO:





	
  * Fix IR / MPX Bugs (as above)

	
  * The ported over [python plugin](http://forum.compiz-fusion.org/showthread.php?t=10277) looks interesting. I never got a chance to play around with it before compiz fusion became mainstream (and I switched from beryl). According to the author, the plugins run side-by-side with compiz plugins, not a kind of weird heirarchical emulation of a plugin. Perhaps once I figure it out, I will try my hand at some python plugins.

	
  * I still want to implement that action-menu system, I think all I would need is either gtk, or some basic knowledge of cairo to draw a menu on screen. I'll probably go with cairo in the long-run as it would allow me to do things like circular menus.


