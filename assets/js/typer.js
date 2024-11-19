var i = 0;
var txt = 'Advanced Industrial Monitoring'; /* The text */
var speed = 200; 

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typer1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else {
        document.getElementById("typer1").innerHTML = "";
        i = 0;
        setTimeout(typeWriter, 7000);
    }
}