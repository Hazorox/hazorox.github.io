//Variables Declaring
const display=document.getElementById('display');
const num = document.getElementsByClassName('number');
// const plus= document.getElementsByClassName('plus');
// const min= document.getElementsByClassName('min');
// const x = document.getElementsByClassName('x');
// const div = document.getElementsByClassName('div');
const op=document.getElementsByClassName('operator');
const result = document.getElementById('result');
const clear = document.getElementById('C');


//Functions and Events
clear.addEventListener('click',()=>display.innerText="");
num[0].addEventListener('click', () => display.innerText += "1");
num[1].addEventListener('click', () => display.innerText += "2");
num[2].addEventListener('click', () => display.innerText += "3");
num[3].addEventListener('click', () => display.innerText += "4");
num[4].addEventListener('click', () => display.innerText += "5");
num[5].addEventListener('click', () => display.innerText += "6");
num[6].addEventListener('click', () => display.innerText += "7");
num[7].addEventListener('click',()=>display.innerText+="8");
num[8].addEventListener('click', () => display.innerText += "9");
num[9].addEventListener('click', () => display.innerText += "0");

op[0].addEventListener('click',()=>display.innerText+="/");
op[1].addEventListener('click', () => display.innerText += "*");
op[2].addEventListener('click', () => display.innerText += "-");
op[3].addEventListener('click', () => display.innerText += "+");

result.addEventListener('click',function(){
    display.textContent=eval(display.textContent)
} )


