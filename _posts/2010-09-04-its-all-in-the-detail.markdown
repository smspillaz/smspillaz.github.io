---
author: smspillaz
comments: true
date: 2010-09-04 11:57:11+00:00
layout: post
link: https://smspillaz.wordpress.com/2010/09/04/its-all-in-the-detail/
slug: its-all-in-the-detail
title: Its all in the detail
wordpress_id: 667
---

Compare the two screenshots:

[caption id="attachment_668" align="aligncenter" width="300" caption="Continuous Dim"][![](http://smspillaz.files.wordpress.com/2010/09/notvignetted.png?w=300)](http://smspillaz.files.wordpress.com/2010/09/notvignetted.png)[/caption]

[caption id="attachment_669" align="aligncenter" width="300" caption="Vignetted dim"][![With Vignetting](http://smspillaz.files.wordpress.com/2010/09/vignetted.png?w=300)](http://smspillaz.files.wordpress.com/2010/09/vignetted.png)[/caption]

The latter uses cairo to render a [vignette](http://en.wikipedia.org/wiki/Vignetting), which dims windows more around the edges than in the center. It does this by rendering a simple vignette texture and then compositing it on to the window itself. The vignette hooks in seamlessly with all of the other compiz effects since it renders it's texture through glAddGeometry and glDrawGeometry ()*. Then it fades in and out accordingly with the existing window brightness.

I think it looks pretty. You can grab the source [here](http://git.compiz.org/~smspillaz/vignetting/).

* It is also nice that I perfected this technique since it is applicable to a few other ideas I had, like per-window annotations.
