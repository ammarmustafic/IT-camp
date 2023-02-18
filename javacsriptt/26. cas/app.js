// Challenge 6
function reduce(array, callback, initialValue) {
  if (typeof initialValue === "undefined") {
    initialValue === array[0];
    array.shift();
  }
  for (let i = 0; i < array.length; i++) {
    initialValue = callback(initialValue, array[i]);
  }
  return initialValue;
}

function proveraElNiza(arr1, arr2) {
  let newArray = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      newArray.push(arr2[i]);
    }
  }
  return newArray;
}

// Challenge 7
function intersection(arrays) {
  return reduce(arrays, proveraElNiza, arrays[0]);
}
console.log(
  intersection([
    [5, 10, 15, 20],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 5, 20],
  ])
);
