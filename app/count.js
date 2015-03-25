if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count: function(start, end) {
      var counter = 0;

      var interval = setInterval(function() {
        console.log(start + counter);
        counter++;
        if (counter === end) clearInterval(interval);
      }, 100);

      return {
        cancel: function() {
          return clearInterval(interval);
        }
      };
    }
  };
});
