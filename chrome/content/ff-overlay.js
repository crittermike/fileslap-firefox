fileslap.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu").addEventListener("popupshowing", function (e){ fileslap.showFirefoxContextMenu(e); }, false);
};

fileslap.showFirefoxContextMenu = function(event) {
	// Only show the menu items if you're currently on a link or image with a filepath 
	// containing a valid filename and extension. Otherwise hide them.

	document.getElementById("context-fileslap-image").hidden = true;
	document.getElementById("context-fileslap-link").hidden = true;
 	
 	if (gContextMenu.onImage) {
 		var url = gContextMenu.target.src;
  	document.getElementById("context-fileslap-image").hidden = !isValidFilename(url);
 	} 

 	if (gContextMenu.onLink) {
 		var url = gContextMenu.linkURL;
  	document.getElementById("context-fileslap-link").hidden = !isValidFilename(url);
  }

 	// Check to see if the URL contains a filename with a valid extension.
 	function isValidFilename(fullurl) {
 		var filename = fullurl.replace(/^.*\//, '');
 		return filename.indexOf('.') != -1;
 	}
};

window.addEventListener("load", function () { fileslap.onFirefoxLoad(); }, false);
