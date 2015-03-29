if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      console.log('d', data);
      var output = [];
      var f = data.files || [];
      var bl;

      if (!dirName) {
        dirName = data.dir;
        bl = true;
      }

      function each(files, dirN, bool) {
        for (var i = 0; i < files.length; i++) {
          if (typeof files[i] === 'object') {
            //this caches the directory object
            var newDir = files[i];
            var newDirName = newDir.dir;
            console.log('hi1', newDirName, dirN);
            if (newDirName === dirN || bool) {
              console.log(bool);
              each(newDir.files, newDirName, true);
            } else {
              each(newDir.files, newDirName, false);
            }
          } else if (bool && (typeof files[i] !== 'object') ) {
            output.push(files[i]);
          }
        }
        return output;
      }
      var result = each(f, dirName, bl);
      return result;

    },

    permute: function(arr) {
      var result = 1;
      for (var i = 0; i < arr.length; i++) {
        result *= arr[i];
        console.log('r', result);
      }
      console.log('r2', result);
      return result;
    }

  };
});
