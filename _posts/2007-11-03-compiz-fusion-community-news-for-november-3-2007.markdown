---
author: smspillaz
comments: true
date: 2007-11-03 09:26:38+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/11/03/compiz-fusion-community-news-for-november-3-2007/
slug: compiz-fusion-community-news-for-november-3-2007
title: Compiz Fusion Community News for November 3, 2007
wordpress_id: 169
---




## Summary


Welcome to another edition of Compiz Fusion Community News. During the period between the last entry and this one, we have seen a lot of things, such as a couple of new community plugins and some fixes for some long-standing bugs. We also saw the first ''stable'' Compiz Fusion release (0.6) based on the 0.6 branch and Compiz 0.6.2.


## News in Bugs:





	
  * Some panels and docks are no longer hidden in 'Showdesktop' mode

	
  * Dragging and dropping icons in scale finally works now

	
  * If you toggle the switcher, then cancel it by pressing  (Esc), it won't switch you to the next window

	
  * If a window was denied focus for whatever reason, it will now set the 'Demands Attention' hint (Flashing in the taskbar)

	
  * CCSM will now warn you if you try to use a feature (I.e, largedesktop) when no plugins actually provide the feature

	
  * When using 'fit window to zoom level', the window will not go smaller than allowed by the program

	
  * Some GNOME action integration fixes

	
  * AIGLX users can now use water, blur and reflex properly due to a nice little workaround in the workarounds plugin.

	
  * Freewins is no longer slow




## News in Features:


Some great new plugins are out too. Lets have a look:


### Freewins Plugin:


Otherwise known as AWESOME, this plugin allows you to freely rotate any window in any direction that you want. Of course, there is no input redirection yet, but there have been things added so that you can try it out and then reset your windows so that you can use them again.

There are of course bugs, specifcally it doesn't play nice with cube, wall or expo, but otherwise works :)

[![freewins.png](http://smspillaz.files.wordpress.com/2007/10/freewins.png)](http://smspillaz.files.wordpress.com/2007/10/freewins.png)

Git master users can get it from

    
    git clone git://git.compiz-fusion.org/users/warlock/freewins


If you are using ubuntu or a distribution that does not support XCB, use the 0.6 version from[ ](http://smspillaz.googlepages.com/freewins-0.3-0.6.zip)[here ](http://smspillaz.googlepages.com/freewins-0.3-0.6)

(openSUSE is the only major distribution that supports XCB)


## Anaglyph Plugin


Talked about [on digg](http://dev.compiz-fusion.org/~cyberorg/2007/11/01/introducing-the-real-3d-compiz/) as the **real 3D desktop**, this plugin will turn your desktop into not just a 2D image on a screen, but a real life 3D image (With the help of some 3D glasses). As you can see in the screenshot below the image is split up near the edges into a color, red transparent bit and cyan transparent bit, much like in the movies. You'll need a standard pair of 3D glasses (Go to a 3D Movie ;-)) to make it work properly (Red-Blue/Green)

[![screenshot.png](http://smspillaz.files.wordpress.com/2007/11/screenshot.png)](http://smspillaz.files.wordpress.com/2007/11/screenshot.png)

You can anaglyph just one window as shown above

[![screenshot1.png](http://smspillaz.files.wordpress.com/2007/11/screenshot1.png)](http://smspillaz.files.wordpress.com/2007/11/screenshot1.png)

Or you can anaglyph the entire desktop as shown above.

The great thing about this plugin is that the anaglyph's change as window stacking changes. This means that windows will be viewable in 3D and that you can see clearly the window stacking. (Of course, you can't see behind a window as it's not physically possible :D)

Finally, you can configure which windows can be anaglyphed, how far out the initial image is on your screen and how far out the windows should  stick.

Anaglyph was made by the user** wodor**

The unfortunate thing is that I don't have a pair of 3D glasses so I can't try it out :(

You can download anaglyph from

    
    git clone git://git.compiz-fusion.org/users/wodor/anaglyph


0.6 users can get a version soon. Watch this space.


### Photo wheel


User b0le has hacked together from snow and gears a plugin which will display a wheel of photos in the center of your cube.

[![photowheel.png](http://smspillaz.files.wordpress.com/2007/11/photowheel.png)](http://smspillaz.files.wordpress.com/2007/11/photowheel.png)

You can customize the images that display on the turn-wheel  and a new option as recently added to have the turn-wheel spin around a separate axis away from the center of the cube

EDIT : Link: [http://forum.compiz-fusion.org/showthread.php?t=5246 ](http://forum.compiz-fusion.org/showthread.php?t=5246)


### Stars Plugin


Finally, I've hacked together a port of the stars plugin from Beryl (Which I missed greatly), essentially based on snow, except for an algorithm change and function renames :)

[![star.png](http://smspillaz.files.wordpress.com/2007/11/star.png)](http://smspillaz.files.wordpress.com/2007/11/star.png)[![star2.png](http://smspillaz.files.wordpress.com/2007/11/star2.png)](http://smspillaz.files.wordpress.com/2007/11/star2.png)

Git master users can get it from

    
    git clone git://git.compiz-fusion.org/users/smspillaz/stars


And where would we be [without a 0.6 port:](http://smspillaz.googlepages.com/stars-0.6.zip)


## Application Updates:


I've also added a keybindings selection to CFCapplet and it can now dynamically resize. Screenshot below

[![screenshot-desktop-effects-settings-compiz-fusion.png](http://smspillaz.files.wordpress.com/2007/11/screenshot-desktop-effects-settings-compiz-fusion.png)](http://smspillaz.files.wordpress.com/2007/11/screenshot-desktop-effects-settings-compiz-fusion.png)

This actions tab was first seen in crdlb's medium-settings


# Tip of the Week


Did you know that you can blur out unfocused windows? Just navigate to **CCSM->Plugins->Blur->Focus Blur **and check it and make sure that there is something in 'Focus Blur Windows'


## Conclusion


Well thats it for news over the past two weeks. I hope everyone is enjoying Compiz Fusion and I congratulate the developers of all these great new plugins! Also, congrats to the dev team for our 0.6 release last fortnight. It rocks!

- Sam
