if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
 // in cl: window.myObject shouldn't give us Jory. It does, because myObject
 //is global. putting var next to it makes it private. Won't
 //show up with window.

define(function() {
  return {
    globals : function() {
      var myObject = {
        name : 'Jory'
      };

      return myObject;
    },

    functions : function(flag) {
      var getValue;

      if (flag) {
        getValue = function() { return 'a'; }
      } else {
        getValue = function() { return 'b'; }
      }
      // written the original way (function getValue) was
      //hoisting them to top, hence the b

      return getValue();
    },

    parseInt : function(num) {
      return parseInt(num, 10);
      //missing radix ; looked up, study again for better understanding
    },

    identity : function(val1, val2) {
      // strict comparison checks for ===
      return val1 === val2;

    }
  };
});
