---
author: smspillaz
comments: true
date: 2015-01-04 14:30:25+00:00
layout: post
link: https://smspillaz.wordpress.com/2015/01/04/creating-mini-distribution-containers-with-fake-root-access-on-travis-ci/
slug: creating-mini-distribution-containers-with-fake-root-access-on-travis-ci
title: Creating mini-distribution containers with "fake" root access on travis-ci
wordpress_id: 3324
---

For most of the projects I've started in the last two years, I've been using a service called [Travis CI](http://blog.travis-ci.com). Travis CI is a free-for-open-source projects continuous integration service which runs in the cloud. Its also really easy to set up - just specify a list of steps (as shell commands) in a ._travis.yml_ in the root directory of your project. If they all return with a successful exit code (e.g., 0), then your build is considered passing. Travis CI runs the same script on every new revision of your project and on all its pull-requests. It ties into GitHub's status notification API and is just all-round super useful.

What makes Travis CI so easy to use for all kinds of projects is that for each build you get an [OpenVZ](http://openvz.org/Main_Page) virtual machine with full root access, based on Ubuntu 12.04 LTS. You can use _apt_ to install all your dependencies, add new repositories to your hearts content, download arbitrary files, execute arbitrary code, etc etc.


# Moving to Containers


One of the big downsides of virtual machines though is that they import a considerable amount of overhead. In order to provision them on demand, you need to have a a bunch of running instances in memory that you can dispatch jobs to. Once a job is completed, you need to roll back the disk image to an earlier state, kill the instance and clone a new one from an existing "clean" image. Keeping all these virtual machines around consumes a non-trivial amount of resources and in the cloud that costs money. We've recognised that virtual machines are not really the way to go for the future of the cloud for a [little while now](http://www.linuxjournal.com/content/containers—not-virtual-machines—are-future-cloud), and more lightweight "container" solutions like [Docker](https://www.docker.com) and [LXD](http://www.ubuntu.com/cloud/tools/lxd) are seeing increased adoption.

Container based solutions are kind of like a "chroot-on-steriods", in that they provide a way to run a (more or less) isolated user-space on top of an existing kernel, just like any other process. There's very little overhead involved. Travis CI [recently started rolling out infrastructure based on Docker](http://blog.travis-ci.com/2014-12-17-faster-builds-with-container-based-infrastructure/), where builds can be provisioned in seconds as opposed to minutes. I've tested this on some of my own projects and it really is true - in non-peak times builds have been provisioned within five to ten seconds of pushing code, and in peak times, about 30 seconds. That is an _insanely good_ turnaround time for continuous integration.


# Problems with Containers


The caveat with contained based solutions, however, is that everything runs as a much more restricted user. You don't have access to _sudo_ and as such you don't have access to tools like _apt_. This makes doing a lot of the build tasks which were easy to do on the _OpenVZ _based infrastructure almost impossible on containers. Travis CI has suggested using precompile binaries uploaded to S3 and downloaded as part of your build process as a replacement for _apt_ in the time being. That's not really an ideal solution, especially when you want to track a rolling package release cycle.


# Mini-Distributions


I was quite keen on switching over as many of my builds to the container based infrastructure as possible. But the lack of root access was going to be a bit of a problem as most of my builds require the installation of packages outside the default install set.

I initially had the idea of using _debootstrap_ to create a _chroot_ inside the container where I could install my own stuff, just like how a p_builder_ works.  Unfortunately both _chroot_ and _debootstrap_ require root access.

I did, however, come across another interesting project which could fill the niche quite well. [PRoot](http://proot.me) (short for p_trace-root_) is a project that uses the Linux _ptrace_ utility to hook system calls and effectively pretend to be the root user operating on another root filesystem. This works quite well in the majority of cases - applications think that they are running as the root user and also believe that the directory you pass to the _proot_ command is the root directory.

Most linux distributions ship a "minimal" or "core" version - usually a few megabytes, which contains the bare necessities to bootstrap and install packages, but is otherwise a fully-functioning, booting filesystem. This can be extracted to a subdirectory and used directly with _p__root_. An added bonus is that the _proot_ authors have added support for Qemu user space binary translation, which means that you can download a distribution root filesystem for another CPU architecture and have its code dynamically translated to run on the host architecture directly.

Using proot, it is possible to create a mini-distribution where _apt_ can be installed to install whatever packages you want to install, and to run and link to the resulting packages inside the mini-distribution. This was perfect for use with travis-ci's containers.

Incidentally, Travis CI also enabled [build caching](http://docs.travis-ci.com/user/caching/) for projects running on the container based infrastructure. This mean that you can cache the directory the mini-distribution was created in between builds to avoid having to download and install packages in it all the time.


# Introducing Polysquare Travis Container


I wanted to make this functionality easy to use for people looking to move to the container based infrastructure, so I've created a project called [_polysquare-travis-container_](https://github.com/polysquare/polysquare-travis-container) on GitHub. It isn't available on PyPI, but you can install it with the following:

    
    pip install git+http://github.com/polysquare/polysquare-travis-container


Two commands are available. The first, _psq-travis-container-create_ allows you to create a mini-distribution in a specified directory. It automatically downloads proot and qemu for your CPU architecture. The _--distro, CONTAINER_DISTRO_ environment variable allows you to specify the name of a Linux Distribution to use (Ubuntu, Fedora, Debian). The _--release_, CONTAINER_RELEASE_ _option and environment variable allow you to specify the name of the release to use. _--arch, CONTAINER_ARCH_ are used to specify a target CPU architecture.  You can also specify _--repositories PATH_TO_FILE_ and _--packages_ _PATH_TO_FILE_ to specify files containing lists of repositories and packages to be installed inside that mini-distribution.

If a container exists in the specified directory with that configuration, it will be retained and nothing will be re-downloaded. This allows you to seamlessly integrate the mini-distribution with the caching system.

_psq-travis-container-exec_ can be used to execute commands inside a container. It reads the same options and environment variables as _psq-travis-container-create_ as well as an optional _--cmd_ to specify the command to run. The command is looked up in the mini-distribution's PATH, so _--cmd bash_ would run the mini-distribution's version of _bash_ and not the host's.

This is what it looks like on your build output:

    
    <span id="1-389" class="green bold"><strong><span style="color:#339966;">✓ Using pre-existing proot distribution</span></strong>
    </span>Configured Distribution:
    <span id="1-392"> - Distribution Name: </span><span id="1-393" class="yellow"><span style="color:#ff9900;">Ubuntu</span>
    </span><span id="1-395"> - Release: </span><span id="1-396" class="yellow"><span style="color:#ff9900;">precise</span>
    </span><span id="1-398"> - Architecture: </span><span id="1-399" class="yellow"><span style="color:#ff9900;">amd64</span>
    </span><span id="1-401">- Package System: </span><span id="1-402" class="yellow"><span style="color:#ff9900;">Dpkg</span>
    </span><span style="color:#339966;"><strong>✓ Using pre-existing folder for distro Ubuntu precise (amd64)</strong></span>
    <span style="color:#339966;"><strong>✓ Container has been set up in /home/travis/container</strong></span>




# Concluding Notes


I hope this project is useful to anyone who was thinking about moving to the new container based infrastructure after it was announced late last year. I've already started using it for [one of my own projects](https://travis-ci.org/polysquare/cmake-ast) (which I'll post about later) and I plan to move many more to it in future.
