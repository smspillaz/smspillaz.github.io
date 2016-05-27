---
author: smspillaz
comments: true
date: 2011-02-03 13:27:00+00:00
layout: post
link: https://smspillaz.wordpress.com/2011/02/03/new-resize-borders/
slug: new-resize-borders
title: New resize borders
wordpress_id: 756
---

Part of my work at Canonical involves implementing new ways to make the existing user interface beautiful, usable and accessible at the same time. One of the things that has been done recently in the theme was to make the window border size quite small, so that you don't have large visually distracting borders on your application.

This, unfortunately, meant that grabbing said borders was actually very difficult because they were so small, and with a conventional mouse they were easy to miss. Which led to people filing [bug 160311](https://bugs.launchpad.net/ubuntu/+source/metacity/+bug/160311) "Resizing windows by grabbing borders is difficult".

The general consensus here was to find a way to keep the borders out of the way of the user, but still give the user some space to grab the window for resizing in an accessible and usable way. This is also beneficial for touchscreens where you don't really have the same kind of precision as you do with a mouse pointer, but you don't want the clutter of making the border finger-friendly.

The result is that we are now going to land a new libdecoration which allows a semantic difference between the visible window border and the frame input window, and also changes withing the metacity theme spec and unity-window-decorator. And it is quite a nice touch to use.

Have a look at this video [here](http://smspillaz.ucc.asn.au/unity/enh_borders.ogv) to see how they work (embedding is broken at the moment)
