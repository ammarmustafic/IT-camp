// Domaci: Naci najduzu rec u stringu
let nekiString = "Najduziii element u stringu";
let words = nekiString.split(" ");
words.sort((a, b) => b.length - a.length);
console.log(words[0]);
