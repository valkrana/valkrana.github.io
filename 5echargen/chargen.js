// Races
var raceArr 	    = ['Aarakocra', 'Aasimar', 'Bugbear', 'Centaur', 'Changeling', 'Dhampir', 'Dragonborn', 'Dwarf', 'Elf', 'Fairy', 'Firbolg', 'Genasi', 'Githyanki', 'Githzerai', 'Gnome', 'Goblin', 'Goliath', 'Graftling', 'Half-Elf', 'Half-Orc', 'Halfling', 'Harengon', 'Hexblood', 'Hobgoblin', 'Human', 'Kalashtar', 'Kenku', 'Kobold', 'Leonin', 'Lizardfolk', 'Loxodon', 'Minotaur', 'Orc', 'Reborn', 'Satyr', 'Shifter', 'Simic Hybrid', 'Tabaxi', 'Tiefling', 'Triton', 'Vedalken', 'Verdan', 'Warforged', 'Yuan-ti Pureblood'];	
// Subraces
var aasimarArr      = ['Fallen', 'Protector', 'Scourge'];
var dragonbornArr   = ['', 'Draconblood', 'Ravenite'];
var dwarfArr        = ['Duergar', 'Hill', 'Mountain'];
var elfArr          = ['Drow', 'Eladrin', 'High', 'Pallid', 'Sea', 'Shadar-kai', 'Wood'];
var genasiArr       = ['Air', 'Earth', 'Fire', 'Water'];
var gnomeArr        = ['Deep', 'Forest', 'Rock'];
var halflingArr     = ['Ghostwise', 'Lightfoot', 'Lotusden', 'Stout'];
var shifterArr      = ['Beasthide', 'Longtooth', 'Swiftstride', 'Wildhunt'];
var tieflingArr     = ['Asmodeus', 'Baalzebul', '', 'Dispater', 'Fierna', 'Glasya', 'Levistus', 'Mammon', 'Mephistopheles', 'Zariel'];

// Classes
var classArr 	    = ['Artificer', 'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
// Subclasses
var artificerArr    = ['Alchemist', 'Armorer', 'Artillerist', 'Battle Smith'];
var barbarianArr    = ['Ancestral Guardian', 'Battlerager', 'Beast', 'Berserker', 'Storm Herald', 'Totem Warrior', 'Wild Magic', 'Zealot'];
var bardArr         = ['Creation', 'Eloquence', 'Glamour', 'Lore', 'Spirits', 'Sword', 'Valor', 'Whispers'];
var clericArr       = ['Arcana', 'Death', 'Forge', 'Grave', 'Knowledge', 'Life', 'Light', 'Nature', 'Order', 'Peace', 'Tempest', 'Trickery', 'Twilight', 'War'];
var druidArr        = ['Dreams', 'Land', 'Moon', 'Shepherd', 'Spores', 'Stars', 'Wildfire'];
var fighterArr      = ['Arcane Archer', 'Battle Master', 'Cavalier', 'Champion', 'Echo Knight', 'Eldritch Knight', 'Psi Warrior', 'Purple Dragon Knight', 'Rune Knight', 'Samurai'];
var monkArr         = ['Astral Self', 'Drunken Master', 'Four Elements', 'Kensei', 'Long Death', 'Mercy', 'Open Hand', 'Shadow', 'Sun Soul'];
var paladinArr      = ['Ancients', 'Conquest', 'Crown', 'Devotion', 'Glory', 'Oathbreaker', 'Redemption', 'Vengeance', 'Watchers'];
var rangerArr       = ['Beast Master', 'Fey Wanderer', 'Gloom Stalker', 'Horizon Walker', 'Hunter', 'Monster Slayer', 'Swarmkeeper'];
var rogueArr        = ['Arcane Trickster', 'Assassin', 'Inquisitive', 'Mastermind', 'Phantom', 'Scout', 'Soulknife', 'Swashbuckler', 'Thief'];
var sorcererArr     = ['Aberrant Mind', 'Clockwork Soul', 'Divine Soul', 'Draconic', 'Shadow', 'Storm', 'Wild'];
var warlockArr      = ['Archfey', 'Celestial', 'Fathomless', 'Fiend', 'Genie', 'Great Old One', 'Hexblade', 'Undead', 'Undying'];
var wizardArr       = ['Abjuration', 'Bladesinging', 'Chronurgy', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Graviturgy', 'Illusion', 'Necromancy', 'Scribes', 'Transmutation', 'War'];

// Backgrounds
var bgArr 		= ['Acolyte', 'Anthropologist', 'Archaeologist', 'Gamer', 'Athlete', 'Arcane Unit Repairman', 'Spy', 'Functionary', 'Legionnaire', 'Celebrity Adventurer\'s Scion', 'Charlatan', 'City Watch', 'Night Watch', 'Underworld Denizen', 'Investigator', 'Clan Crafter', 'Cloistered Scholar', 'Sage', 'Courtier', 'Criminal', 'Operative', 'Entertainer', 'Gladiator', 'Faceless', 'Faction Agent', 'Failed Merchant', 'Far Traveler', 'Fisherman', 'Folk Hero', 'Gambler', 'Grinner', 'Gruul Anarch', 'Guild Artisan', 'Guild Merchant', 'Haunted One', 'Hermit', 'House Agent', 'Inheritor', 'Engineer', 'Knight of the Order', 'Marine', 'Mercenary Veteran', 'Noble', 'Noble Knight', 'Outlander', 'Plaintiff', 'Cultist', 'Pirate', 'Rival Intern', 'Sailor', 'Sage', 'Initiate', 'Shipwright', 'Scientist', 'Smuggler', 'Soldier', 'Layabout', 'NEET', 'Urban Bounty Hunter', 'Urchin', 'Transient'];
var vowels		= ['a', 'i', 'e', 'o', 'u'];
var maxRolls    = 10;
var rollCounter = 0;

function chargen() {  
    // Race
    var aAn			= "a"
    var chosenRace 	= raceArr[Math.floor(Math.random() * raceArr.length)];
    if (window[chosenRace.toLowerCase() + 'Arr']) {
        switch (chosenRace) {
            case chosenRace: chosenRace = window[chosenRace.toLowerCase() + 'Arr'][Math.floor(Math.random() * + window[chosenRace.toLowerCase() + 'Arr'].length)] + " " + chosenRace;
            break;
        }
    }
    // Class
    var chosenClass = classArr[Math.floor(Math.random() * classArr.length)];
    switch (chosenClass) {
        case chosenClass: chosenClass = window[chosenClass.toLowerCase() + 'Arr'][Math.floor(Math.random() * + window[chosenClass.toLowerCase() + 'Arr'].length)] + " " + chosenClass;
        break;
    }
    // Output
    if (vowels.includes(chosenRace.charAt(0).toLowerCase())) { aAn = "an"; }
    var character = "You are " + aAn + " <span style=\"color:#00ccff\">" + chosenRace + "</span> <span style=\"color:#fc49b2\">" + chosenClass + "</span>, and you have the <span style=\"color:#ffff00\">" + bgArr[Math.floor(Math.random() * bgArr.length)] + "</span> background.";
    // Update Element
    if (rollCounter === maxRolls) {
        document.getElementById('roll').innerHTML = "";
        rollCounter = 0;
    }
    rollCounter++;
    document.getElementById('roll').innerHTML = "<h1>" + character + "</h1>" + document.getElementById('roll').innerHTML;
}

