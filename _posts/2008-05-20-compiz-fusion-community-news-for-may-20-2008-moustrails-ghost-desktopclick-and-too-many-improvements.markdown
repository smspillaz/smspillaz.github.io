---
author: smspillaz
comments: true
date: 2008-05-20 15:16:17+00:00
layout: post
slug: compiz-fusion-community-news-for-may-20-2008-moustrails-ghost-desktopclick-and-too-many-improvements
title: 'Compiz Fusion Community News for May 20, 2008: Moustrails, Ghost, Desktopclick
  and too many improvements!'
wordpress_id: 275
tags:
- Compiz Fusion
---

It's time for another edition of the Compiz Fusion Community News, as I come to tell you all about the cool stuff that has been going on in the Compiz Fusion project since the last time I told you about all the cool stuff going on in the project! Highlights for this edition are



	
  * **New Plugin: _Mousetrails_**

	
  * **New Plugin: _Ghost_**

	
  * **New Plugin: _DesktopClick_**

	
  * **Fluid rotation in Freewins and bugfixes**

	
  * **Compiz Fusion Unofficial Icons pack**

	
  * **Staticswitcher added to plugins-main**




## News in Bugfixes:





	
  * Staticswitcher no longer puts less than four windows in multiple rows

	
  * Freewins no longer crashes if you grab the window twice in a row (in a short space of time)

	
  * Fixed the first stale screengrab issue in freewins where sometimes your mouse would not be released if the grab went stale. The second where tooltips appear and cause the grab to go stale has yet to be fixed, but progress is being made. This is due to the input prevention work.

	
  * Fix kde4-window-decorator button drawing with QT 4.4

	
  * Dock and Desktop type windows are no longer placed by compiz as they place themselves

	
  * Corner-resize behavior is now more consistent with metacity

	
  * New profiles for CCSM which make more sense

	
  * VPSwitch and DesktopClick now work without a desktop window

	
  * Fix crash in Magic Lamp animation




## News In Features




### New Plugins:


**Ghost by rcxdude:**

This plugin uses input shaping to clear the input shape of a window so that you can click through the window. Note that this effect is intentional for the plugin. The idea is that if you have a window set to always on top, like a video and it is transparent, you should be able to click through the window onto the desktop. The following short screencast explains this in better detail (Thanks _Darknesssskrad!)_

[youtube=http://youtube.com/watch?v=5f7buYVaUBY]

**Mousetrails by moony:**

Much ala the Windows mousetrails function, the plugin uses a particle system to show a trail of your mouse. I find it to be quite unobtrusive than the traditional Windows mousetrails function as the trails fade away into the distance as you move the mouse. Because it uses the particle system, there are a whole bunch of things that you can configure, such as the number of trails, color of the trails, whether to have randomly colored trails, trail lifetime, trail scale-down size, etc. Here is a video of the plugin in action:

[youtube=http://youtube.com/watch?v=FCfq7iozzi0]

**New Plugin: DesktopClick by SmSpillaz
**

Inspired by having to give a support tip to a user who wanted to initiate expo when clicking on their desktop, finding that the solution lied in the _Viewport Switcher_ plugin, I decided to factor out the desktop clicking functionality from vpswitch and make my own plugin which could do what vpswitch did, but was slightly more desktop click oriented than VPSwitch is. In the end, this is what you end up with:



	
  * Click options are listed in a multi-list, choose from the following

	
    * Button Number

	
    * Modifiers

	
    * Whether the action is a 'hold until release' action or a 'toggle' action

	
    * Plugin Name

	
    * Action Name





Note that it is quite new, and due to constraints with Real Life(TM), I'm not going to have much time to work on it; you might notice that modifiers that involve 'Alt' or 'Super' don't work. I plan to fix that.

**New Plugin: Vigo**

This plugin by **janl** allows you to cycle through windows with keypresses. It also allows you to bookmark windows and move focus left and right with your keyboard. Note that this is unlike the traditional switcher plugins, instead this plugin will actually find the nearest window to the right or left and move the focus to it. You can also 'bookmark' a window with <Super>m, then come back to it with <Super>g. It is essentially the ultimate lazy-mans window navigation plugin. Well done **janl**!


### Other Improvements


**Physics for Freewins**

I've made a change to the inner workings of Freewins, so instead of just painting an absolute value based on how you've moved your cursor, the window will appear to follow your cursor around and settle in it's new position. Also, if you  flick your cursor really quick, the window will speed up then slow down. Below is a screencast of this in action [COMING SOON]

**Other New Features**



	
  * Staticswitcher can now switch between windows of the current application

	
  * Dodge can now dodge the active window

	
  * Preparations are being made for atlantis2 to work with the sphere deformation

	
  * Scaleaddon can now 'pull' windows from other desktops onto the current desktop




## Compiz Fusion Unofficial Icons!


I actually started this icon pack a while ago, however it has recieved a little more attention recently and I thought I might plug it on the blog. Basically, it is a set of icons for the unofficial plugins, which get the boring 'plugin-unknown' icon treatment. It is an svn repo that can be cloned with:

    
    <tt>svn checkout <strong><em>http</em></strong>://compiz-fusion-icons.googlecode.com/svn/trunk/ compiz-fusion-icons-read-only
    </tt>




## Tip of the Week


Compiz has full support for multiple output devices in the X Server. This means you can do all kinds of cool in-depth configuration if you use two screens. For example:



	
  * Wall can move the entire wall or each screen separate

	
  * Cube can position outputs to look like two different faces of the cube, one big cube or two separate cubes that are stuck together

	
  * Expo can show the expo mode on one display or on both together

	
  * Ezoom can zoom one display, while not touching the other and _the fake input handling still works_


Tweak these options in CCSM depending on how your displays are positioned. You can also force compiz to handle one output like multiple outputs, more on that next week.

Well, I hope you're satisfied again with this much development effort put into compiz. See you all next time!

-SmSpillaz
