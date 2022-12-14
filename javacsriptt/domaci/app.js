niz = [5, 2, 4, 6, 10, 12, 1];
max = niz[0];
min = niz[0];
prosecna = 0;
a = 0;

for(i=0;i<niz.length;i++) {
    if(niz[i] > max) {
        max = niz[i];
    }
    if(niz[i] < min) {
        min = niz[i];
    }
}

for(i=0;i<niz.length;i++){
    if(niz[i] !== min && niz[i] !== max) {
        a+=niz[i];
    }
}
prosecna = a / (niz.length - 2);
console.log("Prosecna vrednost niza je:",prosecna);