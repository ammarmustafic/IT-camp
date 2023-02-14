// // asihroni js moze da se radi preko: callbacka, promisa i async / await

// //callstack nam skladisti funkcije, odnosno kojim redosledom ce funkcija da se izvrsava, ona koja je na vrhu ona ce prva da se izvrsi
// // ako bismo pozvali obe funkcije, prvo se prva izvrsi i izlazi iz callstacka, posle se druga dodaje na callstack, izvrsava se i izlazi iz callstacka

// function prva() {
//   console.log("prva");
// }
// function druga() {
//   console.log("druga");
//   prva();
// }

// druga();

// // callback je funkcija koja se poziva kao argument neke druge funkcije - npr:

// // function pozdrav(name) {
// //   console.log("Hello", name);
// // }

// // function processUserInput(b) {
// //   const ime = prompt("Unesite ime:");
// //   return b(ime);
// // }
// // processUserInput(pozdrav);

// // 1. napraviti funkciju koja ce da pomnozi dva broja i posle druga funkcija koja vraca rezultate

// function pomnozi(a, b) {
//   return a * b;
// }

// function callback(c) {
//   return c(6, 7);
// }

// console.log(callback(pomnozi));

// 2. proveriti da li je paran ili nije

function ProveraParan(a) {
  return a % 2 === 0 ? true : false;
}

function nekiCallback(arr, nesto) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (nesto(arr[i])) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}
let niz = [1, 7, 5, 4, 9, 17, 2];
const rezultat = nekiCallback(niz, ProveraParan);
console.log(rezultat);
