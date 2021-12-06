//Navigation
var navs =	'<a href="index.html" id="Top">Home</a>' +
			'<a href="gallery.html">Gallery</a>' +
			'<a href="about.html">About</a>' +
			'<a href="voice.html">Voice</a>' +
			'<a href="other.html">Crumbs</a>' +
			'<a href="guide.html">Art Guide</a>' +
			'<a href="graftling.html">Graftling</a>' +
			'<a href="https://discord.gg/xQC5MxVWyK" target="_blank">Discord</a>';

function navigation() {  
    document.getElementById('navs').innerHTML = navs
}

//Skeleton Counter
var iNewbies = 3019221 + ((Math.floor(new Date().getTime() / 100000000)) - 16374);
var sNewbies = iNewbies.toLocaleString("en-US");
function skeletons() {
	document.getElementById('Skeletons').innerHTML = "" + sNewbies
}

//Ilyana Keepsake
var keepsakes = ["Received hard-earned praise.", "Served as personal urinal.", "Given a heartfelt kiss.", "Provided battlefield magic support.", "Laundry cleaning and folding service.", "Skeletons used for utility.", "Skeletons used for physical barrier.", "Enjoyed a bit of everyday conversation.", "Prepared a home-cooked meal.", "Offered valued advice.", "Used for sexual stimulation.", "Prepared a tray of coffee and cookies.", "Helped in intel acquisition.", "Allowed to fly as backpack.", "Seen.", "Took a blow meant for her darling.", "Combed Ilyana's hair.", "Brushed Ilyana's teeth.", "Changed Ilyana into nightgown.", "Tidied Ilyana's bedding.", "Tasked with washing nooks and crannies.", "Valkrana's arcane knowledge proved useful.", "Relaxing time in Ilyana's lap.", "Performed Ilyana's full introduction.", "Acknowledged.", "Allowed to sniff Ilyana's neck.", "Awkwardness understood and tolerated.", "Watched her darling sleep.", "Provided emotional support.", "Publicly defended by Ilyana.", "In-depth discussion in big comfy chair.", "Embarked upon parfait date.", "Washed dishes.", "Refilled ice-cold glass of Skelly-Cola.", "Spoken to.", "Shared a quiet moment.", "Completed a quest together.", "Spread the great name of Ilyana Miraquinal.", "Witnessed Ilyana's magnificent heroism."];
function keepsake() {  
	var keepsakeRoll = Math.floor(Math.random() * keepsakes.length);
    document.getElementById('Keepsake').innerHTML = "" + keepsakes[keepsakeRoll]
}

//Footer
var foot =	'<a href="#Top"><p>Return to Top</a><br><br>' +
			'<img src="css/skull.png"><img src="css/skull.png" style="padding: 0 5px 0 5px"><img src="css/skull.png"><br>' +
			'<p style="margin-top: -10px">Valkrana by <a href="http://www.twitter.com/ActualSailorCat" target="_blank">SailorCat</a>';

function footer() {  
    document.getElementById('footer').innerHTML = foot
}