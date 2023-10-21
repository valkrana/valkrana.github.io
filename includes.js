//Navigation
var navs =	'<a href="index.html" id="Top" style="font-family: \'Caladea\', serif;">Home</a>' +
			'<a href="gallery.html" style="font-family: \'Caladea\', serif;">Gallery</a>' +
			'<a href="about.html" style="font-family: \'Caladea\', serif;">About</a>' +
			'<a href="voice.html" style="font-family: \'Caladea\', serif;">Voice</a>' +
			'<a href="cantrips.html" style="font-family: \'Caladea\', serif;">Cantrips</a>' +
			'<a href="guide.html" style="font-family: \'Caladea\', serif;">Art Guide</a>' +
			'<a href="graftling.html" style="font-family: \'Caladea\', serif;">Graftling</a>' +
			'<a href="spellbook.html" style="font-family: \'Caladea\', serif;">Spellbook</a>' +
			'<a href="https://discord.gg/UYwWj9jNUP" style="font-family: \'Caladea\', serif;" target="_blank">Discord</a>';

function navigation() {  
    document.getElementById('navs').innerHTML = navs
}

//Character art
var arts = ["neutral", "cling", "arcanist", "ohayou"];
function characterart() {
	var artsRoll = Math.floor(Math.random() * arts.length);
	document.getElementById('CharacterArt').setAttribute("src", "img/valkrana_nuyums_" + arts[artsRoll] + ".webp");
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
var foot =	'<a href="#Top"><p style="font-family: \'Caladea\', serif;">Return to Top</a><br><br>' +
			'<img src="css/valksewally_accordion101.gif" title="Animation courtesy @Sewally2 on Twitter."><br>' +
			'<p style="margin-top: -10px; font-family: \'Caladea\', serif;">Valkrana by <a href="http://www.twitter.com/ActualSailorCat" target="_blank">Sailor Cat</a>' +
			'<p style="margin-top: -10px; font-family: \'Caladea\', serif;">Character Portraits by <a href="http://www.twitter.com/nuyums" target="_blank">Nuyums</a>' +
			'<p style="margin-top: -10px; font-family: \'Caladea\', serif;">Footer Animation by <a href="http://www.twitter.com/Sewally2" target="_blank">Sewally</a>';

function footer() {  
    document.getElementById('footer').innerHTML = foot
}