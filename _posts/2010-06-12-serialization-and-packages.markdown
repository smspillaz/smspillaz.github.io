---
author: smspillaz
comments: true
date: 2010-06-12 09:10:43+00:00
layout: post
link: https://smspillaz.wordpress.com/2010/06/12/serialization-and-packages/
slug: serialization-and-packages
title: Serialization and Packages!
wordpress_id: 629
---

So it's finally post-exams again. No more writing 100's of pages of notes for me :)

In development news, I finally pushed out the [serialization](http://git.compiz.org/compiz/core/commit/?id=ad81a6e7b48ce68e893b4c0b13080b198f37634c) stuff I was talking about a while ago. Well, a bit of a change from what I was talking about a while ago. "[rasterman](http://www.rasterman.com/)" of an enlightenment fame gave me the idea to use full-on serialization, and since we already use the wonderful boost libraries,  this implementation uses the [boost::serialization](http://www.boost.org/doc/libs/1_43_0/libs/serialization/doc/index.html) library to store the state of plugins after they are unloaded and restore them as they load. This means that if you momentarily unload and reload compiz, or unload a plugin, or load a plugin that has to be loaded before others, then you don't have to go and re-toggle all of your effects, or redraw any fire that you had on the screen ;-)

Currently, there is a bug with the serialization library and the linux functions which provide dynamic open/close for plugins. Because of this, it is disabled by default until I can work it out. You can test it out with enabling the "save plugin states on unload" option in core.

**Packages!**

During these few weeks our packagers have been hard at work creating compiz 0.9 packages for you to test out on your distributions if compiling from git is too scary. Behold:



	
  * Fedora - Thanks drago01! (link coming soon)

	
  * [OpenSUSE](http://download.opensuse.org/repositories/X11:/Compiz:/Next/) - Thanks DimStar!

	
  * [Arch Linux ](http://bbs.archlinux.org/viewtopic.php?pid=733050)- Thanks some-guy


Ubuntu packages are on the way, although I believe they are working something out with Debian (who also does not have packages yet)

Release for real soon!
