---
author: smspillaz
comments: true
date: 2011-02-11 18:56:35+00:00
layout: post
link: https://smspillaz.wordpress.com/2011/02/11/better-shadows/
slug: better-shadows
title: Better Shadows
wordpress_id: 763
---

I looked into the order in which we are drawing windows and the effect that it is having on shadows today, and after a while it can start to look pretty horrible as the shadows stack up.



### Old Shadows



[![](http://smspillaz.files.wordpress.com/2011/02/bad-shadows.png)](http://smspillaz.files.wordpress.com/2011/02/bad-shadows.png)

In this situation, the menus are actually stacked on top of the panel (as transients), the panel is also stacked on top of the file browser window. This makes sense from a programmatic point of view (eg, the order of visibility), but it has a horrible effect on the shadows. Namely, a shadow is drawn around all sides of each menu and it casts on to the parent menu on the tree. With slight shadows this is not noticable, but with large shadows it looks ugly.

In addition, a panel shadow is great for when the panel is over the desktop, but it obstructs the window title for maximized windows. Thus it is not desirable in this case.



### New Shadows



I am finishing a patch which will allow us to clip these shadows in cases where they are not appropriate. The result is this:

[![](http://smspillaz.files.wordpress.com/2011/02/hot-shadows.png)](http://smspillaz.files.wordpress.com/2011/02/hot-shadows.png)

This will probably make it into the next release.

