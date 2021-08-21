var navs =	'<a href="index.html">Home</a>' +
			'<a href="gallery.html">Gallery</a>' +
			'<a href="about.html">About</a>' +
			'<a href="voice.html">Voice</a>' +
			'<a href="guide.html">Art Guide</a>' +
			'<a href="./graftling/index.html" target="_blank">Graftling</a>' +
			'<a href="other.html">Crumbs</a>';

function navigation() {  
    document.getElementById('navs').innerHTML = navs
}

var foot =	'<img src="css/skull.png"><img src="css/skull.png" style="padding: 0 5px 0 5px"><img src="css/skull.png"><br>' +
			'<p>Character by <a href="http://www.twitter.com/ActualSailorCat" target="_blank">SailorCat</a>';

function footer() {  
    document.getElementById('footer').innerHTML = foot
}