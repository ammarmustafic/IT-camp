// 1. nacin
const str = "Ja idem u skolu";
let poslednji = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    poslednjiRazmak = i;
  }
}
console.log(str.length - poslednjiRazmak - 1);

// 2. nacin
const niz = str.split(" "); // split sluzi da string prebaci u niz
console.log(niz[niz.length - 1].length);
