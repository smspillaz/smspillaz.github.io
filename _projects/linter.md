---
layout: project
title: Linters
blurb: Abstract syntax trees and static analysis
thumb: /img/linters.svg
---

Linters and Static Analysis
===========================

Static analysis is about catching to thousand little bugs that you shouldn't
have to care about. The ones that are easy to fix once found, but so numerous
that it is difficult to find them all. The inconsistencies which add up
to make cracks in perfect tempered glass.

CMake
-----

CMake is a cross platform tool to compile, link, install and manage C++
projects. It comes with its own turing-complete domain specific language for
describing how build targets are to be created and run.

In many ways, the language is similar to what one might find when writing
a shell script. In many other ways, it is very different.

Fundamentally, the language only supports string interpolation and
function calls. Some functions call into code in the runtime which generates
build targets. Other functions affect control flow.

{% highlight bash linenos %}
project (MyProject LANGUAGES C CXX)
cmake_minimum_required (VERSION 2.8 FATAL_ERROR)

include(CMakeParseArguments)

SET(archs "x86" "amd64" 'armhf')

function (generate_platform_build_targets PLATFORM
          ARCH)

    add_custom_command (OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/${ARCH}_${PLATFORM}.stamp
                        COMMAND ${CMAKE_COMMAND} -E
                        touch ${CMAKE_CURRENT_BINARY_DIR}/${ARCH}_${PLATFORM}.stamp)
    add_custom_target (${PLATFORM}_${ARCH}
                       SOURCES ${CMAKE_CURRENT_BINARY_DIR}/${ARCH}_${PLATFORM}.stamp)

endfunction (generate_build_targets)

foreach (_arch ${archs})
  generate_platform_build_targets(${_arch} ${CMAKE_SYSTEM_NAME})
endforeach ()
{% endhighlight %}

This code snippit will generate build targets that work on some platforms but
not others. However, even if it did work on every platform, it is still riddled
with inconsistency. Over time, these broken windows add up, and people begin
to care less about keeping the build system in good shape.

In particular, it has the following problems:

 - **Inconsistency**: `SET` on line 6 should be lowercase
 - **Misaligned arguments**: `ARCH` on line 7 should be aligned with `PLATFORM`
 - **Unquoted paths**: String interpolation performed on lines 11, 12 and 13
                       is dangerous. If it were a path that had spaces in it
                       then it may be interpreted as a series of separate
                       arguments by the command processor. The paths should
                       be quoted.
 - **Inconsistent naming**: The name in `endfunction()` does not match the
                            name given in `function`.
 - **Poor quoting**: Double quotes allows string expansion, wheras single
                     quotes get included in the expanded result.

[CMake Linter](http://github.com/polysquare/polysquare-cmake-linter) takes care
of all that. It will parse the CMake file, generate an abstract syntax tree
and run that tree through some rules. The output shows you exactly where you
went wrong.

```
CMakeLists.txt:6 [style/doublequotes] 'armhf' must use double quotes
CMakeLists.txt:9 [style/argument_align] Argument ARCH must fall on any of: line 8, col 43
CMakeLists.txt:6 [style/lowercase_func] SET is not lowercase
CMakeLists.txt:11 [correctness/quotes] Path ${CMAKE_CURRENT_BINARY_DIR}/${ARCH}_${PLATFORM}.stamp must be quoted
CMakeLists.txt:12 [correctness/quotes] Path ${CMAKE_COMMAND} must be quoted
CMakeLists.txt:13 [correctness/quotes] Path ${CMAKE_CURRENT_BINARY_DIR}/${ARCH}_${PLATFORM}.stamp must be quoted
CMakeLists.txt:15 [correctness/quotes] Path ${CMAKE_CURRENT_BINARY_DIR}/${ARCH}_${PLATFORM}.stamp must be quoted
CMakeLists.txt:4 [style/space_before_func] -1 extra spaces between call of include
CMakeLists.txt:6 [style/space_before_func] -1 extra spaces between call of SET
CMakeLists.txt:20 [style/space_before_func] -1 extra spaces between call of generate_platform_build_targets
CMakeLists.txt:20 [style/indent] Expected generate_platform_build_targets to be on column 5
```

Spelling and Style Guide
------------------------

Another imperfection that can often be difficult to catch is are spelling errors
in user facing messages and code comments. Worse, code comments can easily
go out of date when names are changed or code is refactored.

Consider this simple header:

{% highlight cpp linenos %}
/* /include/log.h
 *
 * Basic logger namespace, exporting ostreams to record functions that are
 * warnings or generel messages.
 *
 * See /LICENCE.md for Copyright information */

#include <ostream>

namespace log {
    std::ostream & Standard();
    std::ostream & Warning();
}
{% endhighlight %}

We'll use this header in `main.cpp`.

{% highlight cpp linenos %}
/* include/main.cpp
 *
 * Log some messages.
 *
 * See /LICENCE.md for Copyright information */

#include "include/log.h"

/* Log to log::Standard() and log::Warning */
int main(void) {
    log::Standard() << "standard";
    log::Warning() << "warning";
}
{% endhighlight %}

To start with, there's a typo in `log.h`. There is also a slight inconsistency
between `main.cpp` and `log.h`. See if you can spot them in a few seconds and
consider whether you'll be able to spot them every time a code review comes in.

A reviewer might suggest that `log::Standard` is poorly named. What we really
meant was `log::Message`. So we'll rename it

{% highlight cpp linenos %}
/* /include/log.h
 *
 * Basic logger namespace, exporting ostreams to record functions that are
 * warnings or generel messages.
 *
 * See /LICENCE.md for Copyright information */

#include <ostream>

namespace log {
    std::ostream & Message();
    std::ostream & Warning();
}
{% endhighlight %}

And use the header in `main.cpp` again:

{% highlight cpp linenos %}
/* main.cpp
 *
 * Log some messages.
 *
 * See /LICENCE.md for Copyright information */

#include "include/log.h"

/* Log to log::Standard() and log::Warning */
int main(void) {
    log::Message() << "standard";
    log::Warning() << "warning";
}
{% endhighlight %}

Now our documentation is out of date! The problem is that IDEs won't
rename classes mentioned in comments even if they no longer exist.

[Spellcheck Linter](http://github.com/polysquare/polysquare-generic-file-linter)
does away with these types of problems. It will scan every source code file
and generate a list of names used in the source code. If a name appears in
the comments and is not a known english word, it will report an error
stating that the name doesn't exist.

```
include/log.h:3 [file/spelling_error] Misspelled word ostreams
include/log.h:4 [file/spelling_error] Misspelled word generel, perhaps you meant general geneses genre genres genteel
main.cpp:1 [file/spelling_error] Technical word cpp not used in surrounding body , perhaps you meant int log main void
main.cpp:1 [headerblock/filename] The filename /main.cpp must be the first line of the header
main.cpp:9 [file/spelling_error] Technical word Standard not used in surrounding body
```

From there, it is the user's choice as to whether they wish to add the special
word to the top-level project `DICTIONARY` or whether they need to update
the documentation and fix the problem.