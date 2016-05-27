---
author: smspillaz
comments: true
date: 2010-05-25 02:21:24+00:00
layout: post
link: https://smspillaz.wordpress.com/2010/05/25/half-a-logical-step/
slug: half-a-logical-step
title: Half a logical step
wordpress_id: 625
---

So after it seems like everyone was "suprised" that running compiz might actually add 3D overhead, I wrote a [blog post](http://smspillaz.wordpress.com/2010/05/21/beware-the-benchmarks/) try to explain why you get a performance hit, but the reasons why you get a performance it being good. So when I was reading the news on my phone this morning, I saw the next headline that made me laugh so hard that I got out of bed and into wordpress to blog about it. Turns out too, that our friends[ KWin](http://en.wikipedia.org/wiki/KWin) can [also](http://www.phoronix.com/scan.php?page=article&item=kwin_speed_test&num=1) add 3D overhead. You'd think with that explanation of how an OpenGL compositing manager works and how redirected direct rendering works, you could easily say that every OpenGL based compositing manager will add 3D overhead, and that includes Compiz, KWin, Mutter, etc etc etc the list goes on forever. Nope - the only way phoronix can make an argument is with benchmarks and not logical analysis.

I'm waiting for phoronix to run a story about how "apparently" running Mutter will _also_ add 3D overhead. Or maybe they could just say "compositing managers add 3D overhead, just like running two applications at the same time is always going to result in them getting slightly smaller timeslices".
