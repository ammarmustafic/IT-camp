// 12.
for (let i = 0; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// 13. bez metoda
function isPalindrom(rec) {
  let Palindrom = true;
  for (let i = 0; i < rec.length / 2; i++) {
    if (rec[i] !== rec[rec.length - 1 - i]) {
      Palindrom = false;
      break;
    }
  }
  if (Palindrom) {
    return console.log("Rec je palindrom");
  } else {
    return console.log("Rec nije palindrom");
  }
}
let drugaRec = "anavolimilovana";
isPalindrom(drugaRec);

// 13.  sa metodama
function isPalindrome(str) {
  let strLower = str.toLowerCase();
  let strReverse = strLower.split("").reverse().join("");
  return console.log(strLower === strReverse);
}

let string = "ab";
isPalindrome(string);

// 14.
let osobe = {
  name: "Ammar",
  age: 16,
};
console.log(Object.values(osobe)); // 1.

osobe.name = "Ammar2"; // 2.
console.log(Object.values(osobe));

delete osobe.age; // 3.
console.log(Object.values(osobe));
