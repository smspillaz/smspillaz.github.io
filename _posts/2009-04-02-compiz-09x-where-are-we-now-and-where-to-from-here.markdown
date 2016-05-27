---
author: smspillaz
comments: true
date: 2009-04-02 10:41:52+00:00
layout: post
link: https://smspillaz.wordpress.com/2009/04/02/compiz-09x-where-are-we-now-and-where-to-from-here/
slug: compiz-09x-where-are-we-now-and-where-to-from-here
title: Compiz 0.9.x - Where are we now, and where to from here
wordpress_id: 446
---

Hi everyone.

Hope you didn't mind my obnoxious April Fools joke yesterday, it was just an idea myself and racarr threw around in IRC :p.

Anyways, this post is about Compiz 0.9.x (formerly 'compiz++'). Compiz 0.9.x started in december when **onestone** announced his core rewrite on the mailing list. It had features like pluggable output backends, written in c++ (and a few nice interfaces that came with it) and other misc bits and pieces. It was designed mostly in mind to overcome a lot of the design problems we were having, like plugin-plugins and a ridiculous amound of code to manage lists. In Janurary, some developers started to toy around with it and at the beginning of this February, we announced that compiz++ would become the base for the 0.9.x series and the 0.9.x series would features some major reworks. We've all been quite busy during that time - so we've done whatever possible to push the branch forwards.

**Where are we now?**

Currently, we are in the process of porting plugins to the 0.9.x branch. If you've observing cgit you might see 'compiz++' branches pop up in various plugins. This is where all the work is being done. Currently (off the top of my head) we've ported quite a number of plugins (about 1/3 of them), with significant ones being scale, switcher, text, mousepoll, wall, expo. There has been some other work than porting plugins of course - we've had to change quite a few things in core to make things work. Some of the bigger stuff that has happened recently though is that **onestone** made significant changes to the buildsystem - you probably know that we are using CMake instead of autotools now, so building compiz is quite different. Some of the new features include a nice color and progress bar for building core and plugins - no more random make output nobody can read. It also allows for more flexible building of plugins - there is a sample CMakeLists.txt that you can drop into a dir and it will generate the files needed to build all the plugins in that dir for example. BCOP has now also been merged into core, so the options system is unified. Not really a user thing, but significant nonetheless.

**Where to from here?**

Well, the bad news is that we still have a significant amount of work to do if we want the 0.9.x branch to be usable for anybody. Big plugins still haven't been ported - such as cube and it's addons, group/tab, wobbly, animation, elements etc. Most of the big plugins will be completely rewritten anyways (as animation is). We still have some big plans for 0.9.x, those include:



	
  * Doing something about gnome-shell. GNOME-Shell is a tricky issue for us because it integrates the window manager with the panel (or at least loads the panel as a plugin to the window manager). This basically means that if you launch compiz in future GNOME versions, you lose your panel. KDE sort of has a similar issue, in that the desktop is tied in with the panel, but that makes sense anyways because there aren't really any other desktop shells that are designed to replace the default desktop (other than SpringDesk of course, but that is on hold ATM and would probably have a panel of it's own). I already made a post to the [GNOME-desktop-devel](http://www.mail-archive.com/desktop-devel-list@gnome.org/msg15602.html) about this, but they have told me that tight integration is needed between the panel and the window manger so that the 'overview' mode can be done correctly (which I disagree with, you could just have shell expose it's drawing handle and register functions in the WM (or it's plugins) that would do the overlay mode for you). Unfortunately, their view on this is that 'people want it to Just Work (TM) and don't really care about other window managers', hence locking out compiz from GNOME. Yeah, inter-project co-operation. It sucks. We basically have two options - fork / rewrite shell and maintain it for compiz (and allow it to be compatible with it's own set of extensions), which we can't do with the amount of developers we have or convince the GNOME folks to turn shell into a lib that can easily be used with other WM's.

	
  * Options rework: Our options system has been quite inflexible for a long time and we are denying more and more requests because we can't configure such with our current settings infrastructure. The options rework would probably allow things like

	
    * Lists in lists

	
    * 'Suboptions', ie depending on what another option is, another few options can appear related to that option. This would be particularly useful with elements and animation, where you can only configure the entire effect and not on a per-entry basis (without having to look up option names and syntax etc).

	
    * A pluggable CCSM 'hints' system where plugins that require more complex configuration would store the option in a string, but the option would have hint = foo, and the CCSM plugin would allow you to configure that in a more sensible way than editing a string. Think mousegestures editor, multiple color selector for wallpaper, etc.




	
  * Merge NOMAD. Self explanitory, but the NOMAD branch should probably be merged

	
  * MPX Support. Self explanitory

	
  * Input Redirection: We'll make a big push along with the KWin, Compiz, and Mutter guys, we really need this.


So that will probably give you an outlook on how things are going to go for the 0.9.x branch. Although you'll need to be patient. All of the developers have really demanding Real Lives (TM) at this time and don't have as much time as they used to to work on compiz. 0.9 might be ready within the next two months, or the next six months depending on how things go. We'll keep you informed.

EDIT: By the way, note that these ideas are mostly tentative - depending on a number of factors they may or may not happen. GNOME-Shell is an especially tricky issue and it would be wise for us to see what happens with it.

- Sm
