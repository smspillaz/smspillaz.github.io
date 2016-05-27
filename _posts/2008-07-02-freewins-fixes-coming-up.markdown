---
author: smspillaz
comments: true
date: 2008-07-02 13:30:23+00:00
layout: post
link: https://smspillaz.wordpress.com/2008/07/02/freewins-fixes-coming-up/
slug: freewins-fixes-coming-up
title: Freewins fixes coming up
wordpress_id: 283
---

So some of you might have noticed that there is an interesting bug in freewins where if you rotate a window clockwise too much, the window will dissappear from screen. I know about this bug and I haven't really been able to fix it because I've been trying something else recently, that is getting my laptop to quad boot MediaDirect, Vista, openSUSE, and Mac OS X. My efforts are finally finished now, so I am returning to development as soon as I can get compiz to build properly. (Small howto is in the read more section if you are interested)

Anyways, the bug is caused by me replacing the disabling of backface culling with backface culling inversion so that freewins might work a bit better with plugins like group, cubeaddon and cube. My algorithm, however is a bit flawed as it takes the corners of the window and if the 'supposed' top left hand corner is below the bottom left hand corner then the culling inverts. This doesn't exactly work right when it comes to 2D rotation, so I just need to adjust the algorithm.

Also, if you haven't been watching the plugin development forum, you might want to take a look at the progress **b0le** [has made with the input redirection X.org patches and freewins](http://forum.compiz-fusion.org/showthread.php?p=62356#post62356). I expect to be working with him as soon as I get the patches working myself.

<!-- more -->

Small **howto quad boot your xps m1530** for those who are interested

You'll need:



	
  * All the installation CD's the came with your xps m1530

	
  * A live CD that comes with GParted and dd (I used ubuntu)

	
  * A Linux distro of your choice install CD

	
  * A patched OS X leopard CD (Make sure you bought leopard) and apple stickers

	
  * A spare HDD to do this on would help



	
  1. Backup everything on the laptop : we're gonna hose it

	
  2. Throw in your MediaDirect CD and boot off it. Hit '2' and put in how big you want your vista partition to be

	
  3. Hit 'y' to blow everything away

	
  4. Eject the Media Direct CD

	
  5. Install windows to the partition you created for it

	
  6. Install media direct in windows and test it all works

	
  7. Throw in your live CD and fire up GParted

	
  8. You should have 3 Partitions: DellUtility, Vista, Extended {Raw partition, MediaDirect}

	
    1. Delete the huge partition under the extended partition

	
    2. Resize the extended partition so that you have AT LEAST 20GB of free space before it

	
    3. Create a raw partition in this free space before the extended partition (This will be for OS X)

	
    4. Create a big linux partition in the free space in the extended partition with ext3

	
    5. Also, create a /home and FAT32 share partition if you want

	
    6. Create at least 4GB for swap if you want to hibernate

	
    7. Hit apply, your partition layout should look like this:

	
    8. DellUtility; Vista; Raw for OS X; Extended { ext3 for linux; ext3 /home; FAT32 share; linux_swap swap; FAT32 MediaDirect }




	
  9. Reboot and check it all works (MediaDirect etc)

	
  10. Now install your linux distro of choice to the big linux partition and set mount points accordingly. If you can, change the filesystem type of the raw partition to 0xAF

	
  11. Make sure that when you install grub, you install it to the linux root partition, NOT the MBR

	
  12. Check it all works (You can't boot into linux yet)

	
  13. Now throw in your Live CD and run this command:

	
    1. **sudo dd if=/dev/sda of=/home/username/mbr_bak.bin bs=512 count=1**




	
  14. Copy that file to a thumbdrive

	
  15. Download EasyBCD and add an entry for linux to the partition you installed grub on

	
  16. Throw in your OS X CD and install it as usuall, make sure darwin_boot is installed

	
  17. OS X should work, but you won't be able to boot anything else

	
  18. Boot into your live CD, get the MBR backup you made and run

	
    1. **sudo dd if=/home/username/mbr_bak.bin of=/dev/sda bs=512 count=1**




	
  19. Now your other OS's should work, but you can't boot into OS X

	
  20. Get a copy of the netkas pc_efi_v8 and copy **boot_v8** to your /boot folder on you linux partition

	
  21. Now, edit (as root) your /boot/grub/menu.lst and add an entry that looks like this

	
    1. title Apple Mac OS X

	
    2. kernel /boot/boot_v8




	
  22. You should be good to go. Save the file (make sure you back up the old one!) and select 'Mac OS X' from your menu. It will ask you what disk number OS X is located on. Just enter '80' or leave it. From there, it should give you darwin_boot and you can boot OS X \o/. If you want the graphics drivers, just google for NVInject and continue with the default options. You'll have to force-power-off the system however when you shut it down after the screen goes blank because the drivers break these things.

	
  23. In Vista, throw in your Dell Drivers CD and install all the drivers and re-run the Windows Experience Index test to get Aero.

	
  24. Have tons of fun (And don't forget to install Compiz-Fusion!)


Small Video of what you should get once you have everything install[ed:

[youtube=http://youtube.com/watch?v=4yqzPPT0KIw]
