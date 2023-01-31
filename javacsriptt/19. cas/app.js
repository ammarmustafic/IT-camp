// 1. Napisati program koji ce izlistati samo propertije iz objekta
var student = {
  name: "Ammar Mustafic",
  scalls: "VI",
  rollno: 12,
};

console.log(Object.keys(student).join(", "));

// 2. Napisati funkciju da nam vrati duzinu objekta
var auto = {
  marka: "BMW",
  boja: "crvena",
  km: 200000,
};

function objectLength(zaba) {
  let a = Object.keys(zaba);
  return a.length;
}

console.log(objectLength(auto));

// 3. Naci sumu svih pozitivnih brojeva u nizu
const array = [1, 5, -10, -9, 4, 5, 6, -2, -4];
function sumaPozitivnih(niz) {
  let b = niz.filter((x) => x > 0);
  return console.log(b.reduce((prethodna, trenutna) => prethodna + trenutna));
}
sumaPozitivnih(array);

// 4. Uneti string kao puno ime i prezime uzeti inicijale i prikazati
let string = "Ammar Mustafic";
function inicijalni(str) {
  let arr = str.split(" ");
  return console.log(arr.map((el) => el[0]).join(""));
}
inicijalni(string);

// 5. Svako pocetno ime niza napisati velikim slovom
let nizImena = ["aMMAR", "aHMed", "amIL", "talib"];
function CapitalizeName(arr) {
  return console.log(
    arr.map((el) => el[0].toUpperCase() + el.slice(1, el.length).toLowerCase())
  );
}
CapitalizeName(nizImena);

// 6. Ako je status citanja true, prikazati tekst vec procitano + naziv knjige i autor, u suprotnom morate citati
let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
  {
    author: "Ferid Mehovic",
    title: "Carstvo Zaba",
    readingStatus: false,
  },
];

function readingStatusTrue(nesto) {
  for (let i = 0; i < nesto.length; i++) {
    if (library[i].readingStatus) {
      console.log("Vec procitano", library[i].author, library[i].title);
    } else {
      console.log(
        "Morate citati knjigu",
        library[i].title,
        "od",
        library[i].author
      );
    }
  }
}
readingStatusTrue(library);

let nizB = [10, 15, 45, 65];

for (let element in nizB) {
  console.log(element); // ispisace samo indekse
}

for (let element of nizB) {
  console.log(element); // ispisace se jedan po jedan element
}