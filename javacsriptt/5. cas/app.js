
// for(i = 0; i<5; i++){
//     console.log(i);
// }

// for(i = 10; i>0; i--){
//     console.log(i);
// }


// 1. Napisati program koji ispisuje 10 prirodnih brojeva
// for(i = 0; i<=10; i++) {
//     console.log(i);
// }


// 2. Naci sumu prvih 10 prirodnih brojeva
// suma = 0;
// for(i = 0; i<=10; i++) {
//     suma+=i;
// }
// console.log(suma);

// 3. Izracunati proizvod prvih 5 brojeva
// proizvod = 1;
// for(i = 1; i<=5; i++){
//     proizvod*=i;
// }
// console.log(proizvod);

// 4. Uneti broj n i sabrati sumu od 1 do n
// n = Number(prompt("Unesite broj n:"));
// suma = 0;
// for(i=1;i<=n;i++){
//     suma+=i;
// }
// console.log(suma);

// 5. Uneti 10 brojeva sa tastature i izracunati sumu i srednju vrednost
// for(i=1;i<=10;i++) {
//     n = Number(prompt("Unesite broj:"));
// }
// suma = 0;
// srednja = 0;
// for(i=1;i<=n;i++) {
//     suma+=i;
//     srednja = suma / 10;
// }
// console.log(suma);
// console.log(srednja);

// 6. Uneti 5 brojeva i za svaki broj ispisati njihov kub.
// for(i=1;i<=5;i++) {
//     a = Number(prompt("Unesite broj:"));
//     console.log(a**3);
// }

// 7. Uneti broj i napisati tablicu mnozenja do 10 za taj broj
// broj = Number(prompt("Unesite broj:"));
// for(i = 1; i<=10; i++) {
//     console.log(broj,'*',i,"--->",broj*i);
// }

// 8. Napisati program koji ispisuje
// *
// **
// ***
// ****
// *****
// zvezdice = "";
// for(i=0;i<5;i++){
//     zvezdice+="*";
//     console.log(zvezdice);
// }


// Domaci 
// 1 zadatak
broj = "";
for(i=1;i<=5;i++){
    broj+=i;
    console.log(broj);
}

// 2 zadatak
brojac = 1;
for(i=1;i<=5;i++){
    bidibou = "";
    for(j=1;j<=i;j++){
        bidibou+=brojac;
    }
    brojac++;
    console.log(bidibou);
}


