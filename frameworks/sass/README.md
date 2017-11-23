# SASS

The new Sass 3 synax is SCSS (Sassy CSS).

[Sass](http://sass-lang.com/)

## SASS Syntax Notes

Before SCSS, Sass used indentation!

Sass variables (`$` for variables) can also have `!default` and `!global` flags. Starting in version 3.3 (3.4?) local variables will not bleed into global namespace. You must use `!global` to explicitly assign to a global variable in a local context. See `variable-exists` and `global-variable-exists` to check for existence.

Define a *mixin* with the `@mixin` directive, and include them with the `@include` directive.

`@function`

`&` selector

`#{}` is interpolation operator which allows using sass variables in selectors and property names (as well as property values, but usually variables are preferred for values).

You can use the `@extend` directive to inherit properties (adds to the extended selector). Use *placeholder selectors* `%` to denote styles that are meant to be extended and are not generated themselves. Be careful extending normal selectors since they will all be matched! Note possibly weirdness when extending from within `@media` media query (one solution is to use mixin instead).

Review where assuming a%block if you extend %block you append the extending selector directly to the a.

## Refs

* [Sass in the Real World](https://anotheruiguy.gitbooks.io/sassintherealworld_book-i/content/) free gitbook

## See also

* [Bourbon](http://bourbon.io/)
* [Less](http://lesscss.org/)
* Compass

