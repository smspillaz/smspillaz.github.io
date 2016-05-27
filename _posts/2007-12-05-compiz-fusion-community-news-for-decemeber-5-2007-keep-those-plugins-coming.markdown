---
author: smspillaz
comments: true
date: 2007-12-05 14:16:34+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/12/05/compiz-fusion-community-news-for-decemeber-5-2007-keep-those-plugins-coming/
slug: compiz-fusion-community-news-for-decemeber-5-2007-keep-those-plugins-coming
title: 'Compiz Fusion Community News for Decemeber 5, 2007: Keep those plugins coming!'
wordpress_id: 191
---




## Summary


And the Community News returns! This edition is all about what you love best about Compiz Fusion, the countless new features and fixes that get added every week. Each week adding to the excitement of what already makes this one of the greatest projects for the Linux Desktop (Spare X and the Kernel of course) we have ever known. This week, a couple of interesting patches to Compiz Core by our forum users, new plugins (We all love those) and a few interesting and cool new features from some older plugins.

On a side note, I heard you! The <!more> tags are **being removed** from the community news, however I will maintain them  for other off-topic and way-off-topic (It's what I'm known for) blog posts.

Alright, lets look at some news.


## News in Bugs





	
  * Fix expo termination bugs when no root window is present

	
  * Fix bug in CCSM with MultiList when entering a window match

	
  * Fix crash in CubeDBUS when you would delete an object

	
  * Fix problem in CubeDBUS where objects were being drawn the wrong way around

	
  * Anaglyph now loads after scale, fixing conflict problems

	
  * MPlayer no longer 'hangs' in the background after XWinWrap is killed in Livedesktop-Settings

	
  * Fix fish going into the ground in atlantis2




## News in Features


Lots more new features this week. We have 4 new plugins and a couple more interesting features to show off brought to you unofficially by our community :D


### SnowGlobe


So [last year](http://blog.beryl-project.org/?p=18) we had snow,  and we were begging to be able to have things inside the cube. Well that wish was granted this year, and so now we have a _**Cube SnowGlobe(TM).**_ Um, no, you can't shake it and make the snowflakes twirl up and down and around and such (Although many users have asked for this feature and b0le says it's certainly possible). But, we now have a nice snowy landscape and snow ... sort of to have as an ambiance in our little cubes :D. It's illegal not to post screenshots of these awesome things, so here you go

[![snowglobe.png](http://smspillaz.files.wordpress.com/2007/12/snowglobe.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/12/snowglobe.png) [![snowglobe1.png](http://smspillaz.files.wordpress.com/2007/12/snowglobe1.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/12/snowglobe1.png)

Oh and guess what. You can even have a snowman in it! :D

[![snowglobe2.png](http://smspillaz.files.wordpress.com/2007/12/snowglobe2.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/12/snowglobe2.png)


## Maximumize


This is a plugin that I have forgotten to cover over the past couple of weeks, so I think it deserves some attention now

Maximumize is a plugin which combines resize and maximize, to bring you maximumization. Now try saying that five times faster ;-). Anyways, what it will do is resize windows to occupy as much screenspace as possible *without* overlapping any other window. Unfortunately, it doesn't work if the windows are already overlapping, but it does work if that is not the case. If you want to try it out I suggest the following.

Have your pidgin buddy list and a chat window on the same screen. Now just hit <Super>M on both of them and you have efficient screen usage .

Even more fun, if you are working with The GIMP or Glade, just grab all the windows they spawn and put them on the screen so that they don't overlap. Now maximumize them. You will be thankful :D


## Freescale


This is essentially a 2 Minute cheap-o hack that I did on freewins, replacing the rotation code with some scaling code. It basically allows you to scale up and down windows. Note that there is still no input redirection. Screenshot below

![](http://smspillaz.googlepages.com/freewinScale.jpg)


## BasicBlur


BasicBlur is a work-in-progress plugin that I found for a very old version of Compiz (Dating back to the QuinnStorm days), which uses a GL_CONVOLUTION filter to do blurring of windows. This means that it does not require pixel shaders or framebuffer object support. Note that it will only blur windows and not the background behind transparent windows or decorations.  Screenshot below.

![](http://smspillaz.googlepages.com/blureasy.jpg)


## Other cool new stuff




### Windows INSIDE the cube


Well, b0le has done it again and has added a method to draw a window inside the cube, which essentially means that you can play movies INSIDE the cube! This is too hard to describe in detail, so I have added a screenshot below:

To invoke it, just make sure you are using an up-to-date version of the CubeDBUS plugin, and run './window.' and select a window (EDIT: You may have to open the file, and remove the line that begins with a '//'. This will cause the script to crash). That window should then be displayed inside the cube :D. Note that if you close that window, there may be a chance that compiz will crash.

[![videoinside.png](http://smspillaz.files.wordpress.com/2007/12/videoinside.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/12/videoinside.png)


### Some new water for atlantis and Atlantis-2


Well, the water creating method had been replaced in both the normal atlantis and the Atlantis-2 and this time includes sand!

Not only that, but there is also an updated version of the atlantis-2 plugin which contains some newer looking fish and _coral! _(No pun on the community name please!)  Screenshot below

[![atlantis23.png](http://smspillaz.files.wordpress.com/2007/12/atlantis23.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/12/atlantis23.png)

Note that the alternate version with smoother models seems to run really slow on this hardware. Don't know why yet however.


### Ungrab water wave and clickability while drawing waves patch for water!


Well, my patch to add in ungrab window waves and the patch to add clickability  to water have been merged into one and you can download it [here.](http://forum.compiz-fusion.org/showpost.php?p=39154&postcount=9)


### Other New Stuff





	
  * There is now an option in scaleaddon to display the window title for all windows

	
  * Livedesktop-Settings can now loop and mute your video (Thanks to some mplayer command line switches :D)




## Object Framework


To all you developers and more advanced users out there, David Reveman has posted a few mails to the mailing list about the upcoming object-framework and some details on how it works. The first, 'Object Model' can be found [here,](http://lists.freedesktop.org/archives/compiz/2007-December/002874.html) and the second, 'Communication' can be found [here](http://lists.freedesktop.org/archives/compiz/2007-December/002875.html),

For those who don't know, the object framework is essentially a revision of compiz code regarding plugins and such, with features that are planned to make development a little bit easier. David Reveman describes it as "If we ever had a compiz 1.0 release, this would qualify for a 2.0 release".


## Tip of the Week


It's time for another tips section! This weeks tip was something I found on the forums (But I can't remember where, the creator of this idea can claim it in the comments if he/she wants to :D)

Anyways, you're not just limited to screencorners and keybindings for compiz actions, you can also use actual application .desktop launchers and the magic of DBUS to launch effects too. Here's a practice two to try.



	
  1. Lets try activating the scale plugin through a button on the taskbar. First of all, we need to create a DBUS script to invoke the scale plugin. The code for this is  _dbus-send --type=method_call --dest=org.freedesktop.compiz /org/freedesktop/compiz/scale/allscreens/initiate org.freedesktop.compiz.activate string:'root' int32:`xwininfo -root | grep id: | awk '{ print $4 }'`
._ Now we just put that in a script, make it executable and copy it to somewhere like /usr/local/bin or /usr/bin. (Or whatever your PATH variable is set to). Now create a new launcher, and make it execute the name of the script (so if you called your script 'foo-fighting-scale' when what would be the command. Now, just add an icon from the CCSM icons dir (/usr/share/pixmaps) and voila. You can now call scale from your taskbar.

	
  2. You can do the same for expo too! Just use this code and follow the previous instructions:
_dbus-send --type=method_call --dest=org.freedesktop.compiz /org/freedesktop/compiz/expo/allscreens/expo org.freedesktop.compiz.activate string:'root' int32:`xwininfo -root | grep id: | awk '{ print $4 }' _


Note that I was not able to get this to work, but other users have reported success. You could try replacing 'allscreens' with 'display' if you wanted.


## Conclusion


Yep, thats it. New plugins. Awesome new features. The lot. Hope you liked this entry!

- SmSpillaz

Now go put this on digg already :D
