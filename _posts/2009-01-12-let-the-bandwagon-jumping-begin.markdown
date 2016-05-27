---
author: smspillaz
comments: true
date: 2009-01-12 14:27:32+00:00
layout: post
link: https://smspillaz.wordpress.com/2009/01/12/let-the-bandwagon-jumping-begin/
slug: let-the-bandwagon-jumping-begin
title: Let the bandwagon jumping begin.....
wordpress_id: 379
---

First!!!

klange seems to be away for a bit along with the code to [SpringDesk](http://smspillaz.wordpress.com/2009/01/02/yet-another-mockup-springdesk/), which is updated and I also can't retrieve it, so I decided to start porting plugins to the [compiz++](http://lists.freedesktop.org/archives/compiz/2008-December/003227.html) branch, which more likely than not looks like the direction we will be heading in. This was also a good oppurtunity for me to learn C++, so I learnt it the way I learn't C. Trial and Error through compiz code ;-). In all seriousness, this first really insignificant piece of work took me roughly 5-6 hours to get right, because I suck at everything I first start at.

Without further ado I present to you [lazypointer++!!](http://gitweb.compiz-fusion.org/?p=users/smspillaz/lazypointer;a=shortlog;h=refs/heads/compiz%2B%2B)

Yes, yes, possibly the most useless and annoying plugin I've ever made, but it's a start, at least a psycological start for me and provides me some knowledge on how compiz++ plugins should work.

Also, regarding compiz++ itself, here are some first thoughts:



	
  * It's quite fast. To start anyways with, what 6 plugins? Still, considerably faster than normal compiz from what I've noticed.

	
  * Also quite nice that it can run without any OGL/composite. Tried it with the 'nv' driver and it works fine, even if it is quite dull ;-)

	
  * The developer interface is really quite nice once you get used to it. We used to have to do a whole bunch of messy memory management, linked list management, function hooking, call chains privates handling and inheritance ourselves by mucking around in the code. All this is done in the background for you in compiz++,  Much less code is now required.


So. Unofficial compiz++ port number one is on the list. Let's keep the ball rolling!

PS: The 'Makefile' inside the lazypointer plugin compiz++ repo is more recent than the one in the crashhandler compiz++ repo and includes some fixes by Dennis to link to other compiz plugins properly (like composite and opengl).  Edit: Looks like onestone just fixed it. Used his.

PPS: New C++ developers might want to check out http://www.mindview.net/Books/TICPP/ThinkingInCPP2e.html and http://www.parashift.com/c++-faq-lite/ and also the 'c++filt' tool is really useful for demangling the symbol names in symbol errors.
