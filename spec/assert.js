var assert = {
  isTrue: function(testname, assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }else{console.log(testname+" test passed")};
  }
};
