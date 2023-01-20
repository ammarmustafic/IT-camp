let arrayNumbers = [10, 15, 12, 15];

// M E T O D E

// pop() - uklanja poslednji element iz niza, npr.
let izbrisana = arrayNumbers.pop();
console.log(arrayNumbers);

// push() - dodaje novi element na kraju niza
arrayNumbers.push(20);
console.log(arrayNumbers);

//toLowerCase() - da sve prebaci u mala slova
let str = "Danas je drugi cas drugog ciklusa.";
console.log(str.toLowerCase());

//toUpperCase() - da sve prebaci u velika slova
let novistr = "Neki novi string.";
console.log(novistr.toUpperCase());

//concat() - metoda za sastavljanje dva niza ili dva stringa
let str1 = "Hello";
let str2 = "World!";
let newString = str1.concat(str2);
console.log(newString);

let array1 = ["a", "b", "c", "d"];
let array2 = ["e", "f", "g", "h"];
let abeceda = array1.concat(array2);
console.log(abeceda);

// trim() - da uklonimo space sa pocetka i kraja stringa
const exampleTrim = "                  CENTAR NIT                            ";
console.log(exampleTrim.trim());

// slice(start,end) - ona nam sluzi da uzmemo deo nekog niza ili stringa, start uzima i prikazuje, end ne prikazuje
const exampleSlice = "Hello World!";
console.log(exampleSlice.slice(2, 6));

// substring(start,end) - izdvaja karaktere i vraca kao novi string
const exampleSubstring = "Neki tekst";
console.log(exampleSubstring.substring(2, 4));

// unshift() - dodaje element na pocetku niza
const exampleUnshift = [10, 15, 16, 70];
exampleUnshift.unshift(44);
console.log(exampleUnshift);

// shift() - uklanja element sa pocetka niza
const exampleShift = [17, 12, 4, 3, 10];
exampleShift.shift();
console.log(exampleShift);

// includes() - proveravamo da li se neki element nalazi u nizu ili stringu, vraca true ili false
const exampleIncludes = [15, 45, 66, 1, 3, 1, 2];
console.log(exampleIncludes.includes(1));

const exampleIncludes2 = "nesto";
console.log(exampleIncludes2.includes("e"));

// split() - string prebacuje u niz
const exampleSplit = "Danas je drugi cas";
console.log(exampleSplit.split(""));

// join() - niz da prebaci u string
const exampleJoin = ["Danas", "je", "drugi", "cas"];
console.log(exampleJoin.join(" "));

// replace(ono sto hocemo da zamenimo,to sto hocemo umesto toga) - da zameni neki elemnet
const exampleReplace = "Danas je drugi cas";
console.log(exampleReplace.replace("Danas", "Sutra"));

const exampleReplace2 = "Ucrrrrrrrrrrrrrrrrrrrrrrrrrrrr programiranje";
console.log(exampleReplace2.replaceAll("r", "i"));

// map(argument, sta zelimo da radimo sa tim argumentom) - vraca nam ceo niz, ali sa izmenama koje mi zadajemo
const exampleMap = [17, 12, 4, 1, 3, 1, 2];
console.log(exampleMap.map((x) => x * 2));

const exampleMap2 = [12, 24, 48, 64, 26];
console.log(exampleMap2.map((x) => x / 2));

// sort() - da sortira
let exampleSort = [24, 2, 66, 71, 1, 2, 3];
console.log(exampleSort.sort());
let exampleSortString = ["Jabuka", "Ananas", "Kruska", "Zaba"];
console.log(exampleSortString.sort()); // sortirace po abecedi -.-

// reverse() - ispisuje niz u obrnutom redosledu
let exampleReverse = [1, 5, 6, 33, 36, 102, 4];
console.log(exampleReverse.reverse());

//charAt() - da prikaze karakter na nekoj poziciji
let exampleCharAt = "Nestooooo";
console.log(exampleCharAt.charAt(5));

// filter() - filtrira neki niz na osnovu cega mu mi zadamo
let exampleFilter = [10, 5, 6, 7, 8, 9, 17, 88];
console.log(exampleFilter.filter((x) => x % 2 == 0)); // nema elemenata koji ne ispunjavaju uslov

// indexOf() - vraca nam index trazenog elementa
let exampleIndexOf = [17, 22, 44, 11, 77];
console.log(exampleIndexOf.indexOf(44));

// pozeljno bi bilo istraziti metode: map, reduce itd..
