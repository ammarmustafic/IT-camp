// // FizzBuzz - zadatak 1
// // ako je broj deljiv sa 3 ispisati fizz, ako je broj deljiv sa 5, ispisati buzz, a ako je deljiv i sa 3 i sa 5 ispisati fizzbuzz, ako nije deljiv ispisati taj broj
// for(broj = 1; broj<=100; broj++){
// if(broj % 3 == 0 && broj % 5 == 0) {
//     console.log("FizzBuzz");
// }
// else if(broj % 3 == 0) {
//     console.log("Fizz");
// }
// else if(broj % 5 == 0) {
//     console.log("Buzz");
// }
// else {
//     console.log(broj);
// }
// }   

// zadatak 2 - Ispisati brojeve od 1 do 10, ali da izuzmemo 5 
// for(broj = 1; broj<=10; broj++){
//     if(broj == 5) {
//         break; // preskace samo jednu interakciju, dok continue zavrsava celu for petlju.
//     }
//     else {
//         console.log(broj);
//     }
// }

// zadatak 3 - Sabrati parne brojeve od 1 do 100
// rezultat = 0;
// for(broj=1;broj<=100;broj++){
//     if(broj % 2 == 0){
//         rezultat+=broj;
//     }
// } console.log(rezultat);

// // 2 nacin
// suma = 0;
// for(i=0;i<=100;i+=2){
//     suma+=i;
// }
// console.log(suma);


// zadatak 4 - naci faktorijel od nekog broja
broj = 1;
for(i = 1; i <= 7; i++) {
    broj*=i;
}
console.log(broj);