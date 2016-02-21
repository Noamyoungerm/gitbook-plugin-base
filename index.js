module.exports = {
  website: {
    html: {
      "head:start": function() {
        console.log(this.book.config.pluginsConfig.base);
        var util = require('util');
        var str = util.format(this.book.config.pluginsConfig.base);
        return '<base href="' + (this.book.config.pluginsConfig.base.base || '/') + '">' + str;
      }
    }
  }
};
