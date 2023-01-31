// // 1. Napisati funkciju koja vraca string u kojem je ime zamenjeno prezimenom
function neZnamKakoDaNazovem(str) {
  return console.log(str.split(" ").reverse().join(" "));
}
let str = "Ammar Mustafic";
neZnamKakoDaNazovem(str);

// // 2. Iz recenice vratiti prvo slovo, slovo izmedju prvog i poslednjeg i poslednje slovo, ako je rec manja od 4 slova onda ispisati tu rec
// const input = "Every developer likes to mix kubernets and javascript";

// function imeFunkcije(nesto) {
//   return nesto
//     .split(" ")
//     .map((el) =>
//       el.length > 4 ? el[0] + (el.length - 2) + el[el.length - 1] : el
//     )
//     .join(" ");
// }
// console.log(imeFunkcije(input));

// 3. Imamo niz objekata, treba da nadjemo najmanje godine i najvece godine

const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

najmanji = input[0].age;
najveci = input[0].age;
for (let i = 0; i < input.length; i++) {
  if (input[i].age < najmanji) {
    najmanji = input[i].age;
  }
  if (input[i].age > najveci) {
    najveci = input[i].age;
  }
}
console.log("Najmanje godine su:", najmanji);
console.log("Najvece godine su:", najveci);

// 4. Napisati funkciju koja prihvata niz od 10 brojeva, potrebno je vratiti niz tih brojeva u obliku telefonskog broja
function createNumber(nekiNiz) {
  let format = "(xxx) xxx-xxxx";
  for (let i = 0; i < nekiNiz.length; i++) {
    format = format.replace("x", nekiNiz[i]);
  }
  return console.log(format);
}
niz = [0, 6, 2, 3, 3, 1, 2, 2, 5, 8];
createNumber(niz);
