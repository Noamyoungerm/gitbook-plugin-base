module.exports = {
  website: {
    html: {
      "head:start": function() {
        console.log(this.book.config);
        var util = require('util');
        var str = util.format(this.book.config);
        return '<base href="' + (this.book.config.options.base || '/') + '">' + str;
      }
    }
  }
};
