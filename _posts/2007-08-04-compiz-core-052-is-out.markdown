---
author: smspillaz
comments: true
date: 2007-08-04 02:35:41+00:00
layout: post
slug: compiz-core-052-is-out
title: Compiz Core 0.5.2 is out!
wordpress_id: 78
---

Straight from the ML post:

_A new compiz release 0.5.2 is now available from:

[http://xorg.freedesktop.org/archive/individual/app/compiz-0.5.2.tar.gz](http://xorg.freedesktop.org/archive/individual/app/compiz-0.5.2.tar.gz)

which can be verified with:

[http://xorg.freedesktop.org/archive/individual/app/compiz-0.5.2.tar.gz.sha1](http://xorg.freedesktop.org/archive/individual/app/compiz-0.5.2.tar.gz.sha1)
0d0a4a39bfbe0ada770d9206b7a1b6_



_b443c53c29  compiz-0.5.2.tar.gz

[http://xorg.freedesktop.org/archive/individual/app/compiz-0.5.2.tar.gz.sha1.asc](http://xorg.freedesktop.org/archive/individual/app/compiz-0.5.2.tar.gz.sha1.asc)
(signed by David Reveman)

Additionally, a git clone of the source tree:

git clone git://git.freedesktop.org/git__/xorg/app/compiz

will include a signed compiz-0.5.2 tag which points to a commit named:
65ccbbd18c5028c610042dd552eec0__de3a41bde8

which can be verified with:
git verify-tag compiz-0.5.2

and can be checked out with a command such as:
git checkout -b build compiz-0.5.2


WHAT'S NEW
==========

Better support for multiple X-screens.

XML-based meta-data system for handling of various kinds
for meta-data like plugin descriptions, default option
values, etc.

Major improvements to option initialization based on the
new meta-data system.

Logging framework.

Support for configurable button layout in metacity themes
has been added to gtk-window-decorator.

Glib plugin that allows plugins that use the glib main
loop to integrate properly with the compiz main loop
without waking up periodically to check for pending
events.

Plugin plugins that make it possible to adjust and extend
the behavior of existing plugins through new plugins.

More dynamic handling of output devices, which allows the
output device configuration used when rendering to be
changed between frames.

Transparency support in cube plugin.

Introspection support in dbus plugin.


-David_
