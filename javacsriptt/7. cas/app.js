// uneti broj i proveriti da li je on prost
// brojac = 0;
// n = Number(prompt("Unesite broj:"));
// for(i=1;i<=n;i++){
//     if(n % i === 0) {
//         brojac++;
//    }
// }
// if(brojac > 2) {
//     console.log("Broj nije prost.");
//    } 
//    else {
//     console.log("Broj je prost.");
// }

// proveriti da li je broj savrsen ili nije
// suma = 0;
// a = Number(prompt("Unesite broj:"));
// for(i=1;i<=a/2;i++){
//     if(a % i == 0) {
//         suma+=i;
//     }
// }
// if(suma == a) {
//     console.log("Broj je savrsen.");
// } 
// else {
//     console.log("Broj nije savrsen.");
// }


// indexima i nizovima odnosno mozemo im pristupiti na isti nacin, indexi krecu od 0, takodje i space ima svoj index
// primer: 
// text = "Hello World";
// console.log(text[7]);

// text = "test";
// console.log(text.length); // provera koliko ima karaktera string
// primer 2:
// primer = "Hello World!";
// for(i=0;i<primer.length;i++){
// console.log(primer[i]); // prikaz karaktera jedan po jedan
// }


// zadatak - ispisati string u obrnutom redosledu
// tekst = "jedan dva tri";
// for(i=tekst.length-1;i>=0;i--){
//     console.log(tekst[i]);
// }

// zadatak 2 - proveriti da li je sstring space
// text = "test test";
// for(i=0;i<text.length;i++){
//     if(text[i] == " ") {
//         continue;
//     }
//     console.log(text[i]);
// }

// zadatak 3 - izbaciti space i napisati ceo string
z =  '';
ejalo = "Hello World";
for(i=0;    i<ejalo.length;i++){
    if(ejalo[i] === " "){
        continue;
     }
    z+=ejalo[i];
}
console.log(ejalo);
// proveriti da li su dva stringa ista
n = "Test";
b = "Test";
if(n === b) {
    console.log("Stringovi su isti.");
} 
else {
    console.log("Stringovi nisu isti.");
}