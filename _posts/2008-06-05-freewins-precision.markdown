---
author: smspillaz
comments: true
date: 2008-06-05 13:37:02+00:00
layout: post
link: https://smspillaz.wordpress.com/2008/06/05/freewins-precision/
slug: freewins-precision
title: 'Freewins: Precision'
wordpress_id: 276
tags:
- compiz freewins
---

Over the past few days, between exams and bombardment with assignments and homework, I've been working on improving the shaping method in freewins (*cough* rather than fixing glaring bugs). Thanks to some help from b0le, Freewins can now literally 'shape' the input prevention window. This is not the shaping that was originally in freewins where the input was removed, but instead defining a custom shape for the window. Think xlogo -shape, xeyes -shape or the gmplayer control bar. Anyways, after learning how to use XShapeCombineMask, shaping was fairly easy, as all I had to do was use cairo to 'draw' out what the window looked like so that XShape knew what to do. Yes, that means we depend on cairo now. If I get bugged enough, I'll ifdef it out, but otherwise, thats the way it is.

Anyways, what this now means is that, say you rotate a window 45 Degrees clockwise, instead of having this huge dead space between corners, input is not accepted on that area, so you will click on the things you look like you are clicking on. It might be jarring for the current users, but it's better in the long run, and warlock nagged me to do it.

Obligatory Video:

[youtube=http://www.youtube.com/v/lbftXMlyuMU]
