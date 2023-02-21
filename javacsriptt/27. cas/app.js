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

function concatTwoArray(array1, array2) {
  let newArray = array1;
  for (let i = 0; i < array2.length; i++) {
    if (!array1.includes(array2[i])) {
      newArray.push(array2[i]);
    }
  }
  return newArray;
}
// Challenge 8
function union(arrays) {
  return reduce(arrays, concatTwoArray, arrays[0]);
}

console.log(
  union([
    [5, 10, 15],
    [15, 88, 1, 5, 7],
    [100, 15, 10, 1, 5],
  ])
);

// Challenge 9
function objOfMatches(array1, array2, callback) {
  const obj = {};
  for (let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) === array2[i]) {
      obj[array1[i]] = array2[i];
    }
  }
  return obj;
}

console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    function (str) {
      return str.toUpperCase();
    }
  )
);

// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  const obj = {};
  let niz = [];
  for (let i = 0; i < arrVals.length; i++) {
    for (let j = 0; j < arrCallbacks.length; j++) {
      niz.push(arrCallbacks[j](arrVals[i]));
    }
    obj[arrVals[i]] = niz;
    niz = [];
  }
  return obj;
}
console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function (str) {
        return str + str;
      },
    ]
  )
);

// Challenge 11
function objectFilter(obj, callback) {
  let newObj = {};
  for (let el in obj) {
    if (obj[el] === callback(obj[el])) {
      newObj[el] = obj[el];
    }
  }
  return newObj;
}

const cities = {
  London: "LONDON",
  LA: "Los Angeles",
  Paris: "PARIS",
};
console.log(objectFilter(cities, (city) => city.toUpperCase()));

// domaci: pogledati objekte :D
