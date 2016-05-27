---
author: smspillaz
comments: true
date: 2007-07-30 12:17:25+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/07/30/compiz-fusion-community-news-edition-something-for-july-30-2007-widgets-and-cubecaps/
slug: compiz-fusion-community-news-edition-something-for-july-30-2007-widgets-and-cubecaps
title: 'Compiz Fusion Community News edition... Something! For July 30, 2007 : Widgets
  and Cubecaps.'
wordpress_id: 76
---

**Background : **Its another edition of Compiz Fusion Community News, where I, SmSpillaz tell you how this absolutely amazing project is going. Lets get started!

**News in Bugs **:

- Fixed weirdness in grouped maximization

- Grouped resize now 'stretches' the other windows while you resize them, instead of waiting for you to ungrab the first window then resizes them instantly.

- Scalefilter now builds for folks who's X-Servers don't include keysymdef in it's headers

- Gears now builds in plugins-extra

- Gnome-Screensaver now animates properly

- The workarounds in animation and now handled by the Workarounds plugin. Please update accordingly

- No animations should be played during shift

- Explode thickness now must be at least one, to prevent weirdness with lower values

- CCSM is now built by a python script.

- A fake Makefile was added that calls the python script for you :)

- Fix dialogs not appearing in CCSM

- Fixed crash when unshading when also focusing

- Snow is loaded after image loaders now

**News in Features :**

_New Plugin : CubeCaps _

Well, iXce has created a new plugin called 'Cube Caps' plugin. What it essentially does is further extend the cube cap drawing already implemented in the Desktop Cube plugin.

What you can now do, is have a cap drawing on the top and the bottom. It also gives you individual drawing settings for each cap, whether to scale the image, whether to adjust it to the rotation, and what color the cap is. You can also have a slideshow running on each of your cube caps if you add multiple images, and scroll through the images with the space bar.

_Widget :_

Last week, I talked about the widget plugin. I remember saying something about how it seems to break the build process. Well, I have created a new repository, and converted the widget plugin to the Compiz-Fusion Build Process.  I have also edited the metadata so it fits in a bit bettter with the Compiz Fusion settings manager.

The plugin can be obtained from here :


<blockquote>git clone git://git.opencompositing.org/users/smspillaz/mikebcopbuild</blockquote>


And a screenshot  :

[![screenletsd.png](http://smspillaz.files.wordpress.com/2007/07/screenletsd.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/07/screenletsd.png)

_Other new features :_

- You can now use the scrollwheel to scroll between windows in the Shift Plugin.

- You can now set the color of the outline, highlight  and thumbnail highlight in the Wall Switcher.

_One more thing :_

carlopalma has released a patch to add a 'Paper Airplane' effect to the animation plugin. Info is on the forum post [here. A video :](http://forums.opencompositing.org/viewtopic.php?f=15&t=1564&st=0&sk=t&sd=a&hilit=Airplane#p10673)

http://www.salug.it/~carlopalma/compfusion/airplane3d.ogg

**Tip of the Week :**

Did you know that you can configure the glow that the Group-Tab plugin provides? To do this, Go to the Group and Tab windows plugin and go to the 'Glow' tab. Now you can disable glow if you dont like it, or change the glow so that it surrounds the window, or it is in the shape of a ring. You can also change how big the glow is.

**Conclusion : **

Hope youre enjoying Compiz-Fusion. If you have any questions, leave them in the comments, or email me at SmSpillaz(at)gmail(dot)com. See you all later!

-SmSpillaz and the Compiz Fusion Team
