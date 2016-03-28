---
author: smspillaz
comments: true
date: 2007-10-22 02:39:54+00:00
layout: post
slug: freely-rotate-windows-new-plugin-i-found
title: Freely rotate windows. New plugin I found
wordpress_id: 167
---

I found this great new plugin which allows you to freely rotate windows in any direction that you want. It is called 'freewins'

<strike>Google it for more info.</strike> I will try to write some metadata, compatibility with 0.6.0 and <strike>some screenshots later.</strike>

Here is a youtube video:

[youtube=http://www.youtube.com/watch?v=16Qz_Ov3FuU]

And a screenshot

[![freewins.png](http://smspillaz.files.wordpress.com/2007/10/freewins.png)](http://smspillaz.files.wordpress.com/2007/10/freewins.png)


## Some basic usage:


Use Ctrl-Click anywhere near the edges to rotate from side-to-side.

Use Ctrl-Click anywhere near there center to freely rotate the window on the y and z axes.

To reset windows, just disable the plugin and then restart Compiz.


## Limitations:


Currently, most things work such as animations and wobbly. Plugins such as scale will return the window to it's normal shape temporarily.

If using Cube or Expo, you might notice that the windows are drawn incorrectly.

Also Note that you can't interact with windows properly due to the lack of input redirection in the current X server (And the fact that working versions of the plugin and compiz have not implemented it)

Also, it currently only works in git master, not 0.6.0 (I'll have a look at this soon)


## Download


Get it from http://www.warlockshome.com.ar/compiz/ . Untar it and compile it with make and make install (installs locally)

More info in this forum thread : [http://forum.compiz-fusion.org/showthread.php?t=4804](http://forum.compiz-fusion.org/showthread.php?t=4804)

A compatibility <strike>patch</strike> version of the plugin is attached [here](http://smspillaz.googlepages.com/freewins0.6.c) . This should work with compiz-0.6 (If you are using it) (It doesn't like patches ;-)) Just rename it to freewins.c

- Sam
