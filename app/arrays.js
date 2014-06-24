if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0;
        arr.forEach(function(num) {
            sum += num;
        });
        return sum;
    },

    remove : function(arr, item) {
        var output = [];
        arr.forEach(function(el) {
            if (el !== item) {
                output.push(el);
            }
        });
        return output;
    },

    removeWithoutCopy : function(arr, item) {
        var i = 0,
            j = 0,
            len = arr.length;
        for (i; i < len; i += 1) {
            if (arr[i] !== item) {
                arr[j] = arr[i];
                j += 1;
            }
        }
        arr.length = j;
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        arr.forEach(function(el) {
            if (el === item) {
                count += 1;
            }
        });
        return count;
    },

    duplicates : function(arr) {
        var output = [];
        arr.forEach(function(el, idx) {
            var test = el;
            arr.forEach(function(e, i) {
                if ( (test === e) && (idx !== i) && (output.indexOf(test) === -1) ) {
                    output.push(e);
                } 
            });
        });
        return output;
    },

    square : function(arr) {
        var output = [];
        arr.forEach(function(el) {
            var sq = el*el;
            output.push(sq);
        });
        return output;
    },

    findAllOccurrences : function(arr, target) {
        var output = [];
        arr.forEach(function(el, idx) {
            if (target === el) {
                output.push(idx);
            }
        });
        return output;
    }
  };
});
