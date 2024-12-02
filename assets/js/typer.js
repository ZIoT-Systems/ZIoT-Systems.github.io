var i = 0;
var txt = 'Advanced Industrial Monitoring'; 

function typeWriter() {
    var speed = 100;
    if (i == -1) {
        document.getElementById("typer1").innerHTML = "";
        i = 0;
    }
    else if (i < txt.length) {
        document.getElementById("typer1").innerHTML += txt.charAt(i);
        i++;
    }
    else {
        i = -1;
        speed = 10000;
    }
    setTimeout(typeWriter, speed);
}