// 1.
humanYears = Number(prompt("Unesite koliko dete ima godina:"));
catYears = 0;
dogYears = 0;
niz = [];

if (humanYears === 1) {
  console.log([1, 15, 15]);
} else if (humanYears === 2) {
  console.log([2, 15 + 9, 15 + 9]);
} else {
  console.log([
    humanYears,
    15 + 9 + (humanYears - 2) * 4,
    15 + 9 + (humanYears - 2) * 5,
  ]);
}

// 2. Proveriti da li je data rec palindrom
str = "anavolimilovana";
isPalindrom = true;
for (i = 0; i <= str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    isPalindrom = false;
    break;
  }
}
if (isPalindrom) {
  console.log("String je palindrom");
} else {
  console.log("String nije palindrom");
}

// 3. Amstrongov broj
broj = Number(prompt("Unesite broj:"));
trecaCifra = broj % 10;
drugaCifra = Math.floor(broj / 10) % 10;
prvaCifra = Math.floor(broj / 100);

amstrongnum = prvaCifra ** 3 + drugaCifra ** 3 + trecaCifra ** 3;

if (broj == amstrongnum) {
  console.log("Ovo je amstrongov broj");
} else {
  console.log("Broj nije amstrongov broj");
}

// 4. Ispisati sve trocifrene broejve cija je suma prve dve cifre veca od trece cifre trocifrenog broja
for (i = 100; i <= 999; i++) {
  prvaCifra = Math.floor(i / 100);
  drugaCifra = Math.floor(i / 10) % 10;
  trecaCifra = i % 10;
  if (prvaCifra + drugaCifra < trecaCifra) {
    continue;
  }
  console.log(i);
}

// 5. Ispisati sve trocifrene brojeve cija je suma cifara jednaka ucitanom broju 20
console.log("-----------------");
x = 20;
for (i = 100; i <= 999; i++) {
  prvaCifra = Math.floor(i / 100);
  drugaCifra = Math.floor(i / 10) % 10;
  trecaCifra = i % 10;
  if (prvaCifra + drugaCifra + trecaCifra === x) {
    console.log(i);
  }
}
