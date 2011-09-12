var fileslap = {
  onLoad: function() {
    this.initialized = true;
  },
  imageCommand: function(e) {
    var url = gContextMenu.target.src;
    gBrowser.addTab('http://fileslap.com/upload?link=' + url);
  },
  linkCommand: function(e) {
    var url = gContextMenu.linkURL;
    gBrowser.addTab('http://fileslap.com/upload?link=' + url);
  }
};

window.addEventListener("load", function () { fileslap.onLoad(); }, false);
