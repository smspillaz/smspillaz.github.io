---
author: smspillaz
comments: true
date: 2011-02-09 15:24:02+00:00
layout: post
slug: compiz-switcher-changes
title: Compiz switcher changes
wordpress_id: 758
---

Over the next few days I will push a new infrastructure for drawing the switcher selection window box upstream. This will be a more well defined object oriented interface for how the switcher is actually supposed to function. The change won't necessarily be visible, but it will make the switcher box a lot faster and allow for new kinds of switcher boxes to be implemented a lot quicker

Over the past few days I've been looking at [bug 684843](https://bugs.edge.launchpad.net/ubuntu/+source/compiz/+bug/684843)  "Switcher / Alt-Tab can be slow to appear". It seemed like a rather odd bug to me since we actually do the majority of the drawing of the switcher (eg the thumbnails and the border) using OpenGL directly. However, it appeared that there was a catch to that.



### Design decisions that come back to bite you



The whole fiasco with the switcher being slow ever since Compiz 0.9 has taught me a valuable lesson - that it is always better to design things to be separate and modular so it is clear what is going on with them, rather than latching on to an interface which can be made to work for some usecase, but not really designed to be used with it. This is exactly what has happened with the switcher. For those who don't know, the background window behind the thumbnails on the switcher is actually drawn by your window decorator, be that gtk-window-decorator or kde4-window-decorator. This allows us a few benefits - namely that we can do things like text rendering without pulling in desktop specific dependencies into compiz (but rather in to the decorators themselves). It also means that the switcher background can more easily integrate with your desktop - for example the KDE 4 window decorator will use the box container element specified by your current plasma theme as the background of the switcher.

However, the way this is implemented at the moment is more or less a tack-on to how windows are currently decorated. The background window behind the switcher - although the user can never interact with it using the mouse and treat it like a normal window, is in fact, treated like a normal non-override redirect window. This means that the decor plugin will see it and give it a window decoration input window. The decorator then sees that input window and starts to begin to put a normal window decoration there, but just before this, is checks for a special hint to say "this is a switcher window" and it will draw an entirely different "switcher" decoration in its place. (The race between when this hint is actually set on the window and when the decorator gets it explains why sometimes you might initially see a normal window decoration on the switcher window before seeing the actual background). In addition to this, there is a large rectangular window right behind the switcher which the decorator fills with whatever it wants. When the user actually wants to display the switcher, they are at this point, mapping and unmapping two windows which they will never interact with at any point.



### When things get worse



Things start to get worse once you start changing the code-paths the switcher was originally tacked-on to better fit their intended use. For example, in Compiz 0.9 we now [re-parent
](http://en.wikipedia.org/wiki/Re-parenting_window_manager) windows so that they actually sit inside of a window which happens to be their frame. However, in order to comply with the [ICCCM](http://tronche.com/gui/x/icccm/), you must only re-parent windows when you actually intend to manage them on-screen - any other time you must leave them un-reparented so they can freely move themselves about (since they are unmanaged). And this kind of management and un-management happens exactly when a window is mapped and un-mapped, so now we've moved from 2 X Requests to get the switcher up on screen (**map, map**) to **9** X Requests! (**map, create, create, reparent, configure, configure, map, map, map**). Most of which are all redundant since you'll never actually need to interact with the window!



### A better framework



The upcoming changes make the switcher window override-redirect, so that we are back to just two X Requests rather than 9. (Override redirect windows do not get reparenting done on them). But later I will commit a proper framework for implementing a switcher and its layout, so that the decor plugin can directly draw the switcher background without having to use X windows to do it. Also, it means that we can integrate with KDE's switcher a bit better, since Martin plans to [modularize](http://lists.compiz.org/pipermail/dev/2011-January/001435.html) that one.

Expect the changes to land in the next few days.

