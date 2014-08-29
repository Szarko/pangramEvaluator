// Pangram Evaluator - Includes two distinct functions to determine whether a string is a pangram

// Tail recursive Pangram Evaluation
exports.recursiveProcess = function(sentence, letterCode, missingLetters) {
  var firstLetterCode = 97; // charCode for letter 'a'
  var lastLetterCode = 123; // charCode for letter 'z'
  sentence = sentence.toLowerCase();
  letterCode = letterCode || firstLetterCode;
  var currentLetter = String.fromCharCode(letterCode);
  missingLetters = missingLetters || [];

  if (letterCode === lastLetterCode) return missingLetters.join('') || null;
  if (!sentence.match(currentLetter)) missingLetters.push(currentLetter);

  return this.recursiveProcess(sentence, letterCode + 1, missingLetters);
};

// Looping Pangram Evaluation
exports.loopProcess = function (sentence) {
  sentence = sentence.toLowerCase();
  var missingLetters = [];
  var firstLetterCode = 97; 
  var lastLetterCode = 122;

  for (var i = firstLetterCode; i < lastLetterCode + 1; i++) {
    var currentLetter = String.fromCharCode(i);
    if (!sentence.match(currentLetter)) missingLetters.push(currentLetter);
  };

  return (missingLetters.length > 0) ? missingLetters.join('') : null;
};