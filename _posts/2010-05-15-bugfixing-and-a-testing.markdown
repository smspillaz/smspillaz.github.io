---
author: smspillaz
comments: true
date: 2010-05-15 15:53:05+00:00
layout: post
slug: bugfixing-and-a-testing
title: Bugfixing and Testing
wordpress_id: 609
---

Hi everyone,

So a release is coming around, but there is nothing stopping you from testing the next development version of compiz **right now!**

Over the past 2 or so weeks, I've gotten some phenomenal amounts of input varying from quirks, crash reports and other problems which I probably wouldn't have spotted otherwise. As a result, I fixed some really quite serious bugs, including:



	
  * Really ugly visual glitches on the switcher and static-switcher plugins

	
  * Various crashes in the animation plugin

	
  * Rapid redirects/unredirects as a result of the opengl plugin being reloaded all the time which could lead to a hang in libDRI

	
  * Windows not being focused in some cases

	
  * Immovable tabbed windows

	
  * The "Elements Behind Windows" option not working

	
  * Various build quirks


Over the past 2 or so days, I did some refactoring of the buildsystem so that plugins do not need to use 'rpath' in order to link to libraries such as libcompizconfig and libdecoration. This means that we can finally build RPM and Debian packages. Hopefully a PPA for Ubuntu will be coming soon, and we might even see Compiz 0.9.2~ in Ubuntu Maverick Meerkat if we're lucky :)

However, what I really need now is some user input on some of the more crucial elements of this release. This includes:

	
  * Ensuring that compiz builds from a fresh build from the new commits that have gone into the master branches

	
  * Going into CCSM and disabling the "opengl" and "composite" and relaunching your window decorator and telling me if it works as expected (albeit, it's a little slow, but I will work on this for 0.9.2)

	
  * If you have a screen resolution that is higher than your maximum texture size, enabling the "Copy To Texture" plugin and telling me if compiz appears to work.


As usual, you can post any quirks to this [forum thread](http://forum.compiz.org/viewtopic.php?f=112&t=12565) [1] and see this post by soreau for a [nice script](http://forum.compiz.org/viewtopic.php?f=112&t=12565#p77557) to do everything for you :)

[1] Speaking of the forum, if you miss the old theme, then I can tell you that one is being worked on for the new phpBB forum. Also, I'm aware of the spam problems - if anybody wants to nominate themselves to be a moderator and has some kind of significant community experience then feel free to apply and clean off the spam on the forum, I hardly have any time these days :(

**edit:** I created a [google form](http://spreadsheets0.google.com/viewform?formkey=dFZWcEs1QjVGTmxvNThQQUUzbk42OFE6MQ) for people to fill out bugs while testing. Go Go Go!

**edit:** If you're getting build errors for libcompizconfig when upgrading, do _rm ${PREFIX}/share/cmake/LibCompizConfigCommon.cmake_ and compile again.

    
    <em>
    
    </em>
