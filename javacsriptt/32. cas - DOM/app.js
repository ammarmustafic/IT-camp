// // 1. nacin - preko id smo preuzeli vrednost pomocu id-a, i id je jedinstven
// let naslov = document.getElementById("naslov");
// console.log("Ovo je preko ID:", naslov.innerText);
// // kada stavimo naslov.innerTet to znaci da smo preuzeli ono sto pise u nasem h1

// naslov.style.color = "red";
// naslov.style.fontSize = "4rem";

// //2. nacin - preuzeli smo vrednost pomocu klase - to nam predstavlja neku listu
// let naslovClass = document.getElementsByClassName("nas");
// console.log("Ovo je preko klase:", naslovClass);

// // 3. nacin - preuzimamo vrednost pomocu taga
// let naslovByTag = document.getElementsByTagName("h1");
// console.log("Ovo je preko taga:", naslovByTag);

// // 4. nacin - query selector on uzima prvi na koji naidje, on je najpopularniji nacin, osim ako nam ne treba lista el.
// let naslovByQuery = document.querySelector(".nas");
// console.log("Ovo je preko query selectora - jedna vrednost:", naslovByQuery);

// // 5. nacin moze da uzme i sve, ovako:
// let naslovByQueryAll = document.querySelectorAll(".nas");
// console.log("Ovo je preko query selectora - vise vrednosti:", naslovByQueryAll);

// //----------------------------------------------------------------------------------------------//

// let lista = document.getElementsByClassName(".lista");
// lista[0].style.color = "violet"; // npr ako hocemo prvom da promenimo

// // ako hocemo da promenimo sve elemente:
// for (let i = 0; i < lista.length; i++) {
//   lista[i].style.color = "blue";
//   lista[i].style.fontSize = "2rem";
// }

// let dugme = document.querySelector("button");
// dugme.addEventListener("mouseover", () => {
//   naslov.style.color = "purple";
//   naslov.style.fontSize = "2rem";
//   naslov.innerText = "Promena";
// });

// dugme.addEventListener("mouseout", () => {
//   naslov.style.color = "red";
//   naslov.style.fontSize = "4rem";
//   naslov.innerText = "Naslov";
// });

// let lis = document.querySelector(".lis");
// let item2 = document.createElement("li");
// item2.innerText = "Item2";
// list.appendChild(item2);

let povecaj = document.querySelector(".pov");
let smanji = document.querySelector(".sma");
let broj = document.querySelector(".brojac");

let brojac = 0;
broj.innerText = brojac;

povecaj.addEventListener("click", () => {
  brojac++;
  broj.innerText = brojac;
});

function smanjif() {
  brojac--;
  brojac.innerText = brojac;
}

localStorage.setItem("name", "Ammar");
let ime = localStorage.getItem("name");
console.log(ime);
localStorage.removeItem("name");
console.log(ime);

let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");
let card = document.querySelector(".card");

btn.addEventListener("click", () => {
  if (inp.value === "") {
    alert("Unesite nesto u input");
  } else {
    let h = document.createElement("h1");
    h.innerText = inp.value;
    card.appendChild(h);
    inp.value = "";
  }
});
