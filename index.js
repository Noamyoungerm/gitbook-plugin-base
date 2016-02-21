module.exports = {
  website: {
    html: {
        "head:start": '<base href="' + this.options.base || '/' + '">',
    }
  }
};
