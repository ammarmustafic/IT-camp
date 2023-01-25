const osoba = {
  ime: "Ammar",
  prezime: "Mustafic",
  //   imeIprezime: function () {
  //     return this.ime + " " + this.prezime;
  //   },
  //   age: 23,
  //   punoletan: function () {
  //     if (this.age > 18) {
  //       return "DA";
  //     }
  //     return "NE";
  //   },
};

// console.log(osoba.ime); // 1. nacin da ispisemo nesto iz objekta
// console.log(osoba["prezime"]); // 2. nacin da ispisemo nesto iz objekta

// console.log(osoba.imeIprezime());
// console.log(osoba.punoletan());

// da bi izbrisali neki objekat koristimo delete pa npr. delete osoba.ime

console.log(Object.keys(osoba)); // da bi prikazali sve "kljuceve" u nizu
console.log(Object.values(osoba)); // uzimamo vrednosti i prikazujemo u nizu

// Ispisati sve vrednosti iz objekta
const auto = {
  godiste: "2020",
  marka: "BMW",
  boja: "Crvena",
};

// Ako hocemo da dodamo neke propertye u objekat, koristimo npr.
auto.kilometraza = "200000";
console.log(Object.values(auto));

let niz = [10, 15, 45, 65, 5, 1, 2, 6, 5, 8, 7, 9];
// Reduce metoda prolazi kroz ceo niz i uradi ono sto mu zadamo, i vraca nam samo jednu vrednost, treba mu prethodna vrednost, trenutna vrednost i suma?
let suma = niz.reduce((prethodno, trenutno) => prethodno + trenutno * 2, 0); // svaki clan pomnozimo sa 2
console.log(suma);

let sumaSaMap = niz
  .map((x) => x * 2)
  .reduce((prethodni, trenutni) => prethodni + trenutni, 0);

console.log(sumaSaMap);

// 1. Ako se ime nalazi u nizu ispisati na kojem mestu se nalazi, a ako se ne nalazi ispisati sad ce ferid doci
let nizImena = ["Ammar", "Ahmed", "Hattab", "Ferid", "Talib", "Amin", "Ammar"];
function nadjiFerida(arr) {
  if (arr.indexOf("Ferid") === -1) {
    // kada nam je -1 to znaci da se ne nalazi u nizu
    return "Sad ce Ferid doci.";
  }
  return arr.indexOf("Ferid");
}
console.log(nadjiFerida(nizImena));
/* kraj zadatka */

const noviNiz = new Set(nizImena); // ovo set nam ne dozvoljava da imamo duplikate
console.log(noviNiz);
