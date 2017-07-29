# kanali-plugin-<%= pluginInternal %>

> a plugin for Kanali

# Local Development

Below are the steps to follow if you want to build/test locally. [Glide](https://glide.sh/) is a dependency.

```sh
$ cd $GOPATH/src/<%= vcs %>/<%= repo %>/kanali-plugin-<%= pluginInternal %>
$ make install_ci
$ make kanali-plugin-<%= pluginInternal %>
```

# Overview

For complete details on how to add functionality to your newly created plugin, visit the plugin tutorial [here](https://github.com/northwesternmutual/kanali/blob/master/PLUGIN_GUIDE.md).