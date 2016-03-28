---
author: smspillaz
comments: true
date: 2007-08-13 13:19:56+00:00
layout: post
slug: compiz-fusion-our-first-release-052
title: Compiz Fusion, our first release. 0.5.2
wordpress_id: 87
---

This is it. The news you have all been waiting for...

**Compiz Fusion Release 0.5.2 is out!
**
**Compiz Fusion** is the result of a merge between the Compiz community plugin set "Compiz Extras" and the window manager core independent parts of the "Beryl" project. Both Compiz Extras and Beryl have left important marks on in how we look at Window management, and with the merge, you no longer have to choose which one to use. The release marks a milestone as our first release and six months since the last release of Beryl.

We now have a composite window manager that is stable and more feature-packed than ever before. The community and developers have spent countless hours working on and improving the Compiz core, plugins, the configuration system, the configuration application and artwork.

The merge between Compiz and Beryl combined with the continuing increase in stability, reliability, and usability both in Compiz, Compiz Fusion and the surrounding software environment (better driver support, and so on) means Compiz Fusion is included in many more distributions, many of which are using it as the default window manager when possible. Ubuntu Gutsy Gibbon and openSUSE 10.3 included.

Finally, we would like to thank our enthusiastic and supportive community for helping us move forwards. We really could not have done this without your suggestions, bug reports and continued support. Thank you.

So without further ado and ramble, the Compiz Fusion team presents to you : **Compiz Fusion, Version 0.5.2**

**NOTE : **This is a Development Preview! There are still some major bugs! Do **not **install this on production machines. Our first **stable** release will be Compiz Fusion 0.6.0


New for both Compiz and Beryl users





*** New Plugins:**
-_ Firepaint_
--- Like the 'water' plugin, draw fire anywhere on screen.
- _Enhanced Zoom_
--- Zoom and continue to interact with your programs, designed with the visually impaired in mind.
- _Colorfilter plugin_
--- Filter windows or screen colors to enhance contrast or help low-visioned users.
- _Desktop Expo_
--- View all desktops at a glance and move windows between them with a beautiful reflective effect.
- _Mouse Switch, Viewport Mouse Switch and Goto-Viewport_
--- Switch viewports by scrolling on the desktop, by using mouse gestures or simply by pressing that viewport's number.
- _Cube Atlantis and Cube Gears_
--- Renders an aquarium or gears inside the transparent cube.
- _Cube Reflection_
--- Draws a reflection underneath the cube.
-_ Cube Caps_
--- Allows drawing of cube caps on top and bottom and having a slideshow of images on the caps of your cube.
- _Scale Addons_
--- Adds titles to your scaled windows and highlights them when they are hovered over.
- _Scale Window Title Filter_
--- Type the name of a window in scale mode and the windows will filter out as you type.
- _Resize Info_
--- Metacity like window resize information, with Cairo-composited goodness.
- _Extra Window Management Actions_
--- Fullscreen, focus, toggle always-on-top and sticky all with the stroke of a key.
- _Ring Switcher_
--- Switch between windows in a ring, with windows at the back getting darker and a cool new animation
- _Shift Switcher_
--- Switch between windows in a Flip3D style or in a Cover Flow style with a cool reflection effect.
- _Window Rules_
--- With the new window matching system, match windows by name, title and type to assign rules to them, like always-on-top.

*** Other new features:**
- Multiple resize modes added from Beryl and improved
- Transparent cube re-written and now faster
- Group and Tab plugin now has much smoother and aesthetic effects
- New animations for the Animation plugin
--- 'Airplane' effect folds windows up into a paper airplane and makes it fly away.
--- 'Dodge' effect makes windows move out of the way when you focus one behind them.
--- 'Fold' effect folds windows up and unfolds them on open.
--- 'Skewer' effect divides your windows in to parts and manipulates them.
- Set as many different animations as you like, you are now no longer limited to 2 Open/Close animations
- Most minimize animations now go to the taskbar where it makes sense

*** New Settings System**
- A new settings system LibCompizConfig and manager CCSM, written in C and Python respectively enables you to configure the large amount of plugins. It features
--- Backends
----- GNOME Storage Backend (GConf)
----- KDE Storage Backend (KConfig)
----- Flat-File Storage Backend (INI)
- Search
--- You can now filter out for plugins using the information bar on the left.
--- Advanced Search
----- Allows you to filter for options and option short descriptions.
----- Breadcrumb navigation style through the options
----- Profile Import/Export support in all backends
----- Each plugin has its own button in the main window, allowing for easy navigation and enabling / disabling of plugins.
- Conforms to GNOME Settings Guidelines

*** Translations :**
--- We now have Compiz Fusion translated into these languages:
--- Dutch
--- Spanish
--- French
--- Swedish
--- Portuguese
--- Chinese
--- English

**Obtaining Compiz Fusion**

Compiz Fusion can be obtained from your distributions packager or complied from the release tarball. Compiz Fusion distribution setup and packages can be found here:

[OpenSUSE 10.2](http://forum.compiz-fusion.org/showthread.php?t=1415)

[](http://forum.compiz-fusion.org/showthread.php?t=1415)[
](http://forum.compiz-fusion.org/showthread.php?t=2195) [Fedora 7](http://forum.compiz-fusion.org/showthread.php?t=2195)

[](http://forum.compiz-fusion.org/showthread.php?t=1415)
[Ubuntu Linux 7.04 and 7.10](http://forum.compiz-fusion.org/showthread.php?t=1012)

The Compiz Fusion 0.5.2 tarballs are available at [http://releases.compiz-fusion.org/0.5.2/](http://releases.compiz-fusion.org/0.5.2/) . You can verify these tarballs using the sha1sums in [http://releases.compiz-fusion.org/0.5.2/compiz-fusion-0.5.2.sha1](http://releases.compiz-fusion.org/0.5.2/compiz-fusion-0.5.2.sha1) , which are signed by Compiz Fusion Release Team GPG key (C2B8F46E) at [http://releases.compiz-fusion.org/0.5.2/compiz-fusion-0.5.2.sha1.asc](http://releases.compiz-fusion.org/0.5.2/compiz-fusion-0.5.2.sha1.asc) . The matching Compiz Core tarball is available in the compiz/ subdirectory.

Instructions on upgrading from Beryl can be found [here](http://forum.compiz-fusion.org/showthread.php?mode=hybrid&t=3157)

For more information, see onestone's forum post [here](http://forum.compiz-fusion.org/showthread.php?p=22174#post22174)

We hope you will enjoy using Compiz Fusion as much as we enjoyed writing it!

_- The Compiz Fusion Team._
