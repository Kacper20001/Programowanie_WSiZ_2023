// 1: Stwórz klasę Prostokąt, posiadającą atrybuty : wysokość, szerokość, nazwa
// a) Stwórz konstruktor parametrowy definiujący wszystkie atrybuty klasy
// b) Stwórz 3 obiekty tej klasy
// c) Stwórz metodę, obliczająca obwód danego prostokąta
// d) Stwórz metodę, obliczająca pole danego prostokąta
// e) Stwórz metodę porównująca dwa prostokąty i zwracającą ten obiekt który ma większe
// pole

//zad.1
class Prostokat {

    constructor(wysokosc, szerokosc, nazwa) {
        this.wysokosc = wysokosc;
        this.szerokosc = szerokosc;
        this.nazwa = nazwa;
    }
    wypisz() {
        console.log(`Wysokość to: ${this.wysokosc}`);
        console.log(`Szerokość to: ${this.szerokosc}`);
        console.log(`Nazwa to: ${this.nazwa}`);
    }
    //metody i funkcje nazywamy czsownikami
    oblicz_obw() {
        let obw = (this.wysokosc + this.szerokosc) * 2;
        return obw 
    }

    oblicz_pole() {
        let pole = (this.wysokosc * this.szerokosc);
        return pole
    }

    static porownaj(p1, p2) {
        if (p1.oblicz_pole() > p2.oblicz_pole()) {
            return p1;
        } else {
            return p2;
        }
    }
    // Zadanie 6: Napisz metodę która zmieni nazwę prostokąta, na nazwę podaną jako argument.

    static zmien_nazwe(prostokat, nowaNazwa) {
        prostokat.nazwa = nowaNazwa;
    }
}
const prostokat1 = new Prostokat(10,4,"Prostokąt1");
const prostokat2 = new Prostokat(6,3,"Prostokąt2");
const prostokat3 = new Prostokat(8,2,"Prostokąt3");

Prostokat.zmien_nazwe(prostokat1, "Zmieniona");
console.log(prostokat1.nazwa);

// console.log(prostokat1.oblicz_obw());

// console.log(Prostokat.porownaj(prostokat1, prostokat2));

// Zadanie 2: Stwórz klasę Trójkąt, posiadającą atrybuty : wysokość, długość podstawy i nazwa
// a) Stwórz konstruktor parametrowy definiujący wszystkie atrybuty klasy
// b) Stwórz 3 obiekty tej klasy
// c) Stwórz metodę, obliczająca pole danego trójkąta
// d) Stwórz metodę porównująca dwa trójkąty i zwracającą ten obiekt który ma większe pole

class Trojkat {

    constructor(wysokosc, podstawa, nazwa) {
        this.wysokosc = wysokosc;
        this.podstawa = podstawa;
        this.nazwa = nazwa;
    }
    wypisz() {
        console.log(`Wysokość to: ${this.wysokosc}`);
        console.log(`Podstawa to: ${this.podstawa}`);
        console.log(`Nazwa to: ${this.nazwa}`);
    }

    oblicz_pole() {
        let pole = (this.wysokosc * this.podstawa) / 2;
        return pole
    }

    static porownaj(p1, p2) {
        if (p1.oblicz_pole() > p2.oblicz_pole()) {
            return p1;
        } else {
            return p2;
        }
    }
}

const trojkat1 = new Trojkat(10,4,"Trójkąt1");
const trojkat2 = new Trojkat(6,3,"Trójkąt2");
const trojkat3 = new Trojkat(8,2,"Trójkąt3");

// console.log(trojkat1.oblicz_pole());
// console.log(Trojkat.porownaj(trojkat1, trojkat2));

// Zadanie 3: Stwórz klasę Trapez, posiadającą atrybuty: wysokość, podstawa1, podstawa2 i
// nazwa
// a) Stwórz konstruktor parametrowy definiujący wszystkie atrybuty klasy
// b) Stwórz 3 obiekty tej klasy
// c) Stwórz metodą obliczającą pole danego trapezu



class Trapez {

    constructor(wysokosc, podstawa1, podstawa2, nazwa) {
        this.wysokosc = wysokosc;
        this.podstawa1 = podstawa1;
        this.podstawa2 = podstawa2;
        this.nazwa = nazwa;
    }
    wypisz() {
        console.log(`Wysokość to: ${this.wysokosc}`);
        console.log(`Dlugosc 1 podstawy to: ${this.podstawa1}`);
        console.log(`Dlugosc drugiej podstawy to: ${this.podstawa2}`);
        console.log(`Nazwa to: ${this.nazwa}`);
        
    }

    oblicz_pole() {
        let pole = ((this.podstawa1 + this.podstawa2) * this.wysokosc) / 2;
        return pole
    }

    static porownaj(p1, p2) {
        if (p1.oblicz_pole() > p2.oblicz_pole()) {
            return p1;
        } else {
            return p2;
        }
    }
}

const trapez1 = new Trapez(4,6,12,"Trapez1");
const trapez2 = new Trapez(6,3,10,"Trapez2");
const trapez3 = new Trapez(4,10, 20,"Trapez3");


// console.log(trapez1.oblicz_pole());
// console.log(Trapez.porownaj(trapez1, trapez2));


// Zadanie 4: Napisz funkcję która pobierze prostokąt, trójkąt oraz trapez, a następnie wypisze
// na ekran pole i nazwę największej figury.


function zwroc_wieksza(prostokat, trojkat, trapez) {
    if (prostokat.oblicz_pole() > trojkat.oblicz_pole() && prostokat.oblicz_pole() > trapez.oblicz_pole()) {
        console.log(prostokat.nazwa, prostokat.pole);
    } else if (trojkat.oblicz_pole() > prostokat.oblicz_pole() && trojkat.oblicz_pole() > trapez.oblicz_pole()) {
        console.log(trojkat.nazwa, trojkat.pole);
    } else {
        console.log(trapez.nazwa, trapez.pole)
    }
}

//Zadanie 5: Napisz funkcję która w parametrach pobierze dwa prostokąty i zwróci ten obiekt
// który ma większy obwód.


function zwroc_wiek_prost(obw1, obw2) {
    if (obw1.oblicz_obw() > obw2.oblicz_obw()){
        return obw1;
    } else if (obw1.oblicz_obw() < obw2.oblicz_obw()) {
        return obw2 ;
    } else {
        console.log("Obwody są sobie równe");
    }
}

const obw1 = new Prostokat(4,6,"Prostokat4");
const obw2 = new Prostokat(2,3,"Prostokat5");


// console.log(zwroc_wiek_prost(obw1,obw2));

//Zadanie 6 zostało wykoanane w rozwiązaniu zadania 1