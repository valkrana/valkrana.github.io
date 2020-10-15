    var quirks = ["Your reanimation was so traumatizing you've developed an irrational fear of bones", "You think skeletons are cute because of the way they are.", "You prefer to hide during a fight.", "You painstakingly log the bones you have encountered.", "You've developed a nightly ritual of snorting bone meal.", "Your body is a collection that you embellish with only the rarest bones.", "You're incredibly awkward.", "You have obsessive tendencies.","You have a habit of sidling up to others to get a whiff of their skeleton.", "You treat your bundle as a refuge. Even those close to you haven't seen your face."];

function quirk() {  
    var d1000 = Math.floor(Math.random() * quirks.length);
    document.getElementById('rollquirk').innerHTML = "<p class=\"evenr\"><b>" + quirks[d1000] + "</b>";
}