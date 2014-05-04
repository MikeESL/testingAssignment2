if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {

    		// return fn.
    		//research fn.apply
    		return fn.apply(fn, arr);

    },

    speak : function(fn, obj) {

    	return fn.apply(obj);
    	//look up fn.call
    	//difference app aplies arg as an array. call . . .
    },

    useArguments : function() {

        var ran = 0;
        for (i = 0; i<arguments.length; i++){
            ran += arguments[i];
        };
            return ran;
    	


    }
  };
});
