---
author: smspillaz
comments: true
date: 2009-01-30 11:56:25+00:00
layout: post
link: https://smspillaz.wordpress.com/2009/01/30/apparantly-were-hated-now/
slug: apparantly-were-hated-now
title: Apparantly we're hated now
wordpress_id: 403
---

Or at least, [one particular famous individual has finally written a rant about us](http://linuxhaters.blogspot.com/2009/01/wobbly-compiz.html). So in the traditional Developer vs Linux Hater type post, I shall address his concerns. Perhaps he'll get back to me, I'd love to have a debate with this guy. Yes, I know the nature of his blog is supposed to be facetious and we are supposed to take what he says with a grain of salt. So here it is, point by point deconstruction of his little rant.

**"What's this? You say compiz is dying? And in true open source fashion [quote]?"**

Perhaps so my friend. Yes, we have suffered a slight case of lead-developer-goes-away for-a while-and-leaves-the-project-in-disarray  howerver I'd like to mention that amongst all the FUD that has been going around things have changed. If you read the minutes of the last Compiz conference call with David you'll find that we're in the process of setting up new leadership and direction for the project. Compiz has got a very bright future to look towards this year.

**"Don’t worry about bad drivers or not being able to smoothly resize windows"**

*ahem*

I'd talk to ATI/NVIDIA about that one. Most of the bad resize performance is due to the fact that they re-bind textures inefficiently. On some cards, it is just as slow or slower on Mac OS X or Vista. Go figure.

However, if you do take the open source route which I figure that you don't like all that much, you'll find that windows do resize smoothly (or at least they should in theory).

Of course it's about the experience. I wouldn't expect Linux Hater to know much about graphics drivers.

**"No amount of wobbling is going to make a user switch to Linux"**

O RLY?

Yes, I could show somebody my computer and wobble a few windows in their place. They'll probably just point out "There is no point to that." Yes, point taken there is no point to that. It looks cool, however and to some people it really shows an amount of polish where instead of having 'Linux is just another OS' we have 'Linux is just another OS and it's presentation is _phenomenal_' I have convinced many people to at least give Linux a try and they are sold when they see how advanced-looking compiz is.

**"Even if you’re going to keep working on this, why not try to do it in a way that doesn’t break stuff that already worked? Like video? or OpenGL apps?"**

Again, clear ignorance that those kind of issues are not within our control =).

Seriously speaking though, I can say that I have gotten upwards of 300FPS when playing _Windows_ games like Warcraft III even while compiz is turned on. No bad video performance. Etc.

Perhaps he is talking about a lack of redirected-direct-rendering, which has been plaguing us for a long time now. I'd like to point out that things have changed, or at least the next version of [ubuntu will ship with GEM](http://forums.vr-zone.com/showthread.php?t=354733), which, when configured correctly will allow for things like accellerated OGL inside wobbly windows.

Again, though, he probably doesn't know much about drivers and I don't blame him. I can assure you that things will get better though =)

So there you have it. A small deconstruction of your rant and addressing some of the main flaws you brought up. Interesting to find that most of your rant was not really regarding issues with compiz but issues with other things.

**On a totally unrelated note**:

It looks like the developers will be going ahead with Compiz++ and we have silently been porting plugins. On the list of plugins that are ported (but by no mean absolutely stable:



	
  * Move

	
  * Resize,

	
  * Place,

	
  * Switcher,

	
  * Scale,

	
  * 'Copy Rendering' (Not for production use)

	
  * Decoration

	
  * Wall

	
  * Snap

	
  * Lazypointer

	
  * Throw

	
  * Flash

	
  * Text

	
  * Mousepoll (Not commited yet)

	
  * Fadedesktop

	
  * Resizeinfo (Not commited yet)


I'm sure there is more, but that is the progress I can remember off the top of my head.

-Sm
