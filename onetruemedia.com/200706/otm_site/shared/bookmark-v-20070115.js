// Bookmark
function bookmarkThis(pid) {
   var ua = navigator.userAgent.toLowerCase();
	if (ua.indexOf('msie') != -1 && !this.isOpera && (ua.indexOf('webtv') == -1) && parseFloat(navigator.appVersion) >= 4) {
		if (pid == '163') {
			document.write('<a href="javascript:window.external.AddFavorite(\'http://www.onetruemedia.com/start?pid=163\',\'One True Media\');" onmouseover="window.status=\'Bookmark this Site\'; return true;" onmouseout="window.status=\'\'; return true;">Bookmark Us</a>');
		} else {
			document.write('<a href="javascript:window.external.AddFavorite(\'http://www.onetruemedia.com/start\',\'One True Media\');" onmouseover="window.status=\'Bookmark this Site\'; return true;" onmouseout="window.status=\'\'; return true;">Bookmark Us</a>');
		}
	}
}