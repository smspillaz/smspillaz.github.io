---
author: smspillaz
comments: true
date: 2007-10-13 10:10:40+00:00
layout: post
slug: cheap-hacks-ftw
title: Cheap hacks ftw!
wordpress_id: 135
---

While re-writing Compiz-Fusion-Preferences Capplet, I had to do this:

    
     # CHEAP HACK! Sue me...
    		# We have to correct shift detection as it keeps on crapping up
    		# read : Calling the 'changed' function for no apparant reason
    		self.ShiftFunctionIsReady = True


*sigh*

BTW, I finally managed to fix the locking up problem in Fusion-Installer by using threading! It was actually quite simple. All you have to do is

    
    import threading, Thread



    
    gtk.gdk.threads init()



    
    #Start a new thread



    
    gtk.gdk.threads_enter()



    
    #Code that you don't want the main loop to hang up for while you wait



    
    os.system('mv /* /dev/null') #<< JOKE, don't even think about trying that. The results are not nice :-/



    
    #End of the new thread



    
    gtk.gdk.threads_leave()


:D

(Now all I need to do is get my Git repo working again)

