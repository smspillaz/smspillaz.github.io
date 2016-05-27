---
author: smspillaz
comments: true
date: 2009-10-29 09:52:12+00:00
layout: post
link: https://smspillaz.wordpress.com/2009/10/29/debunking-the-compiz-is-so-bloated-myth/
slug: debunking-the-compiz-is-so-bloated-myth
title: Debunking the 'compiz is so bloated' myth
wordpress_id: 504
---

I've got a Google Alerts hint set on compiz. That means that whenever something new pops up in Google's index about compiz, I'm usually one of the first to know. Google sends me a nice little email saying exactly who is saying what about it.

A recent trend I've noticed is [this](http://dev.compiz-fusion.org/~cyberorg/2009/03/19/compiz-082-fully-released/#comment-5832) [myth](http://blog.thesilentnumber.me/2009/09/dropping-compiz-for-mutter-metacity-3.html) [that](http://forums.fedoraforum.org/showthread.php?t=221474) [compiz](http://news.ycombinator.com/item?id=458055) [is](http://cybernetnews.com/compiz-fusion-adds-cylinder-effect/) [bloated](http://en.wikipedia.org/wiki/Software_bloat).

My argument here is that compiz is not **bloated** but rather it is **modular.**

That last link is a nice little definition of bloat from Wikipedia:


<blockquote>**Software bloat** is a term used to describe the tendency of newer [computer programs](http://en.wikipedia.org/wiki/Computer_program) to have a larger installation footprint, or have many unnecessary features that are not used by end users, or just generally use more system resources than necessary, while offering little or no benefit to its users. - (c) Wikimedia Foundation</blockquote>


So the way I see it, there are three ways of defining software bloat:



	
  * Large installation footprint

	
  * Lots of unnecessary features

	
  * Large memory / CPU footprint


I'm going to be focusing on the last one more, since that is the one that would be of most concern.

**Large installation footprint:**

Considering the fact that compiz has tons of plugins, the installation footprint of compiz tends to be quite large. Perhaps not as large as most windows applications these days but certainly larger than your typical window manager. However compiz by definition is a modular window manager. The size of the actual executable for compiz-0.8 with debug symbols and all is 909.3KB as I measure it here. Metacity comes in at a more lightweight 531.1 KB but it doesn't have a plugin interface (that I know of). Compiz 0.9 is slightly heavier at about 3.3MB but is written in C++ which means lots of symbol mangling and repetition but it has the OpenGL and Composite bits ripped out. This makes it rather lightweight for a C++ version of compiz. (libopengl.so is about 2.0 MB, libcomposite.so comes it at about 842 KB)

Compiz has gotten a bit bigger in that sense but it has been redesigned so that it is not as bloated by including so many features in it's core. You can use compiz as a similar window manager to metacity without all the opengl and composite stuff.

What tends to be large is all the plugins compiz comes with. You have move, resize, place and decoration as sort of essential plugins (all quite small) but then you have the plugin packs with quite large plugins. However compiz itself is quite small.

**Lots of useless features that nobody ever uses**

A fairly good example of bloatware was probably the first one that comes to mind, which was Windows Vista that comes from our friends at Redmond. You're probably thinking though 'You so crazy! Comparing a window manager to an OS!'. But consider this, most of the 'features' that came with Vista that nobody ever used or wanted (*cough* Windows Mail *cough cough* Windows Activation) were part of the core distribution of the OS. The compiz plugins, asides from Move, Resize and Place are not really.

YouTube videos tend to show off how much bling you can fit in a 10 minute screencast with compiz. That causes some pundit to say 'Wow, look how pointless that is' which eventually manifests into 'Compiz is bloated because some pundit saw useless compiz features on YouTube and didn't actually use a minimal version of compiz'. Remember that all this 'useless bling' are implemented in plugins, we have very strict rules about what goes in core and the more stuff that can be taken out of core the better. (Example: [OBS](http://git.compiz.org/compiz/core/tree/plugins/obs) [plugin](http://wiki.compiz.org/Plugins/Bs), or more recently the entire OpenGL and compositing bits).

In compiz 0.9 we have a CMake buildsystem that allows for very flexible builds of lots of plugins in one pack or just a few. It is possible for distributions to ship a version of compiz with just the core functionality quite easily.

**Memory / CPU footprint**

People seem to be concerned these days with 'the amount of memory and CPU time compiz take up'. First of all, if compiz or Xorg have high CPU time /when idle/ than it is most likely your broken proprietary graphics driver. Rendering should not happen on the CPU. Secondly, just in case the WRAP loops for lots of plugins do happen to take up CPU time when they just check variables then disable them, we have added code that allows plugins to have their functions called at all, which means less CPU time wasted on superfluous variable checking every paint cycle.

Planet readers, here is where it starts to look ugly, so for the memory argument, please just hit the more tag

<!-- more -->

Memory footprint is another issue. We've been doing lots of work to try and reduce memory leaks in compiz. I did some investigating and here is what I found.

EDIT: Lucas Murray (KWin developer) suggested that top and normal system monitors aren't an entirely accurate measure of memory usage. This post should really be rewritten in terms of the [exmap](http://www.berthels.co.uk/exmap/) tool which is more accurate. However, the numbers don't necessarily matter here, rather just that compiz is on-par with other window managers in terms of memory usage and that loading lots of compiz plugins will obviously make it take up more memory.

![Screenshot-System Monitor](http://smspillaz.files.wordpress.com/2009/10/screenshot-system-monitor.png?w=1024)That is compiz 0.9 running with one window open and with OpenGL and composite modes disabled with only Move, Resize, Place and Decoration. As we can see here, compiz uses about 4.4 MB of memory, shares about 5.2 MB most likely with GLX or the X Server and has about 29MB swapped out because it's not in use. Not too big of a memory footprint. Now let's compare it to Metacity with no compositing.

![Screenshot-System Monitor-metacity-no-composite](http://smspillaz.files.wordpress.com/2009/10/screenshot-system-monitor-metacity-no-composite1.png?w=1024)Metacity with no compositing comes in at about 2.6 MB. It's lightweight but it does not need to deal with having a plugin system loaded in. Stepping things up a bit, let's turn on compositing.

![Screenshot-System Monitor-Metacity](http://smspillaz.files.wordpress.com/2009/10/screenshot-system-monitor-metacity.png?w=1024)Here we have Metacity using 9.9 MB of memory and lots of swapped out memory. This is compositing using XRender only, so there is no need to worry about texture memory and the like. But what about compiz?

![Screenshot-System Monitor-compiz-minimal](http://smspillaz.files.wordpress.com/2009/10/screenshot-system-monitor-compiz-minimal.png?w=1024)Compiz is on here using only the OpenGL, Composite, Move, Resize and Place plugins which is the core functionality I keep referring to. We are using about 8.2 MB of memory and 10.3 of shared memory with is probably for storing GL Textures in RAM. Not too much virtual memory - only 50MB, although virtual memory is not a good measure of real footprint (The kernel on Mac OS X uses up to 10GB of virtual memory sometimes!). Metacity doesn't have a GL-based compositing mode that could be close to compiz functionality wise, they are only adding that in Mutter and that is, as the name suggests, clutter based. Unfortunately, I've not much luck getting Mutter to run on my own machine, so I'm running it in a VM with Ubuntu Karmic Beta.

![Screenshot-Ubuntu Karmic Beta [Running] - Sun VirtualBox mutter default](http://smspillaz.files.wordpress.com/2009/10/screenshot-ubuntu-karmic-beta-running-sun-virtualbox-mutter-default.png?w=1024)Probably not as visible here - obviously the DRI implementation in VirtualBox has some issues (But keep it up VBox devs! :) ), but as we can see the basic gnome-shell mode of Mutter uses 36.5 MB with GL based compositing. To be fair, Mutter probably pulls in a lot of clutter code into it's execution and thus it's memory footprint will obviously be higher. But even compared to a lightweight window manager, compiz is still not bloated in it's modular form. I decided to take things up a notch a little to demonstrate my point, I also grabbed a screenshot of compiz in the default 'extra' settings mode in Ubuntu Karmic:

![Screenshot-Ubuntu Karmic Beta [Running] - Sun VirtualBox compiz default](http://smspillaz.files.wordpress.com/2009/10/screenshot-ubuntu-karmic-beta-running-sun-virtualbox-compiz-default.png?w=1024)Here we can see that compiz uses about 26MB of memory, that is with expo, cube (iirc), wobbly, animation and friends enabled. Showing that as you increase the number of plugins loaded, the memory goes up. I also decided to take it to the most ridiculous level ever for the sake of proving a point.

![Bling Bling](http://smspillaz.files.wordpress.com/2009/10/bling-bling.png?w=1024)That there is compiz with pretty much every plugin enabled. It looks so ubly that I don't know why anyone would really want to use a setup that looked like that O.o

![Screenshot-System Monitor-1 bling bling](http://smspillaz.files.wordpress.com/2009/10/screenshot-system-monitor-1-bling-bling.png?w=1024)I tried really hard to get this screenshot, which I had trouble reading initially (with bling on top of your windows it looks crap). As we can see here, we are using about 57.8 MB of memory and about 18 MB of that is shared.

Point is, loading every plugin in the book is going to make compiz use _far more memory_ than metacity with no compositing.

**tl;dr**: So please, don't just call compiz bloated because people enable every single plugin then make a 10 minute screencase of wobbly spinning firey watery cubes at a framerate of 2FPS because their system is frying eggs, making toast and running screencap software because compiz is not like that. Compiz, by design is a completely modular window manager. There are just loads and loads and loads of plugins for it. You don't call GNOME or KDE bloated because there are lots of applications for it or lots of themes for it right?

Anyways, back to study. I have the [TEE](http://en.wikipedia.org/wiki/Tertiary_Entrance_Exam) to get on with in a few days.

- Sm
