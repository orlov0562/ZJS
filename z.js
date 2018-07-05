/**
Project name: ZJS
Project url: https://github.com/orlov0562/ZJS
Project Author: Vitaliy Orlov
**/

class Z {
  constructor(el){
    this.el = ((typeof el != 'undefined') && el) ? el : document.createElement(null);
    return this;
  }

  static create(tagName) {
    return new Z(document.createElement(tagName));
  }

  static findAll(path) {
    var els = document.querySelectorAll(path);
    var ret = [];
    if (els.length) {
      for(var i=0; i<els.length; i++) {
        ret.push(new Z(els[i]))
      }
    }
    return ret;
  }

  static findOne(path) {
    return new Z(document.querySelector(path));
  }

  static find(path) {
    return this.findOne(path);
  }

  attr(name, val){
    if (typeof val == 'undefined') {
      return this.el.getAttribute(name);
    } else {
      this.el.setAttribute(name, val);
      return this;
    }
  }

  append(innerHTML) {
    this.el.innerHTML += innerHTML;
    return this;
  }
  
  prepend(innerHTML) {
      this.el.innerHTML = innerHTML + this.el.innerHTML;
      return this;
  }  

  html(innerHTML) {
    if (typeof innerHTML == 'undefined') {
      return this.el.innerHTML;
    } else {
      this.el.innerHTML = innerHTML;
    }
    return this;
  }

  text(innerText) {
    if (typeof innerText == 'undefined') {
      return this.el.innerText;
    } else {
      this.el.innerHTML = (new Z()).html(innerText).text();
    }
    return this;
  }

  on(eventsEnum, func, useCapture){
    var events = eventsEnum.split(' ');
    for (var i=0; i<events.length; i++) {
      if(events[i].trim().length){
        this.el.addEventListener(events[i].trim(), func, useCapture);
      }
    }
    return this;
  }

  addClass(className){this.el.classList.add(className);return this;}
  removeClass(className){this.el.classList.remove(className);return this;}
  toggleClass(className){this.el.classList.toggle(className);return this;}
  hasClass(className){return this.el.classList.contains(className);}
  
  static ready(func, timeout) {
      var domReadyFunc = function(){
          document.removeEventListener("DOMContentLoaded", domReadyFunc, false);
          if (typeof timeout != 'undefined') {
              setTimeout(func, timeout);
          } else {
              func();
          }
      };
      document.addEventListener("DOMContentLoaded", domReadyFunc, false);
  }
  
};
