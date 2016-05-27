---
author: smspillaz
comments: true
date: 2011-09-17 06:13:25+00:00
layout: post
link: https://smspillaz.wordpress.com/2011/09/17/scale-and-expo/
slug: scale-and-expo
title: Scale and Expo!
wordpress_id: 816
---

This wasn't actually as hard as I thought

[![](http://smspillaz.files.wordpress.com/2011/09/scale_expo.png)](http://smspillaz.files.wordpress.com/2011/09/scale_expo.png)All I had to do was tweak the scale plugin slightly to allow scaling over each viewport and then trigger the initiate callback inside of the expo plugin. Window picking was easy - we just use the expo plugin's vertex inversion code and pass through the co-ordinates to the scale plugin to "terminate and select".



	
  * [Expo Branch](https://code.launchpad.net/~compiz-team/compiz-expo-plugin/compiz-expo-plugin.initiate_scale/+merge/75847)

	
  * [Scale Branch](https://code.launchpad.net/~compiz-team/compiz-core/compiz-core.scale_viewports/+merge/75848)




This won't make it into oneiric since we're past Beta 2 freeze, but it will be become available as an option upstream soon.
