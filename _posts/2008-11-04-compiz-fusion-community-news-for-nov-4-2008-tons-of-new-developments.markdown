---
author: smspillaz
comments: true
date: 2008-11-04 12:41:15+00:00
layout: post
link: https://smspillaz.wordpress.com/2008/11/04/compiz-fusion-community-news-for-nov-4-2008-tons-of-new-developments/
slug: compiz-fusion-community-news-for-nov-4-2008-tons-of-new-developments
title: 'Compiz Fusion Community News for Nov 4, 2008: Tons of new developments!'
wordpress_id: 337
tags:
- Add new tag
---

Yay! I actually got around to writing this! I'm resenting how long this is going to be though :o


### Introduction:


So, a few major things that this post will cover today:



	
  * Improved startup time for compiz

	
  * Revived Input Redirection patches and MPX patches

	
  * Compiz 0.7.8 released

	
  * Three new plugins, new-maximumize, minimumize, new-put

	
  * Simple CCSM for KDE




### News in Bugs:





	
  * In core:

	
    * GWD Fixes for languages that read left-to-right

	
    * Windows raise on move / resize if raise-on-click is enabled

	
    * Scale's key and button bindings 'hold down' feature is now toggle-able

	
    * Right/Left/Up/Down key events are no longer sent to windows while in scale mode




	
  * In plugins-main

	
    * Memory leak fixes

	
    * Windows don't dodge or focus fade if just the shadows overlap

	
    * Option added to hide utility (i.e tooltip) windows from the taskbar so that they don't interrupt thumbnail

	
    * Blur/Reflex/Neg conflicts with curved and horizontal folds fixed




	
  * In plugins-extra

	
    * Non-widget windows cannot be focused while widget mode is active

	
    * Widget mode is ended when all widget windows are closed

	
    * Fixes for gentoo's malloc function in animationaddon




	
  * In unsupported

	
    * Potential crash fix in freewins

	
    * Compilation fix in vigo




	
  * In compizconfig:

	
    * Simple-CCSM does not depend on animation

	
    * Simple-CCSM shortcut is not shown in KDE anymore because there is Simple-CCSM-KDE for that

	
    * Fix text color in the NewHuman theme

	
    * Icons loaded in the background in CCSM to help with startup time

	
    * Protocol buffers disabled if a cache directory cannot be created







### News in Features:


**Improved startup time with protocol buffers.**

If you haven't read [Erkin's](http://dev.compiz-fusion.org/~cornelius/2008/10/19/startup-time-improvements-part-1/) post about improved metadata parsing optimisation in compiz-fusion, you should definitely take a look. The post is a little technical, but the main point is that we have integrated Google's protocol buffer technology to cache XML files into an optimised format, so that they can be parsed much faster. The results are a 4.5x faster Simple-CCSM startup, 2.4x faster CCSM startup and 1.25x Compiz startup (when used with the ccp plugin). These, of course are all variable, for best startup time, you should disable plugins you don't use, then you don't need to load 50 plugin libraries into memory and execute thier initialization functions, and then never use them. Of course, cold startup is *still* going to be quite slow, simply for the I/O reason. Once protocol buffers is integrated into compiz, you should see a much better compiz warm startup time

**Revived Input Redirection / Multiple Pointer X patches!**

Over the past few weeks, Joel (b0le) Bosveld, Kevin (OasisGames) Lange and I have been working towards reviving the current input redirection patches and creating an interface for compiz to use them. I started work on this a while ago and a few days ago, [I published the patches to my git repository. ](http://smspillaz.wordpress.com/2008/11/01/before-murphys-law-ensures-the-contrary/)While I was working on these patches, I also decided to add MPX support to compiz, which, ironically took up most of my development time. **Please note that you won't update compiz / your x server tommorow and find these features, you need to apply patches to the source tree. **I have decided to start a thread on the forums detailing the process of [patching your X Server and Compiz](http://forum.compiz-fusion.org/showthread.php?t=10216). For purely PR reasons, here are the two videos demonstrating the features the patches provide below:

[vimeo=http://vimeo.com/1981468]

[vimeo=http://vimeo.com/2089038]

There are, of course, bugs, the most annoying ones are:



	
  * Input is cut off at the very edge of windows

	
  * If you change viewports, the old input 'shape' will still be there, so you need to toggle scale or something to fix it

	
  * Regarding MPX, there is still no second hardware cursor, so the second cursor will flicker while compiz is on

	
  * Decorator move/resize doesn't quite work yet


**Simple CCSM KDE**

I'll admit it. KDE users are still quite a bit left out from the equation regarding Compiz Fusion. Despite our best efforts to support kde, with the -kconfig configuration backends, both KDE window decorators and a QT based fusion-icon, KDE still lags behind. To date, there has not been a single CompizConfig settings frontend for KDE, and, to be honest, any GTK app running in a KDE environment (including CCSM) looks _awful_.

Simple CCSM-KDE hopes to change that. It is the first QT4 based settings manager and it is now part of the /fusion git tree. Here are some screenshots:

[![screenshot-configure-compiz-settings-simple-ccsm](http://smspillaz.files.wordpress.com/2008/11/screenshot-configure-compiz-settings-simple-ccsm.png)](http://smspillaz.files.wordpress.com/2008/11/screenshot-configure-compiz-settings-simple-ccsm.png)[![screenshot-configure-compiz-settings-simple-ccsm-1](http://smspillaz.files.wordpress.com/2008/11/screenshot-configure-compiz-settings-simple-ccsm-1.png)](http://smspillaz.files.wordpress.com/2008/11/screenshot-configure-compiz-settings-simple-ccsm-1.png)Compiling it is based on CMake at the moment, so you need install the latest libcompizconfig first, then use something like:

    
    cmake .


And then run the executable directly from it's folder. Hopefully, this will be the necessary step to get further KDE support in compizconfig frontends

**Compiz 0.7.8 Released:**

Over the past few days, the release team release Compiz-0.7.8 and Compiz-Fusion-0.7.8. This release includes the extension plugins system introduced in libcompizconfig with animation and animationaddon as well as some ABI changes, optimisations, bug fixes and fewer memory leaks. It should be the last release before the stable 0.8 release, which is leaps and bounds ahead of the current stable revision, 0.6. I am proud to say that even the development series Compiz 0.7.8 and Compiz Fusion 0.7.8 are already quite stable, even the git version is stable for what it is. In the 0.9 series, we should be working on some fairly interesting stuff, preparing for the big 1.0

**New user-plugins: Put-new, Maximumize-new and Minimumize**

New Maximumize and Minimumize:

[youtube=http://au.youtube.com/watch?v=35M2sVYRVuY]

Basically, these are modified maximumize plugins which allow you to maximumize in any direction (Specified using keybindings), so if you have a window in the middle of a huge blank space, you can choose to have it expand until it hits an edge on the right, or the top, etc. The minimumize plugin allows you to do the same thing, but instead half the size of the window in that particular direction.

New 'Put':

[youtube=http://au.youtube.com/watch?v=ZNTLO9ooZqYl]

The 'Put' plugin is quite old and has been around since the Compiz-Quinn days, basically untouched since then. It allows you to place a window anywhere you want on the screen without moving it, so you can easily move all windows to a particular corner or to the mouse pointer etc. This new 'smartput' plugin, allows you to move the window to that it will end up in a gap suitable for it's size. This, combined with the maximumize plugin, is quite a useful combination as you can easily sort out your current mess of windows into something that makes good use of screen real-estate.


### This editions tip:


As said before, make a usage note of all the plugins you *actually* use. Disabling plugins that you don't use can drastically increase your startup time.

Well, that's it for this time. I hope to publish another entry soon:

-Sm
