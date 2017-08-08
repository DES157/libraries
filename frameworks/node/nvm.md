# NVM

##### Install nvm with Brew

First create `~/.nvm`, then:

    brew install nvm
    export NVM_DIR=~/.nvm
    source $(brew --prefix nvm)/nvm.sh

Now you can install node as discussed [below](#Using_nvm). Check, but I believe manually exporting and and sourcing only need to be done if you wish to use nvm in the current session. Should happen automatically 


## Using nvm

Nvm modifies paths to switch versions!


###### alternatives to nvm

* [n](https://github.com/tj/n)
* [nave](https://github.com/isaacs/nave)
* [avn](https://github.com/wbyoung/avn)
* [nodenv](https://github.com/nodenv/nodenv) is like rbenv for node, see it's list of [alternatives](https://github.com/nodenv/nodenv/wiki/Alternatives)
* [nodebrew](https://github.com/hokaccha/nodebrew)


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




