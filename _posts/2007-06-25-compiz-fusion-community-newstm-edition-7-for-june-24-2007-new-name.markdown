---
author: smspillaz
comments: true
date: 2007-06-25 10:53:20+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/06/25/compiz-fusion-community-newstm-edition-7-for-june-24-2007-new-name/
slug: compiz-fusion-community-newstm-edition-7-for-june-24-2007-new-name
title: 'Compiz Fusion Community News(TM) edition 7 for June 24, 2007 : New Name'
wordpress_id: 40
---

**Background : **Welcome to the brand new project. **Compiz Fusion** You may already know that the name was decided by the overarching administrators and developers of this project to end the flames. Our first release is planned to be in sync with the release of Compiz Core 0.6 (u) and Compiz Core 0.5.2 (s). We are planning to use the unstable release of Compiz Core for our releases. The release will be matched by big fanfare as we are trying to make it as public as possible.
**
This week in Digg** : Our name got Dugg. It's great to see that so many people are now familiar with the new name.
**
This week in Artwork : **Well, the artwork competition has begun and we are seeing a number of great suggestions based on the original 'User Interface' Compiz logo by Srđan Prodanović (some1else).

**  ****News in Bugs :**

- CCSM reads settings lists faster, so no more lag when you click a button
- Loading time for Compiz when using the CCP plugin has been improved further
- Fixed some focus animation weirdness
- The 'Murrina' Tab bar style is now more consistent when the tab bar width is less than the height
- The 'Filter Linear' Option in Zoom now works properly

**News in Features :**
**_
TRANSPARENT CUBE IS HERE!_**

Yes, you heard that right. Go Git pull now if you haven't already because the transparent cube is here and now. Pretty much all bugs from Beryl regarding transparent cube have been fixed with the new window walking interface. Transparent Cube is now 20-40% faster in some cases. Some Obligatory Screenshots

[![snapshot1.png](http://smspillaz.files.wordpress.com/2007/06/snapshot1.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/06/snapshot1.png)[![snapshot2.png](http://smspillaz.files.wordpress.com/2007/06/snapshot2.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/06/snapshot2.png)

And there is more than that, there has been an interface for plugins to draw stuff inside the cube. There are no aquariums yet, but these functions will be very easy to add. A Demo of this is the 'Cube Gears' plugin found at git://git.opencompositing.org/fusion/plugins/gears. A screenshot :
[![snapshot5.png](http://smspillaz.files.wordpress.com/2007/06/snapshot5.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/06/snapshot5.png)

Some other usability plugins have been added too. Most notably is racarr's 'Goto-Viewport' and onestone's 'Viewport Switcher + Mouse Switcher' as well as defer's (Originally PlayerX) and maniac's experimental 'Scale Window Title Filter'

_Goto Viewport _: This plugin is simple by nature. You simply hold down <Super>+V and press a number on your keyboard (Usually 1-4, unless you have changed the Horizontal Desktop Size) After pressing one of these keys, you go straight to that viewport number. So if you know that work is one viewport 3, it's just a key shortcut away.
_
Viewport Switcher _: This plugin brings the long awaited 'scroll on desktop to switch' feature from Beryl to Compiz Fusion. Simply just scroll on the desktop and you change viewports. By default, scrolling up brings you to the viewport to the left of you and scrolling down brings you to the viewport on the right.
_
Mouse Gesture Switching :_ It doesn't stop there however, as you can now use <b>Mouse Gestures</b> to switch viewports. Simply hold down <Super>+S (I recommend that you change the Keybinding to <Ctrl><Alt>+S as <Super>+<S> is used by Group+Tab to select windows) After dong that, you just hold down these keys and then move the mouse left or right. Note that the action is more of a 'pulling' action, so holding the keys and moving the mouse to the right, will switch to the viewport to the left of you.
_
Scale Window Title Filter :_ Because it is experimental, it is not included in any build scripts. You can test it from here git://git.opencompositing.org/users/maniac/scalefilter. This plugin allows you to type the name of a window and any window that does not match the title goes away. So say if you were looking for terminal, instead of right-clicking all the time and checking, you can just type in 'Terminal' and all windows with the name 'Terminal' will appear and take up the space of the windows that have gone away because they don't match.( UPDATE : This only seems to happen when the inactive window opacity is 100%)

[![snapshot7.png](http://smspillaz.files.wordpress.com/2007/06/snapshot7.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/06/snapshot7.png)

**Other features :**
- Pulse effect now in Group+Tab, so dragging thumbnails to another tab bar will cause the tab bar to flash in reaction.
- Also there is a reflection effect when the tab bar fades in.
- You can now import and export settings profiles from CCSM.
- There is now an option in Cube Reflection to 'Auto Zoom' only on mouse rotate, so rotating the cube with keys and drag'n'drop is now less bouncy

**Packages News : **For all Ubuntu users out there (Not me), Tr3v1n0 has now started doing his Compiz Fusion GIT Debian's again. These are GIT snapshots updated daily, and do not need to be built. They also include a number of patches done by Trevinho to enhance your Compiz Fusion experience. Test packages are also available for openSUSE.

**Tip of the Week **: Did you know that the 'ShowDesktop' Plugin can be activated on a hotcorner? There is no 'hotcorner' setting in the 'showdesktop' settings page, but if you go into 'Core Options' in CCSM and type in the Filter Box 'Hide all windows and Show the Desktop,' you will find that you can set it to a hotcorner. With ShowDesktop enabled, I have set it to the bottom right corner. Enjoy! ;)

**NOTICE : **Due to the 'Compiz-Fusion' rename, ALL PACKAGES have been renamed. In GIT, the /compcomm directory had been changed to /fusion. Please update your scripts accordingly.

Conclusion : New Name and great new plugins :) Damn I love compiz-fusion ;)

_- Another CCN is in the Can!_

**- SmSpillaz and the Compiz-Fusion Team :)**
