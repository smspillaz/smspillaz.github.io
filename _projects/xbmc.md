---
layout: project
title: Kodi
blurb: Foundations for the future of Kodi on the Linux Desktop
thumb: /img/kodi.svg
---

Kodi on Modern Display Systems
==============================

The Kodi (formerly XBMC) media centre is a software media center project for
playing videos, music, pictures, games and more.

Kodi is uniquely multiplatform. It started out as an application for modified
Xbox consoles and has since gained backends for Windows, OS X, X11 on Linux,
Android, iOS and the Raspberry Pi.

Linux will eventually move away from X11. The main contends for many
distributions is Wayland and compositors that use the Wayland protocol. This
project was about writing a backend for a beloved media centre application
so that it would remain future proof when the change came.

![Kodi on Weston](/img/kodi-1.png)

In 2013 I was sponsored by Google as part of the Summer of Code program
to work on this project. The objective was to get the backend up and running
in both windowed and fullscreen mode, hook up all the keyboard and mouse
input and make sure that everything was well tested.

Architecture
-------------

One of my objectives when writing this backend was to ensure that all the
data flowed in one direction, despite different concurrency models
that existed between different wayland protocol versions. This would make
debugging the code much easier in the future since it would be clear where
input data came from and how it was processed throughout the application.

![Kodi's Wayland Keyboard Stack](/img/kodi-2.png)

Quality Assurance
-----------------

Another objective was to ensure that quality and compatibility with
the most popular Wayland compostior, Weston, could be maintained when the
project was completed. To this end, a comprehensive testsuite was added,
which not only unit tests some of the more complex keyboard handling logic,
but also starts up headless instances of Weston with a custom plugin
to ensure that Kodi responds correctly to state changes.