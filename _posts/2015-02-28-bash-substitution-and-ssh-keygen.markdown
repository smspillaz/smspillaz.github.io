---
author: smspillaz
comments: true
date: 2015-02-28 07:27:17+00:00
layout: post
slug: bash-substitution-and-ssh-keygen
title: Bash substitution and ssh-keygen
wordpress_id: 3328
---

Here's something to note after almost being locked out of an account.

Be careful about bash variable substitution when using ssh-keygen -N. Or better yet, don't use ssh-keygen -N at all, preferring ssh-keygen -p PRIVATE_KEY_FILE.

The reason why is that the passphrase provided to -N can be modified by reason of variable substitution in bash. For instance, if you had the characters $? in your passphrase as provided to -N, they'll be replaced with last command's pid - good luck finding out what that was after trying to unlock your private key a few times.
