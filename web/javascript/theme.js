function saveThemeSettings() {
    var txtclr = document.getElementById("txtClr").value;
    var bgclr = document.getElementById("bgClr").value;

    localStorage.setItem("textClr", txtclr)
    localStorage.setItem("backgroundClr", bgclr)

    applyTheme();

}

applyTheme();
function applyTheme() {
    
    var txtClr = localStorage.getItem("textClr")
    var bgClr = localStorage.getItem("backgroundClr");

    if (!txtClr) {
        console.log("Error: Text color is not defined")
    }

    if (!bgClr) {
        console.log("Error: Background color is not defined")
    }

    document.body.style.color = txtClr;
    document.body.style.backgroundColor = bgClr;

}