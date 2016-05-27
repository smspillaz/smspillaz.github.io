---
author: smspillaz
comments: true
date: 2010-05-21 10:34:47+00:00
layout: post
link: https://smspillaz.wordpress.com/2010/05/21/beware-the-benchmarks/
slug: beware-the-benchmarks
title: Beware the benchmarks.
wordpress_id: 618
---

Today phoronix published an article called "[The Cost of Running Compiz](http://www.phoronix.com/scan.php?page=article&item=compiz_speed_test&num=1)". While the content in the article is mostly true, and likely points out the obvious, I should probably clarify a few things before my inbox fills up with (n readers * ~ 8 ) mails telling me that compiz is slow and I need to fix it.

The article basically tests the performance of applications while they are being run as redirected windows. What does that mean? Well, for the better part of the year, pretty much 95% of graphics hardware has some support for what we call "redirected direct rendering", both through open source and proprietary drivers. NVIDIA was the first to get this feature, and then most of the other drivers picked it up last year.

Historically speaking, graphics drivers pre Mac OS X, pre Vista and pre TTM/GEM had onboard video memory which was used to draw the screen. This video memory usually contained a huge block which was basically just the contents of what the next screen redraw was going to be, then come next refresh, that is what ends up on the screen, and applications automatically draw to the other huge block. This approach is quite primitive, but it worked - it was much like the time when pre-x86 computers had no such thing as multi-tasking and everyone had the same access to all the memory. Have two applications run at the same time, and if they weren't careful, then the whole thing just turned to crap as one application just dumped new data over whatever another application was just doing.

The same thing also happened for video memory. As soon as you had two applications running at the same time, it was perfectly possible for one to just dump whatever it was doing on top of whatever another application was doing. And for that, you generally end up with this fail:

[caption id="" align="aligncenter" width="320" caption="Rendering Fail"][![](http://4.bp.blogspot.com/_OCfXyv9fntE/Rrnj80c5PqI/AAAAAAAAAC4/6m_odDEU4wE/s320/do-not-want-small.png)](http://hoegsberg.blogspot.com/2007/08/redirected-direct-rendering.html)[/caption]

Obviously you don't want that. But for the applications, and performance reasons it's great! This is because each application will get full access to the video display and so once you've written to this huge block of memory, you are guaranteed to get a place on the screen (unless some other application writes on top of you) and there are no extra steps required.

Of course, to the user, this makes pretty much everything drawing directly to the framebuffer (like opengl) pretty much unusable, because you are essentially multitasking compiz which might as well be a full screen 3D application and your other opengl application with no sort of memory management. So they'll just fight. All the time. There are similar problems with other compositors on linux and also compositors on operating systems which didn't have driver supported memory management at the time (Windows XP, Mac OS 9 etc). Which is why the graphics frameworks were rewritten for Vista and Mac OS X. And also the reason why we rewrote them too.

So now, for your applications, the steps for getting on-screen are a little bit more. You don't have access to the big framebuffer anymore where you can just dump your drawing and forget about it. Now, you ask for a particular size of buffer, and the graphics driver gives you your own private buffer for you to dump your applications' contents into to your hearts content without the worry that some other application will go ahead and overwrite it. The problem is: how do we get this on screen? Well, you could do it in-driver so that the applications' output are dumped onto the big screen buffer again. For that you get a performance hit due to the overhead of copying buffers around, and this:

[caption id="" align="aligncenter" width="320" caption="Fail Again!"]![](http://4.bp.blogspot.com/_OCfXyv9fntE/Rrnj80c5PqI/AAAAAAAAAC4/6m_odDEU4wE/s320/do-not-want-small.png)[/caption]

So the idea was - why not just expose those buffers to the compositing manager and they can just draw them to their buffer like a regular 2D object. And so that is what we do! The buffer is exposed to us as a pixmap, we then bind that pixmap content to an OpenGL texture through our magic and then we just draw that texture on screen.


## So how does this affect benchmarks?





	
  * Well first of all, any in application that displays a refresh rate, that refresh rate is never going to be accurate, since you really need to measure the net refresh rate of everything going on in your screen. The system is going to be slowest at it's slowest point. This means that the only meaningful refresh rate is compiz' refresh rate, since that is how fast the total compiz buffer which includes everything in the other applications' buffers is getting shoved on screen. (Of course, at that point, we get into how fast your monitor is, and this is usually 60FPS in any case, but we won't get into that.) When running without compiz, your application just gets blitted to the screen and THEN you can somewhat accurately tell how fast or slow things are running.

	
  * Secondly, there is always going to be semi-significant overhead when you have to do additional transforms on what an application has just drawn to get it on screen. The good thing is that the open drivers have largely mitigated this problem and optimized the drivers a LOT to reduce the performance hit. If this were all done in software, we'd be stuck back in the days of XGL where we had really really really slow 3D performance since it was all done in software. So in essence, phoronix is just pointing out the programmatically obvious. More operations = slower.

	
  * Thirdly, you might notice that our friend the NVIDIA driver seems to take massive performance hits when running with a compositor. This is because they have their own implementation of pixmap to texture binding as well as redirected direct rendering and memory management. Unfortunately, probably because of the code paths that are shared between all operating systems or their preference towards windows drivers, their texture binding is quite slow (slow resize) and their RDR is slow too. As phoronix helpfully [pointed out](http://www.phoronix.com/scan.php?page=article&item=compiz_speed_test&num=5), and what may have actually given them somewhat more balanced numbers, we've actually had an in-core workaround for this initiated with the "--loose-binding" switch, which only binds textures once they are activated. It does not follow the OpenGL **GLX_EXT_texture_from_pixmap** specification, which is why we do not use it by default. In Compiz 0.9, onestone introduced a new method of pixmap to texture binding, which does have a minor (2%~) tradeoff in performance for NVIDIA compated to --loose-binding, but is now the default because it follows the specification. Our recommendation: Use nouveau.


Compistors on most operating systems have had an option now to disable compositing when you are running a full screen application and they deserve the entire screen buffer. We have *semi* supported this for a while with the "Unredirect Fullscreen Windows" option, which disables the redirected rendering path for fullscreen windows. Now that composite and opengl plugins are separate, we will soon be able to just unload the opengl plugin on a fullscreen game so there is no compositing whatsoever. This is what Windows and KWin already do.

**tl;dr:** The phoronix benchmarks point out the obvious and you have a choice between horrible rendering glitches or a slight performance hit.
