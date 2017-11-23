# D3.js

* [D3.js](https://d3js.org/) and [D3 Wiki](https://github.com/d3/d3/wiki)
* [Mike Bostock](https://bost.ocks.org/mike/)
* [bl.ocks](https://bl.ocks.org/) and [Bl.ock Builder](http://blockbuilder.org/)

## D3 Versions

Version 4 brings many changes!

* [D3 4.0 API Reference](https://github.com/d3/d3/blob/master/API.md) 
* [Changes in D3 4.0](https://github.com/d3/d3/blob/master/CHANGES.md)
* [D3 3.x API Reference](https://github.com/d3/d3-3.x-api-reference/blob/master/API-Reference.md)

namespace flattening?

Note that v4 of D3.js brought significant changes over v3.

In [What Makes Software Good?](https://medium.com/@mbostock/what-makes-software-good-943557f8a488) Mike Bostock covers the design principles behind D3 and some of the details behind what's changed.


## D3 Basics



## D3 Concepts

D3 operates on arbitrary sets of nodes called *selections*.

`.selectAll`

`.data()`

> Once the data has been bound to the document, you can omit the data operator; D3 will retrieve the previously-bound data. This allows you to recompute properties without rebinding.

Is data bound to selection or to the node itself?

enter()
when there are fewer nodes than data

check but it seems that .enter() does not use previously bound data? i.e. can't just reuse selection, need to specify data at that time?


#### Selection


The *enter selection*

append()

The *exit selection*
`exit()`

join()


The D3 *general update pattern* involves a *data join* followed by operations on the resulting *enter*, *update*, and *exit* selections. A data-join joins a data array with selected elements (`selection.data(data)`). 

See [bl.ock/3808218](https://bl.ocks.org/mbostock/3808218 "General Update Pattern, I") (but may from version 3).

See [Joining Date](https://github.com/d3/d3-selection/blob/master/README.md#joining-data) for the v4 general update pattern...

    var circle = svg.selectAll("circle").data(data)
        .style(...);
        
    circle.exit().remove();
    
    circle = circle.enter().append("circle")
        .style(...)
      .merge(circle)
        .style(...);

(Review a select, data, enter, append pattern?)

## D3 Components

### d3-selection

Selection are a core concept in d3. The [d3-selection README](https://github.com/d3/d3-selection/blob/master/README.md) is great documentation, and the [Selections](https://github.com/d3/d3/blob/master/API.md#selections-d3-selection) part of the API Reference is concise index into it.

Selection methods are often chained since they typically return the current selection or a new selection.

The [Selections](https://github.com/d3/d3/wiki/Selections) page on the Wiki covers changes from version 3 to 4. Notable changes include that in version 4 

* selections (their elements and parents) are now immutable. Consequently the `sort()` and `data()` methods now return new selections whereas they used to modify in place
* `append()` no longer merges entering nodes into update selection (same with insert?), so a new method `merge()` was added to do that
* previously you needed to call `data()` before `enter()` or `exit()` (or else they were undefined), but now they simply return the empty selection if called before joining selection to data
* TODO review the part about append behavior with entering nodes and insert hack previosly needed to preserve order
* there is now only one class of selection, while in v3 enter selections were a special class with different append and select behaviour





s3.selectAll()

selection.select() review inheritance




selection.update()







selection.filter()

selection.merge() - new in v4, esp used to merge enter and update selections after a data-join since 

selection.datum()

selection.classed()
selection.text()
selection.attr()
selection.style()
selection.property()
selection.html()

#### selection methods

grouping!? and nested selections?


#### enter or update related methods

selection.enter()

  selection.append() - note change in behavior with v4 which makes insert hack on entering nodes unnecessary
  
  selection.insert()

#### exit related methods

selection.exit()

  selection.remove()


## Nuts and Bolts

SVG

Canvas


## Resources

* [Interactive Data Visualization for the Web](http://chimera.labs.oreilly.com/books/1230000000345) book free online, and associated [tutorials](http://alignedleft.com/tutorials/d3/) and [talks](http://alignedleft.com/talks) (including Processing and p5)
* [viSFest](http://visfest.com/) is a great resource, see also [YouTube Channel](https://www.youtube.com/user/viSFestWest/).

* [Ian Johnson](https://enjalot.github.io/) has a lot of great D3 resources, including [talks](https://enjalot.github.io/talks/) and [workshops](https://enjalot.github.io/intro-d3/). Also interesting projects like [Bl.ock Buider](http://blockbuilder.org/) for online prototyping (and predecessor [Tributary](http://tributary.io/), and a nice Medium post [How do you learn d3.js?](https://medium.com/@enjalot/how-do-you-learn-d3-js-ccffc151419b)

* [Intro to D3.js](https://square.github.io/intro-to-d3/) is a concise introduction
* [Dashing D3.js](https://www.dashingd3js.com/) has good [Tutorial](https://www.dashingd3js.com/table-of-contents) and some other free content but mostly paid

### Tutorials

* [Visualizing Data with D3.js](https://uwdata.github.io/d3-tutorials/)
* [Mapping with D3.js](https://maptimesea.github.io/2017/04/04/d3-mapping-II.html) from [Maptime Seattle](https://maptimesea.github.io/)

### Books

* [D3 Tips and Tricks](https://leanpub.com/D3-Tips-and-Tricks/read) free online!
* [Interactive Data Visualization for the Web](http://chimera.labs.oreilly.com/books/1230000000345) by Scott Murray, 1st edition online free

### More Links

* [25+ Resources to Learn D3.js from Scratch](https://blog.modeanalytics.com/learn-d3/)

### Examples

* [bl.ocks](https://bl.ocks.org/) by [Mike Bostock](https://bost.ocks.org/mike/), and the associated [Bl.ock Builder](http://blockbuilder.org/)
* [Three Little Circles](https://bost.ocks.org/mike/circles/) is a very simple introduction to basics
* [D3 Lessons @egghead](https://egghead.io/technologies/d3)

### Inspiration

* [Jason Davies](https://www.jasondavies.com/)

### Etc

* [The Hitchhiker’s Guide to d3.js](https://medium.com/@enjalot/the-hitchhikers-guide-to-d3-js-a8552174733a)

### Courses

* [Data Visualization and D3.js](https://www.udacity.com/course/data-visualization-and-d3js--ud507) on Udacity

## D3 Plugins

* [Cubism.js](https://square.github.io/cubism/) for time series visualization

## See Also

* [dc.js](https://dc-js.github.io/dc.js/) uses for d3 for multidimensional charting
