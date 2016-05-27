---
author: smspillaz
comments: true
date: 2007-10-18 15:00:19+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/10/18/unlocking-the-full-video-potential-of-your-video-card/
slug: unlocking-the-full-video-potential-of-your-video-card
title: Unlocking the full video potential of your video card
wordpress_id: 149
---

Have you ever wondered what the 'video' plugin is for? A short answer is that it does video accelleration through Compiz. But what does this all mean? Well we have to start with a few little explanations.

Compiz, at it's core is a really simple openGL loop which takes textures which it was provided by the GLX_EXT_texture_from_pixmap extenstion and manipulates them using openGL functions. This works surprisingly well in most cases, as your desktop works as it once did - with 3D effects. There are only 3 shortcomings to this however:



	
  1. Your desktop is really an openGL 'image' of sorts (Made up of textures and surfaces). Applications and X are unaware of this image being manipulated. Therefore, animated objects cannot be clicked on (clicks are registered in the wrong place). Positions of textures and windows are synced up with the X server after animations are completed - making everything mildly sane for X

	
  2. When windows are not really rendered to the X server to display to the screen, but a 'dummy' is rendered there (like a blue or black patch), Compiz cannot get the texture of that window. Instead, that window is rendered directly to the screen and when Compiz is transforming the object, but part of the object is not transformed - resulting in flickering and blueness.

	
  3. The process in which Compiz goes through to get the texture can make some high-performance stuff quite slow. The pixmap is drawn to the X server, the X server gets it (via AIGLX or Xgl or NVIDIA) maps it to a textures, which compiz then transforms. This means that the texture has to be refreshed constantly. This can result in slowdown of application performance - such as XV if it is redirected.


However, with the video plugin, there is a solution to problem 3 with video. Instead of drawing the video to the X server, why not use openGL functions that are built into Compiz to draw the video for us. This is where we can do some cool stuff.

So how do we get all this magic?

Well, firstly, enable the 'video' plugin. Now we need to get a patched version of mplayer. Firstly, download the mplayer 1.0rc2 source code from:

http://www3.mplayerhq.hu/MPlayer/releases/MPlayer-1.0rc2.tar.bz2

extract it ...

Navigate to the directory 'libvo'

Download this patch : http://smspillaz.googlepages.com/mplayrepatch.patch

Apply it with:

    
    patch -p0 vo_xv.c mplayrepatch.patch


Configure and Compiz Mplayer (It takes a long time :D).

EDIT: The patch is by David Reveman, not me. Please make note of this if you plan to package a patched mplayer

Now open up a video. Experience the magic.


## So what are some of the cool things we can do?





	
  * In AIGLX all video is redirected and all effects and be applied with NO SLOWDOWN :)

	
  * In Xgl, there is NO SLOWDOWN

	
  * We can run the video at any size without any noticeable slowdown

	
  * (It gets better :P)

	
  * Zoom into the video. Notice how the quality of the video gets better as you zoom in? (If you don't notice this at first, make the window some really small size then zoon)

	
  * Use 'stretch resize' on the window and the video does not distort and stretch. It gets better :P

	
  * Use normal resize on the window and you'll notice that the scaling of the video is really smooth

	
  * No more washed out colors

	
  * Video shouldn't contribute texture memory, so no more black windows with lots of videos open


Thats just some things. I'm sure there are plenty more.

[![video1.png](http://smspillaz.files.wordpress.com/2007/10/video1.png)](http://smspillaz.files.wordpress.com/2007/10/video1.png)

Scaled up video. Notice how everything else it pixelly except the holy video :D

Hopes that helped ... a bit :D

- SmSpillaz
