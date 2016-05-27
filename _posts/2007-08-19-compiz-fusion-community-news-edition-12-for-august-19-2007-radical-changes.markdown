---
author: smspillaz
comments: true
date: 2007-08-19 14:36:17+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/08/19/compiz-fusion-community-news-edition-12-for-august-19-2007-radical-changes/
slug: compiz-fusion-community-news-edition-12-for-august-19-2007-radical-changes
title: 'Compiz Fusion Community News Edition 12 for August 19, 2007: Radical Changes'
wordpress_id: 89
---

**Summary: **Hey guys, just a quick entry this week. We've had quite a few radical changes done to compiz-core and the Compiz Fusion website is in the process of going up, where as I have said previously, this blog will be split in two: official, (not written by me, but by a team of people) and this blog which you will find on the planet server we will be setting up. Bear in mind that the website and theme is no easy job, and we're just putting things in one step at a time, like building a ... building. Anyways, I hope you enjoy this entry, and we hope to see you soon on the new website that's going up.

**News in Bugs:**

-    Code Cleanup

-    Fixed windows disappearing when ungrouping them.

-    Fixed group occasionally causing compiz to crash when moving windows between tab bars

-    Wall now wraps around when you edge flip with the pointer.

-    Desktop window is now *really* excluded from negative.

-    Core action option handling re-written, see below for more details

-     You can now toggle switcher with a mouse key

**IMPORTANT:**

If you are currently using CCSM, LibCompizConfig, CCP and the like to configure compiz, it is absolutely **essential** that you do not update the compiz-core package for a while, because you will lose the ability to set any options. The reason for this is because of a re-write of action handling in core, as well as a re-write of the gconf plugin.

**News in Features:**

_Website:_

Well, as you all know, the new website is slowly going up. If you haven't heard already, the new forums are running vBulliten, and can be located at forum.compiz-fusion.org. Note that the theme won't be up for some time until the web team gets some of the problems with it sorted out. Also, a demo website can also be found at compiz-fusion.org, created by Jeffery Lamarie (imnotpc on the forums)

_Widget Layer Re-Write:_

Danny Baumann (maniac) has done a re-write of the widget layer plugin. The widget layer plugin is designed to hide your widgets, then show them on a keypress. The main differences are:

-    This plugin allows you to configure the brightness and saturation of the screen under the widgets

-    You can decide whether you want the widgets to go away if you click on somewhere other than the widgets

-    Deciding which windows are widgets is now a proper match.

-    Setting a window as a widget in the widget plugin allows you to refer to all widgets in other window matches as "widget=1". So if you wanted set a special animation for widgets, instead of putting a whole bunch of matches to match all your widgets, just define them in the widget plugin and type "widget=1" into any other window match

_Other stuff:_

-    KDE Config (KConfig) plugin added to compiz core. This adds a KDE dependency. To compile without the KConfig plugin, use ./autogen.sh --disable-kde --disable-kconfig.

-    Artwork added for Viewport Switcher plugin and CubeCaps plugin

-    Goto Viewport plugin merged into Viewport Switcher

-    "Reset to defaults" button added to CCSM's profiles section

**Tip of the week:**

If you don't want the tooltips on gnome-panel to show when hovering over window list buttons with the thumbnail plugin on, you can turn them off, or at least hide them by going to

CCSM -> General Options -> Opacity Settings -> Window Opacities

and adding a match like this


<blockquote>(name=gnome-panel & type=tooltip)</blockquote>


for GNOME and


<blockquote>(name=kicker & type=tooltip)</blockquote>


for KDE. The default opacity should be 0, if not, change it to that.

The great thing about this is, that only the tooltips from the window list will not show, all other tooltips from icons in the system tray and menus will still show. Brilliant!

**Recent Release:**

Well, Compiz Fusion 0.5.2 was our first major release and a milestone for the community. We have been successful in packaging this release and spreading the word. Thanks to everyone who dugg the blog post, your combined effort helped this wonderful news reach the front page!

Well, thats it for this week. If you have any questions, queries, observations or comments, please post them in the comments below. See you next time!

_- Sam (SmSpillaz) and the Compiz Fusion team_
