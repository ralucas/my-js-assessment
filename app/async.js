if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
        
    },

    manipulateRemoteData : function(url) {
        console.log($);
        console.log('hello');
        $.get(url, function(data) {
            console.log(data);
        });
    }
  };
});
