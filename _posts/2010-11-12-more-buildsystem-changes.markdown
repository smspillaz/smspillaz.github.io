---
author: smspillaz
comments: true
date: 2010-11-12 05:09:32+00:00
layout: post
link: https://smspillaz.wordpress.com/2010/11/12/more-buildsystem-changes/
slug: more-buildsystem-changes
title: More buildsystem changes
wordpress_id: 728
---

I have just commited some new buildsystem work which allows me to make buildsystem extensions at build-time for plugins (so other components can add hooks for things to be installed from plugins or autogenerated at build-time). This will be used in future to split the GConf schema generation out of core and into compizconfig-backend-gconf and also by ccsm to put all of the plugin icons in the plugins themselves, rather than keeping a whole bunch of icons for every known plugin in the ccsm package. It is also very important because we need it to be doing things like compiling plugins into the core executable

However, in order to properly implement this, I had to make a change to the FindCompiz macro, so you will need to do something like

    
    sudo make findcompiz_install


In your core build directory again.
