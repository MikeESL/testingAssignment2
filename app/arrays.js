if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);


      

    },

    sum : function(arr) {
        

        var total = 0;
        for (i=0; i<arr.length; i++){
            total += arr[i];
            };
            return total;
            
       

    },

    remove : function(arr, item) {
        
       
       var newArr = [];
       for (i=0; i < arr.length; i++) {
            if (arr[i] !== item){
            newArr.push(arr[i]);
        };
        
         };  
        return newArr;  

        // think about using _reduce
       

    },

    removeWithoutCopy : function(arr, item) {
        for (i=0; i < arr.length; i++){
            if (arr[i] === item){
                arr.splice(i, 1);
                i = i - 1;
                arr.length = arr.length - 1;
            }
        }
            return arr;
    },

    append : function(arr, item) {

         arr.push(item);
         return arr;


    },

    truncate : function(arr) {

            arr.pop(arr);
            return arr;


    },

    prepend : function(arr, item) {
            arr.unshift(item);
            return arr;

    },

    curtail : function(arr) {

            arr.shift(arr);
            return arr;


    },

    concat : function(arr1, arr2) {

        var newArr =  arr1.concat(arr2);
            return newArr;

    },

    insert : function(arr, item, index) {
        arr.splice (index, 0, item);
        return arr;


    },

    count : function(arr, item) {
        
        var count = [];
        for(i=0; i<arr.length; i++) {
          if(arr[i]===item){
            count.unshift(arr[i]);
      }
      }
          return count.length;
    },



    // duplicates : function(arr) {

    // },

    square : function(arr) {

      var square = [];
        for (i=0; i<arr.length; i++){
          square.push(arr[i] * arr[i]);

        }
           return square; 

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
