---
author: smspillaz
comments: true
date: 2011-01-21 09:58:28+00:00
layout: post
slug: unity-window-decorator
title: Unity Window Decorator
wordpress_id: 750
---

Some folks have been asking me about this strange new [repository](http://git.compiz.org/~smspillaz/unity-window-decorator/) which popped up on git few weeks ago, called unity-window-decorator. So that there isn't any confusion, I might clarify exactly what that is so that people don't get confused. Basically, it is a feature fork of the GTK window decorator that ships with compiz (yeah, I know, an upstream forking their own project, wtf right?). Anyways, there isn't really anything that big to it at the moment, all it does is add support for reading and rendering some extra properties which I hacked into the metacity theme spec (which explains that [other](http://git.compiz.org/~smspillaz/metacity/) repository) such as shadow radius/opacity/offset for different window states (eg the theme can define different shadows for maximized, focused etc windows) and also adds support for defining an "invisible grab area" around the side of the window so that you can have windows with really thin borders, but still grab in the shadow area just outside the window.

The reason this is a fork (for now) is because it does depend on those changes to libmetacity-private and it makes no sense for the compiz project to ship a decorator which depends on a patched library. The plan is, of course, to get the changes to the metacity theme spec upstreamed once I've finished working on them and to merge the changes made to unity-window-decorator back into the upstream gtk-window-decorator. But otherwise there's nothing too much to get excited about - just some small changes to make the experience slightly better :)

Also, I might just let the rest of the community know for now that the fix for menus and other windows being stacked weirdly at times (most likely at login) is being worked on (by me) and hopefully there will be a fix for it soon. It is unfortunately a rather complicated issue to do with the stacking code in compiz, where a race condition can happen which can cause the tracked stack and the X11 stack to become wayyyy out of sync (this is why your menus are functional as normal but painted in the wrong order). And another unfortunate thing is that it seems that everyone is able to reproduce the bug *except* me (my oh my I enjoy a working system!) I'll update everyone once the bug is actually fixed.

**Update:** Fixed!
