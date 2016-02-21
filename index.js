module.exports = {
  website: {
    html: {
      "head:start": function() {
        return '<base href="' + (this.options.base || '/') + '">';
      }
    }
  }
};
