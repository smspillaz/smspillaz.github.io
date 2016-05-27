---
author: smspillaz
comments: true
date: 2008-09-24 14:49:18+00:00
layout: post
link: https://smspillaz.wordpress.com/2008/09/24/toldya-i-wouldnt-be-gone-for-long/
slug: toldya-i-wouldnt-be-gone-for-long
title: Told'ya I wouldn't be gone for long...
wordpress_id: 301
---

Well, two months ago I told you I was taking exam leave and now .... 3 ... 2 ... 1... EXAMS ARE OVER, WOOOT!!!

And now I'm back again. After two long months of doing study and development in my spare time. Expect to see me around a little more now! I'm not going to do a full news post today as the local time is approaching 12:00AM and I have to go back to school tommorrow to get my exams back, but here are a few tidbits which you should be aware of:

**Animation Addon:**

You've probably all seen **cornelius**' [post on the forums](http://forum.compiz-fusion.org/showthread.php?p=65558#post65558) now about animation being split into two plugins, animation and animationaddon. Not exactly a big deal in itself, but it does have huge implications for the future:



	
  * Animations plus is no longer a copy of animation with more animations, instead it provides those animations to animation

	
  * Creating an animation for the animation plugin is a lot easier as you don't need to modify the entire plugin just to add an animation

	
  * All plugins can now insert options into other plugins where supported and defined (only animation does this right now). This means, however, than an extendable [elements](http://www.elementsplugin.com/about/) plugin may be on the way


**Chroma-Keying plugin, in development:**

PatrickFisher has created with the help of a few other developers, a chroma-keying plugin or 'green-screen' plugin as he calls it. It has similar functionality to FakeARGB, but you can configure which colors to key-out.

[Forum Link](http://forum.compiz-fusion.org/showthread.php?t=7753&page=4)

**What I've been doing:**

Well, I told you that I'd be working on three things, Compiz MPX and IR patches, A framework for windows to animate themselves through compiz and the aformentions 'secret' which some of you have already figured out. Bad news is that I haven't had time to work on all three. Good news is that I have had time to work on the first one and sequentially port every plugin to MPX / IR Compiz. Here is a teaser video for you.

[vimeo 1803569]
Notes:



	
  * This is far from ready, I have yet to port all the plugins (I'm working on mag now), it should be by about November, but I can't guaruntee anything

	
  * It requires patches to your X Server

	
  * The thumbnail plugin might be particularly buggy, mainly because I can't get enterNotify events to work in MPX and there are a few memory management issues

	
  * I am in **no way** seeking for these to be accepted into compiz. Rather, I am providing a base so that porting plugins to the MPX spec can be easier if and when the compiz guys get around to doing it

	
  * The Move, Resize, Annotate plugins and core MPX stuff was written by Peter Hutterer. I did the patches to firepaint, mousepoll, thumbnail, showmouse and freewins.

	
  * Thanks to b0le for reviving the input redirection patches.


See you all soon!

SmSpillaz
