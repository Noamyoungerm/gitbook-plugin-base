module.exports = {
  website: {
    html: {
      "head:start": function() {
        console.log(this.book.context);
        var util = require('util');
        var str = util.format(this.book.config.pluginsConfig);
        return '<base href="' + ('' || '/') + '">' + str;
      }
    }
  }
};
