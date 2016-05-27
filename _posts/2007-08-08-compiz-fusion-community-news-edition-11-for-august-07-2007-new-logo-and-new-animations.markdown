---
author: smspillaz
comments: true
date: 2007-08-08 14:09:06+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/08/08/compiz-fusion-community-news-edition-11-for-august-07-2007-new-logo-and-new-animations/
slug: compiz-fusion-community-news-edition-11-for-august-07-2007-new-logo-and-new-animations
title: 'Compiz Fusion Community News Edition 11, for August 07, 2007 : New logo and
  new animations'
wordpress_id: 79
---

**Backround : **We have a new logo! Here it is :
[![compiz_fusion_logos2.png](http://smspillaz.files.wordpress.com/2007/08/compiz_fusion_logos2.png)](http://smspillaz.files.wordpress.com/2007/08/compiz_fusion_logos2.png)
The logo is by Graphfreak and may be modified for future release as the artist works with the web team to tweak the design. This also means that official artwork, such as splash screens will be coming out soon!

Anyways, back to news!

**This week in bugs:**
- Snow image added to snow. Yay
- SVG plugin is now enabled by default
- "Not found" message now shows when you search for something in CCSM and it doesn't exist.
- Profile adding now works again.
- Fixed the tab-bar being drawn one slot too thin occasionally.
- Default reflection image now added

**News in features:**

_New animations:_
Remember last week how I told you about a patch to get an airplane animation in the animation plugin developed by carlopalma? Well it has now been merged in along with three new animations wrtten by forum user neo! Brilliant. Well here they are:
Airplane : Folds your windows up into a paper plane and files the off into the distance, or to the taskbar.

[![airplane1.png](http://smspillaz.files.wordpress.com/2007/08/airplane1.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/08/airplane1.png)
Fold : Folds your windows up into ... nothing! Very simple!

[![fold1.png](http://smspillaz.files.wordpress.com/2007/08/fold1.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/08/fold1.png)
Skewer : Ah yes, my favorite. This animation divides your windows into parts and allows you to have the parts fly in and out and tesselate together any way you want! This plugin is so customisable that I just _had_ to include lots of screenshots!

[![skewer1.png](http://smspillaz.files.wordpress.com/2007/08/skewer1.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/08/skewer1.png)[![skewer2.png](http://smspillaz.files.wordpress.com/2007/08/skewer2.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/08/skewer2.png)[![skewer3.png](http://smspillaz.files.wordpress.com/2007/08/skewer3.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/08/skewer3.png)[![skewer4.png](http://smspillaz.files.wordpress.com/2007/08/skewer4.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/08/skewer4.png)

And finally a video I found on YouTube.

[youtube=http://www.youtube.com/watch?v=l-0PawsoEvg]

_Other new stuff :_
- The wall's switcher windows' colors can now be further configurated, from the arrow, the outline and to the desktop highlight.
- XCB dependency added to compiz. Unfortunately that means that compiz-git will no longer build, because it requires something that most distributions don't actually have (Confirmed distros : Fedora, Ubuntu, Debian). You will have to use version 0.5.2, or the 0.6 git branch of compiz.
- Profiles are now stored in ~/.config/compiz/compizconfig instead of ~./compizconfig. If you were wondering where your profiles went, move them from the old folder to the new one.

**News in Logos:**
The winning logo, 'Graphfreak' received 287 votes in total, counting for about 48% of all votes cast. This also implies that we will now have artwork for various things such as icons, forum themes, cubecaps, splashes and website themes.

**Tip of the week:**
***Beep* *Beep* *Beep***. Man, don't you just hate that loud** *Beep*** sound when an application triggers the system bell, like if you backspace too much in a terminal? Fear not! As I have a more *subtle* solution for you.

First of all, you want to disable the annoying beep. To do that, go into CCSM, and filter out for 'Core options' and uncheck 'Audible Bell.' Now that ***beep*** is gone!

Now, for a subtler visual bell, go to the 'fade' plugin and check 'Visual Bell.' Now when you do something that causes a 'bell' event, the window will darken and brighten again. Neat.
**Something else: **Fluxid from the forums has developed a lot of colorfilters for the colorfilter plugin. To get them, git-pull them from my repo at git://git.opencompositing.org/users/smspillaz/colorfilters

**Release soon:**
Just some more news. With the artwork contest finished, I assure you that we can expect a release very soon. This will be a milestone for the Compiz Fusion team, as it our first official release. The release will be based on compiz-core-0.5.2

**Conclusion:**
Thats all for now guys. Sorry about writing the blog a bit late, I've been rather busy with assignments and exams, let alone some of the stuff I've been doing round here recently. From now on, I'd expect the blog on a wednesday, because If I wrote it one monday, there would not be enough to write about! Anyways, if you have any questions, then leave a note in the comments. Also, if your comments haven't appeared yet, then don't panic! Stupid Wordpress seems to want me to moderate them. And I don't do that very often. Mention goes to anyone who can tell me how to automatically pass all comments not caught as akismet spam.
_
- The Compiz Fusion Team_
