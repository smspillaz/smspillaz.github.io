---
author: smspillaz
comments: true
date: 2007-07-02 12:45:13+00:00
layout: post
slug: compiz-fusion-community-news-edition-8-for-july-01-2007-were-hoving-above-windows
title: 'Compiz Fusion Community News Edition 8, for July 01, 2007 : We''re hoving
  above Windows.'
wordpress_id: 47
---

**Background **: Its time for another edition of Compiz Community News and we've got me... SmSpillaz here to show you what's going on in the project. In a nutshell, we've got some new plugins showing off some stuff you have never seen before. Also, our new settings manager, CCSM has gotten some major updates.

**News in Bugs :**
- The filter box in CCSM no longer loses focus on each keystroke.
- The 'Screen' section in CCSM is not displayed if there is only one screen.
- Window titles update in Scale Addons and Ring when the window title changes.
- Lack of focus, minimize, and shade animations for applications like xine, xterm, xpdf, xdvi, xvncviewer, gitk, xfontsel, etc. is fixed.
- All animation effects except Beam Up and Burn use less CPU now.
- Some Dialog boxes that were not animated previously are now animated.
- The 'Switcher' Box no longer plays the 'Minimize' or 'Create' animation on creation. We promise.
- Glide effect now draws the back of the windows too (For rotation angles above 90 degrees).
- A Beam Up bug is fixed that caused wrong window opacity when using 2 different time-step values in animation settings.

**News in Internationalization (i18n) :**
We have just got translation infrastructure in place and have begun translating Compiz Fusion into many different languages. Currently supported languages are :
- English (obviously ;-) )
- German (Experimental)
- French
- Italian
More languages coming soon. :)

If you would like to help translate compiz-fusion in your language get in touch with cyberorg on IRC irc.freenode.net #compiz-fusion-dev.

**News in Features :**

_Compiz Configuration Settings Manager :_

Well, CCSM has got a major update. I will go through some of the smaller stuff first and then go through some of the bigger features
- New Icons
- Cube
- 3D
- Rotate
- Cube Gears
- Cube Reflex
- Scale Filter
- Tootips : All Plugin Log Descriptions are now listed in ToolTips instead of in the bar on the side. Also, all settings log descriptions are listed in tooltips.
- Categories : The 'Category' list is now fully shown instead of just a button.
- Exit : We now have an exit button on CCSM. Good if you don't use window decorations / can't run them.

_Advanced Search :_

Well, the filtering function in CCSM has gotten a major overhaul. With the filter box up the top, you can easily filter through plugins to find them. The page changes dynamically as you filter. But there is also another filtering function known as "Advanced Search." on the sidebar. Clicking on this brings us to the Advanced Search Window.
[![screenshot-compizconfig-settings-manager.png](http://smspillaz.files.wordpress.com/2007/07/screenshot-compizconfig-settings-manager.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/07/screenshot-compizconfig-settings-manager.png)

From here, you can specify what you want searched, In the Plugin, Settings Description, Settings Long Description and in the settings value. So if you remember settings something to 0, but you cant remember what, just type '0' and all settings entries that have been set to 0 will appear. A Breadcrumb navigation style allows you to select plugins, groups and subgroups easily.

Typing Stuff in the filter box dynamically makes the plugin list smaller as it only shows plugins that match those options. From there you can select the plugin and group and the option comes right before you.
[![screenshot-compizconfig-settings-manager-1.png](http://smspillaz.files.wordpress.com/2007/07/screenshot-compizconfig-settings-manager-1.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/07/screenshot-compizconfig-settings-manager-1.png)

Plugins :

The 3D plugin is here. Again. We have re-worked it to make it compatible with Compiz Core. It is basically the same as the 3D plugin in Beryl, but for those who have not seen it, here it is.


[![screenshot2.png](http://smspillaz.files.wordpress.com/2007/07/screenshot2.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/07/screenshot2.png)
As can be seen for some Beryl Veterans (Specifically 0.1.4 and down), a new feature called 'Window Depth' has been added. This allows you to set how big the windows are in width, instead of just 'floating pieces of paper.'

There are currently some bugs with is, specifically, if Transparent Cube is turned off, none of / parts of the desktop window is drawn, which looks ugly. The workaround is to set transparent cube opacity to 90 or below.

The plugin can be retrieved from here : git://git.opencompositing.org/fusion/plugins/3d

Also, If you are using the YAGS script, edit GITINFO.conf so that it looks like this :

GITURL : git.opencompositing.org
GITPATH : fusion/plugins
GITIGNORE="" (Take out 3D)
USE_SUDO="true"

On your next YAGS git clone, you will automatically get the 3D plugin.

**New Plugin : Screensaver**

Pafy, a new developer, has developed a 'Screensaver' plugin. This is very hard to explain, so I will give you some screenshots.

The GIT URL is as follows :
git://git.opencompositing.org/users/pafy/screensaver/

EDIT : I can't do screenshots of it for some strange reason. If anyone can submit them, it would be greatly appreciated. :)

It is based on the Fenetres Volatiles Screensaver for Mac OS X.

**This week in Packaging : **Trevino, the GIT Ubuntu packager, has included his packages and packaging tool in GIT for all to use. The URL's are as follows :

git://git.opencompositing.org/users/3v1n0/compiz-fusion-debian
git://git.opencompositing.org/users/3v1n0/compiz-fusion-debian-builder

Tip of the week : Did you know that you can set any window to be fullscreen with a keystroke? Just enable the 'Extra-Window-Management' plugin and set a keystroke to 'Toggle Fullscreen.' Mine is Shift-Super-F.
**
Conclusion **: Another week in Compiz Fusion gone by. We're narrowing down on that list of functional regressions :). I will not be able to post the blog for another two weeks as I will be away. Until then, see you ;)
_
-Another CCN is in the Can_

-SmSpillaz and the Compiz Fusion team.
