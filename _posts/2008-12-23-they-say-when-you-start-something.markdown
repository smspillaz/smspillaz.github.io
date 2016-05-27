---
author: smspillaz
comments: true
date: 2008-12-23 13:08:18+00:00
layout: post
link: https://smspillaz.wordpress.com/2008/12/23/they-say-when-you-start-something/
slug: they-say-when-you-start-something
title: They say when you start something....
wordpress_id: 370
---

.... You have to finish it.

I've implemented a sort of Mac OS X 'sheets' animation in the simple-animations plugin. It is designed to work with dialog boxes so that they appear to 'roll out' of the top of the window. The animation is there, I just haven't got parent window detection to work with dialogs yet and haven't put window placement code in. Once that is done it should look (somewhat) realistic without violating the hidden patent I probably don't know about. You'll need cornelius' [recent changes](http://gitweb.compiz-fusion.org/?p=fusion/plugins/animation;a=commit;h=ec4a317a07d48db48de5a5c3d4ab702fbac298a8) in animation in order for it to compile however.

[youtube=http://www.youtube.com/watch?v=7TcQfkMvmUI]

[Video Link for Planet Users](http://www.youtube.com/watch?v=7TcQfkMvmUI)

Also, while I was doing that I implemented a user-suggested animation by **coz**, in a new animation called 'Expand', which basically scales out on the X Axis faster than the Y Axis.

[youtube=http://www.youtube.com/watch?v=GcKgwfHyLos&feature=channel]

[Video Link for Planet Users](http://www.youtube.com/watch?v=GcKgwfHyLos&feature=channel)

Also, I fixed a really annoying bug with 'Bounce' that would make it play incorrectly after it had been played once.

_I've had reports from users that it doesn't compile / doesn't load. I don't get those problems here and my local copy is totally in sync with git. I'm wondering if this is a glitch with git that has been resolved now. Let me know if it still doesn't work._

Another thing too. I've started to h4x0r on animation to implement some of [my ideas](http://wiki.compiz-fusion.org/Development/Proposals/AnimationRework). Git link is as below:

    
    git clone git://git.compiz-fusion.org/users/smspillaz/animation


You probably won't find the code all that interesting, right now I'm just putting markers in / modularizing stuff to make my life easier when I split the plugin in two. It's definitely not ready for anything, and will probably break at any time.

- SmSpillaz
