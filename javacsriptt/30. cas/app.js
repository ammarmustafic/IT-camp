// ovo je json - koristi se za fetchovanje podataka itd.
const nesto = {
  ime: "Ammar",
  prezime: "Mustafic",
};

// get metoda nam sluzi da pokupimo neke podatke, npr. uzmemo sa servera u obliku jsona i mozemo da koristimo na nasoj stranici
// post metoda sluzi da posaljemo neke podatke, npr. ako hocemo da se registrujemo moramo da ubacimo neke inf. preko te metode uzmemo i posaljemo
// put metoda nam sluzi da izmenimo neke podatke
// delete metoda nam sluzi da izbrisemo neke podatke

// metode za json:
// JSON.stringify;  uzima nas objekat pretvara ga u json i onda taj json pretvara u string
// JSON.parse; radi suprotnu stvar

let str = JSON.stringify(nesto);
console.log(str);

const json = '{"ime":"Ammar","prezime":"Mustafic","godine":88}';
const objekat = JSON.parse(json);
console.log(objekat);

// PROMISI

const nekiNaziv = new Promise(() => {
  console.log("Ispisi nesto");
});

// promis moze biti nedefinisan, izvrsen ili odbijen

// ako hocemo da uzmemo neku vrednost iz promisa i da radimo nesto sa njom onda pisemo npr.
// nekiNaziv.then

// ako hocemo da uhvatimo gresku, onda koristimo
// nekiNaziv.catch

let p = new Promise((resolve, reject) => {
  let a = 2;
  if (a == 2) {
    resolve("sucess");
  } else {
    reject("failed");
  }
});

p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is in the catch" + message);
});

// 1.
let a = new Promise((reject, resolve) => {
  let god = 12;
  if (god >= 18) {
    resolve("punoletna je osoba");
  } else {
    reject("osoba je maloletna");
  }
});

a.then((message) => {
  console.log("Odgovor za then " + message);
}).catch((message) => {
  console.log("Odgovor za catch " + message);
});

// ovo message nam je ono sto nam vrati promise

// 2.
function wait() {
  return new Promise((resolve, reject) => {
    let c = 17;

    setTimeout(() => {
      resolve("Proslo je dve sekunde");
    }, 2000);
    setTimeout(() => {
      reject("Broj je neparan");
    }, 2000);
  });
}

wait().then((value) => {
  console.log("Koliko je proslo? " + value);
});

// 3.
function aaa(broj) {
  return new Promise((resolve, reject) => {
    if (broj > 0) {
      resolve(`broj je pozitivan ${broj}`);
    } else {
      reject(`broj je negativan ${broj}`);
    }
  });
}

aaa(1)
  .then((vrednost) => {
    console.log("then", vrednost);
  })
  .catch((vrednost) => {
    console.log("catch", vrednost);
  });
