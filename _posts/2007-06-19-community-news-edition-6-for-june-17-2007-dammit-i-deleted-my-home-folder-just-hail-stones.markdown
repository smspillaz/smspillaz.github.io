---
author: smspillaz
comments: true
date: 2007-06-19 14:18:32+00:00
layout: post
slug: community-news-edition-6-for-june-17-2007-dammit-i-deleted-my-home-folder-just-hail-stones
title: 'Community News edition 6 for  June 17, 2007 : Dammit, I deleted my home folder
  - just hail stones.'
wordpress_id: 30
---

**Background **: Another weekly blog update here for you reporting about the current state of super-ultra-mega-fun-good-compositing-shinyness (Maybe that should become the name....) Anyways, lots of changes this week and a new plugin for us all to try out. Lets begin.
**
News in Bugs:**

- Settings Profiles work properly in the GConf backend of CCS.
- Profile / Intergration options are grayed out if not supported by the backend.
- Tabs don't change names when filtering through ccsm options
- Plugins conflicts now work properly in CCSM
- Fixed weird background in CCSM when using dark GTK themes
- Compiz Loads faster when using the CCP plugin

**News in Features :**

**All hail onestone :D**

Our friend onestone has done it again with the new Cube Reflection Plugin!

[![screenshot.png](http://smspillaz.files.wordpress.com/2007/06/screenshot.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/06/screenshot.png)

This plugin draws a reflection of the cube and works similar to the Expo Reflection you saw last week. You can do almost anything you can with Expo Reflection with Cube Reflection. You can change the ground size and colour
[![screenshot-1.png](http://smspillaz.files.wordpress.com/2007/06/screenshot-1.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/06/screenshot-1.png)

It also plays very nice if you are using a skydome!

[![screenshot-2.png](http://smspillaz.files.wordpress.com/2007/06/screenshot-2.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/06/screenshot-2.png)

Also, there are 4 different reflection modes for you to try out. One makes the cube rest upon the reflection and bounce off of it. Another makes the reflection rest on the cube so that you can rotate the cube freely. Another makes the relfection not bouncy when looking at the top face and the final one makes the reflection distant from the cube and none of them are bouncy. The cube reflection plugin is also smart enough to zoom out the cube if you can't see the reflection, but this can be turned off if you want it to.

Not only that, but you can now zoom out while the cube is rotating. You can control this zoom level from 0-2 with 2 being a higher level than Beyrl's max - 15. The option is in the rotate plugin.

Compiz Workarounds :

This new plugin allows you to work-around some bugs found in legacy applications such as WINE, OpenOffice and GTK 1x. It pretty much allows you to avoid some fullscreen weirdness, appliations not moving or being mapped in the wrong place.

Other features :
- You can now control the amount of time it takes for Expo to zoom out on initiation.
- Group + Tab's tab bar now has a reflective animation! Looks shiny :D
- The 'Reflex' Plugin allows you to disable the image moving around when moving a window.
- The GLIB plugin now works together properly with CCSM.

This week in names : Well, the name decision has been postponed yet again. Hang in there folks while we get some stuff sorted out :D.

Tip of the week : You may not have known this, but it is possible to change quite a lot of things about window decorations. For example, you can change the shadow colour, shadow radius, shadow opacity, shadow offset and with wonderful window matching - which windows have shadows. However, there are two different ways to do this, one for GTK-Window-Decorator (GNOME Themes and Cairo Themes) and KDE-Window-Decorator (KDE Themes) and one for Emerald (Custom themes)

Emerald : Excecute
(Indent) emerald-theme-manager
- Click on a theme
- Click the 'Edit Themes' Tab
- Click the 'Frame/Shadows' Tab underneath the first tabs.

[![screenshot-emerald-themer-030-svn.png](http://smspillaz.files.wordpress.com/2007/06/screenshot-emerald-themer-030-svn.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/06/screenshot-emerald-themer-030-svn.png)
You can change the shadow settings from there. You can also change how big the borders are too.

GNOME-Decorator:

Because GTK-Window-Decorator looks in some Compiz GConf keys and not your specific settings backend, we need to change the settings backend to GConf so that we are writing to what GTK-Window-Decorator is reading from.

Firstly, we need to make sure that the GConf Backend to CCS-Lib is installed (gconf plugin is also enough). To check for this, type in a terminal

(indent) cd /usr/local/lib/compizconfig/backends && ls -a | grep gconf

If you get this:

[![screenshot-terminal-samacer-susepizconfig-backends.png](http://smspillaz.files.wordpress.com/2007/06/screenshot-terminal-samacer-susepizconfig-backends.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/06/screenshot-terminal-samacer-susepizconfig-backends.png)

Then the GConf Backend is installed and you may skip the next step. If it is not like that, then run in a terminal :


<blockquote>*git clone git://anongit.opencompositing.org/compcomm/compiz-configuration-system/libraries/ccs-backend-gconf
./autogen.sh --prefix=/usr/local
make
make install</blockquote>


NOTE : If you are experienced with GConf, you can also use GConf-Editor to change these settings. They are located in /apps/compiz/plugins/decoration

Once the backend is installed, we need to change the settings backend to GConf temporarily, to do this, excecute


<blockquote>'ccsm'</blockquote>


And find the  button on the left that says 'Backend and Profile.' Click on it. You are brought to the Profile and Backend Page. From here you can change settings backends and profiles.
[![screenshot-compizconfig-settings-manager.png](http://smspillaz.files.wordpress.com/2007/06/screenshot-compizconfig-settings-manager.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/06/screenshot-compizconfig-settings-manager.png)
Now click on the ComboBox in the 'Backend' Section and hit 'GConf Backend'

NOTE : Compiz Core may crash. Make sure you have a way to relaunch Compiz. The reason for that is some yet-unresolved weirdness in GLIB.

Now, click on the back button and find the 'Decoration' Plugin. Click on it. From here, you can change all the shadow settings. You can also use window matches to specify which windows have decorations or shadows. So, for example

!title=.*Firefox

Will make every window EXCEPT FireFox have a decoration.

You probably do not want to stay on the GConf backend as all of your settings would have to be re-done. So to go back to ini, but preserve the Decoration settings, Hit the Backend and Profile button, and in the ComboBox, select 'Flat-File Backend.' The shadow settings will be preserved and your old settings for other plugins will be back. Horray!

KDE-Decorations : Make sure that the 'DBUS' Plugin is loaded (Under "Utility" in CCSM), then directely edit the settings in the 'Decoration' Plugin. You do not need to change the backend.

This week in idiot decisions by me : If you haven't already heard, I deleted my Home Folder. How? Well, I have a Backup partition mounted at /home/SmSpillaz/Share and I moved everything there so that when I cleared out the old home folder to make a new user, I wouldn't lose all my stuff. What I forgot to do was to unmount the partition before clearing the folder. Turns out I lost everything in the Backup Partition. I did have backups of all important documents and assignments, but I was back to sqaure one on config and whatnot. Thanks for you best wishes :D

Conclusion : Well, we've had a great week down here at opencompositing. IF you need any inquiries, just pop me an email at SmSpillaz(at)gmail(dot)com(I GET NO - NOT SPAM... rawr...) The whole community is hoping that the arguments that seem to be going on will be sorted out soon.

-Another CN is in the can!

-SmSpillaz and the OpenCompositing Team.

EDIT : I am aware that the git link for *CCS-Gconf-Backend was cut off. This is the link :

git clone git://anongit.opencompositing.org/compcomm/compiz-configuration-system/libraries/ccs-backend-gconf

SmSpillaz
