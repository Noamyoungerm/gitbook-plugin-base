module.exports = {
  website: {
    html: {
      "head:start": function() {
        console.log(this.book.config.pluginsConfig, this.book.pluginsConfig);
        var util = require('util');
        var str = util.format(this.book.config.pluginsConfig);
        return '<base href="' + (this.book.config.pluginsConfig.base || '/') + '">' + str;
      }
    }
  }
};
