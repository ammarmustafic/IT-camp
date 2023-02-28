// CLOSURE - UGNJEZDENE FUNKCIJE - vracamo funkciju kao rezultat neke druge funkcije
function myFunc() {
  let a = 4;
  return a * a;
}

// ako promenljiva nije deklarisana, onda ona po defaultu postaje var
function add() {
  let counter = 0;
  function plus() {
    counter += 1;
  }
  return plus;
}

let brojac = add();
brojac();
brojac();
brojac();

// rezultat ce bit 3 zato sto smo gore stavili return, i zbog toga on ne krece od pocetka vec krece od pocetka te druge funkc

let noviBrojac = add();
noviBrojac();

// ovde ce rezultat bit 1, jer ne pozivamo vise brojac funkc

(function () {
  let counter = 0;
  return function () {
    coutner += 1;
    return counter;
  };
})();

// ovo su funkcije IIEF, tj. ova funkcija ce da se kreira u memoriji, i ispisace se, cim dodje do kraja ona se brise iz memorije

function izracunaj(x) {
  function pomnozi(y) {
    return x * y;
  }
  return pomnozi;
}

let rezultat = izracunaj(10);
rezultat(5);

// zadaci sa csbin
// CHALLENGE 1
function createFunction() {
  return function () {
    console.log("Hello");
  };
}
// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
  return function () {
    console.log(input);
  };
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter("sample");
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter("hello");
printHello(); // => should console.log('hello');

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;

    console.log("counter", counter);
  }
  return incrementCounter;
}
const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();

function addByX(x) {
  function add(y) {
    console.log(x + y);
  }
  return add;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9
