let namePattern = /[a-z]{1,}/i;
let countryPattern = /[a-z]{1,}/i;
let cityPattern = /[a-z]{1,}/gi;
let housePattern = /[a-z 0-9]{1,}/gi;
let zipPattern = /[A-Z0-9]{1,}/g;
let bankPattern = /[0-9]{4,4}-[0-9]{4,4}-[0-9]{4,4}-[0-9]{4,4}/g;
let codePattern = /[0-9]{3,3}/;
let bankkardnamePattern = /[a-z ]{1,}/gi

function fizetes(){
let hiba :number = 0;
if(namePattern.test("")==false){
    hiba++;
}
if(countryPattern.test("")==false){
    hiba++;
}  
if(cityPattern.test("")==false){
    hiba++;
}  
if(housePattern.test("")==false){
    hiba++;
}  
if(zipPattern.test("")==false){
    hiba++;
}  
if(bankPattern.test("")==false){
    hiba++;
}  
if(codePattern.test("")==false){
    hiba++;
}       
if(bankkardnamePattern.test("")==false){
    hiba++;
}
if(hiba==0){
    console.log("Sikeres tranzakció");
}else{
    console.log("Hibás adat!");
}
};
function init() {
    document.getElementById('submit')!.addEventListener('click',fizetes);
};
document.addEventListener('DOMContentLoaded',init);