# p5.js








Processing                       | p5.js Equivalent
---------------------------------|-----------------
size()                           | createCanvas()
mousePressed                     | mouseIsPressed
push/popMatrix()+push/popStyle() | push()/pop()





[createImage()](https://p5js.org/examples/image-create-image.html)

Check but loadPixels is different in p5!? Each channel is its own index?


#### Modes



1. global mode (default)
2. instance mode
3. on-demand global mode

##### Global Mode

Normally p5.js functions are the global namespace bound to window object).



#### Sizing

The p5 drawing canvas (canvas element) is created and sized with `createCanvas()`. The size of the drawing canvas is stored in system variables `width`/`height` (`canvas.width()/canvas.height()`, p5.dom defines `canvas.size()`).

The dimensions of the entire display are stored in system variables `displayWidth/displayHeight` (return `screen.width/screen.height`). Set size of sketch canvas to display size (especially useful for mobile):

    createCanvas(displayWidth, displayHeight);


The window size is stored in system variables `windowWidth/windowHeight` (from `window.innerWidth/window.innerHeight`). Windows can be made resizable with the `windowResized()` function and `resizeCanvas()`:


    createCanvas(windowWidth, windowHeight);

    function setup() {
      createCanvas(windowWidth, windowHeight);
    }
    
    function draw() {
      background(0, 100, 200);
    }
    
    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }

It's also possible to use [`fullscreen()`](http://p5js.org/reference/#p5/fullscreen)


#### Positioning

Creating the canvas (createCanvas, or any p5 create method) adds the element to the end of the body. Specify a container location with `.parent()` method:

    function setup() {
      var myCanvas = createCanvas(600, 400);
      myCanvas.parent('myContainer');
    }

You can also apply `absolute` positioning:

    function setup() {
      var myCanvas = createCanvas(600, 400);
      myCanvas.position(100, 100);
    }

## Interaction

System Variable | Description
----------------|------------
`mouseX/Y`      | mouse (or touch) position relative to canvas
`winMouseX/Y`   | mouse position relative to window


## p5 Classes

[p5.Element](http://p5js.org/reference/#/p5.Element)


### p5 Libraries

Several *core libraries* are included in p5.js, namely p5.dom and p5.sound.

### p5.dom library

The [p5.dom](http://p5js.org/reference/#/libraries/p5.dom) library expands p5 beyond the canvas. Among other things it expands p5.Element and adds p5.MediaElement and p5.File classes.

### p5.sound library
