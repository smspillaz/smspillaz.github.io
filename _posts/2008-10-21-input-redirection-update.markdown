---
author: smspillaz
comments: true
date: 2008-10-21 11:07:16+00:00
layout: post
link: https://smspillaz.wordpress.com/2008/10/21/input-redirection-update/
slug: input-redirection-update
title: Input Redirection Update
wordpress_id: 325
---

While most of my previous blog posts have been about MPX Support in compiz, part of the patches that are coming out will also be about Input Redirection. The next few blog posts will cover input redirection and some of the issues of which it covers.

For those of you who don't know, at the moment, the X server expects all windows that all windows are drawn to the screen are drawn as the application asks the server to draw them. Hence, it only makes sense for input events to be sent directly to where the X server expects the window to be, especially because at the time when the composite extension was written, it was very difficult to transform windows in the way we do now.

Fast forward to the present and things have changed a little. Now (wishfully thinking) the half the world is running compiz and people get confused as to why they can't interact with scaled down windows or wobbly windows.

Input Redirection solves this problem. It allows composite managers to change the way input events are sent by defining a 'mesh' to allow the X server to put the input in the 'correct' place.

Input Redirection has been a long requested feature for compiz and the X Server to have. Many feature requests are denied simply because there is a lack of input redirection in the X server. Of course, it's been proposed again and again. Problem we've been having is that it's been pushed back many times. First proposed in XServer 7.4, then 7.5 and now 7.6. **Now** [it's being proposed for X12!](http://www.x.org/wiki/Development/X12) Even though it could come sooner, that as a somewhat distant maximum is a long way away.

This doesn't mean to say that no input redirection actually _exists_, patches are [out there](http://lists.freedesktop.org/archives/xorg/2007-May/024933.html), and certain members of our community, namely myself, b0le and OasisGames (and perhaps onestone) have been using the patches for a while. Still, they are quite outdated and don't really apply anymore.

The patches in their current state are rather interesting. Basically, there is no round trip to compiz to find out what input co-ordinates are _really_ mapped to, the X server does all that kind of calculation itself. Mathematically, it's a nice approach because it uses triangle rotation and scaling to determine the correct input location is for the window, so no hefty calculation on compiz' side. What happens is that the composite manager sends a 'mesh' of triangles to the X server, every even triangle describing a triangle on a transformed window and every odd triangle describing a triangle on the actual window. Lots of triangles are needed to deal with complicated effects like 3D rotation and wobbly etc.

The first step to getting input redirection alive again was [b0le porting the patches](http://jbosveld.blogspot.com/) to the current builds of the X Server. This allowed him to do some neat stuff with the freewins plugin show below:

[(Planet users need to click here)](http://au.youtube.com/watch?v=E3FaMMTe5Ak)

[youtube=http://au.youtube.com/watch?v=E3FaMMTe5Ak]

That's all very well and exciting, but there were still a few problems with the implementation:



	
  * Only one plugin could set a input mesh at a time

	
  * No 3D redirection (Because there were only 2 Triangles)


So I decided, to address problem 1 and kill problem 2 withe the same stone, to implement a compiz function called for every plugin that needs to manipulate the existing mesh in some way. I haven't tried it with multiple plugins, but it should work in-theory.

The third step is porting the plugins over to use this new system. I've only started this now with freewins, but many of the other plugins should be quite easy to manage.

So, as an end to this rather lengthy post, here is a video of freewins with full 3D input redirection using an 8x8 triangle mesh.

[(Planet users click here)](http://vimeo.com/2025607)

[vimeo=http://vimeo.com/2025607]

-SmSpillaz
