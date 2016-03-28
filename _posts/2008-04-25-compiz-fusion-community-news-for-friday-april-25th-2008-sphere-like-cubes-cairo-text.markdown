---
author: smspillaz
comments: true
date: 2008-04-25 10:44:22+00:00
layout: post
slug: compiz-fusion-community-news-for-friday-april-25th-2008-sphere-like-cubes-cairo-text
title: 'Compiz Fusion Community News for Friday April 25th, 2008: Sphere-like cubes
  cairo-text!'
wordpress_id: 257
---

Hello!

More and more improvements to the Compiz Fusion codebase this week, some highlights including: **Sphere-like cube deformation**, **cairo text backgrounds** and **workspace naming.**

<!-- more -->


## News in Bugs





	
  * CCSM now checks for action conflicts when you enable a plugin, instead of just checking when a binding a changed

	
  * Fix 'rotating cube' mode not working in the screensaver plugin

	
  * Fix lighting with cube cylinder deformation

	
  * Fix occasional animation not progressing and trails when using the cube cylinder deformation

	
  * Avoid unnecessary queries to texture targets in core

	
  * Plane plugin removed. Please use wall

	
  * Cube background painting removed. Used the wallpaper plugin

	
  * Temporary fix for display issues with freewins and cubeaddon

	
  * Fix jumpy animation with slow-mo and the freewins reset and movement animations

	
  * Fix all possible freezes in animation **_for good_**

	
  * Fix Compiz-Fusion-Settings and Simple-CCSM for new CCM API




## News in Features


**Cube Addon 'Sphere Like' mode**

Well **onestone** has added another deformation to the to the Cube Addons plugin, called 'Sphere-like' due to popular request to have a sphere. The reason why this is not a sphere is because of the way drawing of cube-caps are handled in the cube plugin. Below are some screenshots:

[![](http://smspillaz.files.wordpress.com/2008/04/cubedeform4.png?w=300)](http://smspillaz.files.wordpress.com/2008/04/cubedeform4.png)

[![](http://smspillaz.files.wordpress.com/2008/04/cubedeform51.png?w=300)](http://smspillaz.files.wordpress.com/2008/04/cubedeform51.png)

[![](http://smspillaz.files.wordpress.com/2008/04/cubedeform6.png?w=300)](http://smspillaz.files.wordpress.com/2008/04/cubedeform6.png)

**Customizable Workspace names**

**maniac** has created a new plugin which allows you to assign a name workspace and have that name displayed when the workspace changes. Below is a screenshot:

[![](http://smspillaz.files.wordpress.com/2008/04/cubedeform7.png?w=300)](http://smspillaz.files.wordpress.com/2008/04/cubedeform7.png)

In related news, **iXce** has added mode to text rendering to render much smoother backgrounds on the text. You will notice this in all plugins that use text rendering such as ring, shift, prompt, workspacenames, scalefilter and scaleaddon

**CCSM relayout**

Due to the increasing number of plugins, the layout of the CCSM main page has been modified slightly to become more compact, so the window does not take up so much space on screen and you don't have to scroll as much. Below is a screenshot:

[![](http://smspillaz.files.wordpress.com/2008/04/ccsm.png?w=300)](http://smspillaz.files.wordpress.com/2008/04/ccsm.png)



	
  * Added customizable border and size configurations for viewport previews in wall

	
  * Dodge plugin now on git

	
  * Progress on the freewins re-write for input redirection and trackball rotation


.


## Cairo-Dock improvements:


**More improvements to cairo-dock again, this time it now supports reflections!**

[![](http://smspillaz.files.wordpress.com/2008/04/cairo-dock.png?w=300)](http://smspillaz.files.wordpress.com/2008/04/cairo-dock.png)

You can get it by using

_svn co http://**svn**.berlios.de/svnroot/**repos**/**cairo**-**dock**/trunk_

Don't use the install script as it is broken. Instead use the following command in the build directory:

_autoreconf -isvf && ./configure && make && sudo make install
_

**Fyda **has created a script to install the modules and plugins hosted [here](http://smspillaz.googlepages.com/cdock_plugins.sh) (Disclaimer: It's hacky)[
](http://smspillaz.googlepages.com/cdock_plugins.sh)


## Tip of the Week


Want to preview your screensaver configuration in the screensaver plugin without having to wait for the screensaver to initiate? Just set a keybinding for **_CCSM->Screensaver->Bindings->Initiate_**

Well that's it for this week. Go checkout the git sources now! :D

[(Digg, Digg!)](http://digg.com/linux_unix/Compiz_Fusion_updates_and_new_feature_desktop_sphere)
