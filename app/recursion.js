if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
        console.log(data);
        var output = [],
            newData = [],
            _this = this;
        if (data.files && data.files.length > 0) {
            data.files.forEach(function(file) {
                if (typeof file === 'string') {
                    var result = file;
                    output.push(result);
                } else {
                    newData.push(file);
                }
            });
            if (newData.length > 0) {
                newData.forEach(function(d) {
                    return output.push(_this.listFiles(d));
                });
            }
        }
        return output;
    },

    permute: function(arr) {

    }
  };
});
