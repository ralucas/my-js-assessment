if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var defer = $.Deferred();
      defer.resolve(value);
      return defer.promise();  
    },

    manipulateRemoteData : function(url) {
      var defer = $.Deferred();
      $.get(url).then(function(data) {
        var people = data.people;
        var output = [];
        for (var i = 0; i < people.length; i++) {
          output.unshift(people[i]['name']);
        }
        var matt = output.pop();
        output.splice(2, 0, matt);
        defer.resolve(output);
      }).fail(function(err) {
        defer.reject(err);
      });

      return defer.promise();
    }
  };
});
