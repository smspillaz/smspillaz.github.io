---
author: smspillaz
comments: true
date: 2007-10-21 01:05:12+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/10/21/compiz-fusion-060-is-released/
slug: compiz-fusion-060-is-released
title: Compiz Fusion 0.6.0 is released!
wordpress_id: 156
---

Great news from the dev team as Compiz Fusion 0.6.0, based on Compiz-Core has been released after fixing many bugs and adding a ton of new features. Here is the release announcement - straight from the Compiz Fusion Mailing List:

This is the first stable release of Compiz Fusion[1], the result of more
than six months of work and polish. This stable release is based on
Compiz Fusion 0.5.2, released on the 13th of August. This release is meant
to be used with compiz 0.6.2.

Compiz Fusion is the result of a merge between the Compiz community plugin
set "Compiz Extras" and the parts of the Beryl project that are independent
of the window manager core.  The two communities have re-united to create a
user experience for Linux that rivals anything available on other platforms.

The merge between Compiz and Beryl, combined with the continuing increase in
stability, reliability, and usability both in Compiz, Compiz Fusion and the
surrounding software environment (better driver support and so on), means
Compiz Fusion will be included in many more distributions.  Compiz and
Compiz Fusion will be enabled by default in some of them, such as the recently
released Ubuntu 7.10 "Gutsy Gibbon", making Compiz usage easier for everyone.

The Compiz Fusion 0.6.0 tarballs are available at
http://releases.compiz-fusion.org/0.6.0/ . You can verify these tarballs
using the sha1sums in
http://releases.compiz-fusion.org/0.6.0/compiz-fusion-0.6.0.sha1 , which are
signed by Compiz Fusion Release Team GPG key (C2B8F46E) at
http://releases.compiz-fusion.org/0.6.0/compiz-fusion-0.6.0.sha1.asc . The
matching Compiz Core tarball is available in the compiz/ subdirectory.


## This release includes:





	
  * Compiz Plugin sets (plugins are split into three packages according to their
usefulness and stability)[2]:




### Compiz-Fusion-Plugins-Main:





	
  *        This is the main plugin set, fully supported and providing the most

	
  *        significant features. Check the list of plugins included in this

	
  *        pack, with descriptions on http://wiki.compiz-fusion.org/PluginsMain


[![pluginsmain.png](http://smspillaz.files.wordpress.com/2007/10/pluginsmain.png)](http://smspillaz.files.wordpress.com/2007/10/pluginsmain.png)

The Shift Switcher Plugin in 'Cover' Mode

[![pluginsmain1.png](http://smspillaz.files.wordpress.com/2007/10/pluginsmain1.png)](http://smspillaz.files.wordpress.com/2007/10/pluginsmain1.png)

The 'Expo' Plugin, used to move windows between all desktop easily - similar to the upcoming Apple Mac OS X Leopard 'Spaces'

[![pluginsmain2.png](http://smspillaz.files.wordpress.com/2007/10/pluginsmain2.png)](http://smspillaz.files.wordpress.com/2007/10/pluginsmain2.png)

The 'Desktop Wall' Plugin - an alternate to the 'Desktop Cube', can be used to switch viewports on both horizontal and vertical axes, and shows a live preview of the all viewports, with an arrow pointing to the one you are going to.


### Compiz-Fusion-Plugins-Extra:





	
  *        This is the extra plugin set, fully supported and providing less
significant features. Check the list of plugins included in this
set, with descriptions http://wiki.compiz-fusion.org/PluginsExtra


[![pluginsextra1.png](http://smspillaz.files.wordpress.com/2007/10/pluginsextra1.png)](http://smspillaz.files.wordpress.com/2007/10/pluginsextra1.png)

The Cube Reflection is purely eye-candy that creates a beautiful reflective surface underneath your desktop cube

[![pluginsextra11.png](http://smspillaz.files.wordpress.com/2007/10/pluginsextra11.png)](http://smspillaz.files.wordpress.com/2007/10/pluginsextra11.png)

Although the current screenshot shows a bug where all windows are stuck to all viewports, the popular 3D Windows Plugin has been reworked and the cube now zooms out to give a much more 3D perspective. It also no longer breaks windows around corners

EDIT : This feature is only available in working version 0.6.99

[![pluginsextra2.png](http://smspillaz.files.wordpress.com/2007/10/pluginsextra2.png)](http://smspillaz.files.wordpress.com/2007/10/pluginsextra2.png)

The 'Scale Window Title Filter' plugin allows you to filter through windows in Scale Mode by typing the name of the window that you want to navigate to.


### Compiz-Fusion-Plugins-Unsupported:





	
  *        This is the unsupported plugin set, which components should work but
aren't officially supported by the development team. Check the list
of plugins included in this pack, with descriptions on
http://wiki.compiz-fusion.org/PluginsUnsupported




### Compiz-Manager:





	
  *        Compiz-manager is a wrapper script intended to start compiz with the
appropriate arguments for the environment in use. It is intended
both for use in distributions and by end-users who install Compiz
Fusion in other ways than using their distribution's packages. It
includes features such as whitelisting of drivers and blacklisting
problematic hardware.




### Compiz-BCOP:





	
  *        BCOP is a code generator that provides an easy way to handle plugin
options by generating parts of the plugin code directly from the xml
metadata file.  It is used for most of the Compiz Fusion plugins.




### LibCompizConfig:


CompizConfig is an alternative configuration system for
compiz that provides the following features :



	
  *        - Automatic plugin list generation.

	
  *        - Import/Export of the current configuration.

	
  *        - Configuration profiles.

	
  *        - Parsing of Compiz metadata files to provide an easy to use API for

	
  *          configuration managers.

	
  *        - Conflict handling for plugins and actions.

	
  *        - Support for different configuration storage backends.

	
  *        - Desktop environment integration.  If a backend provides desktop

	
  *          environment integration, then Compiz will share the keybindings

	
  *          and settings with the default desktop environment window manager

	
  *          like metacity or kwin.

	
  *        - Its own Compiz configuration plugin "ccp" to provide all features

	
  *          of libcompizconfig with compiz.




### Compizconfig-Backend-KConfig:





	
  *        The kconfig backend for CompizConfig. It uses the KDE configuration
system to store the compiz configuration and provides integration into
the KDE desktop environment.




### CompizConfig-Backend-GConf:





	
  *        The gconf backend for CompizConfig. It uses the GNOME configuration
system and provides integration into the GNOME desktop environment.




### CompizConfig-Python:





	
  *        Python bindings for the compizconfig library, which developers can use
to create thier own custom settings managers.




### CompizConfig-Settings-Manager (a.k.a. CCSM)[3]:





	
  *        A fully featured Python/GTK based settings manager for the CompizConfig
system, targeted to power users.


[![ccsm.png](http://smspillaz.files.wordpress.com/2007/10/ccsm.png)](http://smspillaz.files.wordpress.com/2007/10/ccsm.png)
<strike> The new reworked CCSM action selector, selecting an edge button</strike>

EDIT : This feature is only available in working version 0.6.99

[![ccsm1.png](http://smspillaz.files.wordpress.com/2007/10/ccsm1.png)](http://smspillaz.files.wordpress.com/2007/10/ccsm1.png)

<strike>The new Match Editor for CCSM makes it easy to create new window matches, by providing features to automatically detect window attributes by clicking on a window</strike>

EDIT : This feature is only available in working version 0.6.99

[![ccsm2.png](http://smspillaz.files.wordpress.com/2007/10/ccsm2.png)](http://smspillaz.files.wordpress.com/2007/10/ccsm2.png)

CompizConfig Settings manager allows management of Backends, Integration and Profiles

EDIT : The about dialog shows version <strike>0.6.99</strike>, but the release version should be 0.6.0


### Emerald Window Decorator


Please note that unfortunately Emerald and the Emerald-Themes components are being held
until the next release due to a runtime crasher. Emerald 0.5.2 can still be used
in the meantime.

Since 0.5.2 release there have been several hundred changes, most of
which are bug
fixes, improved error handling, translation updates[4] or other kinds of
improvements on existing code.

Compiz Fusion is developed entirely as a volunteer project, and we'd like
to thank everyone who contributed to this release. Translators, testers,
the support team and developers[5] : thank you, your continuous contributions
made it all possible.

[1] http://www.compiz-fusion.org/
[2] http://wiki.compiz-fusion.org/CompizPlugins
[3] http://wiki.compiz-fusion.org/CCSM
[4] http://l10n.compiz-fusion.org/trunk/toplist.php
[5] http://www.compiz-fusion.org/team
