---
author: smspillaz
comments: true
date: 2008-11-06 11:43:52+00:00
layout: post
link: https://smspillaz.wordpress.com/2008/11/06/the-cocotron/
slug: the-cocotron
title: The Cocotron.
wordpress_id: 342
tags:
- cocotron
---

### Is this the fabled WINE for Cocoa apps?


Recently, I saw a new OSS project known as [The Cocotron, an open-source implementation of Objective-C, used of Max OS X apps.](http://www.cocotron.org/blog/) It had succeeded in a first of it's kind, a recompilation of a Objective-C (Cocoa) app written initially for Mac OS X running on Windows Vista, GUI and all. This reminded me very much of [WINE](http://winehq.org/), the open-source Windows API-on-Unix project which allows applications to run natively. From what I have read, The Cocotron won't run Cocoa applications natively (yet) and it has only implemented some of the base-level classes, but I believe it is a first step to a toolkit on linux where we can double-click a Mac OS X application, and it runs.

Of course, I'm not expecting to see Final Cut Pro or Motion running on Linux tommorow, considering those depend on some very deep, even driver-level frameworks, but I really think that The Cocotron could have the same level of success as WINE, which quite frankly, is amazing. I have not had a single game that doesn't depend on kernel level stuff not run, and it's incredibly handy when a 'niche' app is only avaliable for Windows. I have a good knowledge of OS X already, so if you're interested in running OS X apps on Linux, this might be the development to follow.

With compiz-related news, I'm still planning out a framework for applications to animate windows. I really like the extension-plugin system developed in compizconfig and I think that this could be a godsend if it were just taken one step further.

Right now, plugins can 'extend' other plugins options-wise, but a plugin must be directly 'extended' by another plugin in order to gain those benefits. Right now, we can't go backwards (i.e, plugins request to be extended). It's all possible code-wise, just the options system is one-way.

What I'd like to see, is the ability for animation to extend other plugins, and not have to specify which plugins it extends. That way, we could rework animation a little, and during the _drawWindowTexture_ phase of window painting, plugins can just pass window textures they want animated to animation, with the animation they want (and then animation handles the rest).

When this happens, we can either have some kind of external library or DBUS api for applications to have compiz animate their _own_ windows, much like Mac OS X allows you do [(as shown here)](http://www.youtube.com/watch?v=0DYb56xxnh4)

[youtube=http://www.youtube.com/watch?v=0DYb56xxnh4]

(Yes, I'm sorry that it has to be a long-winded tutorial on how to use an application probably none of you have, but you can see the animations in the video).

Also, plugins would really no longer have to handle the whole animation from point-a to point-b process, instead animation and it's various extensions can do that for us. That is a big plus IMO code-wise.

In other news, I'm continuing to work on the input redirection patches, as well as implementing the few window-management ideas brought up in Windows 7, so that we can be three years ahead of them again (I just hope there are no patents). I also want to make a plugin to clean up the mess with all the plugins and actions - essentially, when you trigger the action for the plugin, it will bring up a menu with more actions to trigger. That way, I will still be able to type properly when we have billions of compiz plugins.

- Sm
