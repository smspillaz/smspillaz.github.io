---
author: smspillaz
comments: true
date: 2007-06-04 11:46:44+00:00
layout: post
slug: soon-to-be-named-community-news-edition-5-for-june-2-2007-names-fanfare-and-zoom
title: 'Soon-to-be-named Community News edition 5 for June 2, 2007 : Names, Fanfare
  and Zoom?'
wordpress_id: 14
---

**Background** : I welcome you to yet_another edition of STBNCN, yes _STBNCN_ as we are currently in the process of suggesting and voting on new names for the project. I am your chief talk-randomly-guy-about-almost-nothing, SmSpillaz! A lot of core stuff has gone into GIT allowing for a lot of new functionality, but has not been used yet as it is hot off the frying pan (So to speak).
**
This week in bugs:**
- Multihead fixes in Expo and soon-to-be in Cube
- Compiz starts correctly when using Compiz-Icon (Go-Compiz tray) to launch
- CCSM doesnt crash/lock up when dialog boxes appear
- AJAX quick reply added to the forums
- Portal added to the forums (Where you can find this blog :D )
- **Walking interface** - Transparent cube and 3D plugin are closer than ever.
**
This week in features :**

Well, DavidR has completely re-written the Zoom plugin, and has added some cool new stuff. For one, you can now select the area you want to zoom to by holding down <Super/Windows>+RightClick. It does not zoom completely to your area unless it is the same aspect ratio as your screen, it does this so that things dont get distorted. You may notice a cursor in your zoomed area, but that does not mean that you can interact with buttons (yet), it just means that you can use 'Zoom to area' further in.

Compiz Icon application now supports ENV variables. This means that if you use AIGLX or the like, you  can start compiz successfully.

**
Events last week :**

LinuxTag 2007 - Matthias Hopf, one of the co-developers of Xgl and Compiz did a presentation showcasing compcomm packages with things like Transcube, Ring and animation and certainly got the crowd going :D. Well done Matthias!
**
Tip of the Week :** (Thanks to Jupiter for this)
If found this on the FAQ section of the forums. If anyone else has tips, they can PM me them.

"To set opacity levels of objects "windows, menus, etc..." you will want to enter values in
CCSM --> Genreal Options --> General --> Opacity Window Values --> "percentage of opacity"
and in
CCSM --> Genreal Options --> General --> Opacity Windows
You will use a value such as "title - The title of the window, role - The role of the window,
class - The class of the window, name - The name of the window"

The first setting in "Opacity window value" corresponds to the first setting in Opacity Window"
and on down the line.

A basic match looks like this. You must use correct syntax "not Menu but menu"
"read further for how to find it"
Image

If you want to invert the selection you just put a ! before it, ie.

!type=desktop

This will match all windows that are NOT type desktop.

You can string different expressions together with these logical operators

| = OR
& = AND

So you could do something like this

type=desktop | type=dock

This would match your desktop or your dock (panel)

You can group expressions using brackets '(' and ')'

The core functionality has 4 different attributes that you can match against.

type - Matches the window type
state - matches window based on state, use one of modal, sticky, maxvert, maxhorz, shaded, skiptaskbar, skippager, hidden, fullscreen, above, below, demandsattention
xid - matches the id of the window (this can only be added after the window is created so will not normally
be used by users).
override_redirect - Set to 1 to match override_redirect windows. This can be used to exclude firefox menus
because they match this (type=Normal & override_redirect=1)

The regex plugin adds these extra matching abilities, you must have it loaded for them to work.
title - The title of the window
role - The role of the window
class - The class of the window
name - The name of the window

You can find the "name, class, role, title, etc..." by typing these commands
in a terminal and then clicking the object you are trying to define.

type (window type)
xprop | grep WINDOW_TYPE | cut -d _ -f 10

class (window class)
xprop | grep WM_CLASS | cut -d \" -f 4

name (class name)
xprop | grep WM_CLASS | cut -d \" -f 2

title (window title)
xprop | grep "WM_NAME(STRING)" | cut -d \" -f 2

program (owning program)
ps -o comm= -p $(xprop | grep "_NET_WM_PID(CARDINAL)" | sed 's/.*= //g')

role (class role)
xprop | grep "WM_WINDOW_ROLE(STRING)" | cut -d \" -f 2

All of these values can use regular expressions.

EXAMPLES:
(Toolbar | Menu | Utility | Dialog | Normal | Unknown) & !title=.*Firefox

(Toolbar | Menu | Utility | Dialog | Normal | Unknown) & !class=Firefox-bin

Here's a few use cases that you can try out today if you just pull the
latest bits from the master branch.

1. Simple window matching for a specific action. I've added a
focus_prevention_match option which allow you to specify which windows
focus prevention should apply to. E.g. when having the regex plugin
loaded you can set the option to something like this:

"(!class=Gecko | title=*Pref*) & !class=.*terminal.*"

2. Keep a consistent state which depend on some window properties. The
blur plugin now include an option which allow you to specify for which
windows destination blur should be automatically enabled when no window
property is set. If you set that option to:

"title=.*terminal.*"

the plugin will need to know when the title changes to something that
might make that match no longer true or the other way around. The
matchWindowPropertyChanged function exists for that purpose and by
wrapping that function you'll know when some window property that might
affect the window matching you're doing have changed and you can then
re-valuate the matching for that window.

3. Can be use to dynamically specific which windows an action should
apply to. I've updated the initiate actions in the scale plugin so it's
possible to provide a match option as argument to any one of them. This
means that an external source can initiate scale mode for a specific set
of windows. E.g. by using the dbus plugin you can do this

dbus-send --type=method_call --dest=org.freedesktop.compiz /org/freedesktop/compiz/scale/allscreens/initiate org.freedesktop.compiz.activate string:'root' int32:`xwininfo -root | grep id: | awk '{ print $4 }'` string:'match' string:'class=Gnome-terminal'

to initiate scale mode only for gnome-terminal windows. You can use
something like "string:'xid=0xc1cd78 | xid=0xc200a0 | xid=0xc2100b'"
instead if you want to specify the exact windows."

Thanks to Jupiter for that :D
**
This week in Names :**

The list of names stands at this so far :

_Current accepted proposals list:_

* coco (* 5)
* OC² (* 2)
* Cobalt (* 5)
* Compound (* 1)
* Azure (* 1)
* Blitz (* 2)
* Coral (* 28)
* Fusion (* 3)
* Nova (* 2)
* Terra (* 1)
* Sibyl (* 2)
* Complex (* 2)
* Tellurix (* 2)
* Kalos (* 2)

Note : the * numbers after the names just show how often they were raised, it's NOT the actual vote.

**Conclusion : **Yes, its that time where we give ourselves a name. Voting has begun as of now. Next week we will see some more cool stuff and hopefully we will have a name, branding and a website withing the next few weeks :D. If you have any Q's or whatever email me at SmSpillaz(at)gmail(dot)com (I GET NO SPAM!!!)

_Another STBNCN is, er in the CAN!_

-SmSpillaz and the OpenCompositing team
