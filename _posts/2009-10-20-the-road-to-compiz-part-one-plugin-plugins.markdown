---
author: smspillaz
comments: true
date: 2009-10-20 15:28:27+00:00
layout: post
link: https://smspillaz.wordpress.com/2009/10/20/the-road-to-compiz-part-one-plugin-plugins/
slug: the-road-to-compiz-part-one-plugin-plugins
title: 'The Road to Compiz++ Part One: Plugin-Plugins'
wordpress_id: 497
---

So from now until we finally make a Compiz 0.9.0 beta release I will be doing some short blog posts on what the differences between Compiz 0.8 and Compiz 0.9 are for both users and developers. Compiz 0.9 is a complete re-thinking of Compiz 0.8. It's like KDE4 was to KDE3. Totally new frameworks. Totally new buildsystem. Totally new API. It's supposed to clear the ground from major architectural flaws that were in older versions of compiz to make development far easier and faster even for future version of compiz.

So without further ado, here starts the series:


## Plugin Plugins (or Plugin Plugin Plugins or Plugin ... Plugins)


One of the main problems with the 0.8 compiz series was that it was not easy to extend plugins and it was not easy to make library plugins. You could expose functions to other plugins from within your own plugin but it only just sort-of worked and there were all kinds of problems that needed to be overcome for it to work with a lot of unclean code that was essentially redundant, made the whole thing unstable and wasted a lot of time. It's not quite as simple as importing some plugin as a lib then calling it's functions, rather it had to do awkward function maps that were inserted as what looked like new plugins that other plugins then accessed with a special number then had to rely on the function map being correct and nothing moving around then had to call functions indirectly.

Compiz 0.9, with it's object oriented design, strives to fix a lot of the problems associated with this. To understand this, we classify any plugin that works with other plugins into 2 categories:

**Extension plugins**

These plugins exist soley to extend the functionality of other plugins. For example, cubeaddon extends cube directly by hooking it's functions as does scaleaddon extending scale. Animationaddon extends animation by working with animation's internal animation manager to add new animations. It's a one-to-one relationship between plugins.

Getting both these methods to work is complicated enough, for the former you need to handle internal functions being hooked by other plugins and for the latter you need more function maps to explain to other plugins how to add more objects to their plugins.

Compiz 0.9 has an Object Oriented design. This makes sense considering that we are working with all sorts of real things evident to the user, windows, screens, outputs, animations, plugins etc etc. It's not like everything is a copy of a copy of a copy. This has large benefits because it means that a lot of the code to manage objects is already there and you don't need to worry trying to tell other plugins exactly how to add objects to a queue. You just provide a base class their object derives from and that does all the work. As for the former case, there is now far more control over how functions are hooked.

**Library Plugins**

Library plugins are plugins that are loaded into compiz but don't actually do anything on their own, rather they just provide functionality that other plugins can use. An example of this is the text plugin or the mousepoll plugin. The whole purpose of these library plugins is to provide functionality to other plugins that would otherwise be very similar code that is duplicated again and again. It also allows some kind of consistency.

Library plugins in Compiz 0.9 now provide real objects to other plugins rather than just function tables to manage internal variables. This means that you can take some text, render it and draw it in a few lines of code rather than having to go through a whole bunch of internal functions to make it work. The plugin only needs to be loaded for some context settings bits and pieces. Lots of functionality will be collected into library plugins for use by all plugins because they are now really easy to write. For example, we already have a compiz-toolbox plugin which performs miscellaneous functions used by a lot of the switcher plugins and both staticswitcher and switcher now use that plugin rather than duplicating lots of code. It means that any plugin now that will be similar to switcher and staticswither can just use those functions rather than having to understand any potentially confusing internal code.

**The end result**



	
  * Things are organised much better

	
  * Tricks that certain plugins do can be expose to other plugins rather than having to rewrite them

	
  * Extension interfaces are now easy to write


