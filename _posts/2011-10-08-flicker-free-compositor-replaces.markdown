---
author: smspillaz
comments: true
date: 2011-10-08 12:02:23+00:00
layout: post
slug: flicker-free-compositor-replaces
title: Flicker-free compositor replaces
wordpress_id: 838
---

If you develop compiz or write compiz plugins or just like to mess around with compiz settings, you'll have probably gotten used to doing _compiz --replace ccp_ over and over again. It's not really all that harmful, but there that ugly flashing of everything that goes on as all the windows are unreparented, reparented, unredirected and redirected. This doesn't just happen in cases where you are restarting your window manager, it also happens on login and logout too.

It's 2011, there's no reason why we should have to put up with this anymore, especially if today's hardware and hardware from 6 years ago is more than capable of always compositing. The question is how to handle the movements between compositors. It doesn't make any sense to use compiz for lightdm/gdm/kdm or when you are logging out. However it does make sense to use a lightweight compositor which can hold the image of your screen in place. With compositing happening all the way, it should be possible to have a way for each compositor to hand-off to each other such that the user never sees a flicker as windows are redirected and unredirected.

This is where the proposed **_NET_CM_HANDOFF** specification comes into place. It provides a very rudimentary protocol for compositors to handle management and unmanagement while ensuring that the user doesn't see what's going on, so all the user sees is a brief freeze of their screen as the new compositor takes over from the old one. For example:

[youtube=http://www.youtube.com/watch?v=P8Dsy3UOfZQ]

In that example, the compositor is actually being completely restarted, but the old compositor stays around just long enough to ensure that the new compositor can take over from where it left off. This will be useful in the case of, eg, login, where lightdm can implement a simple compositor and compiz can take over from lightdm when it is ready to draw and smoothly fade-through or even have a cube-effect or something like that to signify that the login is done.

Just a nice touch for a day's worth of hacking :)

**edit:** totally forgot about the code: https://code.launchpad.net/~smspillaz/+junk/handoff
