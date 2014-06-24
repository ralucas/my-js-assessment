if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
        return fn.apply(obj);
    },

    alterObjects : function(constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
        var output = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                output.push(key + ': ' + obj[key]);
            }
        }
        return output;
    }
  };
});
