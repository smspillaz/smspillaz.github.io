---
author: smspillaz
comments: true
date: 2010-12-05 03:36:10+00:00
layout: post
link: https://smspillaz.wordpress.com/2010/12/05/compiz-the-most-rock-solid-window-manager-ever/
slug: compiz-the-most-rock-solid-window-manager-ever
title: Compiz - The most rock-solid window manager ever.
wordpress_id: 731
---

With [Natty Alpha 1](http://www.google.com/url?sa=t&source=web&cd=4&ved=0CDAQFjAD&url=http%3A%2F%2Fwww.omgubuntu.co.uk%2F2010%2F12%2Fubuntu-11-04-alpha-1-released%2F&rct=j&q=natty%20alpha%201%20released&ei=qAH7TI_ZHcrtrQft5fT4Bw&usg=AFQjCNFdKYG9PbtJvY4i-JwLJovLsmu1Ag&sig2=Q7Q9t7MqMmqzR6S4f6IbdQ&cad=rja) out in the wild with Compiz based Unity on the desktop, I want to see a change in our priorities for a while which I think will be super-beneficial to refocus on a point that has always plagued Compiz - Stability.

Basically I want to have that title of being the most rock-solid compositor ever. If [Metacity is like cheerios](http://en.wikipedia.org/wiki/Metacity), then Compiz will like granola or oatmeal. Solid. Dependable. Providing a fluid user experience.

Right now the shared understanding is that the 0.9.x release series is far from that. However, I think with some focus we can make it stable and rock solid. Like we made it in 0.8, the user shouldn't need to say when something happens "oh, that's compiz". It should just work. The window manager should be invisible because it won't get in the users' way. Which is why very recently I have been focused on nothing but bugs. Flies in the ice-cream so to speak. So here we go:

If a window goes in the wrong place file a bug. If something is supposed to appear in a switcher and it doesn't file a bug. If you see something there that shouldn't be file a bug. If it crashes, hangs or anything, file a bug. Even if the issue is a smallest, tiniest little detail - if it gets on your nerves you should be filing a bug. Because the chances are that if it gets on your nerves, it will likely also get on mine and the nerves of millions of users. And that makes me and the platform bug squad more likely to fix it.

For now our own bugtracker is not yet fully functional. But you can use the [compiz project on launchpad](http://bugs.launchpad.net/compiz) to file bugs. Just file them, and make sure that I am the assignee. In order to fix your bugs I need information. Like, exact steps to reproduce, in the most detail possible. If you think a little piece of information is irrelevant, include it. More detail is better than less. I have noticed that a lot of these bugs come down to very specific usecases which are a result of misprints in the code. Like - exactly what windows were you using. Post your config profile. What size of windows were they, - where were they on screen. Include a video of the problem happening. How big is your screen? Post instructions from the time to launch of compiz to the time to the bug happening. The more detail I have, the more chance I have of reproducing the issue and the more chance I have of tracking it down and fixing it. If it crashed, then let apport handle the crash, or, make sure you have debugging symbols installed and let the crashhandler plugin spit out a backtrace. Run compiz through [valgrind](http://valgrind.org) and post the output of the crash happening. If it hangs - don't just say "it hangs when you do this". Also ssh in with a machine or drop to a VT - check to see if compiz is using 100% CPU, do something like:

    
    pidof compiz
    sudo gdb
    attach ${printed_number}
    bt
    bt full
    quit
    



The more information I have the better. So go out and file bugs and lets make compiz the most rock solid window manager ever.
