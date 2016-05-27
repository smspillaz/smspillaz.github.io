---
author: smspillaz
comments: true
date: 2007-11-12 11:29:14+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/11/12/playing-around-with-kwin-4/
slug: playing-around-with-kwin-4
title: Playing around with KWin 4
wordpress_id: 182
---

So, being bored as I usually am, I decided to fix my installation of KDE 4 and try out [KWin 4 with Composite bling](http://dot.kde.org/1180541665/). Unfortunately, after[ beta 2](http://arstechnica.com/journals/linux.ars/2007/09/04/testdriving-kde-4-beta-2-or-thereabouts), it appeared that openGL based desktop Compositing broke for most people but I managed to get XRender output working. XRender is interesting because...
<!-- more -->
XRender is one of the planned features for a future version of Compiz, opening up hardware support to a whole lot new areas. Of course, XRender is nowhere near as powerful as openGL, but can get simple 'composite' jobs done like basic window transformation (scaling / translation) and transparency done. Here are some screenshots:

[![kwin4.png](http://smspillaz.files.wordpress.com/2007/11/kwin4.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/11/kwin4.png)[![kwin5.png](http://smspillaz.files.wordpress.com/2007/11/kwin5.thumbnail.png)](http://smspillaz.files.wordpress.com/2007/11/kwin5.png)

The first one is of the [PresentWindows](http://youtube.com/watch?v=SWaSz4smYlg) effect and the second one is of the [DesktopGrid](http://youtube.com/watch?v=LMnmGdk1ODs) effect

XRender tends to draw the stuff quite fast, although it is a little slow with more intense things such as PresentWindows and DesktopGrid. It seems to handle opacity control and fading quite well.

It dies on things like zoom on create, close and minimize which is a bit of a shame, but I guess you can't have everything :P

Anyways, this gives us a good idea of what XRender output will handle like if it appears in Compiz.
