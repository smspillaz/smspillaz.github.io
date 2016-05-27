---
author: smspillaz
comments: true
date: 2007-07-25 10:26:10+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/07/25/compiz-fusion-community-news-edition-9-for-july-23-2007-breaking-news-forums-posts-go-down-by-half-due-to-a-lack-of-posts-asking-for-aquariums/
slug: compiz-fusion-community-news-edition-9-for-july-23-2007-breaking-news-forums-posts-go-down-by-half-due-to-a-lack-of-posts-asking-for-aquariums
title: 'Compiz Fusion Community News Edition 9, for July 23, 2007 : Breaking News
  : Forums posts go down by half due to a lack of posts asking for aquariums.'
wordpress_id: 50
---

**Backround :** Its time for another edition of Compiz Fusion Community news after two weeks while I was away. This week, me , SmSpillaz and gavintlgold will be showing off more totally awesome stuff, the plugins and such.
**
News in Bugs :**
- Sped up group a little
- If a grouped window is focused but was not raised, the rest of the windows in the group no longer auto-raise themselves
- The tab bar does not go white on fade in
- Fix changing animation settings in gconf by changing the values to ms
- Memory leak in animation plugged
- Fix lack of focus animations after using the switcher
- Thumbnails in the 'Window Previews' plugin update correctly now
- Notifications from libnotify are now matched correctly so you can set animations to them
- Fixed a hang in focus fade where is Window A is focused shortly after window B, it hangs for a few seconds
- Minimized window's icons and no longer added to the ring twice or more
_**
News In Features:**_
**
New Plugins:**
_
Atlantis :_

The Cube 'Atlantis' or referred to as the Aquarium plugin was committed 2 weeks ago and finnally answers everyone's dream of having thier own personal aquarium inside thier desktop cube. The size of the fish can be manipulated as well as the amount of fish
[![atlantis.png](http://smspillaz.files.wordpress.com/2007/07/atlantis.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/07/atlantis.png)

A video thanks to GavintlGold

[youtube=http://www.youtube.com/watch?v=Rmz9a9pJR_s]

The Atlantis Plugin can be obtained from


<blockquote>'git://git.opencompositing.org/fusion/plugins/atlantis'</blockquote>


_Colorfilter Plugin :_

A new Google Summer-of-Code plugin has gone into the repositories, called 'colorfilter' by iXce. This allows you to change certain colors to other colors by the use of pixel shaders. You can toggle color filtering for specific windows or the entire screen. Colorfilters are loaded via special color filter files. Some screenshots

[![colorfilterblue.png](http://smspillaz.files.wordpress.com/2007/07/colorfilterblue.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/07/colorfilterblue.png)[![colorfiltergreen.png](http://smspillaz.files.wordpress.com/2007/07/colorfiltergreen.png)](http://smspillaz.files.wordpress.com/2007/07/colorfiltergreen.png)[![colorfilterred.png](http://smspillaz.files.wordpress.com/2007/07/colorfilterred.png)](http://smspillaz.files.wordpress.com/2007/07/colorfilterred.png)

The colorfilter plugin can be obtained from here :


<blockquote>git://git.opencompositing.org/users/guillaume/soc/colorfilter</blockquote>


Additional colorfilters can be obtained from here :


<blockquote>git://git.opencompositing.org/users/smspillaz/colorfilters</blockquote>


**
Brand New Plugin : Shift Window Switcher.**

Onestone has release a new window swithing plugin called 'Shift.' This is essentially Vista-Style Flip3D switching and Mac CoverFlow Switching. There is also a reflection feature and this plugin actually does more that Flip3D and CoverFlow. You can change the angle at which Flip shows, as well as how big the windows will be and of couse, showing the text. Screenshots

[![flib3d.png](http://smspillaz.files.wordpress.com/2007/07/flib3d.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/07/flib3d.png)[![flib4dsmall.png](http://smspillaz.files.wordpress.com/2007/07/flib4dsmall.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/07/flib4dsmall.png)[![flib5dsmall.png](http://smspillaz.files.wordpress.com/2007/07/flib5dsmall.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/07/flib5dsmall.png)

Shift can be gotten from :


<blockquote>git://git.opencompositing.org/fusion/plugins/shift</blockquote>


**
Other new features :**
_
Multi-Animations :_

Well, the animation plugin has gotten a re-haul and you can now have multiple a different animation for every window match instead of being limited to 'Action 1' and 'Action 2.' Double clicking on the new list allows you to set an animation as well as a window match. See my tip-of-the-week below on how to set up different window matches for all kinds of windows! UPDATE : Although it is limited to hand string-like editing, you can now specify different settings for the animation you chose. For example, I could have Fire as my close animation and different apps can have different color fire! See [this](http://forums.opencompositing.org/viewtopic.php?f=49&t=1458&st=0&sk=t&sd=a&start=10#p10831) forum post by cornelius for more details.

_To the Taskbar and Beyond! :_

No need for my Animation + Minimize hack any longer! All 2D animation including : Dream; Glide; Curved Fold; Horizontal Folds; Sidekick and Zoom all play the animation while travelling to the taskbar now.
_
Screensaver rotating cube! :_

Pafy's screensaver plugin now has a 'Rotating Cube' mode that rotates the cube like a display box on screensaver activate. Very cool!
**
Other new features :**
- You can now change the colors of the 'Wall Switcher Window' when using wall
- Translation updates :
- Italian translation added
- Greek translation added
- Polish translation added
- German translation updated and fixed up

Tip of the Week :
Now that you can set lots of different animations for several different window types, you are probably wondering how you can take advantage of this. Well like this.

For example, if you wanted to set a special animation for any window with a title like "Terminal", you can add a rule like this :

Glide 1    0.3000    (title=.*Terminal*)

So from then on, anything with a window title like "Terminal" will open with the Glide 1 animation. I can also set a special animation of dialog boxes too with this :

Curved Fold 0.5000  (type=Dialog | ModalDialog)

Or if there was a specific program that I wanted to do something with...

Zoom 0.7000 (name=nautilus)

That will make nautilus always open windows with the zoom animation, which is great for people who want to imitate Mac OS X style double-clicking on the desktop and opening Drives / Files.
**
Compiz-Fusion Videocast :**

gavintlgold has started a new Compiz-Fusion Video cast that shows off new stuff and answers some of your questions and includes tutorials for newcomers. If you want to see it, head to fusioncast.blogspot.com

**Conclusion :**

Thats it for this really really really long edition of Compiz Fusion Community news. I'm tired now ;-P Goodbye!
_
- SmSpillaz and the Compiz Fusion Team_
