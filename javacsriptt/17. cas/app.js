function niz(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
const array = [10, 15, 5, 16];
niz(array);

const saberiDvaBroja = (first, second) => first + second;

console.log(saberiDvaBroja(10, 15));

// 1. Koristiti metode i kvadrirati svaki elemet niza
const nizBrojeva = [2, 17, 14, 44, 22, 28];
console.log(nizBrojeva.map((x) => x ** 2));

// 2. Izdvojiti samo parne elemente niza
const drugiNiz = [8, 2, 18, 4, 44, 99, 55, 66, 122];
console.log(drugiNiz.filter((y) => y % 2 == 0));

// 3. Izdvojiti elemente koji su veci od 10
const treciNiz = [17, 2, 1, 4, 88, 2, 17];
console.log(treciNiz.filter((y) => y > 10));

// 4. Izdvojiti iz niza elemente bez ponavljanja
const arrayNumbers = [10, 15, 45, 10, 65, 78, 98, 45, 15];
function UniqueArray(arr) {
  const unique = [];
  for (let i = 0; i < arrayNumbers.length; i++) {
    if (unique.includes(arrayNumbers[i])) {
      continue;
    }
    unique.push(arrayNumbers[i]);
  }
  return unique;
}
console.log(UniqueArray(arrayNumbers));

// 5. Implemetirajte funkciju koja uzima kao argument stringa i vraca niz stavki bez elemenata sa istom vrednoscu jedan
// pored drugog i sa ocuvanjem originalnog
uniqueInOrder = "AAABBBCCDAABB";
function Funkcija(uniqueInOrder) {
  uniqueIspis = [];
  for (let i = 0; i < uniqueInOrder.length; i++) {
    if (uniqueInOrder[i] === uniqueInOrder[i + 1]) {
      continue;
    }
    uniqueIspis.push(uniqueInOrder[i]);
  }
  return uniqueIspis;
}
console.log(Funkcija(uniqueInOrder));

// Domaci: Dat je niz brojeva. Proveriti da li je niz pivot
// Pivot je niz gde je suma svih brojeva sa leve strane jednaka zbiru brojeva sa desne strane
