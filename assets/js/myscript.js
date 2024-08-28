console.log("hello from loaded js")


function plcOnClick() {
    let newWin = window.open("about:blank", "hello", "width=200,height=200");
    newWin.document.write("Hello, world!");
}