---
author: smspillaz
comments: true
date: 2010-03-04 15:23:28+00:00
layout: post
slug: a-2d-gtk-window-decorator
title: A 2D GTK Window Decorator
wordpress_id: 577
---

Hi everyone
[caption id="attachment_576" align="aligncenter" width="468" caption="Not compositing"][![](http://smspillaz.files.wordpress.com/2010/03/screenshot-16.png)](http://smspillaz.files.wordpress.com/2010/03/screenshot-16.png)[/caption]
Above is a screenshot of a GTK Window Decorator running in the non-compositing mode of compiz.

This isn't blingy though. So why is it significant? It means a significant amount of work is done on the GNOME side of things so we don't need need to change window managers when you want to switch off compositing. It took a particularly long time to get right, simply because the original GTK-Window-Decorator wasn't architectures with the fact that it might be painted to a window in mind, which meant that I had to rewrite the entire event handler, for example.
There are still a few bugs and I am in the process of fixing them. 
