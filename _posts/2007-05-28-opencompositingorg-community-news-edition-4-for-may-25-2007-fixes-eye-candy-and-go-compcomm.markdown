---
author: smspillaz
comments: true
date: 2007-05-28 12:00:13+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/05/28/opencompositingorg-community-news-edition-4-for-may-25-2007-fixes-eye-candy-and-go-compcomm/
slug: opencompositingorg-community-news-edition-4-for-may-25-2007-fixes-eye-candy-and-go-compcomm
title: 'OpenCompositing.org Community News edition 4 for May 25, 2007 : Fixes, Eye-candy
  and Go-CompComm!'
wordpress_id: 9
---

**Background** : I welcome you to another edition of OCCN, where I (SmSpillaz) talk seemingly randomly about stuff that has happened within the past week of OpenCompositing - Just in case you are interested ;-). In a nutshell, we've got bugs fixed and some cool new animations and features to show off :). Lets get started shall we?

**
News in Bugs that have been fixed :**
- Compiz does not crash when 'Autotab on creation' is enabled on startup for group plugin
- Other plugins know of window geometry while being resized on all resize modes
- Multiple resize modes are no longer listed as (1,2,3,4) in CCSM They are now (Normal, Rectangle, Border and Stretch)
- Annotate fill colours are not entirely transparent by default
- CCSM has some new icons (FirePaint, Resizeinfo and GLIB)
- Some bugfixes to the the animations in the tile plugin
- YUV output is created on the fly for screencasting (Screencasting is still under heavy development, however)

New plugin GIT repositories:
- Beryl-Premerge is GONE! Use these repos instead or use the script at the bottom of that page
-For Main stuff - git://git.opencompositing.org/compcomm/plugins/plugins-main
-For Extra stuff - git://git.opencompositing.org/compcomm/plugins/plugins-extra
-For WIP (Work In Progress) plugins - git://git.opencompositing.org/compcomm/plugins/plugins-wip
-For Unsupported (Working but not really mantained at the moment)  git://git.opencompositing.org/compcomm/plugins/plugins-unsupported
- Onestone has released a script called 'Yet another git script' or 'YAGS' that will clone every plugin separate repo for you. It can be retrieved from here git://git.opencompositing.org/compcomm/users/onestone/yags
- Build System added for plugins-main, plugins-extra and plugins-unsupported (you should only say that we now have working automerged repos)

To use it, rename gitinfo.conf.example to gitinfo.conf and open it with your favorite text editor. Change the GITURL from git+ssh://git.beryl-project.org/git to git://git.opencompositing.org and change USE_SUDO='FALSE' to TRUE. Run the script with ./yags clone, then ./yags make, ./yags make install

**This week in features**
-Some window actions can now be activated on screen corners (Such as close, minimize, show desktop (Hi delfick :) ) etc)
-A match for each resize mode was added - some windows can be streched while others can be resized normally etc
-Also, each window resize mode can be activated with a different keystroke
-Windows can be placed on different viewports by default
-Ring mode can remain 'Springy' after it has 'settled' instead of being on a 'linear' path .

**New Tab Change animation in the Group plugin**

A new tab change animation was added by roico after an idea submitted by Daniel Bessler. The idea is that with the transitions between various window size, the animation looked sudden, especially with a transformation of a maximized window to a smaller window. So to make this more seamless, the window that is rotating appears to shrink / grow a little as a rotates to make it look more natural. It is hard to demonstrate with screenshots so I will not post them to save bandwidth

Another new feature added is ResizeInfo being able to display info on all four resize modes now instead of just 'Normal.' ResizeInfo is a plugin that allows us to show the window's dimensions while resizing it - like metacity before it. Some screenshots are below

[![resizeinfonew2.png](http://smspillaz.files.wordpress.com/2007/05/resizeinfonew2.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/05/resizeinfonew2.png)[![resizeinfonew.png](http://smspillaz.files.wordpress.com/2007/05/resizeinfonew.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/05/resizeinfonew.png)[![resizeinfonew1.png](http://smspillaz.files.wordpress.com/2007/05/resizeinfonew1.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/05/resizeinfonew1.png)
**
Go-CompComm tray icon :** A new beryl-manager type icon has been written for OpenCompositing. It can be found here (http://www.opencompositing.org/viewtopic.php?f=16&t=408) It gives you the Beryl-Manager functionality you always wanted with a funky new Compiz icon. Bear in mind, however that if you are using AIGLX and are launching Compiz with LIBGL_ALWAYS_INDIRECT=1, you will need to launch this script first - open a terminal then launch compiz. It is not new and was developed for compiz-extra before, but has been ported. This is a very good sign that the merge is coming along nicely.

**Tip of the week :** Group+Tab is one of the most handy OpenCompositing.org Plugins. Want to do something cool with it? Hit its settings page, go to Tabbing>Misc. Options>Autotab windows on creation. This feature will make a window part of its own tab when it is created meaning that you can just drag that tab to another windows tab-bar easily. The tab-with-self also activates when the window is removed from a group[](http://http://www.opencompositing.org/viewtopic.php?f=46&t=478&st=0&sk=t&sd=a)

**Other news :** Well, last time I said I would get some scripts to build stuff and [here](http://smspillaz.googlepages.com/Get-Compiz.tar) they are. Uncompress the archive into your home directory into a folder called 'Git' and run them with './Git-Chainloader.sh' 'YAGS' and 'Get-Compiz' were written by KristanLy and Onestone and they have a few modifications to make them get more stuff than they usually get. You do not need to edit the 'Gitinfo.conf' file as I have already done it for you :D. Please note that the 'Git-Chainloader.sh' script was written by me and it is terrible but it does the job. If you really want to see how terrible it is, then just look at the script itself, it just calls yags and Get-Compiz and makes ccs-backend-kconf properly. It is not entirely automatic, It will ask you for an admin password, ask you if you want to bail out after failing to build ccs-backend-kconf the first time and if your machine is slow, ask you for your admin password again when yags is called. Make sure you watch the script at these stages as sudo does time out by default and you will have to run the script again.

There is a new name discussion thread on the forums which can be found [here](http://www.opencompositing.org/viewtopic.php?f=46&t=478&st=0&sk=t&sd=a)

[](http://www.opencompositing.org/viewtopic.php?f=46&t=478&st=0&sk=t&sd=a) A note from iXce however!
'Greetings everybody,

We need to decide the name now. Git is full of nice stuff (ccsm, wall + expo, ring switcher, firepaint...) and we all want packages for easy & clean installation. We all want some sort of artwork, and some themes for the web stuff.

Please note that this is a **flame-less** thread. Discussions about names should happen somewhere else, this topic is meant as a names list and **_will_ be moderated if needed** (though I hope it won't be needed). Please make sure that no other project or company uses the name you propose. Please also think before you post a name : **does it fit its purpose ? is it shiny? is it brandable (artwork, etc) ?
**
A poll, featuring the best names (10 would be good) will be started in a **few days** and we'll hopefully have a name to work with soon **(1 week or so would be nice).'**

Conclusion : Well, thats it for another edition of OCCN (OpenComposite Community News), To wrap up, we've seen a lot of bugfixes and some new eyecandy features this week. If you have any questions are suggestions regarding the blog - you can put them in the comment box below or email me at SmSpillaz(at)gmail(dot)com (I GET NO SPAM :) )

Another OOCN is in the can!

-SmSpillaz and the CompComm team ;-)
