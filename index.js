module.exports = {
  website: {
    html: {
      "head:start": function() {
        var base = this.book.config.options.pluginsConfig.base.base || '/';
        return '<base href="' + (base || '/') + '">';
      }
    }
  }
};
