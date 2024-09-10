console.log("hello from loaded js");
console.log("hello from loaded js - this is a test");

/*
 *  not working well IOS, fix! 
 */
function plcOnClick() {
    let newWin = window.open("/", "hello", "width=200,height=200");
    newWin.document.write("ZIoT Systems offers an advanced yet straightforward solution for integrating with your Programmable Logic Controllers (PLCs).");
}

function myHide(str) {
    let ele = document.getElementById(str);
    if (window.getComputedStyle(ele).display === "none") {
        // show the element
        ele.style.display = "block";
    }
    else {
        // hide the element
        ele.style.display = "none";
    }
    console.log("got a click!");
}