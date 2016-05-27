---
author: smspillaz
comments: true
date: 2007-07-27 01:18:20+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/07/27/widget-plugin/
slug: widget-plugin
title: Widget Plugin
wordpress_id: 68
---

A lot of people have been asking in the comment if you can get a widget plugin. The answer is........ *drum roll* YES! YOU CAN! (Que Game show music). Its not actually in the repositories, but it is in another repository, like this :


<blockquote>git clone     git://people.freedesktop.org/~mike/widget</blockquote>


See, its not our plugin, (Quinn made it, but mikedee maintains it) You cannot install the plugin with yags for some reason, as the makefile is not compatible. Instead, you will have to :


<blockquote>   make

make install</blockquote>


Separately in the directory. Screenlets, can be obatained from here :http://forum.compiz.org/viewtopic.php?t=358

Now for the configuration. Once Widget is installed, go to the widget plugin in CCSM (Its in the Uncategorized section)

Click it, then find the list that says 'force these apps to be widgets'

Add to that list 'screenletsd' 'gdesklets' 'superkaramba' 'xdesklets'

If you want to have an OSX like zoom in effect for you screenlets, go to the animation plugin and add this :

(name=screenletsd & type=Utility) Glide 1 0.300

Move it to the top of the list.

To run screenletsd, just run


<blockquote>screenletsd start</blockquote>


Then to add more screenlets, run


<blockquote>screenletsd add ABC</blockquote>


(Where ABC is the name of the screenlet you want to add)

If you want some sample screenlets, I have made up a list of commands to run to add these. Once added, they will automatically be reloaded the next time you start screenletsd


<blockquote>screenletsd add Clock

screenletsd add Ruler

screenletsd add CPUMeter

screenletsd add Launcher

screenletsd add Notes</blockquote>


Now another problem you may have is that the screenlets may only appear on one desktop. To fix this, go to the Window Rules plugin and add this to 'Sticky'

(name=screenletsd & type=Utility)

A screenshot :

[![screenletsd.png](http://smspillaz.files.wordpress.com/2007/07/screenletsd.png)](http://smspillaz.files.wordpress.com/2007/07/screenletsd.png)
