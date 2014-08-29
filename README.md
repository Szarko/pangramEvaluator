# Pangram Evaluator

#### A simple application to determine whether an inputted string contains all the letters of the alphabet.

##### Instructions:
###### Run application with NodeJS.
###### Install 'jasmine-node' NPM to run test suite: npm install jasmine-node -g

```
Usage:
Accepts 2 parameters:
1. Specified process type: Loop "-l" or Recursion "-r"
2. Input string

Example:
node app.js -l "Test this sentence for all letters of the alphabet."
```

Testing:
jasmine-node used to test functionality of both process types.
```
Usage:
jasmine-node --verbose spec/pangramEvaluatorSpec.js
```

