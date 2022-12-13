// Uneti string i proveriti da li je on prazan, ako je prazan da ispisemo string je prazan, ako nije onda da ispisemo koliko ima karaktera
nekitekst = prompt("Unesite neki string:");
if(nekitekst.length == 0) {
    console.log("String je prazan.");
} else {
    console.log("Duzina stringa je:",nekitekst.length);
}


// Uneti string koji sadrzi mala i velika slova, mala slova pretvoriti u velika, a velika u mala
nesto = prompt("Unesite neki string:");
novistring = "";
for(i=0;i<nesto.length;i++) {
    if(nesto[i] === nesto[i].toUpperCase()){
        novistring+=nesto[i].toLowerCase();
    }
    else {
        novistring+=nesto[i].toUpperCase();
    }
}
console.log(novistring);


// N I Z O V I 

cars = [ "BMW", "Audi", "Mercedes" ];
console.log(cars[0]);

// metoda za dodavanje elemenata u niz
cars.push("Golf");
console.log(cars);

// metoda za uklanjanje poslednjeg elementa iz niza
cars.pop();
console.log(cars);

// ispisivanje svih elemenata niza
for(i=0;i<cars.length;i++) {
    console.log(cars[i]);
}


// 1. Napraviti duzi niz, i ispisati obrnutim redosledom
console.log("-----ZADATAK 1-----");
newCars = [];
cars2 = [ "Nissan", "Porsche", "Lamborghini", "Fiat", "Ford", "Dodge", "Hyundai"];
for(i=cars2.length-1;i>=0;i--){
    newCars.push(cars2[i]);
}
console.log(newCars);

// 2. Naci najveci i najmanji element niza
niz = [5, 6, 9, 2, 1];
max = niz[0];
min = niz[0];
for(i=0;i<niz.length;i++){
    if(niz[i] > max) {
        max = niz[i];
    }
    
    if (niz[i] < min) {
        min = niz[i];
    }
}
console.log("Najveci element niza je:",max);
console.log("Najmanji element niza je:",min);

// 3. Naci parne i neparne elemente niza i ispisati ih
niz1 = [];
niz2 = [];
for(i=0;i<niz.length;i++){
    if(niz[i] % 2 === 0){
        niz1.push(niz[i]);
    }
    else {
        niz2.push(niz[i]);
    }
}

console.log("Parni elementi niza su:",niz1);
console.log("Neparni elementi niza su:",niz2);