---
author: smspillaz
comments: true
date: 2011-09-18 17:25:49+00:00
layout: post
link: https://smspillaz.wordpress.com/2011/09/18/braindump-how-to-get-window-stacking-right/
slug: braindump-how-to-get-window-stacking-right
title: 'Braindump: How to get window stacking right'
wordpress_id: 819
---

**WARNING: This post is a braindump. It's highly technical in nature and not anything particularly newsworthy for regular users. If you don't want your brain to hurt after reading this then I suggest not reading it. Otherwise, if you're a brain-pain junkie, then by all means, please, read this blog post**

Ok, with that out of the way, it's time to explain to dearest reader about the nightmare that is getting window stack order right in a window manager.

So basically over the past two weeks I've been asked to focus on one thing and one thing only, which is [bug 845719](https://bugs.launchpad.net/compiz-core/+bug/845719) which out of two weeks of solid toil, overtime and other stressful things has resulted in the 3000 line diff in [this branch](https://code.launchpad.net/~compiz-team/compiz-core/compiz-core.stack_sync_fix) which will probably be merged upstream next week after we've finished doing internal testing on it (but the test results so far are promising, there's only one problem case so far that's come up which I need to look into, but its quite rare and I can probably look at it after this branch is merged).

So for those of you who don't know what the "stacking bug" is, it's basically the most annoying bug in the entire universe, in three ways:



	
  1. It's really annoying for users because either one of the two things will happen:


	
    1. Some window gets an invalid stack position and usually either ends up either below everything (inviewable and not usable) or above everything, which is usually not a problem except that in Unity the panel, launcher, dash and alt-tab are all painted on the same level for a very dull technical reason I won't get into and all of these views will appear painted underneath the window that got the invalid stack position. In addition, any window that is restacked relative to this window with an invalid stack position will *also* receive an invalid stack position as compiz processes the window stack top-down so if you try and raise another window the problem gets worse until everything is in the wrong order! OR

	
    2. Something happens where compiz doesn't process an event from the X Server correctly or processes it in the wrong order and then compiz and the server disagree on what the stacking order actually is, which means that windows are painted in a different order than what the stacking order is on the server side, which means fun stuff like click through windows raising windows beneath them


	
  2. It's really annoying to debug because often what happens is that problems which manifest themselves to the user are usually just as a result of valid stacking operations done relative to an invalid stacking operation done long before the problems actually started manifesting themselves, which means that it is almost impossible to trace down the origin of the problem. In addition, there are also times when the server side stack and the compiz side stack are meant to be out of sync, which means that it is difficult to tell false positives apart from actual bugs. Slightly unrelated but still annoying is that X11 provides no way to debug the source of events or match events to requests which means that you're pretty much on your own when you have to find out where an event that is causing problems is coming from.

	
  3. It's really annoying in development because it is a very common regression - basically if you touch anything that is related to the event handling code for a change in structures on the server side, even in the generation of your own structures (like windows used for reparenting) you'll probably cause this bug to start happening again because of different flow paths happening in the event handling code.


Compiz has had problems getting window stacking right for years. Mainly because its really really really really really hard to do. Other window managers have had to deal with this problem for years but luckily they've had the advantage of time under their belt to get this right. WM's like metacity have elaborate stack management code, the compiz stacking code is pretty simple and works on a case-by-case basis. In reality, when people say "stacking bug" they're really referring to one of two issues (as I alluded to earlier). The first is that the stacks go out of sync. This basically just causes havoc and once that happens you are pretty much toast  because every subsequent ConfigureNotify event is going to be processed incorrectly and your stacking is about as good as /dev/urandom. That bug sucks and it was my #1 priority when I was looking into this. The other bug is where windows receive and invalid stack position or can't get a valid stack position and end up on top of everything. And then everything that gets restacked relative to that one window that received an invalid position also receives an invalid position. These bugs are slightly easier to track down because they only exist in the code where we actually do the restacking of windows and not where we process incoming restacking events.


## X11 Crash Course: How not to treat the X11 model of window management


The moral of all of this is that you shouldn't ever try to take shortcuts with X. Never ever. That will result in X coming back a bit later and giving you something you didn't expect and totally thumping you as a result.

Window management on X11 is really weird. Mainly because as a concept, it was really only bolted on in later versions of the X protocol and provides a very limited subset of control to the window manager. As something that's totally offtopic, but an example of how difficult X11 makes window management, a window manager can never really prevent someone from stealing the focus. If a client does XSetInputFocus on its own window, the input focus changes. The window manager can choose to change it back to something else, but then the client can just fight the window manager until it has the focus. Back on the topic of window management, there are basically two things that a window manager is given the power to do:

The first is through an event mask known as SubstructureRedirectMask. SubstructureRedirectMask is a special event selection that allows you to receive ConfigureRequest and MapRequest events whenever a child of the window you selected that event mask on does a ConfigureWindow request (eg XConfigureWindow, XMoveWindow, XMoveResizeWindow, XSetWindowBorderWidth, XResizeWindow, XRaiseWindow, XLowerWindow, XRestackWindows) or attempts to map a window with a MapWindow request (eg XMapRaised, XMapWindow). You only get these events for requests that were not made on your connection and you only get them for windows that are not marked with the "override redirect" bit in their attributes. However, this is the main way that window management is actually achieved, since for a client, instead of the server actually doing what you told it to, it just generates that event on the client which selected for SubstructureRedirectMask on the parent window of your client. Window managers all select for SubstructureRedirectMask on the root window, so when any toplevel window attempts to do something they'll know about it first. The idea is that the window manager gets a MapRequest or ConfigureRequest and then does XMapWindow or XConfigureWindow again to put the window in the place where it should be for it. So you're essentially communicating with the window manager by asking the server to do something and having that request be routed to the window manager which then asks the server to do the same thing.

This (arguably broken model) is incidentally why the entire ICCCM exists to let X client authors know about the strange things that go on in actual usage of the server. It's why, for example, when mapping a window, you cannot draw on it right away, since by the time your output buffer is flushed and the server processes commands, when it gets to XMapWindow, it does not actually map the window, but rather generates a MapRequest on the client that selected SubstructureRedirectMask and then attempts to process your drawing op and fails because the window isn't mapped because the client that got the MapRequest probably hasn't gotten around to actually asking the server to map it yet, and the server probably hasn't gotten around to processing that actual map request yet.

In order to control the window stacking and to prevent clients from doing insane things the window manager gets ConfigureRequest events for any window attempting to restack itself so that it can't go in same insane stacking position. However, there is a magic bit that clients can set called the "override redirect" bit which basically makes the server ignore SubstructureRedirectMask and ResizeRedirectMask for that window so that any request made by any client relative to it will be immediately processed by the server. Of course, we treat override redirect windows differently in all window managers, the convention is to pretend that they don't exist, but unfortunately there are stupid clients that request to restack relative to them so we need to care about them. We have very little control over the override redirect windows in the tree, and to further compound this problem, there are a metric ton of them. If you do xwininfo -root -tree one day you'll probably be suprised to tell you that you have 100+ windows open when you probably only have 3 or 4. This is because there are windows for _everything_, menus, toolbars, toplevels, frames, windows to store properties on, windows to store data on, windows for sharing data, windows for holding selections, windows soley existing for the purpose of holding a grab, etc etc the list goes on and on.

For these windows you will only ever receive a ConfigureNotify event when they are restacked, which means that you'll only ever know that a restacking request was made until after the restack happened. Which leads me to the overarching point: window managers are essentially not in control of anything and need to listen to the server as the ultimate authority. Which means that you shouldn't ever try to determine the stacking order based on what you are doing as the window manager internally, but what the server is telling you. This is probably the most misunderstood part of the entire X11 application model. _The server is always right_.


## Common pitfalls which cause the stacking order to go out of sync with the server


**1) Attempting to short circuit the internal stack representation right after you made a restacking request rather than waiting on the server to tell you what the internal stack representation actually is.**

There used to be several serial offenders in the compiz code that used to do this. In compiz 0.9 there was a piece of code in place which would immediately update the internal stack representation every time a stacking _request_ was made**** by compiz rather than being updated later on ConfigureNotify events that came from those requests. To be fair, short-circuiting was necessary since there is no clear separation in the compiz API between what was last sent to the server and what was last processed from it. This is a problem with the compiz API in general something I posted about needing to change [about a month back](http://lists.compiz.org/pipermail/dev/2011-August/001489.html).The problem that the original developers were trying to fix by doing this was the handling of multiple requests in to restack in compiz without waiting on the server to tell us what the new internal stack representation was. For example, here is a timeline of what would happen if we did not update the internal stack representation immediately after requesting a restack operation from the server while doing three restack operations right next to each other relative to the very windows we are trying to restack:



	
  1. Start with a window list of A > B  > C (top-to-bottom)

	
  2. Request that C be raised (issue an XConfigureWindow request to restack C above A)

	
  3. The internal window stack is still A > B  > C

	
  4. Request that window B be raised to the top (issue an XConfigureWindow request to restack B above A (note, not above C because we look at the internal stack to find out what the top most window is, and that still says the the top most window is A)

	
  5. The internal window stack is *still* A > B > C

	
  6. Request that window A be raised to the top (issue an XConfigureWindow request to stack A above itself which is a no-op and won't be processed by the server)


What you would expect to end up happening in this case from an API standpoint is that window C goes to the top, then B goes to the top then A goes to the top, eg

	
  1. A > B > C

	
  2. C > A > B

	
  3. B > C > A

	
  4. A > B > C


What actually happens is this

	
  1. A > B > C

	
  2. C > A > B

	
  3. C > B > A

	
  4. C > B > A


Which is totally wrong! So the "fix" was implemented about a year ago to make sure that the former happens and not the latter by updating the internal list immediately.

Problems start occuring when you consider that we also update the internal list based on what the server is telling us. Since remember, we can't base that internal list entirely off of what we're telling the server because there are some things that we don't get a say in, like override redirect windows. We _must_ listen to the server.

With the approach that has been used up until now, here is how we might process events coming from the server relative to the window list from the events that we generated by doing XConfigureWindow to raise windows



	
  1. Window list is A > B > C

	
  2. ConfigureNotify event: Window C is now above window A

	
  3. Window list is now C > B > A

	
  4. ConfigureNotify event: Window B is now above window C

	
  5. Window list is now B > C > A

	
  6. ConfigureNotify event: Window A is now above window B

	
  7. Window list is now A > B > C


So far, so good. So what happens if instead of raising all three windows, we just raised window C and then window B?

	
  1. Window list is B > C > A

	
  2. ConfigureNotify event: Window C is now above window A

	
  3. Window list is B > C > A

	
  4. ConfigureNotify event: Window B is now above window C

	
  5. Window list is now B > C > A


Also, no problems occuring there. However, the difference this time is that all requests instead of actually doing something were no-ops because the stack was already in the order that the server is asking us to shuffle it into. But hang on a minute, the server _expects that the stacking order be A > B > C in order for us to process the ConfigureNotify events correctly! That means that we were actually processing them incorrectly but they just ended up in the same order! Uh oh_

So what happens when we start through some complexity into the mix. Say D and E are override redirect windows. Override redirect windows like I said earlier are allowed to change their position in the stack whenever they want. So lets torture compiz with a race condition here:



	
  1. Window list is A > B> C > D > E

	
  2. We raise C above A

	
  3. The compiz side list is C > A > B > D > E and the server side list is A > B > C > D > E (since the compiz buffer hasn't been flushed yet)

	
  4. We then raise B above C

	
  5. The compiz side list is B > C > A > D > E

	
  6. We then request to restack A above E

	
  7. The compiz side list is B > C > D > A > E

	
  8. Before the compiz output buffer gets flushed again (eg before it has finished handling events, the client which owns D decides to restack it above B and flushes its output buffer first.

	
  9. The compiz side list is still B > C > D > A > E (because compiz doesn't know that D got restacked yet) but the server side list is now A > D > B > C > E

	
  10. Now the compiz side buffer has been flushed, so the server processes all of our restacking requests, C > A, B > C, A > E

	
  11. On the compiz side we still have B > C > D > A > E and on the server side we've got B > C > D > A > E now. So far so good

	
  12. Now the configure requests come in. The first one is from the override redirect client to put D on top of A

	
  13. B > C > D > A > E

	
  14. Now we get a notification that C went on top of A

	
  15. B > D > C > A > E

	
  16. Now we get a notification that B went on top of C

	
  17. D > B > C > A > E

	
  18. Now we get a notification that A went on top of E

	
  19. D > B > C > A > E

	
  20. Server Side: B > C > D > A > E, Compiz Side: D > B > C > A > E.

	
  21. Um, ok. Lets say that now we want to put A on top of D

	
  22. Server Side: B > C > A > D > E, Compiz Side A > D > B > C > E

	
  23. Uh oh. We're totally toast!


By this point your stack is totally trashed and there's no way to recover it. The problem at this point onwards is self-compounding, trying to do any more stacking operations will make it worse. The solution in this case is to follow the golden rule: **Never ever touch CompScreen::windows unless you are doing it in response to something the server told you**. I added a **CompScreen::serverWindows** to alleviate the problem found in raising and lowering windows in serial.

**2) Sending synethetic events based on the current event processing stack rather than what's actually server side**

XSendEvent is really a hack and probably an acknowledgement that there's been huge design failures on the server side and we need to allow clients to "fix up" these failures by sending synethetic events to other clients. The ICCCM recommends a bunch of places where we use this, for example, in order to transition from withdrawn to minimized or vice versa, a synethettic UnmapNotify event is sent to that window on StructureNotifyMask****. Or the more prominent case is a window needing to know when its client was moved on screen when in fact the client was actually reparented and moving its parent window on screen will not cause a ConfigureNotify event to happen, so we need to synthesise one on the client window so that it knows it got moved around and what its new absolute position is.

Unfortunately, ConfigureNotify is used both for size and position as well as stacking order (which window this window is "above" inside of its parent window). Synthetic ConfigureNotify events must include information on all members including the "above" member. Ideally, this would be set to the window the client is **actually** above so upon receipt of the synethetic ConfigureNotify event, core would just treat the ConfigureNotify as a no-op and not update its internal stack representation. Unfortunately, that's not always true -  previously we would set the above member based on what was had last received from the server and if was done during event processing, it is perfectly possible that there might be other pending restacks waiting on the client or its frame  and by setting this member, we would then be telling ourselves later on that the window received its **old** stack position when it never actually did! So again, what's server side won't match what compiz thinks the stack is.

The only solution to this is to jump into a mode where you are in perfect synchronization with the X Server, which is very ugly - you need to grab the server to ensure that no other client can modify its state, and then query the window tree and then craft your event relative to that information. Thankfully, we only do this rarely and it is not too expensive, but expensive nonetheless.

**3) Doing stacking operations or operations that might affect the number of windows on the stack while not registered for events after initially querying the tree
**

This is mostly only an issue on startup****. I haven't really pointed this out before, but the reason why we can't just ask the server every single time a restack happens for the complete stacking order is because this would block on a reply from the server and kill performance because the server needs to process all of our requests first and then give us the result of the stacking order once that's done. However, there is one place that we do this, and that's on startup, because on startup, we don't know what the stacking order is. We ask the server for it once and then work out what the stacking order is based on all subsequent events, working under the assumption that if you were to query the tree, grab the server, gather all events and ungrab the server, that after processing all events the tree you got from the server would be the same as your internal stacking order after processing events relative to the last time you updated the tree (eg the last time you processed events or the last time you did XQueryTree before processing events).

The timing of the point where you select for events is very important. If you do it too soon before you do XQueryTree you'll get events for things happening up to that initial tree query which will all be invalid but processed anyways and give you a wrong result, or if you do it too late you won't end up getting events that are necessary to give you the correct stack representation when handling events. Previously this was a case of "too soon" and windows were being added to the tree twice.

**4) Invalidating or keeping internal references to windows before the server actually recognises that they're gone or created in the chain of events**

****This was mainly a problem with our reparenting implementation and covered the following situation:



	
  1. Client does XConfigureWindow to restack the client window (well, in this case issuing a synthetic ConfigureRequest to restack relative to another client since using XConfigureWindow directly would break

	
  2. Client destroys the window it just restacked the initial client relative to


On the compiz side, this is what happens

	
  1. We receive the ConfigureRequest and then do XConfigureWindow to restack relative to the frame of the other client that we were to restack relative to

	
  2. We then receive a DestroyNotify for that every client.

	
  3. On Destroy, we unreparent the window, because it is destroyed we can't put it back into the toplevel tree, but we do issue a DestroyWindow request for its frame window as well

	
  4. We immediately set the reference to None

	
  5. We then get a ConfigureNotify for the window that we just restacked relative to the frame of the window we just destroyed. Because we immediately set the frame reference to None, its impossible to process that ConfigureNotify event so we just leave the window where it is or put it on top. (incorrect!)

	
  6. We then receive the DestroyNotify for the frame window of the client we were restacking relative to.


In this case, there is no option except to keep the frame windows around because other clients may have issued restack requests relative to them and keep a reference to the frame window, but don't actually acknowledge that the frame window is a frame for any particular client.

The way I've implemented this now is to keep the frame window around until the client actually goes away and then only removing it from the tree **once** it receives a DestroyNotify event like any other client.

**5) Keeping destroyed windows and their references around after the windows have received a DestroyNotify in the same window list for things like close animations**

Before you freak out - no I have not removed close animations, merely changed the way that they function.

When a window receives a DestroyNotify, that's to tell you that in the chain of events the server is giving you, past that point, the window in question is no longer a valid window and you should get rid of it in your stack. However, the only way the close animations would work is if we kept that window around a *little* longer so that we can still have the close animation going. (XComposite is funny like that and you can often use pixmaps of windows that have long since been destroyed since it won't automatically overwrite that pixmap memory with something else). So we just set the window id to zero. The frame however, is still a valid window and holds an invalid position in the stack.****

The way to fix this is to immediately remove windows that have received a DestroyNotify from the internal stack and place them in a separate list available to plugins, rather than having them sit in the main stack and causing trouble. The frame windows are separated off into their own toplevel override redirect windows which are inserted directly into the stack so any incoming events relative to them will be processed correctly.

Ok,  so _wc_ tells me that this blog post is 4273 words, which is twice the number of words that are required for a rather important uni assignment due in a few days. I clearly have my priorities right. :/

Anyways, that's that half of the braindump. Maybe when I get time I'll explain the EWMH stacking order, how we actually debug these problems and also a braindump on how compiz' decoration interface works since I've promised to write on that and haven't yet. Oh and libcompizconfig too.
