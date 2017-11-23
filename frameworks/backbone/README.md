# Backbone

http://backbonejs.org/

Only hard dependency is Underscore.js, with soft dependency on JQuery.

## Backbone Concepts

You create your own objects by extending Backbone compomenets, which always returns a *constructor function*.

Many properties can be either a hash (like a value) or a function, and most anything can be overridden.

### Models (`Backbone.Model`)

#### Constructing Models

A model is created by extending `Backbone.Model`

    var MyModel = Backbone.Model.extend({
    });

Then create an instance

    var model = new MyModel();

A model's `attributes` property is the internal hash containing the model's state. Attributes should be read and written to using `get()` and `set()`.

The initial value of attributes can be passed in when  creating a model instance

    var model = new MyModel({id: null});

A model's `defaults` hash or function can be used to specify the default attributes of a model. Attributes that are not specified when creating an instance will be given these values

    var MyModel = Backbone.Model.extend({
      defaults: {
        id: null,
        name: null
      }
    });

`initialize()`

#### REST Services

Models sync with REST services.

Calling `fetch()` will merge `attributes` with the result of the call to `url()`. A model's `url` is constructed using `id` as `[collection.url]/[id]`.

If the model is not part of a Collection then you should specify a `urlRoot` for the model in which case the generated url will be `[urlRoot]/id`.

If you wish the url to be constructed with an attribute besidess `id` then it should be specified in `idAttribute` (note that this must be a first level attribute, not part of an attibute object, which should be discouraged anyway).



url()
urlRoot() overrides the collection url!


parse()

### Collections (`Backbone.Collection`)

The models within a colletion

When you `fetch()` a collection I think the `options` get passed to the models.

### Views (`Backbone.View`)

Backbone views are attached to a *container* element `el`. It can be set directly to an existing DOM element or created based on `tagName`, etc. (which still leaves the issue of getting it into the DOM...).

Attach models or collections using constructor options, and these data sources can be referenced as `model` and `collection`.

    initialize: function() {
      this.listenTo(this.collection, 'change sync', this.render);
    }

    initialize: function() {
      this.listenTo(this.collection, 'add remove reset sync', this.render);
    }

also: all, etc.

If you don't specify an `el` then a `div` (or based on `id`, `className`, `tagName`) will be created for you (in the `_ensureElement` method). You must then manually insert the element into the DOM (e.g. using `$.append()`)

### Events (`Backbone.Events`)

Event | Comments
---|---
add |
remove |
update |
reset |
sort |
change |
change:[attribute] |
destroy |
request |
sync |
error |
 * | *
invalid |
route:[name] |
route |
all |

Ref: [Catalog of Built-In Events](http://backbonejs.org/#Events-catalog)

## Hints and Warnings

Be careful using objects as attributes since with JS they are passesd by reference!

Assigning to `this.id` in `Model.initialize()` did not seem to work, and was not reflected in url().

Any Backbone compoment can define an `initialize` method.

## Questions

review if you can call Collections.each() without the normal underscore list parameter as it's implied to be the calling object?
it's generally confusing and not well documented how the underscore methods are added to backbone classes.

## Links

* [Pragmatic Backbone](http://pragmatic-backbone.com/views)
* [A complete guide for learning backbone js](http://codebeerstartups.com/2012/12/a-complete-guide-for-learning-backbone-js/)
* [Marionette: Explained](https://benmccormick.org/marionette-explained/) a nice series of blog postes


http://kleopetrov.me/2015/12/07/Backbone-Models/
http://kleopetrov.me/2015/12/08/Backbone-Views/
http://kleopetrov.me/2015/12/10/Backbone-collections/
