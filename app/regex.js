if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return (/\d/).test(str);
    },

    containsRepeatingLetter : function(str) {
        
        return (/\w+$/).test(str);
    },

    endsWithVowel : function(str) {
        return (/[aeiou]$/gi).test(str);
    },

    captureThreeNumbers : function(str) {
        return str.match(/\d{3}/) ? str.match(/\d{1,3}/)[0] : false;
    },

    matchesPattern : function(str) {
        return (/\b\d{3}[-]\d{3}[-]\d{4}\b/).test(str);
    },
    isUSD : function(str) {
        return (/^\$(\d{1,3})((\,\d{3})|(\.\d{2}$))|((\,\d{3})|(\.\d{2}$))/).test(str);
    }
  };
});
