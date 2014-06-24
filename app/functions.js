if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.apply(obj);
    },

    functionFunction : function(str) {
        return function(str1) {
            return str + ', ' + str1;
        };

    },

    makeClosures : function(arr, fn) {
        var output = [];
        var i = 0;
        var result = function(i) {
            return function() {
                var storedArr = arr;
                return fn(storedArr[i]);
            };
        };
        for (i; i < arr.length; i++) {
            output.push(result(i));
        }
        return output;
    },

    partial : function(fn, str1, str2) {
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] !== 'function') {
                args.push(arguments[i]);
            }
        }
        console.log(args);
        return fn.apply(null, args);
    },

    useArguments : function() {

    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
