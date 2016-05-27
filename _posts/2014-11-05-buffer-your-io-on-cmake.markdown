---
author: smspillaz
comments: true
date: 2014-11-05 10:32:23+00:00
layout: post
link: https://smspillaz.wordpress.com/2014/11/05/buffer-your-io-on-cmake/
slug: buffer-your-io-on-cmake
title: Buffer your IO on CMake!
wordpress_id: 3319
---

A small CMake optimisation win that's probably worth sharing.

Calling

    
    file (APPEND


can **massively** impact your configure time performance. Especially on Windows, where it appears that filesystem writes are unbuffered (at least this is the case for CMake on Windows or Windows generally. I'm not sure).

**BufferedIO.cmake**

    
    set (MY_FILE_CONTENTS)
    foreach (VAR RANGE 500)
        list (APPEND MY_FILE_CONTENTS "${VAR}\n")
    endforeach ()
    file (WRITE output ${MY_FILE_CONTENTS})


**AppendEverything.cmake**

    
    set (MY_FILE_CONTENTS)
    foreach (VAR RANGE 500)
        file (APPEND output "${VAR}\n")
    endforeach ()



    
    $ time cmake -P BufferedIO.cmake
    
    real 0m.032s
    user 0m0.000s
    sys 0m0.000s
    
    $ time cmake -P AppendEverything.cmake
    
    real 0m.657s
    user 0m0.000s
    sys 0m0.000s


Ouch.
