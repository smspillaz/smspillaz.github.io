---
author: smspillaz
comments: true
date: 2007-05-22 14:36:40+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/05/22/twitch-twitch-twitchity-twitch/
slug: twitch-twitch-twitchity-twitch
title: Twitch, Twitch, Twitchity Twitch
wordpress_id: 8
---

Hi

Compiz and all other software can have a very very **VERY **annoying problem. PREFIXS. Most of the time they are right, but once every so often they can mess up and cause a whole heap of problems due to multiple occurences of one file.

When you get a whole heap of these :

_ompiz: can't load plugin 'firepaint' because it is built for ABI version 20070506 and actual version is 20070507
compiz: Couldn't activate plugin 'firepaint'
compiz: can't load plugin 'resizeinfo' because it is built for ABI version 20070506 and actual version is 20070507
compiz: Couldn't activate plugin 'resizeinfo'
compiz: Couldn't load plugin 'svg'
compiz: can't load plugin 'expo' because it is built for ABI version 20070506 and actual version is 20070507
compiz: Couldn't activate plugin 'expo'
compiz: can't load plugin 'animation' because it is built for ABI version 20070506 and actual version is 20070507
compiz: Couldn't activate plugin 'animation'
Active Plugin List update
_

You KNOW something is not right. Well, it turns out that the problem is caused by one of two things..

1) A Compiz.h in /usr/include and /usr/local/include that are not in sync - delete the least recent one

2) Plugins installing to /usr, /usr/local and ~./compiz. Multiple occurences can CONFUSE Compiz and Compiz starts looking in the wrong place for the plugins. It finds the old ones in .compiz that ended up in there due to a bad prefix and claims that they cannot be loaded while meanwhile the new shiny ones in /usr/local are being promply ignored.

So whenever you have problems like this - always delete these files:

/usr/lib/compiz

/usr/local/lib/compiz

/usr/include/compiz/compiz.h and decoration.h

/usr/local/include/compiz/compiz.h and decoration.h

/home/(UserName)/.compiz/plugins

Hope that helped so that you dont twitch some much trying to figure out what the hell is wrong ;-)

/me shoots the person who invented prefixes
