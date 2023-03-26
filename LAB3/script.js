var a = 10; 
var b = 20; 
var c = 23.2;

let dodawanie = a + b + c;
alert("dodawanie = " + dodawanie);

let odejmowanie = c - b;
alert("odejmowanie = " + odejmowanie);

let mnożenie = c * a;
alert("mnożenie = " + mnożenie);

let dzielenie = b / a;
alert("dzielenie = " + dzielenie);

document.getElementById("p-mnozenie").innerHTML="mnożenie = " + mnożenie;
document.getElementById("p-dodawanie").innerHTML="dodawanie = " + dodawanie;
document.getElementById("p-dzielenie").innerHTML="dzielenie = " + dzielenie;

var imie = prompt("Podaj imię");
alert("Hello " + imie);

var a1 = prompt("podaj bok a");
a1 = parseFloat(a1);
var b1 = prompt("podaj bok b");
b1 = parseFloat(b1);
var c1 = prompt("podaj bok c");
c1 = parseFloat(c1);


var p = (a1 + b1 + c1)/2;
let P = Math.sqrt(p*(p-a1)*(p-b1)*(p-c1));

document.getElementById("Pole").innerHTML="Pole trójkąta wynosi = " + P;


var przycisk = document.querySelector("#losuj"); 
przycisk.addEventListener("click", function(){
  var los = Math.floor(Math.random()*5)+1;
  var wylosowana = prompt("Spróbuj odgadnąć liczbę całkowitą z zakresu od 1 do 5 ");
  wylosowana = parseInt(wylosowana);

  if (wylosowana === los) {
    alert("Dobra robota");
  } else {
    alert("Nie pasuje");
  }
})

var liczba1 = parseInt(prompt("Podaj pierwszą liczbę:"));
var liczba2 = parseInt(prompt("Podaj drugą liczbę:"));
var liczba3 = parseInt(prompt("Podaj trzecią liczbę:"));


let max = liczba1;
if (liczba2 > max) {
  max = liczba2;
}
if (liczba3 > max) {
  max = liczba3;
}

alert("Największa liczba to: " + max);



