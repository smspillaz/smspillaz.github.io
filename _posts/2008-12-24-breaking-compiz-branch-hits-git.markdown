---
author: smspillaz
comments: true
date: 2008-12-24 14:12:00+00:00
layout: post
slug: breaking-compiz-branch-hits-git
title: 'BREAKING: compiz++ branch hits git'
wordpress_id: 373
---

Dennis "onestone" Kasprzyk has done it again!

Ladies and Gentlemen what you are seeing here may well be the future of compiz as we know it, in a new compiz branch called compiz++ which allows for really neat things like:

- Running compiz without any opengl/composite, just like a normal WM
- Possibly an XRender backend and or clutter backend
- Decoration reparenting
-- Completely reworked multi-display/screen code:
-- Per screen plugin lists (e.g. cube on one screen and wall on the other)
-- Rendering of one screen can not block the rendering of the other screen
-- Different libGL per screen (with LD_PRELOAD)
-- Simplier plugins
-- Simplier option handling
- Intelligent plugin wrap/unwrapping. Now compiz can use less CPU when idling!
- Rewrite to C++:
-- Smarter function callbacks with Boost (boost::function/boost::bind)
-- Easier and smarter privates system (get the plugin struct for a given core struct/old FOO_SCREEN (s), FOO_WINDOW (w) macros). The new system hides most of the ugly handling from a plugin developer and provides a new simple and ABI safe way to work with plugin plugins (plugins that expose features/functionality to other plugins)
-- Constructors/Destructors allow easier initialisation/cleanup for a lot of systems.
-- Containers avoid the implementation of lists and resizeable arrays over and over again.
-- Containers like maps and other smart classes can improve performance in several areas.
-- ...

There are currently branches in libcompizconfig, bcop and crashhandler for this kind of work.

If this is the future (and hopefully it will be) then expect some work to halt and a lot of breakage (for now) as the team needs to port almost 100 plugins to the brand new core.

Have a good (insert holiday here)!

- Sm

_EDIT: There seems to be a mixed response in the comments. This is always a good thing of course, discussion and debate is what drives progress,  but here is my take on things as a developor:_

_C++ seems to be the most debated point here. It is a big change from a developer standpoint because it introduces it's own limitations and oppurtunities. Personally, I don't know much about the language, other than it is object-orientated, and it would appear that it is onestone's favorite language (some of libcompizconfig and all of the kde-* stuff is c++ already, and to be honest, when he said to me a few months ago that his secret project was 'more a rewrite', I pretty much guessed that he was going to rewrite compiz in c++. I even guessed the name 'compiz++'). I do need to stress however that this is a __**rewrite** and not a port so I am sure that onestone has carefully thought about how compiz would fit into such._

_Speed appears to be another issue, the immediate reaction was 'C++ introduced overhead'. I guess what would need to be considered here is the other stuff 'compiz++' introduces, for example the intelligent wrap/unwrap system is a godsend for speed because it means that we aren't executing code we don't actually need to use (A lot of plugins in the paint functions get called from wrap, most of the time all they do is prepare some variables, do some boolean checks to see if they should be doing anything and then unwrap again, this would prevent that). Again, as one user said in the comments (not a direct quote) 'It's really all up to what functions you use'._

_Lots of developers may or may not be driven away from a C++ architecture. I personally don't know C++ (only C) as I have never felt the need to learn it now. I've started learning it and it's really not all that hard from a plugin-developer standpoint, just move from setting variables directly to using the inbuilt getters and setters and using methods more etc. _

_Certain things will of course be different under the new architecture, I'm sure that we need to re-think a lot of our code to optimise under and object-orientated model, for example we could just create a new 'cube' in a plugin for some textures and use it's methods to rotate it independently of other cubes. Or in my animation rework, we no longer need to handle all the animation tracking in animation, plugins can just create new animation objects on the fly._

_Anyways thats my 2c. Onestone wanted a general agreement among developers before it goes forward and wanted to avoid any forks._

_-Sm
_
