console.log("hello from loaded js")

/*
 *  not working well IOS, fix! 
 */
function plcOnClick() {
    let newWin = window.open("/", "hello", "width=200,height=200");
    newWin.document.write("ZIoT Systems offers an advanced yet straightforward solution for integrating with your Programmable Logic Controllers (PLCs).");
}