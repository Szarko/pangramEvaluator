// Pangram Evaluator Test Suite

var pangramEvaluator = require ('../pangramEvaluator.js');

describe("Pangram Evaluator", function() {
  var fullAlphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
  var upperCaseAlphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
  var missingUpperCaseAlphabet = "D E F G H I J K L M N O P Q R S T U V W";
  var missingAlphabet = "c d e f g h i j k l m n o p q r s t u v w";

  describe("Loop Process", function() {
    it("should return null if passed entire alphabet", function() {
      expect(pangramEvaluator.loopProcess(fullAlphabet)).toEqual(null);
    })

    it("should return missing letters in alphabetical order when entire alphabet not matched", function() {
      expect(pangramEvaluator.loopProcess(missingAlphabet)).toEqual("abxyz");
    });

    it("should manage uppercase inputs correctly", function() {
      expect(pangramEvaluator.loopProcess(upperCaseAlphabet)).toEqual(null);
      expect(pangramEvaluator.loopProcess(missingUpperCaseAlphabet)).toEqual("abcxyz");
    });
  });

  describe("Recursive Process", function() {
    it("should return null if passed entire alphabet", function() {
      expect(pangramEvaluator.recursiveProcess(fullAlphabet)).toEqual(null);
    })

    it("should return missing letters in alphabetical order when entire alphabet not matched", function() {
      expect(pangramEvaluator.recursiveProcess(missingAlphabet)).toEqual("abxyz");
    });

    it("should manage uppercase inputs correctly", function() {
      expect(pangramEvaluator.recursiveProcess(upperCaseAlphabet)).toEqual(null);
      expect(pangramEvaluator.recursiveProcess(missingUpperCaseAlphabet)).toEqual("abcxyz");
    });
  });
});