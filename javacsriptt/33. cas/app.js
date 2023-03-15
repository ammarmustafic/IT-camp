// 1.
// let kocka = document.querySelector(".kocka");
// let dugme = document.querySelector(".dugme");
// let brojac = 0;
// let colors = ["red", "blue", "orange", "blueviolet", "purple", "powderblue"];
// let width = ["200px", "250px", "350px", "150px", "300px"];

// function promenaboje() {
//   let index = Math.floor(Math.random() * colors.length);
//   let nesto = Math.floor(Math.random() * width.length);
//   kocka.style.backgroundColor = colors[index];
//   kocka.style.width = width[nesto];
// }

// 2.
// let kocka = document.querySelector(".kocka");
// let input = document.querySelector(".inp");
// function pogodibroj() {
//   let broj = Math.floor(Math.random() * 5);
//   if (input.value == "") {
//     alert("Morate uneti neki broj");
//   } else if (input.value == broj) {
//     var x = document.createElement("P");
//     var t = document.createTextNode(`Pogodio si broj ${broj}`);
//     x.appendChild(t);
//     document.body.appendChild(x);
//     kocka.style.backgroundColor = "green";
//   } else {
//     var x = document.createElement("P");
//     var t = document.createTextNode(`Nisi pogodio broj, ${broj}`);
//     x.appendChild(t);
//     document.body.appendChild(x);
//     kocka.style.backgroundColor = "red";
//   }
// }

// 3.
let unos = document.querySelector(".inp");
let glavni = document.querySelector(".container");
function dodaj() {
  let div = document.createElement("div");
  div.className = "item";
  glavni.appendChild(div);
}
