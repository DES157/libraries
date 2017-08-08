# Node.js


## Links

- [Node.js Homepage](https://nodejs.org/)
- [Node Beginner Book](http://www.nodebeginner.org/)
- [How To Node](http://howtonode.org/)
- [Grunt.js](http://gruntjs.com/)

##### Learning

- [Understanding npm](https://unpm.nodesource.com/) - slick intro!
- [Node.js Lessons @ egghead](https://egghead.io/technologies/node)


## Installing Node

### OS X

- [What is the suggested way to install brew, node.js, io.js, nvm, npm on OS X?](https://stackoverflow.com/questions/28017374/what-is-the-suggested-way-to-install-brew-node-js-io-js-nvm-npm-on-os-x)

###### OSX Links May be superfluous and delete

- [Homebrew installed npm can't upgrade itself](https://github.com/Homebrew/homebrew/issues/22408)
- [Error: Refusing to delete: /usr/local/bin/npm](https://github.com/npm/npm/issues/3794)
- [What is the suggested way to install brew, node.js, io.js, nvm, npm on OS X?](https://stackoverflow.com/questions/28017374/what-is-the-suggested-way-to-install-brew-node-js-io-js-nvm-npm-on-os-x)
- [Fixing npm On Mac OS X for Homebrew Users](https://gist.github.com/DanHerbert/9520689)
- [How to use npm global without sudo on OSX](http://www.johnpapa.net/how-to-use-npm-global-without-sudo-on-osx/)

#### Installing Node with Homebrew

###### TL;DR

- Install `nvm` with brew, then install node with nvm.
- Update nvm with brew.
- Update node with nvm.
- Update npm with `npm install -g npm@latest`

###### Long Winded Answer

From experience, `brew install node` installs node and npm. It also leaves a `/usr/local/lib/node_modules` directory and an `npm` symlink in `/usr/local/bin` which __stays around even if you uninstall!__

Installing `node` with brew is fine, but it’s better to install `nvm` with brew, and then use it to install node.

Package install, also available in brew cask, is another option, and there seem to be pros and cons.

If you have `nvm` you can install the latest node+npm by `nvm install node` (`node` is an alias for latest version, and replaces `stable`). This is how you do it if you have installed `nvm` with brew.

Should I add this variable as mentioned [here](https://stackoverflow.com/questions/11177954/how-do-i-completely-uninstall-node-js-and-reinstall-from-beginning-mac-os-x)?
`export NODE_PATH='/usr/local/lib/node_modules'`
Maybe not, I think this is not necessary any more as mentioned in the api [docs](https://nodejs.org/api/modules.html).

There were issues with homebrew npm updating itself but they seem to be fixed, though some suggesting using sudo: `sudo npm install -g npm@latest`. Just `brew install nvm` and call it good. Another alternative is to `brew install node --without-npm` option and then use npm install.sh.

The best bet is probably to install node through [nvm](nvm)!


## Using Node

Exit [REPL](https://nodejs.org/api/repl.html) Terminal (Read-Eval-Print-Loop) by `.exit`.

`require()`?


## Etc

* [[nvm]](nvm) is a slick way to install node and manage versions
* [[NPM]](npm) is used to manage packages

### Other Package Managers

* [Yarn](https://yarnpkg.com/en/)
* [webpack](https://webpack.js.org/)
* [Bower](https://bower.io/) in wide use but on its way out
