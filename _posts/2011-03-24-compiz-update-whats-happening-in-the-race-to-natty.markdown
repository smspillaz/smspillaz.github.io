---
author: smspillaz
comments: true
date: 2011-03-24 18:54:04+00:00
layout: post
slug: compiz-update-whats-happening-in-the-race-to-natty
title: 'Compiz Update: What''s happening in the race to Natty!'
wordpress_id: 769
---

Every lame blog post starts with the words "I have not blogged in a while". So I am going to start this blog post with these words


## "WOAH STUFFS HAPPENING FOLKS YOU'D BETTER BELIEVE IT!"


Ok, so now that I have your attention, here are a few things to turn your attention to:


### **Full steam ahead on bugfixes:**


Ever since Feature Freeze, we've been full steam ahead on fixing the most annoying compiz pet peeves to make 0.9.4 ready for the mass audience (and when I say mass audience, I mean taking on the likes of those mentioned in launchpad [bug #1](https://launchpad.net/bugs/1), because compiz is all about kicking ass and taking names)

Here's some highlights of possibly the most annoying things and most difficult things to fix that we've achieved:



	
  * No more invisible windows! All windows are now tracked correctly and windows that are re-parented away from the toplevels are now no longer interfered with

	
  * No more unity-window-decorator crashing! (Debugging this is fun when you don't have access to debugging symbols since that makes the problem go away)

	
  * Stacking issues are now (mostly) gone with the exception of a few here and there

	
  * No more [weird xterms](https://bugs.launchpad.net/unity/+bug/692463) (legacy border support added)

	
  * No more confusion between placement extents and actual input extents! There is now a new API to handle this

	
  * The Grid plugin is now better than Windows 7! It actually allows you to initiate "gridding" on each side of each monitor rather than the whole screen.

	
  * The switcher plugin now maintains a LIFO order rather than reversing the window list all the time




### Unity MT Grab Handles!


Casually rebranded as "[love handles](http://codearmada.com/2011/03/24/unity-has-love-handles/)", this is a new compiz plugin which makes part of the unity/compiz experience. Basically they are small input windows which act as "handles" on the side of each window brought up by a three finger tap and tapped and dragged by one finger. So awesome. Actually, I love this plugin because it is one of the most beautiful pieces of Model-View code I have ever written, and thanks to Jason Smith for hooking it up to UTouch for me!

[caption id="attachment_771" align="aligncenter" width="640" caption="Love handles"][![Love handles](http://smspillaz.files.wordpress.com/2011/03/itworksbitch.png)](http://smspillaz.files.wordpress.com/2011/03/itworksbitch.png)[/caption]

And finally, XTerms that don't suck. Actually I just want to brag about this since it's 3AM and this is one of the most annoying bugs I've dealt with:

[caption id="attachment_772" align="aligncenter" width="640" caption="Winning"][![Xterms that are winning](http://smspillaz.files.wordpress.com/2011/03/winning-xterm.png)](http://smspillaz.files.wordpress.com/2011/03/winning-xterm.png)[/caption]

A fun game to play now would be "spot the difference" with that xterm and what your xterms look like right now when running Natty Alpha 3. If you happen to notice the small artefact the congratulations, that miscalculation was causing all kinds of havoc and driving me nuts for the past 4 hours.

That's all for now. Out.
