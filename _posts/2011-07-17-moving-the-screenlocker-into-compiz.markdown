---
author: smspillaz
comments: true
date: 2011-07-17 22:00:02+00:00
layout: post
link: https://smspillaz.wordpress.com/2011/07/17/moving-the-screenlocker-into-compiz/
slug: moving-the-screenlocker-into-compiz
title: Moving the screenlocker into compiz
wordpress_id: 804
---

**screensavers** and **screenlockers **are tricky.

They're tricky because they're a double edged sword from a security perspective. When one is around, [you had better not let anything else get on top of it](https://bugs.launchpad.net/ubuntu/+source/compiz/+bug/771391), but also, you had better not let anything else [pretend to be a screensaver either](http://git.gnome.org/browse/gnome-screensaver/tree/src/gs-window-x11.c#n567), (that is, unless your application is a "screensaver" and now suddenly gets to be on top of absolutely everything).

So it's no surprise that there's a [general](http://community.kde.org/KWin/Screenlocker) [movement](http://mail.gnome.org/archives/gnome-shell-list/2011-March/msg00340.html) to kill these external screensavers and put them somewhere else where they actually have a little more control. That is, inside the compositor. This is mainly for security reasons, see, in Window Manager land, we have no such concept as a "screensaver" window or a "screen locker window" - the closest thing we have is the concept of fullscreen windows and windows which hog all the input (grabs). So, screensavers are kind of an amalgamation of the two. Except that things can still go [above](http://standards.freedesktop.org/wm-spec/wm-spec-latest.html#STACKINGORDER) them (note the use of the word "focused" in relation to fullscreen windows, yeah, interpreting the EWMH is like interpreting a complicated contract sometimes [well, it is kind of a complicated contract, but that's a discussion for another day]).

So along came the [XScreensaver extension](http://www.xfree86.org/current/Xss.3.html) which was all well and great because it allows you to "bless" one window as the screensaver and that was it, it went on top of **everything**. Of course, the problem there is that it's tied to X11, and given that most DE's want to go multiplatform this isn't something that's really feasible.

And that means that the next best thing is a hack. A really really big hack. The hack is something like this


<blockquote>Nothing shall ever get on top of me. If anything tries to get  on top of me, I will just ask to be on top of them. Nothing. Shall. Pass. Ever.

Oh, and just in case something did get on top of me, every so often I'm going to make sure that **I'm** on top. Yeah, I'm awesome</blockquote>


[(reflected in the code here)](http://git.gnome.org/browse/gnome-screensaver/tree/src/gs-window-x11.c#n567)

This is probably not the best application design practise that we should really be encouraging, because the message is that in order to write anything secure you basically have to abuse the window manager and hope it does what you want in order to do anything useful.

If we move the screen locker into the compositing manager, it means that the compositor can now absolutely ensure that the screen locker is always on top by ensuring through the magic of SubstructureRedirectMask that nothing ever gets on top of the screen locker in the first place. Which is pretty awesome, and a lot more simple.

So great. Now I wondered to myself, how the heck can we implement this? Doing an entire screen locker inside of a window manager seems like a bit of an insane task to me, since it means dealing with a number of security frameworks, secure keyboard input etc. And we already have the other screen lockers at our disposal, do we really need to rewrite them for every window manager?

Well, as it turns out, there's a fairly simple hack that we can do for this. Have compiz handle the blanking of the screen via communication with an external "locking" service, have a separate application (eg gnome-screensaver) handle the input and dialog side of things and get the service to bless the dialog as the locker window and have compiz handle the disabling of window painting and disabling of input. And the result:

[youtube=http://youtu.be/NcyzBRr-lp8]

Oh yeah, you can have pretty animations too. And this finally means that when GNOME and KDE drop the old screenlockers you'll still be able to use compiz **and** be secure!

Now how awesome is that?

**edit:** the code:

git://git.compiz.org/users/smspillaz/locker

git://git.compiz.org/users/smspillaz/x11locker

lp:~smspillaz/+junk/lockertest

lp:~smspillaz/+junk/gnome-screensaver-hax

**protip**: don't install gnome-screensaver-hax unless you want a totally broken system, as you can probably tell, this was a hack to make the locker dialog parent into the compiz locker window and breaks it under normal usage. (It works under compiz though :))
