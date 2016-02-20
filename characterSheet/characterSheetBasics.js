// In the future these will not be hardcoded
var abilityScores = [18, 14, 14, 8, 12, 8];
var skills = [];
var abilityMods = [];

var scoreMath = function (abilityScores) {
	return ((abilityScores - 10) / 2 - 0.5).toFixed(0);
}

for (var i = 0; i < abilityScores.length; i++) {
	 abilityMods[i] = scoreMath(abilityScores[i]);
};

console.log(abilityMods);