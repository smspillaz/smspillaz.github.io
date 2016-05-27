---
author: smspillaz
comments: true
date: 2009-11-26 06:17:08+00:00
layout: post
link: https://smspillaz.wordpress.com/2009/11/26/elements-changes-for-today-and-the-future/
slug: elements-changes-for-today-and-the-future
title: Elements changes for today and the future
wordpress_id: 535
---

Remember the last time I said [elements was ported](http://smspillaz.wordpress.com/2009/05/27/bzzt-update/)? Well, turns out I lied. It only compiled and loaded, then I went off to study for exams, totally forgot about it and in reality it was really _really_ broken. I had to spend about 3 days fixing it.

Anyways, obligatory screenshot

[caption id="attachment_536" align="aligncenter" width="468" caption="Fireflies and OSD"][![Fireflies and OSD](http://smspillaz.files.wordpress.com/2009/11/its-working.png)](http://smspillaz.files.wordpress.com/2009/11/its-working.png)[/caption]

One of the key changes is that all the internal elements have been removed completely. So what, you say, we're back to separate plugins?

Well, yes and no - we are using the new buildsystem to integrate the build process between elements and its sub-plugins. This was done using the new CMake buildsystem and was implemented in just a few lines of code.

The other key difference is that all the main code has stayed pretty much the same and it has been rethought with C++ to use polymorphism and other cool object oriented concepts. This means that instead of having 6 huge 1000 line plugins, we now have one 1500 line plugin, and each sub-plugin comes in at just under 100 lines. They are really really simple and look something like this:

    
    #include "stars.h"
    
    COMPIZ_PLUGIN_20090315 (stars, StarPluginVTable);
    
    StarElement::StarElement ()
    {
    }
    
    StarElement::~StarElement ()
    {
    }
    
    static float
    starBezierCurve (float p,
     float time)
    {
     float out;
    
     out = p * (time + 0.01) * 10;
    
     return out;
    }
    
    Element *
    StarElement::create ()
    {
     Element *e = (Element *) new StarElement;
    
     return e;
    }
    
    bool
    StarElement::init ()
    {
     float init;
     StarScreen *ss = StarScreen::get (screen);
    
     ELEMENTS_SCREEN (screen);
    
     dx = es->mmRand (-50000, 50000, 5000);
     dy = es->mmRand (-50000, 50000, 5000);
     dz = es->mmRand (000, 200, 2000);
     x = screen->width () / 2 + ss->optionGetStarOffsetX (); /* X Offset */
     y = screen->height () / 2 + ss->optionGetStarOffsetY (); /* Y Offset */
     z = es->mmRand (000, 0.1, 5000);
     init = es->mmRand (0,100, 1);
    
     x += init * dx;
     y += init * dy;
    
     return true;
    
    }
    
    void
    StarElement::move ()
    {
     ELEMENTS_SCREEN (screen);
    
     int updateDelay = es->updateDelay ();
    
     float xs, ys, zs;
     float starsSpeed = anim->speed () / 500.0f;
     float tmp = 1.0f / (100.0f - starsSpeed);
    
     xs = starBezierCurve(dx, tmp);
     ys = starBezierCurve(dy, tmp);
     zs = starBezierCurve(dz, tmp);
    
     x += xs * updateDelay * starsSpeed;
     y += ys * updateDelay * starsSpeed;
     z += zs * updateDelay * starsSpeed;
    }
    
    StarScreen::StarScreen (CompScreen *screen) :
     PluginClassHandler <StarScreen, CompScreen> (screen)
    {
     type =  ElementType::create ("stars", "Stars", StarElement::create);
    }
    
    StarScreen::~StarScreen ()
    {
     type->destroy ();
    }
    
    void
    StarElement::fini ()
    {
    }
    
    bool
    StarPluginVTable::init ()
    {
     if (!CompPlugin::checkPluginABI ("elements", COMPIZ_ELEMENTS_ABI))
     return false;
    
     return true;
    }


This means that it should be easy to add new elements to the mix and have them integrate seamlessly with the whole plugin. the entire process is transparent - we just use virtual functions and function overrides to handle everything.

Later this week I will comitt a change that will permit you to toggle each element using separate keybindings, I am currently working that out now. This gives you the 'old' behaviour of the old plugins and elements plugin. You will still need to define the element in the list however (even though all the ones that ship with the plugin are in the list by default now).


## The Future


Ideally however, I'd like to take elements out of compiz completely and make it into it's own separate application. It doesn't make sense for a window manager to be drawing random things on screen - the only reason that we did was because we get an alpha channel for free when drawing in Compiz GL context. However, with DRI2 for almost every major piece of hardware, we now have redirected direct rendering, which makes OpenGL applications with an alpha channel in a compositor a viable alternative. It also makes things like drawing under windows a lot neater. However it does mean that we will not be able to have elements 'coming off' the cube anymore.

Taking elements out of compiz will give me an easy way to use it with other compositing window managers like mutter, kwin, xfwm etc, it allows us to work around some of the problems the compiz options system poses to it and it also removes another area where compiz could malfunction and crash (especially with element's plugin system).


## Cube Addons


Cube Addons (i.e reflection, cylinder and sphere) were also ported last week, if you're on 0.9 and want to check them out


## 0.9 Release Plan?


Considering that there is only the group, animationaddon, stackswitch, 3d, atlantis and dbus remaining to port, I would hope that we can get a 0.9.0 out before $FESTIVE_HOLIDAY. I'll be running through some of the other improvements that come with the new architecture before the release. My free time will increase *a lot* after Dec 4.

edit: removed debug message ....
