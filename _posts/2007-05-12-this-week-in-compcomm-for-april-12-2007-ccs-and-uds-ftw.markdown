---
author: smspillaz
comments: true
date: 2007-05-12 14:14:11+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/05/12/this-week-in-compcomm-for-april-12-2007-ccs-and-uds-ftw/
slug: this-week-in-compcomm-for-april-12-2007-ccs-and-uds-ftw
title: 'This WEEK in CompComm for May - (Not April O_o) 12 2007 : CCS and UDS FTW!'
wordpress_id: 3
---

**Backround **: Well, the last two weeks have been weeks of organization. We're finally figuring our how everything is going to work. There have also been many changes in the way the software is organized and things are finally starting to integrate. Some new plugins have appeared too, and some really neat stuff has been happening at the Ubuntu Developers Summit in Sevilla, Spain.

**This week in bugs fixation :**
- General cleanup in CompComm Plugins Good
- Animation and winrules have been ported to the metadata system
- All plugins can now install schema files automatically
- JPEG plugin can now be disabled at build-time
- Wall moving system cleaned up (includes fixes for move-with-window on multihead as well as the possibility to move multiple viewports in quick succession)
- Fixed some fullscreen weirdnesses in extrawm as well as winrules
- Memory usage fixes in group
- BCOP (Beryl-Compiz options parser) now tells you what went wrong
- --replace option now works again in Compiz-Core
- Code cleanup in Compiz-Core
- Switcher window doesn't play the "Minimize" animation when it appears.
- VTable stuff moved to the new metadata system
- Fixed window artifacts left behind
- Fixed some stuff in ccs-lib
- Fixed metadata in plugins so you can change some settings and they actually apply. (Namely animation and rotate)
-Switcher is also painted properly now - (No more window border)

**This week in features :**

Some brand new stuff has come to the project:

Wall's Expo Mode has been separated from the Desktop Wall plugin. For those who don't know, the Desktop Wall plugin has a great feature called "Expo Mode" where pressing Ctrl-E will zoom out all four desktops and allow you to click and drag windows to move them to other desktops from wall. However, a problem with Wall, is that it's desktop switching abilities made it conflict with the Desktop Cube plugin, meaning you had to pick between functionality and eye-candy. Now you can have the best of both worlds ;-)

Also, you can now use the simplicity of wall without the memory footprint of expo.

This week in organization : Well, as I have said earlier, GIT has become a lot more organised and project names have been clarified

- LibBS is know known as CCS (Compiz Configuration System)
- Check out gitweb.opencompositing.org for the new repos
- There are now 2 sets of plugins, CompComm-Plugins-Good and CompComm-Plugins-Addon
- There is a new settings manager in development called CCSM, however it is not yet stable and I recommend using the old CCS Manager for now (Don't confuse that with CCSM ;-) )

**Tip of the Week:** I am writing a new section called tip-of-the-week to tell you something that you may not have known about CompComm already.

Did you know that you can do some pretty cool stuff with the minimize plugin? As the minimize plugin only translates window positions you can have other animations playing while windows are minimizing. All you have to do is check the Minimize Effect plugin and the "Animation" Plugin in CCS (Make sure you have animation) then change the "Minimize effect" in Animation to something other than "Magic lamp" (As that looks ugly). I currently have Glide 2 for minimize and Minimize effect on at the same time and it looks very nice ;-).

**UDS Sevilla** : Recently, some of the CompComm developers went to the Ubuntu Developers Summit in Sevilla, Spain. They have shown off a bunch of cool new stuff and have convinced pretty much everyone on the composite-by-default spec in Ubuntu Gutsy. This means that we may see CompComm featured as the default window manager in Ubuntu Gutsy Gibbon (7.10) if the system is capable of Composite. This will see a huge boost in people using CompComm and Linux as well! Bravo!

**This week in other news** : KDE 4 Alpha 1 is out! There is no plama compositioned goodness yet but it looks pretty awesome ;-)

http://dot.kde.org/1178891375/

**Conclusion** : Well this fortnight has been an interesting one and things in CompComm are starting to take shape. I hope you enjoyed this edition of "This Week in CompComm" and if you have any queries then just post them down below

_Another TwiCC is in the Can!_

- SmSpillaz
