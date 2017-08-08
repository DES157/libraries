# NPM


## Using npm

Npm packages can be installed either *locally* or *globally*. Npm defaults to installing packages locally, i.e. in a `node_modules` directory in your current directory. Use the `-g` flag to install globally.

It's controversial, but Bower does similar things as npm. See also Browserify. See [What is the difference between Bower and npm?](https://stackoverflow.com/questions/18641899/what-is-the-difference-between-bower-and-npm). Seems like Bower focuses on the front-end, but npm+browserify do the same thing and may be preferable.

Node seems to use `/usr/local`, which is why coexistence with brew can be tricky. Verify npm's directory by `npm config get prefix`.

### npm Links

* [npm](https://www.npmjs.com/)
* [npm Docs](https://docs.npmjs.com/)
* [npmsearch](https://npmsearch.com/)
* [browsenpm](http://browsenpm.org/)
* [browsenpm help](http://browsenpm.org/help)

###### howto

* [HowToNode](http://howtonode.org/)
* [A Beginner’s Guide to npm](http://www.sitepoint.com/beginners-guide-node-package-manager/)


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
