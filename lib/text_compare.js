'use strict';

// based on http://en.wikipedia.org/wiki/Levenshtein_distance
function calculateLevenshteinDistance(text1, text2) {
  // the array of distances
  var initialCost = [];
  var currentCost = [];

  // initial cost of skipping prefix in String text1
  for (var i = 0; i < text1.length + 1; i++) {
    initialCost[i] = i;
  }

  // transformation cost for each letter in text2
  for (var j = 0; j < text2.length; j++) {
    // initial cost of skipping prefix in String text2
    currentCost[0] = j;

    // transformation cost for each letter in text1
    for (var i = 0; i < text1.length; i++) {
      // matching current letters in both strings
      var cost = (text1.charAt(i) === text2.charAt(j)) ? 0 : 1;

      // pick the min transformation cost
      currentCost[i + 1] = Math.min(Math.min(initialCost[i + 1] + 1, currentCost[i] + 1),
        initialCost[i] + cost);
    }

    // swap cost/currentCost arrays
    var tempCost = initialCost;
    initialCost = currentCost;
    currentCost = tempCost;
  }

  // the distance is the cost for transforming all letters in both strings
  return initialCost[text1.length];
}

function percentageMatch(text1, text2) {
  return (1 - (calculateLevenshteinDistance(text1, text2) / (text1.length + text2.length))) * 100;
}

exports.calculateDistance = calculateLevenshteinDistance;
exports.percentageMatch = percentageMatch;
