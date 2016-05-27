---
author: smspillaz
comments: true
date: 2007-11-20 11:44:19+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/11/20/compiz-fusion-community-news-for-november-20th-features-features-features/
slug: compiz-fusion-community-news-for-november-20th-features-features-features
title: 'Compiz Fusion Community News for November 20th: Features, Features, Features'
wordpress_id: 186
---




## Summary


Welcome to another edition of Compiz Fusion Community News. In this edition, I will be covering numerous bug fixes that have been made to Compiz and Fusion as well as covering some new features that just came in and some interesting user plugins found on our [forum.](http://forum.compiz-fusion.org) Among those being atlantis2, fireflies, smackpad, Autumn, cubedbus and filedebug.

By the way, the posts of this blog that contain images, when read on planet seem to have the title be the image name and not the title of the blog post. The title for this blog post is "Compiz Fusion Community News for November 20th: Features, Features, Features"

I've also started to add the 'more' tag to posts that are long, so that I don't waste so much space on planet and the front page of this blog. If they are so annoying that you want me to remove them, just let me know and I will.


##  <!-- more -->News in Bugs





	
  * Fix widget initialization in CFCapplet

	
  * Fix zoom bindings in CFCapplet

	
  * Options passed to compiz from the command line override the same option in GCONF now.

	
  * Fixed snapoff maximized behavior in Xinerama setups where the screens are vertically arranged

	
  * The INI plugin now aborts if your are out of memory to write options

	
  * Changed the old 'allscreens' path in DBUS to 'display

	
  * Fix focus stealing protection so that it doesn't interfere with window restacks

	
  * Fix the 'Effects Speed' slider in CFCapplet so that it doesn't change your settings on launch. It should also detect the correct speed.




## News in Features


Lots of new features this time around. Plugins and compatibilities :)


###  Improvements to Atlantis2:


Wow, Atlantis now shaping up to look like a real aquarium! Not only are there fish swimming around inside your cube, but there is now _water!  _It would be illegal not to post a screenshot:

[![atlantis.png](http://smspillaz.files.wordpress.com/2007/11/atlantis.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/11/atlantis.png)[![atlantis2.png](http://smspillaz.files.wordpress.com/2007/11/atlantis2.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/11/atlantis2.png)

Isn't that amazing! This is work by metastability. [And it looks like he want some more people to add to the experience ](http://forum.compiz-fusion.org/showpost.php?p=37863&postcount=26)


### Fireflies


A plugin that I recently [ported  ](http://gitweb.compiz-fusion.org/?p=users/smspillaz/fireflies;a=summary), this plugin serves no other purpose but to draw little glowing friends that buzz around your screen and die. It's a nice ambient effect and I'm glad I saved it from becoming obsolete. Screenshot:

![](http://smspillaz.googlepages.com/flies.png/flies-full.jpg)


###  Smack that ThinkPad(TM)!


A new contributor - efeller has started work on a plugin called '[smackpad](http://gitweb.compiz-fusion.org/?p=users/efeller/smackpad;a=summary)'. This uses the HDAPS sensor in some laptop (I know that most ThinkPad's, Toshiba's and Apple MacBook (Pro)'s have this) to _trigger compiz events_. This means that you can smack the screen left right and the cube will rotate accordingly! I did not get a chance to try it out myself as I do not have an HDAPS sensor in my laptop :(, but there is a video on youtube which I have posted here:
If you want to check to see if your laptop supports HDAPS, you can do

[youtube=http://www.youtube.com/watch?v=zFi40HKFBZE&rel=1]

    
    ls /sys/devices | grep hdaps


and if yes, you're able to use this plugin!


### Autumn is here:


Forget christmas coming soon, user PatrickFisher has modified the snow plugin to make it more like an _a plugin where leaves drift in the wind!_ It's hard to explain accurately, but there is a video below :)

[youtube=http://youtube.com/watch?v=cHLDtJXc8fg]


### CubeDBUS


Cube DBUS is a plugin started by b0le who brought you [photowheel ](http://gitweb.compiz-fusion.org/?p=users/b0le/photowheel;a=summary), which allows you to use DBUS to draw inside the cube! b0le is going to make a sample script to make something like photowheel soon.


### FileDEBUG


Filedebug by maniac is a plugin which will simply write log messages from compiz to a file, so you can easily get the latest debug output simply by opening the file and not having to fiddle around with copy-paste in a terminal. It's mainly only for those who need to use this information for another purpose.


## Other changes worth noting:





	
  * In the stars plugin, you can now choose where the stars 'spawn' on screen.

	
  * In the 'wall' plugin, if you hold down Control-Alt, the preview will remain visible until you let those keys go

	
  * In photowheel, you can now choose where the cube spins and the offsets it spins on as well as changing the color of the caps on the wheel

	
  * The window menu in KDE-Window-Decorator is now translated

	
  * The GPL Themes SVN repo in emerald was updated.

	
  * FusionInstaller has finally got a nicer interface and works a lot better

	
  * CFCapplet can now be used by 0.6.0 compiz users.




## Anniversarie


Now is a about the time when the 'big Server Crash' happened for the Beryl project, when we lost all blogs, forums and wiki's. This also meant a lot of lost knowledge for both the Beryl and Compiz projects. We've come a long way since that, our fights have ended (after climaxing at the 'server hacking' dilemma) and both the Beryl and Compiz (-Extra) projects have merged for the greated good. Since then we've had so many fresh new users, developers and amazing plugins.

Even though this marks a time when it seemed like all was lost, we've achieved a lot in the space of a year.


## Tip of the Week


Remember how last week I told you how to take good looking screenshots with Compiz? Well here are the instructions:



	
  * Set the virtual desktops to 2

	
  * Make sure cube is enabled

	
  * Enable cube reflex

	
  * Change both background colors to white and the opacity to 200

	
  * Change the reflection intensity to full

	
  * Get your screenshot program (I use KSnapshot) to take a delayed screenhot, 6 seconds should be enough

	
  * Line everything up and wait

	
  * Open up the image in The GIMP and add some text

	
  * You have a nice looking Mac-OS-X like screenshot :)


Thats it for now! See you in another two weeks!

- Sam
