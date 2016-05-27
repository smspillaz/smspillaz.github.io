---
author: smspillaz
comments: true
date: 2011-06-05 09:13:12+00:00
layout: post
link: https://smspillaz.wordpress.com/2011/06/05/anybody-still-getting-bug-709461/
slug: anybody-still-getting-bug-709461
title: Anybody still getting bug 709461?
wordpress_id: 788
---

**Bug [709461](https://bugs.launchpad.net/ubuntu/+source/unity/+bug/709461)** (and [**755459**](https://bugs.launchpad.net/ubuntu/+source/unity/+bug/755459)) are starting to really get on my nerves. Not because I am affected by them, but because I have only been able to reproduce it _once_ and that was when I wasn't watching.

I'd love to fix this, but without being able to reproduce it easily, it is difficult to tell exactly what is going on. I've looked through the code that handles the tracking and untracking of windows (since that is what is causing this) and still can't figure it out. This issue happens seemingly at random though so when users do get the bug it is already too late.

Readers on ubuntu, I have a small favor to ask if you are comfortable with it. I would like you to try the following:

    
    sudo apt-get install bzr-buildpackage
    sudo apt-get build-dep compiz
    
    bzr branch lp:~smspillaz/+junk/compiz.spew
    cd compiz.spew
    bzr bd
    sudo dpkg -i ../build-area/*.deb


Those commands there will install the _bzr-buildpackage_ package, which allows you to build packaging branch packages simply. It will also install all the build dependencies for compiz. Finally, it clones my packaging branch which includes a special patch which will write to your .xsession-errors file a lot more about what is going on. The last set of commands installs the built debian packages on to your system. Once you log out and log back in again, debugging information will be written during the course of your session to .xsession-errors.

If you're not on ubuntu, then I have also hosted the patch I used on this packaging branch [here](http://smspillaz.ucc.asn.au/101_spew.patch). You can apply it by building compiz from source, and using this before you build core

    
    git clone git://git.compiz.org/compiz/core
    cd core
    wget http://smspillaz.ucc.asn.au/101_spew.patch
    patch -p1 < 101_spew.patch
    mkdir build
    cd build
    cmake ..
    make
    sudo make install


Once you get the bug, make sure to mail me with your .xsession-errors and the output of _xwininfo -all_ when you click on the "dead region" of the screen.

Together we can fix this bug.

**EDIT:** That package won't work on Oneiric, I'll need to make a new one for that (because of the transition to GNOME 3.0)
