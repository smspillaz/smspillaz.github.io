---
author: smspillaz
comments: true
date: 2007-09-18 14:09:36+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/09/18/compiz-fusion-community-news-edition-14-for-september-18-2007-wikup-then-webup/
slug: compiz-fusion-community-news-edition-14-for-september-18-2007-wikup-then-webup
title: 'Compiz Fusion Community News Edition 14 for September 18, 2007 : Wikup, then
  Webup!'
wordpress_id: 111
---

**Background :**A very good day and a very good night to you all as I welcome you to another edition of Compiz Fusion Community News, where I talk about all the stuff that has been happening on the scenes and behind-the-scenes in Compiz Fusion. This week, we had some very obvious changes to our web infrastructure (hint, compiz-fusion.org) and some interesting additions to the code of compiz fusion. Let's have a look

**Web News:**

Well, the website is now up and running, currently compiz fusion has a homepage, wiki, planet (where all the blogs are syndicated to - giving you a mass perspective on everything compiz fusion), forum, gitweb and something which has been there for a while, but I haven't covered yet, called status. Status is a user-friendly way of notifying the user whether it is safe to compile from git without major breakage. For example, something major may have happened in git, and checking gitweb might give you a commit message that you do not understand. Status simple has a green, yellow and red light next to each component indicating whether there will be breakage or not.

Planet is something completely new and you can check it out to see all the developer and web blogs for compiz fusion out there - including this one.  ( planet.compiz-fusion.org )

**News in bugs:**



	
  * Unknown category and plugin icons are back in CCSM

	
  *  CCSM now properly sets the default profile

	
  * Fixed display of unknown category icon

	
  * Newly created docks are no longer displayed behind other windows on creation

	
  * Decorations are placed properly when windows are mapped

	
  * Fix damage problems with animation on mulitple monitors

	
  * LibCompizConfig now ignores the case of  "disabled" when it is set as an action


**News in features:**

_Simple CCSM_

Patric "marex" Niklaus has started work on a simple, end-user version of CCSM, known as Simple-CCSM. It supports basic option changes such as animations and has a slider-bar to configure the level of effects used. Some screenshots are below:

[![screenshot1.png](http://smspillaz.files.wordpress.com/2007/09/screenshot1.png)](http://smspillaz.files.wordpress.com/2007/09/screenshot1.png)[![screenshot21.png](http://smspillaz.files.wordpress.com/2007/09/screenshot21.png)](http://smspillaz.files.wordpress.com/2007/09/screenshot21.png)[![screenshot31.png](http://smspillaz.files.wordpress.com/2007/09/screenshot31.png)](http://smspillaz.files.wordpress.com/2007/09/screenshot31.png)

Profile selection will work as follows:



	
  * Low effects : The bare minimum of plugins, fade to open, no wobbly etc

	
  * Easy on the eyes : A nice and easy experience, glide to open, zoom to minimize, desktop cube, no wobbly yet

	
  * Medium effects : A Little higher on the timestep, zoom to open, magic lamp to minimzie, wobbly on,

	
  * High effects : Transparent cube with reflection, similar animations, wobbly on, water and firepaint on

	
  * Hollywood's got nothing! : FULL BLOWN AWESOMENESS! Random animations, 3D, Transcube, Reflex, Blur etc.


Other new features worth noting:

	
  * Fusion-Icon was re-written

	
  * Image previews in CCSM

	
  * More and More!


**Conclusion:**

Well, thats it for this episode, tell me if I missed anything. You can always contact me on IRC - my nick is SmSpillaz, email is SmSpillaz <at> gmail <dot> com (no spam please!, try to avoid trivial stuff too ;-) )

I enjoyed writing this! I won't be able to write for another two weeks however as I will be away. Until then, good luck, go Compiz Fusion and have a BRILLIANT time! :)

- Sam
