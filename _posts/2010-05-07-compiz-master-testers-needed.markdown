---
author: smspillaz
comments: true
date: 2010-05-07 17:28:52+00:00
layout: post
link: https://smspillaz.wordpress.com/2010/05/07/compiz-master-testers-needed/
slug: compiz-master-testers-needed
title: Compiz master testers needed
wordpress_id: 598
---

Hi everyone,

So we have about 95% of all the bugs fixed for a release and now we need YOUR help to identify the remaining bugs in git master before making the new development branch *official*.

Testing is relatively easy, and can be done without detroying your existing compiz install.

Instructions [here](http://forum.compiz.org/viewtopic.php?f=112&t=12565).

**edit: **Instructions updated, since they were causing a few builds to be wonky. Also, the 0.8 dependencies can be installed through installing the various -dev/-devel packages on your distribution for compiz. In ubuntu you can probably use apt-get build-dep compiz or something of the like.

P.S: This /is/ a rewrite from a code perspective, so it's basically supposed to be functionally equal to 0.8 (with the addition of pluggable rendering backends and reparenting decorations among others). There isn't any major new functionality, so Phoronix please don't run a story about how there isn't any progress whatsoever, because once a release happens you can definitely definitely definitely expect progress :)
