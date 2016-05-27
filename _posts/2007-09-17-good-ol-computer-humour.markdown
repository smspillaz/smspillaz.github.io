---
author: smspillaz
comments: true
date: 2007-09-17 15:07:15+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/09/17/good-ol-computer-humour/
slug: good-ol-computer-humour
title: Good ol' computer humour
wordpress_id: 107
---

So I was compiling GTK-Gnutella today and thier autogen.sh file requires quite a bit of user imput. Here are some screenshots you may find funny

[![screenshot2.png](http://smspillaz.files.wordpress.com/2007/09/screenshot2.png)](http://smspillaz.files.wordpress.com/2007/09/screenshot2.png)

[![screenshot3.png](http://smspillaz.files.wordpress.com/2007/09/screenshot3.png)](http://smspillaz.files.wordpress.com/2007/09/screenshot3.png)

[![screenshot4.png](http://smspillaz.files.wordpress.com/2007/09/screenshot4.png)](http://smspillaz.files.wordpress.com/2007/09/screenshot4.png)

Heh. Sadly, My system KP'd when it compiled. Some kind of infinite loop. Godammit. Look's like I'll have to find a package.

Oh and did I tell you that I am working on a simple configuration tool for compiz itself. The libcompizconfig bindings are soo much easier than Gconf, About half the lines I used to have to write. And you don't have to know the type! The setting just holds a value, and you can set a new value by equating it. For example


<blockquote>core.Screens[0]["hsize"].Value</blockquote>


just holds an int of 4, but I can easily change that to 5 with


<blockquote> core.Screens[0]["hsize"].Value = 5</blockquote>


then writing it with


<blockquote>context.Write()</blockquote>


The same also goes for boolean, string and float values! You dont need to go into gconf anymore and the have


<blockquote>set_string

set_float

set_int

set_bool</blockquote>


for __every_single_setting__ !

To get a value, just use


<blockquote>value = plugin.Screen (/Display for display options)[ScreenNum (Usually 0)]["option_name"].Value</blockquote>


And that will return an interger if it is an int type, a number (with decimals) if it is float, a string if it is a string and True / False if it is bool! Execellent. And to set a value, instead of jumping through hoops with set_value_blah(args), you just set a new definition for the setting!


<blockquote>value = plugin.Screen (/Display for display options)[ScreenNum (Usually 0)]["option_name"].Value = foo</blockquote>


*Applauds CompizConfig-Python devs*

Blog will be up tommorow or the day after. Screenshots of my config tool will be out soon. This time I used glade! (But I won't rant about how good glade is 'cause I'm out of time ;-) Long story short : It's much simpler and easier to follow)

- Sam
