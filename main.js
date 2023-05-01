const display = document.querySelector('.display');
const button = document.querySelectorAll('.btn');

button.forEach(
    (btn) => btn.addEventListener('click',  (e) => {
    console.log(e.target);
    btnText = e.target.innerText;
    console.log(btnText);

    if (btnText == "x") {
        btnText = "*";
    }


    display.value += btnText;

})


);

function log() {
    display.value = Math.log(display.valve);
}

function cos() {
    display.value = Math.cos(display.value);
}

function sin() {
    display.value = Math.sin(display.value);
}

function tan() {
    display.value = Math.tan(display.value);
}

function power () {
    display.value = Math.pow(display.value, 2);
}

function clearAll() {
    display.value = " ";
}

function del() {
    display.value = display.value.slice(0,  display.value.length -1);
}
 function equals(){
    display.value = eval(display.value);
 }


function pi() {
    display.value = 3.14159265359;
}

function e() {
    display.value = 2.718281182846;
}

function OFF(){ 
    display.value = " "
}

function solve(){
    display.value = eval(display.value);
}

function raisepow() {
    display.value = Math.pow (display.value, 1)*1000;
}

function ans(){
    display.value = display.value(eval(display.value));
}
