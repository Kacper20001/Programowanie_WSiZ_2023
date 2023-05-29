// function sprawdzWartosc(input) {
//     if (input.value === "") {
//         input.setCustomValidity("Pole jest wymagane.");
//         return false;
//     } else {
//         input.setCustomValidity("");
//         return true;
//     }
// }

// function sprawdzDlugosc(input, length) {
//     if (input.value.length < length) {
//         input.setCustomValidity(`Pole musi zawierać co najmniej ${length} znaków.`);
//         return false;
//     } else {
//         input.setCustomValidity("");
//         return true;
//     }
// }

// function sprawdzEmail(input) {
//     let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     if (!regex.test(input.value)) {
//         input.setCustomValidity("Nieprawidłowy adres email.");
//         return false;
//     } else {
//         input.setCustomValidity("");
//         return true;
//     }
// }

// function sprawdzSileHasla(input) {
//     let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//     if (!regex.test(input.value)) {
//         input.setCustomValidity("Hasło musi zawierać co najmniej 8 znaków, w tym przynajmniej jedną dużą literę, jedną małą literę i jedną cyfrę.");
//         return false;
//     } else {
//         input.setCustomValidity("");
//         return true;
//     }
// }

function sprawdzWartosc(input, error) {
    if (input.value === "") {
        error.textContent = "Pole jest wymagane.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function sprawdzDlugosc(input, length, error) {
    if (input.value.length < length) {
        error.textContent = `Pole musi zawierać co najmniej ${length} znaki.`;
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function sprawdzEmail(input, error) {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regex.test(input.value)) {
        error.textContent = "Nieprawidłowy adres email.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function sprawdzSileHasla(input, error) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!regex.test(input.value)) {
        error.textContent = "Hasło musi zawierać co najmniej 8 znaków, w tym przynajmniej jedną dużą literę, jedną małą literę i jedną cyfrę.";
        return false;
    } else {
        error.textContent = ""
        return true;
    }
}

function sprawdzWiek(input, error) {
    let date = new Date(input.value);
    let now = new Date();
    let age = now.getFullYear() - date.getFullYear();
    if (age < 18) {
        error.textContent = "Musisz mieć co najmniej 18 lat.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function sprawdzPoprawnoscHasel(input, error) {
    if (input.value !== document.getElementById('haslo').value) {
        error.textContent = "Hasła nie są zgodne.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

document.getElementById('formularz').addEventListener('submit', function(event) {
    event.preventDefault();
    let imieInput = document.getElementById('imie');
    let nazwiskoInput = document.getElementById('nazwisko');
    let emailInput = document.getElementById('email');
    let hasloInput = document.getElementById('haslo');
    let wiekInput = document.getElementById('data');
    let sprawdzenieInput = document.getElementById('haslo_sprawdzenie');

    let imieError = document.querySelector('#imie + .error-message');
    let nazwiskoError = document.querySelector('#nazwisko + .error-message');
    let emailError = document.querySelector('#email + .error-message');
    let hasloError = document.querySelector('#haslo + .error-message');
    let wiekError = document.querySelector('#data + .error-message');
    let sprawdzenieError = document.querySelector('#haslo_sprawdzenie + .error-message');

    let isValid = true;

    isValid &= sprawdzWartosc(imieInput, imieError);
    isValid &= sprawdzWartosc(nazwiskoInput, nazwiskoError);
    isValid &= sprawdzWartosc(emailInput, emailError);
    isValid &= sprawdzWartosc(hasloInput, hasloError);
    isValid &= sprawdzWartosc(wiekInput, wiekError);
    isValid &= sprawdzWartosc(sprawdzenieInput, sprawdzenieError);
    
    isValid &= sprawdzDlugosc(imieInput, 2, imieError);
    isValid &= sprawdzDlugosc(nazwiskoInput, 2, nazwiskoError);
    isValid &= sprawdzEmail(emailInput, emailError);
    isValid &= sprawdzSileHasla(hasloInput, hasloError);
    isValid &= sprawdzWiek(wiekInput, wiekError);
    isValid &= sprawdzPoprawnoscHasel(sprawdzenieInput, sprawdzenieError);
    


    if (isValid){
        alert("Formularz jest poprawnie wypełniony!");
    }
});

document.getElementById('telefon').addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, "");
});

document.getElementById('kraj').addEventListener('change', function() {
    document.getElementById('wojewodztwo').disabled = (this.value == '');
});
document.getElementById('wojewodztwo').addEventListener('change', function() {
    document.getElementById('adres').disabled = (this.value === "");
});
document.getElementById('adresTakiSam').addEventListener('change', function() {
document.getElementById('adresKorespondencyjny').disabled = this.checked;
if (this.checked) {
    document.getElementById('adresKorespondencyjny').value = "";
}
});