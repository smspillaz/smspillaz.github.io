---
author: smspillaz
comments: true
date: 2008-12-20 14:16:53+00:00
layout: post
slug: compiz-fusion-community-news-december-20th-2008-animations-and-elements
title: 'Compiz Fusion Community News, December 20th, 2008: Animations and Elements'
wordpress_id: 366
---

In this edition of the Compiz Fusion Community News:



	
  * Elements-extendable complete

	
  * New animations from animationsplus

	
  * Work started on simple-animations

	
  * Squeeze plugin by kristian-erikson

	
  * Compiz API python bindings by kristia- erikson

	
  * Mac OS X Style viewport switching in wall




## News in Bugs:





	
  * Freewins not working on transparent cube bug fixed, the window reset code was removed, instead rotated windows are skewed in order to display correctly on the cube

	
  * Compiz-Core zoom plugin now depricated, use ezoom instead.

	
  * Panels now show in expo mode by default

	
  * Various bugfixes in the prompt plugin

	
  * If there are error messages when opening a plugin's library, where a plugin cannot be loaded, those error messages are now always shown. Note that this does not show 'file not found' errors.

	
  * Fixed conflicts between blur and obs

	
  * Fixed conflicts between ezoom and staticswitcher

	
  * Rounding issues and general weirdness fixes with the wall plugin

	
  * Added extensibility  to wiimote plugin




### Elements-Extendable is finished, set to go into -unsupported


Ahh, the beauty of open-source. Once person can take one-mans project and improve upon it.

Elements-extendable is basically achieving the dream that the original elements plugin set out to achieve, a full modular replacement for the mess that was the stars, boing, roach, fireflies, snow, autumn and stars plugins.

Most of the really really annoying bugs have been ironed out now and a few days ago, an 8MB memory leak was fixed. It should be ready to hit -unsupported in the near future, and, if it works out quite well, -extra after that.

Some of you might be confused about the 'element iter' option. I admit that I managed to confuse one of the lead developers, maniac, when I first showed him this, but it is basically a workaround for the fact that we cannot yet have cascading settings in libcompizconfig (for example, a list in a list, or options that spawn from other options).

What element-iter does is specify a group for a set of element definitions, because you can have multiple textures per element animation, for that animation to animate between (like boing and roach). The deal is, if you want to use another list entry's texture as a texture for another element, put it in the same element iter. Otherwise keep them separate in ASCENDING order.


### New animations for animationplus (A.K.A extra-animations) and simple-animations:


kdubois has made a new animation for the animations plus plugin, **Bonanza**. This is a particle-based effect which basically puts fire-particles around a window as it circles-closes into view.

As for simple-animations? Well, considering that I'd be [hacking on animation](http://wiki.compiz-fusion.org/Development/AnimationRework) soon, I thought I might as well learn my way around it by writing a few simple animations. The benefits of which are three-fold. One is that I learn how animation works, Two is that I get to implement some animations I have always wanted and Three is that you get those animations too!



	
  * The 'Fly In' effect basically flies the window into view, optionally fading, looks really good with a small distance and things like dialogs

	
  * The 'Rotate In' effect is what I used to think the 'Sheets' effect was on Mac OS X as a dialog kind of rotates in, especially from the top. I guess I was wrong :(. Anyways, I implemented that as an animation too.

	
  * The 'Bounce' effect is hard to explain, but if you do have a shiny Apple-Branded touchscreen music player or celluar telephone (and one which I hope you have[ jailbroken ](http://wikee.iphwn.org/)), and say, double-tap that home button, that is the animation I am talking about. Probably better to see in the video

	
  * The 'Sheets' effect would be available at the moment, but there are a few limitations in animation which prevent me from implementing it really well in an extension. cornelius is looking into this for me =)




### [youtube=http://www.youtube.com/watch?v=yLFRgWCEpjk]




### [youtube=http://au.youtube.com/watch?v=Wiwenhsymm4]




### Squeeze Plugin by kristian-erikson


kristian-erikson, is a new developer to compiz and is working to develop compiz plugins that enhance usability and application integration.

His first plugin is the **squeeze** plugin, basically it can be used to resize a window (in an animated way) to a more optimal size. You can see more about the plugin at his blog


### Also, the new Compiz API Python bindings by kristian-erikson


Moving onto his second goal, kristian-erikson has also written a set of python-bindings easily modifyable by changing an xml file to call compiz actions via dbus. This should allow applications to more easily script compiz.

You can get the bindings from here: git://git.compiz-fusion.org/users/kristianerikson/python-compiz-manager


### Other new improvements


maniac, has added the ability to keep specific windows 'static' in the wall animation, which means that you can finally have a Mac OS X like windows moving and not desktop and panels animation for wall.

Just add a match like (type=Desktop | type=Dock) to 'Non Sliding Windows Match'.


### Tip of the week


Don't you just hate it when you have to shuffle around to get the focus on a demanding attention window, a glowing window sitting in the taskbar? Well, there is a way to bring it up straight away. Just enter a keybinding into 'Activate Demanding Attention Window'  under the 'Extra WM Actions' plugin in CCSM, and the next time a window annoys you like that, just hit those keys, if you can remember them of course!

That's all for this edition of the news. If you want really uptodate news, keep an eye on the Mailing List, Planet and 'Plugin Development' section of the forums.

- Sm
