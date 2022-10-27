"use strict";
let namePattern = /[a-z]{1,}/i;
let countryPattern = /[a-z]{1,}/i;
let cityPattern = /[a-z]{1,}/gi;
let housePattern = /[a-z 0-9]{1,}/gi;
let zipPattern = /[A-Z0-9]{1,}/g;
let bankPattern = /[0-9]{4,4}-[0-9]{4,4}-[0-9]{4,4}-[0-9]{4,4}/g;
let codePattern = /[0-9]{3,3}/;
let bankkardnamePattern = /[a-z ]{1,}/gi;
function fizetes() {
    console.log("test");
    let hiba = 0;
    let name = document.getElementById('name');
    if (!namePattern.test(name.value)) {
        hiba++;
        document.getElementById('name').style.backgroundColor = 'rgba(255, 0, 0,)';
    }
    else {
        document.getElementById('name').style.backgroundColor = 'rgba(255, 255, 255,)';
    }
    let country = document.getElementById('nation');
    if (!countryPattern.test(country.value)) {
        hiba++;
        document.getElementById('nation').style.backgroundColor = 'rgba(255, 0, 0,)';
    }
    else {
        document.getElementById('nation').style.backgroundColor = 'rgba(255, 255, 255,)';
    }
    let city = document.getElementById('city');
    if (!cityPattern.test(city.value)) {
        hiba++;
        document.getElementById('city').style.backgroundColor = 'rgba(255, 0, 0,)';
    }
    else {
        document.getElementById('city').style.backgroundColor = 'rgba(255, 255, 255,)';
    }
    let house = document.getElementById('house');
    if (!housePattern.test(house.value)) {
        hiba++;
        document.getElementById('house').style.backgroundColor = 'rgba(255, 0, 0,)';
    }
    else {
        document.getElementById('house').style.backgroundColor = 'rgba(255, 255, 255,)';
    }
    let zip = document.getElementById('zip');
    if (!zipPattern.test(zip.value)) {
        hiba++;
        document.getElementById('zip').style.backgroundColor = 'rgba(255, 0, 0,)';
    }
    else {
        document.getElementById('zip').style.backgroundColor = 'rgba(255, 255, 255,)';
    }
    let bank = document.getElementById('bank');
    if (!bankPattern.test(bank.value)) {
        hiba++;
        document.getElementById('bank').style.backgroundColor = 'rgba(255, 0, 0,)';
    }
    else {
        document.getElementById('bank').style.backgroundColor = 'rgba(255, 255, 255,)';
    }
    let code = document.getElementById('code');
    if (!codePattern.test(code.value)) {
        hiba++;
        document.getElementById('code').style.backgroundColor = 'rgba(255, 0, 0,)';
    }
    else {
        document.getElementById('code').style.backgroundColor = 'rgba(255, 255, 255,)';
    }
    let bkn = document.getElementById('bkn');
    if (!bankkardnamePattern.test(bkn.value)) {
        hiba++;
        document.getElementById('bkn').style.backgroundColor = 'rgba(255, 0, 0,)';
    }
    else {
        document.getElementById('bkn').style.backgroundColor = 'rgba(255, 255, 255,)';
    }
    if (hiba == 0) {
        alert("Sikeres tranzakció");
    }
    else {
        alert("Hibás adat!");
    }
}
;
function init() {
    document.getElementById('fizet').addEventListener('click', fizetes);
}
document.addEventListener('DOMContentLoaded', init);
