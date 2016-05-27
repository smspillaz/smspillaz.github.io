---
author: smspillaz
comments: true
date: 2009-10-21 03:57:34+00:00
layout: post
link: https://smspillaz.wordpress.com/2009/10/21/why-things-are-the-way-they-are/
slug: why-things-are-the-way-they-are
title: Why things are the way they are
wordpress_id: 499
---

**(or: Why isn't my feature being implemented!)**

Someone in the comments asked me to address the issue as to why we don't yet have commonly requested functionality such as minimized window previews and input redirection. This post will address this and some of the solutions that we may have in the future.


## **Minimized window previews**


This applies to a whole bunch of things. From the fact that we don't have minimized taskbar thumbnails, showing minimized windows in scale, showing minimized previews in switchers instead of ugly icons etc etc etc.

**The right way of doing things**

The whole problem begins with the fact that there is no right way to handle minimized window previews. At best we could have something like this right now, in order from hacky to clean



	
  * #1 Snapshot the window and raster it to a texture before the window is minimized. This is what we used to do in Beryl for the window previews plugin:

	
    * _Pros:_ Easy to implement, no need to mess with the window itself

	
    * _Cons: _No animated window thumbnails, takes up unecessary memory, causes lag when rastering large thumbnails




	
  * #2 Temporarily unminimize windows:

	
    * _Pros:_ Easy, just tell all the windows to minimize

	
    * _Cons: _Severly messes with windows, lots of unecessary havoc going on as we unminimize a bunch of windows, lots of unecessary hacks in order to prevent animations etc etc etc




	
  * #3 Tell windows they are minimized, but really just animate their minimize, set the minimized hint, don't display them and shape out their input

	
    * _Pros:_ Window is always mapped, we always have it's texture to draw, live thumbnails

	
    * _Cons:_ Messes with windows, window thinks it's minimized but it really isn't so it might stop drawing or do erratic things




	
  * #4 Don't tell windows they are minimized, animate their minimize, don't display it and shape it's input

	
    * _Pros:_ Window acts as though it was still displaying, videos still play etc

	
    * _Cons:_ Games etc would still expect input from the user, would not pause etc





You're probably leaping to hit the comments button and say "But KWin and Mutter do #3 and #4!". Yes they do, although it's always been disabled by default in KWin.

The main problem comes with the fact that there is no way to tell a window to keep displaying but not expect any input.

There are a number of solutions but they require changes elsewhere:

	
  * #1 Have an input minimize event in X. This requires a _lot_ of work in the X Window System and might result in an ABI change - the last time that happened was when XI2 was introduced.

	
  * #2 Adjust EMWH to accoutn for this as KWin developer Lucas  Murray suggested to me


Both would provide a standard way of telling windows they have this particular state, so any application that doesn not behave as expected would simply be broken.


## X Server Input Redirection


Yes, we've been waiting for years for this.

The good news is that all the code to do this is there. You can go compile an X Server and XComposite with input redirection right now if you want.

The problem is that it keeps on getting delayed. This is understandable since there are a lot of architectural changes going on in the X Server.

We probably need to push it harder though.
