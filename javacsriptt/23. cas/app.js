const person = {
  firstName: "Ammar",
  lastName: "Mustafic",
  age: 16,
  firstandLastName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.firstandLastName());

Object.freeze(person); // metoda s kojom ne mozemo da dodajemo vrednosti, niti da brisemo postojece, tj ovo cini objekat zamrznutim
Object.seal(person); // metoda koja nije striktna kao freeze,ne mozemo da brisemo ni da dodajemo, ali mozemo da menjamo tj. seal je kao zapecatljeni niz

// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).
const myCar = {
  id: 1,
  marka: "Audi",
  model: "a4",
  boja: "Crvena",
  pogon: "prednji",
  menjac: "automatski",
  kontakt: [0622222, 02033322],
  servis: {
    datum: "04,maj",
    km: 23000,
    serviser: "Pasovic",
  },
  udaran: true,
};

myCar.trenutnaBrzina = 0;
myCar.maksimalnaBrzina = 260;
myCar.povecanjeBrzine = function (ubrzanje) {
  if (this.trenutnaBrzina + ubrzanje > this.maksimalnaBrzina) {
    return "Nije moguce povecati brzinu za datu vrednost";
  } else {
    return (this.trenutnaBrzina += ubrzanje);
  }
};
myCar.povecanjeBrzine(100);
myCar.povecanjeBrzine(200);

myCar.smanjenjeBrzine = function (smanjenje) {
  if (this.trenutnaBrzina - smanjenje < 0) {
    return "Nije moguce smanjiti brzinu za datu vrednost";
  } else {
    return (this.trenutnaBrzina -= smanjenje);
  }
};
myCar.smanjenjeBrzine(50);

myCar.koci = function () {
  return (this.trenutnaBrzina = 0);
};
console.log(myCar);

const ammar = {
  firstName: "Ammar",
  lastName: "Mustafic",
  language: "Srpski",
  setLanguage: function (newLanguage) {
    return (this.language = newLanguage);
  },
  setNickName: function () {
    return (
      this.firstName[0].toUpperCase() +
      this.firstName[1].toLowerCase +
      this.lastName[0].toLowerCase +
      this.lastName[1].toLowerCase
    );
  },
};
