// 1. Uneti broj i proveriti da li je broj pozitivan ili negativan
console.log("-----ZADATAK 1-----");
broj = prompt("Unesite broj:");
if(broj > 0) {
    console.log("Broj je pozitivan.");
}
else if(broj === 0) {
    console.log("Broj je jednak nuli.");
}
else {
    console.log("Broj je negativan.");
}
console.log("\n");

// 2. Uneti dva broja i proveriti da li su jednaka, ispisati rezultat u konzoli.
console.log("-----ZADATAK 2-----");
a = prompt("Unesite prvi broj:");
b = prompt("Unesite drugi broj:");
if (a === b) {
    console.log("Brojevi su jednaki.");
} 
else {
    console.log("Brojevi nisu jednaki.");
}
console.log("\n");

// 3. Uneti broj od 1 do 7 i ispisati koji je dan taj uneti broj
console.log("-----ZADATAK 3-----"); 
dan = Number(prompt("Unesite dan u nedelji:"));
if (dan === 1){
    console.log("Ponedeljak je."); 
} else if(dan === 2) {
    console.log("Utorak je.");
} else if(dan === 3) {
    console.log("Sreda je.");
} else if(dan === 4) {
    console.log("Cetvrtak je.");
} else if(dan === 5) {
    console.log("Petak je.");
} else if(dan === 6) {
    console.log("Subota je.");
} else if(dan === 7) {
    console.log("Nedelja je.");
} else {
    console.log("Uneli ste pogresan broj.");
}
console.log("\n");

// 4. Uneti broj i proveriti da li je paran ili neparan
console.log("-----ZADATAK 4-----"); 
c = Number(prompt("Unesite broj:"));
if (c % 2 == 0) {
    console.log("Broj je paran."); 
} else if(c % 2 == 1) {
    console.log("Broj je neparan.");
} else {
    console.log("Greska.");
}
console.log("\n");

// 5. Uneti broj m i procitati vrednost. n je 1 kada je m vece od 0, n je 0 kada je m 0 i -1 kada je m manje od 0
console.log("-----ZADATAK 5-----"); 
m = Number(prompt("Unesite broj:"));
if(m > 0) {
    n = 1;
} else if(m == 0) {
    n = 0;
} else if(m < 0) {
    n = -1;
}
console.log("Vrednost n je:",n);
console.log("\n");

// 6. Uneti tri broja i ispisati najveci broj
console.log("-----ZADATAK 6-----"); 
f = Number(prompt("Unesite prvi broj:"));
g = Number(prompt("Unesite drugi broj:"));
l = Number(prompt("Unesite treci broj:"));

if (f > g && f > l) {
    console.log("Najveci broj je:", f);
} else if(g > f && g > l) {
    console.log("Najveci broj je:", g);
} else if(l > g && l > f){
    console.log("Najveci broj je:", l);
}