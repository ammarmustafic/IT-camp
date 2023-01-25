// Domaci: Dat je niz brojeva. Proveriti da li je niz pivot
// Pivot je niz gde je suma svih brojeva sa leve strane jednaka zbiru brojeva sa desne strane
const nizBrojeva = [1, 2, 3, 1, 1, 4];
function pivot(arr) {
  let sumaSaLeve = 0;
  let sumaSaDesne = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    sumaSaLeve += arr[i];
    sumaSaDesne += arr[arr.length - 1 - i];
  }
  if (sumaSaLeve === sumaSaDesne) {
    return "Niz je pivot";
  }
  return "Niz nije pivot";
}
console.log(pivot(nizBrojeva));
