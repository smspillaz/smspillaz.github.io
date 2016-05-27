---
author: smspillaz
comments: true
date: 2008-04-26 01:59:28+00:00
layout: post
link: https://smspillaz.wordpress.com/2008/04/26/compiz-white-black-frozen-screen-fix/
slug: compiz-white-black-frozen-screen-fix
title: Compiz White & Black Frozen screen fix
wordpress_id: 266
---






Hi,

If you are getting a freeze and black & white screen ever since the latest compiz-git, just issue a:

    
    <span style="text-decoration:line-through;">git revert 0c1fc202acbfdc66751b97a59d3a962ed66579b9</span>


in your compiz sources directory.

EDIT: onestone has added a workaround. Just update compiz.

If you are not experiencing this issue, _**IGNORE**_ this post.

- SmSpillaz





