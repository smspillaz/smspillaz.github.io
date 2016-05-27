---
author: smspillaz
comments: true
date: 2012-06-08 08:15:47+00:00
layout: post
link: https://smspillaz.wordpress.com/2012/06/08/on-the-future-of-graphics-drivers/
slug: on-the-future-of-graphics-drivers
title: On the future of Graphics Drivers
wordpress_id: 871
---

Hi,

I'm sorry I haven't blogged in a long time. This needs to be discussed in a separate post, however I wasn't in a good headspace for the last 7 or so months. That's changed now, and a particular issue came to my mind that I feel deserved a blog post.

Ubuntu 12.04, Compiz 0.9.8 and Unity 5.12 are fantastic. My colleagues, Daniel and Alan and I have invested a significant amount into refactoring the compiz code so that we can split it up and test it, writing test coverage for most of the fixes that are going in, improving performance through profile guided optimization and fixing some of the most important architectural issues within compiz. We've streamlined the development process by merging together a large number of branches into one source repository, moved to test-driven-development practices with a stringent review process.

This has made Ubuntu 12.04 fantastic. Fantastic it seems, unless you are using the proprietary NVIDIA graphics driver.

Now I don't want to make this a blog post hating on the NVIDIA driver, or their authors or on NVIDIA themselves. It has excellent support for on-GPU video decoding, GPGPU operations, OpenGL 4+ and so on and so forth. Recently it received support for XRandR 1.3. This should be applauded.

That being said, I believe the continued use of both the NVIDIA and FGLRX drivers within the Linux Desktop community is now considered harmful for a number of reasons. And now that we have realistic free software drivers to replace them such as **nouveau** and **radeon**, the free software community needs to reconsider its position in its support for these drivers.

The first problem is obvious, in that we are perpetuating a norm that providing proprietary software as a means to bootstrap free software is acceptable. Ethically, many people in the free software community can see why it is important that software is free (as in freedom). More importantly, hardware drivers are very large and control a significant piece of the stack used to make your system work. The command schedulers and display modesetting code amongst other things run as superuser and there is no way to see or change what they might be doing to your system. I don't suspect that NVIDIA nor AMD are interested in deploying malicious software on their users, however, they can still inadvertently enable that - [recently a security hole was fixed in the NVIDIA driver](http://www.h-online.com/security/news/item/Security-vulnerability-in-NVIDIA-s-proprietary-Linux-drivers-fixed-1520095.html) which allowed attackers to read and write arbitrary memory on your system. Because the drivers are closed, the free software community is powerless to do anything but rely on NVIDIA or AMD to ensure that we run systems that are secure.

However, my name is not Richard Stallman, nor am I a member of the FSF, and as such this isn't the most important part of my argument.

The most important part of my argument is this:

**The existence of different and proprietary implementations of OpenGL promote a culture whereby we don't engage with problems directly, but we corner case particular drivers, hack around others and create a sub-par system for everyone.**

****If you've ever written code with me you'll understand one thing - I hate writing hacks. Hacks are a short term solution which make a long term problem worse. Hacks demonstrate that you haven't given the problem your full attention because you don't understand what the problem is. Hacks are like trying to shove the incorrect puzzle piece into the puzzle. If you build your reality based on that, you'll end up with something that's very fuzzy, not rigid and crumbles very easily.

Writing against proprietary drivers requires writing hacks, simply because there is a point where you can research no further into what the problem really is. For example, in one graphics driver, we found that [changing the name of the program](http://bazaar.launchpad.net/~compiz/compiz/ubuntu/view/head:/debian/patches/workaround_broken_drivers.patch) was necessary to ensure the driver used direct rendering. On other drivers, I've found that all future [texture binding will fail silently](https://launchpad.net/bugs/1002602) if you release a pixmap on the server[ before releasing a texture on the driver and flushing the pipeline](http://bazaar.launchpad.net/~compiz-team/compiz/0.9.8/revision/3223). Or on some drivers, if [you don't re-bind an offscreen pixmap before binding it to a texture unit](http://bazaar.launchpad.net/~compiz-team/compiz/0.9.8/revision/3109), the [driver will never flush changes to that pixmap](https://launchpad.net/bugs/770283). Or on some drivers[ if you resume from suspend, you lose framebuffer object contents](http://bazaar.launchpad.net/~unity-team/unity/trunk/revision/2205). Or on other drivers, if you use glPushAttrib with GL_CURRENT_BIT, the [previous values on the attributes stack don't get carried over](http://bazaar.launchpad.net/~unity-team/unity/trunk/revision/1690.3.5).

That isn't even an exhaustive list, and they've all been the **result**** of lots of engineer time wasted** over hunting down bugs they're not allowed to see and trying to guess what's going on so that workarounds or fixes can be applied.

Now, while I'm actually on leave for study, we're at it again - the NVIDIA driver has removed support for GLX_MESA_copy_sub_buffer and disabled Sync to VBlank by default, which, [amongst other reasons is making rendering really slow on precise](http://bugs.launchpad.net/compiz/+bug/988079). In addition to that, we're [fighting lots of strange quirks where texture binding is randomly failing](https://bugs.launchpad.net/bugs/729979).

The largest problem is that while I own an nvidia card for years - I've not run the nvidia driver in at least two. I've been using nouveau since early 2010. And now every time I do any work which might affect the graphics pipeline, I and every other developer have to make sure it works on nvidia and fglrx too, because it could just break without our knowledge.

The free software drivers on the other hand, share the same libGL. The paradigm shift here is huge. Instead of **make a libGL that works on Windows for our driver and invest a bit of time making it work on Linux and Mac OS**, it is **make a libGL for Linux and make it provide a sensible abstraction layer to use many different kinds of hardware**. And the results pay off. When I write code that works on nouveau, I can be damn sure it will also work on intel and radeon too, because the OpenGL implementation isthe same. And when it doesn't work, we know that the problem isn't in the OpenGL implementation, and we can drill right down into that driver and fix it in the right place.

In the future, when we move past X11 into a model where the drivers use provide the same direct rendering APIs from the kernel to userspace, this is going to become even more important. Already we see that NVIDIA and FGLRX are not going to support EGL, KMS or Wayland.

I think its now time we ask ourselves this question: Do we want to, in the name of short term gains in performance and higher level OpenGL support, lower levels of the free software world, which have the biggest advances to make, back in order to support proprietary drivers, or do we want to eliminate our dependence on them and set ourselves free. I think that it is now becoming clearer that the latter is more and more important to the community. As such, I believe that as a community, we need to be taking greater steps to supporting free software drivers, as they are the future.
