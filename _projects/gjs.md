---
layout: project
title: GJS
blurb: Coverage tools for JavaScript
thumb: /img/gjs.svg
---

Coverage tools for GJS
======================

GJS is a library used to bind GObject-introspected modules written in C to
JavaScript without any hand-written language bindings. The GNOME project
has encouraged developers for some time to write applications in JavaScript
using system libraries through GJS.

GJS itself worked by creating a SpiderMonkey runtime and calling into that
in order to bind GObject-introspected modules.

One of the missing pieces of the testing strategy for GNOME apps written
in JavaScript was a coverage reporting tool.

SpiderMonkey used a slight derivative of the JavaScript standard, which made it
difficult to use a third party coverage reporting tool like isparta. This is
because isparta would attempt to perform source code transformations on
code that may not strictly speaking be specification compliant.

The [solution](https://git.gnome.org/browse/gjs/tree/gjs/coverage.cpp) was to
use SpiderMonkey's own debugging API to record what was going on during
execution. This could then be dumped and written to a file that was
[LCOV](http://ltp.sourceforge.net/coverage/lcov.php) compliant, from which
reports could be generated.

Parsing the AST to determine executable lines
---------------------------------------------

One of the challenges in taking this approach was that that abstract syntax
tree of every JavaScript file opened by the coverage tool needed to be parsed
in order to determine where its executable lines were. This is what would make
the coverage reports useful, since a report that only indicated which lines
were hit would always show 100% coverage.

The solution was to use the internal `AST.Parse` mechanism available in
[SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/JSAPI_reference).
From there, the AST could be recursively traversed in order
to determine lines in which expressions could take place. The nature of
JavaScript meant that a number of esoteric cases needed to be explored, since
code execution could take place in a number of areas one might not expect
due to the presence of self-executing anonymous functions.

Keeping quality during architectural shifts
-------------------------------------------

A number of architectural shifts were taking place at the time the tool was
being written. The old C JS Debugger API was being removed and replaced with
a [pure JavaScript API](https://developer.mozilla.org/en-US/docs/Tools/Debugger-API)
taking advantage of some newer developments in SpiderMonkey such as
compartments.

Effectively managing the code across this period of transition would not have
been possible without a comprehensive series of automated tests. These tests
exercised both the edge cases in terms of what lines needed to be covered
and also the core coverage functionality.

Performance
-----------

Another key area was build performance. Running with the debugger turned on
caused a slowdown, especially when files needed to be parsed. The coverage
utilities thus include a [caching](https://git.gnome.org/browse/gjs/tree/gjs/coverage.cpp#n991)
system to ensure that files which have not changed are not re-parsed and
information about their executable lines is directly re-used.