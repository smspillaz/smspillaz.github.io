---
author: smspillaz
comments: true
date: 2011-05-03 04:59:34+00:00
layout: post
slug: debugging-with-x11vis
title: Debugging with X11Vis
wordpress_id: 781
---

Recently on the Xorg-Devel mailing list, Michael Stapelberg, who is the author of the [i3](http://i3wm.org/) window manager posted a new tool, which presents a nice alternative to both xtrace and xscope called x11vis. This tool allows you to monitor every single X Request and have a report on what your program is doing, much like strace will tell you what's going on with IO and valgrind will tell you what's going on with memory. It's especially important for window manager authors like myself since a lot of the bugs that we face are often complicated X11 related timing issues, race conditions, requests that don't get processed or mysterious events that seemliness's come out of nowhere.

X11Vis is particularly powerful since it is insanely easy to use. Just clone it from [github](https://github.com/x11vis/x11vis), install the deps using CPAN and then run the interceptor. Once that's done you can just start your program on DISPLAY=127.0.0.1:0 (eg loopback to localhost, disp 0, since this is the network port that X11Vis is monitoring). From here, X11Vis will print a running report of everything your program is doing. Note that in order to make it work correctly, you need to disable server grabs within your program, since that could cause the interceptor and your program to both block on each other. The way I usually do this is to #define overload XGrabServer and XUngrabServer like this.

    
    int XGrabServer_wrapper (Display *);
    int XUngrabServer_wrapper (Display *);
    
    #define XGrabServer XGrabServer_wrapper
    #define XUngrabServer XUngrabServer_wrapper
    
    int XGrabServer_wrapper (Display *d)
    {
        int n = 1
    #ifdef ALLOW_SERVER_GRABS
    #undef XGrabServer
        n = XGrabServer (d);
    #define XGrabServer XGrabServer_wrapper
    #endif
        return m;
    }
    
    int XUngrabServer_wrapper (Display *d)
    {
        int n = 1
    #ifdef ALLOW_SERVER_GRABS
    #undef XUngrabServer
        n = XUngrabServer (d);
    #define XUngrabServer XUngrabServer_wrapper
    #endif
        return m;
    }


This does mean that there might be some discrepancy in your program when running under X11Vis since it means that you are essentially allowing race conditions to happen where window states change in places where you can't allow them to change (eg during reparenting). However, since these are so rare, it is usually not the case that they will block the debugging of your program.

Once that's done, you can use the **x11vis** tool to set markers in the execution of your program, eg x11vis -m "Starting the Buggy Behaviour", do the thing which makes the bug and then x11vis -m "Stopped the Buggy Behaviour. Once that's done, just exit your program (eg metacity --replace) and go to http://localhost:5523. This will start the X11Vis GUI.

[caption id="attachment_782" align="aligncenter" width="640" caption="X11Vis"][![Screenshot-X11vis gui - Chromium](http://smspillaz.files.wordpress.com/2011/05/screenshot-x11vis-gui-chromium.png)](http://smspillaz.files.wordpress.com/2011/05/screenshot-x11vis-gui-chromium.png)[/caption]

As you can see here, we have a detailed view of every single request that my application makes. Obviously, because this is a window manager, that's quite a lot of traffic to sort through, so I used those markets to hone in on the traffic that was causing problems. Currently I am trying to debug [LP #760436](https://bugs.launchpad.net/ubuntu/+source/unity/+bug/760436), where sometimes a window will open without it's decorations, but shifted down although it did have decorations. I initially traced this down to the fact that the frame window didn't actually change size while undecorating in certain cases, so this mean that compiz never received the event to signify the server geometry change. To counter that, I am refcounting when we do configuration to see which requests are coming from us that we need to process in this way, should there be one reference left behind that we haven't processed yet since we never got an event for it.

However, this plan was foiled because I was received mysterious unaccounted for events that caused my references to go into the negatives quite early on. Even though I did a full grep of the source for everything that could possibly generate a ConfigureNotify, I was still not able to find the source of these events.

After looking through with X11Vis, I confirmed that the event wasn't actually coming from a request of ours, but rather was coming twice because we were listening for it twice! See, the "event" member of each event is slightly different - one is the root window and one is the frame window itself. This is because we select for StructureNotifyMask on the frame window AND SubstructureNotifyMask on the root window, which means that every time a window gets configured, both the frame window and the root window get an event. Since this is quite a subtle difference, I don't know how long it would have taken to find this issue without a tool like X11Vis, so I think Michael for his amazing work there :)

Which means that hopefully, I should have a fix for this bug which particularly annoys some people, but doesn't seem to affect me unless I follow the 8 or so steps to reproduce that Omer Akram gave me. So expect a fix soon :)
