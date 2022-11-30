// 1. Uneti dva broja i od veceg oduzeti manji i prikazat irezultat 
console.log("-----ZADATAK 1-----");
b = Number(prompt("Unesite broj:"));
a = Number(prompt("Unesite drugi broj:"));
razlika = 0;
if(b > a) { 
    rezultat = b-a;
} 
else if(a > b) {
    rezultat = a-b;
}
else if(a === b) {
console.log("Jednaki su.");
}
else {
    console.log("Greska.");
}
console.log("Rezultat je", rezultat);

// // 2. Uneti tri broja i sortirati ih od najveceg do najmanjeg
b = Number(prompt("Unesite prvi broj:"));
f = Number(prompt("Unesite drugi broj:"));
g = Number(prompt("Unesite treci broj:"));

if(b > f && b > g) {
    console.log(b);
    if(f > g) {
        console.log(f);
        console.log(g);
    } else {
        console.log(g);
        console.log(f);
    }
}

else if(f > b && f > g) {
    console.log(f);
    if(b > g) {
        console.log(b);
        console.log(g);
    } else {
        console.log(g);
        console.log(b);
    }
}

else if(g > b && g > f) {
    console.log(g);
    if(b > f) {
        console.log(b);
        console.log(f);
    } else {
        console.log(f);
        console.log(b);
    }
}
else {
    console.log("Jednaki su.");
}


// 3. zadatak
temperatura = Number(prompt("Unesite temperaturu:"));
if (temperatura < 0) {
    console.log("Smrzavanje."); 
} 
else if (temperatura >= 0 && temperatura < 10) {
    console.log("Veoma hladno.");
} 
else if(temperatura >= 10 && temperatura < 20) {
    console.log("Hladno vreme.");
}
else if(temperatura >=20 && temperatura < 30) {
    console.log("Normalna temperatura.");
} 
else if(temperatura >=30 && temperatura < 40) {
    console.log("Vruce.");
} 
else if (temperatura >= 40) {
    console.log("Veoma vruce.");
} 
else {
    console.log("Greska.");
}

// Uneti duzine starnica trougla i proveriti da li je trougao jednakostratican, jednakokraki ili raznostranicni.
h = Number(prompt("Unesite prvu stranicu:"));
u = Number(prompt("Unesite drugu stranicu:"));
o = Number(prompt("Unesite trecu stranicu:"));

if(h === u && h === o) {
    console.log("Jednakostranican.");
} 
else if(h === u || h === o || u === o) { 
    console.log("Jednakokraki."); 
}
else {
    console.log("Raznostranicni.");
}

// 6. Uneti broj od 1-12 procitati broj i ispisati koji je to mesec i broj dana u tom mesecu
mesec = Number(prompt("Unesite mesec:"));
if(mesec === 1) {
    console.log("Januar je, i ima 31 dan u ovom mesecu.");
} 
else if(mesec === 2) {
    console.log("Februar je, i ima 28 dana u ovom mesecu.");
}
else if(mesec === 3) {
    console.log("Mart je, i ima 31 dan u ovom mesecu.");
}
else if(mesec === 4) {
    console.log("April je, i ima 30 dana u ovom mesecu.");
}
else if(mesec === 5) {
    console.log("Maj je, i ima 31 dan u ovom mesecu.");
}
else if(mesec === 6) {
    console.log("Jun je, i ima 30 dana u ovom mesecu.");
}
else if(mesec === 7) {
    console.log("Jul je, i ima 31 dan u ovom mesecu.");
}
else if(mesec === 8) {
    console.log("Avgust je, i ima 31 dan u ovom mesecu.");
}
else if(mesec === 9) {
    console.log("Septembar je, i ima 30 dana u ovom mesecu.");
}
else if(mesec === 10) {
    console.log("Oktobar je, i ima 31 dan u ovom mesecu.");
}
else if(mesec === 11) {
    console.log("Novembar je, i ima 30 dana u ovom mesecu.");
}
else if(mesec === 12) {
    console.log("Decembar je, i ima 31 dan u ovom mesecu.");
}
else {
    console.log("Greska");
}
