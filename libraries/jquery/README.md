# jQuery

### Links

* [jQuery](https://jquery.com)

See also [cheerio.js](https://github.com/cheeriojs/cheerio) is like jQuery for the server

##### Plugins

* [jQueryUI](https://jqueryui.com)
* [jQuery Mobile](https://jquerymobile.com)
* [jQT](http://jqtjs.com/) - plugin for mobile web development

##### Learning

* [jQuery @ w3schools](http://www.w3schools.com/jquery/)

##### See Also

* [Zepto](http://zeptojs.com/) is a competitor with mixed reviews
* [You Might Not Need jQuery](http://youmightnotneedjquery.com/)

---

Verify but I think that if providing a function as a parameter to jquery no `()`, but if straight javascript (e.g. onclick) you need `()`.

---

## jQuery Basics


`jQuery()` or `$()`


Working with [dimensions](http://www.w3schools.com/jquery/jquery_dimensions.asp).

![dimensions](http://www.w3schools.com/jquery/img_jquerydim.gif)


## jQuery Reference


### [`.click()`]()

### [`.css()`](https://api.jquery.com/css/)

### [`.hide()`](https://api.jquery.com/hide/) / `.show()`

### [`.ready()`](https://api.jquery.com/ready/)


### [`.width()`](https://api.jquery.com/width/)

"Get the current computed width for the first element in the set of matched elements. "Returns a unit-less pixel value, good for doing calculations. Can also find width of window and document:


    // Returns width of browser viewport
    $( window ).width();
     
    // Returns width of HTML document
    $( document ).width();

Compare to `.css("width")`

See also [`.position()`](https://api.jquery.com/position/) and [`.offset()`](https://api.jquery.com/offset/)

##### Ajax

In jQuery [Ajax](https://api.jquery.com/category/ajax/) requests are made with the `$.ajax()` method. However, there are many [shorthand methods](https://api.jquery.com/category/ajax/shorthand-methods/) which wrap it and make things easier:

* `$.get()` a shorthand for `$.ajax()` and allows arguments (vs object parameter).
* `$.post()`
* `$.getJSON()` wraps `$.ajax()` and does JSON conversion for you
* `.load()` is used with a selector to place HTML into an element

### Etc

`$('document').html()`

? var $name

Note `.nextUntil()`, which I could not find a good alternative for...

