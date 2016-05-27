---
author: smspillaz
comments: true
date: 2010-11-07 10:20:50+00:00
layout: post
link: https://smspillaz.wordpress.com/2010/11/07/compiz-in-a-strange-new-land/
slug: compiz-in-a-strange-new-land
title: Compiz in a strange new land
wordpress_id: 709
---

Mark Shuttleworth recently [proposed an idea](http://www.markshuttleworth.com/) that a lot of people have been pondering for a while. The idea is simple: **the linux desktop needs a new windowing system**. While I don't have enough expertise to make a fair judgement as to whether it's time to move away from X11 and to something like **[wayland](http://wayland.freedesktop.org) ,** I certainly think the idea is interesting. Why not? We have nothing to lose by at least sticking our toes in the water so to speak, and I certainly wouldn't mind a challenge. So yesterday I took the plunge and [compiled](http://grep.tw/blog/?p=1061) wayland for myself, just to try it out.

[![](http://smspillaz.files.wordpress.com/2010/11/wayland.png?w=300)](http://smspillaz.files.wordpress.com/2010/11/wayland.png)That there is a screenshot of Wayland running in X11 mode (where it just runs as a normal X11 client rendering straight into an EGL buffer on the screen).  I also got it to run in "drm" mode, which is basically where you run it in a VT and it will render the entire screen, much like X11 does.  Note that for both the X11 approach and the drm approach you still need an OpenGL ES (EGL) capable driver which supports libdrm and kms. Also, I believe that it still requires pageflipping support - and I think this is still only supported upstream in the intel drm (there are patches to make it work on nouveau and radeon, but I did not try them) out myself.

This leads us to the inevitable question: where does this leave compiz? As you probably know, Compiz is a window manager for X11, which basically means that it needs X11 to, well, work. However I'm confident that one day this wont be the case. In the same way that we split the opengl and composite plugins out of core so that we could have different rendering models, I am confident that with a <del>bit </del> lot of typing we can do the same with the remaining X11 bits in core - and split them out into an X11 plugin. This would mean that all current plugins would depend on the X11 plugin and then we could work out a small layer of abstraction so that basic WM functions could be exposed on both an X11 plugin and a Wayland plugin.

The other interesting thing about wayland is its display model. Unlike X11 where we have a bunch of clients push to a display server, and then an external window manager / compositing manager process, in wayland we have a single process for a display server and compositing manager. There is no window manager, all of that is pushed to the clients (move, resize, etc). But this doesn't matter any more, since all that matters is that we're in charge of **compositing** them which means that we have full access to their buffers and the stacking of those buffers (plus, you can still place a buffer wherever you want on screen, it is just up to the client to move itself).

The other interesting thing about wayland is that it takes an "_everything is a compositor model_", which basically means that we can create our own buffers using libwayland and then composite each individual app into their own buffer and manage all the little widgets and everything ourselves. And then for example, firefox would become a compositor too, and would be able to manage all of it's own tabs, widgets etc all exposed as GEM buffers.

Of course, I don't see compiz ending up on wayland until someplace in the **far** future, but it's good to start thinking about these things now and see how they fly. I understand that there is quite a lot of debate over whether it is feasible to be thinking about X Server replacements at this point in the game, especially since [it has been done before](http://www.directfb.org/) with not too much success. But I believe this time wayland will be different to those cases. So we should at least try it.

**Update:** Considering that there aren't any videos of it around, I also decided to include a video of how the libdrm version of wayland works.

[youtube=http://www.youtube.com/watch?v=ssxB0a3Js7I]

**Second Update:** Some [sites](http://ostatic.com/blog/compiz-to-be-rewritten-for-ubuntu-wayland) have been wondering if I'm proposing that we drop the X11 backend and rewrite for wayland. This really isn't the case. I've been planning to have an X11 backend for a while now anyway, since I thought it would be cool if we could port to things like Haiku. Since the move to wayland isn't going to happen for a few more years / potentially at all, I don't expect that this X11 backend is going to receive little love. In fact I think quite the opposite will happen. The whole point of this blog post was not to announce anything - it was to say how a Wayland based compiz **could** work, not that we will be "rewriting for wayland". I mean, the entire development team just spent a year and a half rewriting the core in C++ (plus using all the 0.9 APIs), I don't think I want to go into "hibernation mode" just yet and rewrite **again** for wayland :)

**Third Update:** Just talked to Kristian Hoegsberg about some possible compiz implementation details. Apparently wayland also gives you full access to the input as well, which of course means we have input redirection for free :)
