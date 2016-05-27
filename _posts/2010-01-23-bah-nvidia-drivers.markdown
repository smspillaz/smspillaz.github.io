---
author: smspillaz
comments: true
date: 2010-01-23 17:09:51+00:00
layout: post
link: https://smspillaz.wordpress.com/2010/01/23/bah-nvidia-drivers/
slug: bah-nvidia-drivers
title: Bah, nvidia drivers
wordpress_id: 552
---

So I had a great idea today.

cornelius1 and onestone still haven't come back from whatever they are doing yet, so I was like "Lets port stackswitch!". It was only 1000 lines, took maybe 4 hours and was like the other switchers. No big deal.

[caption id="" align="alignnone" width="400" caption="Too good to be true :("]![Soooo close.](http://josegjimenez.files.wordpress.com/2008/07/stackswitch.jpg)[/caption]

Until

    
    NVRM: Xid (0001:00): 13, 0003 00000000 00008297 00001310 00000000 00000040


Aannnddd GPU Hang. Well that sucks. Now I can't actually see if what I ported works. Oh well.

Which gives me more incentive to move to [nouveau](http://nouveau.freedesktop.org/wiki/). Because on supported cards [like mine], there is compiz support in their Gallium3D portion. Bare compiz support but it's there. I won't miss blur - well, I'll just have to get it on my intel laptop [how ironic, since this was the reason I moved to nvidia in the first place].
