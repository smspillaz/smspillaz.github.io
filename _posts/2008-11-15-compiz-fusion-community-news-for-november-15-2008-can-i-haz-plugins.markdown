---
author: smspillaz
comments: true
date: 2008-11-15 23:21:14+00:00
layout: post
slug: compiz-fusion-community-news-for-november-15-2008-can-i-haz-plugins
title: 'Compiz Fusion Community News for November 15, 2008: Can I haz plugins?'
wordpress_id: 349
---

Wow, lots of news this edition, not exactly big news like last week, but we certainly have been bombarded with a whole bunch of new development code. This week, the big items are:



	
  * Python plugin makes development of small plugins much easier

	
  * New Window Management plugins: Put in empty space, swap, toggle decoration

	
  * General new plugins: peek, lazypointer, compiz-menu, throw

	
  * Atlantis2 merged into master




### News in Bugfixing:





	
  * Decoration support in the MPX / IR Patches

	
  * Corrected bugs with background icon loading in CCSM and filtering for plugins too early

	
  * Fixed bugs with sessions management when using an executable name other than 'compiz' (like 'compiz.real')

	
  * Added the ability to maximize window horizontally and vertically from the gtk-window-decorator frame, the gnome window management control panel has been updated to reflect this

	
  * Plugged some memory leaks in compiz

	
  * Memory leaks plugged in animation, artifacts fixed when selecting an animation that doesn't animate anything

	
  * Fixed a bug with grid and maximizeplus that might cause windows to be placed incorrectly

	
  * Fixed compilation bugs with peek




### News in Features


**Python Plugin**

About a year back, older compiz developers like mikedee and RYX wrote a plugin for compiz which acted as a secondary loader interface to firstly load plugins written in python into core just like any other plugin, then provide a python interface and bindings to some of core's functions. This worked well back then, right up until compiz started using metadata for it's options and added a simple object system, at which point it became a nightmare to compile and even more of a nightmare to run. Of course, it hasn't been updated in almost a year until now because mikedee and RYX are absent from the community. OasisGames made a post on how[ 'Compiz and Python would be the perfect couple'](http://ogunderground.com/article.php?id=11)

Fast forward to now, and mzz has done the [incredible job of porting the many lines of code python plugin to git master](http://forum.compiz-fusion.org/showthread.php?t=10277). I'm not going to go into details on the specifics, and it doesn't really provide any new functionality for end users right away. I've had a quick brush over the code and there are few plugins that come with it, only two with a metadata file, one stripped down version of the zoom plugin and one stripped down version of shelf. Then what's all the importance of this?

Consider this: I looked through the basiczoom plugin and found that it was only 30 lines of actual code. 30 lines in C would probably get you halfway though plugin structures and a bit of a way through initiaition functions for a plugin like basiczoom. This, in turn, makes it easier for developers to implement ideas that are simple by nature, because they don't have to spend forever doing the boring stuff. There is a downside though, and that is difficulty in handling options and not all of the compiz API's are supported yet.

Hopefully, willing python developers will be willing to give this a shot.

_**More new window management plugins**_

edgurgel has written more plugins to make compiz a better window manager over the past week. Because they are quite simple, I don't need to go into much detail about them so I will list them and give an overall impression of them here:



	
  * Toggle Decoration, is kind of like the 'decoration' plugin we used to have in compiz a year ago where you can simply turn on/off decorations for windows. This is useful if you need to free up some screen space.

	
  * Swap, is a neat plugin, it basically allows you to swap the geometry of two windows, so selecting window A and B then toggling swap will cause window A to have the same position and size as window B and vice-versa. There is also a nice staticswitcher like animation to go with it

	
  * Putplus, like smartput, only it doesn't resize the window and can put the window in a the most fitting space. There is also an animation like the original put plugin


All of these plugins can be cloned like so:

    
    git clone git://git.compiz-fusion.org/users/edgurgel/putplus
    git clone git://git.compiz-fusion.org/users/edgurgel/toggle-decoration
    git clone git://git.compiz-fusion.org/users/edgurgel/swap


**General new plugins:**

Over the past few weeks, instead of working on animation, I have been procrastinating a bit and working on some other plugins which I have always wanted. Peek and lazypointer, I have already mentioned in another blog post, but here are the two new ones:

**Compiz-Menu**

Compiz-Menu is my attempt to solve the problem with having almost 100 plugins and not having enough keybindings that are easily accessible to use them. What it does, is have a menu pop up when you press a keybinding, where you can then toggle other plugins actions. A youtube video is below:

[youtube=http://au.youtube.com/watch?v=HzMICm038Sc]

Hopefully, I will implement some kind of animation for this in the future. Also, what would make it even better is support for actions and multi-lists in multi-lists, that way we can have an infinite amount of menu's, not just 3 per binding type.

    
    git clone git://git.compiz-fusion.org/users/smspillaz/compiz-menu


**Throw**

This is a plugin that is requested over and over, so I decided to implement it. Basically, the idea is that once you have released a moving window, it maintains a velocity in the direction you released it, hence you can throw windows. The physics engine is still a little buggy, but it works, which is the main thing. No time to make a screencast, but you can pull it from here:

    
    git clone git://git.compiz-fusion.org/users/smspillaz/throw


**Atlantis2 and Cubemodel merged into master**
For those who are using atlantis and cubemodel, there is no need to have two separate atlantis plugins, both atlantis and cubemodel have been merged into master, so you can pull them from there.

Thats it for this week. My plans so far (homework permitting) are to:



	
  * Add a window-like texture to peek

	
  * Implement some kind of software cursor in the MPX patches

	
  * Rework the elements plugin to use the extension plugin system

	
  * Start discussion some changes Id like to make to the animation plugin


- SmSpillaz
