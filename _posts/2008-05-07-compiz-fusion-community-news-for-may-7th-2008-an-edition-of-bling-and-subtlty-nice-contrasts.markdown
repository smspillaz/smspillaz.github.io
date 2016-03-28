---
author: smspillaz
comments: true
date: 2008-05-07 15:46:32+00:00
layout: post
slug: compiz-fusion-community-news-for-may-7th-2008-an-edition-of-bling-and-subtlty-nice-contrasts
title: 'Compiz Fusion Community News for May 7th, 2008: An edition of bling and subtlty
  (nice contrasts!)'
wordpress_id: 269
---

More CF news is down the tubes this week, major highlights being



	
  * **A FULL sphere deformation mode for cubeaddon (_rock on onestone! \o/_)**

	
  * **A subtler static applications switcher**

	
  * **A subtler set a viewport switching plugins**

	
  * **New features for dodge, freewins, etc**

	
  * **Progress on a new decorator
**




## Bug News





	
  * 'Deform only on manual rotate' option fixed in cubeaddon

	
  * Option added to override windows that set the USPosition or PPosition hint in the place plugin

	
  * Fix 'Grey and White windows of death' on some cards by working around a bug in drivers

	
  * Windows which don't have the minimize action set can now only be minimized externally by the same program if it is minimized (i.e gobby)

	
  * Only show the window menu if there isn't a screengrab set to avoid screengrab deadlocks (freezes)

	
  * Optimised cube addons a little

	
  * The main plugin view in CCSM now updates when any plugin changes

	
  * Action conflicts are checked for when enabling a plugin, for example, having ring enabled with default settings then enabling shift will trigger a conflict

	
  * Wall now initiates when the switcher plugin is active (so if you switch to another window on another desktop, wall should now flip to that desktop while the switcher is active)

	
  * Options now change while the dodge plugin is active

	
  * Unmatched windows no longer moved in the 'dodge' animation

	
  * Inside cube plugins now deform with the cube when the cube is deformed (no more cylinder / sphere cube and square atlantis ;-) )

	
  * Wiimote plugin actually split into files

	
  * Simple-CCSM works without any 'effects' plugins installed




## News in Features


**The bling:**

**onestone** has once again waved his openGL wand for us once again and has merged the cubecaps plugin into the cubeaddon plugin, so now we are able to deform the cube caps as well. Like most of his work, it's only ever explainable with screenshots - here goes!

[![](http://smspillaz.files.wordpress.com/2008/05/sphere.png?w=300)](http://smspillaz.files.wordpress.com/2008/05/sphere.png)

[![](http://smspillaz.files.wordpress.com/2008/05/sphere1.png?w=300)](http://smspillaz.files.wordpress.com/2008/05/sphere1.png)

I apologise for some of the VSync issues I am experiencing. As you can see from the screenshots, the cube caps are rounded off as with the rest of the cube - so if you have a 4:3 screen, you will see a 'sphere' - as for the rest of us .. we'll see a 3D oval :P But still awesome nonetheless

**Simpler Stuff**

**maniac** has whipped up another simple-but-useful plugin this week too, called staticswitcher. Staticswitcher is a lot like the old switcher, but instead of rotating between thumbnails, it displays all thumbnails and the box selects each one. Below is a screenshot

[![](http://smspillaz.files.wordpress.com/2008/05/switcher.png?w=300)](http://smspillaz.files.wordpress.com/2008/05/switcher.png)


User **yogensha** has created two simple viewport switching plugins which use subtle transitions instead of spinning cubes and sliding panes etc. The two plugins are called vpsswitch and vpsfade, the first just switching viewports whereas the second just fades windows between them. I'm really hoping that these two plugins can be the framework for more plugins like this to come, check out Mac OS X VirtueDesktops to see what I mean. The two plugins can be found [here](http://forum.compiz-fusion.org/showthread.php?t=8125)




**New window decorator, codename JASPER**




**b0le** has temporarily suspended work on the cubedbus plugin (which I intend to write the code to the GUI to my manager for) to work on a new window decorator, codenamed **jasper**. He is taking into consideration some of the considerations found in [this thread](http://forum.compiz-fusion.org/showthread.php?t=6324) to replace the aging emerald window decorator. It's currently in a pre-alpha stage at the moment, I've found that it wont work for me on my nvidia card, so here is a hotlinked screenshot from b0le:




![Jasper](http://bp2.blogger.com/_LKYV2rahKAI/SCAoLmcyJtI/AAAAAAAAAAU/rr8JV2FgRkA/s1600-h/screenshot7.png)Jasper




If it displays properly, you'll notice that there are tabs the come out of the window. The decoration is _shaped_ so that only the tabs are clickable and not what would be the square border around them. It has full support for svg themes too, although the implementation is quite basic. More at [b0le's bl0g](http://jbosveld.blogspot.com) (sorry for the pun :/)




Installation instructions:


git-clone git://anongit.compiz-fusion.org/users/b0le/jasper
cd jasper
./build
./jasper --replace
(only need the second one if it doesn't work first time)
./jasper --replace
**Other improvements**



	
  * Freewins has an 'invert key' hold down the key to invert the current rotation mode and toggle on/off snapping.

	
  * Dodge can now be activated with a screencorner




## Tip of the Week


This sound rather lame, but if you are a newcomer and are eager to get in more on the bleeding edge of compiz, I would suggest heading down to the [feature requests](http://forum.compiz-fusion.org/forumdisplay.php?f=91) and [plugin development](http://forum.compiz-fusion.org/forumdisplay.php?f=89). That is where most of the ideas and development start before things end up on [](http://forum.compiz-fusion.org/forumdisplay.php?f=89)[gitweb](http://gitweb.compiz-fusion.org/)


## Conclusion


Well that's it for this week's edition of Compiz Fusion Community News. Keep an eye on those forums as there is a lot of new stuff coming up which will be good news material for next week ;-)

EDIT: Fixed link for b0le's blog.

- SmSpillaz

