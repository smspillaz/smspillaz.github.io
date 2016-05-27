---
author: smspillaz
comments: true
date: 2007-06-12 09:13:33+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/06/12/compcomm-broke-after-update-fix/
slug: compcomm-broke-after-update-fix
title: CompComm Broke after update fix
wordpress_id: 26
---

Recently, two updates were committed which may have broken CompComm. The first update was moving relevant header files to a different directory. This may have broken the build process for you. The recommended fix is to execute


<blockquote>_make clean_

_make_

_make install_</blockquote>


In the affected directories. If it still doesn't work, try it again.

The other update involved the renaming of CCS to LibCompizConfig. This may have broken compiz for some users and compiz may exit with this error:


<blockquote>_compiz (core) : ERROR : couldn't load plugin 'ccp'_</blockquote>


The fix is to execute the following


<blockquote>_sudo rm -rf /usr/local/lib/compiz_

_sudo rm -rf /usr//local/lib/ccs_

_sudo rm -rf /usr/lib/compiz_

_sudo rm -rf /usr/local/include/ccs_</blockquote>


Then in the 'ccs-lib'  folder where you checked out packages to, execute


<blockquote>_make clean && ./autogen.sh --prefix=/usrlocal && make && sudo make install_</blockquote>


That should fix most of your problems.
