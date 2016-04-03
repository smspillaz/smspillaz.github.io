---
layout: project
title: CMake Tooling
blurb: Easy integration of leading C++ tools into your project
thumb: /img/cmake.svg
---

CMake Tooling
=============

[CMake](http://cmake.org) is cross platform build-system that offers a great
deal of flexibility and programmibility.

Something a lot more C++ projects should be adopting is the range of code
quality and static analysis tools. In 2015 the [C++ core guidelines](https://github.com/isocpp/CppCoreGuidelines)
were announced and compiler vendors have made a [serious effort]("http:/http://reviews.llvm.org/diffusion/L/browse/clang-tools-extra/trunk/clang-tidy/cppcoreguidelines/") 
to write static analysis checks for those guidelines.

Tooling modules
---------------

These CMake modules allow the project maintainer to add a build step which
runs a static analysis tool over a target's source code files when it is built.

```bash
find_package (CLANGTIDY)
find_package (IWYU)
find_package (CPPCHECK)

add_executable (executable
                "${CMAKE_CURRENT_SOURCE_DIR}/main.cpp")

if (CLANGTIDY_FOUND)

    clang_tidy_check_target_sources (executable
                                     ENABLE_CHECKS cppcoreguidelines-*)

endif ()

if (CPPCHECK_FOUND)

    cppcheck_target_sources (executable)

endif ()

if (IWYU_FOUND)

    iwyu_check_target_sources (executable)

endif ()
```

Some of the currently supported tools include:

 - [CPPCheck]("http://github.com/polysquare/cppcheck-target-cmake")
 - [Clang Tidy]("http://github.com/polysquare/clang-tidy-target-cmake")
 - [Include What You Use]("http://github.com/polysquare/iwyu-target-cmake")
 - [Vera++]("http://github.com/polysquare/verapp-cmake")

The tooling wrappers are built upon a [common library]("http://github.com/polysquare/tooling-cmake-util")
which ensures that the same compiler flags are passed to each tool so that the
results are consistent with what will actually be built.

Runtime sanitization
--------------------

For quite some time, LLVM has also offered a number of ["sanitizer"](http://compiler-rt.llvm.org)
builds. These builds provide functionality similar to [valgrind](http://valgrind.org),
but the instrumentation is built in to the target at compiletime, instead of the
target being re-interpreted at runtime.

Running a sanitizer build often requires that certain compiler flags be
set and that the whole project be re-built. This can make testing between
different sanitizers difficult to work with.

```bash
include (SanitizeTarget)

add_executable (executable
                "${CMAKE_CURRENT_SOURCE_DIR}/main.cpp")

psq_sanitizer_add_sanitization_to_target (executable)
```

The [CMake Sanitization Target](http://github.com/polysquare/sanitize-target-cmake)
module provides a mechanism to build all the sanitization options in parallel
and ensure that they are linked correctly. Switching between different sanitizer
builds when running tests is just a matter then of running the binary with the
correct suffix.


Unit Testing for CMake
----------------------

With more tooling being integrated into CMake builds, there's more things that
can silently go wrong during the build process. Ensuring that builds do not
break and cause developers to slow down requires a mechanism to ensure that
the build system's internal functionality continues to work as expected.

```bash
function (namespace_test_one)

    function (_namespace_configure)

        cmake_unit_create_simple_library (library SHARED FUNCTIONS function)
        cmake_unit_create_simple_executable (executable)
        target_link_libraries (executable library)

        cmake_unit_assert_that (executable is_linked_to library)

    endfunction ()

    function (_namespace_verify)

        cmake_unit_get_log_for (INVOKE_BUILD OUTPUT BUILD_OUTPUT)

        cmake_unit_assert_that ("${BUILD_OUTPUT}"
                                file_contents any_line
                                matches_regex
                                "^.*executable.*$")

    endfunction ()

    cmake_unit_configure_test (INVOKE_CONFIGURE LANGUAGES C CXX
                               CONFIGURE COMMAND _namespace_configure
                               VERIFY COMMAND _namespace_verify)

endfunction ()
```

[CMake Unit]("http://github.com/polysquare/cmake-unit") can assist with this
problem. It is a comprehensive unit testing framework for CMake that was
designed to work in a similar way to many other xUnit frameworks. Module
maintainers can make assertions about the configuration and build stages of
a project.

