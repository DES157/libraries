# Foundation

Foundation is a web framework along the lines of Bootstrap.

It's divided into three projects:
1. [Foundation fo Sites](http://foundation.zurb.com/sites.html)
2. [Foundation for Apps](http://foundation.zurb.com/apps.html)
3. [Foundation for Emails](http://foundation.zurb.com/emails.html) (previously Ink)


## Foundation GitHub

* [foundation-sites](https://github.com/zurb/foundation-sites)
* [foundation-sites-template](https://github.com/zurb/foundation-sites-template)
* [foundation-zurb-template](https://github.com/zurb/foundation-zurb-template)


## Foundation for Sites

Foundation 6 is the current version.


### Foundation for Sites: Installation

There are a few ways to install Foundation, and information can be found at [Sites Getting Started](http://foundation.zurb.com/sites/getting-started.html) and [Sites Installation Docs](http://foundation.zurb.com/sites/docs/installation.html).

It boils down to a Sass (which needs compiling) and CSS.

You can also install `foundation-sites` from a package manager, but this does not include the templates or gulp build stuff! "Foundation is available on npm, Bower, Meteor, and Composer. The package includes all of the source Sass and JavaScript files, as well as compiled CSS and JavaScript, in uncompressed and compressed flavors." 

##### Templates

1. Basic Template - does not have a full build system, `npm start` builds css
2. ZURB Template - includes Gulp build system!

##### SASS

There is a *basic* and *ZURB* template, and the easiest wasy is to get started is using `foundation new` in `foundation-cli`.

    npm install --global foundation-cli
    foundation new

You could also clone the repo and get the exact same thing:

    git clone https://github.com/zurb/foundation-sites-template projectname
    git clone https://github.com/zurb/foundation-zurb-template projectname
    cd projectname
    npm install
    bower install

##### CSS

simplest, download zip with starter template

### Using Foundation

directory structure...


## Foundation CLI


You can install the Foundation CLI (`foundation-cli`) with npm:
    
    npm install --global foundation-cli

Then create a new site/app/email:

    foundation new

1. Without flags you get interactive setup
2. Otherwise you can select `--framework` of `sites`, `apps`, or `emails`
    1. `--framework site` specify...
        1. `--template basic`
        2. `--template zurb`
    2. `--framework apps`
    3. `--framework emails`

You can also do:

    npm install foundation-sites --save
    npm install foundation-apps --save

##### Foundation CLI Commands

    Commands:
      new       Create a new Foundation project
      update    Update an existing Foundation project
      watch     Watch a project's files for changes
      build     Build a project's files for production
      help      Show this screen
      -v        Display the CLI's version

##### An aside about Foundation Apps

###### tl;dr

Do this:

    npm install -g foundation-cli bower gulp
    gem install bundler
    foundation new myApp
    npm start  # serve on localhost:8080
    # or foundation watch

###### more details

There are mildly conficting instructions in [Apps Getting Started](http://foundation.zurb.com/apps/getting-started.html) and  [Apps Installation Docs](http://foundation.zurb.com/apps/docs/#!/installation).

They both say create app with `foundation new` (from `foundation-cli`):
    
    npm install -g foundation-cli
    # also need bower, gulp, bundler
    foundation new
    npm start  # or foundation watch

`npm start` is eventually called by `foundation watch` and they both seem to work.

The second also mentions a manual option 

    npm install foundation-apps --save  # or bower

But this requires `bower install` and `npm install` at the very least, but id didn't work for me (missing gulpfile). Cloning the foundation-apps-template repo did (not clear how that differs from the foundation-apps repo).


### Learning

* [Tutorials](http://foundation.zurb.com/learn/tutorials.html)
* [Lessons](http://zurb.com/university/lessons) @ [ZURB University](http://zurb.com/university)
* [ZURB Library](http://zurb.com/library)

* [Getting Started with Foundation for Apps @ Scotch.io](https://scotch.io/tutorials/getting-started-with-foundation-for-apps)
