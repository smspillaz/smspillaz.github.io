---
author: smspillaz
comments: true
date: 2007-10-05 15:44:55+00:00
layout: post
slug: compiz-fusion-community-news-edition-15-for-october-5th-2007-3d-fixed
title: 'Compiz Fusion Community News Edition 15 for October 5th, 2007: 3D fixed'
wordpress_id: 130
---

**Summary: **Welcome to another edition of Compiz Fusion Community News. Over the past two weeks we have seen numerous fixes, and we are nearing a stable release. There have also been a minority of improvements and some new and interesting applications are being developed. There are also talks of a new web-design which is almost ready to impliment.

**News in Bugs:**



	
  * The desktop window is no longer set as fullscreen as this can cause problems with panels

	
  * Backsides of windows are still shown in 3D when you rotate the cube past 2 viewports

	
  * Fixed bevelling in the 3D plugin

	
  * The 3D plugin now works properly (Windows rotate with the cube)

	
  * Desktop windows are not restacked some events (Which caused the desktop window to cover panels occasionally)

	
  * Newly created windows are always placed on top when windows are restacked


**News in Features:**

**Simple-Settings and Medium-Settings:**

More features have been added to marex's great new simple-ccsm. It will now rate the amount of animations out of 5 stars, choosing more intense animations will get a higher rating, wheras choosing more subtle animations will get a lower rating. Support for accessibility was also added and you can now toggle options such as zoom and color filtering.

_"Medium-Settings"_ is a project started by Christopher _"crdlb"_ Williams as a slightly more advanced version of simple-ccsm using the python-compizconfig bindings. It provides a few more configuration options to the user. Some screenshots are below:

[![depcf5.png](http://smspillaz.files.wordpress.com/2007/10/depcf5.png)](http://smspillaz.files.wordpress.com/2007/10/depcf5.png)

Some key features of _medium-settings_ are that it allows a bit more control over keybindings, and allows you to select some images and colors.

**Fusion-Trouble**

Gavin "gavintlgold" Longdon has also started work on a pygtk Compiz Fusion Troubleshooter known as 'fusion-trouble'. This application will attempt to start Compiz Fusion normally, and if it could not start normally, will attempt to diagnose your problem and provide a solution. Currently, it will detect if applications are installed and can be launched.

[![fusiontrouble.png](http://smspillaz.files.wordpress.com/2007/10/fusiontrouble.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/10/fusiontrouble.png) The Fusion-Trouble Interface

[![fusiontrouble1.png](http://smspillaz.files.wordpress.com/2007/10/fusiontrouble1.png)](http://smspillaz.files.wordpress.com/2007/10/fusiontrouble1.png)

My system appears to be running fine :) (Yay for correct configuration)

Gavin also plans to do graphics card detection soon.

**Fusion Installer and Compiz Fusion Preferences**

I am also working on two other components, Fusion Installer, and Compiz Fusion Preferences, a git installer and a _gnome-xgl-settings_ like simple configuration manager. I won't go into too much detail here because I have talked about them in previous entries

**3D Plugin re-write**

The 3D plugin has also been re-written and now behaves fundamentally differently. Instead of the windows hovering off the cube, the windows stay put while the cube zooms out. The amount of zoom is based on how many windows there are. Each window breaks off the cube at a certain point to give a much more interesting and realistic 3D layering look.

[![3d.png](http://smspillaz.files.wordpress.com/2007/10/3d.png)](http://smspillaz.files.wordpress.com/2007/10/3d.png)

Also, you might notice that windows no longer break in half when wrapped around edges. Multi-screen behavior is much better now too.

[![screenshot2.png](http://smspillaz.files.wordpress.com/2007/07/screenshot2.png)](http://smspillaz.files.wordpress.com/2007/07/screenshot2.png)

Compared to the old 3D plugin, this one is much better.

Another nice thing about the new method of 3D is that you can see windows that are behind the cube (instead of them dissappearing) and there is no more delay of 'waiting for windows to fall' back onto the desktop, because as the cube zooms in, the windows come with it, until the top one.

Some new options added are:



	
  *  Minimum cube size : How far back the cube can go (This gives more of an illusion of depth, but too small a number may result in a cube that is not 'clear')


**Misc Improvements:**

There have also been a number of miscellaneous improvements to Compiz Fusion and its plugins



	
  * Wall's desktop switching motion is now much smoother and makes used of acceleration and deceleration


**Release:**

Well, compiz-core 0.6 was released a few days ago and the dev team is prepping Compiz Fusion to follow suit. There are just a few more bugs that need to be fixed up before we can release.

**Tip of the Month:**

I haven't done a tip in a while! An interesting thing I found earlier was in the 'vpswitch' plugin. I have already written this in the [wiki article](http://wiki.compiz-fusion.org/Plugins/ViewportSwitcher), but the action to trigger when clicking on the desktop is not just limited to the cube or viewport-switching for that matter, you can use any plugin's action that can be toggled, usually called 'toggle' or 'initiate_blah' (where"blah" is key, button, edge etc). Some examples are:



	
  * Plugin : "rotate" 

	
  * Action Name : "initiate_button" 

	
  * Description : When the button is pressed on the desktop, the cube free rotation will initiate 

	
  * Plugin : "firepaint" 

	
  * Action Name : "initiate_button" 

	
  * Description : When the button is pressed on the desktop, firepaint will initiate

	
  * Plugin : "switcher" 

	
  * Action Name : "next_button" 

	
  * Description :When the button is pressed on the desktop, you will switch to the next window with the switcher

	
  * Plugin : "scale" 

	
  * Action Name : "initiate_button" 

	
  * Description :When the button is pressed on the desktop, you will initiate scale mode


**Other News:**

Novell openSUSE 10.3 is out and Compiz Fusion is being touted as one of the [big features](http://news.opensuse.org/?p=400#more-400).

**Conclusion:**

Well that's it for Compiz Community News this week. I hope you enjoy using Compiz Fusion for days to come. Ciao all!

-Sam
