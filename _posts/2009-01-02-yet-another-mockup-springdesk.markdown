---
author: smspillaz
comments: true
date: 2009-01-02 15:30:31+00:00
layout: post
slug: yet-another-mockup-springdesk
title: 'Yet Another Mockup: SpringDesk'
wordpress_id: 376
---

So while compiz as a project settles down to sort some [big issues out](http://lists.freedesktop.org/archives/compiz/2008-December/003236.html), I'm taking my eye off of compiz, closing animation.c in gedit for a while as we decide whether or not to merge compiz++ at this point. If it does get merged while I'm working on stuff, that will turn out bad. (I hope it does get merged though) . This, in turn, is going to give me a lot of time to work on other things that I've always wanted to work on but never really had the time.

Introducing a mockup of a project I'm going to be working on for a while, under the tentative name of: **SpringDesk**

**![springdesk-mockup](http://smspillaz.files.wordpress.com/2009/01/springdesk-mockup.png)Note: **_This is a mockup made in Inkscape, not a screenshot._

Why? Well, I've always had my gripes with the current 'desktop' of the Linux Desktop. It's either like KDE4 where it can be annoying and get in your way (sorry, however it is improving) or GNOME where there is little functionality. SpringDesk strives to achieve a balance between the two, being subtle and being functional.

The name reflects the nature of the application. Firstly, it is going to be very iPhone-like, because that interface is just perfect (I don't know how well it might scale to a modern desktop). The iPhone's interface is known internally to Apple as 'SpringBoard' (and the name has been played on by extensions like '[SummerBoard](http://www.apptapp.com/summerboard/)' and '[WinterBoard](http://www.saurik.com/id/9)'), and hence the name of this project is derived from that. Also, I intend to make it fun and springy as well, putting that 'Spring' into it.

Planned Features? So far:



	
  * Written in Clutter and Python (So, you'll need DRI2 and / or nvidia to run the final product along with compiz)

	
  * Plugin System (well, duh!)

	
  * 'Shelves' feature, put stuff into 'shelves' away from the desktop to unclutter it (for neat-freaks like myself)

	
  * Single click on an icon previews it, perhaps some integration with [Gloobus](http://gloobus.wordpress.com/) later on

	
  * Animated wallpaper, clutter animations, video, etc

	
  * __COMPIZ_WALLPAPER_SUPPORTED spec, so that it works with the wallpaper plugin

	
  * Settings manager


I'll post some prototype code up on the blog within the next few weeks.
