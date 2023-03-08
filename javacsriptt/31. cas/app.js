// async function mojaF() {
//   return "Hello";
// }

// // ako stavimo async ispred, to znaci da ce ova funkcija da nam vrati promise, i to nam je isto kao da pravimo
// // ono return promise u funkciji, await ne ide bez asynca

// mojaF().then((val) => {
//   console.log(val);
// });

// async function myDisplay() {
//   let myPromise = new Promise((resolve, reject) => {
//     resolve("Ispisi mi nesto");
//   });

//   await myPromise.then((v) => {
//     console.log(v);
//   });
// }

// myDisplay();

// // FETCH GET
// // ako ne napisemo ni jednu metodu on ce sam da pretpostavi da je to metoda get, kad nam fetch preuzme podatke
// const fetch = require("node-fetch");
// fetch("https://jsonplaceholder.typicode.com/todos/2")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// // FETCH POST
// const data = {
//   title: "Nova obaveza",
//   completed: false,
// };

// fetch("https://jsonplaceholder.typicode.com/todos", {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//     "Content-Type": "applications/json",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// // FETCH PUT
// const dataPUT = {
//   id: 1,
//   title: "izmenjena obaveza",
//   completed: true,
// };

// fetch("https://jsonplaceholder.typicode.com/todos/1", {
//   method: "PUT",
//   body: JSON.stringify(dataPUT),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// // primer
// fetch("https://run.mocky.io/v3/00269091-a457-4c4f-b160-b7bd8292b352")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// // fetch delete
// fetch("https://jsonplaceholder.typicode.com/todos/1", {
//   method: "DELETE",
// }).then((response) => console.log("Odgovor sa statusom", response.status));

async function fetechData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP greska! Status kod: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const data = await fetechData(url);
  console.log(data);
})();
