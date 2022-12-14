// // 1. Ukloniti element sa bilo koje pozicije iz niza
// n = Number(prompt("Unesite broj elementa koji zelite da uklonite:"));
// niz = [1, 2, 5, 7, 12, 16];
// niz1 = [];

// for(i=0;i<niz.length;i++){
//     if( i===n ) {   
//         continue;
//     }
//     niz1.push(niz[i]);
// }
// console.log(niz1);


// // 2
// niz = [10,15,4,3,6,7,10,12,13,12];
// niz1 = [];
// n = 3;
// for(i=n;i<niz.length;i++){
//     niz1.push(niz[i]);
// }
// for(i=0;i<n;i++) {
//     niz1.push(niz[i]);
// }
// console.log(niz1);


// // 3. Dat je mesec kao ceo broj od 1 do 12, vratiti kom kvartalu godine pripada kao ceo broj

// n = Number(prompt("Unesite broj:"));
// if(n <=3) {
//     console.log("Ovo pripada prvom kvartalu.");
// }
// else if(n<=6) {
//     console.log("Ovo pripada drugom kvartalu.");
// }
// else if(n<=9) {
//     console.log("Ovo pripada trecem kvartalu.");
// }
// else if(n<=12) {
//     console.log("Ovo pripada cetvrtom kvartalu.");
// }
// else {
//     console.log("Greska");
// }



// 4. Naci par sa datom sumom u nizu
// niz = [10,4,2,3,5,6,7,15,11];
// suma = 15;
// for(i=0;i<niz.length;i++){
//     for(j=i+1;j<niz.length;j++){
//     if(niz[i] === niz[j]) {
//         console.log("Isti su na:",i,j); 
//     }
//     if(niz[i] + niz[j] ===   suma) {
//         console.log("Suma je jednaka na pozicijama:",i,j);
//     }
//     } 
// }

// 5. Naci koji elementi u nizu su propusteni
niz = [1, 2, 4, 5, 6, 7, 8, 9] 
for(i=0;i<niz.length;i++){
    if(niz[i+ 1] - niz[i] == 1) {
        continue;
    }
    else {
    console.log("Broj koji nedostaje je",niz[i] + 1);
}
}