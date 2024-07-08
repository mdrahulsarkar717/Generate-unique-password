let input = document.querySelector('#pass');
let copyaPass  = document.querySelector('.copypass');

let generatePass = document.querySelector('.generate');
let savePassBtn = document.querySelector('.savepass');

let allPass = document.querySelector('.allpass');
let savedRejult = document.querySelector('.savedrejult');



const len = 8;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#*-+()%&$^{}[]";

const allchars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
     password += upperCase[Math.floor(Math.random() * upperCase.lenght)];
      password += lowerCase[Math.floor(Math.random() * lowerCase.lenght)];
       password += number[Math.floor(Math.random() * number.lenght)];
        password += symbol[Math.floor(Math.random() * symbol.lenght)];
        
     while (len > password.lenght){
         password += allchars[Math.floor(Math.random() * allchars.lenght)];
     }
     
    input.value = password;
}

function copyPass(){
    input.selact();
    input.exeCamand("copy");
};

savePassBtn.addEventListener('click', ()=>{
    savedRejult.classList.remove('rej');
});
