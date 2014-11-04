---
  tags: jasmine, strings, numbers, booleans, variables, todo
  languages: JavaScript, js
  resources: 2
---

# myQuery
JavaScript libraries are essential for building almost anything on the web, and one of the most common libraries is jQuery.  Most often, you'll see it referenced as a `$`.  It is such a common tool sometimes people have a hard time thinking of the JavaScript language without it.  But at the end of the day it's just a library, like a Ruby gem, and it's important to realize that.

One of the most common uses of jQuery is to select elements in the DOM and do something to or with them.  The Document Object Model (DOM) is a collection of nodes that make up a tree data structure.  The nodes are often html elements. Nodes can have identifiers by their attributes, such as name, class, or id.  Nodes can also be identified by the type of element they are.

jQuery can also change properties of selected nodes, remove them, or add new ones.
We're going to create all this functionality ourselves before we use the library.

We'll be making these methods on a prototype called Library.  The creation of new selections with myQuery will be wrapped in the funciton expression myQuery.  Use this code in for `myQuery.js`

```javascript
function Library(elString){
  var selectedEl = this.getElement(elString);
  this[0] = selectedEl;
  return this;
}

/* where your class methods go... */

var myQuery = function(elString) {
  return new Library(elString);
}

// how to use this code
var myQuerySelectedElements = myQuery('div');
myQuerySelectedElements.remove(); // removes selected divs
```

# The Methods We Need to Make for the `Library.prototype`
- `#css` should add in line styling to every selected element based on arguments.
  - The first arg is the property type
  - The second arg is the new property
  - ex. `myQuerySelectedElements.css('color', 'red');`
- `#remove` should remove all selected elements.
  - ex. `myQuerySelectedElements.remove();`
- `#append` should add a new elements after a each selected element.
  - Takes one argument, which is the new element (assume it's correctly formatted).
  ex. `myQuerySelectedElements.append('<span>Hello</span>');`
- `#prepend` should add a new elements before a each selected element.
  - Takes one argument, which is the new element (assume it's correctly formatted).
  ex. `myQuerySelectedElements.append('<span>Hello</span>');`



##Before You Start
```shell
# Install jasmine:
gem sources -a http://flatiron:33west26@gems.flatironschool.com
gem install jasmine-flatiron

# Run Jasmine test suite:
jasmine-flatiron  # runs only in the terminal
jasmine-flatiron -b # runs also in the browser
```

## Resources
* [Jasmine Documentation](http://jasmine.github.io/2.0/introduction.html)
* [String Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
* [Number Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
* [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)