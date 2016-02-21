module.exports = {
  website: {
    html: {
      "head:start": function() {
        console.log(this);
        return '<base href="' + (this.options.base || '/') + '">';
      }
    }
  }
};
