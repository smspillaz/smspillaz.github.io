---
author: smspillaz
comments: true
date: 2007-12-22 03:49:49+00:00
layout: post
link: https://smspillaz.wordpress.com/2007/12/22/compiz-fusion-and-a-wiimote/
slug: compiz-fusion-and-a-wiimote
title: Compiz Fusion and a WiiMote!
wordpress_id: 196
---

Here is a video of our beloved Compiz Fusion being controlled by a WiiMote.

Sorry about the lack of updates on the blog recently, I have been quite busy but there is a lot of new stuff to talk about :)

Anyways, for the howto. Most of the instructions are on the video but here are some prerequisites:



	
  * First of all, Compiz Fusion if you don't have it already

	
  * You'll need a working Wii Remote too. Nintendo sells these separately from the Wii Console if you don't have one (Which is good, due to the Wii Shortage that there is now ;-))

	
  * You'll need a working bluetooth interface too. I found that my integrated bluetooth card just did not want to work, so I went a bought an external adapter. The cheapest I could find was around 50 Australian Dollars, don't know about anywhere else. You can check to see if your Bluetooth works later in this post.

	
  * Finally, you need to go get [libwiimote from the CWiiD project.](http://www.wiili.org/index.php/CWiid#Download)

	
  * Once that is compiled an installed we need to check a few things:



    
    dmesg | grep Bluetooth


Should yield something like:

    
    Bluetooth: Core ver 2.11
    Bluetooth: HCI device and connection manager initialized
    Bluetooth: HCI socket layer initialized
    Bluetooth: HCI USB driver ver 2.9
    Bluetooth: L2CAP ver 2.8
    Bluetooth: L2CAP socket layer initialized
    Bluetooth: RFCOMM socket layer initialized
    Bluetooth: RFCOMM TTY layer initiali ...


If it doesn't , execute

    
    sudo modprobe bluetooth


If it still doesn't, trying installing _bluez firmware, _

If it *still* doesn't then you will have to get a new bluetooth adaptor.

Once bluetooth is working, you need to do the following

    
    sudo modprobe uinput wminput


(Note that modprobe and wminput are separate comamnds, but wordpress likes to murder the line break :-|)

Turn of your Wii Console off if it is on, and hold down (1)+(2) on your remote. Once it says 'Ready', you should be able to move the mouse around by tilting the remote. If you have a wireless sensor bar, a pair of infra-red lights or some candles, you can use

    
    wminput -c ir_ptr


to enable the infra-red camera. Note that this doesn't play so nice with compiz because as soon as you rotate the cube, the cursor will warp and be out of sync with the WiiMote.

Here is a video of it in action

[youtube=http://www.youtube.com/watch?v=lT4N5P3XOjI&rel=1]

- SmSpillaz

