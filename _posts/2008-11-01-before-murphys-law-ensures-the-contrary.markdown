---
author: smspillaz
comments: true
date: 2008-11-01 04:47:47+00:00
layout: post
slug: before-murphys-law-ensures-the-contrary
title: Before Murphy's Law ensures the contrary....
wordpress_id: 331
---

## Compiz Fusion and X.org MPX and Input Redirection Patches are now out!


So, I figured that I should publish these before murphy's law ensures that I either have a 1% chance of living the next day, or that the Australian Government [censors me](http://nocleanfeed.com/).

[caption id="attachment_334" align="aligncenter" width="468" caption="MPX and Input Redirection Compiz Support is out now!"][![MPX and Input Redirection Compiz Support is out now!](http://smspillaz.files.wordpress.com/2008/11/mpxircomingsoon.png)](http://smspillaz.files.wordpress.com/2008/11/mpxircomingsoon.png)[/caption]

So, as previously said, the patches are now out today. Here is a list of what they contend of:



	
  * All plugins that used mouse input can use input from all devices, not just the master device

	
  * Fixes for the Input Redirection patches in the X Server

	
  * Input Redirection support in shift, scale, freewins, shelf and ring

	
    * (Expo and Ezoom are not included because they were difficult for me to do mathmatically, volunteers welcome)





So, wihout further ado, the patches are retrievable from my git repository, located at

_git://git.compiz-fusion.org/users/smspillaz/compiz-mpx-ir_

Inside you will find three directories, xorg, compiz and fusion. You shoud apply the patches in that order. In the xserver directory, there is a second patch for you to use if you use proprietary video drivers which don't like the new function signatures.

Of couse, credit where credit is due:



	
  * Peter Hutterer for:

	
    * Adapting the base of Compiz for X Input 2 Support (the core patches are mostly based on his original work)

	
    * Getting MPX Support into the X Server




	
  * David Reveman for:

	
    * Creating Compiz, which I'm sure we all can't live without

	
    * Creating the Triangular Co-ordinate mesh input redirection system in XComposite




	
  * Joel Bosveld (b0le) for:

	
    * Updating the X Server Input Redirection patches to be more relevant with the current X Server

	
    * Showing me how the X Triangle Mesh works

	
    * Helping me in implementing the meshing interface in Compiz-Core




	
  * Dennis Kaspryzyk (onestone) for:

	
    * Helping me to understand some of the mathematics behind expo and others (although, I was unable to use the methods that he suggested, perhaps one day I will find a way)





And thanks to all of you who were patient in waiting for me to release these patches. Hopefully, with this work done, more people will be able to have input redirection in their servers, and the X.org team will consider input redirection to be an important item on their agenda in future X server releases.

I have also stickied a thread on the C-F forums, '[Input Redirection Reliant Ideas](http://forum.compiz-fusion.org/showthread.php?t=10087)'. Please, feel free to post away.

There is no tutorial on how to apply the patches at the moment, I will make one soon.

- SmSpillaz
