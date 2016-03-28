---
author: smspillaz
comments: true
date: 2011-07-15 21:25:03+00:00
layout: post
slug: maximized-windows-which-must-be-larger-than-the-screen-size
title: Maximized windows which must be larger than the screen size
wordpress_id: 801
---

There's been an odd case that I've not seen one window manager be able to handle correctly. It's the case where you are required to resize a window to be smaller than than it's defined minimum size, because you are tiling it, semi-maximizing it or maximizing it. Basically attempting to fit a big object into a small space because the user requested it.

Compiz hasn't really handled this case all that well in the past - the default behavior (after staring at the code some time) seems to be to try to get as much of the window on-screen as possible, so if the top is offscreen move it down, if the bottom is offscreen move it up. Unfortunately this solution isn't perfect, and it lead to an interesting bug where doing anything to restack the window would cause it to jump around, because if it wasn't partially offscreen one way, it was partially offscreen the other and compiz would try to re-adjust that part to bring it back on screen.

[![](http://smspillaz.files.wordpress.com/2011/07/screenshot-at-2011-07-16-045353.png)](http://smspillaz.files.wordpress.com/2011/07/screenshot-at-2011-07-16-045353.png)For now what I've done is followed the good advice given to me by [Jason Smith](http://codearmada.com) and disabled vertical or horizontal maximization in cases where it is not possible to sanely maximize that window. And in multimonitor cases, we now try to maximize on the monitor the window is most on first, and failing that, the closest possible monitor that can accomadate the minimum size of that window.

Of course, this solution isn't perfect either ... now instead of explaining to users why parts of their window aren't visible when they are maximized or tiled I now need to explain why some windows show the maximize button on small resolutions and others don't.

This got me thinking though, what _is_ the best way to handle this case? I'd like to be able to fit my huge window into a small space, but I need a way to get at all of its contents. I guess there are a couple of ways of doing it.



	
  1. Clip the drawing of the window using OpenGL and allow the user to alt-drag the window around withing the constrained box such that the visible parts of the window never leave the box. This would be the easiest thing to implement but it's not obvious how it would work

	
  2. Clip the window within its frame and allow it to pan around inside the frame. This is a much prettier solution, we could even have things like scrollbars for the window or some mouse actions to pan the window around. Of course, it requires a LOT more work in core and heavily breaks the assumption that the window is always going to be within the same place in its parent window

	
  3. Scale the window down so that the user can see everything, scale it back up again on hover and use the mouse to pan it around (sort of like a mini-zoom). I guess this is possible, but not without some hard work because of the lack of input transformation in X.




What is your take on this?
