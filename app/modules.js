if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
        
        var greeting = str1;

        var name = str2;

        var sayIt = function() {
            return this.greeting + ', ' + this.name;
        };

        return {
            sayIt: sayIt,
            name: name,
            greeting: greeting
        };

    }
  };
});

