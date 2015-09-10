function Library(elString){
  var selectedEl = this.getElement(elString);
  // we use [0] because we want the selected items to be somewhat
  // difficult to access so that users of our library do not use it against our intentions
  // 0 has no special meaning; it is just a property
  // we could have used anything like selectEl or selectedElephant
  this[0] = selectedEl;
}

/* where your prototypical methods go... */

var myQuery = function(elString) {
  return new Library(elString);
}

Library.prototype.getElement = function (element) {
  var isTag = /[a-zA-Z]/.test(element[0]);
  var isClass = /[.]/.test(element[0]);
  var isId = /[#]/.test(element[0]);

  if (isTag){
    return document.getElementsByTagName(element);
  } else if (isClass) {
    e = element.replace('.','');
    return document.getElementsByClassName(e);
  } else if (isId) {
    e = element.replace('#','');
    return document.getElementById(e);
  }
};

Library.prototype.css = function (attr,value) {
  a = this[0];
  for(var i = 0;i<a.length;i++){
    a[i].style[attr] = value;
  }
};

Library.prototype.remove = function (attr,value) {
  a = this[0];
  l = a.length;
  for(var i = 0; i<l; i++){
      a[0].parentNode.removeChild(a[0]);
  }
};

Library.prototype.append = function (html) {
  a = this[0];
  l = a.length;
  for(var i = 0; i<l; i++ ){
    a[i].lastChild.outerHTML = html;
  }
};
