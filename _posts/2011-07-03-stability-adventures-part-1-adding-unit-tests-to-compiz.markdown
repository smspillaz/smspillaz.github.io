---
author: smspillaz
comments: true
date: 2011-07-03 19:49:31+00:00
layout: post
slug: stability-adventures-part-1-adding-unit-tests-to-compiz
title: Stability Adventures Part 1 - Adding unit tests to compiz
wordpress_id: 798
---

As part of the Quality Assurance commitment I am making for compiz, one of the biggest parts of this is unit and regression testing. Previously, compiz has had no such infrastructure for doing so and this has allowed for subtle regressions to be introduced into earlier revisions and then not become noticable until much later ones, making the regression very difficult to track down. One of the more annoying ones is one I have just finished debugging at 3:45AM, [bug 804683](https://bugs.launchpad.net/compiz-core/+bug/804683), where due to the way that clock_gettime () works, it can return time values which are less than what it previously would have returned a few nanoseconds ago. Luckily, I have a fix for this. However, it was difficult to find and a lot of time was wasted debugging one of the problems that came out of it (wallpaper plugin auto-cycling not being called accurately).

As such, I believe it is time to start adding unit tests to compiz. There are a lot of fragile parts in the window manager and a change to any part of it can cause a number of different interdependent units to fail in very subtle ways. Without knowing what exactly is failing, it can be very difficult to determine the source of the problem after a change.

The biggest challege so far to adding unit testing to compiz is the sheer size of the CompScreen and CompWindow classes. The temptation has been to store all plain-old-data which was either going to be global or per-window inside of these classes. As such, a number of different processes within the classes are now interdependent upon each other and cannot be split out into separate unit tests without instantiating a CompWindow or CompScreen and this bringing in dependencies on X11 (defeating the purpose). For example, CompScreen handles options, file-descriptor polling, timeouts, plugin private storage, X events, image reading / writing, window properties read/write, grabs, output devices (monitors), multiple desktops, stacking, session events, window match synchronization, etc etc. The real failure here is demonstrated by the fact that it has **nine** friend classes because so much private data is needed by other classes.

At current, all the above listed items simply **cant** be unit tested because they are dependent upon CompScreen to function. As such, I will be splitting them out into separate objects using an anonymous namepsace with a global instance which CompScreen then sets as the "default" one, or a unit test can set as the "default" one. that way, we can test each module individually and also test interactions between modules **without** running compiz.

_Part II will be about the X11-Application-From-Hell_ as a means of testing a window manager at runtime.
