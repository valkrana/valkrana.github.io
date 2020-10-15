    var reasons = ["Targeted by a monster slayer, you were forced to flee your home.", "You seek justice for your creator, who showed you compassion but was slain by adventurers.", "Haunted by the memories of your past life, you wish to reconcile or reunite.", "You've no intention of squandering your second chance at life on the fringes of civilization.", "You figure you'll try your hand at archaeology.", "You have slain your creator, and are pursued by their enclave.", "Your apprenticeship ended without consequence, and you were permitted to leave your master.", "You're awful at direction, and keep stumbling into civilization.", "You were dispatched by your master to complete an errand or quest.", "You will assimilate all other graftlings. There can be only one."];

function reason() {  
    var d1000 = Math.floor(Math.random() * reasons.length);
    document.getElementById('rollreason').innerHTML = "<p class=\"evenr\"><b>" + reasons[d1000] + "</b>";
}