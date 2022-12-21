// 1. Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" i veliko i malo
rec = prompt("Unesite neku rec:");
brojac = 0;
for (i = 0; i < rec.length; i++) {
  if (rec[i].toLowerCase() === "m") {
    brojac++;
  }
}
console.log("U datom stringu slovo M se pojavljuje", brojac, "puta");

// 2. Prebrojati koliko ima malih slova u unetom stringu
str = prompt("Unesite string:");
brojacM = 0;
for (i = 0; i < str.length; i++) {
  if (str[i] === str[i].toLowerCase() && str[i] != " ") {
    brojacM++;
  }
}
console.log("U stringu ima", brojac, "malih slova");

// 3. Ispitati da li u unetom stringu ima vise malih ili velikih slova
rec = prompt("Unesi neki string:");
rec1 = prompt("Unesi drugi string:");
brojacMs = 0;
brojacMv = 0;
for (i = 0; i < rec.length; i++) {
  if (rec[i] === rec[i].toLowerCase() && rec != " ") {
    brojaMs++;
  }
}
for (i = 0; i < rec1.length; i++) {
  if (rec1[i] === rec1[i].toUpperCase() && rec1 != " ") {
    brojacMv++;
  }
}
if (brojacMs > brojacMv) {
  console.log("U stringu se nalazi vise malih slova");
} else if (brojacMv > brojaMs) {
  console.log("U stringu se nalazi vise velikih slova");
} else {
  console.log("Ima ih isto");
}

// DEKLARISANJE VARIJABLI
// Postoji cetiri nacina, 1. var, 2. let, 3. const, 4. nista

const broj = 10; // (ne mozemo promeniti ovu vrednost)

// RAZLIKA IZMEDJU VAR I LET *BITNO*
if (broj === 10) {
  var tacno = true;
}
console.log(tacno);

// Ukoliko bi koristili var, ispisalo bi nam true, a ukoliko bi stavili let tacno = true, ispisalo bi nam gresku
// jer se let nalazi samo unutar bloka viticastih zagrada

// 4. Uneti broj dana i ispisati koji je to dan
let num = 5;
const arrayDays = [
  "Ponedeljak",
  "Utorak",
  "Sreda",
  "Cetvrtak",
  "Petak",
  "Subota",
  "Nedelja",
];
console.log(arrayDays[num - 1]);

// Preko switcha
switch (num) {
  case 1:
    console.log("Ponedeljak");
    break;
  case 2:
    console.log("Utorak");
    break;
  case 3:
    console.log("Sreda");
    break;
  case 4:
    console.log("Cetvrtak");
    break;
  case 5:
    console.log("Petak");
    break;
  case 6:
    console.log("Subota");
    break;
  case 7:
    console.log("Nedelja");
    break;
  default:
    console.log("Greska");
}

// 5. Izdvojiti elemente bez ponavljanja
const niz = [10, 15, 2, 3, 10, 13, 3, 45, 2];
const noviNiz = [];
for (let i = 0; i < niz.length; i++) {
  let isInside = false;
  for (let j = 0; j < noviNiz.length; j++) {
    if (niz[i] === noviNiz[j]) {
      isInside = true;
      break;
    }
  }
  if (isInside) {
    continue;
  } else {
    noviNiz.push(niz[i]);
  }
}
console.log(noviNiz);

//  6. Unose se dva stringa A i B. Kreairati novi string kao kombinaciju stringova A i B.
//  tako sto se kombinuju prvi sa prvim, drugi sa drugim, treci sa trecim znakom itd..
//  Ako je jedan string duzi od drugog, na kraju samo dodati znakove viska.

let str = "Pera";
let b = "sladoled";
let newStr = "";
let duzina = 0;

if (str.length > b.length) {
  duzina = str.length;
} else if (b.length > str.length) {
  duzina = b.length;
}

for (let i = 0; i < duzina; i++) {
  if (str[i] === undefined) {
    newStr += b[i];
    continue;
  }
  if (b[i] === undefined) {
    newStr += str[i];
    continue;
  }
  newStr += str[i] + b[i];
}
console.log(newStr);
// Za Domaci: Izdvojiti samo jedinstvene elemente niza
