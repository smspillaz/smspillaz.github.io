---
author: smspillaz
comments: true
date: 2008-04-17 03:25:56+00:00
layout: post
link: https://smspillaz.wordpress.com/2008/04/17/compiz-fusion-community-news-for-april-17-2008/
slug: compiz-fusion-community-news-for-april-17-2008
title: Compiz Fusion Community News for April 17, 2008
wordpress_id: 250
---

_I'm back!_

Alright, it seems like a very long time since I've written this and over the past couple of days I've been itching to write something about all the cool new features, bugfixes and community plugins out there over the past month or so. All the web themes and stuff are now up too, **Huge** thanks to iXce and the Web Team for that - now Compiz-Fusion.org has a more integrated look to it.

Highlights for this entry are **The new and wonderful Cube Cylinder deformation**, **More and More improvements to Freely Transformable Windows with a good roadmap ahead of us, The beginnings of a _Compiz Fusion Live CD_ and the springy and fun _Dodge Window _plugin**.

<!-- more -->


## News in Bugfixes





	
  * Fixed High CPU Usage during Expo

	
  * Fixed inactive viewport brightness / saturation not being restored after expo mode exits

	
  * Fixed crash in simple-ccsm due to new CCM API

	
  * Fixed 3D plugin not working correctly with Cube Cylinder deformation (But 3D depth will not work however)

	
  * Fix window placement with certain toolkits not setting USPosition properly

	
  * Prevented the switcher window from appearing when the switcher is not active

	
  * Fix Rotate plugin not rotating 'all the way' on auto-rotate

	
  * Fix text not appearing straight away in prompt plugin




## News in Features




**Cube-Addon Cylinder Deformation**




I know that this report is probably a bit to late as it seems that [everyone](http://fusioncast.blogspot.com/2008/04/episode-iv.html) [has been](http://dev.compiz-fusion.org/~cyberorg/2008/04/15/new-effects-plugin-in-compiz-fusion-git-packages/) [raving](http://digg.com/linux_unix/New_Compiz_Fusion_effect_Cylinder) about it, but I thought I would be best to jump on the bandwagon for this one too :). So yeah, here it is, the absolutely amazing cube cylinder deformation plugin by **onestone**.




[![](http://smspillaz.files.wordpress.com/2008/04/cubedeform.png?w=468)](http://smspillaz.files.wordpress.com/2008/04/cubedeform.png)




_Cube Cylinder with Cube Reflection in all it's glory_




[![](http://smspillaz.files.wordpress.com/2008/04/cubedeform1.png?w=468)](http://smspillaz.files.wordpress.com/2008/04/cubedeform1.png)




_The Cube Cylinder hamburger wants to eat you!_




[![](http://smspillaz.files.wordpress.com/2008/04/cubedeform2.png?w=468)](http://smspillaz.files.wordpress.com/2008/04/cubedeform2.png)




_It works with 3D Windows, but not with 3D Window Depth_




[![](http://smspillaz.files.wordpress.com/2008/04/cubedeform31.png?w=468)](http://smspillaz.files.wordpress.com/2008/04/cubedeform31.png)




_I wouldn't suggest using without transparency on certain cards however, as it does have some culling issues_






	
  * The cube can be deformed on both manual and auto rotation, or just manual

	
  * The cube caps are not deformed to maintain thier aspect ratio, but you can fill the remaining bits of the caps with a solid colour

	
  * Cube Reflection has been merged into this new Cube Addon plugin, please update your repositories (already done in plugins-*)




**Vast Improvements to Freewins**




Well the Freewins plugin has received a bit more attention from myself and warlock and we now have a couple more feature and bugfixes to show off. I will be making a video of this soon.






	
  * Added Customizable rotation axis' selection.

	
    * It's possible to rotate around the axis of where you clicked, so for example, if you click on the top edge of the window and pull back, the window will rotate around that edge instead of around the center

	
    * It's also possible to rotate around to the point opposite to where you clicked, see before on how it works

	
    * Finally, you can still always rotate around the center if you choose




	
  * Different Rotation Modes added

	
    * Always 2D ensures that the window never has any 3D rotation

	
    * Always 3D ensures that the window always has 3D rotation, but cannot rotate clockwise and counter clockwise

	
    * Determine on click works with 3D rotation area percentage to determine if you want to rotate in 3D (If you click in the center) or in 2D if you click on the edges

	
    * Interchangable is a bit bugged, but tries to rotate more in 3D are you approach the center and more in 2D as you approach the edges




	
  * Rotation Auto-Zooming added so that windows do not appear 'bloated' when rotating them in 3D

	
  * Immediate Moves option added to prevent having to constantly redraw the screen with wobbly enabled and wobbly's 'off' behaviour when the rotation is changed

	
  * Input Prevention changes:

	
    * Move windows by clicking and dragging them

	
    * Resize windows by right clicking them and dragging (buggy)

	
    * Focus follows mouse works correctly

	
    * Ensure that IPW's are always on the same viewport as the window




	
  * Two different scaling modes

	
    * 'To Center' scales to the center of the window like Freely Transformable Windows always has

	
    * 'To Opposite corner' tries to scale the window to the opposite corner




	
  * Our roadmap currently stands at:

	
    * Fake input redirection by capturing clicks on the Input Prevention window

	
    * True 2D->3D trackball rotation







**Compiz Live CD**




OasisGames and other members of the community are preparing a Compiz Fusion Live CD for others to try out Compiz Fusion. For more information on the theming and information on the Live CD, see [this wiki page](http://wiki.compiz-fusion.org/LiveCD)




**Dodge Plugin**




A new plugin by user **rcxdude** allows you to set a window (default stick and above windows) to be pushed away by the cursor with a variety of cool effects to do so. It's hard to explain so a video will be coming soon!




[youtube=http://www.youtube.com/watch?v=SUN1B4BsKKI]







**Atlantis - New and sleek fishies**




The Cube Atlantis 2 Plugin has been updated once again with some sleeker fishes. I'm not able to run the plugin due to hardware constraints, but check it out for yourself. ![](http://forum.compiz-fusion.org/attachment.php?attachmentid=990&d=1206907633)




**Other Various Improvements**






	
  * Advanced search re-write in CCSM, now shows a progress bar and the search is a lot faster

	
  * Timeout for edge actions added so accidentally hitting edges will no longer trigger actions

	
  * Buildsystem improvements with CMake, meaning it will take less time to add plugins to plugins-*




## Compiz 0.7.4 Release




Congrats to the Team for the recent 0.7.4 release which includes






	
  * Bicubic filtering in Cube

	
  * Curved Expo

	
  * Simple CCSM improvements




## Tip of the Entry




**Recovering from a Freewins Crash**




Did Compiz Crash or freeze up while you had windows rotated and scaled using Freewins and now you can't interact with the windows? Simple select the windows with scale, manually rotate them with a keybinding or use the shelf plugin, reset the window and it's input will be restored.


Well, that's pretty much it for this entry. I'll be putting videos up for those other plugins ASAP.

- SmSpillaz

