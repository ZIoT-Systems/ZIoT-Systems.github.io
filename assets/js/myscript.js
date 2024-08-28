console.log("hello from loaded js")


function plcOnClick() {
    let newWin = window.open("PLC Integration", "hello", "width=200,height=200");
    newWin.document.write("works great with PLCs!");
}