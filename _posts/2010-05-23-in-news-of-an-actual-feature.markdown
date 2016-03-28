---
author: smspillaz
comments: true
date: 2010-05-23 15:53:58+00:00
layout: post
slug: in-news-of-an-actual-feature
title: In news of an actual feature
wordpress_id: 623
---

Today I actually added a feature to the 0.9 branch. Well, not so much of a feature, but a framework to fix a long-time annoyance to do with loading and unloading plugins.

**Compiz' plugin stack**

Compiz, as you probably know, is a highly plugin-based window manager. If you've ever done development, we usually like people to implement things in plugins where possible since this means that we can mold to all sorts of situations. At the moment, compiz' plugin architecture is a bit primitive - we have all plugins in a sort of "stack" or list and every plugin can register for certain events in core and in other plugins like "I'm painting the screen" or "I'm painting the cube" and modify the way the event is done. Unfortunately, this means that removing plugins from this chain without breaking it is difficult. So what we do at the moment is if you are removing a plugin which was inserted before other ones, then we unload every plugin after the plugin you are removing, remove your plugin and then re-load all the plugins that were just unloaded. It works, but it has some nasty side-effects, since the plugins all behave as though they were just loaded once one plugin is unloaded.

This effect was made particularly worse when we made the composite and opengl functionality plugins, because if they were unloaded momentarily and then reloaded you end up with all of your windows being rapidly unredirected then redirected which looks ugly. Or worse, there is a bug in libdri which could cause your card to hardlock if you were rapidly creating and destroying GL contexts. To fix this at least, we load every plugin after composite and opengl. However, we can't use that to fix the next problem.

When you unload and reload a plugin, all of it's memory is cleared and it behaves as though you just started compiz. That means that if you had effects like opacify or dim inactive enabled, they would be disabled once you unloaded any plugin that was loaded before them. Of course, this sucks. The solution was to write a new class in compiztoolbox called PropertyWriter. This wraps the X11 window property feature and allows plugins to easily store data in the X Server memory attached to certain windows. This means that the plugin can store data there, unload, reload and load their state from that property data on the root window. Which means that your effects stay enabled and survive through plugin unload/reload.

Of course, this needs to be implemented on a per-plugin basis, but I have already done it with opacify and dim inactive (formerly addhelper). The implementation could definitely benefit from some serialization though. Currently it works by templating what the data stored looks like and then reading back the property from that template data.
