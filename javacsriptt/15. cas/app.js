// // Metoda da bismo niz prebacili u string
// const newArray = ["ja", "idem", "na", "kurs", "programiranja"];
// const newStr = newArray.join(" ");
// console.log(newStr);

// // Metoda da bismo string prebacili u niz
// const str = "Ja idem u skolu";
// const niz = str.split(" ");

// // 1. Izracunati index telesne mase (bmi = tezina / visina^2)
// // bmi <= 18.5 - mala tezina
// // bmi <= 25.0 - normalno
// // bmi <= 30.0 - prekomerna tezina
// // bmi > 30 - gojazni

// let tezina = 150;
// let visina = 1.88;
// let bmi = tezina / visina ** 2;

// if (bmi <= 18.5) {
//   console.log("Mala tezina");
// } else if (bmi <= 25.0) {
//   console.log("Normalna tezina");
// } else if (bmi <= 30.0) {
//   console.log("Prekomerna tezina");
// } else {
//   console.log("Gojazni");
// }

// // 2. Nadji dve najstarije osobe, godine su date u nizu
// const godine = [0, 1, 45, 50, 20, 25, 18, 16, 65, 30, 80];
// let max = godine[0];
// let secondMax = godine[0];
// for (let i = 0; i < godine.length; i++) {
//   if (godine[i] > max) {
//     secondMax = max;
//     max = godine[i];
//   }
// }
// console.log("Najstarije osobe su:", max, secondMax);

// // 3.
// const porodica = [1, 5, 7, 12, 63, 22];
// const Nekiniz = [];
// let najStariji = porodica[0];
// let najMladji = porodica[0];
// let razlika;
// for (let i = 0; i < porodica.length; i++) {
//   if (porodica[i] > najStariji) {
//     najStariji = porodica[i];
//   }
//   if (porodica[i] < najMladji) {
//     najMladji = porodica[i];
//   }
// }
// razlika = najStariji - najMladji;
// Nekiniz.push(najMladji, najStariji, razlika);
// console.log(Nekiniz);

// // 4.
let zvezdice = "";
let razmak = "";
let brojac = 0;
for (let i = 0; i < 6; i++) {
  razmak = "";
  for (let j = 0; j < 6 - i; j++) {
    razmak += " ";
  }
  zvezdice += "* ";
  console.log(razmak + zvezdice);
}
