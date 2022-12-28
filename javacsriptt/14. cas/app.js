// 1. Vratiti index trazenog elementa u nizu
const niz = [10, 15, 48, 35];
let element = 48;
for (let i = 0; i < niz.length; i++) {
  if (niz[i] === element) {
    console.log(i);
    break;
  }
}

// 2. Napisati program koji udvostrucuje svaki drugi ceo broj na listi pocevsi sa leve strane
// [1,2,3,4] = [1,4,3,8]

const array = [1, 2, 3, 4];
const noviNiz = [];
for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    noviNiz.push(array[i]);
  }
  if (i % 2 != 0) {
    array[i] *= 2;
    noviNiz.push(array[i]);
  }
}
console.log(noviNiz);

// 3. Dat je string, ako string ima vise velikih slova pretvoriti ceo string u velika slova
// ako se nalazi vise malih pretvoriti ceo string u mala slova
let str = "mAloVelikihImAliH;";
let brojacVelikih = 0;
let brojacMalih = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toLowerCase() && str[i] !== " ") {
    brojacMalih++;
  }
  if (str[i] === str[i].toUpperCase() && str[i] !== " ") {
    brojacVelikih++;
  }
}
if (brojacMalih > brojacVelikih) {
  console.log(str.toLowerCase);
} else {
  console.log(str.toUpperCase);
}

// 4. Napisite program koji uzima niz stringova kao argument i vraca sortirani niz koji sadrzi iste stringove od najkraceg do najduzeg
// Naprimer ako jeo ovaj niz prosledjen ako argument
// ["Teleskopi", "Naocare", "Oci", "Monokli"]
// Vasa funkcija bi vratila sledeci niz
// ["Oci", "Naocare", "Monokli", "Teleskopi"]

const nekiNiz = ["Teleskopi", "Naocare", "Oci", "Monokli"];
const nekiNoviNiz = [];
let c;
for (let i = 0; i < nekiNiz.length; i++) {
  for (let j = i + 1; j < nekiNiz.length; j++) {
    if (nekiNiz[i].length > nekiNiz[j].length) {
      c = nekiNiz[i];
      nekiNiz[i] = nekiNiz[j];
      nekiNiz[j] = c;
    }
  }
}
console.log(nekiNiz);

// 5.
const arrayNumbers = [10, 5, 4, 154, 45, 1, 2, 3, 4, 5];
let b;
let ValueOrindex = "value";
let min = arrayNumbers[0];
let smallestIndex = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
  if (arrayNumbers[i] < min) {
    min = arrayNumbers[i];
    smallestIndex = i;
  }
}

if (ValueOrindex === "value") {
  console.log(min);
} else {
  console.log(smallestIndex);
}
