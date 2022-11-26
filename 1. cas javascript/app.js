// Primitivni:
// string 
// Number
// bollean
// undefined
// null 
// Symbol

//Razlika izmedju ova dva tipa je u tome sto ovi drugi imaju svoju referencu (npr. neki string)i pokazivače, dok kod primitivnih imamo direktnu vrednost npr. a = 5.

// Referentni:
// array 
// Object
// function


//string
text = "Srbija pobedjuje Brazil!";
console.log(text);

//number
broj = 25;
console.log(broj);

console.log(typeof text);
console.log(typeof broj);

//bolean - moze biti ture ili false
polozenHTML = true;
console.log(polozenHTML);

imePrezime = "Ammar Mustafic";


//undefined
let age;
console.log(age);

let nekiTekst = null;
console.log(nekiTekst);

ime = "Ammar";
prezime = "Mustafic";

imePrezime = ime +  ' ' + prezime;
console.log(imePrezime);

noviTekst = ime + 5;


// logicki operatori
// && - operator i, || - operator ili, ! - operator not


console.log("-----AND-----");
// ako ima jedno false, ispisace se false
console.log(true && true);  // bice true
console.log(true && false); // bice false
console.log(false && true); // bice false
console.log(false && false); // bice false


console.log("------ILI------");
// potrebno je samo jedno true, da bi se ispisalo true
console.log(true || true); // bice true
console.log(true || false); // bice true 
console.log(false || false); // bice false;


console.log("-----Negacija-----");
console.log(!true); // bice false
console.log(!false); // bice true


// poredjenje
console.log("-----Poredjenje-----");
prviBroj = 10;
drugiBroj = 15;


// == - uporedjuje samo vrednost
console.log(prviBroj == drugiBroj); // prvi nacin i ispisace se samo false, drugi nacin je if funkcija


// === - uporedjuje i vrednost i tip
console.log(prviBroj === drugiBroj); // ispisace false


// != - negacija poredjenja i uporedjuje samo vrednost
console.log(prviBroj!=drugiBroj); // ispisace false 


//!== - negacija poredjenja uporedjuje i vrednost i tip
console.log(prviBroj !== drugiBroj);  // ispisace true
