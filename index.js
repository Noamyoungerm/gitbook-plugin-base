module.exports = {
  website: {
    html: {
      "head:start": function() {
        console.log(this);
        var util = require('util');
        var str = util.format(this);
        return '<base href="' + (this.options.base || '/') + '">' + str;
      }
    }
  }
};
