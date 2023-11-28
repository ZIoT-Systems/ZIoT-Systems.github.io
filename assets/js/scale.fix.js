(function(document) {
    var metas = document.getElementsByTagName('meta'),
        changeViewportContent = function(content) {
            for (var i = 0; i < metas.length; i++) {
                if (metas[i].name == "viewport") {
                    metas[i].content = content;
                }
            }
        },
        initialize = function() {
            changeViewportContent("width=device-width, minimum-scale=0.25, maximum-scale=1.6");
        },
        gestureStart = function() {
            changeViewportContent("width=device-width, minimum-scale=0.25, maximum-scale=1.6");
        },
        gestureEnd = function() {
            initialize();
        };

    if (navigator.userAgent.match(/iPhone/i)) {
        initialize();
        document.addEventListener("touchstart", gestureStart, false);
        document.addEventListener("touchend", gestureEnd, false);
    }

})(document);

function myFormFunc() {
    var firstName = document.getElementById("inputFirstName").value;
    var lastName = document.getElementById("inputLastName").value;
    var email = document.getElementById("inputEmail1").value;
    var questions = document.getElementById("inputTextarea1").value;

    //  check for null
    if (!firstName || !lastName || !email || !questions)
    {
        alert("Error With User Data!\nPlease try again");
        return;
    }

    console.log(firstName + ", " + lastName + ", " + email + "\n" + questions);
    alert("Thanks For The Message!");
}
