// // 1. Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" i veliko i malo
// rec = prompt("Unesite neku rec:");
// brojac = 0;
// for (i = 0; i < rec.length; i++) {
//   if (rec[i].toLowerCase() === "m") {
//     brojac++;
//   }
// }
// console.log("U datom stringu slovo M se pojavljuje", brojac, "puta");

// // 2. Prebrojati koliko ima malih slova u unetom stringu
// str = prompt("Unesite string:");
// brojac = 0;
// for (i = 0; i < str.length; i++) {
//   if (str[i] === str[i].toLowerCase() && str[i] != " ") {
//     brojac++;
//   }
// }
// console.log("U stringu ima", brojac, "malih slova");

// // 3. Ispitati da li u unetom stringu ima vise malih ili velikih slova
// rec = prompt("Unesi neki string:");
// rec1 = prompt("Unesi drugi string:");
// brojac = 0;
// brojac1 = 0;
// for (i = 0; i < rec.length; i++) {
//   if (rec[i] === rec[i].toLowerCase() && rec != " ") {
//     brojac++;
//   }
// }
// for (i = 0; i < rec1.length; i++) {
//   if (rec1[i] === rec1[i].toUpperCase() && rec1 != " ") {
//     brojac1++;
//   }
// }
// if (brojac > brojac1) {
//   console.log("U stringu se nalazi vise malih slova");
// }
// else if (brojac1 > brojac) {
//   console.log("U stringu se nalazi vise velikih slova");
// } else {
//   console.log("Ima ih isto");
// }

// // DEKLARISANJE VARIJABLI
// // Postoji cetiri nacina, 1. var, 2. let, 3. const, 4. nista

//  const broj = 10; (ne mozemo promeniti ovu vrednost)

// // RAZLIKA IZMEDJU VAR I LET *BITNO*
//  if (broj === 10) {
//  var tacno = true;
//  }
//  console.log(tacno);

// // Ukoliko bi koristili var, ispisalo bi nam true, a ukoliko bi stavili let tacno = true, ispisalo bi nam gresku
// // jer se let nalazi samo unutar bloka viticastih zagrada

// // 4. Uneti broj dana i ispisati koji je to dan
// let num = 5;
// const arrayDays = [
//   "Ponedeljak",
//   "Utorak",
//   "Sreda",
//   "Cetvrtak",
//   "Petak",
//   "Subota",
//   "Nedelja",
// ];
// console.log(arrayDays[num - 1]);

// // Preko switcha
// switch (num) {
//   case 1:
//     console.log("Ponedeljak");
//     break;
//   case 2:
//     console.log("Utorak");
//     break;
//   case 3:
//     console.log("Sreda");
//     break;
//   case 4:
//     console.log("Cetvrtak");
//     break;
//   case 5:
//     console.log("Petak");
//     break;
//   case 6:
//     console.log("Subota");
//     break;
//   case 7:
//     console.log("Nedelja");
//     break;
//   default:
//     console.log("Greska");
// }

// // 5. Izdvojiti elemente bez ponavljanja
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

// // Za Domaci: Izdvojiti samo jedinstvene elemente iz niza
