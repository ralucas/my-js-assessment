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
      var oldFn;
      var args = Array.prototype.slice.call(arguments, 1);
      if (typeof fn === 'function') oldFn = fn;
      return function() {
        var newArgs = Array.prototype.slice.call(arguments);
        var fnArgs = args.concat(newArgs);
        return oldFn.apply(null, fnArgs);
      };
    },

    useArguments : function() {
      var args = Array.prototype.slice.call(arguments);
      var out = args.reduce(function(a, b) {
        return b + a;
      });
      return out;
    },

    callIt : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      return fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
      var oldFn,
          args = Array.prototype.slice.call(arguments, 1);
      
      if (typeof fn === 'function') oldFn = fn;
      return function() {
        var newArgs = Array.prototype.slice.call(arguments);
        var fnArgs = args.concat(newArgs);
        return oldFn.apply(null, fnArgs);
      };
    },

    curryIt : function(fn) {
      var oldFn;
      var newArgs = [];
        
      if (typeof fn === 'function') oldFn = fn;

      return function curried(c) {
        var args = Array.prototype.slice.call(arguments);
        newArgs.push(args[0]);
            
        if (newArgs.length > 2) {
          return oldFn.apply(null, newArgs);
        } else {
          return curried;
        }
                
      }; 

    }

  };

});
