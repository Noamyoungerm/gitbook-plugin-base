var DEFAULT = {base: '/'};
var base = (this.book.options.pluginsConfig.mathjax || DEFAULT).base;

module.exports = {
  website: {
    html: {
        "head:start": '<base href="' + base + '">',
    }
  }
};
