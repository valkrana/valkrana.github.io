    var quirks = ["Your reanimation was so traumatizing you've developed an irrational fear of bones", "You think skeletons are cute because of the way they are.", "You prefer to hide during a fight.", "You painstakingly log the bones you have encountered.", "You've developed a nightly ritual of snorting bone meal.", "Your body is a collection that you embellish with only the rarest bones.", "You're incredibly awkward.", "You have obsessive tendencies.","You have a habit of sidling up to others to get a whiff of their skeleton.", "You treat your bundle as a refuge. Even those close to you haven't seen your face."];

function quirk() {  
    var d1000 = Math.floor(Math.random() * quirks.length);
    document.getElementById('rollquirk').innerHTML = "<p class=\"evenr\"><b>" + quirks[d1000] + "</b>";
}

    var trinkets = ["An innocuous mortar and pestle engraved with the initials of your creator.", "A trinket from your past life (see any other trinket table).", "A mysterious bone that defies all attempts at identification.", "A tiny, wooden, unfortunate cat figure.", "A vial of bubbling rainbow-colored neutralizer.", "A pair of rusty manacles.", "A cuneiform-incised pebble that once belonged to a lost child.", "A jar containing a misshapen mass preserved in formaldehyde.", "A set of scrimshaw dice that sometimes emit whale song.", "A grimy skull extracted from the necromancer who reanimated you.", "A twisted blackwood broom with bristles that never dirty.", "A dragon-shaped pin that can be tracked by someone, somewhere.", "A beckoning throw pillow embroidered with the shifting image of a paddling duck.", "A brackish collar that makes its wearer feel wanted.", "A tattooed arm of a grung that was boiled alive.", "A smelt skeleton that flutters in stagnant water.", "A runed notebook with scrawled notes on undead.", "A hefty roll of ghoul flesh secured with twine.", "A pouch of multi-colored, skeleton-shaped gelatin sweets.", "A signet ring bearing a serpent-entwined rod of inlaid glass."];

function trinket() {  
    var d1000 = Math.floor(Math.random() * trinkets.length);
    document.getElementById('rolltrinket').innerHTML = "<p class=\"evenr\"><b>" + trinkets[d1000] + "</b>";
}

    var reasons = ["Targeted by a monster slayer, you were forced to flee your home.", "You seek justice for your creator, who showed you compassion but was slain by adventurers.", "Haunted by the memories of your past life, you wish to reconcile or reunite.", "You've no intention of squandering your second chance at life on the fringes of civilization.", "You figure you'll try your hand at archaeology.", "You have slain your creator, and are pursued by their enclave.", "Your apprenticeship ended without consequence, and you were permitted to leave your master.", "You're awful at direction, and keep stumbling into civilization.", "You were dispatched by your master to complete an errand or quest.", "You will assimilate all other graftlings. There can be only one."];

function reason() {  
    var d1000 = Math.floor(Math.random() * reasons.length);
    document.getElementById('rollreason').innerHTML = "<p class=\"evenr\"><b>" + reasons[d1000] + "</b>";
}