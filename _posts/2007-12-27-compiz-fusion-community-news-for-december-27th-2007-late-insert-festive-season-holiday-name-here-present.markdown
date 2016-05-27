---
author: smspillaz
comments: true
date: 2007-12-27 04:11:53+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/12/27/compiz-fusion-community-news-for-december-27th-2007-late-insert-festive-season-holiday-name-here-present/
slug: compiz-fusion-community-news-for-december-27th-2007-late-insert-festive-season-holiday-name-here-present
title: 'Compiz Fusion Community News for December 27th, 2007: Late (Insert Festive
  Season Holiday Name Here) Present'
wordpress_id: 197
---

The Community News Returns!

I know I've been a little late recently in updating you on these news posts, but it is because I have been quite busy over the last few days on a project that will be discussed later on. This post should give you that well-deserved digest of things that are happening around the community. I'd like to apologize in advance that this entry will not contain any screenshots as I am currently unable to access my linux box.


## Summary


The past few weeks has been an interesting clean-up, and bug fixing week. We also had a couple of new features, both official and unofficial that I would like to demonstrate to you later on in the post. Some highlights include



	
  * Ability to load textured models inside the cube via Cube DBUS

	
  * Miniwin Returns after years of inactivity! (As _Shelf_)




## News in Bugs





	
  * All plugins that paint objects inside the cube will now rotate the *scene* correctly when 'inside' the cube. List includes

	
    * Cube DBUS

	
    * Cube Snow Globe

	
    * Cube Gears

	
    * Cube Atlantis (/2)

	
    * Cube Photo Wheel




	
  * Fixed a freeze when using the switcher with the animation plugin

	
  * Fixed a random crash when cleaning up in animation plugin

	
  * Particle effects from the animation plugin are no longer drawn on all cube sides

	
  * Translation updates in Emerald, Plugins-*, Compiz-Core and CCSM

	
  * Draw both cube caps correctly in 'Inside Cube' Mode

	
  * Draw shift switcher correctly when screen height is more than screen width (I.E, Multi Head with two outputs on top of each other

	
  * Compiz-Fusion-Capplet icon changed so that it doesn't interfere with Fusion-Icon's Icon

	
  * Fix screensaver path detection in Live Desktop Settings, You can now choose a custom path if your screensavers are not located in _/usr/lib/xscreensaver_

	
  * Fixed dialog appearing unnecessarily in Compiz-Decorator-Settings

	
  * Fix Buildsystems in

	
    * Compiz-Decorator-Settings

	
    * Live Desktop Settings

	
    * Compiz-Fusion-Preferences-Capplet




	
  * Damage Screen Properly in Anaglyph

	
  * New 0.6 Ports

	
    * Atlantis 2 now has a 0.6 branch

	
    * Cube Snow Globe now has a 0.6 branch

	
    * Anaglyph now has a 0.6 branch

	
    * Flash, Notificator and BS all have 0.6 branches now







## News in Features


Some more new features this time around.


## Shelf Plugin


The Shelf plugin by Kristian Lyngstol allows you to visually scale down your windows for a monitor style size, whilst being able to interact with other windows. You can place a shelfed window anywhere on screen and is a good alternative to minimization for those who don't have a panel of any sort.

Recently, support was added to the plugin to do _input shaping_. Note that this is not _input redirection_ which has been a touted feature of the X server where we can interact with any transformed window normally.

Input shaping allows us to only capture clicks inside the shape of the shelfed window, meaning that seemingly small windows are not going to capture all the clicks on your screen.

Support was also recently added for animation and floating resize, holding down <Alt><Super> and scrolling scales the window in real time.


### Models inside the cube


A while back, b0le added support to render any .obj file inside the cube via the Cube DBUS plugin. He has now added texturing support to these objects via PNG files. A screenshot of this will be obtained in the near feature.  This allows the flexibility to making any 'obj' model loadable from within the cube.


### Simple CCSM Redisgn


Marex has redesigned Simple CCSM to make it more like other GNOME dialogs. Simple CCSM will hopefully be included in Ubuntu in the near future. Some new features of this redesign are:



	
  * More flexible profile support, with a Combo Box to select profiles instead of the slow slider bar

	
  * Specific page for zoom

	
  * When changing to Desktop Cube, Vertical size is automatically changed to 1




### CFCapplet, FusionInstaller, (Fork of) Compiz Fusion Trouble, Live Desktop Settings, Compiz-Decorator-Settings (Soon to be) Compiz-Themer -> Compiz-Tools


In an effort to reorganize my user repositories I've moved the above tools into one central repository known as_ compiz-tools._ Please update your scrips if you use them


### Freewins extension


In my spare time, I've also been <strike>slaving</strike> working away at an extended version of the Freewins plugin. It's not quite ready yet, but here are some of the touted features of the new plugin that I am preparing:



	
  * Ability to toggle on / off the _click-in-the-center-for-3D-rotation_, instead having an option to always allow it, or use the older behaviour

	
  * Cursor  changes when a window is grabbed

	
  * Ability to freely scale a window

	
    * Click in any portion of the window to freely scale it, Move towards the center (relative to where you initially clicked) to scale the window down and move away from the center (ditto) to scale the window up

	
    * Option to maintain aspect ration when scaling or not

	
    * Option to allow negative scaling (With a minimum scale threshold)




	
  * Input Shaping

	
    * Much like _shelf_, this plugin will allow you to only capture clicks from within the window when it is scaled down




	
  * Manual Rotation and Scaling

	
    * You can now manually rotate the windows by using

	
      * _<Shift><Control> and_

	
        * _w _to rotate up

	
        * _s _to rotate down

	
        * _a _rotate left

	
        * _d_ to rotate right

	
        * _e _to rotate clockwise

	
        * _q_ to rotate counter-clockwise

	
        * _Page Up_ to scale up

	
        * _Page Down _to scale down

	
        * _Scrolling up_ to scale up

	
        * _Scrolling down_ to scale down










	
  * Animation for manual rotation and resetting




### Other New Stuff





	
  * Cube Caps plugin now has file:image hints on the file name option, so that you can use a file browser to select a file

	
  * Menu type windows (I.E GIMP detachable) now have a window decoration and can be moved

	
  * Show Desktop Animation configuration added to CFCapplet




## Tip of the Time


Did you know that you can work around many glitches with windows going dark when using the zoom or shelf plugins by disabling _lighting?_ This may give better visual performance on some graphics cards and can make some effect such as the transparent cube a lot more usable.


## Year in Review


My next entry to this blog will spend little time going over new features and bugfixes, but will instead focus on what has happened in the eventful year of Compiz Fusion - the death of the Beryl project, the merger and what we have achieved as one of the biggest Linux Desktop projects in such as short space of time. 2007 has truly been quite a year for Compiz Fusion and the Future holds even more with promises of Input Redirection, Redirected Direct Rendering, DRI2 and Multi-Pointer-X predecited to be coming late next year.

But for now, have a great holiday and festive season and I wish you all and the project the best for the new year.

_-SmSpillaz_
