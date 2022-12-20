// // 1. Dat je niz i granicna vrednost, proveriti da li su sve vrednosti u nizu ispod ili iznad granicne vrednosti, ispisati true ako su ispod, false ako su iznad
// niz = [5, 7, 12, 14, 3, 99];
// granica = 100;
// ispodGranice = true;
// for (i = 0; i < niz.length; i++) {
//   if (niz[i] > granica) {
//     ispodGranice = false;
//     break;
//   }
// }
// console.log(ispodGranice);

// // 2. Ako je duzina reci veca od 10 karaktera, ispisati njeno prvo slovo, poslednje slovo i broj karaktera koji je izmedju.
// // Ako je duzina manja od 10, ispisati tu rec.
// word = prompt("Unesite neku rec:");
// if (word.length > 10) {
//   console.log(word[0], word.length - 2, word[word.length - 1]);
// } else {
//   console.log(word);
// }

// 3. Ispisati zbir negativnih elemenata niza, broj pozitivnih elemenata niza a ukoliko je prazan niz ispisati prazan niz.
// niz = [15, 12, -5, -6, 1, 2, 4, -17];
// zbirnegativnih = 0;
// niz1 = [];
// brojac = 0;
// for (i = 0; i < niz.length; i++) {
//   if (niz[i] == "") {
//     console.log("Prazan niz");
//   }
//   if (niz[i] < 0) {
//     zbirnegativnih += niz[i];
//   }
//   if (niz[i] > 0) {
//     brojac++;
//   }
// }
// niz1.push(zbirnegativnih);
// niz1.push(brojac);
// console.log(niz1);

// 4. Uneti dva stringa, vratiti niz u obliku kraci + dugi + kraci
a = prompt("Unesite neku rec:");
b = prompt("Unesite drugu rec:");
if (a.length > b.length) {
  console.log(b, a, b);
} else if (b.length > a.length) {
  console.log(a, b, a);
} else if (a.length === b.length) {
  console.log("Isti su");
} else {
  console.log("Greska");
}
