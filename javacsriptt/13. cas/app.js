// // Ternary operator (skracena if funkcija)
// n = 5;
// str = n % 2 === 0 ? "Paran" : "Neparan";
// // Prvo se pise uslov, pa onda znak pitanja i posle znaka pitanja ide true vrednost, zatim dve tacke pa false vrednost.
// console.log(str);

// // 1. Ako je poslednja cifra trocifrenog broja manja od 5 dodati 2, ako je veca od 5 oduzeti 5.
// a = 156;
// ispis = a % 10 < 5 ? console.log((a += 2)) : console.log((a -= 5));

// // 2. Nadji prestupne godine
// let start = 1000;
// let end = 2022;
// for (let i = start; i < end; i++) {
//   if (i % 4 === 0 && i % 100 != 0) {
//     console.log(i, "godina je prestupna");
//   } else if (i % 400 === 0) {
//     console.log(i, "godina je prestupna");
//   } else {
//     continue;
//   }
// }

// // 3. Sortirati niz od najmanjeg do najveceg
// let array = [10, 7, 14, 12, 5, 1];
// let c;
// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] > array[j]) {
//       c = array[i];
//       array[i] = array[j];
//       array[j] = c;
//     }
//   }
// }
// console.log(array);

// // 4. Iz unetog stringa izdvojiti N znakova sa leve strane
// // Npr 'Pera ima devojku' i N = 6, dobija se 'Pera i'
// // Ako je N vece od duzine stringa ispisati ceo string

let nekistr = "Pera ima devojku";
let noviString = "";
let n = 6;
for (let i = 0; i < n; i++) {
  if (n > nekistr.length) {
    console.log(nekistr);
    break;
  }
  noviString += nekistr[i];
}
console.log(noviString);
