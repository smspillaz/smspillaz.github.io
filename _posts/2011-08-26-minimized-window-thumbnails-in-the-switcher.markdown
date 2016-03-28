---
author: smspillaz
comments: true
date: 2011-08-26 03:22:50+00:00
layout: post
slug: minimized-window-thumbnails-in-the-switcher
title: Minimized Window Thumbnails in the Switcher
wordpress_id: 813
---

Yesterday I [merged](https://code.launchpad.net/~unity-team/unity/unity.minimized_windows_switcher/+merge/72591) in my branch to support minimized window thumbnails in the upcoming alt-tab experience for Unity. I originally intended for this code to go inside of compiz in a neater fashion so it would be available to all plugins, however we are past feature freeze in our release schedule and ABI breaks are no longer allowed unless there's a good reason for them.

[![](http://smspillaz.files.wordpress.com/2011/08/minimized-windows.png)](http://smspillaz.files.wordpress.com/2011/08/minimized-windows.png)

In order to do this, we have to use some interesting hacks to ensure that windows are not completely unmapped when they are minimized, mainly using XShape to remove their input and inhibiting paint with the compositor. This means that some applications aren't going to play nice with it, and we need to know what they are, so that we can either blacklist them or decide whether or not we want to ship with this functionality. So please report bugs if you get oddities like input not working in your applications, or your cursor being grabbed while an application is "minimized"!
