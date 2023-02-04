// domaci: isti zadatak samo umesto jednog argumenta imamo niz argumenata koji treba da izbacimo

let geese2 = [
  "Mallard",
  "Hook Bill",
  "African",
  "Crested",
  "Pilgrim",
  "Toulouse",
  "Blue Swedish",
];

function compareArrays(firstArray, secondArray) {
  return firstArray.filter((element) => !secondArray.includes(element));
}

let prvi = [
  "Mallard",
  "Hook Bill",
  "African",
  "Crested",
  "Pilgrim",
  "Toulouse",
  "Blue Swedish",
];
let drugi = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

console.log(compareArrays(prvi, drugi));
