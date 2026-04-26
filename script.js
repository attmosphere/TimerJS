"use strict";

let timer_ended;
timer_ended = false;
let seconds_left_number;

function callback(){
    timer_ended = true;
    alert("O tempo acabou!");

}
function update_text(html_element){
    if (!timer_ended){
            console.log(timer_ended);
            let text = "Segundos restantes: " + seconds_left_number;
            html_element.textContent = text;
            console.log(text);
            seconds_left_number-=1
    }
}
function start_timer(seconds){
    let seconds_left_element = document.createElement("p");
    document.body.appendChild(seconds_left_element);
    seconds_left_number = seconds;
    console.log("Função callback vai executar em " + seconds + "segundos");
    setTimeout(callback, seconds*1000); // começa o timer
    update_text(seconds_left_element);
    setInterval(update_text, 1000, seconds_left_element); // keeps us updated
}
function handle_submit(event){ 
    event.preventDefault(); // não permite o envio do formulário
    const seconds = timer_form['timer_seconds'].value;
    start_timer(seconds);
    // alert(`Timer set for ${seconds} seconds!`);
}

const timer_form = document.getElementById("timer_form");
timer_form.addEventListener("submit", handle_submit);