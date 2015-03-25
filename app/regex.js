if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return (/\d/).test(str);
    },

    containsRepeatingLetter : function(str) {
      var strArray = str.split('');
      for(var i = 0; i < strArray.length; i++) {
        var val = strArray[i];
        if (/[A-Za-z]/.test(val)) {
          var re = new RegExp(strArray[i] + '{2}');
          if( re.test(str) ) return true;
        }
      }
      return false;
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
        return (/^\$(?=\d)\d{1,3}\.(?=\d\d(?!\w))|^\$(?=\d)\d{1,3}(\,(?=\d{3})(\d{3}))+(\.(?=\d\d$(?!\w))|$)/).test(str);
    }
  };
});

