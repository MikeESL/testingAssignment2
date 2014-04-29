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
        // return arr.splice (arr, item);
        // return arr.push (item);
        // return arr.push (item);

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
           // var = aCount
           // arr.sort();
           // for (var i =0; i < arr.length; i++){
           //  if (arr[i] !== item){
           //      aCount.push(item);
           //  }
           // } 
           // return aCount;

    },

    duplicates : function(arr) {

    },

    square : function(arr) {


    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
