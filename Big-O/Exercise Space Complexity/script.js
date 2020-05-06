//#5 Space complexity O(1)
function boooo(n) {
  for (let i = 0; i < n; i++) {
    console.log('booooo');
  }
}

boooo([1, 2, 3, 4, 5]); // Space complexity O(1)

// #6 Space complexity O(n)
function arrayOfHinTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}

arrayOfHinTimes(6); // Space complexity O(n)
