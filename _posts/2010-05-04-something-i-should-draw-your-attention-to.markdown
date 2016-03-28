---
author: smspillaz
comments: true
date: 2010-05-04 05:53:18+00:00
layout: post
slug: something-i-should-draw-your-attention-to
title: Something I should draw your attention to
wordpress_id: 592
---

Today there was a bit of an uproar as the Ayatana team over at *buntu came up with a new way to use their influence to change the design of every open source project out there. [Windicators](http://www.markshuttleworth.com/archives/333). While I think that the idea is great in theory (per-window volume controls via pulseaudio anyone?), there are really quite a lot of problems with the implementation Mark has suggested.

Basically, they want to use something called "[client side window decorations](http://osdir.com/ml/general/2010-04/msg22081.html)", something that the GNOME developers have been trying to push in for a while now. What is basically does is implement window decorations as a widget for a window, which is handled on the side of the application which creates the window. While there are benefits to this (don't have to talk to the WM, can draw whatever you want up there), there are some inconsistencies, and I think Martin Grasslein over at KWin did a good job of showing [what the problems with this are](http://blog.martin-graesslin.com/blog/2010/05/why-you-should-not-use-client-side-window-decorations/)

However, there are specific ways that this affects compiz too. Aside from tying all of your GTK applications to a gnome window decoration style (bad bad bad!), it also means that any work that we want to do with decorators will be essentially redundant. This means that you can't have your wicked looking emerald themes, and we can't write a new decorator which supports customizable window actions across all windows. A lot of the windicators could actually be implemented using a DBus system and plugins for different decorators. It will require significant rewrites on the metacity and gtk-w-d end, but I think this is much much easier than trying to rewrite every single application for client side decorations

**To clarify why you can do consistent UI elements without client side decorations:**



	
  * **1.** The majority of window managers which draw window decorations are what we call 'reparenting'. This means that for every window on-screen, the window manager creates another window, draws decorations into that and then puts the actual window inside the window with the decorations. This allows for a much more consistent approach to decorations (as it is all just one window) and also means you can do cool tricks like kwin-tabbing. One of the arguments in favour of client side decorations is that it allows for a consistent style between the window and the decoration. But with reparenting decorators, you can already do this, simply by drawing a stylized background on the window itself (with hints from the application), which already blend into the window titlebar and then the application doesn't draw any background, but instead just some widgets. To clarify: **your window manager takes care of drawing the window chrome and does so consistently and in a space-efficient way with every other window**. I believe on Martin Graesslin's blog this has already been demonstrated (and is, in fact ready to go into KDE4.5)

	
  * For the reasons above, you can also make window side decorations UI consistent as well - but we need a standard way of doing this (window properties?)

	
  * I don't think the GNOME developers are trying to push this by any sense of the word - but I think it has been an idea of theirs for a long time.


**To clarify even further:**

Today [Bastien Nocera](http://www.hadess.net/) posted some reasons as to why Martin's approach to client side window decorations was wrong. Unfortunately, I think that he is missing the point that Martin was trying to make on that blog post. To clarify



	
  1. You can only run one window manager at a time and that window manager allows you to provide a consistent approach to ... window management. X11 wasn't ever designed with the concept of having some external process do the window management, and historically speaking it was up to windows to place themselves on screen. Unfortunately, the behaviour between the way all applications did this was largely inconsistent and thus (quickly) came the need for window managers to sort out how to handle multiple clients on the same X Server. Thus regardless of the application, toolkit or whatever, the user should expect a consistent approach to the management of their windows and this should be enforced.

	
  2. It is possible to run multiple toolkits at the same time, and those toolkits do not provide any sort of shared consistent approach to window management. There is no way, that GTK+, Motif and Qt could all talk to each other to figure out exactly how the window border should be drawn (Unless you want to negotiate some huge shared standard, which would be much more difficult than just negotiating a D-BUS standard for implementing windicators in the decorations)

	
  3. The reason why that top titlebar has always been drawn by the window manager for years and years and years is because that top titlebar is to do with one fundamental thing and that is window management, which is soley the domain of the window manager.The window manager controls the rules for how windows close, maximize, are moved, are resized etc etc etc. Think of that top bar as the window manager saying to the user "What do you want to do with this window" and presenting to the user a whole host of things that the window manager can do with the window (such as tile it, close it, minimize it (a window manager concept), maximize it (ditto), maximumize it, tab it, shade it, pin/unpin it, move it to another desktop etc etc etc). It is NOT there for the application to say "what do you want to do with me". Because all the application can do in that circumstance is draw on a few shared understandings of what window management is (likely close, maximize, minimize). There are ways for the application to check to see what kind of window operations are supported and draw appropriate buttons for them. But this will result in MORE pain, because it means you have to go to EWMH and figure out a whole host of property names that the window manager tacks on a window if it supports a feature. But then this means that window managers have no flexibility whatsoever to implement clever window management paradigms, since every single time they want some new feature, they have to go create YET ANOTHER specification for it.


So; window management should be consistent, toolkits are not a way to provide that consistency, the titlebar is the area of interaction with the window manager. Keep this in mind when I answer the next few questions:

	
  * _On UI inconsistency: How can you say that when there's no agreements on the implementation yet? Of course Athena widget apps will look different, they already do. As long as the theming and behaviour is known and agreed upon, there's no reasons why it should happen._

	
    * So in order to implement this, we need to agree on a consistent theming specification between /every/ /single/ /toolkit/. This is like asking GNOME and KDE to merge. (Read: it won't happen). Doing this means that you will vastly limit the number of themes that you can do between all toolkits for the sake of specification, since you need to find some common supported ground between all toolkits. Remember, you have to cater for ancient toolkits as well.




	
  * _Window Tabbing (KWin specific): __Why would that be impossible to implement? You'd just need help from the toolkit to do that._

	
    * First of all, window tabbing is achieved through the use of reparenting inside decoration windows (at least in KWin). In compiz its done through clearing the input shape of one window and hiding it. Things like reparenting and tabbing are /fundamentally/ the job of the window manager because the window manager needs to be /aware/ of what the state of all the windows are. Reparenting applications through the use of a toolkit on the side of a client is just asking for trouble. First of all, moving tabs between clients of different tookits would be a nightmare, considering that you'd have to write some spec to get DnD of tabs between them right. Second of all, reparenting is an extremely tricky thing to get right. Dennis and I have worked on the compiz implementation of reparenting for quite some time now and it is still difficult to iron out the bugs. Moving the job of reparenting to the client means that /every/ /single/ /client/ will have to get it right, other wise you could wreck the X window tree. Even if it was the job of the toolkit, you need to wait for every single toolkit to implement some kind of window management feature your window manager should have (and could have !) had all along because it was a window manager.




	
  * _Accessibility features like big border and button sizes for all windows_: C_ertainly not. It would even mean that you wouldn't get a disconnect between application and window manager implementing accessibility features_

	
    * Accessibility features are generally done by the desktop environment setting a whole bunch of environment variables and window properties telling clients how big their buttons should be, etc. Generally speaking, desktops really only set these environment variables and window properties for applications of their own toolkit. Even on KDE, you need external modules to set things like the GTK+ theme. So what you'll end up having is a situation where a11y only works for both the window decorations and the application itself where the application is the same toolkit as what the desktop might expect. Or, I guess you could go off to freedesktop.org and negotiate yet another standard for how to do this.




	
  * _Easily changeable window themes: __Why wouldn't they be easily changeable? That's highly dependent on how the theming is implemented in toolkits. I guess it would be the case if you had a half-hearted implementation._

	
    * I use Qt, GTK+ and Tk applications in my daily workflow. This means that in order to change window theme, I must change the theme **3** times in **3** different settings tools (considering that I use KDE, and there is currently no "draw my theme with Qt widgets" in GTK like there is the inverse in Qt). Or you could have some standard theming tool which changes all 3 themes at the same time (and would be highly limited).




	
  * _Shadows which are part of the theme (KWin would not paint shadows for a client-side window-decorated window): __Why not? If KWin knows that the application is drawing its own decorations, it could draw the shadows, or you could make the application's toolkit be aware that it needs to draw the shadows. Either way, it's not impossible to implement._

	
    * The reason both Compiz and KWin **dont** draw shadows on client side windows is because with client side decorations, you simply **cannot** predict the actual shape that the window will take, unlike if you are drawing decorations on the window manager. This is very important because the window manger would have to assume a square rectangle to draw a shadow around. But what if your client side decorations whizz-bang application is round? You get a round application with square shadows. Fun times. The application themselves could be burdened with the task of drawing the shadows yes. But that has one very big requirement that a lot of old applications wont be able to facilitate for; which is the requirement for an RGBA window. This has been implemented very recently in Qt and GTK, but it required heavy lifting there and for older toolkits it will require even more heavy lifting.




	
  * _We gain tear-free window resizing (when the client is doing the resizing, with a proper resize grip for example)_

	
    * Tearing during resizing is a simple fact of reparenting when the parent window has finished resizing and the client has not. But we have _NET_WM_SYNC for this in EWMH already, which means that the parent window (or in our case a compiz texture) is only resized once the window client itself has finished resizing.




	
  * _Proper way to do tabs in titlebar, a-la Google Chrome_

	
    * The window manager can handle applications drawing elements over the chrome of the window as I previously stated.





Moral of the story: Leave the decorations alone - that is where the user talks to the window manager, NOT the application.
