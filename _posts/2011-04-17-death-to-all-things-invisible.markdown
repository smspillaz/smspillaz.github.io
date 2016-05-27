---
author: smspillaz
comments: true
date: 2011-04-17 01:41:36+00:00
layout: post
link: https://smspillaz.wordpress.com/2011/04/17/death-to-all-things-invisible/
slug: death-to-all-things-invisible
title: Death to all things invisible
wordpress_id: 777
---

So of all the bugs that drive me insane (and believe me, I get a lot of them), it would probably be bug #[709461](https://bugs.launchpad.net/unity/+bug/709461), "Application windows fail to display and mask regions of the screen". It drives me insane because it is yet another one of those weird race conditions that some people are getting because of the way X11 works. It also drives me insane because every time I implement a fix for it in compiz, some other new variation of it pops up. And the thing that is driving me insane the most recently is that I.just.cannot.reproduce.it. I mean, I've had this bug before where I've been able to reproduce it *sometimes* and then *sometimes* I got lucky because I reproduce it while I was inspecting carefully what was going on, but this one I just have no luck reproducing. And as usual, it seems to be biting everyone else *except* me. So here is where I crowdsource to the rescue!

First of all, diagnostics - you know you've got this bug when



	
  1. You opened an application and nothing appeared

	
  2. There is now an invisible wall as hard as diamonds stopping you from clicking on other windows




OR when








	
  1. You closed an application or a window or a dialog or something

	
  2. There is now an invisible wall between you and other applications.




That's basically the "invisible window". It's just some window that got mapped that we never actually tracked, so we never actually paint it, ends up on top of everything since we don't take it into account when stacking and is just general as annoying as the fact that I have several assignments due for university on the same day.




Here's how you can help. If you're on Ubuntu, I've built packages for [i386](https://bugs.launchpad.net/unity/+bug/709461) and [amd64 +nvidia](http://smspillaz.dyndns.org/~spilsbury/dieinvisiblewindow_64) (dep on nvidia because I'm building locally and that's just the way the world works ....)


Now, these packages contain two things










	
  1. They spew a lot

	
  2. They contain what I think might be a fix for the problem after some drunkhacking yesterday


So here is what you can do to be my bestest friend for teh evaz.

First of all, install the packages. Just download the whole lot to some folder and then sudo dpkg -i *.deb

Secondly, run "compiz --replace" in a terminal and **make sure that the scrollback buffer is reasonably large**, so that I can get as much info as possible.

Finally, reproduce the invisible window in whatever way you can, and then copypasta the scrollback to some file, then paste the output of xwininfo -root -tree to some file and then paste the output of xwininfo -all (click on the window) to some file and mail them to me at sam.spilsbury a ubuntu d com . If I can get enough information on this as possible, then the higher chances of me being able to fix it are.


