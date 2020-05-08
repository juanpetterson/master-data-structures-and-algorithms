// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

function containsCommonItem(array1, array2) {
  let found = array1.some((item) => {
    return array2.some((item2) => {
      if (item === item2) {
        return true;
      }

      return false;
    });
  });

  return found;
}

// O(a*b) Time Complexity
// O(1) Space Complexity

console.log('containsCommonItem: ' + containsCommonItem(array1, array2));

// array1 ==> obj {
//   a: true,
//   b: true,
//   c: true,
//   x: true,
// };

// array2[index] === obj.properties

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create objct where properties equal to the items in the array
  let map = {};
  arr1.forEach((item, index) => {
    if (!map[index]) {
      map[item] = true;
    }
  });

  // loop through second array and check if item in second array exists on create obejct
  let found = arr2.some((item2) => {
    if (map[item2]) {
      return true;
    }
    return false;
  });

  return found;
}

// O(a+b) Time Complexity
// O(a) Space Complexity

console.log('containsCommonItem2: ' + containsCommonItem2(array1, array2));

function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

console.log('containsCommonItem3: ' + containsCommonItem3(array1, array2));
