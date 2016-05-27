---
author: smspillaz
comments: true
date: 2014-10-13 06:00:18+00:00
layout: post
link: https://smspillaz.wordpress.com/2014/10/13/using-debuggers-in-everyday-life/
slug: using-debuggers-in-everyday-life
title: Using debuggers in everyday life
wordpress_id: 3310
---

One of the things that I teach students that I mentor is that an understanding of how computers work, at least on the lower level, gives you an unexplainable edge. Its like being a doctor, or a lawyer or a mechanic, where your field of specialty (which is really something that you interact with in everyday life) stops becoming a black box of magic and starts becoming something you are empowered to interact with in a meaningful way.

Recently I was drafting up some important documents for someone close to me and we had spent hours and hours working on. Every detail was critical. Unfortunately, our intense concentration meant that we forgot to save the document and this happened after attempting to insert a new paragraph:

[![Screengrab](https://smspillaz.files.wordpress.com/2014/10/screengrab.png?w=300)](https://smspillaz.files.wordpress.com/2014/10/screengrab.png)

The application had hung completely and looked like its was stuck in an infinite loop. We'd have to throw away the three or four hours of work as there was no way we were going to get the contents of that (now multipage) document.

Or was there?

It turns out that having been a hobbyist programmer for years, I knew a thing or two about debugging. I also knew that when you type something into a document, the contents of that document are usually **somewhere** in memory - and most simple text editors would probably just store the document's contents in memory as plain or marked up text. That's what I'd do if I wrote a simple text editor.

If we could just search the program's memory for the contents that we can still see on-screen, then we might be able to retrieve a fair bit of the document.

It turns out that debuggers are well suited to that task.

[![LLDB Start](https://smspillaz.files.wordpress.com/2014/10/lldb-start.png?w=300)](https://smspillaz.files.wordpress.com/2014/10/lldb-start.png)



The debugger I'm using is called **LLDB** and it come with Xcode. It's part of the **LLVM **suite of tools.

LLDB like most debuggers has a scripting capability and there's a script shipped by default that lets you search heap memory for a matching string called _cstr_refs_.

[![cstr_refs](https://smspillaz.files.wordpress.com/2014/10/cstr_refs.png)](https://smspillaz.files.wordpress.com/2014/10/cstr_refs.png)



Just by searching for the very first string, we found an allocation of 320 bytes.

If its just a simple nul-terminated string all the way to the end, we can just cast the pointer to a string and print out the rest of it.

[![Printing out string](https://smspillaz.files.wordpress.com/2014/10/printing-out-string.png)](https://smspillaz.files.wordpress.com/2014/10/printing-out-string.png)



There's our recovered contents!

Sometimes we're not so lucky and we don't get a null-terminated string. Or the memory ends up being fragmented across a few different pools.

When that happens we can just read memory, so long as its within the program's mapped range, with the _memory_ command.

[![memory read](https://smspillaz.files.wordpress.com/2014/10/memory-read.png)](https://smspillaz.files.wordpress.com/2014/10/memory-read.png)

You can use debuggers for all kinds of cool stuff, including momentarily getting back those few hours of lost work.
