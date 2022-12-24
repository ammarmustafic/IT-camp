// Izdvojiti samo jedinstvene elemente niza
niz = [10, 15, 2, 3, 45, 10, 2, 3];
const noviNiz = [];
for (let i = 0; i < niz.length; i++) {
  let isUnique = true;
  for (let j = i + 1; j < niz.length; j++) {
    if (niz[i] === niz[j]) {
      niz[j] = "";
      isUnique = false;
      break;
    }
  }
  if (isUnique && niz[i] != "") {
    noviNiz.push(niz[i]);
  } else {
    continue;
  }
}
console.log(noviNiz);
