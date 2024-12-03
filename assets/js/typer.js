var i = 0;
var str_idx = 0;
var all_txt = [
    'Advanced Industrial Monitoring',
    'Empowering Smarter Operations',
    'Insightful, Reliable, Scalable',
   ]; 

function typeWriter() {
    var txt = all_txt[str_idx];    
    var speed = 100;
    if (txt === undefined || txt === null) {
        str_idx = 0;
        txt = all_txt[str_idx];
    }

    if (i == -1) {
        document.getElementById("typer1").innerHTML = "";
        i = 0;
        if (str_idx < 3)
            str_idx++;
        else
            str_idx = 0;
    }
    else if (i < txt.length) {
        document.getElementById("typer1").innerHTML += txt.charAt(i);
        i++;
    }
    else {
        i = -1;
        speed = 5000;
    }
    setTimeout(typeWriter, speed);
}