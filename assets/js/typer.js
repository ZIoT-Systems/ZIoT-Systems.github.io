var i = 0;
var txt = 'Advanced Industrial Monitoring'; /* The text */
var speed = 100; 

function typeWriter() {
    if (i == -1) {
        document.getElementById("typer1").innerHTML = "";
        i = 0;
        setTimeout(typeWriter, speed);
    }
    else if (i < txt.length) {
        document.getElementById("typer1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else {
        i = -1;
        setTimeout(typeWriter, 10000);
    }
}