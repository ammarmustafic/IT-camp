n = Number(prompt("Unesite trocifreni broj:"));
if (n < 100 || n > 999) {
  console.log("Broj nije trocifren.");
} else if (n % 10 > 5) {
  n -= 5;
} else {
  n += 2;
}
console.log(n);
