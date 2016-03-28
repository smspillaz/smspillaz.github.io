---
author: smspillaz
comments: true
date: 2013-02-27 04:14:59+00:00
layout: post
slug: hello-from-xbmc-on-wayland
title: '"Hello" from XBMC on Wayland'
wordpress_id: 2579
---

XBMC Media Center has always been a favorite application of mine, because of its extensive customizability and versatility, being ported to many different platforms. I am pushing some proof-of-concept code today for something I've been working on over the past few days to add one more to the mix - support for the wayland compositor infrastructure.[![Image](http://smspillaz.files.wordpress.com/2013/02/wayland-screenshot.png?w=710)](http://smspillaz.files.wordpress.com/2013/02/wayland-screenshot.png)

The code can be found here:

  * [SDL](https://github.com/smspillaz/SDL)
  * [xbmc](https://github.com/smspillaz/xbmc)

Build it as follows:
    
    git clone git@github.com:smspillaz/SDL.git && cd SDL<br></br>git checkout wayland<br></br>./autogen.sh<br></br>./configure --enable-video-wayland --enable-video-opengles<br></br>make && make install<br></br><br></br>git clone git@github.com:smspillaz/xbmc.git && cd xbmc<br></br>git checkout wayland<br></br>autoreconf -isvf .<br></br>./configure --enable-wayland --enable-gles --disable-vdpau --disable-vaapi<br></br>make && make install

Once it is installed, you can run as follows inside of weston
    
    SDL_VIDEODRIVER=wayland /prefix/lib/xbmc/xbmc.bin

Some caveats and notes, because this is a proof of concept:

  1. The wayland backend is built for SDL 2.0, so this port also gets xbmc running atop of SDL 2.0
  2. Keyboard handling was rewritten in SDL 2.0, and so was the API, so this is currently not functional in either the X or wayland backends
  3. There is a bug somewhere, I suspect [this one](https://bugassistant.libreoffice.org/show_bug.cgi?id=60658), which is causing xbmc to hang and stop receiving any events from the server as soon as it starts a new thread going into, eg, the "Videos", "Music" or "Settings" menu. Understandably, this makes xbmc less useful than it would otherwise be, but I am releasing the code now in case anybody is interested in digging into this one.
  4. The code is a bit of a mess

Thanks goes out to:

  1. Benjamin Frankze for the initial work on SDL for wayland
  2. Scott Moreau for bringing that backend up to the 1.0 API and figuring out why the event queue dispatch didn't work, and also providing the inspiration to do this by [creating a wayland backend for dolphin-gcemu](http://lists.freedesktop.org/archives/wayland-devel/2013-February/007470.html).

Again, this is more or less proof of concept work. The code is a little messy, and I have some open questions about how the backend should be implemented, considering that there are only two or three lines of wayland specific code inside of xbmc (the rest is effectively an SDL "window system" backend)
