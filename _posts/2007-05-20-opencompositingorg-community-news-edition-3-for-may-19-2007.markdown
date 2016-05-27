---
author: smspillaz
comments: true
date: 2007-05-20 11:16:45+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/05/20/opencompositingorg-community-news-edition-3-for-may-19-2007/
slug: opencompositingorg-community-news-edition-3-for-may-19-2007
title: '      OpenCompositing.org Community News edition 3 for May 19, 2007'
wordpress_id: 4
---

**Background :** Welcome to another edition of the OpenCompositing.org (formerly known as TWiCC) blog. Loads of new stuff has happened this week and you'll be really suprised as to how much work has gone in behind the scenes. To quickly state what HAS happened, there have been loads of bugs fixed, and there are two new plugins as well as some new features added.

**News in Bugs :**

-Some new icons for CCSM
-Filter now works in CCSM
-Profile/Backend now have their own page in CCSM
-Added Build System to CCSM
-Water is slightly sped up

-No more white skydome when water/rain is active

-Compiz builds without XFixesHideCursor
-Fixed occasional settings reset
-No more focus fade conflict with Group-Tab animation change
-Rotate with moving window now works properly ("Edge Flip Move" option enables properly)
-Icon display for minimized windows has been fixed in ring switcher

**News in features :
Plugins:      **

Well, as said before there have been two new plugins added to the mix - Resize Info and Screencasting. Lets do a run-down of both.
**  Resize info:**

This plugin is cool, it provides a basic window manager function but with jazzed up composite effects. Basically - as you resize a window, a small text box will fade into the middle of the window and show you the window's width and height just like metacity used to. You can also configure what colour the text is and how transparent the box is which is kind of cool

[![resizeinfo](http://smspillaz.files.wordpress.com/2007/05/resizeinfo.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/05/resizeinfo.png)

** Screencasting: ** This is cooler ;-) This is basically a plugin which allows you to take videos of Compiz in action and export it to rsc video, which can be converted to raw video with the rsc2raw tool provided. Whats cool about this is that it is much faster than the orignal seom-based capture plugin introduced in Beryl a while back and its most annoying dependency - 'seom' is gone!. This plugin only captures differences in how the screen looks to the past frame. The only downside is the files it creates are still rather large files. This is the reason why as much as I want to - I cannot get a video capture of my desktop as I am only living on 138MB of free space (o_o)
I might also add that it is the one of the first multi-threaded plugins and will soon be piping to an encoder so it can encode MPEG video on the fly.

**New stuff added to plugins:**

Well, the three  modes have finally been added to the upstream resize plugin - congradulations to 'maniac' for that. Here is a screenshot of the "stretch" mode.

[![Window Stretching](http://smspillaz.files.wordpress.com/2007/05/stretch.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/05/stretch.png)[![Window Stretch 2](http://smspillaz.files.wordpress.com/2007/05/stretch1.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/05/stretch1.png)
These modes have also been completely fixed up of any bugs, wobbly pull back on maximize now works and the window does not flash back to where it was before being redrawn
_
-Zoom and Sidekick animations are now springy like minimize!_
**
Some handy workarounds for stuff that isn't fixed yet.**

Annotate doesn't appear to work - this is because of a typo. Go to the annotate plugin in CCS and find the "Fill colour section" Click on the button and find the opacity slider and change it to something more than 100. Voila - annotate works again.

Tip of the week : Hate the bouncy cube? Does it make you nauseous? Here's the way to turn it off - or make it more bouncy ;-) Go to the "Rotate Cube" setting in CCSM and find the option that says "Timestep" Change it to 0 if you do NOT want a bouncy cube and change it to something higher if you want the cube to be more bouncy

**Conclusion : **Well thats it for Composite Community News for this week. I hope you have enjoyed the additions to OpenCompositing and I hope you have enjoyed this news update. If you have any questions comments or suggestions then just stick them in the comments section and I will A) Try to get them into the blog and B) If I can figure out how to reply to comments in wordpress - I will reply to them ASAP. If not - you can always send me an email at SmSpillaz(at)gmail(dot)com ( I GET NO SPAM! ;-) )

**PS - Next week, I will post a small script which will fetch and build everything in GIT for you. Stay Tuned ;-)**

_Another OCCN is in the can!_

-SmSpillaz
