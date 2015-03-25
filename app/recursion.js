if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      console.log('d', data);
      var output = [];
      if (!dirName) dirName = data.dir;
      function each(files, dir) {
        for (var i = 0; i < files.length; i++) {
          if (typeof files[i] === 'object') {
            if (dir === files[i]['dir']) {
              output = [];
              each(files[i]['files']);
            } else {
              each(files[i]['files']);
            }
          } else {
            output.push(files[i]);
          }
        }
        return output;
      }
      var result = each(data.files, dirName);
      return result;
    },

    permute: function(arr) {

    }
  };
});
