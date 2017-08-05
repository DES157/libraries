# Node.js

## Links

- [Node.js Homepage](https://nodejs.org/)
- [Node Beginner Book](http://www.nodebeginner.org/)
- [How To Node](http://howtonode.org/)
- [Grunt.js](http://gruntjs.com/)

##### Learning

- [Understanding npm](https://unpm.nodesource.com/) - slick intro!
- [Node.js Lessons @ egghead](https://egghead.io/technologies/node)

## Installation

##### OS X

- [What is the suggested way to install brew, node.js, io.js, nvm, npm on OS X?](https://stackoverflow.com/questions/28017374/what-is-the-suggested-way-to-install-brew-node-js-io-js-nvm-npm-on-os-x)

###### OSX Links May be superfluous and delete

- [Homebrew installed npm can't upgrade itself](https://github.com/Homebrew/homebrew/issues/22408)
- [Error: Refusing to delete: /usr/local/bin/npm](https://github.com/npm/npm/issues/3794)
- [What is the suggested way to install brew, node.js, io.js, nvm, npm on OS X?](https://stackoverflow.com/questions/28017374/what-is-the-suggested-way-to-install-brew-node-js-io-js-nvm-npm-on-os-x)
- [Fixing npm On Mac OS X for Homebrew Users](https://gist.github.com/DanHerbert/9520689)
- [How to use npm global without sudo on OSX](http://www.johnpapa.net/how-to-use-npm-global-without-sudo-on-osx/)

##### Install Node with Brew

###### TL;DR

- Install `nvm` with brew, then install node with nvm.
- Update nvm with brew.
- Update node with nvm.
- Update npm 

###### Long Winded Answer

From experience, `brew install node` installs node and npm. It also leaves a `/usr/local/lib/node_modules` directory and an `npm` symlink in `/usr/local/bin` which __stays around even if you uninstall!__

Installing `node` with brew is fine, but it’s better to install `nvm` with brew, and then use it to install node.

Package install, also available in brew cask, is another option, and there seem to be pros and cons.

If you have `nvm` you can install the latest node+npm by `nvm install node` (`node` is an alias for latest version, and replaces `stable`). This is how you do it if you have installed `nvm` with brew.

Should I add this variable as mentioned [here](https://stackoverflow.com/questions/11177954/how-do-i-completely-uninstall-node-js-and-reinstall-from-beginning-mac-os-x)?
`export NODE_PATH='/usr/local/lib/node_modules'`
Maybe not, I think this is not necessary any more as mentioned in the api [docs](https://nodejs.org/api/modules.html).

There were issues with homebrew npm updating itself but they seem to be fixed, though some suggesting using sudo: `sudo npm install -g npm@latest`. Just `brew install nvm` and call it good. Another alternative is to `brew install node --without-npm` option and then use npm install.sh.


##### Install nvm with Brew

First create `~/.nvm`, then:

    brew install nvm
    export NVM_DIR=~/.nvm
    source $(brew --prefix nvm)/nvm.sh

Now you can install node as discussed [below](#Using_nvm). Check, but I believe manually exporting and and sourcing only need to be done if you wish to use nvm in the current session. Should happen automatically 


## Using nvm

Nvm modifies paths to switch versions!


###### alternatives to nvm

- [n](https://github.com/tj/n)
- [nave](https://github.com/isaacs/nave)
- [avn](https://github.com/wbyoung/avn)
- [nodenv](https://github.com/nodenv/nodenv) is like rbenv for node, see it's list of [alternatives](https://github.com/nodenv/nodenv/wiki/Alternatives)
- [nodebrew](https://github.com/hokaccha/nodebrew)


### Installing nvm on OS X

1. Install via Homebrew (see above). Probably a good option, and also conveniently installs the bash completions.
2. The [`nvm`](https://github.com/creationix/nvm) GitHub page describes how to install by cloning the repo, or with a script that does it for you and installs to `~/.nvm`.
3. `nvm` can also be installed with `npm` as show [here](https://www.npmjs.com/package/nvm). Advantages unclear.


### nvm Quickstart

#### Paths of interest

Typically the nvm script is `~/.nvm/nvm.sh` and the node versions path is `~/.nvm`.

    nvm debug

#### Commands

##### Installing versions

###### list available versions

    nvm ls-remote
    nvm ls-remote --lts  # just list lts versions

###### install a version

    nvm install node  # install newest version
    nvm install --lts  # install latest

Note: set the `default` alias to the new version

###### Install a new version of node and migrate npm packages

    nvm install node --reinstall-packages-from=node

Note: `--reinstall-packages-from` uses `nvm reinstall-packages`, also there is trickery so this should work even if your current version is not the latest)

###### uninstall a version

    nvm uninstall <version>

##### Managing versions

Look into `.nvmrc`. Note some version managers (including avn and nodenv, but not nvm) support `.node-version` file (akin to `.ruby-version`).

###### list installed versions

    nvm ls

###### activate an installed version

    nvm use <version>


###### display node version currently in use

    nvm current

###### print path to executable

    nvm which <version>

##### Aliases

The primary aliases are `default` (set by user to default version) and `node` (always latest version).

###### list aliases

    nvm alias

###### set default node version

    nvm alias default <version>

e.g. `nvm alias default node`

This sets up a `default` alias which you can see with `nvm alias`. The alias `node` always refers to the latest version. You can also have user defined aliases to make working with versions easier.



`nvm deactivate` seems to reverse `nvm use`, and takes node's bin out of the PATH.

`nvm unload` removes nvm itself from the shell (not clear how it was actually added)




----------------------------------------

## Using Node

Exit [REPL](https://nodejs.org/api/repl.html) Terminal (Read-Eval-Print-Loop) by `.exit`.

`require()`?


## Using npm

Npm packages can be installed either *locally* or *globally*. Npm defaults to installing packages locally, i.e. in a `node_modules` directory in your current directory. Use the `-g` flag to install globally.

It's controversial, but Bower does similar things as npm. See also Browserify. See [What is the difference between Bower and npm?](https://stackoverflow.com/questions/18641899/what-is-the-difference-between-bower-and-npm). Seems like Bower focuses on the front-end, but npm+browserify do the same thing and may be preferable.

Node seems to use `/usr/local`, which is why coexistence with brew can be tricky. Verify npm's directory by `npm config get prefix`.

### npm Links

- [npm](https://www.npmjs.com/)
- [npm Docs](https://docs.npmjs.com/)
- [npmsearch](https://npmsearch.com/)
- [browsenpm](http://browsenpm.org/)
- [browsenpm help](http://browsenpm.org/help)

###### howto

- [HowToNode](http://howtonode.org/)
- [A Beginner’s Guide to npm](http://www.sitepoint.com/beginners-guide-node-package-manager/)


### npm Quickstart

See the [FAQ](https://docs.npmjs.com/misc/faq) for the difference between a _package_ and _module_ (load with `require()`), among other things. Most npm packages are modules, but they are not required to be. I have not used these terms correctly here!

##### Getting help

`npm -l`

`npm help <term>`

`npm help-search <text>`

`npm faq`


##### Installing node modules

Packages that you will `require()` should be installed locally, but binary packages should tend to be installed globally so the executables are available on PATH. See [Global vs Local installation](https://nodejs.org/en/blog/npm/npm-1-0-global-vs-local-installation/) on the Node blog.

###### search for packages with

    npm search

###### list installed packages

    nmp ls [-g]
    npm list -g --depth=0  # just the top level ones you installed

###### installing globally

    npm install <package> -g
    npm uninstall <pacakge> -g

###### installing locally

    npm install <package>

Using a [`package.json`](https://docs.npmjs.com/getting-started/using-a-package.json) file is the best way to manage locally installed npm packages. Start out with `npm init` and install packages as `npm install <package> --save` to add it to local `dependencies`. Then you can simply run `npm install` and it will download latest versions of all dependencies. Check but it seems that `npm install -g` does the same things for globals and is useful if you have installed a new version of node. Careful! I think that if you `npm install -g` without parameters in a directory that has local stuff installed (check if it looks for node_packages or packages.json) then it will actually install the packages you are working on globally!

Look into the fine difference and use case for `npm install` and `npm update`.

Otherwise packages are just installed into the project's `node_packages` directory.

Note: npm sets path for local installs to closet parent directory with `node_packages` or `package.json`.

You can link a global package to be available locally using `npm link <package>`. Probably better just to install both locally and globally. However if you wish to make a package you are developing locally available to other packages you can do that by running `npm link` in the package folder to create a global symlink that can be linked elsewhere.




##### Updating

###### list outdated packages (as constrained by package.json, or global):

    npm outdated [-g]

###### update packages

    npm update [-g]

###### update npm

This is the new and preferred way, as shown [here](https://docs.npmjs.com/getting-started/installing-node).

    npm install npm@latest -g

##### Using packages

For packages installed locally:

    require("packagename")

##### npm maintenance

Clean cache:

    npm cache clean

`npm prune` will remove local packages which are not dependencies in package.json.


### Configuring npm

You can read about [npm-config](https://docs.npmjs.com/misc/config) or more details about [npm-folders](https://docs.npmjs.com/files/folders) and [npmrc](https://docs.npmjs.com/files/npmrc).

Get all config/defaults: `npm config ls -l`, or individually `npm config get/set`.

Some interesting config settings:

`cache` (defaults to `~/.npm`) - as mentioned above, can be cleaned with `npm clean cache`.

`globalconfig` and `userconfig` settings give paths to npmrc files.

Get prefix: `npm prefix [-g]` (vs. the prefix defined in config is just for global).

These commands will show the directories used for local and global installs:

    npm root
    npm bin
    npm root -g
    npm bin -g

#### package.json

The docs on configuring npm also give specs on [package.json](https://docs.npmjs.com/files/package.json). A nice interactive example is [here](http://browsenpm.org/package.json).

Compatible node and npm versions can be specified in `engines`. Did `engine` work at some point? How to develop in multiple versions with nvm?

#### Publishing node modules

You need to have a user on the npm site (setup on site as `npm adduser`), and authorise (`npm login`). Then you can successfully run `npm whoami`.
