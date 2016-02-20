// Characters base attributes, in the future these will not be hardcoded
var str = 18;
var dex = 14;
var con = 14;
var int = 8;
var wis = 10;
var cha = 8;

// This is the math for how ability modifiers are generated from ability scores in D&D systems 
var abilityMod = function (abilityScore) {
	return ((abilityScore - 10) / 2 - 0.5).toFixed(0);
}

// These values are used for most important stats such as skills, spells, attacks, etc.
var strMod = abilityMod(str);
var dexMod = abilityMod(dex);
var conMod = abilityMod(con);
var intMod = abilityMod(int);
var wisMod = abilityMod(wis);
var chaMod = abilityMod(cha);

// This is just a test to make sure that my math worked
console.log(strMod, dexMod, conMod, intMod, wisMod, chaMod);