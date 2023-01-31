// Pronadji slovo koje fali, npr [a,b,c,d,f] -> e

function findMissingLetter(array) {
  let abeceda = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let abec =
    array[0] === array[0].toUpperCase()
      ? abeceda.toUpperCase()
      : abeceda.toLowerCase();
  let findFirst = abeceda.indexOf(array[0]);

  for (let i = 0; i < array.length; i++) {
    if (abec[findFirst + i] !== array[i]) {
      return console.log(abec[findFirst + 1]);
    }
  }
}
let niz = ["A", "B", "C", "D", "E"];
findMissingLetter(niz);
