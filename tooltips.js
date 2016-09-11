/*

This is a very simple tooltip script.

There are three steps to use this. 

1. build your HTML so that the tooltip is the immediate child of the thing you want to hover over.

Examples:

<div>
  I want to have a tooltip when you hover over this div.
  <span class="tooltip">This is my tooltip, yay!</span>
</div>

<p>
  I want to have a tooltip when you hover over the world 
    <span>'costal'
      <span>This is my second tooltip, yay!</span>
    </span> 
  in this sentence.
</p>

2. Create the class you want to use for the tooltip.




add this script to your project and then somewhere in your JS include the line mouseoverTooltips('.classNameHere'); This initates the function and tells it that .classNameHere is the tooltip class.


*/

var mouseoverTooltips = (function() {

  var classes = [],
      ready = false;

  window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false);

    ready = true;

    run();
  },false);

  function run(options) {

    // Current options? None... some in the future? Sure.

    if (options) {
      if (typeof(options) === "string") classes.push(options);

      else {
        console.warn("No support for objects yet.");
        // This is going to have to support removal of objects (not super necessary yet, I think)
        /* This is what I'm imagining:
         * [
         *   { class: "tip", action: "add" },
         *   { class: "tiper", action: "remove" },
         * ]
         */
      }
    }

    // If ready for doing stuff and classes has at least one entry...
    if (ready && classes.length) {
      setListeners();
    }
  }

  // Since looping through classes and doing something for ever element that matches at least one of the classes is something we do a lot, I built a function for it.
  // It sends each element to the callback function specified.
  function forClasses(element, callback, scope) {

    if (element) {
      var elements = element.querySelectorAll(classes.join(", "));
      for (var i = 0; i < elements.length; i++) {
        callback.call(scope, elements[i]);
      }
    } else {
      console.warn("Need a valid input element"); 
    }
  }

  function setListeners() {

    // Set all current...
    forClasses(document, function (element) {
      element.style.position = "fixed";
      element.style.display = "none";

      var parent = element.parentElement;

      if (parent) {
        parent.addEventListener("mouseover", open, false);
        parent.addEventListener("mouseout", close, false);
      }
    });
  }

  // Currently not used
  function clearListeners() {

    // Clear old ones...
    forClasses(document, function (element) {
      element.style.position = "initial";

      var parent = elements[i].parentElement;

      if (parent) {
        parent.removeEventListener("mouseover", open, false);
        parent.removeEventListener("mouseout", close, false);
      }
    });
  }

  // Display the tooltip
  function open(event) {
    forClasses(event.target, function (element) {
      element.style.display = "block";
    });

    document.addEventListener("mousemove", move, false);
    document.addEventListener("scroll", move, false);
  }

  // Hide the tooltip
  function close(event) {
    document.removeEventListener("mousemove", move, false);
    document.removeEventListener("scroll", move, false);

    forClasses(event.target, function (element) {
      element.style.display = "none";
    });
  }

  // Move the tooltip (with the mouse)
  function move(event) {

    var target = event.target,
        offsetX = 10,
        offsetY = 10;

    forClasses(event.target, function (element) {
      element.style.left = event.clientX + offsetX + "px";
      element.style.top = event.clientY + offsetY + "px";
    }); 
  }

  return run;
}());