---
author: smspillaz
comments: true
date: 2007-10-04 15:51:44+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/10/04/yascc-the-person-who-decodes-this-gets-a-smiley-face-from-me-in-the-comments-_/
slug: yascc-the-person-who-decodes-this-gets-a-smiley-face-from-me-in-the-comments-_
title: YASCC (The person who decodes this gets a smiley face from me in the comments
  ^_^)
wordpress_id: 124
---

Dear all application developers,

Please add python bindings to all your applications.

Thankyou.

/letter

About the same time that marex started his awesome work on simple-ccsm, I tried my hand at making a simple-compiz configurator similar to **gnome-xgl-settings** (I would get a screenshot for you, but I can't find one) that was shipped with openSUSE 10.1.

It allows the user to make changes to some of the key features of Compiz Fusion - all 50 of them ;-) (It's **really** hard to decide - Compiz Fusion is so good ^_^). It was written using glade, pygtk and compizconfig-python.

Please note that in _no way_ is this meant to compete with simple-ccsm, or is it simple-ccsm's replacement. It is just yet another configuration tool that I have put out there (In true linux style, just like there are 50 or so window managers, 3 major desktop environments, 3 office suites, 300 distributions etc). The code is actually quite bloated and when I get the time (read: when my teachers decide to take it easy on the homework, exams and assignments) I will probably simplify it which will most likely result in a 0.0001 ms speed improvement... (sigh).

The thing that sets this and simple-ccsm apart is that simple-ccsm does some neat settings-rating and profile level switching whereas this tool will detect whether your hardware and setup are capable of running CF and give a little more configuration options.

Oh, did I forget screenshots? Here they are:

[![depcf.png](http://smspillaz.files.wordpress.com/2007/10/depcf.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/10/depcf.png)[![depcf1.png](http://smspillaz.files.wordpress.com/2007/10/depcf1.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/10/depcf1.png)[![depcf3.png](http://smspillaz.files.wordpress.com/2007/10/depcf3.png)](http://smspillaz.files.wordpress.com/2007/10/depcf3.png)[![depcf4.png](http://smspillaz.files.wordpress.com/2007/10/depcf4.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/10/depcf4.png)

You can checkout the manager with :

    
    git clone git://git.compiz-fusion.org/users/smspillaz/cfcapplet


Please tell me of any bugs!

- Sam

PS . I'm late with the blog again :(
