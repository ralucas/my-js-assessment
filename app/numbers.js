if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        return parseInt(num.toString(2).split('').reverse()[bit-1]);
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        return num.toString(2);
    },

    multiply: function(a, b) {
        var result = a * b;
        return Math.round(result*10000)/10000;
    }
  };
});

