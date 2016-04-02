---
layout: project
title: Unity
blurb: A desktop experience that sings
thumb: /img/unity.svg
---

Unity
=====

Unity is the default desktop environment on Ubuntu. It is designed to be
beautiful, space efficient and functional.

At its foundation lies the [Compiz](/projects/compiz) window and
compositing manager.

Unity 7 found its beginnings in late 2010 and was debued as the default
desktop in Ubuntu 11.04 (Natty Narwhal).

Window Manager Integration
--------------------------

The shell is tightly integrated with the window manager.

![Scale and Expo](/img/compiz-5.png)

Pressing icons in the launcher triggers a spread of window previews.
Windows can be opened, closed, minimised and maximised from the top panel.
Window previews, including minimised window previews are available from the
window switcher.

![Switcher](/img/unity-2.png)

Postprocessing
--------------

A key element of Unity's visual design was the frosted glass like surfaces.
This effect was achieved by redirecting Compiz' rendering into a framebuffer
object and applying a gaussian blur shader.

![Postprocessing](/img/unity-1.png)

Re-blurring behind the entire surface on every frame is not efficient. Several
strategies were employed to mitigate the performance hit. The frame buffer
compiz renders into is used directly for blurring. Unity keeps track of
screen updates done by Compiz to determine when blur updates should be done.