function prioritize(array, callback) {
  let arr = [];
  let arr2 = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      arr.push(array[i]);
    } else {
      arr2.push(array[i]);
    }
  }
  return arr.concat(arr2);
}

// /*** Uncomment these to check your work! ***/
const startsWithS = function (str) {
  return str[0] === "s" || str[0] === "S";
};
console.log(
  prioritize(
    ["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
    startsWithS
  )
);

function countBy(array, callback) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    let kljuc = callback(array[i]);
    if (obj[kljuc]) {
      obj[kljuc] += 1;
    } else {
      obj[kljuc] = 1;
    }
  }
  return obj;
}
// /*** Uncomment these to check your work! ***/
console.log(
  countBy([1, 2, 3, 4, 5], function (num) {
    if (num % 2 === 0) return "even";
    else return "odd";
  })
); // should log: { odd: 3, even: 2 }

// Challenge 15
function groupBy(array, callback) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    let kljuc = callback(array[i]);
    if (obj[kljuc]) {
      obj[kljuc].push(array[i]);
    } else {
      obj[kljuc] = [array[i]];
    }
  }
  return obj;
}

// /*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
console.log(groupBy(decimals, floored));

function goodKeys(obj, callback) {
  let prazanNiz = [];
  for (let el in obj) {
    if (callback(obj[el])) {
      prazanNiz.push(el);
    }
  }
  return prazanNiz;
}

// /*** Uncomment these to check your work! ***/
const sunny = {
  mac: "priest",
  dennis: "calculating",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
const startsWithBird = function (str) {
  return str.slice(0, 4).toLowerCase() === "bird";
};
console.log(goodKeys(sunny, startsWithBird));

// Challenge 17
function commutative(func1, func2, value) {
  let rezultat = func1(value);
  let drugiRez = func2(rezultat);

  let treciRezultat = func2(value);
  let cetvrtiRezultat = func1(treciRezultat);

  return drugiRez === cetvrtiRezultat;
}

// /*** Uncomment these to check your work! ***/
const multBy3 = (n) => n * 3;
const divBy4 = (n) => n / 4;
const subtract5 = (n) => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // should log: true
console.log(commutative(multBy3, subtract5, 10)); // should log: false
console.log(commutative(divBy4, subtract5, 48)); // should log: false
