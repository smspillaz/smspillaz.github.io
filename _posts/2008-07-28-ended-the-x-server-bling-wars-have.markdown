---
author: smspillaz
comments: true
date: 2008-07-28 00:16:43+00:00
layout: post
link: https://smspillaz.wordpress.com/2008/07/28/ended-the-x-server-bling-wars-have/
slug: ended-the-x-server-bling-wars-have
title: Ended the X Server Bling Wars Have
wordpress_id: 290
---

After 30 months of head-on competition between Red Hat's AIGLX and Novell's XGL, [one is left standing today](http://gitweb.freedesktop.org/?p=xorg/xserver.git;a=commit;h=d15b3790307053587df8daed1936ff6923881b63).

This means that XGL will no longer be shipping with modern linux distributions and you will have to use AIGLX (or a certain proprietary equivilent therof) if you want to get nice 3D effects. There are a number of reasons for Xgl's deprication:



	
  * It hasn't been updated to reflect the current state of the X Server in a long time

	
  * Xorg is clearly doing a cleanout in the xserver repo, a number of dead bits have been killed off

	
  * There are numerous bugs with it, such as the X Server randomly restarting

	
  * AIGLX and DRI2 are stable enough to replace it with all it's features.


I always liked XGL for it's superious speed over AIGLX in it's final days. This also means that in the future, ATI owners will need to go with the rxxx, radeonhd or experimental fglrx drivers to get compiz working with AIGLX. It also means that owners of slightly more obscure cards made by matrox or VIA will have to nag for better drivers or stick with older versions of the X Server.

Rest in Peace XGL. You were the one who brought compiz into the world, but were ultimately defeated in the Xorg Bling Wars.
