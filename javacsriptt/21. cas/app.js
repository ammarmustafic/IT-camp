// 1. napraviti funkciju grow koja kao argument prihvata niz brojeva
// pomnoziti sve brojeve i vratiti proizvod

function grow(arr) {
  return arr.reduce((prethodna, trenutna) => prethodna * trenutna);
}

niz = [1, 2, 3, 6, 10];
console.log(grow(niz));

// 2.
str = "apple ban";
function addLength(string) {
  return str.split(" ").map((el) => el + " " + el.length);
}
console.log(addLength(str));

// 3.
let zaposleni = true;
let odmor = false;
function setAlarm(x, y) {
  return x && !y;
}
console.log(setAlarm(zaposleni, odmor));

// 4.
function spinSingleWord(nesto) {
  return nesto.length > 4 ? nesto.split(" ").reverse().join(" ") : nesto;
}
let nekaRec = "ti si glup";
console.log(spinSingleWord(nekaRec));

// Block Scope - moze da se pristupi nekom elementu u viticastim zagradama
{
  let z = 7;
  console.log(z);
}

// Global Scope - mozemo da iskoristimo npr. promenljivu koja se nalazi izvan funkcije u funkciji

// 5.
let realNiz = ["African", "Majmun"];
function listString(array) {
  let find = "African";
  return array.filter((x) => x != find);
}
console.log(listString(realNiz));
