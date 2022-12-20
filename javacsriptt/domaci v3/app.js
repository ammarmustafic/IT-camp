//  Proveriti da li je data rec izogram
rec = prompt("Unesite neku rec:");
isIsogram = true;
rec = rec.toLowerCase();
for (i = 0; i < rec.length; i++) {
  k = rec[i];
  for (j = i + 1; j < rec.length; j++) {
    if (k === rec[j]) {
      isIsogram = false;
      break;
    }
  }
}
if (isIsogram) {
  console.log("Data rec je izogram");
} else {
  console.log("Data rec nije izogram");
}

// Ispisati sve delioce broja x
x = Number(prompt("Unesite broj:"));
niz = [];
for (i = 1; i <= x; i++) {
  if (x % i == 0) {
    niz.push(i);
  }
}
console.log("Delioci broja x su:", niz);
