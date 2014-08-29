// Application file including two functions to evaluate whether a string is a Pangram.
// Application initiator
var pangramEvaluator = require ('./pangramEvaluator.js');

(function initApp() {
  var minRequiredArgs = 4;

  if ((process.argv.length >= minRequiredArgs) && ((process.argv[2] === "-l") || (process.argv[2] === "-r"))) {
    var inputString = process.argv.slice(3,process.argv.length).join('');
    if (process.argv[2] === "-l") console.log(pangramEvaluator.loopProcess(inputString));
    if (process.argv[2] === "-r") console.log(pangramEvaluator.recursiveProcess(inputString));
  } else {
    console.log("Invalid input! \n Execute app.js followed by your choice of Loop(-l) or Recursion(-r) and your string: \n eg. node app.js -l \"A quick brown fox jumps over the lazy dog\"");
  };
})();



