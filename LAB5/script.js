// //zad.1
// let table = "<table>";
// table += "<tr><td>x</td>";
// for (let i = 1; i <= 10; i++) {
//   table += ("<td>" + i + "</td>");
// }
// table += "</tr>";

// for (let i = 1; i <= 10; i++) {
//   table += "<tr>";
//   table += ("<td>" + i + "</td>");
//   for (let j = 1; j <= 10; j++) {
//     table += ("<td>" + i * j + "</td>");
//   }
//   table += "</tr>";
// }
// table += "</table>";

// document.getElementById("tabelka").innerHTML = table;

//zad.2
// var tablica = [];
// var names = ["Ola", "Ania", "Paweł", "Piotr", "Katarzyna",  "Wiktor", "Magdalena", "Michał", "Kacper", "Szymon", "Przemek", "Marcin", "Natalia", "Żaneta", "Jakub", "Bogdan", "Wojtek","Maciej", "Mateusz"];
// var surnames = ["Kowalski", "Maciejczuk", "Stachurski", "Lewandowski", "Glik", "Żyła", "Rejman", "Mękal", "Bęben", "Gwizdak", "Maląg", "Król", "Piterak", "Machalski", "Kloc", "Bieda", "Najman"];

// for (var i = 0; i < 20; i++) {
//     var gen_name_index = Math.floor(Math.random() * names.length);
//     var gen_surname_index = Math.floor(Math.random() * surnames.length);
//     var gen_phone = Math.floor(Math.random() * (8000000-5000000) + 5000000);
//     var gen_age = Math.floor(Math.random() * (80-18) + 18);


//     var osoba = {
//         "name": names[gen_name_index],
//         "surname": surnames[gen_surname_index],
//         "phone": gen_phone,
//         "age": gen_age
//     };
//     tablica.push(osoba);
// }
// console.log(tablica);

// function show() {
//     var num_of_elem = document.getElementById("get_data_num").value;
//     if (num_of_elem > 20 || num_of_elem <= 0) {
//         num_of_elem = 20;
//     }
//     for (var i = 0; i < num_of_elem; i++) {
//         console.log(tablica[i]);
//     }
//     console.log(num_of_elem);
// }

// zad.3 

var names = ["Ola", "Ania", "Paweł", "Piotr", "Katarzyna",  "Wiktor", "Magdalena", "Michał", "Kacper", "Szymon", "Przemek", "Marcin", "Natalia", "Żaneta", "Jakub", "Bogdan", "Wojtek","Maciej", "Mateusz"];
var surnames = ["Kowalski", "Maciejczuk", "Stachurski", "Lewandowski", "Glik", "Żyła", "Rejman", "Mękal", "Bęben", "Gwizdak", "Maląg", "Król", "Piterak", "Machalski", "Kloc", "Bieda", "Najman"];

var users = [];

for (var j = 0; j < 5; j++) {
    var username_in = Math.floor(Math.random() * names.length);
    var usersurname_in = Math.floor(Math.random() * surnames.length);
    var balance = Math.floor(Math.random() * (50000 - 1000) + 1000);
    var pin = "";
    for (var z = 1; z <= 4; z++) {
      var pin_num = Math.floor(Math.random()*9)+1; 
      pin += pin_num.toString();
    }
    var account_number = j+1;
  
    var user = {
      name: names[username_in],
      surname: surnames[usersurname_in],
      balance: balance,
      pin: pin,
      account_number: account_number
    };
    users.push(user);
  }
  console.log(users);




function login() {
    var enteredPIN = parseInt(document.getElementById("PIN").value);
    for (var i = 0; i < users.length; i++) {
        var correctPin = users[i].pin;
        if (enteredPIN === parseInt(correctPin)) {
            var userInfo = "Witaj, " + users[i].name + " " + users[i].surname + "!<br>Twój numer konta to: " + users[i].account_number + "<br>Twój stan konta wynosi: " + users[i].balance + " zł";
            var newWindow = window.open("private.html");
            setTimeout(function(){
              var element = newWindow.document.getElementById("saldo");  
              element.innerHTML = userInfo;
            },300);
            return i;
        };
    };
    alert("Nieprawidłowy numer PIN. Spróbuj ponownie."); 
};



function wpłać() {
  var dodaj = document.getElementById("kwota");
  var index = login();
  users[index].balance +=  dodaj;
  alert("Wpłata przebiegła pomyślnie");
}

function wypłać() {
  var odejmij = document.getElementById("kwota");
  var index = login()
  if (odejmij <= users[index].balance) {
    users[index].balance -=  odejmij; 
    alert("Wypłata przebiegła pomyślnie");
  } else {
    alert("Brak wystarczającej ilości środków na koncie")
  }
}

function wyloguj() {
  window.location.href = "index.html";
};