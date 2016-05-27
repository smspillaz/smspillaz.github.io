---
author: smspillaz
comments: true
date: 2009-02-21 16:09:23+00:00
layout: post
link: https://smspillaz.wordpress.com/2009/02/21/input-redirection-mpx-and-nomad/
slug: input-redirection-mpx-and-nomad
title: Input Redirection, MPX and NOMAD
wordpress_id: 429
---

So considering that compiz++ is now master and my patches haven't been maintained in a while, a lot of you might be wondering what is going on with input redirection and MPX. Was that effort wasted? Is it made obsolete by com[iz++? Is it still doable? When is it coming? Etc.

To be perfectly honest, they are all questions in a sea of uncertainty. Surely, it has been on the top of our priority list and the compiz developers would love to see it working out. I can say that MPX support is on our TODO list before 1.0, and considering that there already patches to implement this functionality (even if it was badly and with problems), we will be considering this once core settles down (compiz++ ports, NOMAD, options-rework etc).

A large part of that framework will probably be generic input events, i.e plugins do not need to handle X events directly, compiz core can do all the annoying work and plugins get all the commonly used data in a nice neat package (like how we have implemented actions, but to a greater level). This is important because X Input 2 events have different signatures to normal X Events which means that you have to write event handling code twice (not good).

As for input redirection, it's still up in the air. The current X patches are currently in a nice state: only a small hook has to be added the X server to transform input event co-ordinates by a triangular mesh with XComposite. The only problems with this approach is that some broken apps read global event co-ordinates instead of their own which breaks the way input redirection works and so far it has been difficult to calculate a triangle mesh for different effects. Our math and openGL guru - onestone, suggested a more efficient way of calculating a triangle mesh or all different kinds of effects: hopefully this can be implemented in the next revision of the input redirection work.

I would imagine that around the time we implement support for MPX, we will also do a big push on the XServer side of things to get input redirection (re)-implemented. Hopefully, that should all work out if we show that we are serious about it.

**NOMAD:**

During the last conference call I had the oppurtunity to speak with David Reveman regarding input redirection and NOMAD. I asked him if it was possible to do such and also how NOMAD would be implemented so it was transparent.

The idea behind NOMAD is have your session running on some remote server and send as little data as possible to have the client do the grunt rendering work. NOMAD allows for so-called 'virtual' channels over RDP where data can be sent to client applications to be done on the client itself. This is essentially moving away from the idea that remote desktop is just sending input events to some server and have it return screenshots of it's display or a buffer. Ideally, for NOMAD to work seamlessly, you just send the **data** required to rendering GLX applications or video and the rendering is done on the client itself. This would be with nil speed loss if the client machine was the server. Compiz does this already: server compiz sends the client compiz window pixmap data and voila, desktop effects are hardware accellerated by the client.

The idea of all this is that when you log in, you spawn a remote session that you can't see in reality and your visible session is actually connecting to that remote session on that same machine. Then, you can just resume that session from anywhere you want. Especially useful if you have a USB key and just plug it into someone's machine. The difference between your remote session and local session should be unnoticeable.

Why is this important for input redirection? Remember that because we are sending events to a server session, **we have access to all the input events**. This is **crucial** if you want to input redirection. It also requires no X Server modifications, just a different setup. Of course, if the actual patches for X were accepted that would be better, but this would work just as well.

I hope that clarifies any confusion about the state of Input Redirection, MPX and NOMAD. I've had a lot of questions regarding it recently.
