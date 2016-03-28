---
author: smspillaz
comments: true
date: 2010-05-02 13:24:32+00:00
layout: post
slug: a-shout-out-to-nouveau
title: A shout-out to nouveau
wordpress_id: 589
---

So a quick shout-out to nouveau to show how impressed I am that I have compiz running without any proprietary software whatsoever.

[caption id="attachment_590" align="aligncenter" width="468" caption="Blurriness"][![](http://smspillaz.files.wordpress.com/2010/05/shout.png)](http://smspillaz.files.wordpress.com/2010/05/shout.png)[/caption]

And that behind the terminal is what is blurry. Which means that nouveau's gallium3d has at least some support for GL_ARB_fragment_program and framebuffer_object. And even though the performance isn't up to the levels provided by the binary driver (yet), it is still *much* faster than it was 3 months ago.

So props goes to nouveau. They basically wrote a driver for an incredibly complicated piece of hardware, completely through memory trace dumps, with no help from nvidia whatsoever and can operate the 3D engine so well that one of the world's most awesome pieces of software runs on it. So from now on, I will no longer be using the binary nvidia driver, but instead nouveau, since it offers exactly what I need + next gen linux graphics technologies such as KMS, XRandR1.2 and G3D. Win Win Win.
