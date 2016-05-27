---
author: smspillaz
comments: true
date: 2008-03-09 11:14:35+00:00
layout: post
link: https://smspillaz.wordpress.com/2008/03/09/compiz-fusion-community-news-for-february-9-2008-kde-4-plugins-are-in/
slug: compiz-fusion-community-news-for-february-9-2008-kde-4-plugins-are-in
title: 'Compiz-Fusion Community News for March 9, 2008: New forum theme (finally)!'
wordpress_id: 229
---

Hello there!

So after another spike in news and then a break we have yet another spike in news. It seems that everything goes quiet when I write this and then all of the sudden a whole bunch of new features are added and bugs fixed. Anyways, there are some more new features for you users out there and I'm sure you'll enjoy them! Among the highlights are:



	
  * Session manager integration and support

	
  * Wiimote rewrite

	
  * New animations

	
  * Compiz Desktop Menu

	
  * **New forum theme!**

	
  * 0.7.2 Development release


Some bugs have also been fixed as well.


## News in Bugs





	
  * Fixed broken focus fade and dodge for dialogs

	
  * Focus fade does not occur if windows do not overlap

	
  * Slight jump in magic lamp animation fixed

	
  * Fixed crash in animation when some multi-list animations are left blank

	
  * Stability fixes for wiimote

	
  * Fix the pulse animation in the group tab bar

	
  * Match settings now show a tooltip long descriptio

	
  * Compiz-Fusion-Settings and simple-ccsm ABI adaptations

	
  * Replace deprecated gdk_*API's in emerald

	
  * Fix possible crash in DBUS plugin

	
  * Viewports don't switch if a window requests focus

	
  * Fix erase mode in annotate

	
  * Edgebutton functions now terminate when you release the button

	
  * Winrules won't affect override_redirect windows

	
  * CubeDBUS model loader finally fixed, does animation too




## News in Features




<blockquote>

> 
> ### **Session Support:**
> 
> 
**maniac** and **Amaranth** got around to completing the session manager support via core session functions and the session plugin. The session plugin allows compiz to communicate with the session manager to save / load window state - including:

> 
> 
	
>   *  Window Geometry
> 
	
>   *  Window State
> 
	
>   *  Whether the window is minimized
> 
	
>   *  The workspace the window was on
> 

All those who have session support enabled in GNOME or KDE should try it out - all your open windows will no longer be restored to the same workspace at the same time, creating a whole bunch of clutter.</blockquote>




<blockquote>

> 
> ### **New animations:**
> 
> 
User **kdubois **has hacked together some new animations for the animation plugin. They are **Helix**, **Blinds**, and **Sandstorm** (Not available yet, stay tuned) Here are some videos of them in action

[youtube=http://www.youtube.com/watch?v=A8dBrrZ9QbQ]

_Helix Animation_

[youtube=http://www.youtube.com/v/BOPZqC7sKCc]

_Blinds animation _

[youtube=http://www.youtube.com/v/ZrBEvHknxco&rel=1&border=0]

_Sandstorm animation _

Try the first two out over at [this forum thread](http://forum.compiz-fusion.org/showpost.php?p=51401&postcount=16)</blockquote>




<blockquote>

> 
> ### Compiz Desktop Menu
> 
> 
**crdlb (A.K.A credible)** has tried his hand at C and has come up with a compiz desktop menu, much like desktop click menus provided by other window managers such as enlightenment and fluxbox. A screenshot is below:

[![dktop1.png](http://smspillaz.files.wordpress.com/2008/03/dktop1.png)](http://smspillaz.files.wordpress.com/2008/03/dktop1.png)

There is also a menu editor to add / edit more things to menu, but I'm not able to run it at the moment. When I can, I'll post a screenshot. Or you can [try it out yourself ](http://forum.compiz-fusion.org/showthread.php?t=7070)

> 
> ### Wii Remote plugin re-write
> 
> 
For all of you who have a Wii Remote, I've re-written the plugin to make it a little more sane. You can find it on git. I'll have a video of what's possible up soon</blockquote>




## Official Stuff




<blockquote>

> 
> ### NEW FORUM THEME!!!!
> 
> 
Me sounding a little over-enthusiastic about this is a tad unprofessional, but the new theme is absolutely amazing. HUGE thanks to iXce, his mate, wfarr and RYX for getting this done. I'm glad that the old ugly default theme can finally be replaced!

Also, a forum upgrade to vBulletin 3.7 took place and introduces a ton of new features for you guys. Among those are:

> 
> 
	
>   * AJAX image preview within the browser
> 
	
>   * Digg / Google /  del.icio.us / StumbleUpon integration
> 
	
>   * Thread tagging
> 
	
>   * Many more small improvements!
> 

</blockquote>




<blockquote>If you are still stuck on the old theme, you can head down to the bottom of the page and select 'Compiz-Fusion' from the combo-box</blockquote>




<blockquote>

> 
> ### Compiz Fusion 0.7.2 released
> 
> 
The next release in the development series of Compiz Fusion is out now. Compared to 0.5, this release includes:

> 
> 
	
>   *  Session Management in _compiz-fusion-plugins-main_
> 
	
>   *  Mag plugin in _compiz-fusion-plugins-main_
> 
	
>   *  Showmouse plugin in _compiz-fusion-plugins-main_
> 
	
>   *  Mousepoll plugin in _compiz-fusion-plugins-main_
> 
	
>   * 3D plugin in _compiz-fusion-plugins-extra_
> 
	
>   *  Login/Logout effect in _compiz-fusion-plugins-extra _
> 
	
>   *  Maximumize plugin in _compiz-fusion-plugins-extra _
> 
	
>   *  Notification plugin in _compiz-fusion-plugins-extra_
> 
	
>   *  Shelf plugin in _compiz-fusion-plugins-extra_
> 
	
>   *  Showmouse plugin  in _compiz-fusion-plugins-extra_
> 
	
>   *  Atlantis plugin  in _compiz-fusion-plugins-unsupported_
> 

</blockquote>




<blockquote></blockquote>




<blockquote>

> 
> 
	
>   *  Special editors for Key, Button, Edge and Edgebutton actions
> 
	
>   *  Window matches can be edited with a window match editor
> 
	
>   *  Advanced search in CCSM improved
> 
	
>   *  Simple settings manager added for new users
> 

</blockquote>




<blockquote>Big thanks to all the developers, support team, testers, translators and enthusiastic and patient user base for making this release a reality</blockquote>




## Other Stuff




<blockquote>

> 
> ### GNOME-Do
> 
> 
GNOME-Do has received quite some attention over the past few days. It is essentially a composite aware katapult and quicksilver like app for GNOME. It can be used to perform common system tasks at a keystroke. A screenshot is below:

[![dktop2.png](http://smspillaz.files.wordpress.com/2008/03/dktop2.png)](http://smspillaz.files.wordpress.com/2008/03/dktop2.png)

[Get it here](https://wiki.ubuntu.com/GnomeDo/Installation)

> 
> ### Screenlet of the Week
> 
> 
I did some poking around the screenlets forum, and I must say that I love the simplicity of the CircleClockScreenlet. Here is a screenshot (Integrates quite nicely with my desktop :) )

[![dktop3.png](http://smspillaz.files.wordpress.com/2008/03/dktop3.png)](http://smspillaz.files.wordpress.com/2008/03/dktop3.png)

> 
> ### Tip of the Week : RGBA Apps in GNOME!
> 
> 
EDIT: Removed at the request of citiman. He doesn't want it to be public at the moment. Have a look at OasisGames' post for more info</blockquote>


Well that's it for this edition of Compiz Fusion Community News. I'll be putting videos of my Wiimote plugin up soon along with other things. Until next time, see you and keep having fun with Compiz Fusion!

- (It's almost our first anniversary soon!)
