---
author: smspillaz
comments: true
date: 2010-08-20 02:53:17+00:00
layout: post
slug: dear-phoronix
title: Dear Phoronix
wordpress_id: 665
---

OK, so we have another [article](http://www.phoronix.com/scan.php?page=news_item&px=ODUyNA) about how LLVMpipe and the Copy Mode don't play along.

A tidbit of information, even though it isn't particularly made obvious: The enabling the "Copy To Texture" plugin doesn't make all textures bound with this "copy mode" by default - it is only enabled if the pixmap is larger than the maximum texture size. The plugin isn't there to fix broken drivers, it is only there to work around texture size limitations.

So in essence, what you are seeing is the same old TFP backend in action there Phoronix :)
