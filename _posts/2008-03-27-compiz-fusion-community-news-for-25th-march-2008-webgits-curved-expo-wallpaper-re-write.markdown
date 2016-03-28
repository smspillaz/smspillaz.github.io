---
author: smspillaz
comments: true
date: 2008-03-27 11:46:53+00:00
layout: post
slug: compiz-fusion-community-news-for-25th-march-2008-webgits-curved-expo-wallpaper-re-write
title: 'Compiz Fusion Community News for 25th March 2008: Webgits, Curved Expo, Wallpaper
  Re-Write!'
wordpress_id: 238
---

Hello There!

Welcome to yet another edition of the Compiz Fusion Community News, lots of cool new things for you to try out this time (and even more for users of those other OS's to be jealous of). This time we've got a few bugfixes, a sleek new curved expo mode, **screenlets supporting web-based widgets **and a re-write of the Wallpaper plugin.

Also new, but not covered in this post because I already covered it is the new Freewins damage and shaping engine.


## News in Bugs





	
  * Core now updates window types before applying states (preventing it from applying a window state to a potentially incorrect window)

	
  * Windows that have no minimize action associated with them will no longer minimize

	
  * Animations now finish correctly in freewins (preventing duplicate windows from being shown due a mask being set)

	
  * Atlantis2 now renders slightly faster

	
  * Fix potential crash when using simple-ccsm with another language

	
  * Windows which were minimized when compiz first starts are now unminimized with the minimize animation and not the opening animation.




## News in Features


**Webgits!**

Well, **whise** (The main developer of screenlets) has added functionality to the main screenlets branch which allows you to use web-based HTML widgets and gadgets as screenlets! Unfortunately, I'm not able to grab screenshots, but it allows you to grab the widget's code location from Google Gadgets, Spring Widgets, WidgetBox and Yourminis Widgets and display that web widget as a screenlet. Darknesssssskrad makes a great video tutorial on how to grab a widget from the web and turn it into a screenlet

[youtube=http://youtube.com/watch?v=DRFB4QhfB4U]

Web Widgets are certainly my Screenlet of the Week!

**Curved Expo Mode**

Onestone has woven his magic coding wand and brings us another eye-popping cool effect, now to the Expo plugin with the Curved Expo Display!

[![expo-curves.png](http://smspillaz.files.wordpress.com/2008/03/expo-curves.thumbnail.png)](http://smspillaz.files.wordpress.com/2008/03/expo-curves.png)[![expo-curves3.png](http://smspillaz.files.wordpress.com/2008/03/expo-curves3.thumbnail.png)](http://smspillaz.files.wordpress.com/2008/03/expo-curves3.png)

This is a normal mode with and without reflection

[![expo-curves2.png](http://smspillaz.files.wordpress.com/2008/03/expo-curves2.thumbnail.png)](http://smspillaz.files.wordpress.com/2008/03/expo-curves2.png)

Or you can make the curves very intense!

Of course, all the other expo configuration options apply; distance, reflection  and also two new options to configure the brightness and saturation of unused viewports.

**Wallpaper Re-Write**

Thanks to a re-write of the wallpaper plugin, brightness and saturation changes are now applied no matter what plugin paints the desktop window. Here is an example with multiple wallpapers with expo - before and after:

[![wallpaper.png](http://smspillaz.files.wordpress.com/2008/03/wallpaper.thumbnail.png)](http://smspillaz.files.wordpress.com/2008/03/wallpaper.png)

_Oh no!_

[![wallpaper2.png](http://smspillaz.files.wordpress.com/2008/03/wallpaper2.thumbnail.png)](http://smspillaz.files.wordpress.com/2008/03/wallpaper2.png)

_It works!_

And finally the compulsory 'Shiny Desktop With Expo' pic

[![wallpaper3.png](http://smspillaz.files.wordpress.com/2008/03/wallpaper3.thumbnail.png)](http://smspillaz.files.wordpress.com/2008/03/wallpaper3.png)

It still requires that you[ patch your desktop manager for Compiz Wallpaper support](http://forum.compiz-fusion.org/showthread.php?t=6199) , or if you have a recent version of KDE, it should work anways. Finally, you also need the new BCOP to build it as that has the PLUGIN_DISPLAY/SCREEN/WINDOW macros built in.


## Other Stuff


**Wiimote Plugin Video**

Alright, so I said I would make this last week, but I've been swamped with real life recently, so I only got around to doing this now. Here it is =)

[youtube=http://www.youtube.com/watch?v=5M7ejHp2NM8]

**Tip of the Week**

If you're trying to get support and are sick of all those

_"A handler is already registered for the path starting with path[0] = "org""_

getting in the way of your really important debug output then simply disable the DBUS plugin

Well., thats it for this week. I'm off to go and fix bugs in freewins now - which have bee annoying me for a while. Hope they are fixed soon! Bye!
